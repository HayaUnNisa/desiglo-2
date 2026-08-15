import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, audience, goals, current website, and project requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define the pages, content, features, structure, technology, and overall project scope.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create clear, responsive layouts with strong hierarchy and a consistent visual direction.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Approved designs are turned into a responsive, maintainable, and performance-focused website.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "The website is reviewed across devices, browsers, forms, links, accessibility, and performance.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Final checks are completed and the website is prepared for production deployment.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              A clear path from idea to launch.
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-[#C9CED3]/70">
              Every project follows a structured process so decisions stay
              clear and the website develops in the right direction.
            </p>

            <Link
              to="/process"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              View the full process

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid gap-5 py-7 sm:grid-cols-[70px_1fr] ${
                  index !== steps.length - 1
                    ? "border-b border-white/[0.07]"
                    : ""
                }`}
              >
                <span className="font-mono text-sm font-semibold text-[#39BDF8]">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-7 text-[#C9CED3]/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}