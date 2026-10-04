/**
 * All portfolio projects — used by the home page and the Work page.
 * To add a project: put hero.webp in src/assets/work/<slug>/ and add an entry here.
 */
import amberOakCafeHero from "../assets/work/amber-oak-cafe/hero.webp";
import halfKiloCoffeeHero from "../assets/work/half-kilo-coffee/hero.webp";
import brewBeanHero from "../assets/work/brew-bean/hero.webp";
import oliveEmberHero from "../assets/work/olive-ember/hero.webp";
import vantageSneakersHero from "../assets/work/vantage-sneakers/hero.webp";
import dentalClinicHero from "../assets/work/dental-clinic/hero.webp";
import meridianDentalHero from "../assets/work/meridian-dental-clinic/hero.webp";
import sanamCafeHero from "../assets/work/sanam-cafe/hero.webp";
import ollcaCafeHero from "../assets/work/ollca-cafe/hero.webp";
import theSpaceCafeHero from "../assets/work/the-space-cafe/hero.webp";
import moodNajdiCafeHero from "../assets/work/mood-najdi-cafe/hero.webp";
import nativeCreativeHero from "../assets/work/native-creative/hero.webp";
import wemCoffeeHero from "../assets/work/wem-coffee/hero.webp";
import medadCafeHero from "../assets/work/medad-cafe/hero.webp";
import noorAlDiyarHero from "../assets/work/noor-al-diyar/hero.webp";
import atelierFlameHero from "../assets/work/atelier-flame/hero.webp";
import cupCoffeeHero from "../assets/work/cup-coffee/hero.webp";
import mathalethHero from "../assets/work/mathaleth/hero.webp";

export type Project = {
  slug: string;
  title: string;
  category: string;
  services: string;
  description: string;
  url: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "amber-oak-cafe",
    title: "Amber Oak Café",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A warm, modern café website designed around atmosphere, menu discovery, reservations, and the in-store experience.",
    url: "https://amber-oak-cafe.desiglo.com",
    image: amberOakCafeHero,
    featured: true,
  },
  {
    slug: "half-kilo-coffee",
    title: "Half Kilo Coffee",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A refined café website with a calm visual identity, menu discovery, location details, and a responsive customer experience.",
    url: "https://half-kilo-coffee.desiglo.com",
    image: halfKiloCoffeeHero,
  },
  {
    slug: "brew-bean",
    title: "Brew & Bean",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A bold, modern coffee shop website with a distinctive visual identity, menu discovery, location information, and a responsive customer experience.",
    url: "https://brew-bean.desiglo.com",
    image: brewBeanHero,
  },
  {
    slug: "olive-ember",
    title: "Olive Ember",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A warm, earthy café website with a refined visual identity, menu discovery, and a responsive customer experience.",
    url: "https://olive-ember.desiglo.com",
    image: oliveEmberHero,
  },
  {
    slug: "vantage-sneakers",
    title: "Vantage Sneakers",
    category: "Fashion & E-commerce",
    services: "Design & Development",
    description:
      "A bold modern sneaker website focused on product presentation, brand identity, and a premium shopping experience.",
    url: "https://vantage-sneakers.desiglo.com",
    image: vantageSneakersHero,
    featured: true,
  },
  {
    slug: "dental-clinic",
    title: "Dental Clinic",
    category: "Healthcare",
    services: "Design & Development",
    description:
      "A clean modern dental clinic website designed around treatments, patient trust, and appointment conversion.",
    url: "https://dental-clinic.desiglo.com",
    image: dentalClinicHero,
  },
  {
    slug: "meridian-dental-clinic",
    title: "Meridian Dental Clinic",
    category: "Healthcare",
    services: "Design & Development",
    description:
      "A premium dental clinic website combining professional healthcare presentation with a modern patient experience.",
    url: "https://meridian-dental-clinic.desiglo.com",
    image: meridianDentalHero,
    featured: true,
  },
  {
    slug: "sanam-cafe",
    title: "Sanam Café",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A distinctive café website built around atmosphere, brand identity, menu discovery, and customer experience.",
    url: "https://sanam-cafe.desiglo.com",
    image: sanamCafeHero,
  },
  {
    slug: "ollca-cafe",
    title: "Ollca Café",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A modern café website featuring a refined visual identity, menu presentation, and responsive experience.",
    url: "https://ollca-cafe.desiglo.com",
    image: ollcaCafeHero,
  },
  {
    slug: "the-space-cafe",
    title: "The Space Café",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A contemporary café website focused on atmosphere, visual storytelling, menu discovery, and location information.",
    url: "https://the-space-cafe.desiglo.com",
    image: theSpaceCafeHero,
  },
  {
    slug: "mood-najdi-cafe",
    title: "Mood Najdi Café",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A culturally inspired café website combining Najdi character with a polished modern digital experience.",
    url: "https://mood-najdi-cafe.desiglo.com",
    image: moodNajdiCafeHero,
    featured: true,
  },
  {
    slug: "native-creative",
    title: "Native Creative",
    category: "Creative Agency",
    services: "Design & Development",
    description:
      "A modern creative agency website built around strong visual presentation, services, and brand storytelling.",
    url: "https://native-creative.desiglo.com",
    image: nativeCreativeHero,
    featured: true,
  },
  {
    slug: "wem-coffee",
    title: "Wem Coffee",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A polished coffee brand website with an atmospheric visual direction and responsive customer experience.",
    url: "https://wem-coffee.desiglo.com",
    image: wemCoffeeHero,
  },
  {
    slug: "medad-cafe",
    title: "Medad Café",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A refined café website designed around brand atmosphere, menu presentation, and an engaging customer experience.",
    url: "https://medad-cafe.desiglo.com",
    image: medadCafeHero,
  },
  {
    slug: "noor-al-diyar",
    title: "Noor Al Diyar",
    category: "Business Website",
    services: "Design & Development",
    description:
      "A modern business website with a polished visual identity, clear service presentation, and a responsive experience across devices.",
    url: "https://noor-al-diyar.desiglo.com",
    image: noorAlDiyarHero,
  },
  {
    slug: "atelier-flame",
    title: "Atelier Flame",
    category: "Business Website",
    services: "Design & Development",
    description:
      "A refined modern website focused on strong visual presentation, brand identity, and a smooth responsive customer experience.",
    url: "https://atelier-flame-omega.desiglo.com",
    image: atelierFlameHero,
  },
  {
    slug: "cup-coffee",
    title: "Cup Coffee",
    category: "Café & Restaurant",
    services: "Design & Development",
    description:
      "A modern coffee shop website designed around brand atmosphere, menu discovery, and an engaging responsive customer experience.",
    url: "https://cup-coffee-lac.desiglo.com",
    image: cupCoffeeHero,
  },
  {
    slug: "mathaleth",
    title: "Mathaleth",
    category: "Business Website",
    services: "Design & Development",
    description:
      "A contemporary business website combining a distinctive visual identity with clear content presentation and responsive design.",
    url: "https://mathaleth.desiglo.com",
    image: mathalethHero,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
