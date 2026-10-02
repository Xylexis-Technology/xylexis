/** Typed data for all agency services shown across the site. */

export interface Service {
  id: string;
  icon: string;           // Lucide icon name
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export const services: Service[] = [
  {
    id: "websites",
    icon: "Monitor",
    title: "Websites",
    tagline: "Modern, fast, and conversion-focused.",
    description:
      "We build lightning-fast, responsive websites that turn visitors into customers. From marketing sites to complex portals — every pixel is purposeful.",
    deliverables: [
      "Custom design & development",
      "CMS integration (headless or traditional)",
      "SEO-optimised structure",
      "Lighthouse 95+ performance score",
      "Accessibility (WCAG AA) compliance",
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
  },
  {
    id: "software",
    icon: "Code2",
    title: "Custom Software",
    tagline: "Scalable systems built to last.",
    description:
      "Complex business problems deserve purpose-built solutions. We architect and deliver cloud-native web applications, SaaS platforms, and APIs that scale with your ambitions.",
    deliverables: [
      "Cloud-native web apps & SaaS platforms",
      "RESTful & GraphQL API design",
      "Database architecture",
      "Auth, billing & third-party integrations",
      "CI/CD pipeline setup",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AWS / GCP"],
  },
  {
    id: "ai-automation",
    icon: "Zap",
    title: "AI Automation",
    tagline: "Eliminate repetition. Reclaim your time.",
    description:
      "We design and deploy intelligent automation pipelines — from document extraction to AI chat agents — that eliminate manual bottlenecks and drive measurable ROI.",
    deliverables: [
      "Custom LLM agents & chatbots",
      "Workflow & document automation",
      "CRM / ERP integration pipelines",
      "Data extraction & processing",
      "Reporting & analytics automation",
    ],
    techStack: ["Python", "LangChain", "OpenAI", "n8n", "Zapier"],
  },
  {
    id: "product-design",
    icon: "Layers",
    title: "Product Design",
    tagline: "Beautiful products people actually use.",
    description:
      "Great software starts with great design. We lead user research, wireframing, and interactive prototyping to ensure every product we ship is intuitive, accessible, and delightful.",
    deliverables: [
      "UX research & user journey mapping",
      "Wireframes & interactive prototypes",
      "Design systems & component libraries",
      "Brand identity & visual language",
      "Handoff-ready Figma files",
    ],
    techStack: ["Figma", "Storybook", "shadcn/ui", "Framer"],
  },
];
