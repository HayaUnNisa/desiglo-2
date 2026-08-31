import {
  ArrowRight,
  ExternalLink,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

import amberOakCafeHero from "../assets/work/amber-oak-cafe/hero.png";
import halfKiloCoffeeHero from "../assets/work/half-kilo-coffee/hero.png";
import brewBeanHero from "../assets/work/brew-bean/hero.png";
import oliveEmberHero from "../assets/work/olive-ember/hero.png";
import vantageSneakersHero from "../assets/work/vantage-sneakers/hero.png";
import dentalClinicHero from "../assets/work/dental-clinic/hero.png";
import meridianDentalHero from "../assets/work/meridian-dental-clinic/hero.png";
import sanamCafeHero from "../assets/work/sanam-cafe/hero.png";
import ollcaCafeHero from "../assets/work/ollca-cafe/hero.png";
import theSpaceCafeHero from "../assets/work/the-space-cafe/hero.png";
import moodNajdiCafeHero from "../assets/work/mood-najdi-cafe/hero.png";
import nativeCreativeHero from "../assets/work/native-creative/hero.png";
import wemCoffeeHero from "../assets/work/wem-coffee/hero.png";
import medadCafeHero from "../assets/work/medad-cafe/hero.png";

type Project = {
  title: string;
  category: string;
  services: string;
  description: string;
  status: string;
  previewUrl?: string;
  image?: string;
};

const projects: Project[] = [
  {
  title: "Amber Oak Café",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A warm, modern café website designed around atmosphere, menu discovery, reservations, and the in-store experience.",
  status: "Live Template",
  previewUrl: "https://amber-oak-cafe.desiglo.com",
  image: amberOakCafeHero,
},
{
  title: "Half Kilo Coffee",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A refined café website with a calm visual identity, menu discovery, location details, and a responsive customer experience.",
  status: "Live Template",
  previewUrl: "https://half-kilo-coffee.desiglo.com",
  image: halfKiloCoffeeHero,
},
{
  title: "Brew & Bean",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A bold, modern coffee shop website with a distinctive visual identity, menu discovery, location information, and a responsive customer experience.",
  status: "Live Template",
  previewUrl: "https://brew-bean.desiglo.com",
  image: brewBeanHero,
},
  {
  title: "Olive Ember",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A warm, earthy café website with a refined visual identity, menu discovery, and a responsive customer experience.",
  status: "Live Template",
  previewUrl: "https://olive-ember.desiglo.com",
  image: oliveEmberHero,
},
{
  title: "Vantage Sneakers",
  category: "Fashion & E-commerce",
  services: "Design & Development",
  description:
    "A bold modern sneaker website focused on product presentation, brand identity, and a premium shopping experience.",
  status: "Live Template",
  previewUrl: "https://vantage-sneakers.desiglo.com",
  image: vantageSneakersHero,
},
{
  title: "Dental Clinic",
  category: "Healthcare",
  services: "Design & Development",
  description:
    "A clean modern dental clinic website designed around treatments, patient trust, and appointment conversion.",
  status: "Live Template",
  previewUrl: "https://dental-clinic.desiglo.com",
  image: dentalClinicHero,
},
{
  title: "Meridian Dental Clinic",
  category: "Healthcare",
  services: "Design & Development",
  description:
    "A premium dental clinic website combining professional healthcare presentation with a modern patient experience.",
  status: "Live Template",
  previewUrl: "https://meridian-dental-clinic.desiglo.com",
  image: meridianDentalHero,
},
{
  title: "Sanam Café",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A distinctive café website built around atmosphere, brand identity, menu discovery, and customer experience.",
  status: "Live Template",
  previewUrl: "https://sanam-cafe.desiglo.com",
  image: sanamCafeHero,
},
{
  title: "Ollca Café",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A modern café website featuring a refined visual identity, menu presentation, and responsive experience.",
  status: "Live Template",
  previewUrl: "https://ollca-cafe.desiglo.com",
  image: ollcaCafeHero,
},
{
  title: "The Space Café",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A contemporary café website focused on atmosphere, visual storytelling, menu discovery, and location information.",
  status: "Live Template",
  previewUrl: "https://the-space-cafe.desiglo.com",
  image: theSpaceCafeHero,
},
{
  title: "Mood Najdi Café",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A culturally inspired café website combining Najdi character with a polished modern digital experience.",
  status: "Live Template",
  previewUrl: "https://mood-najdi-cafe.desiglo.com",
  image: moodNajdiCafeHero,
},
{
  title: "Native Creative",
  category: "Creative Agency",
  services: "Design & Development",
  description:
    "A modern creative agency website built around strong visual presentation, services, and brand storytelling.",
  status: "Live Template",
  previewUrl: "https://native-creative.desiglo.com",
  image: nativeCreativeHero,
},
{
  title: "Wem Coffee",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A polished coffee brand website with an atmospheric visual direction and responsive customer experience.",
  status: "Live Template",
  previewUrl: "https://wem-coffee.desiglo.com",
  image: wemCoffeeHero,
},
{
  title: "Medad Café",
  category: "Café & Restaurant",
  services: "Design & Development",
  description:
    "A refined café website designed around brand atmosphere, menu presentation, and an engaging customer experience.",
  status: "Live Template",
  previewUrl: "https://medad-cafe.desiglo.com",
  image: medadCafeHero,
},
];

export default function Work() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.07] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#168CFF]/8 blur-[120px]" />
          <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-[#39BDF8]/5 blur-[120px]" />
        </div>

        <Container>
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Work
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              Websites designed with clarity, usability, and performance in
              mind.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C9CED3]/75">
              Explore website templates and projects designed and developed by
              Desiglo, with responsive experiences built for real businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Selected Work
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
                Explore our latest websites.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
                Browse Desiglo templates and projects, then open a live preview
                to experience the complete responsive website.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "All",
                "Café & Restaurant",
                "E-commerce",
                "Landing Pages",
                "Redesign",
              ].map((filter, index) => (
                <span
                  key={filter}
                  className={`rounded-full border px-4 py-2 text-xs font-medium ${
                    index === 0
                      ? "border-[#168CFF]/40 bg-[#168CFF]/10 text-[#9FDCFF]"
                      : "border-white/[0.08] bg-white/[0.025] text-[#C9CED3]/65"
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="pb-24 sm:pb-28">
        <Container>
         <div className="grid gap-x-8 gap-y-14v lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="group">
                {/* Preview */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#081C24]">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={`${project.title} website preview`}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#061820]/50 via-transparent to-transparent" />

                      {project.previewUrl && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#061820]/0 transition duration-300 group-hover:bg-[#061820]/45">
                          <a
                            href={project.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex translate-y-3 items-center gap-2 rounded-xl border border-white/15 bg-[#061820]/90 px-5 py-3 text-sm font-semibold text-white opacity-0 shadow-xl backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                          >
                            Live Preview
                            <ExternalLink size={15} />
                          </a>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="absolute right-[-80px] top-[-80px] h-60 w-60 rounded-full bg-[#168CFF]/10 blur-[80px]" />

                      <div className="absolute inset-5 sm:inset-7">
                        <div className="h-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0A2029] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                          {/* Browser top */}
                          <div className="flex h-10 items-center gap-2 border-b border-white/[0.07] px-4">
                            <span className="h-2 w-2 rounded-full bg-white/15" />
                            <span className="h-2 w-2 rounded-full bg-white/15" />
                            <span className="h-2 w-2 rounded-full bg-white/15" />

                            <div className="ml-3 h-4 flex-1 rounded bg-white/[0.04]" />
                          </div>

                          {/* Placeholder */}
                          <div className="grid h-[calc(100%-40px)] place-items-center p-6">
                            <div className="w-full max-w-sm text-center">
                              <div className="mx-auto grid h-14 w-14 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                                <Monitor
                                  size={22}
                                  className="text-[#39BDF8]"
                                />
                              </div>

                              <p className="mt-5 font-mono text-xs text-[#39BDF8]/60">
                                PROJECT 0{index + 1}
                              </p>

                              <h3 className="mt-2 text-lg font-semibold text-white">
                                Template Preview
                              </h3>

                              <p className="mt-2 text-xs leading-6 text-[#C9CED3]/45">
                                A new Desiglo template will be added here soon.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Device indicators */}
                  <div className="absolute bottom-3 right-4 z-10 flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#061820]/90 px-3 py-2 text-[#C9CED3]/60 backdrop-blur">
                    <Monitor size={13} />
                    <Tablet size={13} />
                    <Smartphone size={13} />
                  </div>
                </div>

                {/* Info */}
                <div className="mt-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                    <span className="text-[#39BDF8]">
                      {project.category}
                    </span>

                    <span className="text-white/20">•</span>

                    <span className="text-[#C9CED3]/55">
                      {project.services}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#C9CED3]/65">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    {project.previewUrl ? (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#168CFF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2998FF]"
                      >
                        Live Preview
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <div className="inline-flex items-center rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-[#C9CED3]/45">
                        {project.status}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Case Studies
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
                More than a screenshot.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#C9CED3]/70">
                Each project can showcase the thinking behind the website,
                including its goals, design decisions, development approach,
                responsive experience, technologies, and final result.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Project overview",
                  "Challenge & goals",
                  "Design decisions",
                  "Development approach",
                  "Responsive previews",
                  "Technologies used",
                  "Project gallery",
                  "Next project navigation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/[0.07] bg-[#0A2029]/60 px-4 py-4 text-sm text-[#C9CED3]/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-[#168CFF]/20 bg-[#0A2029] px-6 py-16 sm:px-10 lg:px-14">
            <div className="absolute right-[-100px] top-[-130px] h-80 w-80 rounded-full bg-[#168CFF]/10 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Start a Project
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Want a website built for your business?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C9CED3]/70">
                Tell Desiglo about your project, your business, and what you want
                your new website to achieve.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/start-a-project">
                  Start Your Project
                  <ArrowRight size={17} />
                </Button>

                <Button to="/pricing" variant="secondary">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}