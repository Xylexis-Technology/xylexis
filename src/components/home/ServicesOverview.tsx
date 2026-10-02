/**
 * ServicesOverview — 3-column service cards on the homepage.
 * Shows the first three services with icon, title, description, and a link.
 */

import Link from "next/link";
import { Monitor, Code2, Zap, ArrowRight } from "lucide-react";

const overview = [
  {
    Icon: Monitor,
    id: "websites",
    title: "Websites",
    description:
      "Modern, fast, and responsive websites that build credibility and turn visitors into customers.",
  },
  {
    Icon: Code2,
    id: "software",
    title: "Software",
    description:
      "Custom web and mobile applications that solve real business problems and improve efficiency.",
  },
  {
    Icon: Zap,
    id: "ai-automation",
    title: "Automation",
    description:
      "Streamline your operations with AI and automation solutions that save time and reduce manual work.",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-4xl">
              End-to-end digital solutions<br className="hidden sm:block" /> for modern businesses.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[oklch(0.50_0.02_260)] lg:max-w-md">
            From a professional website to complex web applications — we build the digital systems you need to attract customers, serve users, and scale.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {overview.map(({ Icon, id, title, description }) => (
            <div
              key={id}
              className="group rounded-2xl border border-[oklch(0.88_0.01_250)] bg-[oklch(0.99_0.003_240)] p-8 transition-shadow hover:shadow-md"
            >
              {/* Icon chip */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.55_0.22_255/0.10)]">
                <Icon size={22} className="text-[oklch(0.55_0.22_255)]" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-[oklch(0.15_0.02_260)]">{title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-[oklch(0.50_0.02_260)]">{description}</p>

              <Link
                href={`/services#${id}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[oklch(0.55_0.22_255)] transition-gap hover:gap-2"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
