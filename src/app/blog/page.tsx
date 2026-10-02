/**
 * Blog listing page — /blog
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering insights, AI automation guides, and web development deep-dives from the Xylexis team.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="bg-[oklch(0.99_0.003_240)]">
      {/* Hero */}
      <section className="border-b border-[oklch(0.88_0.01_250)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_255)]">
              Blog
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[oklch(0.15_0.02_260)] sm:text-5xl">
              Insights from the team.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[oklch(0.50_0.02_260)]">
              Engineering guides, AI deep-dives, and practical advice for businesses building in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-[oklch(0.88_0.01_250)] bg-white p-8 transition-shadow hover:shadow-md"
                >
                  {/* Meta */}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-[oklch(0.55_0.22_255/0.10)] px-3 py-1 text-xs font-semibold text-[oklch(0.55_0.22_255)]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[oklch(0.65_0.015_260)]">{post.readTime}</span>
                  </div>

                  <h2 className="mb-3 text-xl font-bold leading-snug text-[oklch(0.15_0.02_260)] group-hover:text-[oklch(0.55_0.22_255)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[oklch(0.50_0.02_260)]">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.publishedAt}
                      className="text-xs text-[oklch(0.65_0.015_260)]"
                    >
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[oklch(0.55_0.22_255)]">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
