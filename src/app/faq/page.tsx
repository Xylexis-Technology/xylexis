"use client";

/**
 * FAQ page — categorized accordion questions.
 * Each category renders as a labeled group of collapsible items.
 * Uses native <details>/<summary> for zero-JS progressive enhancement,
 * wrapped in accessible landmark regions.
 */

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { faqCategories } from "@/data/faq";

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[oklch(0.88_0.01_250)] last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium text-[oklch(0.15_0.02_260)]">{question}</span>
        <span className="mt-0.5 flex-shrink-0 text-[oklch(0.55_0.22_255)]">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      {open && (
        <div className="pb-5 pr-8">
          <p className="text-base leading-relaxed text-[oklch(0.50_0.02_260)]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-[oklch(0.99_0.003_240)]">
      {/* Hero */}
      <section className="border-b border-[oklch(0.88_0.01_250)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              FAQ
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-5xl">
              Common questions, honest answers.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[oklch(0.50_0.02_260)]">
              Everything you need to know about working with Xylexis. Can&apos;t find what you&apos;re looking for? Just ask us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-16">
          {faqCategories.map((category) => (
            <div key={category.label}>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[oklch(0.55_0.22_255)]">
                {category.label}
              </h2>
              <div className="rounded-2xl border border-[oklch(0.88_0.01_250)] bg-white px-8">
                {category.items.map((item) => (
                  <AccordionItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Help box */}
      <section className="bg-[oklch(0.96_0.008_245)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[oklch(0.15_0.02_260)]">
            Still have questions?
          </h2>
          <p className="mt-3 text-base text-[oklch(0.50_0.02_260)]">
            We&apos;re happy to chat. Reach out and we&apos;ll get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[oklch(0.55_0.22_255)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.48_0.22_255)]"
          >
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
