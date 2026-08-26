import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

export default function HomeCTA() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[#168CFF]/20 bg-[#0A2029] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-100px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#168CFF]/12 blur-[100px]" />

            <div className="absolute bottom-[-160px] left-[20%] h-[320px] w-[320px] rounded-full bg-[#39BDF8]/6 blur-[100px]" />

            <div className="absolute right-12 top-10 h-40 w-40 rotate-45 rounded-3xl border border-white/[0.035]" />

            <div className="absolute right-28 top-24 h-24 w-24 rotate-45 rounded-2xl border border-[#168CFF]/10" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Start a Project
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Have a website in mind?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C9CED3]/75">
              Tell Desiglo what you're building and let's explore the best way
              to bring it online.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/start-a-project" className="group">
                Start Your Project

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
  );
}