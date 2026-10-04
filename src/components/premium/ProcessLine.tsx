import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Eyebrow, SplitHeading } from "../fx/Reveal";
import { ease } from "../../lib/motion";

const steps = [
  ["Discover", "We listen first. Your business, your audience, and what your website needs to achieve."],
  ["Design", "We shape the structure and visual direction, with your feedback at every milestone."],
  ["Develop", "We bring the design to life, then check the details across devices and screen sizes."],
  ["Launch & evolve", "We prepare your site for launch and plan the support it needs for what comes next."],
];

/** Four-step process; the line fills as you scroll through it. */
export default function ProcessLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative border-t border-[var(--line)] py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>How it happens</Eyebrow>
            <SplitHeading
              className="mt-6 text-[clamp(2.2rem,4.6vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.05em]"
              lines={[{ text: "A clear path." }, { text: "From idea to online.", className: "text-[var(--muted)]" }]}
            />
          </div>
          <Link to="/process" className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--ink)]">
            Inside our process <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-[11px] top-0 h-full w-px bg-[var(--line)] md:left-0 md:top-[11px] md:h-px md:w-full" />
          <motion.div style={{ height: fill }} className="absolute left-[11px] top-0 w-px bg-gradient-to-b from-[var(--accent)] to-[#7fb0ff] md:hidden" />
          <motion.div style={{ width: fill }} className="absolute left-0 top-[11px] hidden h-px bg-gradient-to-r from-[var(--accent)] to-[#7fb0ff] md:block" />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map(([t, d], i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, ease, delay: i * 0.12 }}
                className="relative pl-12 md:pl-0 md:pt-12"
              >
                <span className="absolute left-0 top-0 grid h-[23px] w-[23px] place-items-center rounded-full border border-[var(--accent)]/60 bg-[var(--page)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
                </span>
                <span className="text-[12px] font-semibold tabular-nums text-[var(--accent)]">Step {i + 1}</span>
                <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[var(--ink)]">{t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
