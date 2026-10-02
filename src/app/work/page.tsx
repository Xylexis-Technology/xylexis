/**
 * Work / Portfolio page — grid of all case studies.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "See how Xylexis has helped businesses build better digital products — from real estate platforms to AI automation systems.",
};

export default function WorkPage() {
  return (
    <div className="bg-[oklch(0.99_0.003_240)]">
      {/* Hero */}
      <section className="border-b border-[oklch(0.88_0.01_250)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              Our Work
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-5xl">
              Projects we&apos;re proud of.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[oklch(0.50_0.02_260)]">
              Every case study here represents a real business challenge, a thoughtful solution, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[oklch(0.88_0.01_250)] bg-white p-8 transition-shadow hover:shadow-lg"
              >
                {/* Category badge */}
                <span className="mb-4 self-start rounded-full bg-[oklch(0.55_0.22_255/0.10)] px-3 py-1 text-xs font-semibold text-[oklch(0.55_0.22_255)]">
                  {cs.category}
                </span>

                <h2 className="text-xl font-bold text-[oklch(0.15_0.02_260)] group-hover:text-[oklch(0.55_0.22_255)] transition-colors">
                  {cs.client}
                </h2>
                <p className="mb-3 text-sm font-medium text-[oklch(0.55_0.02_260)]">{cs.subtitle}</p>
                <p className="mb-6 text-sm leading-relaxed text-[oklch(0.50_0.02_260)]">
                  {cs.description}
                </p>

                {/* Results */}
                <ul className="mb-6 space-y-1.5">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-[oklch(0.40_0.02_260)]">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.55_0.22_255)]" />
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {cs.techBadges.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[oklch(0.88_0.01_250)] px-3 py-1 text-xs text-[oklch(0.50_0.02_260)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.55_0.22_255)]">
                  View Case Study <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.22_255)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to be our next success story?</h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[oklch(0.55_0.22_255)]"
          >
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
