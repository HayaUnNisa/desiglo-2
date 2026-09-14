import type {
  VercelRequest,
  VercelResponse,
} from "@vercel/node";

import { createClient } from "@supabase/supabase-js";
import {
  PDFDocument,
  StandardFonts,
  rgb,
} from "pdf-lib";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey =
  process.env.SUPABASE_SECRET_KEY;

const siteUrl =
  process.env.SITE_URL || "https://www.desiglo.com";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  if (!supabaseUrl || !supabaseSecretKey) {
    return res.status(500).json({
      error: "Server configuration is missing.",
    });
  }

  const transactionNumber = Array.isArray(
    req.query.transactionNumber,
  )
    ? req.query.transactionNumber[0]
    : req.query.transactionNumber;

  if (!transactionNumber) {
    return res.status(400).json({
      error: "Transaction number is required.",
    });
  }

  try {
    const supabase = createClient(
      supabaseUrl,
      supabaseSecretKey,
      {
        auth: {
          persistSession: false,
        },
      },
    );

    const { data: payment, error } =
      await supabase
        .from("payment_requests")
        .select("*")
        .eq(
          "transaction_number",
          transactionNumber,
        )
        .maybeSingle();

    if (error) {
      console.error(
        "Transaction report lookup error:",
        error,
      );

      return res.status(500).json({
        error: "Unable to load transaction.",
      });
    }

    if (!payment) {
      return res.status(404).json({
        error: "Transaction not found.",
      });
    }

    /*
     * Never generate a paid transaction report
     * unless the webhook has confirmed payment.
     */
    if (payment.status !== "paid") {
      return res.status(403).json({
        error:
          "Transaction report is only available for paid transactions.",
      });
    }

    // --------------------------------------------------
    // Create PDF
    // --------------------------------------------------

    const pdf = await PDFDocument.create();

    // Load Desiglo invoice/report background
    const backgroundResponse = await fetch(
      `${siteUrl}/invoice/desiglo-invoice-bg.png`,
    );

    if (!backgroundResponse.ok) {
      console.error(
        "Unable to load transaction report background.",
      );

      return res.status(500).json({
        error:
          "Unable to load transaction report design.",
      });
    }

    const backgroundBytes =
      await backgroundResponse.arrayBuffer();

    const background =
      await pdf.embedPng(backgroundBytes);

    /*
     * Preserve the aspect ratio of your actual
     * background image rather than stretching it.
     */
    const pageWidth = 595.28;

    const pageHeight =
      pageWidth *
      (background.height / background.width);

    const page = pdf.addPage([
      pageWidth,
      pageHeight,
    ]);

    page.drawImage(background, {
      x: 0,
      y: 0,
      width: pageWidth,
      height: pageHeight,
    });

    const regularFont =
      await pdf.embedFont(
        StandardFonts.Helvetica,
      );

    const boldFont =
      await pdf.embedFont(
        StandardFonts.HelveticaBold,
      );

    // --------------------------------------------------
    // Helpers
    // --------------------------------------------------

    const white = rgb(1, 1, 1);

    const muted = rgb(
      0.66,
      0.71,
      0.78,
    );

    const blue = rgb(
      0.086,
      0.55,
      1,
    );

    const green = rgb(
      0.063,
      0.72,
      0.50,
    );

    const formatAmount = (
      amount: number,
      currency: string,
    ) => {
      try {
        return new Intl.NumberFormat(
          "en-US",
          {
            style: "currency",
            currency,
          },
        ).format(amount);
      } catch {
        return `${amount} ${currency}`;
      }
    };

    const formatDate = (
      date: string | null,
    ) => {
      if (!date) {
        return "-";
      }

      return new Intl.DateTimeFormat(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        },
      ).format(new Date(date));
    };

    const safeText = (
      value:
        | string
        | number
        | null
        | undefined,
    ) => {
      if (
        value === null ||
        value === undefined ||
        value === ""
      ) {
        return "-";
      }

      return String(value);
    };

    const drawField = (
      label: string,
      value: string,
      y: number,
    ) => {
      page.drawText(label, {
        x: 72,
        y,
        size: 9,
        font: regularFont,
        color: muted,
      });

      page.drawText(value, {
        x: 72,
        y: y - 18,
        size: 12,
        font: boldFont,
        color: white,
        maxWidth: 450,
      });
    };

    // --------------------------------------------------
    // Transaction report content
    // --------------------------------------------------

    let y = pageHeight - 155;

    page.drawText("TRANSACTION REPORT", {
      x: 72,
      y,
      size: 22,
      font: boldFont,
      color: white,
    });

    page.drawText("PAID", {
      x: pageWidth - 118,
      y: y + 2,
      size: 11,
      font: boldFont,
      color: green,
    });

    y -= 55;

    drawField(
      "CLIENT",
      safeText(payment.customer_name),
      y,
    );

    y -= 58;

    drawField(
      "EMAIL",
      safeText(payment.customer_email),
      y,
    );

    y -= 58;

    drawField(
      "SERVICE",
      safeText(payment.service),
      y,
    );

    y -= 58;

    drawField(
      "TRANSACTION NUMBER",
      safeText(
        payment.transaction_number,
      ),
      y,
    );

    y -= 58;

    drawField(
      "AMOUNT PAID",
      formatAmount(
        Number(payment.amount),
        payment.currency,
      ),
      y,
    );

    y -= 58;

    drawField(
      "PAYMENT DATE",
      formatDate(payment.paid_at),
      y,
    );

    y -= 58;

    if (payment.description) {
      drawField(
        "DESCRIPTION",
        safeText(payment.description),
        y,
      );

      y -= 58;
    }

    if (payment.safepay_reference) {
      page.drawText(
        "SAFEPAY REFERENCE",
        {
          x: 72,
          y,
          size: 9,
          font: regularFont,
          color: muted,
        },
      );

      page.drawText(
        safeText(
          payment.safepay_reference,
        ),
        {
          x: 72,
          y: y - 18,
          size: 9,
          font: regularFont,
          color: blue,
          maxWidth: 450,
        },
      );
    }

    // --------------------------------------------------
    // Return PDF
    // --------------------------------------------------

    const pdfBytes = await pdf.save();

    res.setHeader(
      "Content-Type",
      "application/pdf",
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="Desiglo-Transaction-${transactionNumber}.pdf"`,
    );

    res.setHeader(
      "Cache-Control",
      "private, no-store",
    );

    return res
      .status(200)
      .send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error(
      "Transaction report generation failed:",
      error,
    );

    return res.status(500).json({
      error:
        "Unable to generate transaction report.",
    });
  }
}