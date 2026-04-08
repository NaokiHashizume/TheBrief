import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { servicesArticles } from "@/lib/services";
import { IndustryFinancialNav } from "@/components/IndustryFinancialNav";
import { CompetitorCards } from "@/components/CompetitorCards";
import { servicesCompanies } from "@/lib/servicesCompanies";

export const metadata: Metadata = {
  title: "サービス — Industry",
  description: "人材、警備、教育、コンサルティング、BPOなどサービス業全般の最新動向。",
  alternates: { canonical: "https://thebrief.info/industry/services" },
};

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function Page() {
  const sortedArticles = [...servicesArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "サービス", href: "/industry/services" }]} />
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <span>サービス</span>
      </div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#a855f715", color: "#a855f7" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">サービス</h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">Services</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">人材、警備、教育、コンサルティング、BPOなどサービス業全般の最新動向。</p>
      </div>
      <div className="h-px bg-brief-border mb-8" />
      <IndustryFinancialNav slug="services" />

      <CompetitorCards companies={servicesCompanies} title="日本の主要サービス企業" />

      <div className="h-px bg-brief-border my-8" />

      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link key={article.slug} href={`/industry/services/${article.slug}`} className="group block p-5 rounded-xl border border-brief-border hover:border-[#a855f7]/30 bg-brief-card transition-all">
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">{article.date}</time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>
            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-[#a855f7] transition-colors">{article.title}</h2>
            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">{article.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (<span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-[#a855f7]/8 text-[#a855f7]/70 font-medium">{tag}</span>))}
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
