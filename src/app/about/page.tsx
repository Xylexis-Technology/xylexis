/**
 * About page — agency mission, story, values, and team.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Xylexis — our mission, story, values, and the engineers behind your next project.",
};

const values = [
  {
    Icon: Target,
    title: "Outcomes over outputs",
    description:
      "We measure success by the impact we create for your business, not by the lines of code we write.",
  },
  {
    Icon: Heart,
    title: "Craft with care",
    description:
      "We take genuine pride in our work. Every component, every interaction, and every API is built to a standard we'd be proud to show anyone.",
  },
  {
    Icon: Zap,
    title: "Move fast, thoughtfully",
    description:
      "Speed matters, but not at the expense of quality. We use modern tooling and clear processes to deliver quickly without cutting corners.",
  },
  {
    Icon: Users,
    title: "Transparent partnership",
    description:
      "No black boxes. You'll always know exactly what we're building, why, and how it's going. Clear communication is non-negotiable.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[oklch(0.99_0.003_240)]">
      {/* Hero */}
      <section className="border-b border-[oklch(0.88_0.01_250)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              About Us
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-5xl">
              Better systems.<br />Bigger possibilities.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[oklch(0.50_0.02_260)]">
              Xylexis is a software engineering agency specialising in custom websites, web applications, and AI automation. We exist to help ambitious businesses build the digital foundation they need to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
                Our Story
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-4xl">
                Built by engineers, for businesses that mean business.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-[oklch(0.50_0.02_260)]">
              <p>
                Xylexis started with a simple frustration: too many businesses were paying for websites and software that didn&apos;t actually work for them. Sites that were slow, hard to update, and didn&apos;t reflect the quality of the business behind them.
              </p>
              <p>
                We set out to do it differently. Every project we take on starts with a deep understanding of your goals and your customers. We combine engineering rigour with genuine design sensibility — and we don&apos;t ship anything we wouldn&apos;t be proud to put our name on.
              </p>
              <p>
                Today, we&apos;re a small, focused team of engineers and designers who care deeply about the outcomes we create. We work with a handful of clients at a time, which means you always get our full attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-4xl">
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-[oklch(0.88_0.01_250)] bg-[oklch(0.99_0.003_240)] p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.55_0.22_255/0.10)]">
                  <Icon size={22} className="text-[oklch(0.55_0.22_255)]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[oklch(0.15_0.02_260)]">{title}</h3>
                <p className="text-sm leading-relaxed text-[oklch(0.50_0.02_260)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {[
              { value: "10+", label: "Projects Delivered" },
              { value: "5+", label: "Happy Clients" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "4", label: "Service Areas" },
            ].map(({ value, label }) => (
              <div key={label} className="space-y-1">
                <p className="text-4xl font-bold text-[oklch(0.55_0.22_255)]">{value}</p>
                <p className="text-sm text-[oklch(0.50_0.02_260)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.22_255)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to work together?
          </h2>
          <p className="mt-4 text-base text-[oklch(0.88_0.04_255)]">
            Let&apos;s have a conversation about your next project.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[oklch(0.55_0.22_255)] transition-colors hover:bg-[oklch(0.96_0.008_245)]"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
