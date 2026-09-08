import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      console.error("Missing Supabase environment variables");

      return res.status(500).json({
        error: "Server configuration error",
      });
    }

    const transactionNumber = req.query.transactionNumber;

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
      supabaseSecretKey
    );

    const { data, error } = await supabase
      .from("payment_requests")
      .select(
        `
        id,
        transaction_number,
        customer_name,
        customer_email,
        service,
        description,
        amount,
        currency,
        status,
        safepay_reference,
        created_at,
        expires_at,
        paid_at
        `
      )
      .eq("transaction_number", transactionNumber)
      .maybeSingle();

    if (error) {
      console.error("Supabase lookup error:", error);

      return res.status(500).json({
        error: "Unable to retrieve payment request",
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "Payment request not found",
      });
    }

    return res.status(200).json({
      success: true,

      paymentRequest: {
        id: data.id,
        transactionNumber: data.transaction_number,
        customerName: data.customer_name,
        customerEmail: data.customer_email,
        service: data.service,
        description: data.description,
        amount: Number(data.amount),
        currency: data.currency,
        status: data.status,
        safepayReference: data.safepay_reference,
        createdAt: data.created_at,
        expiresAt: data.expires_at,
        paidAt: data.paid_at,
      },
    });
  } catch (error) {
    console.error("Get payment request error:", error);

    return res.status(500).json({
      error: "An unexpected server error occurred",
    });
  }
}