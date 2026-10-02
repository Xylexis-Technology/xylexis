/**
 * ProcessSection — 5-step agency delivery process.
 * Horizontal numbered steps with connector lines (desktop).
 * Stacked list on mobile.
 */

import { Search, Lightbulb, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Search,
    title: "Discover",
    description: "We learn about your business, goals, and challenges.",
  },
  {
    number: "02",
    Icon: Lightbulb,
    title: "Plan",
    description: "We outline the right solution, scope, and timeline.",
  },
  {
    number: "03",
    Icon: Pencil,
    title: "Design",
    description: "We create intuitive and beautiful user experiences.",
  },
  {
    number: "04",
    Icon: Code2,
    title: "Build",
    description: "We develop, test, and deliver your solution.",
  },
  {
    number: "05",
    Icon: Rocket,
    title: "Launch",
    description: "We deploy and provide ongoing support.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              Our Process
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-4xl">
              From idea to impact.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[oklch(0.50_0.02_260)]">
            We follow a proven process to ensure your project is delivered on time, on budget, and built for long-term success.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-5">
          {steps.map(({ number, Icon, title, description }, idx) => (
            <div key={number} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
              {/* Connector line — desktop only */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-full top-6 hidden h-px w-full -translate-y-1/2 bg-[oklch(0.88_0.01_250)] sm:block"
                  style={{ width: "calc(100% - 3rem)", left: "calc(50% + 1.5rem)" }}
                />
              )}

              {/* Icon chip */}
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[oklch(0.88_0.01_250)] bg-white shadow-sm">
                <Icon size={20} className="text-[oklch(0.55_0.22_255)]" />
              </div>

              <span className="mb-1 text-xs font-semibold text-[oklch(0.65_0.015_260)]">{number}</span>
              <h3 className="mb-1.5 font-semibold text-[oklch(0.15_0.02_260)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[oklch(0.50_0.02_260)]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
