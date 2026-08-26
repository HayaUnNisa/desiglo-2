import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

const projects = [
  {
    title: "Northline Studio",
    category: "Business Website",
    service: "Design & Development",
    description:
      "A clean professional website concept for a modern architecture and interior design studio.",
  },
  {
    title: "Nova Commerce",
    category: "E-commerce",
    service: "UI Design & Development",
    description:
      "A focused online store concept designed around clear product discovery and a simple shopping experience.",
  },
  {
    title: "Vertex Consulting",
    category: "Professional Services",
    service: "Website Redesign",
    description:
      "A modern redesign concept focused on credibility, service clarity, and stronger inquiry paths.",
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
              Selected work.
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
          {projects.map((project, index) => (
            <article key={project.title} className="group">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#061820]">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 25%, rgba(22,140,255,.22), transparent 35%)",
                  }}
                />

                <div className="absolute inset-6 rounded-xl border border-white/[0.08] bg-[#0A2029] p-4 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex h-6 items-center gap-1.5 border-b border-white/[0.06]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                  </div>

                  <div className="grid h-[calc(100%-24px)] place-items-center">
                    <span className="text-6xl font-bold tracking-[-0.06em] text-white/[0.04]">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>

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

                <Link
                  to="/work"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  View Case Study

                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs leading-5 text-[#C9CED3]/45">
          Demo portfolio concepts shown until actual Desiglo project work is
          supplied.
        </p>
      </Container>
    </section>
  );
}