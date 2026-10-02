/** Blog post data (in-code static content layer). */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;   // Markdown-like content
  category: string;
  readTime: string;
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "modern-web-architecture-conversion",
    title: "How Modern Web Architecture Transforms Conversion Rates in 2026",
    excerpt:
      "A slow, bloated website doesn't just annoy visitors — it quietly kills your business. Here's how the right technical foundation changes everything.",
    category: "Web Development",
    readTime: "6 min read",
    publishedAt: "2026-09-15",
    content: `
## The Architecture Problem Most Businesses Ignore

Most businesses focus on design and copy when trying to improve conversions. Those things matter — but they sit on top of a foundation that many teams never question.

That foundation is your web architecture: how your pages are generated, how fast they load, and how the server and browser co-operate to deliver the experience.

## Why Performance Is a Revenue Problem

Google research has consistently shown that every additional second of page load time reduces conversion rates by 4–8 %. At the scale of a mature marketing site, that's a significant amount of revenue disappearing silently.

Modern architecture solves this at the root:

- **Static generation** (SSG) and **Incremental Static Regeneration** (ISR) mean your pages load from a CDN edge node near the user — not from a distant origin server.
- **React Server Components** (RSC) allow components to be rendered on the server and streamed, reducing the JavaScript the browser must parse and execute.
- **Optimistic UI** and **instant navigation** patterns make the site feel instantaneous even on slower connections.

## The Next.js Advantage

We build the majority of our client sites on Next.js because it gives us the right tool for every rendering strategy in a single framework. A marketing homepage can be statically generated at build time. A product listing page with live inventory can use ISR to revalidate every 60 seconds. A user dashboard can be fully dynamic — all within the same codebase.

The result: a Lighthouse performance score of 95+ is our baseline, not our ceiling.

## What This Means for Your Business

A technically excellent website:

1. Ranks higher in search results (Core Web Vitals are a direct ranking factor)
2. Keeps visitors engaged longer (reduced bounce rate)
3. Converts more visitors into leads or customers
4. Costs less to host at scale (edge delivery is cheaper than server compute)

If your current site was built more than three years ago on a monolithic CMS, it's almost certainly leaving money on the table. The good news: a rebuild with modern architecture pays for itself quickly.
    `.trim(),
  },
  {
    slug: "practical-ai-automation-2026",
    title: "Practical AI Agents: Automating Repetitive Workflows Without Enterprise Overhead",
    excerpt:
      "AI automation isn't just for Fortune 500 companies. Here's how SMEs are using AI agents to reclaim 20+ hours per week — without massive budgets.",
    category: "AI Automation",
    readTime: "8 min read",
    publishedAt: "2026-09-01",
    content: `
## The Gap Between AI Hype and Business Reality

Every week there's a new headline about AI transforming industries. But when you talk to the operations manager at a 50-person company, their day-to-day looks remarkably similar to five years ago: copying data between spreadsheets, chasing email threads, and manually reformatting reports.

The technology has arrived. The implementation gap is the real problem.

## Where AI Automation Actually Works

Not every process is a good candidate for automation. The sweet spots are:

- **High volume, rule-based tasks**: Copying data from form submissions into a CRM. Generating weekly reports from a database. Routing customer enquiries to the right team.
- **Document-heavy workflows**: Extracting structured data from invoices, contracts, or application forms. Processing intake documents. Generating templated output.
- **Communication automation**: Sending contextual follow-ups based on user behaviour. Summarising long email threads. Drafting initial responses to common support queries.

## A Real Example: BrightPath Academy

BrightPath's operations team spent 25+ hours per week manually processing student enrolment forms. Staff would open a PDF, read the fields, type the data into their SIS (Student Information System), then do it again in their LMS.

We built an automation pipeline that:

1. Watches a designated email inbox for incoming forms
2. Extracts structured data using a fine-tuned document AI model
3. Validates the extracted data against business rules
4. Creates records in both systems via their APIs
5. Sends the student a confirmation email
6. Logs everything to an audit trail dashboard

The whole pipeline runs unattended. Staff now review exceptions — the rare cases where confidence is low — rather than processing every record. 25 hours/week became 2 hours/week.

## What It Costs (And What It Returns)

A well-scoped automation project typically costs $10,000–$25,000 to design, build, and deploy. For a team saving 20+ hours/week at a fully-loaded staff cost of $40/hour, the annual saving is over $40,000. The payback period is under a year — often under six months.

The question isn't whether you can afford AI automation. It's whether you can afford not to.
    `.trim(),
  },
  {
    slug: "why-nextjs-tailwind-oklch",
    title: "Why We Build With Next.js, Tailwind CSS v4, and OKLCH Colours",
    excerpt:
      "Every technology choice we make is deliberate. Here's the reasoning behind our three core frontend tools — and why they work so well together.",
    category: "Engineering",
    readTime: "5 min read",
    publishedAt: "2026-08-20",
    content: `
## Tools Should Solve Problems, Not Create Them

In software engineering, technology choices compound. A good choice made early gives you speed, confidence, and leverage later. A bad choice creates friction that grows over the lifetime of a project.

We've settled on a core frontend stack after years of building real products for real clients. Here's why.

## Next.js: The Right Defaults

Next.js gives you the right rendering strategy for every situation, without forcing you to choose a single approach at project setup time. Server Components, static generation, ISR, streaming — you reach for what the page needs.

Critically, it also handles routing, image optimisation, font loading, environment variables, and the build pipeline in a way that's opinionated enough to remove decisions and flexible enough to not be a cage.

## Tailwind CSS v4: Utility-First, Design-System-Ready

Tailwind v4 introduced the \`@theme\` directive, allowing you to define design tokens directly in CSS. This means your colour palette, type scale, and spacing are defined once — in a format that's readable, portable, and not locked to JavaScript configuration.

We pair this with the \`oklch()\` colour function.

## Why OKLCH Colours?

Traditional hex colours and even HSL have a problem: equal numerical steps don't produce equal visual steps. A 10 % lightness increase in HSL looks different depending on the hue.

OKLCH (Oklab Lightness, Chroma, Hue) is a perceptually uniform colour space. Equal numerical steps look equal. This means:

- Brand colour ramps are visually consistent across the full range
- Hover states and focus rings look intentional, not accidental
- Accessibility contrast ratios are easier to reason about

When you define \`--color-brand: oklch(0.55 0.22 255)\`, you know that \`oklch(0.70 0.22 255)\` will be a lighter version that looks exactly as much lighter as the numbers suggest.

## Together, They're Fast

- **Next.js** removes architectural decisions
- **Tailwind v4** removes CSS architecture decisions
- **OKLCH** removes colour system decisions

The result: we spend more time on the product, less time on tooling.
    `.trim(),
  },
  {
    slug: "monolith-to-modern-legacy-software",
    title: "From Monolith to Modern: Upgrading Legacy Business Software",
    excerpt:
      "Replacing legacy software doesn't have to be a 'big bang' rewrite. A pragmatic, phased approach delivers value sooner and carries less risk.",
    category: "Engineering",
    readTime: "7 min read",
    publishedAt: "2026-08-05",
    content: `
## The Legacy Software Trap

Most established businesses have at least one system they quietly dread: an ageing desktop application, a brittle spreadsheet-driven process, or a decade-old web app that nobody fully understands anymore.

These systems become traps. They're too important to switch off, too fragile to modify, and too opaque to reason about. But living with them has a cost: slow operations, integration headaches, and an inability to adapt as the business grows.

## The Big Bang Rewrite: Why It Usually Fails

The instinct is to schedule a full replacement. Rewrite everything. Switch over on a date. This approach has a poor success record for a simple reason: you're attempting to build a complete replacement for a system you don't fully understand, while that system is still changing.

The result is almost always schedule overruns, cost blowouts, and feature gaps that frustrate users on day one.

## The Strangler Fig Approach

A better pattern — known as the "Strangler Fig" pattern — involves gradually replacing the old system piece by piece, while the old system continues running in parallel.

1. **Identify the highest-value pain points** in the current system
2. **Build modern replacements** for those specific pieces
3. **Route traffic** to the new components where they're ready
4. **Retire old components** incrementally as confidence grows
5. **Repeat** until the legacy system is fully replaced

At each step, you have a working system. Users are never left without tools. And you're building the new system against real usage patterns, not assumptions.

## What "Modern" Actually Means

A modern replacement isn't necessarily more complex. Often it's simpler: a clean API, a well-structured database, and a clear separation of concerns. The goal is a system that the team can understand, modify, and extend — not one that requires a specialist to operate.

If your business is running on software that feels like a liability, the right answer is rarely to live with it or to attempt a full replacement overnight. A pragmatic, phased approach — applied with genuine engineering skill — gets you to the other side safely.
    `.trim(),
  },
];

/** Returns a single blog post by slug, or undefined. */
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
