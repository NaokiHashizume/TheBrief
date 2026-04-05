import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { economyArticles } from "@/lib/economyArticles";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  TaxRateHistoryDiagram,
  TaxRevenueStatsDiagram,
  SocialSecurityBreakdownDiagram,
  NationalLocalSplitDiagram,
  ReducedRateItemsDiagram,
  InvoiceSystemDiagram,
  RegressivityDiagram,
  InternationalComparisonDiagram,
  FutureDebatesDiagram,
} from "@/components/ConsumptionTaxDiagrams";

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

/* Inline rich text renderer: **bold**, 「quotes」 */
function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return (
    <>
      {parts.map((part, k) => {
        if (k % 2 === 1) {
          return (
            <strong
              key={k}
              className="font-semibold text-foreground not-italic"
              style={{ textDecorationLine: "none" }}
            >
              <span className="bg-[#dc2626]/[0.06] dark:bg-[#dc2626]/[0.12] px-0.5 rounded-sm">
                {part}
              </span>
            </strong>
          );
        }
        const quoteParts = part.split(/(「[^」]+」)/);
        return (
          <span key={k}>
            {quoteParts.map((qp, qi) => {
              if (qp.startsWith("「") && qp.endsWith("」")) {
                return (
                  <span key={qi} className="text-foreground/90 font-medium">
                    {qp}
                  </span>
                );
              }
              return <span key={qi}>{qp}</span>;
            })}
          </span>
        );
      })}
    </>
  );
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
  const prevArticle =
    articleIndex > 0 ? economyArticles[articleIndex - 1] : null;
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
          {
            name: article.title,
            href: `/economy/${article.slug}`,
          },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-8 flex-wrap">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/economy"
          className="hover:text-foreground transition-colors"
        >
          Economy
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="category-pill text-[#dc2626] font-medium">
            Economy
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-2 py-0.5 rounded-full bg-[#dc2626]/8 text-[#dc2626]/70 font-medium"
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
                className="flex items-start gap-2 text-sm text-foreground/70 hover:text-[#dc2626] transition-colors"
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
        {article.sections.map((section, i) => {
          const paragraphs = section.body
            .split("\n\n")
            .filter((p) => p.trim());

          return (
            <section key={i} id={`section-${i}`} className="mb-12 scroll-mt-20">
              {/* Section number + heading */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-bold text-[#dc2626]/50 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-[#dc2626]/10" />
                </div>
                <h2 className="font-serif text-xl font-bold">
                  {section.heading}
                </h2>
                {section.headingEn && (
                  <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/35">
                    {section.headingEn}
                  </span>
                )}
              </div>

              {/* Diagram */}
              {section.diagramId === "tax-rate-history" && <TaxRateHistoryDiagram />}
              {section.diagramId === "tax-revenue-stats" && <TaxRevenueStatsDiagram />}
              {section.diagramId === "social-security-breakdown" && <SocialSecurityBreakdownDiagram />}
              {section.diagramId === "national-local-split" && <NationalLocalSplitDiagram />}
              {section.diagramId === "reduced-rate-items" && <ReducedRateItemsDiagram />}
              {section.diagramId === "invoice-system" && <InvoiceSystemDiagram />}
              {section.diagramId === "regressivity" && <RegressivityDiagram />}
              {section.diagramId === "international-comparison" && <InternationalComparisonDiagram />}
              {section.diagramId === "future-debates" && <FutureDebatesDiagram />}

              {/* Section body */}
              <div className="space-y-5">
                {paragraphs.map((paragraph, j) => {
                  const trimmed = paragraph.trim();

                  if (trimmed.startsWith("> ")) {
                    const calloutText = trimmed.slice(2);
                    return (
                      <div
                        key={j}
                        className="my-5 px-5 py-4 rounded-xl bg-[#dc2626]/[0.04] border border-[#dc2626]/10"
                      >
                        <div className="flex gap-3">
                          <div className="w-1 rounded-full bg-[#dc2626]/30 flex-shrink-0" />
                          <p className="text-[14px] text-foreground/80 leading-[1.8] italic">
                            <RichText text={calloutText} />
                          </p>
                        </div>
                      </div>
                    );
                  }

                  if (trimmed.startsWith("【")) {
                    const bracketEnd = trimmed.indexOf("】");
                    if (bracketEnd > 0) {
                      const label = trimmed.slice(1, bracketEnd);
                      const content = trimmed.slice(bracketEnd + 1).trim();
                      return (
                        <div
                          key={j}
                          className="pl-4 py-2 border-l-3 border-[#dc2626]/25 bg-[#dc2626]/[0.02] rounded-r-lg"
                        >
                          <div className="text-xs font-bold text-[#dc2626] mb-1">
                            {label}
                          </div>
                          <p className="text-[14px] text-foreground/75 leading-[1.85]">
                            <RichText text={content} />
                          </p>
                        </div>
                      );
                    }
                  }

                  const isLead =
                    j === 0 ||
                    (j === 1 && paragraphs[0].trim().startsWith("> "));

                  return (
                    <p
                      key={j}
                      className={
                        isLead
                          ? "text-[16px] text-foreground/85 leading-[1.9] first-letter:text-2xl first-letter:font-serif first-letter:font-bold first-letter:text-[#dc2626] first-letter:mr-0.5"
                          : "text-[15px] text-foreground/75 leading-[1.85]"
                      }
                    >
                      <RichText text={trimmed} />
                    </p>
                  );
                })}
              </div>
            </section>
          );
        })}
      </article>

      {/* Article Navigation */}
      <div className="mt-14 pt-8 border-t border-brief-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/economy/${prevArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#dc2626]/30 transition-colors"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/40 mb-1">
                ← 前の記事
              </div>
              <div className="text-sm font-medium group-hover:text-[#dc2626] transition-colors line-clamp-2">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/economy/${nextArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#dc2626]/30 transition-colors text-right"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/40 mb-1">
                次の記事 →
              </div>
              <div className="text-sm font-medium group-hover:text-[#dc2626] transition-colors line-clamp-2">
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
            className="inline-flex items-center gap-2 text-sm text-[#dc2626] hover:underline"
          >
            ← Economy トップへ
          </Link>
        </div>
      </div>
    </div>
  );
}
