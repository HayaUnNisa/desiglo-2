import { ArrowRight, Code2, Layout, Monitor, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-[#168CFF]/10 blur-[120px]" />
        <div className="absolute right-[8%] top-40 h-80 w-80 rounded-full bg-[#39BDF8]/7 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
      </div>

      <Container>
        <div className="relative grid min-h-[760px] items-center gap-16 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#168CFF]/25 bg-[#168CFF]/8 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#39BDF8]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9FDCFF]">
                Web Design & Development
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-[72px]">
              Websites built to make your{" "}
              <span className="bg-gradient-to-r from-[#168CFF] via-[#39BDF8] to-[#E7EAED] bg-clip-text text-transparent">
                business look better
              </span>{" "}
              and perform better.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#C9CED3]/85 sm:text-xl">
              Desiglo designs and develops modern, responsive websites that
              help businesses communicate clearly, build credibility, and
              create a stronger online presence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/start-a-project" className="group">
                Start a Project

                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Button>

              <Button to="/work" variant="secondary">
                View Our Work
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#C9CED3]/70">
              <span>Responsive by default</span>
              <span className="hidden text-white/20 sm:block">•</span>
              <span>Performance focused</span>
              <span className="hidden text-white/20 sm:block">•</span>
              <span>SEO-friendly structure</span>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="absolute -inset-12 rounded-full bg-[#168CFF]/8 blur-[100px]" />

            <div className="relative">
              {/* Desktop */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A2029] shadow-[0_40px_120px_rgba(0,0,0,.45)]">
                <div className="flex h-11 items-center gap-2 border-b border-white/[0.07] px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

                  <div className="ml-3 h-5 flex-1 rounded-md bg-white/[0.04]" />
                </div>

                <div className="p-5 sm:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#168CFF]">
                        <Layout size={17} />
                      </div>

                      <div>
                        <div className="h-2.5 w-24 rounded-full bg-white/80" />
                        <div className="mt-2 h-2 w-16 rounded-full bg-white/20" />
                      </div>
                    </div>

                    <div className="hidden gap-4 sm:flex">
                      <div className="h-2 w-10 rounded-full bg-white/20" />
                      <div className="h-2 w-10 rounded-full bg-white/20" />
                      <div className="h-2 w-10 rounded-full bg-white/20" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1.1fr_.9fr]">
                    <div className="rounded-xl border border-white/[0.07] bg-[#061820] p-5">
                      <div className="mb-3 h-2.5 w-20 rounded-full bg-[#39BDF8]/80" />

                      <div className="h-7 w-[90%] rounded-md bg-white/90" />
                      <div className="mt-2 h-7 w-[65%] rounded-md bg-white/90" />

                      <div className="mt-5 h-2 w-[92%] rounded-full bg-white/15" />
                      <div className="mt-2 h-2 w-[82%] rounded-full bg-white/10" />
                      <div className="mt-2 h-2 w-[70%] rounded-full bg-white/10" />

                      <div className="mt-6 flex gap-3">
                        <div className="h-9 w-28 rounded-lg bg-[#168CFF]" />
                        <div className="h-9 w-24 rounded-lg border border-white/10 bg-white/[0.025]" />
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-br from-[#102F3A] to-[#061820] p-5">
                      <div className="absolute right-[-40px] top-[-30px] h-36 w-36 rotate-45 rounded-3xl border border-[#168CFF]/15" />

                      <div className="grid h-full place-items-center">
                        <div className="relative grid h-36 w-36 place-items-center">
                          <div className="absolute h-28 w-28 rotate-45 rounded-2xl border border-[#168CFF]/30 bg-[#168CFF]/8" />
                          <div className="absolute h-20 w-20 rotate-45 rounded-xl border border-[#39BDF8]/20" />

                          <Code2
                            size={38}
                            strokeWidth={1.5}
                            className="relative text-[#39BDF8]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-3"
                      >
                        <div className="h-2 w-12 rounded-full bg-white/25" />
                        <div className="mt-3 h-2 w-[80%] rounded-full bg-white/10" />
                        <div className="mt-2 h-2 w-[60%] rounded-full bg-white/[0.07]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tablet */}
              <div className="absolute -bottom-10 -left-4 hidden w-[230px] overflow-hidden rounded-xl border border-white/10 bg-[#0A2029] shadow-2xl sm:block">
                <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.06] px-3">
                  <Monitor size={12} className="text-[#39BDF8]" />
                  <div className="h-1.5 w-16 rounded bg-white/15" />
                </div>

                <div className="p-3">
                  <div className="h-24 rounded-lg bg-gradient-to-br from-[#168CFF]/18 to-[#061820]" />
                  <div className="mt-3 h-2 w-[80%] rounded bg-white/20" />
                  <div className="mt-2 h-2 w-[55%] rounded bg-white/10" />
                </div>
              </div>

              {/* Mobile */}
              <div className="absolute -bottom-14 right-4 w-[130px] overflow-hidden rounded-[18px] border border-white/10 bg-[#081D26] p-2 shadow-2xl sm:right-[-18px]">
                <div className="mb-2 flex justify-center">
                  <div className="h-1.5 w-8 rounded-full bg-white/10" />
                </div>

                <div className="rounded-[12px] bg-[#061820] p-2.5">
                  <Smartphone
                    size={15}
                    className="mb-4 text-[#39BDF8]"
                  />

                  <div className="h-2 w-12 rounded bg-[#168CFF]/60" />
                  <div className="mt-2 h-3 w-[90%] rounded bg-white/80" />
                  <div className="mt-1 h-3 w-[65%] rounded bg-white/80" />

                  <div className="mt-3 h-1.5 w-full rounded bg-white/10" />
                  <div className="mt-1.5 h-1.5 w-[75%] rounded bg-white/[0.07]" />

                  <div className="mt-4 h-7 rounded-md bg-[#168CFF]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}