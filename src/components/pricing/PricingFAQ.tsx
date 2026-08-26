import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "../common/Container";

const questions = [
  {
    question: "Are these fixed prices?",
    answer:
      "No. These are starting ranges. Final pricing depends on the number of pages, features, content, integrations, design complexity, and project scope.",
  },
  {
    question: "Can I add extra pages?",
    answer:
      "Yes. Additional pages can be added to any suitable package and quoted based on their complexity and content requirements.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Hosting is not automatically included unless it is specifically added to the project scope. Desiglo can help prepare the website for deployment and discuss suitable hosting options.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Payment structure can depend on the project. The final proposal should clearly explain the agreed payment schedule before work begins.",
  },
  {
    question: "What if my project does not fit a package?",
    answer:
      "Choose the Custom option. Desiglo can create a project scope and estimate based on your actual requirements.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Pricing FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white">
              Common pricing questions.
            </h2>
          </div>

          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {questions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="font-semibold text-white">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#39BDF8] transition-transform ${
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