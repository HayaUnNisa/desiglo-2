import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Gauge,
  LayoutTemplate,
  Megaphone,
  RefreshCw,
  Search,
  ShoppingBag,
  Smartphone,
  Wrench,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

const services = [
  {
    id: "website-design",
    icon: LayoutTemplate,
    title: "Website Design",
    description:
      "Modern website design built around your brand, audience, content, and business goals.",
    included: [
      "Website strategy",
      "UI design",
      "UX structure",
      "Wireframes",
      "Responsive layouts",
      "Typography systems",
      "Color systems",
      "Reusable components",
      "Prototyping where useful",
    ],
    bestFor:
      "Businesses that need a professional visual direction and a stronger website experience.",
    pricing: "$200–$400 starting range",
  },
  {
    id: "website-development",
    icon: Code2,
    title: "Website Development",
    description:
      "Responsive, maintainable websites built with modern front-end technologies and performance in mind.",
    included: [
      "Front-end development",
      "Responsive implementation",
      "Reusable components",
      "CMS integration",
      "API integration",
      "Forms",
      "Accessibility foundations",
      "Performance optimization",
      "Deployment preparation",
    ],
    bestFor:
      "Projects that already have a design or need design and development handled together.",
    pricing: "$500–$900 typical range",
  },
  {
    id: "business-websites",
    icon: BriefcaseBusiness,
    title: "Business Websites",
    description:
      "Professional multi-page websites for companies, professionals, consultants, agencies, and service providers.",
    included: [
      "Homepage",
      "Services sections",
      "About page",
      "Contact page",
      "FAQ",
      "Lead forms",
      "Location information where needed",
      "SEO-friendly structure",
      "Responsive layouts",
    ],
    bestFor:
      "Businesses that need a complete online presence rather than a single landing page.",
    pricing: "$500–$900 typical range",
  },
  {
    id: "landing-pages",
    icon: Megaphone,
    title: "Landing Pages",
    description:
      "Focused pages designed for campaigns, launches, lead generation, advertising, and service promotion.",
    included: [
      "Conversion-focused layout",
      "CTA strategy",
      "Lead capture forms",
      "Responsive design",
      "Analytics-ready structure",
      "Campaign messaging support",
      "Performance optimization",
    ],
    bestFor:
      "Campaigns and offers that need a focused page built around one primary action.",
    pricing: "$200–$400 starting range",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce Development",
    description:
      "Professional online shopping experiences designed around products, customers, and clear purchase flows.",
    included: [
      "Store design",
      "Product catalog",
      "Product pages",
      "Collections and categories",
      "Search and filtering",
      "Cart experience",
      "Checkout integration",
      "Responsive shopping",
      "Product management setup",
      "Performance optimization",
    ],
    bestFor:
      "Businesses that need a custom online storefront with more advanced functionality.",
    pricing: "Custom quote",
  },
  {
    id: "website-redesign",
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Improve an outdated website with stronger visuals, clearer navigation, better responsiveness, and improved performance.",
    included: [
      "Visual redesign",
      "Navigation improvements",
      "Mobile redesign",
      "Brand consistency",
      "Content hierarchy",
      "Conversion path improvements",
      "Performance improvements",
      "Updated components",
    ],
    bestFor:
      "Businesses with an existing website that no longer reflects the quality of the business.",
    pricing: "$500–$2,000 depending on scope",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Ongoing support for websites that need updates, fixes, improvements, and technical attention after launch.",
    included: [
      "Content updates",
      "Bug fixes",
      "Performance checks",
      "Dependency updates",
      "Technical improvements",
      "Layout changes",
      "New sections",
      "Website monitoring where supported",
    ],
    bestFor:
      "Businesses that want ongoing help maintaining and improving an existing website.",
    pricing: "Custom quote",
  },
];

