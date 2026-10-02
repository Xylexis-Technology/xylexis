/**
 * Hero section — homepage top-of-fold.
 * Left: eyebrow badge, headline, sub-copy, CTAs, stats.
 * Right: DeviceMockup component.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DeviceMockup } from "@/components/ui/DeviceMockup";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.99_0.003_240)] py-20 sm:py-28 lg:py-32">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[length:40px_40px] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.55 0.22 255) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.22 255) 1px, transparent 1px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.70_0.18_255/0.4)] bg-[oklch(0.55_0.22_255/0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              We Build Digital Solutions
            </span>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[oklch(0.15_0.02_260)] sm:text-5xl lg:text-6xl">
              We design and build websites, softwares and automation that help{" "}
              <span className="text-[oklch(0.55_0.22_255)]">
                businesses grow.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="max-w-lg text-lg leading-relaxed text-[oklch(0.50_0.02_260)]">
              Modern websites, powerful web applications, and smart automation — built with strategy, creativity, and technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.55_0.22_255)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.48_0.22_255)]"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.88_0.01_250)] bg-white px-6 py-3 text-sm font-semibold text-[oklch(0.15_0.02_260)] transition-colors hover:bg-[oklch(0.96_0.008_245)]"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-[oklch(0.15_0.02_260)]">{value}</p>
                  <p className="text-sm text-[oklch(0.50_0.02_260)]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — device mockup */}
          <div className="flex justify-center lg:justify-end">
            <DeviceMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
