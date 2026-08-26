import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  questions: FAQItem[];
};

const categories: FAQCategory[] = [
  {
    title: "General",
    questions: [
      {
        question: "What does Desiglo do?",
        answer:
          "Desiglo provides web design and web development services for businesses, professionals, startups, service providers, and brands.",
      },
      {
        question: "What types of websites does Desiglo build?",
        answer:
          "Projects can include business websites, landing pages, custom websites, e-commerce websites, redesigns, and development-focused projects.",
      },
      {
        question: "Who does Desiglo work with?",
        answer:
          "Desiglo can work with businesses, consultants, professionals, startups, agencies, service providers, and other organizations that need a professional website.",
      },
      {
        question: "Can Desiglo work with international clients?",
        answer:
          "Yes. Project communication and delivery can be handled remotely where suitable for both sides.",
      },
      {
        question: "Can Desiglo redesign my current website?",
        answer:
          "Yes. Existing websites can be redesigned to improve visual quality, navigation, mobile usability, consistency, performance, and overall structure.",
      },
    ],
  },

  {
    title: "Pricing",
    questions: [
      {
        question: "How much does a website cost?",
        answer:
          "Pricing depends on project scope. Desiglo currently uses starting ranges from Basic at $200–$400 through Standard, Premium, and Custom project estimates.",
      },
      {
        question: "What affects website pricing?",
        answer:
          "Page count, design complexity, functionality, CMS requirements, e-commerce, integrations, content needs, animations, timeline, and technical complexity can all affect the final estimate.",
      },
      {
        question: "Is a deposit required?",
        answer:
          "The payment structure should be confirmed in the final project proposal before work begins.",
      },
      {
        question: "Are there ongoing costs?",
        answer:
          "Some projects may have ongoing costs such as hosting, domain registration, third-party services, maintenance, or paid integrations. These should be discussed before the project begins.",
      },
      {
        question: "How do quotes work?",
        answer:
          "After reviewing the project requirements, Desiglo can prepare an estimate based on the actual scope and features required.",
      },
    ],
  },

  {
    title: "Process",
    questions: [
      {
        question: "How long does a project take?",
        answer:
          "Timeline depends on the number of pages, design complexity, features, content readiness, feedback, and technical requirements.",
      },
      {
        question: "What does Desiglo need from me?",
        answer:
          "Typically, Desiglo needs information about your business, target audience, project goals, content, branding, required features, and examples or references where useful.",
      },
      {
        question: "How are revisions handled?",
        answer:
          "Revision rounds should be defined in the project scope so both sides understand what is included before work begins.",
      },
      {
        question: "Can I provide design inspiration?",
        answer:
          "Yes. Reference websites can help communicate your preferences, but the final design should be created specifically for your business rather than copied.",
      },
      {
        question: "What happens if the scope changes?",
        answer:
          "Additional pages, features, integrations, or major changes outside the agreed scope may require an updated estimate.",
      },
    ],
  },

  {
    title: "Technical",
    questions: [
      {
        question: "Will my website work on mobile?",
        answer:
          "Yes. Responsive design is part of the core approach so layouts work properly across phones, tablets, laptops, and desktops.",
      },
      {
        question: "Will it be SEO-friendly?",
        answer:
          "Desiglo can build strong technical SEO foundations including semantic structure, heading hierarchy, metadata support, responsive layouts, and performance-focused development.",
      },
      {
        question: "Can I edit the website myself?",
        answer:
          "That depends on the technology and CMS chosen for your project. Editing requirements should be discussed during planning.",
      },
      {
        question: "Can Desiglo integrate third-party services?",
        answer:
          "Yes, where technically supported. Integrations can include forms, analytics, CMS platforms, APIs, booking systems, payments, and other services depending on project requirements.",
      },
      {
        question: "Can Desiglo improve website performance?",
        answer:
          "Yes. Performance work can include image optimization, lightweight components, efficient loading, responsive assets, and reducing unnecessary JavaScript.",
      },
      {
        question: "Does Desiglo provide hosting?",
        answer:
          "Hosting is not automatically included unless it is specifically agreed as part of the project. Suitable deployment options can be discussed.",
      },
    ],
  },

  {
    title: "After Launch",
    questions: [
      {
        question: "What happens after launch?",
        answer:
          "The website can be reviewed after deployment and ongoing support options can be discussed depending on the project.",
      },
      {
        question: "Does Desiglo offer maintenance?",
        answer:
          "Yes. Maintenance can include content updates, bug fixes, technical improvements, dependency updates, and new sections depending on the agreed scope.",
      },
      {
        question: "Can features be added later?",
        answer:
          "Yes. Websites should be structured so new pages and features can be added as the business evolves.",
      },
      {
        question: "Can Desiglo update the website?",
        answer:
          "Yes. Ongoing updates and improvements can be quoted separately or handled through an agreed maintenance arrangement.",
      },
    ],
  },
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.07] py-20 sm:py-24">
        <div className="absolute left-[12%] top-0 h-72 w-72 rounded-full bg-[#168CFF]/8 blur-[120px]" />

        <Container>
          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              FAQ
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl">
              Questions before starting a project?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C9CED3]/75">
              Find answers about Desiglo's services, pricing, process,
              technical approach, and what happens after launch.
            </p>
          </div>
        </Container>
      </section>

      {/* Questions */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="space-y-20">
            {categories.map((category) => (
              <div
                key={category.title}
                className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16"
              >
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {category.title}
                  </h2>
                </div>

                <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
                  {category.questions.map((item) => {
                    const id = `${category.title}-${item.question}`;
                    const isOpen = openQuestion === id;

                    return (
                      <div key={item.question}>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenQuestion(isOpen ? null : id)
                          }
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
                          <p className="max-w-3xl pb-6 text-sm leading-7 text-[#C9CED3]/70">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24 sm:pb-28">
        <Container>
          <div className="rounded-3xl border border-[#168CFF]/20 bg-[#0A2029] px-6 py-14 sm:px-10 lg:px-14">
            <h2 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
              Still have a question?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[#C9CED3]/70">
              Contact Desiglo for a general question, or use the project form
              if you already have a website project in mind.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact">Contact Desiglo</Button>

              <Button to="/start-a-project" variant="secondary">
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}