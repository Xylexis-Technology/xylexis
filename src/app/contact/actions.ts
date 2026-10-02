"use server";

/**
 * Server Action: handles contact form submissions.
 * In production, replace the console.log with an email provider
 * call (e.g. Resend, SendGrid, Nodemailer) using environment variables.
 */

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Extract fields
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const budget = (formData.get("budget") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // Basic server-side validation
  const errors: Record<string, string[]> = {};

  if (!name || name.length < 2) {
    errors.name = ["Please enter your full name (at least 2 characters)."];
  }
  if (!email || !validateEmail(email)) {
    errors.email = ["Please enter a valid email address."];
  }
  if (!service) {
    errors.service = ["Please select the service you're interested in."];
  }
  if (!message || message.length < 20) {
    errors.message = ["Please describe your project (at least 20 characters)."];
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the errors below.", errors };
  }

  // ────────────────────────────────────────────────────────────────────────────
  // TODO: Replace with your email provider of choice.
  //
  // Example using Resend:
  //   import { Resend } from 'resend';
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'noreply@xylexis.com',
  //     to: 'hello@xylexis.com',
  //     subject: `New project enquiry from ${name}`,
  //     text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget || 'Not specified'}\n\n${message}`,
  //   });
  //
  // Example using SendGrid:
  //   import sgMail from '@sendgrid/mail';
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  //   await sgMail.send({ to: 'hello@xylexis.com', from: 'noreply@xylexis.com', subject: `Enquiry from ${name}`, text: message });
  // ────────────────────────────────────────────────────────────────────────────

  // Simulate network latency in development
  await new Promise((r) => setTimeout(r, 600));

  // Log to server console (replace with provider call above)
  console.log("New contact enquiry:", { name, email, service, budget, message });

  return {
    status: "success",
    message:
      "Thank you! We've received your message and will be in touch within one business day.",
  };
}
