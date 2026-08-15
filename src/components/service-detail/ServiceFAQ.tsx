import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "../common/Container";

import type { ServiceDetail } from "../../data/serviceDetails";

type ServiceFAQProps = {
  service: ServiceDetail;
};

export default function ServiceFAQ({
  service,
}: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Common questions about this service.
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-[#C9CED3]/70">
              These answers cover some of the most common questions clients
              may have before starting a project.
            </p>
          </div>

          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {service.faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-semibold text-white">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#39BDF8] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="max-w-2xl pb-6 text-sm leading-7 text-[#C9CED3]/70">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}