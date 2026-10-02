"use client";

/**
 * ContactForm — client component using useActionState (React 19).
 * Sends data to the submitContactForm server action.
 */

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "./actions";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[oklch(0.55_0.22_255)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.48_0.22_255)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" /> Sending…
        </>
      ) : (
        "Send Message →"
      )}
    </button>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
      <AlertCircle size={13} />
      {errors[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
        <CheckCircle2 size={40} className="text-green-600" />
        <h3 className="text-xl font-bold text-[oklch(0.15_0.02_260)]">Message sent!</h3>
        <p className="max-w-md text-base text-[oklch(0.50_0.02_260)]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Error banner */}
      {state.status === "error" && !state.errors && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[oklch(0.15_0.02_260)]">
            Full Name <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ada Lovelace"
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            className="w-full rounded-xl border border-[oklch(0.88_0.01_250)] bg-white px-4 py-3 text-sm text-[oklch(0.15_0.02_260)] placeholder-[oklch(0.70_0.01_260)] transition-colors focus:border-[oklch(0.55_0.22_255)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_255/0.20)]"
          />
          <div id="name-error">
            <FieldError errors={state.errors?.name} />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[oklch(0.15_0.02_260)]">
            Email Address <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ada@company.com"
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            className="w-full rounded-xl border border-[oklch(0.88_0.01_250)] bg-white px-4 py-3 text-sm text-[oklch(0.15_0.02_260)] placeholder-[oklch(0.70_0.01_260)] transition-colors focus:border-[oklch(0.55_0.22_255)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_255/0.20)]"
          />
          <div id="email-error">
            <FieldError errors={state.errors?.email} />
          </div>
        </div>
      </div>

      {/* Service + Budget */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[oklch(0.15_0.02_260)]">
            Service Interested In <span className="text-red-500" aria-hidden>*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            aria-describedby={state.errors?.service ? "service-error" : undefined}
            className="w-full rounded-xl border border-[oklch(0.88_0.01_250)] bg-white px-4 py-3 text-sm text-[oklch(0.15_0.02_260)] transition-colors focus:border-[oklch(0.55_0.22_255)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_255/0.20)]"
          >
            <option value="">Select a service…</option>
            <option value="websites">Website Development</option>
            <option value="software">Custom Software</option>
            <option value="ai-automation">AI Automation</option>
            <option value="product-design">Product Design</option>
            <option value="other">Not sure / Other</option>
          </select>
          <div id="service-error">
            <FieldError errors={state.errors?.service} />
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-[oklch(0.15_0.02_260)]">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full rounded-xl border border-[oklch(0.88_0.01_250)] bg-white px-4 py-3 text-sm text-[oklch(0.15_0.02_260)] transition-colors focus:border-[oklch(0.55_0.22_255)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_255/0.20)]"
          >
            <option value="">Prefer not to say</option>
            <option value="under-150k">Under N150,000</option>
            <option value="150k-450k">N150,000 &#45; N450,000</option>
            <option value="450k-800k">N450,000 &#45; N800,000</option>
            <option value="800k-1.5m">N800,000 &#45; N1,500,000</option>
            <option value="1.5m+">N1,500,000+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[oklch(0.15_0.02_260)]">
          Tell us about your project <span className="text-red-500" aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe your goals, challenges, timeline, or anything else that helps us understand what you need…"
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className="w-full resize-none rounded-xl border border-[oklch(0.88_0.01_250)] bg-white px-4 py-3 text-sm text-[oklch(0.15_0.02_260)] placeholder-[oklch(0.70_0.01_260)] transition-colors focus:border-[oklch(0.55_0.22_255)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_255/0.20)]"
        />
        <div id="message-error">
          <FieldError errors={state.errors?.message} />
        </div>
      </div>

      <SubmitButton />
    </form>
  );
}
