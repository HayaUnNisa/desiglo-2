import {
  Gauge,
  Layers3,
  MessageSquareText,
  MonitorSmartphone,
  Search,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";

const reasons = [
  {
    icon: Sparkles,
    title: "Thoughtful Design",
    description:
      "Design choices are made to improve clarity, usability, and business communication.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive by Default",
    description:
      "Layouts are designed to work properly across phones, tablets, laptops, and desktops.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description:
      "Websites are built with efficient layouts, optimized assets, and lightweight interactions.",
  },
  {
    icon: Layers3,
    title: "Maintainable Structure",
    description:
      "Reusable components and clean architecture make future improvements easier.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    description:
      "Pages are structured with clean headings, readable content, and technical SEO basics.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "Project decisions and progress are kept understandable throughout the build.",
  },
];

export default function ServicesWhy() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
            Why Desiglo
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
            Good websites need more than good visuals.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
            Design, development, usability, performance, and maintainability
            all need to work together.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                <Icon size={19} className="text-[#39BDF8]" />
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