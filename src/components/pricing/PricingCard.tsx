import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { PricingPlan } from "../../data/pricing";

type PricingCardProps = {
  plan: PricingPlan;
};

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 ${
        plan.recommended
          ? "border-[var(--accent)]/55 bg-[var(--surface)] shadow-[0_20px_70px_rgba(22,140,255,0.12)]"
          : "border-[var(--ink)]/[0.08] bg-[var(--surface)]/65 hover:border-[var(--accent)]/30"
      }`}
    >
      {plan.recommended && (
        <span className="absolute right-5 top-5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
          Recommended
        </span>
      )}

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          {plan.name}
        </p>

        <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)]">
          {plan.range}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[var(--muted)]/70">
          {plan.description}
        </p>
      </div>

      <div className="my-7 h-px bg-[var(--ink)]/[0.07]" />

      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]/80"
          >
            <Check size={16} className="mt-1 shrink-0 text-[var(--accent)]" />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Link
          to={"/start-a-project?plan=" + encodeURIComponent(plan.name)}
          className={`group inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
            plan.recommended
              ? "bg-[var(--accent)] text-[var(--ink)] hover:bg-[var(--accent-hover)]"
              : "border border-[var(--ink)]/10 bg-[var(--ink)]/[0.025] text-[var(--ink)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/8"
          }`}
        >
          {plan.cta}

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
