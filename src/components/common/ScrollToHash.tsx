import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const id = hash.substring(1);

    const timeout = window.setTimeout(() => {
      const element = document.getElementById(id);

      if (!element) return;

      const navbarOffset = 100;

      const elementTop =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - navbarOffset,
        behavior: "smooth",
      });
    }, 100);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [location.pathname, location.hash]);

  return null;
}