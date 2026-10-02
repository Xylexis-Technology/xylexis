/** FAQ data, grouped by category. */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  label: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    label: "Services & Scope",
    items: [
      {
        id: "what-services",
        question: "What services does Xylexis offer?",
        answer:
          "We offer four core service lines: custom website development, bespoke software & SaaS platforms, AI automation pipelines, and product design. We work across the full stack — from initial strategy and UX design through to deployment and ongoing support.",
      },
      {
        id: "small-business",
        question: "Do you work with small businesses or only enterprises?",
        answer:
          "We work with businesses of all sizes — from ambitious early-stage startups to established mid-market companies. We tailor our engagement model to your stage and budget, so we can always deliver genuine value.",
      },
      {
        id: "maintain-after",
        question: "Do you provide ongoing maintenance after launch?",
        answer:
          "Yes. We offer flexible retainer packages covering hosting management, security updates, performance monitoring, and iterative feature development. We become a long-term technical partner, not just a one-time vendor.",
      },
    ],
  },
  {
    label: "Pricing & Engagements",
    items: [
      {
        id: "pricing",
        question: "How much does a typical project cost?",
        answer:
          "Project investment varies significantly based on scope and complexity. A marketing website typically starts from $3,000–$8,000. Custom software and automation projects start from $10,000 and scale with requirements. We provide detailed, transparent proposals after a discovery call — no surprises.",
      },
      {
        id: "timeline",
        question: "How long does a project take?",
        answer:
          "A focused marketing website can be delivered in 3–5 weeks. More complex custom software projects are typically 8–16 weeks, depending on scope. We provide a detailed project timeline in our proposal and keep you updated throughout.",
      },
      {
        id: "payment",
        question: "What are your payment terms?",
        answer:
          "We typically structure payments as 50 % upfront and 50 % on delivery for smaller projects. For larger engagements, we use milestone-based billing tied to key deliverable stages. We accept bank transfer and major card payments.",
      },
    ],
  },
  {
    label: "Development Process",
    items: [
      {
        id: "process",
        question: "What does your development process look like?",
        answer:
          "Every project follows our proven five-stage process: Discover → Plan → Design → Build → Launch. We start with a deep discovery phase to understand your goals and users, align on strategy and scope, design iteratively with your feedback, build in two-week sprints with regular demos, then launch with a full QA sign-off.",
      },
      {
        id: "communication",
        question: "How do you communicate during a project?",
        answer:
          "You'll have a dedicated project manager as your single point of contact. We communicate via a shared Slack channel and weekly video calls. You'll always know exactly where your project stands — no ghosting, no surprises.",
      },
      {
        id: "revisions",
        question: "How many revision rounds are included?",
        answer:
          "We include two rounds of revisions per project phase as standard. Our design-led process means we align on direction early, so revisions are minimal in practice. Additional rounds outside scope are quoted transparently.",
      },
    ],
  },
  {
    label: "AI & Automation",
    items: [
      {
        id: "ai-tech",
        question: "What AI technologies do you use?",
        answer:
          "We work across the leading AI tooling ecosystem — including OpenAI, Anthropic Claude, Google Gemini, LangChain, and open-source models. We choose the right model for your use case rather than defaulting to a single vendor.",
      },
      {
        id: "ai-suitable",
        question: "Is AI automation right for my business?",
        answer:
          "AI automation typically delivers the best ROI when there are high-volume, rule-based, or document-heavy tasks consuming significant staff time. In a free strategy call, we'll honestly assess whether automation is a good fit for your specific challenges — we'll never oversell it.",
      },
    ],
  },
];
