import PricingHero from "../components/pricing/PricingHero";
import PricingGrid from "../components/pricing/PricingGrid";
import WhatsIncluded from "../components/pricing/WhatsIncluded";
import PricingFAQ from "../components/pricing/PricingFAQ";
import PricingCTA from "../components/pricing/PricingCTA";

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingGrid />
      <WhatsIncluded />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}