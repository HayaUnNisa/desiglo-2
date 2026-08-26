import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand your business, audience, goals, and requirements.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Define the website structure, content, scope, and direction.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create clear, responsive layouts and a consistent visual system.",
  },
  {
    number: "04",
    title: "Development",
    description: "Turn approved designs into a fast, maintainable website.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Review responsiveness, forms, links, usability, and performance.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Prepare and deploy the production website.",
  },
  {
    number: "07",
    title: "Support",
    description: "Keep the website updated and improving after launch.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Process
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              A clear process from idea to launch.
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-[#C9CED3]/70">
              Every project follows a structured process designed to keep
              decisions clear and development moving in the right direction.
            </p>

            <Link
              to="/process"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore the full process

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