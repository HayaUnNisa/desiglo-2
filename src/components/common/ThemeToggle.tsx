import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

/**
 * Light/dark switch. The new theme spreads out in a circle from the button
 * (View Transitions API), with a soft colour fade on older browsers.
 * Default is dark; the visitor's choice is remembered.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme === "light" ? "light" : "dark"));

  const apply = (next: Theme) => {
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "light" ? "#f5f7fb" : "#050a14");
    try {
      localStorage.setItem("desiglo-theme", next);
    } catch {
      /* ignore */
    }
  };

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === "light" ? "dark" : "light";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };

    if (!doc.startViewTransition || reduce) {
      const root = document.documentElement;
      if (!reduce) root.classList.add("theme-fade");
      setTheme(next);
      apply(next);
      window.setTimeout(() => root.classList.remove("theme-fade"), 500);
      return;
    }

    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const t = doc.startViewTransition(() => {
      flushSync(() => setTheme(next));
      apply(next);
    });
    t.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(.22,1,.36,1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  };

  const label = `Switch to ${theme === "light" ? "dark" : "light"} theme`;
  return (
    <button
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]/60 text-[var(--ink)] transition-colors hover:border-[var(--accent)]/50 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 18, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -18, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid place-items-center"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
