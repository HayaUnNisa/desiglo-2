import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

import amberOakCafeHero from "../../assets/work/amber-oak-cafe/hero.webp";
import halfKiloCoffeeHero from "../../assets/work/half-kilo-coffee/hero.webp";
import brewBeanHero from "../../assets/work/brew-bean/hero.webp";

const projects = [
  {
    title: "Amber Oak Café",
    category: "Café & Restaurant",
    service: "Design & Development",
    description:
      "A warm, modern café website designed around atmosphere, menu discovery, reservations, and the in-store experience.",
    image: amberOakCafeHero,
    previewUrl: "https://amber-oak-cafe.desiglo.com",
  },
  {
    title: "Half Kilo Coffee",
    category: "Café & Restaurant",
    service: "Design & Development",
    description:
      "A refined café website with a calm visual identity, menu discovery, location details, and a responsive customer experience.",
    image: halfKiloCoffeeHero,
    previewUrl: "https://half-kilo-coffee.desiglo.com",
  },
  {
    title: "Brew & Bean",
    category: "Café & Restaurant",
    service: "Design & Development",
    description:
      "A bold, modern coffee shop website with a distinctive visual identity, menu discovery, and a responsive customer experience.",
    image: brewBeanHero,
    previewUrl: "https://brew-bean.desiglo.com",
  },
];

export default function FeaturedWork() {
  return (
    <section className="border-y border-[var(--ink)]/[0.06] bg-[var(--surface)] py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Featured Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[var(--ink)] sm:text-5xl">
              Selected websites.
            </h2>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--ink)]"
          >
            View all work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group">
              {/* Website Preview */}
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/11] overflow-hidden rounded-2xl border border-[var(--ink)]/[0.08] bg-[var(--page)]"
                aria-label={`Open ${project.title} live preview`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--page)]/0 transition duration-300 group-hover:bg-[var(--page)]/55">
                  <div className="flex translate-y-3 items-center gap-2 rounded-xl border border-[var(--ink)]/15 bg-[var(--page)]/90 px-5 py-3 text-sm font-semibold text-[var(--ink)] opacity-0 shadow-xl backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Live Preview
                    <ExternalLink size={15} />
                  </div>
                </div>
              </a>

              {/* Project Info */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--accent)]">
                  <span>{project.category}</span>

                  <span className="text-[var(--ink)]/20">•</span>

                  <span>{project.service}</span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--ink)]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]/70">
                  {project.description}
                </p>

                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--accent)]"
                >
                  Live Preview
                  <ExternalLink
                    size={15}
                    className="transition-transform group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)]"
          >
            View all work
            <ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
