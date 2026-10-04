import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../common/Logo";
import Magnetic from "../fx/Magnetic";
import ThemeToggle from "../common/ThemeToggle";
import { ease } from "../../lib/motion";

const links = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Process", "/process"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const location = useLocation();
  const trigger = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 500 && y > prev + 2 && !open);
    if (y < prev - 2) setHidden(false);
  });

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.5, ease }}
        className="fixed inset-x-0 top-0 z-[1000] px-3 pt-3 sm:px-5"
      >
        <div
          className={`mx-auto flex h-16 max-w-[1280px] items-center justify-between rounded-2xl border px-3 pl-4 transition-[background,border-color,box-shadow,backdrop-filter] duration-500 ${
            scrolled
              ? "border-[var(--line)] bg-[var(--page)]/70 shadow-[0_20px_60px_-20px_var(--card-shadow)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Logo />
          <nav aria-label="Primary navigation" className="hidden lg:block" onMouseLeave={() => setHover(null)}>
            <ul className="flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)]/50 p-1 backdrop-blur">
              {links.map(([label, to]) => {
                const active = isActive(to);
                const lit = hover ? hover === to : active;
                return (
                  <li key={to} onMouseEnter={() => setHover(to)}>
                    <NavLink to={to} className={`relative block rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${lit ? (active && !hover ? "text-white" : "text-[var(--ink)]") : "text-[var(--muted)] hover:text-[var(--ink)]"}`}>
                      {lit && (
                        <motion.span
                          layoutId="nav-pill"
                          className={`absolute inset-0 rounded-full ${active && !hover ? "bg-[var(--accent)]/90" : "bg-[var(--surface-strong)]"}`}
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                      <span className="relative">{label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden sm:block">
            <Magnetic>
              <Link
                to="/start-a-project"
                className="group inline-flex items-center gap-2 rounded-xl bg-[var(--ink)] px-4 py-2.5 text-[13px] font-semibold text-[var(--page)] transition hover:opacity-90"
              >
                Start a project
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            </div>
            <button
              ref={trigger}
              className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)]/60 text-[var(--ink)] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-[999] flex flex-col bg-[var(--page)] px-5 pb-8 pt-24 lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-[100px]" />
            <nav aria-label="Mobile navigation" className="relative flex-1">
              <ul>
                {[["Home", "/"] as const, ...links].map(([label, to], i) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease }}
                    className="border-b border-[var(--line)]"
                  >
                    <NavLink
                      to={to}
                      end={to === "/"}
                      className={({ isActive: a }) =>
                        `flex items-center justify-between py-4 text-3xl font-semibold tracking-[-0.04em] ${a ? "text-[var(--accent)]" : "text-[var(--ink)]"}`
                      }
                    >
                      {label}
                      <ArrowUpRight size={22} className="opacity-40" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, ease }}>
              <Link to="/start-a-project" className="dg-button dg-button--primary w-full">
                Start a project <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
