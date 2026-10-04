import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ease } from "../../lib/motion";

/** Fade + rise into view once. */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Headline that reveals word by word from behind a mask.
 * `lines` = each visual line; second item in a line pair can be muted.
 */
export function SplitHeading({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
  immediate = false,
}: {
  lines: { text: string; className?: string }[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  let wordIndex = 0;
  const MotionTag = motion[Tag];
  const trigger = immediate
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.5 } };
  return (
    <MotionTag className={className} {...trigger} aria-label={lines.map((l) => l.text).join(" ")}>
      {lines.map((line, li) => (
        <span key={li} aria-hidden="true" className={`block ${(line.className ?? "").replace("text-gradient", "")}`}>
          {line.text.split(" ").map((w, wi) => {
            const i = wordIndex++;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.08em] align-top">
                <motion.span
                  className={`inline-block will-change-transform ${line.className?.includes("text-gradient") ? "text-gradient" : ""}`}
                  variants={{
                    hidden: { y: "110%", rotate: 4 },
                    show: { y: "0%", rotate: 0, transition: { duration: 1, ease, delay: delay + i * 0.06 } },
                  }}
                >
                  {w}
                  {wi < line.text.split(" ").length - 1 ? "\u00A0" : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </MotionTag>
  );
}

/** Small label above section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
      className="inline-flex items-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)]/60 px-3.5 py-1.5 text-[12px] font-medium text-[var(--silver)] backdrop-blur"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
      {children}
    </motion.p>
  );
}
