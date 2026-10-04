import { Suspense, cloneElement, useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { useLenis } from "lenis/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToHash from "../common/ScrollToHash";
import CookieConsent from "../cookies/CookieConsent";
import SmoothScroll from "../fx/SmoothScroll";
import Cursor from "../fx/Cursor";
import PageTransition from "../fx/PageTransition";
import { Preloader, ScrollProgress } from "../fx/Chrome";

function AnimatedOutlet() {
  const location = useLocation();
  const outlet = useOutlet();
  const lenis = useLenis();
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (location.hash) return;
        if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
        else window.scrollTo(0, 0);
      }}
    >
      {outlet && (
        <PageTransition key={location.pathname}>
          <Suspense fallback={<div className="min-h-screen" role="status" aria-label="Loading page" />}>
            {cloneElement(outlet)}
          </Suspense>
        </PageTransition>
      )}
    </AnimatePresence>
  );
}

export default function SiteLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    const names: Record<string, string> = {
      "/": "Web design & development",
      "/work": "Selected work",
      "/services": "Services",
      "/pricing": "Pricing",
      "/start-a-project": "Start a project",
      "/contact": "Contact",
      "/about": "About the studio",
    };
    document.title =
      (names[pathname] ||
        pathname.split("/").pop()?.replaceAll("-", " ") ||
        "Desiglo") + " — Desiglo";
  }, [pathname]);
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <div className="site-root">
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Preloader />
          <ScrollProgress />
          <Cursor />
          <ScrollToHash />
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <AnimatedOutlet />
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </SmoothScroll>
    </MotionConfig>
  );
}
