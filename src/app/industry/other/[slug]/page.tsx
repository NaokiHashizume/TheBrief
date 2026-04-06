import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { otherArticles } from "@/lib/other";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { RelatedArticles } from "@/components/RelatedArticles";
import {
  BlocOverviewDiagram,
  TariffTimelineDiagram,
  USChinaDecouplingDiagram,
  SemiconductorRaceDiagram,
  TradeBlocsDiagram,
  EuBricsDiagram,
  JapanStrategyDiagram,
} from "@/components/EconomicBlocDiagrams";
import {
  DxOverviewStatsDiagram,
  DxManufacturingDiagram,
  DxConstructionDiagram,
  DxHealthcareDiagram,
  DxLogisticsDiagram,
  DxFinanceDiagram,
  DxRetailDiagram,
  DxSuccessConditionsDiagram,
} from "@/components/DxChallengeDiagrams";

export function generateStaticParams() {
  return otherArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = otherArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — その他`,
    description: article.summary,
    alternates: {
      canonical: `https://thebrief.info/industry/other/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://thebrief.info/industry/other/${article.slug}`,
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

export default async function OtherArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = otherArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleIndex = otherArticles.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? otherArticles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < otherArticles.length - 1
      ? otherArticles[articleIndex + 1]
      : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <ArticleJsonLd
        title={article.title}
        description={article.summary}
        datePublished={article.date}
        dateModified={article.date}
        author={article.author}
        url={`https://thebrief.info/industry/other/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "その他", href: "/industry/other" },
          { name: article.title, href: `/industry/other/${article.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-8 flex-wrap">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">
          Industry
        </Link>
        <span>/</span>
        <Link href="/industry/other" className="hover:text-foreground transition-colors">
          その他
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="category-pill text-[#8b5cf6] font-medium">
            その他
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-2 py-0.5 rounded-full bg-[#8b5cf6]/8 text-[#8b5cf6]/70 font-medium"
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
                className="flex items-start gap-2 text-sm text-foreground/70 hover:text-[#8b5cf6] transition-colors"
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
                <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/45">
                  {section.headingEn}
                </span>
              )}
            </div>

            {/* Diagram */}
            {section.diagramId === "bloc-overview" && <BlocOverviewDiagram />}
            {section.diagramId === "tariff-timeline" && <TariffTimelineDiagram />}
            {section.diagramId === "us-china-decoupling" && <USChinaDecouplingDiagram />}
            {section.diagramId === "semiconductor-race" && <SemiconductorRaceDiagram />}
            {section.diagramId === "trade-blocs" && <TradeBlocsDiagram />}
            {section.diagramId === "eu-brics" && <EuBricsDiagram />}
            {section.diagramId === "japan-strategy" && <JapanStrategyDiagram />}
            {section.diagramId === "dx-overview-stats" && <DxOverviewStatsDiagram />}
            {section.diagramId === "dx-manufacturing" && <DxManufacturingDiagram />}
            {section.diagramId === "dx-construction" && <DxConstructionDiagram />}
            {section.diagramId === "dx-healthcare" && <DxHealthcareDiagram />}
            {section.diagramId === "dx-logistics" && <DxLogisticsDiagram />}
            {section.diagramId === "dx-finance" && <DxFinanceDiagram />}
            {section.diagramId === "dx-retail" && <DxRetailDiagram />}
            {section.diagramId === "dx-success-conditions" && <DxSuccessConditionsDiagram />}

            {/* Section body */}
            <div className="space-y-4">
              {section.body.split("\n\n").map((paragraph, j) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith("【")) {
                  const bracketEnd = trimmed.indexOf("】");
                  const match = bracketEnd > 0
                    ? [trimmed, trimmed.slice(1, bracketEnd), trimmed.slice(bracketEnd + 1)]
                    : null;
                  if (match) {
                    return (
                      <div key={j} className="pl-4 border-l-2 border-[#8b5cf6]/20">
                        <div className="text-xs font-bold text-[#8b5cf6]/80 mb-1">
                          {match[1]}
                        </div>
                        <p className="text-[15px] text-foreground/75 leading-[1.85]">
                          {match[2].trim()}
                        </p>
                      </div>
                    );
                  }
                }

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

            {i < article.sections.length - 1 && (
              <div className="mt-10 h-px bg-brief-border" />
            )}
          </section>
        ))}
      </article>

      {/* FAQ Structured Data — extract 【label】 sections as Q&A */}
      <FAQJsonLd
        items={article.sections
          .flatMap((s) =>
            s.body.split("\n\n").filter((p) => p.trim().startsWith("【"))
          )
          .map((p) => {
            const end = p.indexOf("】");
            return {
              question: p.slice(1, end),
              answer: p.slice(end + 1).trim(),
            };
          })
          .slice(0, 10)}
      />

      {/* Related Articles */}
      <RelatedArticles
        currentSlug={slug}
        articles={otherArticles}
        basePath="/industry/other"
        accentColor="#8b5cf6"
      />

      {/* Article Navigation */}
      <div className="mt-14 pt-8 border-t border-brief-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/industry/other/${prevArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#8b5cf6]/30 transition-colors"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-1">
                ← 前の記事
              </div>
              <div className="text-sm font-medium group-hover:text-[#8b5cf6] transition-colors line-clamp-2">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/industry/other/${nextArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#8b5cf6]/30 transition-colors text-right"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-1">
                次の記事 →
              </div>
              <div className="text-sm font-medium group-hover:text-[#8b5cf6] transition-colors line-clamp-2">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/industry/other"
            className="inline-flex items-center gap-2 text-sm text-[#8b5cf6] hover:underline"
          >
            ← その他の記事一覧へ
          </Link>
        </div>
      </div>
    </div>
  );
}
