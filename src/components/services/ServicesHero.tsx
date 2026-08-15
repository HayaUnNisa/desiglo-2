import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#168CFF]/8 blur-[120px]" />
        <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-[#39BDF8]/5 blur-[120px]" />
      </div>

      <Container>
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Services
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              Web design and development built around your goals.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C9CED3]/75">
              Desiglo helps businesses create modern websites that look
              professional, communicate clearly, work across devices, and
              support real business objectives.
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

          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-12 rounded-full bg-[#168CFF]/8 blur-[100px]" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A2029] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Strategy",
                  "Design",
                  "Development",
                  "Responsive",
                  "Performance",
                  "SEO Foundations",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#061820] p-5"
                  >
                    <span className="text-xs font-mono text-[#39BDF8]/70">
                      0{index + 1}
                    </span>

                    <p className="mt-4 text-sm font-semibold text-white">
                      {item}
                    </p>

                    <div className="absolute right-[-28px] top-[-28px] h-20 w-20 rotate-45 rounded-xl border border-[#168CFF]/10 transition group-hover:border-[#168CFF]/25" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}