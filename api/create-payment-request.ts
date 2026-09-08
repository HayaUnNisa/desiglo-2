import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { randomInt } from "node:crypto";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error("Missing Supabase environment variables.");
}

const supabase = createClient(
  supabaseUrl,
  supabaseSecretKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  },
);

function generateTransactionNumber() {
  return randomInt(
    1_000_000_000,
    10_000_000_000,
  ).toString();
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
    const {
      customerName,
      customerEmail,
      service,
      description,
      amount,
      currency = "USD",
      expiresAt,
    } = req.body ?? {};

    if (
      !customerName ||
      !customerEmail ||
      !service ||
      amount === undefined
    ) {
      return res.status(400).json({
        error: "Missing required fields.",
      });
    }

    const parsedAmount = Number(amount);

    if (
      !Number.isFinite(parsedAmount) ||
      parsedAmount <= 0
    ) {
      return res.status(400).json({
        error: "Invalid payment amount.",
      });
    }

    const allowedCurrencies = ["USD", "PKR"];

    if (!allowedCurrencies.includes(currency)) {
      return res.status(400).json({
        error: "Unsupported currency.",
      });
    }

    let transactionNumber: string | null = null;

    /*
     * Try several times in the extremely unlikely event
     * that a randomly generated transaction number
     * already exists.
     */
    for (let attempt = 0; attempt < 10; attempt++) {
      const candidate = generateTransactionNumber();

      const { data, error } = await supabase
        .from("payment_requests")
        .select("id")
        .eq("transaction_number", candidate)
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (!data) {
        transactionNumber = candidate;
        break;
      }
    }

    if (!transactionNumber) {
      throw new Error(
        "Unable to generate a unique transaction number.",
      );
    }

    const { data, error } = await supabase
      .from("payment_requests")
      .insert({
        transaction_number: transactionNumber,
        customer_name: customerName.trim(),
        customer_email: customerEmail.trim().toLowerCase(),
        service: service.trim(),
        description: description?.trim() || null,
        amount: parsedAmount,
        currency,
        status: "unpaid",
        expires_at: expiresAt || null,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return res.status(201).json({
      success: true,
      paymentRequest: {
        transactionNumber: data.transaction_number,
        customerName: data.customer_name,
        customerEmail: data.customer_email,
        service: data.service,
        description: data.description,
        amount: data.amount,
        currency: data.currency,
        status: data.status,
        expiresAt: data.expires_at,
      },
    });
  } catch (error) {
    console.error("Create payment request error:", error);

    return res.status(500).json({
      error: "Unable to create payment request.",
    });
  }
}