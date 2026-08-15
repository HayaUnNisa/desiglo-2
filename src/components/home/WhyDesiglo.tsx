import {
  Gauge,
  Layers3,
  MessageSquareText,
  MonitorSmartphone,
  MousePointer2,
  ScanSearch,
} from "lucide-react";

import Container from "../common/Container";

const features = [
  {
    icon: MousePointer2,
    title: "Thoughtful Design",
    description:
      "Design decisions should support usability, clarity, and real business objectives.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Development",
    description:
      "Every website is designed to work properly across phones, tablets, laptops, and desktops.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Layouts, assets, and interactions are built with speed and efficiency in mind.",
  },
  {
    icon: Layers3,
    title: "Maintainable Development",
    description:
      "Reusable components and clean architecture make websites easier to improve over time.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "Project decisions and progress should remain understandable throughout the process.",
  },
  {
    icon: ScanSearch,
    title: "Attention to Detail",
    description:
      "Typography, spacing, responsiveness, interactions, and usability all receive careful attention.",
  },
];

export default function WhyDesiglo() {
  return (
    <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
            Why Desiglo
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
            Built with purpose, not just pixels.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
            A professional website should look good, work properly, communicate
            clearly, and remain useful as your business evolves.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
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