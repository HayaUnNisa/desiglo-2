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


import Container from "../components/common/Container";
import Button from "../components/common/Button";

const services = [
  {
    id: "website-design",
    icon: LayoutTemplate,
    title: "Website Design & Development",
    description: "Design and development for business websites and landing pages, shaped around your brand, audience, and goals.",
    included: ["Website strategy and content structure","UI and UX design","Responsive development","Business websites and landing pages","Forms and calls to action","CMS or API integration where needed","Accessibility and performance foundations","Deployment preparation"],
    bestFor: "Businesses that need a new website or a focused landing page, from initial design through development.",
    pricing: "Custom quote",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce Development",
    description: "Online stores built around your products, customers, and purchase journey.",
    included: ["Store design","Product catalog and product pages","Collections and categories","Search and filtering","Cart experience","Checkout integration","Responsive shopping layouts","Product management setup"],
    bestFor: "Businesses planning an online store or improving an existing shopping experience.",
    pricing: "Custom quote",
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Mobile app design and development scoped around the features, platforms, and workflows your users need.",
    included: ["Requirements and feature planning","App UI and UX design","User flows and prototypes","Development for agreed platforms","API integration where needed","Authentication where required","Device testing for agreed targets","Release preparation"],
    bestFor: "Businesses that need a mobile experience for customers, teams, or a specific product idea.",
    pricing: "Custom quote",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO",
    description: "Search engine optimization focused on making your website easier to discover, understand, and navigate.",
    included: ["Website SEO review","Keyword and search intent research","Page titles and meta descriptions","Heading and content structure","Internal linking recommendations","Technical SEO improvements","Indexing and sitemap checks","Search performance reporting where configured"],
    bestFor: "Businesses that want to improve their website’s search foundations and identify opportunities for organic visibility.",
    pricing: "Custom quote",
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Campaign planning and digital content aligned with your audience, channels, and business goals.",
    included: ["Audience and goal planning","Channel strategy","Campaign messaging","Content planning","Social media creative direction","Landing page recommendations","Campaign setup for agreed channels","Reporting using available analytics"],
    bestFor: "Businesses planning a launch, promoting a service, or building a more consistent digital presence.",
    pricing: "Custom quote",
  },
  {
    id: "logo-brand-identity",
    icon: BriefcaseBusiness,
    title: "Logo & Brand Identity Design",
    description: "Logo and visual identity design to help your business present a clear, consistent look across digital touchpoints.",
    included: ["Brand discovery and visual direction","Logo concepts","Refinement within the agreed scope","Color palette","Typography recommendations","Logo variations","Digital export files","Brand usage guidelines"],
    bestFor: "New businesses building their identity and existing brands ready for a visual refresh.",
    pricing: "Custom quote",
  },
  {
    id: "website-redesign",
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Refresh an existing website with clearer navigation, updated visuals, and a better experience across screen sizes.",
    included: ["Existing website review","Visual redesign","Navigation improvements","Responsive layout updates","Brand consistency","Content hierarchy","Conversion path improvements","Performance improvements within scope"],
    bestFor: "Businesses whose existing website no longer reflects their brand, content, or needs.",
    pricing: "$500–$2,000 depending on scope",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Website Maintenance & Support",
    description: "Support for existing websites that need content updates, fixes, and ongoing technical improvements.",
    included: ["Content updates","Bug fixes","Performance checks","Dependency updates","Technical improvements","Layout changes","New sections within scope","Website monitoring where supported"],
    bestFor: "Businesses that need help maintaining and improving a website after launch.",
    pricing: "Custom quote",
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Solutions",
    description: "Software designed around specific business workflows, integrations, and operational requirements.",
    included: ["Requirements and workflow discovery","Solution planning","Dashboard and interface design","Custom application development","API and system integrations","Data handling and user roles","Testing against agreed requirements","Deployment and handover planning"],
    bestFor: "Businesses that need a tailored internal tool, portal, dashboard, or workflow application.",
    pricing: "Custom quote",
  },
];

