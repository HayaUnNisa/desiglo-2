import {
  Gauge,
  Search,
  Smartphone,
  Code2,
  MessagesSquare,
} from "lucide-react";

import Container from "../common/Container";

const items = [
  {
    icon: Smartphone,
    label: "Responsive by Default",
  },
  {
    icon: Gauge,
    label: "Performance Focused",
  },
  {
    icon: Search,
    label: "SEO-Friendly Structure",
  },
  {
    icon: Code2,
    label: "Modern Development",
  },
  {
    icon: MessagesSquare,
    label: "Clear Communication",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/[0.07] bg-white/[0.015]">
      <Container>
        <div className="grid divide-y divide-white/[0.06] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-5 first:pl-0 last:pr-0 lg:justify-center"
            >
              <Icon size={17} className="shrink-0 text-[#39BDF8]" />

              <span className="text-sm font-medium text-[#C9CED3]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}