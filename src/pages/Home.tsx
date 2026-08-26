import HomeHero from "../components/home/HomeHero";
import TrustStrip from "../components/home/TrustStrip";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedWork from "../components/home/FeaturedWork";
import ProcessSection from "../components/home/ProcessSection";
import WhyDesiglo from "../components/home/WhyDesiglo";
import HomeCTA from "../components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSection />
      <WhyDesiglo />
      <HomeCTA />
    </>
  );
}