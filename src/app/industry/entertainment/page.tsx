import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { entertainmentArticles } from "@/lib/entertainment";
import { IndustryFinancialNav } from "@/components/IndustryFinancialNav";
import { CompetitorCards } from "@/components/CompetitorCards";
import { entertainmentCompanies } from "@/lib/entertainmentCompanies";

export const metadata: Metadata = {
  title: "エンタメ — Industry",
  description: "ゲーム・音楽・映画・動画配信・テーマパークなどエンタメ業界の動向。",
  alternates: { canonical: "https://thebrief.info/industry/entertainment" },
  openGraph: {
    title: "エンタメ — Industry",
    description: "ゲーム・音楽・映画・動画配信・テーマパークなどエンタメ業界の動向。",
    url: "https://thebrief.info/industry/entertainment",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "エンタメ — Industry",
    description: "ゲーム・音楽・映画・動画配信・テーマパークなどエンタメ業界の動向。",
  },
};

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function Page() {
  const sortedArticles = [...entertainmentArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "エンタメ", href: "/industry/entertainment" }]} />
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <span>エンタメ</span>
      </div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#d946ef15", color: "#d946ef" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">エンタメ</h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">Entertainment</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">ゲーム・音楽・映画・動画配信・テーマパークなどエンタメ業界の動向。</p>
      </div>
      <div className="h-px bg-brief-border mb-8" />
      <IndustryFinancialNav slug="entertainment" />

      <CompetitorCards companies={entertainmentCompanies} title="日本の主要エンタメ企業" />

      <div className="h-px bg-brief-border my-8" />

      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link key={article.slug} href={`/industry/entertainment/${article.slug}`} className="group block p-5 rounded-xl border border-brief-border hover:border-[#d946ef]/30 bg-brief-card transition-all">
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">{article.date}</time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>
            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-[#d946ef] transition-colors">{article.title}</h2>
            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">{article.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (<span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-[#d946ef]/8 text-[#d946ef]/70 font-medium">{tag}</span>))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 p-5 rounded-xl border border-dashed border-brief-border text-center">
        <p className="text-sm text-foreground/45 italic"><T ja="記事は順次追加されます。" en="More articles coming soon." /></p>
      </div>
    </div>
  );
}
