import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ease } from "../../lib/motion";

const curtain = (inDelay: number, outDelay: number) => ({
  initial: { scaleY: 1, originY: 0 },
  animate: { scaleY: 0, originY: 0, transition: { duration: 0.7, ease, delay: inDelay } },
  exit: { scaleY: 1, originY: 1, transition: { duration: 0.55, ease, delay: outDelay, originY: { duration: 0 } } },
});

/** Two-layer curtain (electric blue under deep navy) between routes. */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.35 } }}
        exit={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        {children}
      </motion.div>
      <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1500] bg-[var(--accent)]" {...curtain(0.2, 0)} />
      <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1501] bg-[var(--surface)]" {...curtain(0.06, 0.12)} />
    </>
  );
}
