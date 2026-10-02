/**
 * CtaBanner — full-width call-to-action banner.
 * Royal-blue gradient background, headline, and Get Started button.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-[oklch(0.55_0.22_255)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.90_0.05_255)]">
              Let&apos;s Build Together
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-base text-[oklch(0.88_0.04_255)]">
              Let&apos;s turn your ideas into powerful digital solutions.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[oklch(0.55_0.22_255)] transition-colors hover:bg-[oklch(0.96_0.008_245)]"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
