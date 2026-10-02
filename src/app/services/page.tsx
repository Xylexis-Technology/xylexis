/**
 * Services page — detailed breakdown of all four service areas.
 * Each service is an anchor-linked section with deliverable checklist and tech stack.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Monitor, Code2, Zap, Layers } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Xylexis's full range of services: websites, custom software, AI automation, and product design.",
};

/** Maps icon name string → Lucide component */
const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Code2,
  Zap,
  Layers,
};

export default function ServicesPage() {
  return (
    <div className="bg-[oklch(0.99_0.003_240)]">
      {/* Hero */}
      <section className="border-b border-[oklch(0.88_0.01_250)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              What We Build
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-5xl">
              End-to-end digital solutions.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[oklch(0.50_0.02_260)]">
              From your first marketing site to a complex AI-powered platform — we have the skills, experience, and process to deliver it.
            </p>
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, idx) => {
        const Icon = iconMap[service.icon] ?? Monitor;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${isEven ? "bg-white" : "bg-[oklch(0.96_0.008_245)]"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
                {/* Copy */}
                <div className="space-y-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[oklch(0.55_0.22_255/0.10)]">
                    <Icon size={26} className="text-[oklch(0.55_0.22_255)]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-lg font-medium text-[oklch(0.55_0.22_255)]">
                      {service.tagline}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-[oklch(0.50_0.02_260)]">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.55_0.22_255)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.48_0.22_255)]"
                  >
                    Start a project <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Deliverables + tech stack */}
                <div className="space-y-8">
                  <div className="rounded-2xl border border-[oklch(0.88_0.01_250)] bg-[oklch(0.99_0.003_240)] p-8">
                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[oklch(0.15_0.02_260)]">
                      What&apos;s included
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 flex-shrink-0 text-[oklch(0.55_0.22_255)]"
                          />
                          <span className="text-sm text-[oklch(0.40_0.02_260)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)]">
                      Tech stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[oklch(0.88_0.01_250)] bg-white px-3 py-1 text-xs font-medium text-[oklch(0.40_0.02_260)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.22_255)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Not sure which service you need?</h2>
          <p className="mt-4 text-base text-[oklch(0.88_0.04_255)]">
            Book a free strategy call and we&apos;ll help you figure it out.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[oklch(0.55_0.22_255)]"
          >
            Book a Free Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