const projectEssentials = [
  {
    icon: Smartphone,
    title: "Responsive by Default",
    description:
      "Every project is designed to work properly across phones, tablets, laptops, and desktops.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description:
      "Layouts, assets, and code are built with speed and efficiency in mind.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    description:
      "Clean structure, proper headings, and technical foundations support search visibility.",
  },
  {
    icon: Code2,
    title: "Maintainable Development",
    description:
      "Reusable components and organized structure make future changes easier.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.07] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#168CFF]/8 blur-[120px]" />
          <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-[#39BDF8]/5 blur-[120px]" />
        </div>

        <Container>
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Services
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              Everything your website needs in one place.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C9CED3]/75">
              Desiglo handles design, development, redesigns, landing pages,
              e-commerce, business websites, and ongoing maintenance with one
              consistent approach.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/start-a-project">
                Start a Project
                <ArrowRight size={17} />
              </Button>

              <Button to="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              What Desiglo Does
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Services for every stage of your website.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
              Whether you're starting from scratch, redesigning an existing
              website, or improving what you already have, Desiglo can help.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ id, icon: Icon, title, description }) => (
              <Link
                key={id}
                to={`/services#${id}`}
                className="group rounded-2xl border border-white/[0.08] bg-[#0A2029]/65 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#168CFF]/30 hover:bg-[#0A2029]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                  <Icon size={20} className="text-[#39BDF8]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#C9CED3]/65">
                  {description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9FDCFF]">
                  View service
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Services */}
      <section className="border-y border-white/[0.06] bg-[#081C24]">
        <Container>
          {services.map(
            (
              {
                id,
                icon: Icon,
                title,
                description,
                included,
                bestFor,
                pricing,
              },
              index,
            ) => (
              <section
                id={id}
                key={id}
                className={`scroll-mt-28 grid gap-10 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 ${
                  index !== services.length - 1
                    ? "border-b border-white/[0.07]"
                    : ""
                }`}
              >
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                    <Icon size={21} className="text-[#39BDF8]" />
                  </div>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {title}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-[#C9CED3]/70">
                    {description}
                  </p>

                  <div className="mt-6 rounded-xl border border-[#168CFF]/15 bg-[#168CFF]/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#39BDF8]">
                      Pricing
                    </p>

                    <p className="mt-2 font-semibold text-white">{pricing}</p>
                  </div>

                  <div className="mt-6">
                    <Button to="/start-a-project">
                      Start This Project
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#39BDF8]">
                    What's Included
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {included.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/[0.07] bg-[#0A2029]/60 px-4 py-4 text-sm text-[#C9CED3]/70"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#39BDF8]">
                      Best For
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#C9CED3]/70">
                      {bestFor}
                    </p>
                  </div>
                </div>
              </section>
            ),
          )}
        </Container>
      </section>

      {/* Essentials */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Every Project
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              The fundamentals stay consistent.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
              No matter which service you choose, the same core standards guide
              the project.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projectEssentials.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/[0.08] bg-[#0A2029]/65 p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-[#168CFF]/20 bg-[#168CFF]/8">
                  <Icon size={18} className="text-[#39BDF8]" />
                </div>

                <h3 className="mt-5 font-semibold text-white">{title}</h3>

                <p className="mt-2 text-sm leading-7 text-[#C9CED3]/65">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Preview */}
      <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Process
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
                A clear path from idea to launch.
              </h2>

              <p className="mt-5 max-w-md text-lg leading-8 text-[#C9CED3]/70">
                Projects move through a structured process so design,
                development, feedback, and launch stay organized.
              </p>

              <div className="mt-7">
                <Button to="/process" variant="secondary">
                  View Full Process
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "01 — Discovery",
                "02 — Planning",
                "03 — Design",
                "04 — Development",
                "05 — Testing",
                "06 — Launch",
                "07 — Support",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-xl border border-white/[0.07] bg-[#0A2029]/60 px-5 py-4 text-sm font-medium text-[#C9CED3]/75"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Pricing
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
                Starting points for different project sizes.
              </h2>

              <p className="mt-5 max-w-md text-lg leading-8 text-[#C9CED3]/70">
                Final pricing depends on the scope, number of pages, features,
                integrations, design complexity, and technical requirements.
              </p>

              <div className="mt-7">
                <Button to="/pricing" variant="secondary">
                  View Full Pricing
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Basic",
                  price: "$200–$400",
                  description:
                    "A simple professional website or landing page.",
                },
                {
                  name: "Standard",
                  price: "$500–$900",
                  description:
                    "A more complete website for growing businesses.",
                },
                {
                  name: "Premium",
                  price: "$1,000–$2,000",
                  description:
                    "Larger custom projects with more advanced requirements.",
                },
                {
                  name: "Custom",
                  price: "Custom Quote",
                  description:
                    "E-commerce, integrations, or unique functionality.",
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border border-white/[0.08] bg-[#0A2029]/65 p-6"
                >
                  <p className="text-sm font-semibold text-[#39BDF8]">
                    {plan.name}
                  </p>

                  <p className="mt-3 text-2xl font-bold text-white">
                    {plan.price}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#C9CED3]/60">
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Help Choosing */}
      <section className="border-y border-white/[0.06] bg-[#081C24] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Not Sure Where to Start?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white">
                You don't need to choose the perfect service yourself.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[#C9CED3]/70">
                Tell Desiglo about your business, current website, goals, and
                required features. We can use that information to determine
                which combination of services makes the most sense for your
                project.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button to="/start-a-project">
                  Tell Us About Your Project
                  <ArrowRight size={16} />
                </Button>

                <Button to="/contact" variant="secondary">
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-[#168CFF]/20 bg-[#0A2029] px-6 py-16 sm:px-10 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute right-[-100px] top-[-130px] h-80 w-80 rounded-full bg-[#168CFF]/10 blur-[100px]" />
              <div className="absolute right-16 top-10 h-36 w-36 rotate-45 rounded-3xl border border-white/[0.04]" />
            </div>

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Start a Project
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Ready to build a stronger website?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C9CED3]/70">
                Tell Desiglo what you're building, what you need, and what you
                want your website to achieve.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/start-a-project">
                  Start Your Project
                  <ArrowRight size={17} />
                </Button>

                <Button to="/contact" variant="secondary">
                  Contact Desiglo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}