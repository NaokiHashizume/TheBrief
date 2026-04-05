import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ictArticles } from "@/lib/ict";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  TcpIpLayerDiagram,
  PacketJourneyDiagram,
  DnsHierarchyDiagram,
  SubmarineCableDiagram,
  MobileGenerationDiagram,
  SecurityLayersDiagram,
  InternetScaleDiagram,
} from "@/components/NetworkDiagrams";
import {
  TelecomOverviewDiagram,
  SpectrumBandsDiagram,
  ModulationTypesDiagram,
  FiberOpticDiagram,
  CellNetworkDiagram,
  SatelliteTypesDiagram,
  JapanInfraDiagram,
} from "@/components/TelecomDiagrams";

export function generateStaticParams() {
  return ictArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ictArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — 情報通信・ネット`,
    description: article.summary,
    alternates: {
      canonical: `https://thebrief.info/industry/ict/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://thebrief.info/industry/ict/${article.slug}`,
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
  // Split by **bold** markers
  const parts = text.split(/\*\*(.*?)\*\*/);
  return (
    <>
      {parts.map((part, k) => {
        if (k % 2 === 1) {
          // Bold text
          return (
            <strong
              key={k}
              className="font-semibold text-foreground not-italic"
              style={{ textDecorationLine: "none" }}
            >
              <span className="bg-[#3b82f6]/[0.06] dark:bg-[#3b82f6]/[0.12] px-0.5 rounded-sm">
                {part}
              </span>
            </strong>
          );
        }
        // Regular text — highlight 「quoted」 terms
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

export default async function IctArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ictArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleIndex = ictArticles.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? ictArticles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < ictArticles.length - 1
      ? ictArticles[articleIndex + 1]
      : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <ArticleJsonLd
        title={article.title}
        description={article.summary}
        datePublished={article.date}
        dateModified={article.date}
        author={article.author}
        url={`https://thebrief.info/industry/ict/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "情報通信・ネット", href: "/industry/ict" },
          { name: article.title, href: `/industry/ict/${article.slug}` },
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
        <Link href="/industry/ict" className="hover:text-foreground transition-colors">
          情報通信・ネット
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="category-pill text-[#3b82f6] font-medium">
            情報通信・ネット
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-2 py-0.5 rounded-full bg-[#3b82f6]/8 text-[#3b82f6]/70 font-medium"
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
                className="flex items-start gap-2 text-sm text-foreground/70 hover:text-[#3b82f6] transition-colors"
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
          const paragraphs = section.body.split("\n\n").filter((p) => p.trim());

          return (
            <section key={i} id={`section-${i}`} className="mb-12 scroll-mt-20">
              {/* Section number + heading */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-bold text-[#3b82f6]/50 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-[#3b82f6]/10" />
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

              {/* Diagram (rendered before body text) */}
              {section.diagramId === "internet-scale" && <InternetScaleDiagram />}
              {section.diagramId === "tcpip-layers" && <TcpIpLayerDiagram />}
              {section.diagramId === "packet-journey" && <PacketJourneyDiagram />}
              {section.diagramId === "submarine-cable" && <SubmarineCableDiagram />}
              {section.diagramId === "dns-hierarchy" && <DnsHierarchyDiagram />}
              {section.diagramId === "mobile-generation" && <MobileGenerationDiagram />}
              {section.diagramId === "security-layers" && <SecurityLayersDiagram />}
              {section.diagramId === "telecom-overview" && <TelecomOverviewDiagram />}
              {section.diagramId === "spectrum-bands" && <SpectrumBandsDiagram />}
              {section.diagramId === "modulation-types" && <ModulationTypesDiagram />}
              {section.diagramId === "fiber-optic" && <FiberOpticDiagram />}
              {section.diagramId === "cell-network" && <CellNetworkDiagram />}
              {section.diagramId === "satellite-types" && <SatelliteTypesDiagram />}
              {section.diagramId === "japan-infra" && <JapanInfraDiagram />}

              {/* Section body */}
              <div className="space-y-5">
                {paragraphs.map((paragraph, j) => {
                  const trimmed = paragraph.trim();

                  // Callout / highlight box (lines starting with "> ")
                  if (trimmed.startsWith("> ")) {
                    const calloutText = trimmed.slice(2);
                    return (
                      <div
                        key={j}
                        className="my-5 px-5 py-4 rounded-xl bg-[#3b82f6]/[0.04] border border-[#3b82f6]/10"
                      >
                        <div className="flex gap-3">
                          <div className="w-1 rounded-full bg-[#3b82f6]/30 flex-shrink-0" />
                          <p className="text-[14px] text-foreground/80 leading-[1.8] italic">
                            <RichText text={calloutText} />
                          </p>
                        </div>
                      </div>
                    );
                  }

                  // 【heading】 style labels (e.g. TCP/IP layers)
                  if (trimmed.startsWith("【")) {
                    const bracketEnd = trimmed.indexOf("】");
                    if (bracketEnd > 0) {
                      const label = trimmed.slice(1, bracketEnd);
                      const content = trimmed.slice(bracketEnd + 1).trim();
                      return (
                        <div
                          key={j}
                          className="pl-4 py-2 border-l-3 border-[#3b82f6]/25 bg-[#3b82f6]/[0.02] rounded-r-lg"
                        >
                          <div className="text-xs font-bold text-[#3b82f6] mb-1">
                            {label}
                          </div>
                          <p className="text-[14px] text-foreground/75 leading-[1.85]">
                            <RichText text={content} />
                          </p>
                        </div>
                      );
                    }
                  }

                  // Lead paragraph (first text paragraph in each section, after callout)
                  const isLead = j === 0 || (j === 1 && paragraphs[0].trim().startsWith("> "));

                  return (
                    <p
                      key={j}
                      className={
                        isLead
                          ? "text-[16px] text-foreground/85 leading-[1.9] first-letter:text-2xl first-letter:font-serif first-letter:font-bold first-letter:text-[#3b82f6] first-letter:mr-0.5"
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
              href={`/industry/ict/${prevArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#3b82f6]/30 transition-colors"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/40 mb-1">
                ← 前の記事
              </div>
              <div className="text-sm font-medium group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/industry/ict/${nextArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#3b82f6]/30 transition-colors text-right"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/40 mb-1">
                次の記事 →
              </div>
              <div className="text-sm font-medium group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/industry/ict"
            className="inline-flex items-center gap-2 text-sm text-[#3b82f6] hover:underline"
          >
            ← 情報通信・ネットの記事一覧へ
          </Link>
        </div>
      </div>
    </div>
  );
}
