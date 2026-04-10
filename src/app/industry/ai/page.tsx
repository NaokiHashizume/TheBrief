import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { aiArticles } from "@/lib/ai";
import { IndustryFinancialNav } from "@/components/IndustryFinancialNav";
import { CompetitorCards } from "@/components/CompetitorCards";
import { aiCompanies } from "@/lib/aiCompanies";

export const metadata: Metadata = {
  title: "AI — Industry",
  description:
    "大規模言語モデル、AIエージェント、オープンモデルなどAI分野の最新動向と解説記事。",
  alternates: { canonical: "https://thebrief.info/industry/ai" },
  openGraph: {
    title: "AI — Industry",
    description:
      "大規模言語モデル、AIエージェント、オープンモデルなどAI分野の最新動向と解説記事。",
    url: "https://thebrief.info/industry/ai",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI — Industry",
    description:
      "大規模言語モデル、AIエージェント、オープンモデルなどAI分野の最新動向と解説記事。",
  },
};

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function AiPage() {
  const sortedArticles = [...aiArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "AI", href: "/industry/ai" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">
          Industry
        </Link>
        <span>/</span>
        <span>AI</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#8b5cf615", color: "#8b5cf6" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.9 2-2 2h-4a2 2 0 0 1-2-2 4 4 0 0 1 4-4z" />
              <path d="M9 8v2" /><path d="M15 8v2" />
              <path d="M12 14v4" /><path d="M8 18h8" />
              <path d="M6 12c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2" />
              <path d="M18 12c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2" />
              <path d="M9 12h6" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">AI</h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              AI
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
          大規模言語モデル、AIエージェント、オープンモデルなど、AI分野の最新動向と技術解説。
        </p>
      </div>

      <div className="h-px bg-brief-border mb-8" />

      <IndustryFinancialNav slug="ai" />

      <CompetitorCards companies={aiCompanies} title="日本の主要AI企業" />

      <div className="h-px bg-brief-border my-8" />

      {/* Articles */}
      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/industry/ai/${article.slug}`}
            className="group block p-5 rounded-xl border border-brief-border hover:border-[#8b5cf6]/30 bg-brief-card transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">
                {article.date}
              </time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>

            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-[#8b5cf6] transition-colors">
              {article.title}
            </h2>

            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">
              {article.summary}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-full bg-[#8b5cf6]/8 text-[#8b5cf6]/70 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* More coming */}
      <div className="mt-8 p-5 rounded-xl border border-dashed border-brief-border text-center">
        <p className="text-sm text-foreground/45 italic">
          記事は順次追加されます。
        </p>
      </div>
    </div>
  );
}
