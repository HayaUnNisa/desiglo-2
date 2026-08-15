import Container from "../common/Container";
import PricingCard from "./PricingCard";
import { pricingPlans } from "../../data/pricing";

export default function PricingGrid() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-[#C9CED3]/55">
          These ranges are starting estimates. Final pricing depends on page
          count, features, design complexity, integrations, content
          requirements, and project scope.
        </p>
      </Container>
    </section>
  );
}