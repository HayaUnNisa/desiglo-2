import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

/** Scrolls to #hash targets after the page transition has finished. Top-of-page resets happen in SiteLayout. */
export default function ScrollToHash() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const id = hash.substring(1);
    const timeout = window.setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      if (lenis) {
        lenis.scrollTo(element, { offset: -100, duration: 1.2 });
        return;
      }
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
    }, 900);
    return () => window.clearTimeout(timeout);
  }, [location.pathname, location.hash, lenis]);

  return null;
}
