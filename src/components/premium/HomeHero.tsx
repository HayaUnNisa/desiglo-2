import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { SplitHeading } from "../fx/Reveal";
import { bootDelay } from "../fx/Chrome";
import { projects } from "../../data/projects";
import { ease } from "../../lib/motion";

// Three columns of real project screenshots, duplicated for a seamless loop
const cols = [0, 1, 2].map((c) => projects.filter((_, i) => i % 3 === c));

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const [D] = useState(bootDelay);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const wallY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // pointer-driven spotlight + tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotY = useTransform(smx, [0, 1], [-14, -6]);
  const rotX = useTransform(smy, [0, 1], [16, 8]);
  const glowX = useTransform(smx, (v) => `${v * 100}%`);
  const glowY = useTransform(smy, (v) => `${v * 100}%`);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <section ref={ref} onPointerMove={onMove} className="relative isolate min-h-[100svh] overflow-hidden pb-16 pt-32 lg:pt-40">
      {/* backdrop: grid + glows that follow the pointer */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/20 blur-[140px]"
        style={{ left: glowX, top: glowY }}
      />
      <div className="pointer-events-none absolute -left-40 top-40 -z-10 h-96 w-96 rounded-full bg-[#7fb0ff]/10 blur-[120px]" />

      {/* 3D wall of projects (desktop) */}
      <motion.div
        style={{ y: wallY, opacity: fade }}
        className="pointer-events-auto absolute right-[-12%] top-0 hidden h-full w-[62%] [perspective:1400px] lg:block"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease, delay: D + 0.2 }}
          style={{ rotateY: rotY, rotateX: rotX }}
          className="dg-wall grid h-[150%] -translate-y-[12%] grid-cols-3 gap-5 [transform-style:preserve-3d] dg-wall-mask"
        >
          {cols.map((col, ci) => (
            <div key={ci} className="overflow-hidden">
              <div className={ci === 1 ? "dg-col-down" : "dg-col-up"}>
                {[...col, ...col].map((p, i) => (
                  <a
                    key={p.slug + i}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={i >= col.length ? -1 : 0}
                    aria-hidden={i >= col.length}
                    data-cursor="Visit"
                    className="group mb-5 block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_30px_60px_-20px_var(--card-shadow)]"
                  >
                    <img src={p.image} alt={i >= col.length ? "" : p.title} loading={i < 2 ? "eager" : "lazy"} className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div style={{ y: copyY, opacity: fade }} className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="max-w-[700px]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: D }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)]/70 px-3.5 py-1.5 text-[12px] font-medium text-[var(--silver)] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Independent web design &amp; development
          </motion.p>

          <SplitHeading
            as="h1"
            immediate
            delay={D + 0.1}
            className="mt-7 text-[clamp(2.7rem,6.2vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--ink)]"
            lines={[{ text: "A better website." }, { text: "A bigger possibility.", className: "text-gradient pb-2" }]}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: D + 0.7 }}
            className="mt-7 max-w-[460px] text-[17px] leading-[1.7] text-[var(--muted)]"
          >
            For businesses ready for their next chapter. We turn what makes you different into a website people remember.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: D + 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button to="/start-a-project">
              Let's build something <ArrowUpRight size={16} />
            </Button>
            <Link to="/work" className="group inline-flex items-center gap-2 px-4 py-3 text-[14px] font-semibold text-[var(--ink)]">
              Explore our work
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: D + 1 } } }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[var(--muted)]"
          >
            {["Designed for your brand", "Built for every screen", "SEO foundations included"].map((t) => (
              <motion.li key={t} variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }} className="flex items-center gap-2">
                <Check size={14} className="text-[var(--accent)]" /> {t}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile: horizontal strip of projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: D + 0.9 }}
          className="-mx-5 mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:hidden"
        >
          <div className="flex w-max animate-[dg-marquee_40s_linear_infinite] gap-4">
            {[...projects.slice(0, 8), ...projects.slice(0, 8)].map((p, i) => (
              <img key={i} src={p.image} alt={i < 8 ? p.title : ""} className="h-40 w-auto rounded-xl border border-[var(--line)]" loading="lazy" />
            ))}
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
