import TrustStrip from "../components/home/TrustStrip";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import WhyDesiglo from "../components/home/WhyDesiglo";
import ReviewsSection from "../components/home/ReviewsSection";
import HomeCTA from "../components/home/HomeCTA";
import HeroFeaturedWork from "../components/home/HeroFeaturedWork";

export default function Home() {
  return (
    <>
      <HeroFeaturedWork />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <WhyDesiglo />
      <ReviewsSection />
      <HomeCTA />
    </>
  );
}