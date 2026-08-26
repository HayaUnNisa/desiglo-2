import type { ReactNode } from "react";

import Container from "../common/Container";

export type LegalSection = {
  id: string;
  title: string;
  content?: ReactNode;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  lastUpdated: string;
  notice?: ReactNode;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow = "Legal",
  title,
  description,
  lastUpdated,
  notice,
  sections,
}: LegalPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.07] py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#168CFF]/8 blur-[120px]" />
        </div>

        <Container>
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              {eyebrow}
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C9CED3]/70">
              {description}
            </p>

            <p className="mt-5 text-sm text-[#C9CED3]/45">
              Last updated: {lastUpdated}
            </p>

            {notice && <div className="mt-7">{notice}</div>}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            {/* TOC */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold text-white">
                On this page
              </p>

              <nav
                aria-label={`${title} sections`}
                className="mt-5 space-y-3"
              >
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm leading-6 text-[#C9CED3]/55 transition-colors hover:text-[#39BDF8]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Legal content */}
            <div className="max-w-3xl">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-28 py-8 first:pt-0 ${
                    index !== sections.length - 1
                      ? "border-b border-white/[0.07]"
                      : ""
                  }`}
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="mt-4 text-sm leading-8 text-[#C9CED3]/70"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.items && (
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex gap-3 text-sm leading-7 text-[#C9CED3]/70"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#39BDF8]"
                          />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.content && (
                    <div className="mt-5">{section.content}</div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}