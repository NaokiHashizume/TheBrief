import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { economyArticles } from "@/lib/economyArticles";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  CrisisTimelineDiagram,
  OilDependencyDiagram,
  EconomicImpactDiagram,
  OilReservesDiagram,
  IndustryImpactDiagram,
  HistoricalComparisonDiagram,
  EnergyStrategyDiagram,
} from "@/components/HormuzDiagrams";

export function generateStaticParams() {
  return economyArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = economyArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Economy`,
    description: article.summary,
    alternates: {
      canonical: `https://thebrief.info/economy/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://thebrief.info/economy/${article.slug}`,
      type: "article",
      locale: "ja_JP",
      siteName: "The Brief",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  };
}

export default async function EconomyArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = economyArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleIndex = economyArticles.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? economyArticles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < economyArticles.length - 1
      ? economyArticles[articleIndex + 1]
      : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <ArticleJsonLd
        title={article.title}
        description={article.summary}
        datePublished={article.date}
        dateModified={article.date}
        author={article.author}
        url={`https://thebrief.info/economy/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Economy", href: "/economy" },
          { name: article.title, href: `/economy/${article.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-8 flex-wrap">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/economy" className="hover:text-foreground transition-colors">
          Economy
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="category-pill text-[#f59e0b] font-medium">
            Economy
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-2 py-0.5 rounded-full bg-[#f59e0b]/8 text-[#f59e0b]/70 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
          {article.title}
        </h1>

        <p className="mt-4 text-foreground/60 leading-relaxed text-sm">
          {article.summary}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-foreground/45">
          <time>{article.date}</time>
          <span>·</span>
          <span>{article.author}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      <div className="h-px bg-brief-border mb-10" />

      {/* Table of Contents */}
      <nav className="mb-10 p-4 rounded-xl bg-brief-card border border-brief-border">
        <h2 className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-3">
          目次 / Contents
        </h2>
        <ol className="space-y-1.5">
          {article.sections.map((section, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                className="flex items-start gap-2 text-sm text-foreground/70 hover:text-[#f59e0b] transition-colors"
              >
                <span className="text-foreground/30 tabular-nums flex-shrink-0">
                  {i + 1}.
                </span>
                <span>{section.heading}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Article Content */}
      <article>
        {article.sections.map((section, i) => (
          <section key={i} id={`section-${i}`} className="mb-10 scroll-mt-20">
            {/* Section heading */}
            <div className="mb-4">
              <h2 className="font-serif text-xl font-bold">
                {section.heading}
              </h2>
              {section.headingEn && (
                <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/35">
                  {section.headingEn}
                </span>
              )}
            </div>

            {/* Diagrams */}
            {section.diagramId === "crisis-timeline" && <CrisisTimelineDiagram />}
            {section.diagramId === "oil-dependency" && <OilDependencyDiagram />}
            {section.diagramId === "economic-impact" && <EconomicImpactDiagram />}
            {section.diagramId === "oil-reserves" && <OilReservesDiagram />}
            {section.diagramId === "industry-impact" && <IndustryImpactDiagram />}
            {section.diagramId === "historical-comparison" && (
              <HistoricalComparisonDiagram />
            )}
            {section.diagramId === "energy-strategy" && <EnergyStrategyDiagram />}

            {/* Section body */}
            <div className="space-y-4">
              {section.body.split("\n\n").map((paragraph, j) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                // Handle 【heading】 style labels
                if (trimmed.startsWith("\u3010")) {
                  const bracketEnd = trimmed.indexOf("\u3011");
                  const match =
                    bracketEnd > 0
                      ? [
                          trimmed,
                          trimmed.slice(1, bracketEnd),
                          trimmed.slice(bracketEnd + 1),
                        ]
                      : null;
                  if (match) {
                    return (
                      <div
                        key={j}
                        className="pl-4 border-l-2 border-[#f59e0b]/20"
                      >
                        <div className="text-xs font-bold text-[#f59e0b]/80 mb-1">
                          {match[1]}
                        </div>
                        <p className="text-[15px] text-foreground/75 leading-[1.85]">
                          {match[2].trim()}
                        </p>
                      </div>
                    );
                  }
                }

                // Regular paragraph
                return (
                  <p
                    key={j}
                    className="text-[15px] text-foreground/75 leading-[1.85]"
                  >
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Divider between sections (except last) */}
            {i < article.sections.length - 1 && (
              <div className="mt-10 h-px bg-brief-border" />
            )}
          </section>
        ))}
      </article>

      {/* Sources */}
      <div className="mt-14 p-5 rounded-xl border border-dashed border-brief-border">
        <h3 className="text-sm font-medium mb-2 text-foreground/70">
          参考資料・出典
        </h3>
        <ul className="text-[11px] text-foreground/45 leading-relaxed space-y-1">
          <li>野村総合研究所（NRI）木内登英「イラン攻撃で高まる原油価格上昇リスクと日本経済への影響試算」2026年3月</li>
          <li>日本総合研究所「ホルムズ海峡封鎖に飛び火すれば140ドルに急騰、わが国GDPを3%下押しも」</li>
          <li>JETRO「日本のLNG輸入量のホルムズ海峡依存度は6.3%」2026年3月</li>
          <li>経済産業省「国家備蓄原油の放出を行います」2026年3月24日</li>
          <li>資源エネルギー庁「石油備蓄の現況」</li>
          <li>丸紅経済研究所「ホルムズ海峡封鎖の原油・ガス市場への影響」2026年3月10日</li>
          <li>IEA (International Energy Agency) - Strait of Hormuz</li>
          <li>Climate Bonds「中東紛争が浮き彫りにする日本のエネルギー脆弱性」</li>
          <li>アイ・エヌ情報センター「石油備蓄日数は248日、原油輸入の中東依存度は95.1%」2026年3月</li>
          <li>Bloomberg「日本のインフレ加速の恐れ、原油急騰 — ホルムズ海峡が事実上封鎖」2026年3月2日</li>
        </ul>
      </div>

      {/* Article Navigation */}
      <div className="mt-14 pt-8 border-t border-brief-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/economy/${prevArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#f59e0b]/30 transition-colors"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/40 mb-1">
                ← 前の記事
              </div>
              <div className="text-sm font-medium group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/economy/${nextArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#f59e0b]/30 transition-colors text-right"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/40 mb-1">
                次の記事 →
              </div>
              <div className="text-sm font-medium group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/economy"
            className="inline-flex items-center gap-2 text-sm text-[#f59e0b] hover:underline"
          >
            ← Economy ダッシュボードへ
          </Link>
        </div>
      </div>
    </div>
  );
}
