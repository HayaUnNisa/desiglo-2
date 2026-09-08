import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readRawBody(req: VercelRequest): Promise<Buffer> {
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

function safeCompare(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
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
      process.env.SAFEPAY_WEBHOOK_SECRET;

    if (
      !supabaseUrl ||
      !supabaseSecretKey ||
      !webhookSecret
    ) {
      console.error(
        "Webhook environment variables missing",
      );

      return res.status(500).json({
        error: "Server configuration error",
      });
    }

    /*
      IMPORTANT:
      Safepay webhook verification must use
      the original raw request body.
    */

    const rawBody =
      await readRawBody(req);

    const signatureHeader =
      req.headers["x-sfpy-signature"];

    if (
      !signatureHeader ||
      Array.isArray(signatureHeader)
    ) {
      console.error(
        "Safepay webhook signature missing",
      );

      return res.status(400).json({
        error: "Missing webhook signature",
      });
    }

    /*
      Current Safepay webhook systems may also
      provide X-SFPY-TIMESTAMP.

      If present, verify:
      timestamp + "." + raw body

      Otherwise fall back to raw body verification
      for the legacy checkout webhook format.
    */

    const timestampHeader =
      req.headers["x-sfpy-timestamp"];

    let signingPayload: Buffer;

    if (
      timestampHeader &&
      !Array.isArray(timestampHeader)
    ) {
      signingPayload = Buffer.concat([
        Buffer.from(
          `${timestampHeader}.`,
          "utf8",
        ),
        rawBody,
      ]);
    } else {
      signingPayload = rawBody;
    }

    /*
      Safepay endpoint secrets may be provided
      as hexadecimal/plain secrets depending
      on the webhook system.

      Start with the dashboard secret exactly
      as supplied.
    */

    const expectedHex =
      crypto
        .createHmac(
          "sha256",
          webhookSecret,
        )
        .update(signingPayload)
        .digest("hex");

    const expectedWithPrefix =
      `sha256=${expectedHex}`;

    const signatureValid =
      safeCompare(
        signatureHeader,
        expectedHex,
      ) ||
      safeCompare(
        signatureHeader,
        expectedWithPrefix,
      );

    if (!signatureValid) {
      console.error(
        "Invalid Safepay webhook signature",
      );

      return res.status(400).json({
        error:
          "Invalid webhook signature",
      });
    }

    const event =
      JSON.parse(rawBody.toString("utf8"));

    /*
      Safepay has used more than one webhook
      payload format over time, so normalize
      both common structures.
    */

    const eventType =
      event?.type ??
      event?.event_type ??
      null;

    const notification =
      event?.data?.notification ??
      event?.notification ??
      event?.data ??
      null;

    const tracker =
      notification?.tracker ??
      event?.tracker ??
      null;

    const paymentState =
      notification?.state ??
      event?.state ??
      null;

    console.log(
      "Safepay webhook verified",
      {
        eventType,
        paymentState,
        trackerPresent: Boolean(tracker),
      },
    );

    if (!tracker) {
      return res.status(200).json({
        received: true,
        ignored: true,
      });
    }

    /*
      Only consider successful payment events.
    */

    const successfulEvent =
      eventType === "payment.succeeded" ||
      eventType === "payment.completed" ||
      eventType === "payment:created";

    const successfulState =
      paymentState === "PAID" ||
      paymentState === "COMPLETED" ||
      paymentState === "CAPTURED";

    if (
      !successfulEvent &&
      !successfulState
    ) {
      return res.status(200).json({
        received: true,
        ignored: true,
      });
    }

    const supabase =
      createClient(
        supabaseUrl,
        supabaseSecretKey,
      );

    /*
      Find the Desiglo invoice using the
      Safepay tracker we stored earlier.
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

    if (!paymentRequest) {
      console.error(
        "No payment request matches Safepay tracker",
      );

      return res.status(200).json({
        received: true,
        matched: false,
      });
    }

    /*
      Idempotency:
      Safepay may retry webhooks.

      If already paid, simply acknowledge.
    */

    if (
      paymentRequest.status === "paid"
    ) {
      return res.status(200).json({
        received: true,
        alreadyPaid: true,
      });
    }

    const {
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
      );

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

    console.log(
      "Desiglo payment marked paid",
      {
        paymentRequestId:
          paymentRequest.id,
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
      error: "Webhook processing failed",
    });
  }
}