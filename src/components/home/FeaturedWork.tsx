/**
 * FeaturedWork — highlights the Nexora case study with a
 * two-column layout: copy on the left, device mockup on the right.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DeviceMockup } from "@/components/ui/DeviceMockup";

const techBadges = ["Next.js", "Tailwind CSS", "PostgreSQL"];

export function FeaturedWork() {
  return (
    <section className="bg-[oklch(0.96_0.008_245)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
          Featured Work
        </span>

        <div className="mt-8 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-4xl">
              Nexora — Real Estate Platform
            </h2>
            <p className="text-base leading-relaxed text-[oklch(0.50_0.02_260)]">
              We built a modern real estate platform for Nexora, helping them showcase properties, manage enquiries, and connect buyers with agents — all in one place.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[oklch(0.88_0.01_250)] bg-white px-3 py-1 text-xs font-medium text-[oklch(0.40_0.02_260)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/work/nexora"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.55_0.22_255)]"
            >
              View Case Study <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mockup */}
          <div className="flex justify-center">
            <DeviceMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
