import { XCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import Container from "../components/common/Container";

export default function PaymentFailed() {
  const [searchParams] = useSearchParams();

  const transactionNumber =
    searchParams.get("transactionNumber");

  const retryLink = transactionNumber
    ? `/pay/${transactionNumber}`
    : "/pay";

  return (
    <section className="relative min-h-[70vh] overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-72 w-72 rounded-full bg-red-500/5 blur-[120px]" />

        <div className="absolute right-[10%] top-36 h-64 w-64 rounded-full bg-[#168CFF]/5 blur-[120px]" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-2xl">
          <div className="rounded-3xl border border-white/[0.08] bg-[#0A2029] p-6 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-10">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-red-400/20 bg-red-400/5">
              <XCircle
                size={34}
                className="text-red-300"
              />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-red-300">
              Payment Not Completed
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your payment was unsuccessful.
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#C9CED3]/65">
              Your payment was either cancelled or could
              not be completed. No successful payment has
              been confirmed by Desiglo.
            </p>

            {transactionNumber && (
              <div className="mt-7 rounded-xl border border-white/[0.07] bg-black/10 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C9CED3]/40">
                  Transaction
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  #{transactionNumber}
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to={retryLink}
                className="inline-flex items-center justify-center rounded-xl bg-[#168CFF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2998FF]"
              >
                Retry Payment
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-[#C9CED3] transition hover:border-[#168CFF]/40 hover:text-white"
              >
                Contact Desiglo
              </Link>
            </div>

            <p className="mt-6 text-xs leading-6 text-[#C9CED3]/40">
              If money appears to have been deducted but
              this page is shown, please contact Desiglo
              before attempting another payment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}