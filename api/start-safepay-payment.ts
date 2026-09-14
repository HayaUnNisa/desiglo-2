import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import Safepay from "@sfpy/node-core";

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
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
    const safepayPublicKey = process.env.SAFEPAY_PUBLIC_KEY;
    const safepaySecretKey = process.env.SAFEPAY_SECRET_KEY;

    if (
      !supabaseUrl ||
      !supabaseSecretKey ||
      !safepayPublicKey ||
      !safepaySecretKey
    ) {
      return res.status(500).json({
        error: "Server configuration error",
      });
    }

    const { transactionNumber } = req.body ?? {};

    if (
      !transactionNumber ||
      typeof transactionNumber !== "string"
    ) {
      return res.status(400).json({
        error: "Transaction number is required",
      });
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseSecretKey,
    );

    const { data: paymentRequest, error } = await supabase
      .from("payment_requests")
      .select(`
        id,
        transaction_number,
        amount,
        currency,
        status
      `)
      .eq("transaction_number", transactionNumber)
      .maybeSingle();

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        error: "Unable to retrieve payment request",
      });
    }

    if (!paymentRequest) {
      return res.status(404).json({
        error: "Payment request not found",
      });
    }

    if (paymentRequest.status !== "unpaid") {
      return res.status(409).json({
        error: `Payment request is ${paymentRequest.status}`,
      });
    }

    const amount = Number(paymentRequest.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({
        error: "Invalid payment amount",
      });
    }

    const amountInSmallestUnit = Math.round(amount * 100);

    const safepay = new Safepay(safepaySecretKey, {
      authType: "secret",
      host: "https://sandbox.api.getsafepay.com",
    });

    /*
      STEP 1:
      Create the payment tracker.
    */

    const payment = await safepay.payments.session.setup({
      merchant_api_key: safepayPublicKey,
      intent: "CYBERSOURCE",
      mode: "payment",
      currency: paymentRequest.currency,
      amount: amountInSmallestUnit,

      metadata: {
        order_id: paymentRequest.transaction_number,
      },
    });

    const trackerToken =
      payment?.data?.tracker?.token;

    if (!trackerToken) {
      console.error("Safepay tracker missing");

      return res.status(502).json({
        error: "Safepay did not return a tracker",
      });
    }

    /*
      STEP 2:
      Create temporary Safepay authentication token.
    */

    const passport =
      await safepay.client.passport.create();

    const authenticationToken =
      passport?.data;

    if (
      !authenticationToken ||
      typeof authenticationToken !== "string"
    ) {
      console.error(
        "Safepay authentication token missing",
      );

      return res.status(502).json({
        error:
          "Safepay did not return an authentication token",
      });
    }

    /*
      STEP 3:
      Save Safepay tracker against our invoice.
    */

    const { error: updateError } = await supabase
      .from("payment_requests")
      .update({
        safepay_reference: trackerToken,
      })
      .eq("id", paymentRequest.id);

    if (updateError) {
      console.error(
        "Supabase update error:",
        updateError,
      );

      return res.status(500).json({
        error: "Unable to save Safepay reference",
      });
    }

    /*
      STEP 4:
      Generate Hosted Checkout URL.
    */

    const siteUrl =
      process.env.SITE_URL ||
      "http://localhost:5173";

    const checkoutUrl =
      safepay.checkout.createCheckoutUrl({
        env: "sandbox",

        tracker: trackerToken,

        tbt: authenticationToken,

        source: "hosted",

        order_id:
          paymentRequest.transaction_number,

        redirect_url:
          `${siteUrl}/payment/success?transactionNumber=${encodeURIComponent(
            paymentRequest.transaction_number,
          )}`,

        cancel_url:
          `${siteUrl}/payment/failed?transactionNumber=${encodeURIComponent(
            paymentRequest.transaction_number,
          )}`,
      });

    if (!checkoutUrl) {
      return res.status(502).json({
        error:
          "Unable to generate Safepay checkout URL",
      });
    }

    console.log("Safepay checkout created", {
      transactionNumber:
        paymentRequest.transaction_number,
    });

    /*
      IMPORTANT:
      Do NOT mark payment as paid here.

      The Safepay webhook will do that later.
    */

    return res.status(200).json({
      success: true,

      transactionNumber:
        paymentRequest.transaction_number,

      checkoutUrl,
    });
  } catch (error: any) {
    console.error(
      "Safepay error:",
      error?.response?.data ??
        error?.message ??
        error,
    );

    return res.status(500).json({
      error: "Unable to start Safepay payment",

      details:
        error?.response?.data ??
        error?.message ??
        "Unknown Safepay error",
    });
  }
}