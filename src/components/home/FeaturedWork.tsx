import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

import amberOakCafeHero from "../../assets/work/amber-oak-cafe/hero.png";
import halfKiloCoffeeHero from "../../assets/work/half-kilo-coffee/hero.png";
import brewBeanHero from "../../assets/work/brew-bean/hero.png";

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
    <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Featured Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Selected websites.
            </h2>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C9CED3] transition hover:text-white"
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
                className="relative block aspect-[16/11] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#061820]"
                aria-label={`Open ${project.title} live preview`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#061820]/0 transition duration-300 group-hover:bg-[#061820]/55">
                  <div className="flex translate-y-3 items-center gap-2 rounded-xl border border-white/15 bg-[#061820]/90 px-5 py-3 text-sm font-semibold text-white opacity-0 shadow-xl backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Live Preview
                    <ExternalLink size={15} />
                  </div>
                </div>
              </a>

              {/* Project Info */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 text-xs font-medium text-[#39BDF8]">
                  <span>{project.category}</span>

                  <span className="text-white/20">•</span>

                  <span>{project.service}</span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#C9CED3]/70">
                  {project.description}
                </p>

                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#39BDF8]"
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            View all work
            <ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}