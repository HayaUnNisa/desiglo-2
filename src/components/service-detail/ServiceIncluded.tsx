import {
  CheckCircle2,
} from "lucide-react";

import Container from "../common/Container";

import type { ServiceDetail } from "../../data/serviceDetails";

type ServiceIncludedProps = {
  service: ServiceDetail;
};

export default function ServiceIncluded({
  service,
}: ServiceIncludedProps) {
  return (
    <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              What's Included
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Everything needed to create a stronger website experience.
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-[#C9CED3]/70">
              The exact scope depends on the project, but these are the core
              areas this service can cover.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.included.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0A2029]/70 p-6 transition-all duration-300 hover:border-[#168CFF]/30 hover:bg-[#0A2029]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#168CFF]/20 bg-[#168CFF]/8">
                    <CheckCircle2
                      size={17}
                      className="text-[#39BDF8]"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#C9CED3]/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}