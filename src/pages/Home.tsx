import { Code2, Command, Gauge, Layers, PenTool, Smartphone } from "lucide-react";
import HomeHero from "../components/premium/HomeHero";
import StatsStrip from "../components/premium/StatsStrip";
import WorkStack from "../components/premium/WorkStack";
import ServicesBento from "../components/premium/ServicesBento";
import ProcessLine from "../components/premium/ProcessLine";
import PricingTeaser from "../components/premium/PricingTeaser";
import HomeFAQ from "../components/premium/HomeFAQ";
import ReviewsSection from "../components/home/ReviewsSection";

const capabilities = [
  { icon: PenTool, label: "Thoughtful design" },
  { icon: Code2, label: "Modern development" },
  { icon: Layers, label: "Room to grow" },
  { icon: Command, label: "Details that matter" },
  { icon: Smartphone, label: "Responsive by design" },
  { icon: Gauge, label: "Performance focused" },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section aria-label="Our website capabilities" className="overflow-hidden border-y border-[var(--line)] py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-[dg-marquee_36s_linear_infinite] hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex shrink-0 items-center">
              {capabilities.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 px-8 text-[15px] font-medium text-[var(--silver)]">
                  <Icon size={18} strokeWidth={1.6} className="text-[var(--accent)]" aria-hidden="true" />
                  {label}
                  <span className="ml-8 h-1 w-1 rounded-full bg-[var(--line)]" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <WorkStack />
      <StatsStrip />
      <ServicesBento />
      <ProcessLine />
      <PricingTeaser />
      <ReviewsSection />
      <HomeFAQ />
    </>
  );
}
