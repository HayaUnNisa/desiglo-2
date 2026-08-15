import {
  Gauge,
  Search,
  Smartphone,
  Layers3,
  MessageSquareText,
  Rocket,
} from "lucide-react";

import Container from "../common/Container";

const items = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Layouts are designed to work properly across phones, tablets, laptops, and desktops.",
  },
  {
    icon: Gauge,
    title: "Performance Focus",
    description:
      "Images, layouts, and code are structured with speed and efficiency in mind.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    description:
      "Pages include a clean heading structure and technical foundations for search visibility.",
  },
  {
    icon: Layers3,
    title: "Reusable Structure",
    description:
      "Websites are built with maintainable components so they can evolve more easily.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "Project decisions and progress are kept understandable throughout the build.",
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description:
      "Final checks and deployment preparation are included before the website goes live.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="border-y border-white/[0.06] bg-[#081C24] py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
            Included
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
            Every project starts with the essentials.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-[#168CFF]/20 bg-[#168CFF]/8">
                <Icon size={18} className="text-[#39BDF8]" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#C9CED3]/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}