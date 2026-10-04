import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eyebrow, SplitHeading } from "../fx/Reveal";
import { ease } from "../../lib/motion";

const faqs = [
  ["What kind of businesses do you work with?", "We create websites for service businesses, cafés, retailers, and creative teams. Tell us about your business and we will help define the right scope."],
  ["What does a website project include?", "Our packages include responsive design, development, SEO foundations, and launch support. Pages, content, integrations, and ongoing support are agreed in your project scope."],
  ["Can you improve my existing website?", "Yes. We can review your current site, identify what is worth keeping, and plan a redesign around your brand and business goals."],
  ["How do we get started?", "Send a project inquiry with your goals, budget, and timeline. We will review the details and discuss the scope before preparing an estimate."],
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-[var(--line)] py-28 sm:py-36">
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <Eyebrow>A little more clarity</Eyebrow>
          <SplitHeading
            className="mt-6 text-[clamp(2.2rem,4.6vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.05em]"
            lines={[{ text: "Good questions." }, { text: "Straight answers.", className: "text-[var(--muted)]" }]}
          />
          <Link to="/faq" className="group mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--ink)]">
            See all FAQs <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map(([q, a], i) => {
            const on = open === i;
            return (
              <div key={q}>
                <button onClick={() => setOpen(on ? null : i)} aria-expanded={on} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className={`text-[17px] font-medium transition-colors duration-300 ${on ? "text-[var(--ink)]" : "text-[var(--silver)]"}`}>{q}</span>
                  <motion.span
                    animate={{ rotate: on ? 45 : 0, backgroundColor: on ? "#2f7bff" : "rgba(0,0,0,0)" }}
                    transition={{ duration: 0.35 }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--line)] text-[var(--ink)]"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease }} className="overflow-hidden">
                      <p className="max-w-xl pb-7 text-[15px] leading-relaxed text-[var(--muted)]">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
