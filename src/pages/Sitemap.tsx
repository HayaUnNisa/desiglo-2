import { Link } from "react-router-dom";
export default function Sitemap() {
  return (
    <section className="dg-container section-pad">
      <p className="eyebrow">FIND YOUR WAY</p>
      <h1 className="my-6 text-5xl font-semibold">Sitemap</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          "Work",
          "Services",
          "Pricing",
          "About",
          "Process",
          "FAQ",
          "Contact",
          "Start a project",
          "Review",
          "Pay",
          "Privacy policy",
          "Terms",
          "Cookie policy",
          "Accessibility",
        ].map((n) => (
          <Link
            key={n}
            className="text-link"
            to={
              "/" +
              (n === "Start a project"
                ? "start-a-project"
                : n.toLowerCase().replaceAll(" ", "-"))
            }
          >
            {n} ↗
          </Link>
        ))}
      </div>
    </section>
  );
}
