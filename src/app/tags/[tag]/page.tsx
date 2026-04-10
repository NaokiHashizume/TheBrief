import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTags, getArticlesByTag } from "@/lib/articleSources";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

type PageProps = { params: Promise<{ tag: string }> };

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `#${decoded} の記事一覧`,
    description: `「${decoded}」タグが付いた記事の一覧です。`,
    alternates: { canonical: `https://thebrief.info/tags/${tag}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: `#${decoded} の記事一覧`,
      description: `「${decoded}」タグが付いた記事の一覧です。`,
      url: `https://thebrief.info/tags/${tag}`,
      siteName: "The Brief",
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `#${decoded} の記事一覧`,
      description: `「${decoded}」タグが付いた記事の一覧です。`,
    },
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const articles = getArticlesByTag(decoded);

  if (articles.length === 0) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: `#${decoded}`, href: `/tags/${tag}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span>#{decoded}</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brief-card border border-brief-border text-[10px] font-bold uppercase tracking-[2px] text-foreground/45 mb-4">
          Tag
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold">
          #{decoded}
        </h1>
        <p className="mt-2 text-sm text-foreground/50">
          {articles.length}件の記事
        </p>
      </div>

      {/* Article list */}
      <div className="space-y-3">
        {articles.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group flex items-start gap-4 p-5 rounded-xl border border-brief-border hover:border-foreground/20 hover:bg-brief-card transition-all duration-200"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${a.color}15`,
                    color: a.color,
                  }}
                >
                  {a.label}
                </span>
                <time className="text-[10px] tabular-nums text-foreground/40">{a.date}</time>
                <span className="text-[10px] text-foreground/30">{a.readTime}</span>
              </div>
              <h2 className="font-serif text-[15px] font-bold leading-snug group-hover:text-foreground/80 transition-colors">
                {a.title}
              </h2>
              <p className="mt-1.5 text-[12px] text-foreground/50 leading-relaxed line-clamp-2">
                {a.summary}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      t === decoded
                        ? "text-foreground font-bold"
                        : "text-foreground/40"
                    }`}
                    style={
                      t === decoded
                        ? { backgroundColor: `${a.color}20`, color: a.color }
                        : undefined
                    }
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 mt-1 text-foreground/25 group-hover:text-foreground/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Back */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-brief-border bg-brief-card px-4 py-2 text-xs uppercase tracking-[2px] text-foreground/55 hover:text-foreground transition-colors"
        >
          <span>←</span>
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
}
