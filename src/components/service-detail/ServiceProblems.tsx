import { AlertCircle } from "lucide-react";

import Container from "../common/Container";

import type { ServiceDetail } from "../../data/serviceDetails";

type ServiceProblemsProps = {
  service: ServiceDetail;
};

export default function ServiceProblems({
  service,
}: ServiceProblemsProps) {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
            Problems This Solves
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
            Fix the issues that make a website harder to trust and use.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
            Good design should address real problems, not just make a website
            look different.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {service.problems.map((problem) => (
            <article
              key={problem.title}
              className="group rounded-2xl border border-white/[0.08] bg-[#0A2029]/65 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#168CFF]/30 hover:bg-[#0A2029]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                <AlertCircle
                  size={19}
                  className="text-[#39BDF8]"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                {problem.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#C9CED3]/65">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}