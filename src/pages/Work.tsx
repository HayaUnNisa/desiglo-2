import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import Button from "../components/common/Button";
import { Eyebrow, SplitHeading } from "../components/fx/Reveal";
import { projectCategories, projects } from "../data/projects";
import { ease } from "../lib/motion";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => projects.filter((p) => filter === "All" || p.category === filter), [filter]);

  return (
    <>
      <section className="relative isolate overflow-hidden pb-16 pt-40 sm:pt-48">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute -right-40 -top-20 -z-10 h-[520px] w-[520px] rounded-full bg-[var(--accent)]/15 blur-[140px]" />
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <Eyebrow>Selected work</Eyebrow>
          <SplitHeading
            as="h1"
            immediate
            delay={0.45}
            className="mt-7 max-w-4xl text-[clamp(2.8rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.055em]"
            lines={[{ text: "Websites with" }, { text: "real character.", className: "text-gradient pb-2" }]}
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
            className="mt-7 max-w-lg text-[17px] leading-relaxed text-[var(--muted)]"
          >
            {projects.length} websites designed and developed for cafés, clinics, retailers and creative businesses. Open any project to explore the live site.
          </motion.p>
        </div>
      </section>

      <section className="pb-28 sm:pb-36">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1 }}
            role="tablist"
            aria-label="Filter projects"
            className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {projectCategories.map((c) => {
              const on = filter === c;
              const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setFilter(c)}
                  className={`relative shrink-0 rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors duration-300 ${on ? "text-white" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                  {on && <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-[var(--accent)]" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                  <span className="relative">
                    {c} <span className="ml-1 text-[11px] opacity-60">{count}</span>
                  </span>
                </button>
              );
            })}
          </motion.div>

          <motion.div layout className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.a
                  layout
                  key={p.slug}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="View site"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease, delay: (i % 2) * 0.08 }}
                  className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
                >
                  <div className="relative overflow-hidden rounded-[22px] border border-[var(--line)] bg-[#f3efe9]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[3/2] w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--page)]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute bottom-4 right-4 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-[var(--accent)] text-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:hidden">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-[var(--ink)]">{p.title}</h2>
                      <p className="mt-2 max-w-md text-[14px] leading-relaxed text-[var(--muted)]">{p.description}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[var(--line)] px-3 py-1 text-[12px] text-[var(--silver)]">{p.category}</span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-28 flex flex-col items-center gap-6 rounded-[28px] border border-[var(--line)] bg-[var(--surface)] px-6 py-16 text-center">
            <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em]">
              Your business could be <span className="text-gradient">next.</span>
            </h2>
            <p className="max-w-md text-[15px] text-[var(--muted)]">Tell us about your goals and we'll shape a website around them.</p>
            <Button to="/start-a-project">
              Start a project <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
