/**
 * Contact page — /contact
 * Two-column layout: inquiry form + direct contact details.
 */

import type { Metadata } from "next";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Xylexis. Tell us about your goals and we'll get back to you within one business day.",
};

const directContacts = [
  {
    Icon: Mail,
    label: "Email us",
    value: "hello@xylexis.com",
    href: "mailto:hello@xylexis.com",
  },
  {
    Icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
    href: null,
  },
  {
    Icon: MessageSquare,
    label: "Prefer to chat?",
    value: "Book a free 30-min strategy call",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[oklch(0.99_0.003_240)]">
      {/* Hero */}
      <section className="border-b border-[oklch(0.88_0.01_250)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              Contact
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-5xl">
              Let&apos;s build something great.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[oklch(0.50_0.02_260)]">
              Tell us about your project and we&apos;ll get back to you within one business day. No hard sell, no obligation — just an honest conversation about what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Form + side info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Form — takes 2/3 */}
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-xl font-bold text-[oklch(0.15_0.02_260)]">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Side info */}
            <div className="space-y-8">
              <h2 className="text-xl font-bold text-[oklch(0.15_0.02_260)]">
                Get in touch directly
              </h2>

              <div className="space-y-5">
                {directContacts.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[oklch(0.55_0.22_255/0.10)]">
                      <Icon size={18} className="text-[oklch(0.55_0.22_255)]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.65_0.015_260)]">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-[oklch(0.15_0.02_260)] hover:text-[oklch(0.55_0.22_255)] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-[oklch(0.15_0.02_260)]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust note */}
              <div className="rounded-2xl border border-[oklch(0.88_0.01_250)] bg-white p-6">
                <p className="text-sm leading-relaxed text-[oklch(0.50_0.02_260)]">
                  We work with a focused number of clients at a time, which means you always get our full attention. We&apos;ll respond to every enquiry personally — no auto-replies, no sales scripts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
