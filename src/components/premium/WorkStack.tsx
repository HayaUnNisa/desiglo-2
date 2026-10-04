import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Button from "../common/Button";
import { Eyebrow, SplitHeading } from "../fx/Reveal";
import { featuredProjects, projects, type Project } from "../../data/projects";

/** Featured projects stack on top of each other as you scroll. */
export default function WorkStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = featuredProjects.length;

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <SplitHeading
              className="mt-6 text-[clamp(2.2rem,4.6vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.05em]"
              lines={[{ text: "Different businesses." }, { text: "Same attention to detail.", className: "text-[var(--muted)]" }]}
            />
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <p className="max-w-xs text-[15px] leading-relaxed text-[var(--muted)] md:text-right">
              {projects.length} websites across cafés, healthcare, retail and creative businesses.
            </p>
            <Button to="/work" variant="secondary">
              View all work <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>

        <div ref={ref} className="relative">
          {featuredProjects.map((p, i) => (
            <StackCard key={p.slug} project={p} i={i} n={n} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({ project: p, i, n, progress }: { project: Project; i: number; n: number; progress: MotionValue<number> }) {
  const target = 1 - (n - 1 - i) * 0.045;
  const scale = useTransform(progress, [i / n, 1], [1, target]);
  const dim = useTransform(progress, [i / n, (i + 1) / n], [0, i === n - 1 ? 0 : 0.45]);

  return (
    <div className="sticky top-24 flex h-[78vh] min-h-[520px] items-start justify-center sm:top-28">
      <motion.a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="View site"
        style={{ scale, top: i * 14 }}
        className="group relative grid h-full w-full origin-top overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_-30px_80px_-30px_var(--card-shadow)] lg:grid-cols-[1.5fr_1fr]"
      >
        <div className="relative overflow-hidden bg-[#f3efe9]">
          <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]" />
        </div>
        <div className="relative flex flex-col justify-between gap-6 p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-[80px] transition-opacity duration-700 group-hover:opacity-100 lg:opacity-50" />
          <div className="relative">
            <div className="flex flex-wrap gap-2 text-[12px] font-medium text-[var(--silver)]">
              <span className="rounded-full border border-[var(--line)] px-3 py-1">{p.category}</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1">{p.services}</span>
            </div>
            <h3 className="mt-6 text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--ink)]">{p.title}</h3>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[var(--muted)]">{p.description}</p>
          </div>
          <span className="relative inline-flex items-center gap-3 text-[14px] font-semibold text-[var(--ink)]">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--accent)] text-white transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
            Visit live site
          </span>
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-[var(--page)]" />
      </motion.a>
    </div>
  );
}
