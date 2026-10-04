import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/logos/desiglo-logo.webp";
import { ease } from "../../lib/motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[1200] h-[2px] origin-left bg-gradient-to-r from-[var(--accent)] via-[#7fb0ff] to-[var(--silver)]"
    />
  );
}

/** Branded intro, first visit of the session only. */
export function Preloader() {
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem("dg-intro");
    } catch {
      return true;
    }
  });
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => {
      setShow(false);
      try { sessionStorage.setItem("dg-intro", "1"); } catch { /* ignore */ }
    }, 1500);
    return () => clearTimeout(t);
  }, [show]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[3000] grid place-items-center bg-[var(--page)]"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.img
              src={logo}
              alt=""
              className="h-16 w-auto"
              initial={{ opacity: 0, scale: 0.7, rotate: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease }}
            />
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.3 }}
                className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]"
              >
                Desiglo
              </motion.p>
            </div>
            <div className="h-px w-36 overflow-hidden bg-[var(--line)]">
              <motion.div className="h-full bg-[var(--accent)]" initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.2, ease }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** True for ~1.6s after the very first page load (lets hero intros wait for the preloader). */
export const bootDelay = () => {
  try {
    return sessionStorage.getItem("dg-intro") ? 0.15 : 1.35;
  } catch {
    return 0.15;
  }
};
