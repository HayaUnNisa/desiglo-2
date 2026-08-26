import Container from "../common/Container";

import type { ServiceDetail } from "../../data/serviceDetails";

type ServiceProcessProps = {
  service: ServiceDetail;
};

export default function ServiceProcess({
  service,
}: ServiceProcessProps) {
  return (
    <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              A structured process from idea to final design.
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-[#C9CED3]/70">
              Each stage builds on the previous one so important decisions are
              made before moving deeper into the project.
            </p>
          </div>

          {/* Steps */}
          <div>
            {service.process.map((step, index) => (
              <article
                key={step.number}
                className={`grid gap-5 py-7 sm:grid-cols-[80px_1fr] ${
                  index !== service.process.length - 1
                    ? "border-b border-white/[0.07]"
                    : ""
                }`}
              >
                <div>
                  <span className="inline-flex rounded-lg border border-[#168CFF]/20 bg-[#168CFF]/8 px-3 py-2 font-mono text-xs font-semibold text-[#39BDF8]">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-7 text-[#C9CED3]/65">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}