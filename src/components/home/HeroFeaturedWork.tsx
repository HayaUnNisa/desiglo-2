import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowDown, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import amber from "../../assets/work/amber-oak-cafe/hero.webp";
import vantage from "../../assets/work/vantage-sneakers/hero.webp";
import meridian from "../../assets/work/meridian-dental-clinic/hero.webp";
import native from "../../assets/work/native-creative/hero.webp";
const projects = [
  {
    title: "Amber Oak Café",
    category: "Hospitality",
    image: amber,
    url: "amber-oak-cafe",
    color: "sand",
  },
  {
    title: "Vantage Sneakers",
    category: "E-commerce",
    image: vantage,
    url: "vantage-sneakers",
    color: "sage",
  },
  {
    title: "Meridian Dental",
    category: "Healthcare",
    image: meridian,
    url: "meridian-dental-clinic",
    color: "blue",
  },
  {
    title: "Native Creative",
    category: "Creative studio",
    image: native,
    url: "native-creative",
    color: "lilac",
  },
];
type Offset = { x: number; y: number; scale: number; active: boolean };
function ProjectCard({
  project,
  index,
  progress,
  offset,
}: {
  project: (typeof projects)[number];
  index: number;
  progress: MotionValue<number>;
  offset: Offset;
}) {
  const x = useTransform(progress, [0, 1], [offset.x, 0]);
  const y = useTransform(progress, [0, 1], [offset.y, 0]);
  const rotate = useTransform(progress, [0, 1], [[-9, -3, 5, 11][index], 0]);
  const scale = useTransform(progress, [0, 1], [offset.scale, 1]);
  const opacity = useTransform(progress, [0.65, 1], [0, 1]);
  return (
    <article className="project-slot">
      <motion.a
        href={"https://" + project.url + ".desiglo.com"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={"Preview " + project.title + " template"}
        style={offset.active ? { x, y, rotate, scale } : undefined}
        className={"project-visual " + project.color}
      >
        <div className="browser-chrome">
          <i />
          <i />
          <i />
          <span>{project.url}.desiglo.com</span>
          <ArrowUpRight size={12} />
        </div>
        <img
          src={project.image}
          alt={project.title + " website preview"}
          width="960"
          height="600"
        />
        <span className="project-open">
          <ArrowUpRight size={23} />
        </span>
      </motion.a>
      <motion.div
        className="project-caption"
        style={offset.active ? { opacity } : undefined}
      >
        <p>
          {project.category}
          <span>Template</span>
        </p>
        <a
          href={"https://" + project.url + ".desiglo.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
          <ArrowUpRight size={17} />
        </a>
      </motion.div>
    </article>
  );
}
export default function HeroFeaturedWork() {
  const section = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [offsets, setOffsets] = useState<Offset[]>(
    projects.map(() => ({ x: 0, y: 0, scale: 1, active: false })),
  );
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start 100px", "end 85%"],
  });
  const cardProgress = useTransform(
  scrollYProgress,
  [0, 0.65],
  [0, 1],
  { clamp: true },
  );
  useLayoutEffect(() => {
    const measure = () => {
      if (!stage.current || !grid.current) return;
      const target = stage.current.getBoundingClientRect();
      const slots = Array.from(grid.current.children);
      const active = window.innerWidth >= 1000 && !reduced;
      setOffsets(
        slots.map((slot, i) => {
          const rect = slot.getBoundingClientRect();
          return {
            x:
              target.left +
              target.width / 2 -
              (rect.left + rect.width / 2) +
              (i - 1.5) * 28,
            y:
              target.top +
              target.height / 2 -
              (rect.top + (rect.width * 0.68 + 30) / 2) +
              (i - 1.5) * -13,
            scale: Math.min(1.65, (target.width / rect.width) * 0.86),
            active,
          };
        }),
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (grid.current) observer.observe(grid.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reduced]);
  return (
    <div ref={section} className="hero-work">
      <section className="dg-container hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> INDEPENDENT WEB DESIGN & DEVELOPMENT
          </p>
          <h1>
            A better website.
            <br />A bigger <span>possibility.</span>
          </h1>
          <p className="hero-description">
            For businesses ready for their next chapter. We turn what makes you
            different into a website people remember.
          </p>
          <div className="hero-actions">
            <Button to="/start-a-project">
              Let's build something <ArrowUpRight size={18} />
            </Button>
            <Link className="text-link" to="/#selected-work">
              Explore our work <ArrowDown size={16} />
            </Link>
          </div>
          <div className="hero-checks">
            <span>
              <Check size={14} /> Designed for your brand
            </span>
            <span>
              <Check size={14} /> Built for every screen
            </span>
          </div>
        </div>
        <div ref={stage} className="hero-stage" aria-hidden="true">
          <div className="stage-orbit" />
          <img className="mobile-hero-image" src={vantage} alt="" />
        </div>
        <div className="hero-bottom">
          <span>STRATEGY. DESIGN. DEVELOPMENT.</span>
          <span>
            Scroll to explore <ArrowDown size={13} />
          </span>
        </div>
      </section>
      <section className="featured-section" id="selected-work">
        <div className="dg-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                Different businesses.
                <br />
                <span>Same attention to detail.</span>
              </h2>
            </div>
            <Link className="text-link" to="/work">
              All projects <ArrowRight size={17} />
            </Link>
          </div>
          <div ref={grid} className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
                progress={cardProgress}
                offset={offsets[i]}
              />
            ))}
          </div>
          <p className="portfolio-note">
            A selection of our website templates. Explore each live experience.
          </p>
        </div>
      </section>
    </div>
  );
}
