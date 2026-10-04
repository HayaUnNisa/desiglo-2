import Button from "../components/common/Button";
export default function NotFound() {
  return (
    <section className="dg-container section-pad">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1 className="mt-5 text-5xl font-semibold tracking-tight">
        A small detour.
      </h1>
      <p className="my-8 text-[var(--muted)]">
        We couldn’t find that page. Let’s get you back to somewhere useful.
      </p>
      <Button to="/">Back to home</Button>
    </section>
  );
}
