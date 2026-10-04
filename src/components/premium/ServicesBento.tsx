import { motion } from "framer-motion";
import { ArrowUpRight, Code2, PenTool, RefreshCw, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, SplitHeading } from "../fx/Reveal";
import Spotlight from "../fx/Spotlight";
import { ease } from "../../lib/motion";

const services = [
  { icon: PenTool, title: "Web design", text: "Your brand, translated into an intuitive digital experience. Every page with a purpose.", path: "website-design", tags: ["UI / UX", "Design systems"], wide: true },
  { icon: Code2, title: "Web development", text: "Responsive, maintainable websites. Carefully built from the first interaction to the final detail.", path: "website-development", tags: ["Responsive", "CMS"] },
  { icon: ShoppingBag, title: "E-commerce", text: "Considered shopping experiences that make discovering and buying your products feel effortless.", path: "ecommerce-development", tags: ["Storefronts", "Checkout"] },
  { icon: RefreshCw, title: "Redesign & support", text: "A fresh perspective on your current website, with the ongoing care to keep it moving forward.", path: "website-redesign", tags: ["Website refresh", "Maintenance"], wide: true },
];

export default function ServicesBento() {
  return (
    <section className="relative border-t border-[var(--line)] py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <SplitHeading
              className="mt-6 text-[clamp(2.2rem,4.6vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.05em]"
              lines={[{ text: "Everything you need." }, { text: "Nothing you don't.", className: "text-[var(--muted)]" }]}
            />
          </div>
          <p className="max-w-sm text-[16px] leading-relaxed text-[var(--muted)] lg:justify-self-end">
            One creative partner for the design, development, and ongoing evolution of your website.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease, delay: (i % 2) * 0.1 }}
              className={s.wide ? "md:col-span-2" : ""}
            >
              <Spotlight className="h-full rounded-3xl border border-[var(--line)] bg-[var(--surface)]">
                <Link to={`/services/${s.path}`} className="flex h-full min-h-[280px] flex-col justify-between p-7 sm:p-9">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent)] transition-all duration-500 group-hover:-rotate-6 group-hover:border-[var(--accent)]/60 group-hover:bg-[var(--accent)] group-hover:text-white">
                      <s.icon size={22} strokeWidth={1.7} />
                    </span>
                    <ArrowUpRight size={20} className="text-[var(--muted)] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--ink)]" />
                  </div>
                  <div className="mt-10">
                    <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-[var(--ink)]">{s.title}</h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">{s.text}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-full border border-[var(--line)] px-3 py-1 text-[12px] text-[var(--silver)]">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
