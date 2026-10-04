import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import { ease } from "../../lib/motion";

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isIn = useInView(ref, { once: true, amount: 0.8 });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!isIn) return;
    const c = animate(0, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [isIn, to]);
  return <span ref={ref} className="tabular-nums">{v}{suffix}</span>;
}

const categories = new Set(projects.map((p) => p.category)).size;

const stats = [
  { n: projects.length, s: "", label: "Websites designed & built" },
  { n: categories, s: "", label: "Industries served" },
  { n: 7, s: "", label: "Services under one roof" },
  { n: 100, s: "%", label: "Responsive on every screen" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)]/40">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: i * 0.08 }}
            className={`py-10 sm:py-14 ${i % 2 ? "pl-6 sm:pl-10" : ""} ${i > 0 ? "lg:border-l lg:border-[var(--line)] lg:pl-10" : ""} ${i % 2 ? "border-l border-[var(--line)]" : ""}`}
          >
            <p className="text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-none tracking-[-0.05em] text-[var(--ink)]">
              <Count to={s.n} suffix={s.s} />
            </p>
            <p className="mt-3 text-[13px] text-[var(--muted)]">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
