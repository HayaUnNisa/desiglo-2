import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { Eyebrow, SplitHeading } from "../fx/Reveal";
import { pricingPlans } from "../../data/pricing";
import { ease } from "../../lib/motion";

export default function PricingTeaser() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--line)] py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[160px]" />
      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <Eyebrow>An investment in your next chapter</Eyebrow>
            <SplitHeading
              className="mt-6 text-[clamp(2.2rem,4.6vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.05em]"
              lines={[{ text: "Clear scope." }, { text: "No guesswork.", className: "text-[var(--muted)]" }]}
            />
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-[var(--muted)]">
              Thoughtful websites, with transparent starting points. Choose a package. Make it your own.
            </p>
            <Link to="/pricing" className="group mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--ink)]">
              Compare all packages <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pricingPlans.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`flex flex-col rounded-3xl border bg-[var(--surface)] p-6 ${p.recommended ? "glow-border border-transparent bg-gradient-to-b from-[var(--accent-soft)] to-[var(--surface)] sm:-my-4 sm:py-10" : "border-[var(--line)]"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold text-[var(--ink)]">{p.name}</h3>
                  {p.recommended && <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[10px] font-semibold text-white">Popular</span>}
                </div>
                <p className="mt-4 text-[26px] font-semibold tracking-[-0.04em] text-[var(--ink)]">{p.range}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[var(--muted)]">
                      <Check size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {p.recommended ? (
                    <Button to="/start-a-project" className="w-full">
                      Get started <ArrowUpRight size={15} />
                    </Button>
                  ) : (
                    <Button to="/start-a-project" variant="secondary" className="w-full">
                      Get started
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
