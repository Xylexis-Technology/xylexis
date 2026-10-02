/**
 * Individual blog post page — /blog/[slug]
 * Renders the post content as formatted prose.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Renders a content string as simple HTML paragraphs and headings. */
function ContentRenderer({ content }: { content: string }) {
  const lines = content.split("\n\n");

  return (
    <div className="space-y-5 text-base leading-relaxed text-[oklch(0.40_0.02_260)]">
      {lines.map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-8 text-xl font-bold text-[oklch(0.15_0.02_260)]"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="ml-5 space-y-1.5 list-disc">
              {items.map((item, j) => (
                <li key={j}>{item.slice(2)}</li>
              ))}
            </ul>
          );
        }
        if (trimmed.match(/^\d+\. /)) {
          const items = trimmed.split("\n").filter((l) => l.match(/^\d+\. /));
          return (
            <ol key={i} className="ml-5 space-y-1.5 list-decimal">
              {items.map((item, j) => (
                <li key={j}>{item.replace(/^\d+\. /, "")}</li>
              ))}
            </ol>
          );
        }
        return <p key={i}>{trimmed}</p>;
      })}
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="bg-[oklch(0.99_0.003_240)]">
      {/* Back link */}
      <div className="border-b border-[oklch(0.88_0.01_250)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[oklch(0.50_0.02_260)] hover:text-[oklch(0.55_0.22_255)] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>

      {/* Post header */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-[oklch(0.55_0.22_255/0.10)] px-3 py-1 text-xs font-semibold text-[oklch(0.55_0.22_255)]">
              {post.category}
            </span>
            <span className="text-xs text-[oklch(0.65_0.015_260)]">{post.readTime}</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[oklch(0.15_0.02_260)] sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-[oklch(0.50_0.02_260)]">{post.excerpt}</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.55_0.22_255)] text-sm font-bold text-white">
              X
            </div>
            <div>
              <p className="text-sm font-medium text-[oklch(0.15_0.02_260)]">Xylexis Team</p>
              <time
                dateTime={post.publishedAt}
                className="text-xs text-[oklch(0.65_0.015_260)]"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Post content */}
      <article className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[oklch(0.88_0.01_250)] bg-white p-8 sm:p-12">
            <ContentRenderer content={post.content} />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.22_255)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to build something great?</h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[oklch(0.55_0.22_255)]"
          >
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
