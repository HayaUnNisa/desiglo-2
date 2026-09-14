import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readRawBody(
  req: VercelRequest,
): Promise<Buffer> {
  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(
      Buffer.isBuffer(chunk)
        ? chunk
        : Buffer.from(chunk),
    );
  }

  return Buffer.concat(chunks);
}

function safeCompare(
  a: string,
  b: string,
) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (
    aBuffer.length !==
    bBuffer.length
  ) {
    return false;
  }

  return crypto.timingSafeEqual(
    aBuffer,
    bBuffer,
  );
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const supabaseUrl =
      process.env.SUPABASE_URL;

    const supabaseSecretKey =
      process.env.SUPABASE_SECRET_KEY;

    const webhookSecret =
      process.env
        .SAFEPAY_WEBHOOK_SECRET;

    if (
      !supabaseUrl ||
      !supabaseSecretKey ||
      !webhookSecret
    ) {
      console.error(
        "Webhook environment variables missing",
      );

      return res.status(500).json({
        error:
          "Server configuration error",
      });
    }

    /*
      SafePay requires signature
      verification against the
      original raw request body.
    */

    const rawBody =
      await readRawBody(req);

    const signatureHeader =
      req.headers[
        "x-sfpy-signature"
      ];

    if (
      !signatureHeader ||
      Array.isArray(signatureHeader)
    ) {
      console.error(
        "Safepay webhook signature missing",
      );

      return res.status(400).json({
        error:
          "Missing webhook signature",
      });
    }

    /*
      SafePay docs specify:

      HMAC-SHA512(
        raw webhook payload,
        webhook shared secret
      )
    */

    const expectedSignature =
      crypto
        .createHmac(
          "sha512",
          webhookSecret,
        )
        .update(rawBody)
        .digest("hex");

    const signatureValid =
      safeCompare(
        signatureHeader,
        expectedSignature,
      );

    if (!signatureValid) {
      console.error(
        "Invalid Safepay webhook signature",
        {
          signatureLength:
            signatureHeader.length,
          expectedLength:
            expectedSignature.length,
        },
      );

      return res.status(400).json({
        error:
          "Invalid webhook signature",
      });
    }

    /*
      Signature is valid.
      Now parse the webhook.
    */

    const event =
      JSON.parse(
        rawBody.toString("utf8"),
      );

    const eventType =
      event?.type ?? null;

    const data =
      event?.data ?? null;

    const tracker =
      data?.tracker ?? null;

    const paymentState =
      data?.state ?? null;

    console.log(
      "Safepay webhook verified",
      {
        eventType,
        paymentState,
        trackerPresent:
          Boolean(tracker),
      },
    );

    /*
      Ignore webhook events
      without a tracker.
    */

    if (!tracker) {
      return res.status(200).json({
        received: true,
        ignored: true,
        reason:
          "No tracker found",
      });
    }

    /*
      SafePay 2.0.0 success event.
    */

    if (
      eventType !==
      "payment.succeeded"
    ) {
      return res.status(200).json({
        received: true,
        ignored: true,
        eventType,
      });
    }

    const supabase =
      createClient(
        supabaseUrl,
        supabaseSecretKey,
      );

    /*
      Match SafePay tracker
      with the payment request
      created earlier.
    */

    const {
      data: paymentRequest,
      error: lookupError,
    } = await supabase
      .from("payment_requests")
      .select(`
        id,
        status,
        safepay_reference
      `)
      .eq(
        "safepay_reference",
        tracker,
      )
      .maybeSingle();

    if (lookupError) {
      console.error(
        "Supabase webhook lookup error:",
        lookupError,
      );

      return res.status(500).json({
        error:
          "Unable to retrieve payment request",
      });
    }

    /*
      A SafePay test webhook may
      contain a fake tracker.

      In that case acknowledge it
      without failing.
    */

    if (!paymentRequest) {
      console.log(
        "No payment request matches Safepay tracker",
        {
          tracker,
        },
      );

      return res.status(200).json({
        received: true,
        matched: false,
      });
    }

    /*
      SafePay can retry events.
      Don't update twice.
    */

    if (
      paymentRequest.status ===
      "paid"
    ) {
      return res.status(200).json({
        received: true,
        alreadyPaid: true,
      });
    }

    const {
      data: updatedPayment,
      error: updateError,
    } = await supabase
      .from("payment_requests")
      .update({
        status: "paid",
        paid_at:
          new Date().toISOString(),
      })
      .eq(
        "id",
        paymentRequest.id,
      )
      .eq(
        "status",
        "unpaid",
      )
      .select("id, status, paid_at")
      .maybeSingle();

    if (updateError) {
      console.error(
        "Supabase payment update error:",
        updateError,
      );

      return res.status(500).json({
        error:
          "Unable to update payment",
      });
    }

    /*
      If another webhook already
      updated it between lookup
      and update.
    */

    if (!updatedPayment) {
      return res.status(200).json({
        received: true,
        alreadyProcessed: true,
      });
    }

    console.log(
      "Desiglo payment marked paid",
      {
        paymentRequestId:
          updatedPayment.id,
      },
    );

    return res.status(200).json({
      received: true,
      paid: true,
    });
  } catch (error) {
    console.error(
      "Safepay webhook error:",
      error,
    );

    return res.status(500).json({
      error:
        "Webhook processing failed",
    });
  }
}