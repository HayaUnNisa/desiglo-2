import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquareQuote,
  Star,
} from "lucide-react";

import { supabase } from "../lib/supabase";

type Review = {
  id: string;
  name: string;
  company: string | null;
  rating: number;
  comment: string;
  created_at: string;
};

const PAGE_SIZE = 6;

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const focusAfterLoad = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      setLoading(true);
      setError("");

      try {
        if (!supabase) {
          throw new Error("Reviews are temporarily unavailable.");
        }

        const from = (page - 1) * PAGE_SIZE;

        const { data, count, error: queryError } = await supabase
          .from("reviews")
          .select(
            "id, name, company, rating, comment, created_at",
            { count: "exact" },
          )
          .eq("status", "approved")
          .order("created_at", { ascending: false })
          .order("id", { ascending: false })
          .range(from, from + PAGE_SIZE - 1);

        if (queryError) throw queryError;
        if (cancelled) return;

        const reviewCount = count ?? 0;
        const lastPage = Math.max(
          1,
          Math.ceil(reviewCount / PAGE_SIZE),
        );

        // Recover if reviews were removed while browsing.
        if (page > lastPage) {
          setPage(lastPage);
          return;
        }

        setReviews(data ?? []);
        setTotal(reviewCount);
      } catch (err) {
        if (cancelled) return;

        console.error("Failed to load reviews:", err);
        setError(
          "We couldn’t load the reviews. Please try again in a moment.",
        );
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadReviews();

    return () => {
      cancelled = true;
    };
  }, [page, retry]);

  useEffect(() => {
    if (loading || !focusAfterLoad.current) return;

    focusAfterLoad.current = false;
    headingRef.current?.focus({ preventScroll: true });
    headingRef.current?.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, [loading]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const firstReview = (page - 1) * PAGE_SIZE + 1;
  const lastReview = Math.min(page * PAGE_SIZE, total);

  function changePage(nextPage: number) {
    focusAfterLoad.current = true;
    setLoading(true);
    setPage(nextPage);
  }

  return (
    <section className="bg-[var(--page)] px-6 py-16 text-[var(--ink)] sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
              <MessageSquareQuote
                className="h-6 w-6 text-[var(--accent)]"
                aria-hidden="true"
              />
            </div>

            <p className="eyebrow">CLIENT EXPERIENCES</p>

            <h1
              ref={headingRef}
              tabIndex={-1}
              className="mt-4 scroll-mt-28 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Words from our clients.
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
              Feedback from the people who have trusted Desiglo
              with their websites.
            </p>

            {!loading && !error && total > 0 && (
              <p className="mt-4 text-sm text-[var(--muted)]">
                <span className="font-semibold text-[var(--ink)]">
                  {total}
                </span>{" "}
                {total === 1 ? "published review" : "published reviews"}
              </p>
            )}
          </div>

          <Link to="/review" className="dg-button dg-button--primary">
            Leave a review
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div aria-busy={loading}>
          {loading ? (
            <>
              <p role="status" className="sr-only">
                Loading reviews…
              </p>

              <div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                aria-hidden="true"
              >
                {Array.from({ length: PAGE_SIZE }, (_, index) => (
                  <div
                    key={index}
                    className="h-72 animate-pulse rounded-2xl border border-[var(--line)] bg-[var(--surface)]"
                  />
                ))}
              </div>
            </>
          ) : error ? (
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center">
              <p role="alert" className="text-[var(--muted)]">
                {error}
              </p>

              <button
                type="button"
                className="dg-button dg-button--secondary mt-6"
                onClick={() => setRetry((value) => value + 1)}
              >
                Try again
              </button>
            </div>
          ) : reviews.length === 0 ? (
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-6 py-16 text-center">
              <MessageSquareQuote
                size={36}
                className="mx-auto mb-5 text-[var(--accent)]"
                aria-hidden="true"
              />

              <h2 className="text-2xl font-semibold">
                Your experience could be the first.
              </h2>

              <p className="mx-auto mt-4 max-w-md leading-7 text-[var(--muted)]">
                Worked with Desiglo? Share your feedback.
                Reviews appear here after approval.
              </p>

              <Link
                to="/review"
                className="dg-button dg-button--primary mt-7"
              >
                Write a review
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                  <article
                    key={review.id}
                    className="flex min-h-72 flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
                  >
                    <div
                      role="img"
                      aria-label={`${review.rating} out of 5 stars`}
                      className="mb-6 flex gap-1"
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          aria-hidden="true"
                          className={`h-5 w-5 ${
                            star <= review.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-[var(--muted)]"
                          }`}
                        />
                      ))}
                    </div>

                    <blockquote className="m-0 flex-1 whitespace-pre-line break-words leading-7 text-[var(--ink)]">
                      “{review.comment}”
                    </blockquote>

                    <div className="mt-7 border-t border-[var(--line)] pt-5">
                      <p className="font-semibold text-[var(--ink)]">
                        {review.name}
                      </p>

                      {review.company && (
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {review.company}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-[var(--line)] pt-6 sm:flex-row">
                <p
                  role="status"
                  className="text-sm text-[var(--muted)]"
                >
                  Showing {firstReview}–{lastReview} of {total}{" "}
                  {total === 1 ? "review" : "reviews"}
                </p>

                {totalPages > 1 && (
                  <nav
                    aria-label="Reviews pagination"
                    className="flex items-center gap-4"
                  >
                    <button
                      type="button"
                      className="dg-button dg-button--secondary"
                      disabled={page === 1}
                      onClick={() => changePage(page - 1)}
                      aria-label="Previous page of reviews"
                    >
                      <ArrowLeft size={16} aria-hidden="true" />
                      Previous
                    </button>

                    <span className="text-sm text-[var(--muted)]">
                      {page} / {totalPages}
                    </span>

                    <button
                      type="button"
                      className="dg-button dg-button--secondary"
                      disabled={page === totalPages}
                      onClick={() => changePage(page + 1)}
                      aria-label="Next page of reviews"
                    >
                      Next
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </nav>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}