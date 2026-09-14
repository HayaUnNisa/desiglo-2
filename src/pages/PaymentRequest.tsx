import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CheckCircle2,
  CreditCard,
  Download,
  Loader2,
} from "lucide-react";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

type PaymentRequestData = {
  transactionNumber: string;
  customerName: string;
  service: string;
  description: string | null;
  amount: number;
  currency: string;
  status: string;
  expiresAt: string | null;
};

export default function PaymentRequest() {
  const { transactionNumber } = useParams();

  const [payment, setPayment] =
    useState<PaymentRequestData | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [startingPayment, setStartingPayment] =
    useState(false);

  const [paymentError, setPaymentError] =
    useState("");

  useEffect(() => {
    if (!transactionNumber) {
      setError("Invalid transaction number.");
      setLoading(false);
      return;
    }

    async function loadPayment() {
      try {
        const response = await fetch(
          `/api/get-payment-request?transactionNumber=${encodeURIComponent(
            transactionNumber!,
          )}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
              "Unable to load payment request.",
          );
        }

        setPayment(data.paymentRequest);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load payment request.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadPayment();
  }, [transactionNumber]);

  async function startPayment() {
    if (!transactionNumber) {
      return;
    }

    try {
      setStartingPayment(true);
      setPaymentError("");

      const response = await fetch(
        "/api/start-safepay-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            transactionNumber,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            data.details ||
            "Unable to start payment.",
        );
      }

      if (!data.checkoutUrl) {
        throw new Error(
          "Safepay checkout URL was not returned.",
        );
      }

      /*
        Safepay payment session was created
        securely by our backend.

        The amount was loaded from Supabase,
        not supplied by the customer's browser.
      */

      window.location.href = data.checkoutUrl;
    } catch (err) {
      setPaymentError(
        err instanceof Error
          ? err.message
          : "Unable to start payment.",
      );

      setStartingPayment(false);
    }
  }

  if (loading) {
    return (
      <section className="min-h-[70vh] py-28">
        <Container>
          <div className="flex items-center justify-center gap-3 text-[#C9CED3]">
            <Loader2
              size={20}
              className="animate-spin text-[#39BDF8]"
            />

            Loading payment request...
          </div>
        </Container>
      </section>
    );
  }

  if (error || !payment) {
    return (
      <section className="min-h-[70vh] py-28">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl border border-white/[0.08] bg-[#0A2029] p-8 text-center">
            <h1 className="text-3xl font-bold text-white">
              Payment request not found
            </h1>

            <p className="mt-4 text-[#C9CED3]/70">
              {error}
            </p>

            <Button
              to="/pay"
              className="mt-7"
            >
              Try Another Transaction
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  const formattedAmount =
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: payment.currency,
    }).format(payment.amount);

  const isPaid = payment.status === "paid";

  return (
    <section className="relative min-h-[70vh] overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-72 w-72 rounded-full bg-[#168CFF]/8 blur-[120px]" />

        <div className="absolute right-[10%] top-36 h-64 w-64 rounded-full bg-[#39BDF8]/5 blur-[120px]" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-2xl">
          <div className="rounded-3xl border border-white/[0.08] bg-[#0A2029] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-9">
            <div className="flex items-start justify-between gap-6 border-b border-white/[0.07] pb-7">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                  Payment Request
                </p>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {payment.service}
                </h1>
              </div>

              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                <CreditCard
                  size={21}
                  className="text-[#39BDF8]"
                />
              </div>
            </div>

            <div className="grid gap-6 py-8 sm:grid-cols-2">
              <Detail
                label="Client"
                value={payment.customerName}
              />

              <Detail
                label="Transaction"
                value={`#${payment.transactionNumber}`}
              />

              <Detail
                label="Service"
                value={payment.service}
              />

              <Detail
                label="Status"
                value={
                  isPaid
                    ? "Paid"
                    : payment.status === "unpaid"
                      ? "Awaiting Payment"
                      : payment.status
                }
              />
            </div>

            {payment.description && (
              <div className="border-t border-white/[0.07] py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C9CED3]/45">
                  Description
                </p>

                <p className="mt-3 text-sm leading-7 text-[#C9CED3]/75">
                  {payment.description}
                </p>
              </div>
            )}

            <div className="border-t border-white/[0.07] pt-8">
              <p className="text-sm text-[#C9CED3]/55">
                Amount Due
              </p>

              <p className="mt-2 text-4xl font-bold tracking-[-0.04em] text-white">
                {formattedAmount}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#C9CED3]/40">
                {payment.currency}
              </p>

              {isPaid ? (
                <>
                  <div className="mt-7 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-4 text-sm font-semibold text-emerald-300">
                    <CheckCircle2 size={19} />

                    This payment has already been completed.
                  </div>

                  <a
                    href={`/api/transaction-report?transactionNumber=${encodeURIComponent(
                      payment.transactionNumber,
                    )}`}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-4 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <Download size={17} />

                    Download Transaction Report
                  </a>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    disabled={startingPayment}
                    onClick={startPayment}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#168CFF] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#2998FF] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {startingPayment ? (
                      <>
                        <Loader2
                          size={17}
                          className="animate-spin"
                        />

                        Redirecting to Safepay...
                      </>
                    ) : (
                      <>
                        <CreditCard size={17} />

                        Pay {formattedAmount} Securely
                      </>
                    )}
                  </button>

                  {paymentError && (
                    <div className="mt-4 rounded-xl border border-red-400/15 bg-red-400/5 px-4 py-3 text-center">
                      <p className="text-sm text-red-300">
                        {paymentError}
                      </p>
                    </div>
                  )}
                </>
              )}

              <p className="mt-5 text-center text-xs leading-6 text-[#C9CED3]/40">
                Secure payment processing provided by Safepay.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
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
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C9CED3]/40">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  );
}