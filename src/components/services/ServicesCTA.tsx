import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

export default function ServicesCTA() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[#168CFF]/20 bg-[#0A2029] px-6 py-16 sm:px-10 lg:px-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-100px] top-[-130px] h-[360px] w-[360px] rounded-full bg-[#168CFF]/12 blur-[100px]" />

            <div className="absolute right-20 top-10 h-36 w-36 rotate-45 rounded-3xl border border-white/[0.04]" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Start a Project
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              Need a website built around your goals?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C9CED3]/70">
              Tell Desiglo what you need, what you're building, and where you'd
              like to take your website.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/start-a-project" className="group">
                Start Your Project

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
        </div>
      </Container>
    </section>
  );
}