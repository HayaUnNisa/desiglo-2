import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

export default function PricingCTA() {
  return (
    <section className="pb-24 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] px-6 py-14 sm:px-10 lg:px-14">
          <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-[90px]" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Need Something Different?
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[var(--ink)] sm:text-5xl">
              Tell us what you're building.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]/70">
              If your project does not fit neatly into one of the packages,
              Desiglo can create a custom scope and estimate around your
              requirements.
            </p>

            <div className="mt-8">
              <Button to="/start-a-project" className="group">
                Request a Project Estimate
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
