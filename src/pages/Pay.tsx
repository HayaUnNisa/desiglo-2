import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CreditCard } from "lucide-react";

import Container from "../components/common/Container";

export default function Pay() {
  const [transactionNumber, setTransactionNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const value = transactionNumber.trim();

    if (!/^\d{10}$/.test(value)) {
      setError("Enter a valid 10-digit transaction number.");
      return;
    }

    setError("");

    navigate(`/pay/${value}`);
  }

  return (
    <section className="relative min-h-[70vh] overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-72 w-72 rounded-full bg-[var(--accent)]/8 blur-[120px]" />
        <div className="absolute right-[12%] top-40 h-64 w-64 rounded-full bg-[var(--accent)]/5 blur-[120px]" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-xl">
          <div className="mb-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/10">
              <CreditCard size={24} className="text-[var(--accent)]" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Secure Payment
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-[-0.035em] text-[var(--ink)] sm:text-5xl">
              Pay your Desiglo invoice.
            </h1>

            <p className="mt-5 text-base leading-7 text-[var(--muted)]/70">
              Enter the transaction number provided by Desiglo to view and pay
              your payment request.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[var(--ink)]/[0.08] bg-[var(--surface)] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8"
          >
            <label
              htmlFor="transactionNumber"
              className="text-sm font-semibold text-[var(--ink)]"
            >
              Transaction Number
            </label>

            <input
              id="transactionNumber"
              type="text"
              inputMode="numeric"
              maxLength={10}
              value={transactionNumber}
              onChange={(event) => {
                setTransactionNumber(event.target.value.replace(/\D/g, ""));
                setError("");
              }}
              placeholder="e.g. 6157075494"
              className="mt-3 w-full rounded-xl border border-[var(--ink)]/[0.1] bg-[var(--page)] px-4 py-4 text-base text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)]/30 focus:border-[var(--accent)]/60"
            />

            {error && <p className="mt-3 text-sm text-red-300">{error}</p>}

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-4 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--accent-hover)]"
            >
              Continue
              <ArrowRight size={17} />
            </button>

            <p className="mt-5 text-center text-xs leading-6 text-[var(--muted)]/45">
              Payments are processed securely. Desiglo does not store your card
              details.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
