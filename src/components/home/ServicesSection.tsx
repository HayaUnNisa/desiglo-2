import {
  ArrowUpRight,
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
      "Modern interfaces built around your brand, audience, content, and business objectives.",
    href: "/services/website-design",
    icon: LayoutTemplate,
  },
  {
    title: "Website Development",
    description:
      "Responsive, performant websites developed with modern technologies and maintainable architecture.",
    href: "/services/website-development",
    icon: Code2,
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for campaigns, services, product launches, and lead generation.",
    href: "/services/landing-pages",
    icon: Megaphone,
  },
  {
    title: "E-commerce",
    description:
      "Professional shopping experiences designed around your products and your customers.",
    href: "/services/ecommerce-development",
    icon: ShoppingBag,
  },
  {
    title: "Website Redesign",
    description:
      "Modernize outdated websites and improve usability, responsiveness, and visual quality.",
    href: "/services/website-redesign",
    icon: RefreshCw,
  },
  {
    title: "Maintenance",
    description:
      "Ongoing website updates, fixes, improvements, and technical support.",
    href: "/services/website-maintenance",
    icon: Wrench,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
            Everything your website needs.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#C9CED3]/75">
            From initial design through development and long-term support,
            Desiglo handles the work required to create a professional modern
            website.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              to={href}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A2029]/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#168CFF]/35 hover:bg-[#0A2029]"
            >
              <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rotate-45 rounded-3xl border border-[#168CFF]/0 transition-colors group-hover:border-[#168CFF]/10" />

              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8 text-[#39BDF8]">
                  <Icon size={20} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#39BDF8]"
                />
              </div>

              <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#C9CED3]/70">
                {description}
              </p>

              <span className="mt-7 inline-flex items-center text-sm font-semibold text-[#9FDCFF]">
                Explore service
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}