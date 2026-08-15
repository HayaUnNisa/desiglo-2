import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  useForm,
  ValidationError,
} from "@formspree/react";

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

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [state, formspreeSubmit, reset] =
    useForm("mljrllee");

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
  }

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!form.service) {
      nextErrors.service =
        "Please select a service.";
    }

    if (!form.message.trim()) {
      nextErrors.message =
        "Please tell us about your inquiry.";
    }

    if (!form.consent) {
      nextErrors.consent =
        "Please agree to the privacy statement before continuing.";
    }

    return nextErrors;
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    await formspreeSubmit(event);
  }

  function handleReset() {
    reset();

    setForm(initialForm);
    setErrors({});
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
              Tell Desiglo what you're working on, what
              you need, and where you'd like to take your
              website.
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
                    Use this page for general questions
                    about Desiglo, services, or working
                    together.
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
                    Already know what you need? Use the
                    detailed project questionnaire instead.
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
                  <Mail
                    size={17}
                    className="mt-0.5 text-[#39BDF8]"
                  />

                  <p>
                    You can also add your public Desiglo
                    email address here later.
                  </p>
                </div>
              </div>
            </div>

            {/* Form / Success */}
            <div>
              {state.succeeded ? (
                <div className="rounded-2xl border border-[#168CFF]/20 bg-[#0A2029]/65 p-8 sm:p-10">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/10">
                    <MessageSquareText
                      size={20}
                      className="text-[#39BDF8]"
                    />
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold text-white">
                    Message sent successfully.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#C9CED3]/70">
                    Thanks for getting in touch with
                    Desiglo. Your inquiry has been received
                    and we'll get back to you as soon as
                    possible.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg border border-white/[0.1] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#168CFF]/40 hover:bg-[#168CFF]/10"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-white/[0.08] bg-[#0A2029]/65 p-6 sm:p-8"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className={labelClass}
                      >
                        Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(event) =>
                          updateField(
                            "name",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                        placeholder="Your name"
                      />

                      {errors.name && (
                        <p className="mt-2 text-xs text-red-300">
                          {errors.name}
                        </p>
                      )}

                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="mt-2 text-xs text-red-300"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className={labelClass}
                      >
                        Email *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(event) =>
                          updateField(
                            "email",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                        placeholder="you@example.com"
                      />

                      {errors.email && (
                        <p className="mt-2 text-xs text-red-300">
                          {errors.email}
                        </p>
                      )}

                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="mt-2 text-xs text-red-300"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className={labelClass}
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(event) =>
                          updateField(
                            "company",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                        placeholder="Company name"
                      />
                    </div>

                    {/* Website */}
                    <div>
                      <label
                        htmlFor="website"
                        className={labelClass}
                      >
                        Current Website
                      </label>

                      <input
                        id="website"
                        name="website"
                        type="url"
                        value={form.website}
                        onChange={(event) =>
                          updateField(
                            "website",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                        placeholder="https://"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className={labelClass}
                      >
                        Service Required *
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={(event) =>
                          updateField(
                            "service",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                      >
                        <option value="">
                          Select a service
                        </option>

                        <option value="Website Design">
                          Website Design
                        </option>

                        <option value="Website Development">
                          Website Development
                        </option>

                        <option value="Business Website">
                          Business Website
                        </option>

                        <option value="Landing Page">
                          Landing Page
                        </option>

                        <option value="E-commerce">
                          E-commerce
                        </option>

                        <option value="Website Redesign">
                          Website Redesign
                        </option>

                        <option value="Maintenance">
                          Maintenance
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>

                      {errors.service && (
                        <p className="mt-2 text-xs text-red-300">
                          {errors.service}
                        </p>
                      )}

                      <ValidationError
                        prefix="Service"
                        field="service"
                        errors={state.errors}
                        className="mt-2 text-xs text-red-300"
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <label
                        htmlFor="budget"
                        className={labelClass}
                      >
                        Estimated Budget
                      </label>

                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={(event) =>
                          updateField(
                            "budget",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                      >
                        <option value="">
                          Select budget
                        </option>

                        <option value="$200–$400">
                          $200–$400
                        </option>

                        <option value="$500–$900">
                          $500–$900
                        </option>

                        <option value="$1,000–$2,000">
                          $1,000–$2,000
                        </option>

                        <option value="$2,000+">
                          $2,000+
                        </option>

                        <option value="Not sure yet">
                          Not sure yet
                        </option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="timeline"
                        className={labelClass}
                      >
                        Desired Timeline
                      </label>

                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={(event) =>
                          updateField(
                            "timeline",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                      >
                        <option value="">
                          Select timeline
                        </option>

                        <option value="As soon as possible">
                          As soon as possible
                        </option>

                        <option value="2–4 weeks">
                          2–4 weeks
                        </option>

                        <option value="1–2 months">
                          1–2 months
                        </option>

                        <option value="2–3 months">
                          2–3 months
                        </option>

                        <option value="Flexible">
                          Flexible
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className={labelClass}
                      >
                        Project Description *
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={7}
                        required
                        value={form.message}
                        onChange={(event) =>
                          updateField(
                            "message",
                            event.target.value,
                          )
                        }
                        className={`${inputClass} resize-y`}
                        placeholder="Tell Desiglo what you're working on..."
                      />

                      {errors.message && (
                        <p className="mt-2 text-xs text-red-300">
                          {errors.message}
                        </p>
                      )}

                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="mt-2 text-xs text-red-300"
                      />
                    </div>
                  </div>

                  {/* Privacy Consent */}
                  <div className="mt-6">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        name="privacy_consent"
                        value="yes"
                        required
                        checked={form.consent}
                        onChange={(event) =>
                          updateField(
                            "consent",
                            event.target.checked,
                          )
                        }
                        className="mt-1 h-4 w-4 rounded border-white/20 bg-[#061820] accent-[#168CFF]"
                      />

                      <span className="text-xs leading-6 text-[#C9CED3]/60">
                        I agree that Desiglo may use the
                        information I provide to respond to
                        my inquiry in accordance with the{" "}
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

                  {/* General Formspree error */}
                  <ValidationError
                    errors={state.errors}
                    className="mt-6 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#168CFF] bg-[#168CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(22,140,255,0.18)] transition hover:bg-[#2998FF] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state.submitting
                      ? "Sending..."
                      : "Send Inquiry"}

                    {!state.submitting && (
                      <ArrowRight size={16} />
                    )}
                  </button>

                  <p className="mt-4 text-xs leading-5 text-[#C9CED3]/40">
                    Your information is used only to respond
                    to your inquiry and evaluate your project
                    request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}