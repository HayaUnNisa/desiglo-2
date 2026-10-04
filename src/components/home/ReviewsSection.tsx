import { useEffect, useState } from "react";
import { MessageSquareQuote, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { supabase } from "../../lib/supabase";

type Review = {
  id: string;
  name: string;
  company: string | null;
  rating: number;
  comment: string;
  created_at: string;
};

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      try {
        if (!supabase) return;

        const { data, error, count } = await supabase
          .from("reviews")
          .select(
            "id, name, company, rating, comment, created_at",
            { count: "exact" },
          )
          .eq("status", "approved")
          .order("created_at", { ascending: false })
          .order("id", { ascending: false })
          .limit(3);

        if (error) throw error;

        if (!cancelled) {
          setReviews(data ?? []);
          setTotalReviews(count ?? data?.length ?? 0);
        }
      } catch (error) {
        console.error("Failed to load reviews:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!loading && reviews.length === 0) return null;

  const additionalReviews = Math.max(
    totalReviews - reviews.length,
    0,
  );

  return (
    <section
      className="bg-[var(--page)] px-6 py-24"
      aria-labelledby="reviews-heading"
      aria-busy={loading}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
              <MessageSquareQuote
                className="h-6 w-6 text-[var(--accent)]"
                aria-hidden="true"
              />
            </div>

            <h2
              id="reviews-heading"
              className="text-3xl font-bold text-[var(--ink)] sm:text-4xl"
            >
              What Our Clients Say
            </h2>

            <p className="mt-3 max-w-xl text-[var(--muted)]">
              Feedback from clients who have worked with Desiglo.
            </p>

            {!loading && additionalReviews > 0 && (
  <Link
    to="/reviews"
    className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
  >
    View all {totalReviews} reviews
    <span aria-hidden="true">→</span>
  </Link>
)}
          </div>

          <Link
            to="/review"
            className="inline-flex w-fit items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)]"
          >
            Leave a Review
          </Link>
        </div>

        {loading ? (
          <>
            <p className="sr-only" role="status">
              Loading reviews…
            </p>

            <div
              className="grid gap-5 md:grid-cols-3"
              aria-hidden="true"
            >
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-64 animate-pulse rounded-2xl border border-[var(--line)] bg-[var(--surface)]"
                />
              ))}
            </div>
          </>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="flex min-h-64 flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div
                  className="mb-5 flex gap-1"
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
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
        )}
      </div>
    </section>
  );
}