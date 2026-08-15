import {
  Search,
  ListChecks,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    icon: Search,
    description:
      "Understand the business, audience, objectives, competitors, requirements, existing website, and desired outcome.",
    points: [
      "Business",
      "Audience",
      "Objectives",
      "Competitors",
      "Requirements",
      "Existing website",
      "Desired outcome",
    ],
  },
  {
    number: "02",
    title: "Planning",
    icon: ListChecks,
    description:
      "Define the structure and scope before design and development begin.",
    points: [
      "Project scope",
      "Pages",
      "Content",
      "Features",
      "User journeys",
      "Technology",
      "Timeline",
    ],
  },
  {
    number: "03",
    title: "Design",
    icon: Palette,
    description:
      "Create the visual direction, page layouts, responsive structure, and reusable design system.",
    points: [
      "Visual direction",
      "Layouts",
      "Components",
      "Responsive design",
      "Visual hierarchy",
    ],
  },
  {
    number: "04",
    title: "Development",
    icon: Code2,
    description:
      "Turn the approved design into the actual website using clean, maintainable, responsive code.",
    points: [
      "Responsive development",
      "Reusable components",
      "Forms",
      "Integrations",
      "Performance foundations",
      "Accessibility",
    ],
  },
  {
    number: "05",
    title: "Testing",
    icon: TestTube2,
    description:
      "Review the website carefully before launch to make sure important parts work as expected.",
    points: [
      "Mobile",
      "Tablet",
      "Desktop",
      "Browsers",
      "Forms",
      "Links",
      "Accessibility",
      "Performance",
      "Content",
    ],
  },
  {
    number: "06",
    title: "Launch",
    icon: Rocket,
    description:
      "Prepare the production build, complete final checks, and deploy the website.",
    points: [
      "Final review",
      "Production build",
      "Deployment",
      "Domain setup where required",
      "Launch checks",
    ],
  },
  {
    number: "07",
    title: "Support",
    icon: LifeBuoy,
    description:
      "After launch, Desiglo can continue helping with updates, fixes, improvements, and maintenance.",
    points: [
      "Content updates",
      "Bug fixes",
      "Improvements",
      "New sections",
      "Maintenance",
      "Technical support",
    ],
  },
];

export default function Process() {
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
              Process
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              A clear process from first conversation to launch.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C9CED3]/75">
              Every Desiglo project follows a structured process so important
              decisions happen at the right time and the website develops with
              a clear direction.
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

      {/* Process overview */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                How It Works
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
                Seven stages. One clear direction.
              </h2>

              <p className="mt-5 max-w-md text-lg leading-8 text-[#C9CED3]/70">
                The exact details can vary by project, but the overall process
                keeps strategy, design, development, testing, and launch
                organized.
              </p>
            </div>

            <div>
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className={`grid gap-6 py-8 sm:grid-cols-[90px_1fr] ${
                      index !== processSteps.length - 1
                        ? "border-b border-white/[0.07]"
                        : ""
                    }`}
                  >
                    <div>
                      <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                        <Icon size={20} className="text-[#39BDF8]" />
                      </div>

                      <span className="mt-3 block font-mono text-xs text-[#39BDF8]/60">
                        {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#C9CED3]/70">
                        {step.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {step.points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-[#C9CED3]/65"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Why the process matters */}
      <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Why This Matters
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Better decisions before expensive changes.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
              A structured process reduces confusion, keeps expectations clear,
              and helps avoid major changes being discovered too late in the
              project.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Clear Scope",
                description:
                  "Pages, features, responsibilities, and requirements are defined before development becomes complex.",
              },
              {
                title: "Better Feedback",
                description:
                  "Reviews happen at logical stages so feedback can be handled before the next phase begins.",
              },
              {
                title: "Stronger Final Result",
                description:
                  "Strategy, design, development, and testing work together instead of being treated as disconnected tasks.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0A2029]/65 p-7"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#C9CED3]/65">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-[#168CFF]/20 bg-[#0A2029] px-6 py-16 sm:px-10 lg:px-14">
            <div className="absolute right-[-100px] top-[-130px] h-80 w-80 rounded-full bg-[#168CFF]/10 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Start a Project
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Ready to start with a clear plan?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C9CED3]/70">
                Tell Desiglo about your business, goals, website requirements,
                and what you want the final result to achieve.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/start-a-project">
                  Start Your Project
                  <ArrowRight size={17} />
                </Button>

                <Button to="/contact" variant="secondary">
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}