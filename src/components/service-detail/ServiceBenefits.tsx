import {
  BadgeCheck,
  Eye,
  LayoutDashboard,
  MonitorSmartphone,
  TrendingUp,
  Users,
} from "lucide-react";

import Container from "../common/Container";

import type { ServiceDetail } from "../../data/serviceDetails";

type ServiceBenefitsProps = {
  service: ServiceDetail;
};

const icons = [
  BadgeCheck,
  Eye,
  Users,
  LayoutDashboard,
  MonitorSmartphone,
  TrendingUp,
];

export default function ServiceBenefits({
  service,
}: ServiceBenefitsProps) {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
            Benefits
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
            Design that supports more than appearance.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#C9CED3]/70">
            A stronger website experience can improve how visitors understand,
            use, and interact with your business online.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article key={benefit.title}>
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/8">
                  <Icon
                    size={19}
                    className="text-[#39BDF8]"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#C9CED3]/65">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}