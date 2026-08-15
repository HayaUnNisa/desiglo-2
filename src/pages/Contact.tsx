import { FormEvent, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";

type FormData = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  consent: boolean;
};

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string>("");

  function updateField(
    field: keyof FormData,
    value: string | boolean,
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));

    setStatus("");
  }

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.service) {
      nextErrors.service = "Please select a service.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please tell us about your inquiry.";
    }

    if (!form.consent) {
      nextErrors.consent =
        "Please agree to the privacy statement before continuing.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("");
      return;
    }

    setStatus(
      "The contact form is ready, but Formspree has not been connected yet.",
    );
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/[0.09] bg-[#081C24] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#C9CED3]/30 focus:border-[#168CFF]/60 focus:ring-2 focus:ring-[#168CFF]/10";

  const labelClass =
    "text-sm font-medium text-[#E7EAED]";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.07] py-20 sm:py-24">
        <div className="absolute left-[12%] top-0 h-72 w-72 rounded-full bg-[#168CFF]/8 blur-[120px]" />

        <Container>
          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
              Contact
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl">
              Let's talk about your website.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C9CED3]/75">
              Tell Desiglo what you're working on, what you need, and where
              you'd like to take your website.
            </p>
          </div>
        </Container>
      </section>

      {/* Main */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                Get in Touch
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-white">
                Choose the right way to contact Desiglo.
              </h2>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/[0.08] bg-[#0A2029]/65 p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-[#168CFF]/20 bg-[#168CFF]/8">
                    <MessageSquareText
                      size={18}
                      className="text-[#39BDF8]"
                    />
                  </div>

                  <h3 className="mt-5 font-semibold text-white">
                    General Question
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#C9CED3]/65">
                    Use this page for general questions about Desiglo,
                    services, or working together.
                  </p>
                </div>

                <Link
                  to="/start-a-project"
                  className="group block rounded-2xl border border-[#168CFF]/20 bg-[#168CFF]/5 p-6 transition hover:border-[#168CFF]/40"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#168CFF]">
                    <BriefcaseBusiness size={18} />
                  </div>

                  <h3 className="mt-5 font-semibold text-white">
                    Start a Project
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#C9CED3]/65">
                    Already know what you need? Use the detailed project
                    questionnaire instead.
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9FDCFF]">
                    Project questionnaire
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>

                <div className="flex items-start gap-3 pt-4 text-sm text-[#C9CED3]/55">
                  <Mail size={17} className="mt-0.5 text-[#39BDF8]" />

                  <p>
                    A public Desiglo email address can be added here once you
                    provide the official contact email.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/[0.08] bg-[#0A2029]/65 p-6 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    className={inputClass}
                    placeholder="Your name"
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-300">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    className={inputClass}
                    placeholder="you@example.com"
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-300">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={(event) =>
                      updateField("company", event.target.value)
                    }
                    className={inputClass}
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="website" className={labelClass}>
                    Current Website
                  </label>

                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={form.website}
                    onChange={(event) =>
                      updateField("website", event.target.value)
                    }
                    className={inputClass}
                    placeholder="https://"
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service Required *
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={(event) =>
                      updateField("service", event.target.value)
                    }
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    <option>Website Design</option>
                    <option>Website Development</option>
                    <option>Business Website</option>
                    <option>Landing Page</option>
                    <option>E-commerce</option>
                    <option>Website Redesign</option>
                    <option>Maintenance</option>
                    <option>Other</option>
                  </select>

                  {errors.service && (
                    <p className="mt-2 text-xs text-red-300">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={(event) =>
                      updateField("budget", event.target.value)
                    }
                    className={inputClass}
                  >
                    <option value="">Select budget</option>
                    <option>$200–$400</option>
                    <option>$500–$900</option>
                    <option>$1,000–$2,000</option>
                    <option>$2,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="timeline" className={labelClass}>
                    Desired Timeline
                  </label>

                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={(event) =>
                      updateField("timeline", event.target.value)
                    }
                    className={inputClass}
                  >
                    <option value="">Select timeline</option>
                    <option>As soon as possible</option>
                    <option>2–4 weeks</option>
                    <option>1–2 months</option>
                    <option>2–3 months</option>
                    <option>Flexible</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Project Description *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    className={`${inputClass} resize-y`}
                    placeholder="Tell Desiglo what you're working on..."
                  />

                  {errors.message && (
                    <p className="mt-2 text-xs text-red-300">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(event) =>
                      updateField("consent", event.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-[#061820] accent-[#168CFF]"
                  />

                  <span className="text-xs leading-6 text-[#C9CED3]/60">
                    I agree that Desiglo may use the information I provide to
                    respond to my inquiry in accordance with the{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-[#9FDCFF] hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {errors.consent && (
                  <p className="mt-2 text-xs text-red-300">
                    {errors.consent}
                  </p>
                )}
              </div>

              {status && (
                <div className="mt-6 rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/7 px-4 py-3 text-sm text-[#9FDCFF]">
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#168CFF] bg-[#168CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(22,140,255,0.18)] transition hover:bg-[#2998FF]"
              >
                Send Inquiry
                <ArrowRight size={16} />
              </button>

              <p className="mt-4 text-xs leading-5 text-[#C9CED3]/40">
                Form submission will be activated when Formspree is connected.
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}