const projectEssentials = [
  { icon: BriefcaseBusiness, title: "Clear Scope", description: "Goals, deliverables, and priorities are agreed around the needs of your project." },
  { icon: LayoutTemplate, title: "Audience First", description: "Design, content, and functionality are shaped around the people who will use them." },
  { icon: Gauge, title: "Quality in Context", description: "Reviews and checks match the work, from visual consistency to usability and technical performance." },
  { icon: Wrench, title: "Practical Handover", description: "Final assets, documentation, and support needs are defined to suit the agreed deliverables." },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--ink)]/[0.07] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[var(--accent)]/8 blur-[120px]" />
          <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-[var(--accent)]/5 blur-[120px]" />
        </div>

        <Container>
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Services
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
              Digital services to build, grow, and support your business.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]/75">
              Desiglo brings together websites, e-commerce, mobile apps, SEO,
              digital marketing, brand identity, and custom software, with
              redesign and support for existing websites.
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
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              What Desiglo Does
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[var(--ink)] sm:text-5xl">
              Services for every stage of your digital presence.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--muted)]/70">
              Whether you're launching a brand, building a digital product,
              reaching your audience, or improving an existing website,
              find a service that fits your next step.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ id, icon: Icon, title, description }) => (
              <a
                key={id}
                href={`#${id}`}
                className="group rounded-2xl border border-[var(--ink)]/[0.08] bg-[var(--surface)]/65 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30 hover:bg-[var(--surface)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/8">
                  <Icon size={20} className="text-[var(--accent)]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[var(--ink)]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]/65">
                  {description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                  View service
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Services */}
      <section className="border-y border-[var(--ink)]/[0.06] bg-[var(--surface)]">
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
                    ? "border-b border-[var(--ink)]/[0.07]"
                    : ""
                }`}
              >
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/8">
                    <Icon size={21} className="text-[var(--accent)]" />
                  </div>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
                    {title}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-[var(--muted)]/70">
                    {description}
                  </p>

                  <div className="mt-6 rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      Pricing
                    </p>

                    <p className="mt-2 font-semibold text-[var(--ink)]">
                      {pricing}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button to="/start-a-project">
                      Start This Project
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                    What the Project Can Include
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]/70">
                    Deliverables are confirmed in your proposal based on the agreed scope.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {included.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[var(--ink)]/[0.07] bg-[var(--surface)]/60 px-4 py-4 text-sm text-[var(--muted)]/70"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      Best For
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]/70">
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
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Every Project
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[var(--ink)] sm:text-5xl">
              The fundamentals stay consistent.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--muted)]/70">
              No matter which service you choose, the same core standards guide
              the project.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projectEssentials.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-[var(--ink)]/[0.08] bg-[var(--surface)]/65 p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/8">
                  <Icon size={18} className="text-[var(--accent)]" />
                </div>

                <h3 className="mt-5 font-semibold text-[var(--ink)]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--muted)]/65">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Preview */}
      <section className="border-y border-[var(--ink)]/[0.06] bg-[var(--surface)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Process
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[var(--ink)] sm:text-5xl">
                A clear path from idea to delivery.
              </h2>

              <p className="mt-5 max-w-md text-lg leading-8 text-[var(--muted)]/70">
                Projects follow a process tailored to the service, keeping
                planning, creation, feedback, and delivery organized.
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
                "03 — Strategy & Direction",
                "04 — Creation & Implementation",
                "05 — Review & Refinement",
                "06 — Delivery or Launch",
                "07 — Support Planning",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-xl border border-[var(--ink)]/[0.07] bg-[var(--surface)]/60 px-5 py-4 text-sm font-medium text-[var(--muted)]/75"
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
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Pricing
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[var(--ink)] sm:text-5xl">
                Website ranges and custom service quotes.
              </h2>

              <p className="mt-5 max-w-md text-lg leading-8 text-[var(--muted)]/70">
                The website ranges below are starting points for website work.
                Other services receive a custom quote based on deliverables,
                complexity, integrations, and support needs. Final scope and
                any third-party or advertising costs are agreed separately.
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
                  name: "Basic Website",
                  price: "$200–$400",
                  description: "A simple professional website or landing page.",
                },
                {
                  name: "Standard Website",
                  price: "$500–$900",
                  description:
                    "A more complete website for growing businesses.",
                },
                {
                  name: "Premium Website",
                  price: "$1,000–$2,000",
                  description:
                    "Larger websites with more advanced requirements.",
                },
                {
                  name: "Other Digital Services",
                  price: "Custom Quote",
                  description:
                    "E-commerce, apps, SEO, marketing, branding, support, and custom software.",
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border border-[var(--ink)]/[0.08] bg-[var(--surface)]/65 p-6"
                >
                  <p className="text-sm font-semibold text-[var(--accent)]">
                    {plan.name}
                  </p>

                  <p className="mt-3 text-2xl font-bold text-[var(--ink)]">
                    {plan.price}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]/60">
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Help Choosing */}
      <section className="border-y border-[var(--ink)]/[0.06] bg-[var(--surface)] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Not Sure Where to Start?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[var(--ink)]">
                You don't need to choose the perfect service yourself.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[var(--muted)]/70">
                Tell Desiglo about your business, current digital presence,
                goals, and the deliverables you need. We can use that information to determine
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
          <div className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] px-6 py-16 sm:px-10 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute right-[-100px] top-[-130px] h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-[100px]" />
              <div className="absolute right-16 top-10 h-36 w-36 rotate-45 rounded-3xl border border-[var(--ink)]/[0.04]" />
            </div>

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Start a Project
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
                Ready to take your next digital step?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]/70">
                Tell Desiglo what you're building, what you need, and what you
                want your project to achieve.
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
