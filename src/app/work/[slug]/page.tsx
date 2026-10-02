/**
 * Individual case study page — /work/[slug]
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

/** Generate static params for all case studies at build time. */
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — ${cs.subtitle}`,
    description: cs.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <div className="bg-[oklch(0.99_0.003_240)]">
      {/* Back link */}
      <div className="border-b border-[oklch(0.88_0.01_250)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-[oklch(0.50_0.02_260)] hover:text-[oklch(0.55_0.22_255)] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Work
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="rounded-full bg-[oklch(0.55_0.22_255/0.10)] px-3 py-1 text-xs font-semibold text-[oklch(0.55_0.22_255)]">
            {cs.category}
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-5xl">
            {cs.client}
          </h1>
          <p className="mt-2 text-xl font-medium text-[oklch(0.50_0.02_260)]">{cs.subtitle}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[oklch(0.50_0.02_260)]">
            {cs.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {cs.techBadges.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[oklch(0.88_0.01_250)] bg-white px-3 py-1 text-xs font-medium text-[oklch(0.40_0.02_260)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-bold text-[oklch(0.15_0.02_260)]">The Challenge</h2>
            <p className="text-base leading-relaxed text-[oklch(0.50_0.02_260)]">{cs.challenge}</p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold text-[oklch(0.15_0.02_260)]">Our Solution</h2>
            <p className="text-base leading-relaxed text-[oklch(0.50_0.02_260)]">{cs.solution}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-bold text-[oklch(0.15_0.02_260)]">Results</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {cs.results.map((r) => (
              <div
                key={r}
                className="flex items-start gap-4 rounded-2xl border border-[oklch(0.88_0.01_250)] bg-white p-6"
              >
                <CheckCircle2 size={22} className="flex-shrink-0 text-[oklch(0.55_0.22_255)] mt-0.5" />
                <p className="text-base font-medium text-[oklch(0.20_0.02_260)]">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.22_255)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Want results like these?</h2>
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
