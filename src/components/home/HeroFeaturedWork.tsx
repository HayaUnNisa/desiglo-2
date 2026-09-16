import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, MotionValue, useScroll, useTransform, } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";

import amberOakCafeHero from "../../assets/work/amber-oak-cafe/hero.png";
import vantageSneakersHero from "../../assets/work/vantage-sneakers/hero.png";
import meridianDentalHero from "../../assets/work/meridian-dental-clinic/hero.png";
import nativeCreativeHero from "../../assets/work/native-creative/hero.png";

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
    title: "Vantage Sneakers",
    category: "Fashion & E-commerce",
    service: "Design & Development",
    description:
      "A bold modern sneaker website focused on product presentation, brand identity, and a premium shopping experience.",
    image: vantageSneakersHero,
    previewUrl: "https://vantage-sneakers.desiglo.com",
  },
  {
    title: "Meridian Dental Clinic",
    category: "Healthcare",
    service: "Design & Development",
    description:
      "A premium dental clinic website combining professional healthcare presentation with a modern patient experience.",
    image: meridianDentalHero,
    previewUrl: "https://meridian-dental-clinic.desiglo.com",
  },
  {
    title: "Native Creative",
    category: "Creative Agency",
    service: "Design & Development",
    description:
      "A modern creative agency website built around strong visual presentation, services, and brand storytelling.",
    image: nativeCreativeHero,
    previewUrl: "https://native-creative.desiglo.com",
  },
];

type Project = (typeof projects)[number];

type AnimatedProjectCardProps = {
  project: Project;
  index: number;
  progress: MotionValue<number>;
};

/* =========================================================
   INDIVIDUAL ANIMATED PROJECT CARD
========================================================= */

function AnimatedProjectCard({
  project,
  index,
  progress,
}: AnimatedProjectCardProps) {
const startX = [470, 160, -160, -470][index];
const startY = [-370, -405, -405, -370][index];
const startRotate = [-8, -3, 3, 8][index];

const cardX = useTransform(
  progress,
  [0, 0.2, 1],
  [startX, startX, 0],
);

const cardY = useTransform(
  progress,
  [0, 0.2, 1],
  [startY, startY, 0],
);

const cardRotate = useTransform(
  progress,
  [0, 0.2, 1],
  [startRotate, startRotate, 0],
);

  return (
    <motion.article
      style={{
        x: cardX,
        y: cardY,
        rotate: cardRotate,
      }}
      className="group origin-center"
    >
      <a
        href={project.previewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live preview`}
        className="relative block overflow-hidden rounded-2xl border border-white/[0.1] bg-[#061820] shadow-[0_30px_80px_rgba(0,0,0,.4)]"
      >
        {/* Browser bar */}
        <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.08] bg-[#0A2029] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

          <div className="ml-2 h-3 flex-1 rounded-full bg-white/[0.04]" />
        </div>

        {/* Website screenshot */}
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} website preview`}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#061820]/0 transition duration-300 group-hover:bg-[#061820]/50">
          <div className="flex translate-y-3 items-center gap-2 rounded-xl border border-white/15 bg-[#061820]/90 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-xl backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Live Preview
            <ExternalLink size={14} />
          </div>
        </div>
      </a>
    </motion.article>
  );
}

/* =========================================================
   HERO + FEATURED WORK
========================================================= */

export default function HeroFeaturedWork() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start 200%", "start 42%"],
  });

  /* Whole project row moves DOWN */
  const cardsY = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [-430, -430, 0],
  );

  /* Hero position is shifted toward the right */
  const cardsX = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [400, 400, 0],
  );

  /* Smaller while inside Hero */
  const cardsScale = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [1.4, 1.4, 1],
  );

  /* Small perspective effect */
  const cardsRotateX = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [5, 5, 0],
  );

  /* Details appear after cards move down */
  const detailsOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.9],
    [0, 1],
  );

  const detailsY = useTransform(
    scrollYProgress,
    [0.55, 0.9],
    [24, 0],
  );

  return (
    <div className="relative bg-[#061820]">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative min-h-[760px] overflow-visible">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-[#168CFF]/10 blur-[120px]" />

          <div className="absolute right-[8%] top-40 h-80 w-80 rounded-full bg-[#39BDF8]/7 blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "54px 54px",
            }}
          />
        </div>

        <Container>
          <div className="relative grid min-h-[760px] items-center gap-16 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            {/* HERO CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
              }}
              className="relative z-10 max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#168CFF]/25 bg-[#168CFF]/8 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39BDF8]" />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9FDCFF]">
                  Web Design & Development
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-[72px]">
                Websites built to make your{" "}
                <span className="bg-gradient-to-r from-[#168CFF] via-[#39BDF8] to-[#E7EAED] bg-clip-text text-transparent">
                  business stand out.
                </span>{" "}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#C9CED3]/85 sm:text-xl">
                Desiglo designs and develops modern, responsive websites that
                help businesses communicate clearly, build credibility, and
                create a stronger online presence.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  to="/start-a-project"
                  className="group"
                >
                  Start a Project

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Button>

                <Button
                  to="/work"
                  variant="secondary"
                >
                  View Our Work
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#C9CED3]/70">
                <span>Responsive by default</span>

                <span className="hidden text-white/20 sm:block">
                  •
                </span>

                <span>Performance focused</span>

                <span className="hidden text-white/20 sm:block">
                  •
                </span>

                <span>SEO-friendly structure</span>
              </div>
            </motion.div>
            <div />
          </div>
        </Container>
      </section>

      {/* ==================================================
          FEATURED WORK
      ================================================== */}

      <section className="relative z-20 overflow-visible border-y border-white/[0.06] bg-[#081C24] pb-28 pt-20 sm:pb-32">
        <Container>
          {/* HEADING */}
          <div className="relative z-20 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
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

          {/* ==================================================
              REAL PROJECTS CONTAINER
          ================================================== */}

          <div
            ref={projectsRef}
            className="relative mt-14 overflow-visible"
          >
            {/* PROJECT IMAGE ROW */}
            <motion.div
              style={{
                x: cardsX,
                y: cardsY,
                scale: cardsScale,
                rotateX: cardsRotateX,
                transformPerspective: 1200,
              }}
              className="relative z-30 grid origin-center gap-6 will-change-transform lg:grid-cols-4"
            >
              {projects.map((project, index) => (
                <AnimatedProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </motion.div>

            {/* PROJECT DETAILS */}
            <motion.div
              style={{
                opacity: detailsOpacity,
                y: detailsY,
              }}
              className="relative z-20 mt-6 grid gap-8 lg:grid-cols-4"
            >
              {projects.map((project) => (
                <div key={project.title}>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-[#39BDF8]">
                    <span>{project.category}</span>

                    <span className="text-white/20">
                      •
                    </span>

                    <span>{project.service}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
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
              ))}
            </motion.div>
          </div>

          {/* MOBILE VIEW ALL */}
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
    </div>
  );
}