import { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import Container from "../components/common/Container";

type PaymentRequest = {
  transactionNumber: string;
  customerName: string;
  service: string;
  amount: number;
  currency: string;
  status: string;
};

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();

  const transactionNumber = searchParams.get("order_id");

  const [payment, setPayment] =
    useState<PaymentRequest | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!transactionNumber) {
      setError("Transaction number is missing.");
      setLoading(false);
      return;
    }

    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;

    async function checkPayment() {
      try {
        const response = await fetch(
          `/api/get-payment-request?transactionNumber=${encodeURIComponent(
            transactionNumber!,
          )}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error || "Unable to verify payment.",
          );
        }

        const request =
          data.paymentRequest ?? data;

        setPayment(request);

        /*
         * SafePay webhook remains the authority.
         * This page only checks the current payment status.
         */
        if (
          request.status !== "paid" &&
          attempts < 10
        ) {
          attempts += 1;

          timer = setTimeout(checkPayment, 2000);
          return;
        }

        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to verify payment.",
        );

        setLoading(false);
      }
    }

    checkPayment();

    return () => {
      clearTimeout(timer);
    };
  }, [transactionNumber]);

  const formatAmount = (
    amount: number,
    currency: string,
  ) => {
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      }).format(amount);
    } catch {
      return `${amount} ${currency}`;
    }
  };

  return (
    <main className="min-h-[70vh] py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-10">
            {loading ? (
              <div className="py-12 text-center">
                <Loader2 className="mx-auto h-10 w-10 animate-spin text-[#168CFF]" />

                <h1 className="mt-6 text-2xl font-semibold text-white">
                  Confirming your payment
                </h1>

                <p className="mt-3 text-sm leading-6 text-[#C9CED3]/60">
                  Please wait while we verify your payment.
                </p>
              </div>
            ) : error ? (
              <div className="py-10 text-center">
                <h1 className="text-2xl font-semibold text-white">
                  Unable to verify payment
                </h1>

                <p className="mt-3 text-sm text-[#C9CED3]/60">
                  {error}
                </p>

                <Link
                  to="/pay"
                  className="mt-7 inline-flex rounded-lg bg-[#168CFF] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Go to Payments
                </Link>
              </div>
            ) : payment?.status === "paid" ? (
              <>
                <div className="text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/10">
                    <CheckCircle2 className="h-9 w-9 text-emerald-400" />
                  </div>

                  <h1 className="mt-6 text-3xl font-semibold text-white">
                    Payment Successful
                  </h1>

                  <p className="mt-3 text-sm leading-6 text-[#C9CED3]/60">
                    Thank you. Your payment has been
                    received successfully.
                  </p>
                </div>

                <div className="mt-9 space-y-4 rounded-xl border border-white/[0.07] bg-black/10 p-5">
                  <Detail
                    label="Client"
                    value={payment.customerName}
                  />

                  <Detail
                    label="Service"
                    value={payment.service}
                  />

                  <Detail
                    label="Transaction"
                    value={payment.transactionNumber}
                  />

                  <Detail
                    label="Amount Paid"
                    value={formatAmount(
                      payment.amount,
                      payment.currency,
                    )}
                  />

                  <Detail
                    label="Status"
                    value="Paid"
                  />
                </div>

                <div className="mt-8 text-center">
                  <Link
                    to="/"
                    className="inline-flex rounded-lg bg-[#168CFF] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Return Home
                  </Link>
                </div>
              </>
            ) : (
              <div className="py-10 text-center">
                <h1 className="text-2xl font-semibold text-white">
                  Payment is processing
                </h1>

                <p className="mt-3 text-sm leading-6 text-[#C9CED3]/60">
                  Your payment has not been confirmed yet.
                  Please refresh this page shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm text-[#C9CED3]/50">
        {label}
      </span>

      <span className="text-sm font-medium text-white">
        {value}
      </span>
    </div>
  );
}