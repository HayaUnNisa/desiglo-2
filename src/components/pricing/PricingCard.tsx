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
          ? "border-[#168CFF]/55 bg-[#0A2029] shadow-[0_20px_70px_rgba(22,140,255,0.12)]"
          : "border-white/[0.08] bg-[#0A2029]/65 hover:border-[#168CFF]/30"
      }`}
    >
      {plan.recommended && (
        <span className="absolute right-5 top-5 rounded-full border border-[#168CFF]/25 bg-[#168CFF]/10 px-3 py-1 text-xs font-semibold text-[#9FDCFF]">
          Recommended
        </span>
      )}

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#39BDF8]">
          {plan.name}
        </p>

        <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
          {plan.range}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#C9CED3]/70">
          {plan.description}
        </p>
      </div>

      <div className="my-7 h-px bg-white/[0.07]" />

      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-6 text-[#C9CED3]/80"
          >
            <Check
              size={16}
              className="mt-1 shrink-0 text-[#39BDF8]"
            />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Link
          to="/start-a-project"
          className={`group inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
            plan.recommended
              ? "bg-[#168CFF] text-white hover:bg-[#2998FF]"
              : "border border-white/10 bg-white/[0.025] text-white hover:border-[#168CFF]/40 hover:bg-[#168CFF]/8"
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