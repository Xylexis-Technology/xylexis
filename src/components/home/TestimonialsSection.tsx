"use client";

/**
 * TestimonialsSection — rotating testimonial cards.
 * Prev/Next navigation with accessible button labels.
 */

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="bg-[oklch(0.96_0.008_245)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-4xl">
              What our clients say.
            </h2>
          </div>
          {/* Navigation */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.88_0.01_250)] bg-white text-[oklch(0.50_0.02_260)] transition-colors hover:bg-[oklch(0.55_0.22_255)] hover:text-white hover:border-transparent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.88_0.01_250)] bg-white text-[oklch(0.50_0.02_260)] transition-colors hover:bg-[oklch(0.55_0.22_255)] hover:text-white hover:border-transparent"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards — show all three, highlight the active one */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure
              key={t.id}
              role="group"
              aria-label={`Testimonial from ${t.name}`}
              onClick={() => setActive(idx)}
              className={`cursor-pointer rounded-2xl border p-8 transition-all ${
                idx === active
                  ? "border-[oklch(0.70_0.18_255/0.5)] bg-white shadow-lg"
                  : "border-[oklch(0.88_0.01_250)] bg-white/50 hover:bg-white"
              }`}
            >
              <blockquote className="mb-6 text-sm leading-relaxed text-[oklch(0.40_0.02_260)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[oklch(0.55_0.22_255)] text-xs font-bold text-white"
                  aria-hidden
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[oklch(0.15_0.02_260)]">{t.name}</p>
                  <p className="text-xs text-[oklch(0.55_0.02_260)]">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === active}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setActive(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === active ? "w-6 bg-[oklch(0.55_0.22_255)]" : "w-1.5 bg-[oklch(0.80_0.01_260)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
