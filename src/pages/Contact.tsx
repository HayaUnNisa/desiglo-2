import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../components/common/Button";
export default function Contact({ project = false }: { project?: boolean }) {
  const [params] = useSearchParams();
  const [state, submit, reset] = useForm(
    import.meta.env.VITE_FORMSPREE_FORM_ID || "mljrllee",
  );
  const [error, setError] = useState("");
  const selected = params.get("plan") || "";
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    try {
      await submit(e);
    } catch {
      setError(
        "Your inquiry could not be sent. Please check your connection and try again.",
      );
    }
  }
  return (
    <section className="project-form-page dg-container">
      <div className="project-form-header">
        <p className="eyebrow">
          {project ? "START A PROJECT" : "LET’S CONNECT"}
        </p>
        <h1>
          {project ? (
            <>
              Your next chapter
              <br />
              starts here.
            </>
          ) : (
            <>
              Good things start
              <br />
              with a conversation.
            </>
          )}
        </h1>
        <p>
          Tell us a little about your business and what you have in mind. We’ll
          take it from there.
        </p>
      </div>
      <div className="inquiry-grid">
        <aside className="inquiry-aside">
          <h2>From an idea to a plan.</h2>
          <p>
            You don’t need a perfect brief. A few details will help us
            understand where you are and where you want to go.
          </p>
          {[
            "Share your goals and requirements",
            "Discuss the right approach",
            "Receive a tailored scope and estimate",
          ].map((s, i) => (
            <div className="inquiry-step" key={s}>
              <span>0{i + 1}</span>
              {s}
            </div>
          ))}
          <p>
            Looking for a starting point?
            <br />
            <Link className="text-link" to="/pricing">
              Explore our packages <ArrowUpRight size={15} />
            </Link>
          </p>
        </aside>
        <div className="inquiry-panel">
          {state.succeeded ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={42} />
              <h2>Thanks for reaching out.</h2>
              <p>
                Your inquiry has been sent. We’ll review the details and reply
                using the email address you provided.
              </p>
              <Button onClick={() => reset()} variant="secondary">
                Send another inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <input
                type="hidden"
                name="source"
                value={project ? "Project inquiry" : "Contact inquiry"}
              />
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
                aria-hidden="true"
              />
              <div className="form-grid">
                <label>
                  Your name *
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Morgan"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  Email address *
                  <input
                    name="email"
                    autoComplete="email"
                    type="email"
                    placeholder="alex@company.com"
                    required
                    maxLength={254}
                  />
                </label>
                <label>
                  Company
                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder="Your business name"
                    maxLength={150}
                  />
                </label>
                <label>
                  Current website
                  <input
                    name="website"
                    placeholder="yourwebsite.com"
                    maxLength={300}
                  />
                </label>
                <label>
                  What do you need? *
                  <select name="service" required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Website Design</option>
                    <option>Website Development</option>
                    <option>Business Website</option>
                    <option>Landing Page</option>
                    <option>E-commerce</option>
                    <option>Website Redesign</option>
                    <option>Maintenance</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>
                  Estimated budget (USD)
                  <select
                    name="budget"
                    defaultValue={
                      selected === "Basic"
                        ? "$1,000–$1,500"
                        : selected === "Standard"
                          ? "$1,500–$2,000"
                          : selected === "Premium"
                            ? "$2,000–$3,000"
                            : ""
                    }
                  >
                    <option value="">Select a range</option>
                    <option>Under $1,000 — smaller updates</option>
                    <option>$1,000–$1,500</option>
                    <option>$1,500–$2,000</option>
                    <option>$2,000–$3,000</option>
                    <option>$3,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="form-wide">
                  Ideal timeline
                  <select name="timeline" defaultValue="">
                    <option value="">Select a timeline</option>
                    <option>As soon as possible</option>
                    <option>2–4 weeks</option>
                    <option>1–2 months</option>
                    <option>2–3 months</option>
                    <option>Flexible</option>
                  </select>
                </label>
                <label className="form-wide">
                  Tell us about your project *
                  <textarea
                    name="message"
                    placeholder="What does your business do? What would you like your website to achieve?"
                    required
                    minLength={10}
                    maxLength={10000}
                  />
                </label>
              </div>
              <label className="form-consent">
                <input
                  type="checkbox"
                  name="privacy_consent"
                  value="yes"
                  required
                />
                <span>
                  I agree that Desiglo may use these details to respond to my
                  inquiry, as described in the{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>.
                </span>
              </label>
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <ValidationError errors={state.errors} className="form-error" />
              <Button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending inquiry…" : "Send inquiry"}
                <ArrowUpRight size={17} />
              </Button>
              <p className="form-note">
                No commitment required. Fields marked * are required.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
