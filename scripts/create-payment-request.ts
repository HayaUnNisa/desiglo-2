import { createClient } from "@supabase/supabase-js";
import { randomInt } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import path from "node:path";

import {
  PDFDocument,
  StandardFonts,
  rgb,
  PDFName,
  PDFString,
} from "pdf-lib";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey =
  process.env.SUPABASE_SECRET_KEY;

const siteUrl =
  process.env.SITE_URL ||
  "https://www.desiglo.com";

if (!supabaseUrl || !supabaseSecretKey) {
  console.error(
    "\nMissing SUPABASE_URL or SUPABASE_SECRET_KEY in .env.local.\n",
  );

  process.exit(1);
}

const supabase = createClient(
  supabaseUrl,
  supabaseSecretKey,
  {
    auth: {
      persistSession: false,
    },
  },
);

const rl = createInterface({
  input,
  output,
});

function required(
  value: string,
  fieldName: string,
) {
  const cleaned = value.trim();

  if (!cleaned) {
    throw new Error(
      `${fieldName} is required.`,
    );
  }

  return cleaned;
}

async function generateTransactionNumber() {
  for (let attempt = 0; attempt < 10; attempt++) {
    const transactionNumber =
      randomInt(
        1_000_000_000,
        10_000_000_000,
      ).toString();

    const { data, error } =
      await supabase
        .from("payment_requests")
        .select("id")
        .eq(
          "transaction_number",
          transactionNumber,
        )
        .maybeSingle();

    if (error) {
      throw error;
    }

    if (!data) {
      return transactionNumber;
    }
  }

  throw new Error(
    "Unable to generate a unique transaction number.",
  );
}

