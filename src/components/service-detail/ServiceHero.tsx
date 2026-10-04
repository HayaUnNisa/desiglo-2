import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

import type { ServiceDetail } from "../../data/serviceDetails";

type ServiceHeroProps = {
  service: ServiceDetail;
};

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--ink)]/[0.07] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[var(--accent)]/8 blur-[120px]" />
        <div className="absolute right-[12%] top-24 h-64 w-64 rounded-full bg-[var(--accent)]/5 blur-[120px]" />

        <div className="absolute right-[10%] top-20 h-44 w-44 rotate-45 rounded-[36px] border border-[var(--accent)]/8" />
        <div className="absolute right-[16%] top-36 h-28 w-28 rotate-45 rounded-[28px] border border-[var(--ink)]/[0.04]" />
      </div>

      <Container>
        <div className="relative grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              {service.eyebrow}
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]/75">
              {service.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/start-a-project" className="group">
                Start a Project
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>

              <Button to="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute -inset-12 rounded-full bg-[var(--accent)]/8 blur-[100px]" />

            <div className="relative overflow-hidden rounded-2xl border border-[var(--ink)]/[0.08] bg-[var(--surface)] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                    Service Overview
                  </p>

                  <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                    Built around real project goals.
                  </p>
                </div>

                <span className="font-mono text-xs text-[var(--ink)]/30">
                  01
                </span>
              </div>

              <div className="space-y-3">
                {[
                  "Clarity",
                  "Usability",
                  "Responsive Design",
                  "Brand Consistency",
                  "Performance",
                  "Maintainable Structure",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-[var(--ink)]/[0.07] bg-[var(--page)] px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/8 font-mono text-[10px] text-[var(--accent)]">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-medium text-[var(--muted)]">
                        {item}
                      </span>
                    </div>

                    <div className="h-1.5 w-16 rounded-full bg-[var(--ink)]/[0.05]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]"
                        style={{
                          width: `${70 + index * 4}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 max-w-4xl border-t border-[var(--ink)]/[0.07] pt-10">
          <p className="text-base leading-8 text-[var(--muted)]/70 sm:text-lg">
            {service.intro}
          </p>
        </div>
      </Container>
    </section>
  );
}
