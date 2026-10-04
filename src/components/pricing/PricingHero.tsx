import Container from "../common/Container";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--ink)]/[0.07] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-0 h-72 w-72 rounded-full bg-[var(--accent)]/8 blur-[120px]" />
      </div>

      <Container>
        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Pricing
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
            Clear starting points. Flexible project scopes.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]/75">
            Choose a starting package based on the size and complexity of your
            website. Every project can be adjusted to match your actual needs.
          </p>
        </div>
      </Container>
    </section>
  );
}
