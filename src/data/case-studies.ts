/** Case study / portfolio data. */

export interface CaseStudy {
  slug: string;
  client: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techBadges: string[];
  category: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nexora",
    client: "Nexora",
    subtitle: "Real Estate Platform",
    description:
      "A modern real estate platform helping Nexora showcase properties, manage enquiries, and connect buyers with agents — all in one place.",
    challenge:
      "Nexora's legacy website couldn't handle high-resolution property listings or mobile traffic. Enquiries were being lost in email threads, and there was no visibility into lead quality.",
    solution:
      "We built a full-stack platform with dynamic property listings, an integrated CRM-style enquiry dashboard, virtual tour embeds, and a lightning-fast search powered by a PostGIS database.",
    results: [
      "3× increase in qualified enquiries within 60 days",
      "Lighthouse performance score of 97",
      "Mobile traffic share grew from 38 % to 71 %",
    ],
    techBadges: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    category: "Website",
    featured: true,
  },
  {
    slug: "brightpath",
    client: "BrightPath Academy",
    subtitle: "Operations Automation Suite",
    description:
      "An intelligent automation platform that replaced 25+ hours of weekly manual data work at BrightPath with reliable, auditable pipelines.",
    challenge:
      "The operations team spent hours each week manually copying student enrolment data between spreadsheets, a legacy SIS, and their LMS — with frequent errors and no audit trail.",
    solution:
      "We deployed a document-intelligence pipeline that auto-extracts enrolment forms using a fine-tuned LLM, validates the data, and pushes it directly to both systems via API — with a real-time monitoring dashboard.",
    results: [
      "25+ hours/week of manual work eliminated",
      "Data error rate dropped from 12 % to < 0.5 %",
      "ROI achieved within 6 weeks of go-live",
    ],
    techBadges: ["Python", "OpenAI", "n8n", "PostgreSQL"],
    category: "AI Automation",
    featured: true,
  },
  {
    slug: "apex-logistics",
    client: "Apex Logistics",
    subtitle: "Fleet Management Portal",
    description:
      "A real-time fleet tracking and dispatch portal giving Apex's operations team live visibility across their entire vehicle network.",
    challenge:
      "Apex's dispatch coordinators relied on phone calls and fragmented spreadsheets to track dozens of vehicles simultaneously — leading to missed deliveries and high fuel waste from inefficient routing.",
    solution:
      "We built a real-time web portal with live GPS telemetry, automated dispatch queue, and route optimisation powered by the Google Maps Platform. Coordinators now manage everything from a single dashboard.",
    results: [
      "On-time delivery rate improved from 74 % to 93 %",
      "Fuel costs reduced by 18 % through route optimisation",
      "Dispatch time per job cut from 8 min to under 90 sec",
    ],
    techBadges: ["Next.js", "Node.js", "WebSockets", "Google Maps"],
    category: "Custom Software",
    featured: false,
  },
  {
    slug: "the-wellness-hub",
    client: "The Wellness Hub",
    subtitle: "Membership & Booking Platform",
    description:
      "A full-featured membership and class-booking platform that replaced a fragmented stack of third-party tools, cutting monthly SaaS costs significantly.",
    challenge:
      "The Wellness Hub was paying for five separate tools — booking, CRM, email marketing, payment processing, and a basic website — none of which talked to each other cleanly.",
    solution:
      "We designed and built a unified platform handling bookings, memberships, automated reminders, and payments — all under their brand — with a clean admin panel for the team.",
    results: [
      "Unified platform replaced 5 separate SaaS tools",
      "Monthly operational cost reduced by 60 %",
      "Member bookings increased 40 % in first quarter",
    ],
    techBadges: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    category: "Custom Software",
    featured: false,
  },
];

/** Returns only featured case studies. */
export function getFeaturedCaseStudies() {
  return caseStudies.filter((cs) => cs.featured);
}
