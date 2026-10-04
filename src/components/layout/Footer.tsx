import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Logo from "../common/Logo";

const footerWords = ["design", "build", "create"];

function FooterHeadline() {
  const [wordIndex, setWordIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % footerWords.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <h2 className="footer-headline">
      <span className="footer-headline__accessible">
        Let’s design, build and create incredible work together.
      </span>

      <span aria-hidden="true">
        <span className="footer-headline__first">
          <span>Let’s</span>

          <span className="footer-headline__word-window">
            {reduceMotion ? (
              <span className="footer-headline__word">create</span>
            ) : (
              <AnimatePresence initial={false}>
                <motion.span
                  key={footerWords[wordIndex]}
                  className="footer-headline__word"
                  initial={{
                    y: "100%",
                    opacity: 0,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    y: "-100%",
                    opacity: 0,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {footerWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            )}
          </span>
        </span>

        <span className="footer-headline__second">
          incredible work together.
        </span>
      </span>
    </h2>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="dg-container">
        <div className="footer-top">
          <div>
            <FooterHeadline />
          </div>

          <Link
            className="footer-circle"
            to="/start-a-project"
            aria-label="Start your project"
          >
            <ArrowUpRight size={40} aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-middle">
          <div>
            <Logo />
            <p>
              Thoughtful design. Solid development.
              <br />
              A better place for your business online.
            </p>
          </div>

          <div>
            <span>Explore</span>
            <Link to="/work">Our work</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div>
            <span>Studio</span>
            <Link to="/about">About Desiglo</Link>
            <Link to="/process">Our process</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <span>Helpful links</span>
            <Link to="/faq">FAQs</Link>
            <Link to="/review">Leave a review</Link>
            <Link to="/pay">Client payments</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Desiglo</span>

          <div>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/accessibility">Accessibility</Link>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(
                  new Event("desiglo:open-cookie-settings"),
                )
              }
            >
              Cookie settings
            </button>
            <Link to="/sitemap">Sitemap</Link>
          </div>

          <span>Designed with intention.</span>
        </div>
      </div>
    </footer>
  );
}