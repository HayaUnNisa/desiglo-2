import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  LayoutTemplate,
  Megaphone,
  RefreshCw,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

const services = [
  {
    title: "Website Design",
    description:
      "Modern interfaces designed around your brand, audience, content, and objectives.",
    href: "/services/website-design",
    icon: LayoutTemplate,
    features: [
      "UI design",
      "UX structure",
      "Responsive layouts",
      "Design systems",
    ],
  },
  {
    title: "Website Development",
    description:
      "Responsive, performant websites built with modern technologies and maintainable architecture.",
    href: "/services/website-development",
    icon: Code2,
    features: [
      "Front-end development",
      "CMS integration",
      "Performance",
      "Deployment",
    ],
  },
  {
    title: "Business Websites",
    description:
      "Professional websites for businesses, consultants, agencies, and service providers.",
    href: "/services/business-websites",
    icon: BriefcaseBusiness,
    features: [
      "Service pages",
      "Lead forms",
      "About pages",
      "SEO structure",
    ],
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for campaigns, services, launches, advertising, and lead generation.",
    href: "/services/landing-pages",
    icon: Megaphone,
    features: [
      "CTA strategy",
      "Lead generation",
      "Forms",
      "Analytics-ready",
    ],
  },
  {
    title: "E-commerce Development",
    description:
      "Professional online shopping experiences designed around products and customers.",
    href: "/services/ecommerce-development",
    icon: ShoppingBag,
    features: [
      "Product pages",
      "Cart experience",
      "Checkout",
      "Store management",
    ],
  },
  {
    title: "Website Redesign",
    description:
      "Modernize outdated websites and improve usability, responsiveness, and visual quality.",
    href: "/services/website-redesign",
    icon: RefreshCw,
    features: [
      "Visual refresh",
      "UX improvements",
      "Mobile redesign",
      "Performance",
    ],
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing updates, fixes, improvements, and technical support after launch.",
    href: "/services/website-maintenance",
    icon: Wrench,
    features: [
      "Content updates",
      "Bug fixes",
      "Improvements",
      "Technical support",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
            What Desiglo Does
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
            Services for building a stronger website.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
            Choose the service that best matches what you need, or combine
            several services into one complete project.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(
            ({ icon: Icon, title, description, href, features }) => (
              <Link
                key={title}
                to={href}
                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A2029]/65 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#168CFF]/35 hover:bg-[#0A2029]"
              >
                <div className="absolute right-[-50px] top-[-50px] h-36 w-36 rotate-45 rounded-3xl border border-[#168CFF]/0 transition-colors group-hover:border-[#168CFF]/10" />

                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                    <Icon size={20} className="text-[#39BDF8]" />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#39BDF8]"
                  />
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#C9CED3]/70">
                  {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-[#C9CED3]/65"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <span className="mt-auto pt-7 text-sm font-semibold text-[#9FDCFF]">
                  Explore service
                </span>
              </Link>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}