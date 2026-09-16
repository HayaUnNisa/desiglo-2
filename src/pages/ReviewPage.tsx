import { FormEvent, useState } from "react";
import {
  CheckCircle2,
  Loader2,
  MessageSquareQuote,
  Star,
} from "lucide-react";

import { supabase } from "../lib/supabase";

export default function Review() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setError("");

    if (!name.trim() || !comment.trim()) {
      setError("Please enter your name and review.");
      return;
    }

    setSubmitting(true);

    try {
      const { error: submitError } = await supabase
        .from("reviews")
        .insert({
          name: name.trim(),
          company: company.trim() || null,
          rating,
          comment: comment.trim(),

          // Every new review requires approval
          status: "pending",
        });

      if (submitError) {
        throw submitError;
      }

      setSuccess(true);

      setName("");
      setCompany("");
      setRating(5);
      setComment("");
    } catch (err) {
      console.error(err);

      setError(
        "We couldn't submit your review. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-[#07161d] px-6 py-24 text-white">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
          </div>

          <h1 className="text-3xl font-bold">
            Thank you for your review
          </h1>

          <p className="mt-4 text-slate-400">
            Your feedback has been submitted and will appear
            after it has been reviewed.
          </p>

          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="mt-8 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/5"
          >
            Leave another review
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#07161d] px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
            <MessageSquareQuote className="h-7 w-7 text-blue-400" />
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Share Your Experience
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-slate-400">
            Worked with Desiglo? We'd love to hear about your
            experience.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Your Name *
              </label>

              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                required
                className="w-full rounded-xl border border-white/10 bg-[#0a2029] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium"
              >
                Company
              </label>

              <input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                maxLength={150}
                className="w-full rounded-xl border border-white/10 bg-[#0a2029] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                placeholder="Optional"
              />
            </div>
          </div>

          <div className="mt-7">
            <p className="mb-3 text-sm font-medium">
              Your Rating *
            </p>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  aria-label={`${star} star rating`}
                  className="transition hover:scale-110"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <label
              htmlFor="comment"
              className="mb-2 block text-sm font-medium"
            >
              Your Review *
            </label>

            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={1000}
              required
              rows={6}
              className="w-full resize-none rounded-xl border border-white/10 bg-[#0a2029] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              placeholder="Tell us about your experience working with Desiglo..."
            />

            <div className="mt-2 text-right text-xs text-slate-500">
              {comment.length}/1000
            </div>
          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Review"
            )}
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            Reviews are moderated before being published.
          </p>
        </form>
      </div>
    </main>
  );
}