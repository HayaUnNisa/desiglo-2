import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Logo from "../common/Logo";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
  ],

  services: [
    {
      label: "Website Design",
      href: "/services#website-design",
    },
    {
      label: "Website Development",
      href: "/services#website-development",
    },
    {
      label: "Business Websites",
      href: "/services#business-websites",
    },
    {
      label: "Landing Pages",
      href: "/services#landing-pages",
    },
    {
      label: "E-commerce",
      href: "/services#ecommerce",
    },
    {
      label: "Website Redesign",
      href: "/services#website-redesign",
    },
    {
      label: "Maintenance",
      href: "/services#maintenance",
    },
  ],

  company: [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Start a Project", href: "/start-a-project" },
  ],

  legal: [
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Cookie Policy",
      href: "/cookie-policy",
    },
    {
      label: "Accessibility",
      href: "/accessibility",
    },
    {
      label: "Sitemap",
      href: "/sitemap",
    },
  ],
};

/* =========================================================
   SOCIAL ICONS
========================================================= */

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.27c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.34 3.5A2.34 2.34 0 1 1 .66 3.5a2.34 2.34 0 0 1 4.68 0ZM.98 8h4.72v15H.98V8Zm7.63 0h4.52v2.05h.06c.63-1.19 2.17-2.45 4.47-2.45 4.78 0 5.66 3.15 5.66 7.24V23h-4.71v-7.23c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.88-2.77 3.82V23H8.61V8Z" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.26-8.3L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.44 4.05H6.58L17.8 19.84Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
      />

      <circle cx="12" cy="12" r="4" />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: LinkedinIcon,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: XIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#04141B]">
     

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="border-t border-white/[0.06]">
        <Container>
          <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_0.7fr_1fr_0.8fr_1fr] lg:gap-10">
            {/* Brand */}
            <div>
              <Logo />

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#C9CED3]/60">
                Modern web design and development for businesses that want a
                professional, responsive, and effective online presence.
              </p>

              <p className="mt-4 max-w-sm text-xs leading-6 text-[#C9CED3]/40">
                Design, development, landing pages, e-commerce, redesigns, and
                ongoing website support.
              </p>

              {/* Social Links */}
              <div className="mt-7 flex flex-wrap items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Desiglo on ${label}`}
                    title={label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[#C9CED3]/65 transition duration-200 hover:-translate-y-0.5 hover:border-[#168CFF]/35 hover:bg-[#168CFF]/10 hover:text-[#39BDF8]"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            <FooterColumn
              title="Navigation"
              links={footerLinks.navigation}
            />

            <FooterColumn
              title="Services"
              links={footerLinks.services}
            />

            <FooterColumn
              title="Company"
              links={footerLinks.company}
            />

            <FooterColumn
              title="Legal"
              links={footerLinks.legal}
              showCookieSettings
            />
          </div>
        </Container>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="border-t border-white/[0.06]">
        <Container>
          <div className="flex flex-col gap-4 py-6 text-xs text-[#C9CED3]/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} Desiglo. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition-colors hover:text-white"
              >
                Terms
              </Link>

              <Link
                to="/cookie-policy"
                className="transition-colors hover:text-white"
              >
                Cookies
              </Link>

              <Link
                to="/accessibility"
                className="transition-colors hover:text-white"
              >
                Accessibility
              </Link>

              <button
                type="button"
                onClick={openCookieSettings}
                className="transition-colors hover:text-white"
              >
                Cookie Settings
              </button>

              <Link
                to="/sitemap"
                className="transition-colors hover:text-white"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

/* =========================================================
   COOKIE SETTINGS EVENT
========================================================= */

function openCookieSettings() {
  window.dispatchEvent(
    new Event("desiglo:open-cookie-settings"),
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
  showCookieSettings?: boolean;
};

function FooterColumn({
  title,
  links,
  showCookieSettings = false,
}: FooterColumnProps) {
  return (
    <div>
     <h3 className="text-sm font-semibold text-[#168CFF]">
          {title}
        </h3>
    
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link
              to={link.href}
              className="text-sm text-[#C9CED3]/55 transition-colors duration-200 hover:text-[#39BDF8]"
            >
              {link.label}
            </Link>
          </li>
        ))}

        {showCookieSettings && (
          <li>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-left text-sm text-[#C9CED3]/55 transition-colors duration-200 hover:text-[#39BDF8]"
            >
              Cookie Settings
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}