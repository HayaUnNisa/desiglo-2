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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select(
          "id, name, company, rating, comment, created_at",
        )
        .eq("status", "approved")
        .order("created_at", {
          ascending: false,
        })
        .limit(6);

      if (error) {
        console.error(
          "Failed to load reviews:",
          error,
        );
      } else {
        setReviews(data ?? []);
      }

      setLoading(false);
    };

    loadReviews();
  }, []);

  // Don't show an empty section
  if (!loading && reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#07161d] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
              <MessageSquareQuote className="h-6 w-6 text-blue-400" />
            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What Our Clients Say
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
              Feedback from clients who have worked with Desiglo.
            </p>
          </div>

          <Link
            to="/review"
            className="inline-flex w-fit items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-500/40 hover:bg-white/5"
          >
            Leave a Review
          </Link>
        </div>

        {loading ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="flex min-h-64 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/30"
              >
                <div
                  className="mb-5 flex gap-1"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-700"
                      }`}
                    />
                  ))}
                </div>

                <p className="flex-1 leading-7 text-slate-300">
                  “{review.comment}”
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">
                    {review.name}
                  </p>

                  {review.company && (
                    <p className="mt-1 text-sm text-slate-500">
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