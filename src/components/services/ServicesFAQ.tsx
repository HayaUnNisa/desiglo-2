import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "../common/Container";

const faqs = [
  {
    question: "What type of websites does Desiglo build?",
    answer:
      "Desiglo works on business websites, landing pages, e-commerce websites, redesigns, custom websites, and development-focused projects.",
  },
  {
    question: "Can I combine multiple services?",
    answer:
      "Yes. Most complete website projects combine strategy, design, development, responsive implementation, performance work, and launch preparation.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on scope, pages, features, design complexity, integrations, and technical requirements. You can view the Pricing page for starting ranges.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Responsive design is part of the core approach, so websites are designed to work across phones, tablets, laptops, and desktops.",
  },
  {
    question: "Can Desiglo redesign an existing website?",
    answer:
      "Yes. Website redesign projects can improve visual quality, mobile usability, navigation, structure, performance, and conversion paths.",
  },
  {
    question: "Does Desiglo provide maintenance after launch?",
    answer:
      "Yes. Maintenance can include updates, fixes, improvements, content changes, and ongoing technical support depending on the agreed scope.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-y border-white/[0.06] bg-[#081C24] py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Questions about our services.
            </h2>
          </div>

          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {faqs.map((item, index) => {
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