async function createPdf({
  transactionNumber,
  customerName,
  customerEmail,
  customerAddress,
  service,
  description,
  amount,
  currency,
  dueDate,
}: {
  transactionNumber: string;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  service: string;
  description: string;
  amount: number;
  currency: string;
  dueDate: string;
}) {
  const pdf = await PDFDocument.create();

  const page = pdf.addPage([
    595.28,
    841.89,
  ]);

  const regular =
    await pdf.embedFont(
      StandardFonts.Helvetica,
    );

  const bold =
    await pdf.embedFont(
      StandardFonts.HelveticaBold,
    );

  const white = rgb(1, 1, 1);

  const muted = rgb(
    0.62,
    0.68,
    0.74,
  );

  const blue = rgb(
    0.086,
    0.55,
    1,
  );

  const green = rgb(
    0.063,
    0.72,
    0.5,
  );

  const dark = rgb(
    0.025,
    0.075,
    0.1,
  );

  const panel = rgb(
    0.04,
    0.13,
    0.17,
  );

  page.drawRectangle({
    x: 0,
    y: 0,
    width: 595.28,
    height: 841.89,
    color: dark,
  });

  page.drawRectangle({
    x: 42,
    y: 60,
    width: 511,
    height: 720,
    color: panel,
  });

  page.drawText("DESIGLO", {
    x: 66,
    y: 742,
    size: 18,
    font: bold,
    color: blue,
  });

  page.drawText(
    "PAYMENT REQUEST",
    {
      x: 66,
      y: 695,
      size: 24,
      font: bold,
      color: white,
    },
  );

  page.drawText(
    "AWAITING PAYMENT",
    {
      x: 400,
      y: 701,
      size: 9,
      font: bold,
      color: green,
    },
  );

  const paymentUrl =
    `${siteUrl}/pay/${transactionNumber}`;

  const formatAmount = () => {
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

  const drawField = (
    label: string,
    value: string,
    x: number,
    y: number,
  ) => {
    page.drawText(label, {
      x,
      y,
      size: 8,
      font: regular,
      color: muted,
    });

    page.drawText(
      value || "-",
      {
        x,
        y: y - 17,
        size: 11,
        font: bold,
        color: white,
        maxWidth: 455,
      },
    );
  };

  let y = 640;

  drawField(
    "CLIENT",
    customerName,
    66,
    y,
  );

  y -= 55;

  drawField(
    "EMAIL",
    customerEmail,
    66,
    y,
  );

  y -= 55;

  drawField(
    "ADDRESS",
    customerAddress || "-",
    66,
    y,
  );

  y -= 55;

  drawField(
    "SERVICE",
    service,
    66,
    y,
  );

  y -= 55;

  drawField(
    "TRANSACTION ID",
    transactionNumber,
    66,
    y,
  );

  y -= 55;

  drawField(
    "AMOUNT DUE",
    formatAmount(),
    66,
    y,
  );

  y -= 55;

  drawField(
    "DUE DATE",
    dueDate || "No fixed due date",
    66,
    y,
  );

  y -= 55;

  if (description) {
    drawField(
      "DESCRIPTION",
      description,
      66,
      y,
    );

    y -= 65;
  }

  page.drawText(
    "PAY ONLINE",
    {
      x: 66,
      y,
      size: 8,
      font: regular,
      color: muted,
    },
  );

  const linkX = 66;
  const linkY = y - 18;
  const linkSize = 10;

  page.drawText(
    paymentUrl,
    {
      x: linkX,
      y: linkY,
      size: linkSize,
      font: bold,
      color: blue,
    },
  );

  const linkWidth =
    bold.widthOfTextAtSize(
      paymentUrl,
      linkSize,
    );

  const linkAnnotation =
    pdf.context.register(
      pdf.context.obj({
        Type: PDFName.of("Annot"),
        Subtype: PDFName.of("Link"),

        Rect: [
          linkX,
          linkY - 2,
          linkX + linkWidth,
          linkY + linkSize + 2,
        ],

        Border: [0, 0, 0],

        A: {
          Type: PDFName.of("Action"),
          S: PDFName.of("URI"),
          URI: PDFString.of(paymentUrl),
        },
      }),
    );

  page.node.addAnnot(
    linkAnnotation,
  );

  page.drawText(
    "Enter the transaction ID at desiglo.com/pay or use the payment link above.",
    {
      x: 66,
      y: 90,
      size: 8,
      font: regular,
      color: muted,
      maxWidth: 455,
    },
  );

  const bytes =
    await pdf.save();

  const outputDir =
    path.resolve(
      "private/payment-requests",
    );

  await mkdir(
    outputDir,
    {
      recursive: true,
    },
  );

  const filePath =
    path.join(
      outputDir,
      `Desiglo-Payment-Request-${transactionNumber}.pdf`,
    );

  await writeFile(
    filePath,
    Buffer.from(bytes),
  );

  return filePath;
}

async function main() {
  try {
    console.log(
      "\nDESIGLO PAYMENT REQUEST\n",
    );

    const customerName =
      required(
        await rl.question(
          "Client name: ",
        ),
        "Client name",
      );

    const customerEmail =
      required(
        await rl.question(
          "Client email: ",
        ),
        "Client email",
      ).toLowerCase();

    const customerAddress =
      (
        await rl.question(
          "Client address: ",
        )
      ).trim();

    const service =
      required(
        await rl.question(
          "Service: ",
        ),
        "Service",
      );

    const description =
      (
        await rl.question(
          "Description: ",
        )
      ).trim();

    const amountInput =
      required(
        await rl.question(
          "Amount: ",
        ),
        "Amount",
      );

    const amount =
      Number(amountInput);

    if (
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      throw new Error(
        "Amount must be greater than 0.",
      );
    }

    const currency =
      (
        await rl.question(
          "Currency (USD/PKR) [USD]: ",
        )
      )
        .trim()
        .toUpperCase() || "USD";

    if (
      currency !== "USD" &&
      currency !== "PKR"
    ) {
      throw new Error(
        "Currency must be USD or PKR.",
      );
    }

    const dueDate =
      (
        await rl.question(
          "Due date (optional): ",
        )
      ).trim();

    console.log(
      "\nCreating payment request...",
    );

    const transactionNumber =
      await generateTransactionNumber();

    const { error } =
      await supabase
        .from("payment_requests")
        .insert({
          transaction_number:
            transactionNumber,

          customer_name:
            customerName,

          customer_email:
            customerEmail,

          service,

          description:
            description || null,

          amount,

          currency,

          status: "unpaid",

          expires_at: null,
        });

    if (error) {
      throw error;
    }

    const pdfPath =
      await createPdf({
        transactionNumber,
        customerName,
        customerEmail,
        customerAddress,
        service,
        description,
        amount,
        currency,
        dueDate,
      });

    console.log(
      "\nPayment request created successfully.\n",
    );

    console.log(
      `Transaction ID: ${transactionNumber}`,
    );

    console.log(
      `Payment URL: ${siteUrl}/pay/${transactionNumber}`,
    );

    console.log(
      `PDF: ${pdfPath}\n`,
    );
  } catch (error) {
    console.error(
      "\nFailed to create payment request:",
      error instanceof Error
        ? error.message
        : error,
    );
  } finally {
    rl.close();
  }
}

main();