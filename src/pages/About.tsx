import {
  ArrowRight,
  Eye,
  Gauge,
  Layers3,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

const values = [
  {
    icon: Eye,
    title: "Clarity",
    description:
      "Design should make information easier to understand, not harder to navigate.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    description:
      "Typography, spacing, responsiveness, interactions, and small details all matter.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Projects should be approached professionally with clear expectations and communication.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "A good-looking website should also load efficiently and work smoothly across devices.",
  },
  {
    icon: Layers3,
    title: "Thoughtful Design",
    description:
      "Design decisions should have a purpose and support usability, communication, and business goals.",
  },
  {
    icon: MessageSquareText,
    title: "Long-Term Thinking",
    description:
      "Websites should be structured so they can evolve rather than becoming difficult to maintain.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.07] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#168CFF]/8 blur-[120px]" />
          <div className="absolute right-[12%] top-24 h-64 w-64 rounded-full bg-[#39BDF8]/5 blur-[120px]" />
        </div>

        <Container>
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              About Desiglo
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              Good websites start with clear thinking.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C9CED3]/75">
              Desiglo is a web design and development service focused on
              creating modern websites that communicate clearly, work
              properly across devices, and support real business goals.
            </p>
          </div>
        </Container>
      </section>

      {/* What Desiglo Is */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                What Desiglo Is
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
                Design and development working together.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#C9CED3]/70">
              <p>
                Desiglo helps businesses, professionals, startups, service
                providers, and brands build websites that feel professional
                and easy to use.
              </p>

              <p>
                The goal is not to add decoration for the sake of it. Every
                project should have a clear structure, consistent visual
                language, responsive layouts, and a technical foundation that
                can be maintained and improved over time.
              </p>

              <p>
                Design and development are treated as connected parts of the
                same process. The visual system should support the content,
                and the code should support the design without introducing
                unnecessary complexity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0A2029]/70 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Design Philosophy
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                Make every visual decision useful.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#C9CED3]/70">
                Good design creates hierarchy, improves readability, makes
                navigation easier, strengthens branding, and guides visitors
                toward the right actions.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#C9CED3]/70">
                Layouts should feel intentional rather than overloaded with
                effects, oversized elements, or visual noise.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0A2029]/70 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Development Philosophy
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                Build for performance and maintainability.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#C9CED3]/70">
                Development should produce websites that are responsive,
                accessible, efficient, and structured so future updates do not
                become unnecessarily difficult.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#C9CED3]/70">
                Reusable components, clean structure, and sensible technology
                choices help keep projects easier to understand and evolve.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Values
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Principles behind the work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
              These principles guide how Desiglo approaches design,
              development, and client projects.
            </p>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title}>
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                  <Icon size={19} className="text-[#39BDF8]" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#C9CED3]/65">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24 sm:pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-[#168CFF]/20 bg-[#0A2029] px-6 py-16 sm:px-10 lg:px-14">
            <div className="absolute right-[-100px] top-[-130px] h-80 w-80 rounded-full bg-[#168CFF]/10 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Work With Desiglo
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Have a website project in mind?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C9CED3]/70">
                Tell Desiglo what you're building and what you need from your
                website.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/start-a-project" className="group">
                  Start a Project
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
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