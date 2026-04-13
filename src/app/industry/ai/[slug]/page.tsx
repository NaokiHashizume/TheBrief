import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { aiArticles } from "@/lib/ai";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { RelatedArticles } from "@/components/RelatedArticles";
import { RecommendedReads } from "@/components/RecommendedReads";
import ShareButton from "@/components/ShareButton";
import { ArticleReferences } from "@/components/ArticleReferences";
import { TagLink } from "@/components/TagLink";
import {
  Gemma4ModelFamilyDiagram,
  Gemma4BenchmarkDiagram,
  Gemma4ArchitectureDiagram,
  OpenModelComparisonDiagram,
  Gemma4UseCasesDiagram,
  Gemma4CodeExampleDiagram,
} from "@/components/Gemma4Diagrams";
import {
  AiModelOverviewDiagram,
  ModelTimelineDiagram,
  BenchmarkComparisonDiagram,
  PricingComparisonDiagram,
  MultimodalCapsDiagram,
  ContextWindowDiagram,
  MarketShareDiagram,
  StrengthsSummaryDiagram,
} from "@/components/AiModelDiagrams";
import {
  TpuGpuOverviewDiagram,
  ArchitectureComparisonDiagram,
  PerformanceSpecDiagram,
  PowerEfficiencyDiagram,
  CostComparisonDiagram,
  SoftwareStackDiagram,
  UsageMapDiagram,
  FutureOutlookDiagram,
} from "@/components/TpuVsGpuDiagrams";
import {
  MsftJpOverviewDiagram,
  MsftJpInfraDiagram,
  MsftJpSecurityDiagram,
  MsftJpTalentDiagram,
  MsftJpVsCloudDiagram,
  MsftJpSemiLinkDiagram,
  MsftJpImpactDiagram,
} from "@/components/MsftJpDiagrams";
import {
  GlasswingOverviewDiagram,
  GlasswingBenchmarkDiagram,
  GlasswingPartnersDiagram,
  GlasswingDiscoveriesDiagram,
  GlasswingSafetyDiagram,
  GlasswingStrategyDiagram,
  GlasswingTimelineDiagram,
} from "@/components/GlasswingDiagrams";
import {
  MuseSparkOverviewDiagram,
  MuseSparkModesDiagram,
  MuseSparkBenchmarksDiagram,
  MuseSparkInvestmentDiagram,
  MuseSparkSnsDiagram,
  MuseSparkVsLlamaDiagram,
  MuseSparkJapanDiagram,
} from "@/components/MuseSparkDiagrams";
import {
  AiLandscape2026OverviewDiagram,
  AiLandscape2026ModelsDiagram,
  AiLandscape2026BenchmarkDiagram,
  AiLandscape2026StrategyDiagram,
  AiLandscape2026JapanDiagram,
  AiLandscape2026TimelineDiagram,
  AiLandscape2026FutureDiagram,
} from "@/components/AiLandscape2026Diagrams";
import {
  ClaudeOpus46OverviewDiagram,
  ClaudeOpus46BenchmarksDiagram,
  ClaudeOpus46SafetyDiagram,
  ClaudeOpus46VsRivalsDiagram,
  ClaudeOpus46JapanDiagram,
  ClaudeOpus46UsecasesDiagram,
} from "@/components/ClaudeOpus46Diagrams";
import {
  LlmOverviewDiagram,
  LlmTransformerDiagram,
  LlmParamsDiagram,
  LlmComparisonDiagram,
  LlmHallucinationDiagram,
  LlmRagDiagram,
  LlmJapanDiagram,
  LlmUsecaseDiagram,
} from "@/components/LlmGuideDiagrams";
import {
  VibeCodingOverviewDiagram,
  VibeCodingStatsDiagram,
  VibeCodingToolsDiagram,
  VibeCodingProductivityDiagram,
  VibeCodingSecurityDiagram,
  VibeCodingJapanDiagram,
  VibeCodingAgenticDiagram,
} from "@/components/VibeCodingDiagrams";
import {
  TokenOverviewDiagram,
  TokenBpeDiagram,
  TokenCjkDiagram,
  TokenContextDiagram,
  TokenPricingDiagram,
  TokenFutureDiagram,
} from "@/components/LlmTokenDiagrams";
import {
  CmaArchitectureDiagram,
  CmaDecouplingDiagram,
  CmaPlatformComparisonDiagram,
  CmaStakeholdersDiagram,
  CmaJapanImpactDiagram,
  CmaAutonomyLevelsDiagram,
  CmaCompetitorMatrixDiagram,
} from "@/components/ClaudeManagedAgentsDiagrams";
import {
  ClaudenomicsOverviewDiagram,
  ClaudenomicsPricingDiagram,
  ClaudenomicsCachingDiagram,
  ClaudenomicsBatchDiagram,
  ClaudenomicsRoutingDiagram,
  ClaudenomicsRevenueDiagram,
  ClaudenomicsParadoxDiagram,
  ClaudenomicsStrategyDiagram,
} from "@/components/ClaudenomicsDiagrams";
import {
  PhysicalAiOverviewDiagram,
  PhysicalAiMarketDiagram,
  PhysicalAiNvidiaDiagram,
  PhysicalAiPlayersDiagram,
  PhysicalAiJapanDiagram,
  PhysicalAiApplicationsDiagram,
} from "@/components/PhysicalAiDiagrams";

export function generateStaticParams() {
  return aiArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = aiArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — AI`,
    description: article.summary,
    keywords: article.tags,
    alternates: {
      canonical: `https://thebrief.info/industry/ai/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://thebrief.info/industry/ai/${article.slug}`,
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
              className="font-semibold text-foreground"
              style={{ textDecorationLine: "none" }}
            >
              <span className="bg-[#8b5cf6]/[0.07] dark:bg-[#8b5cf6]/[0.15] px-1 py-0.5 rounded">
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

/* Diagram renderer mapped by ID */
const diagramMap: Record<string, React.FC> = {
  "gemma4-model-family": Gemma4ModelFamilyDiagram,
  "gemma4-benchmarks": Gemma4BenchmarkDiagram,
  "gemma4-architecture": Gemma4ArchitectureDiagram,
  "gemma4-comparison": OpenModelComparisonDiagram,
  "gemma4-code-example": Gemma4CodeExampleDiagram,
  "gemma4-use-cases": Gemma4UseCasesDiagram,
  "ai-model-overview": AiModelOverviewDiagram,
  "model-timeline": ModelTimelineDiagram,
  "benchmark-comparison": BenchmarkComparisonDiagram,
  "pricing-comparison": PricingComparisonDiagram,
  "multimodal-caps": MultimodalCapsDiagram,
  "context-window": ContextWindowDiagram,
  "market-share": MarketShareDiagram,
  "strengths-summary": StrengthsSummaryDiagram,
  "tpu-gpu-overview": TpuGpuOverviewDiagram,
  "architecture-comparison": ArchitectureComparisonDiagram,
  "performance-spec": PerformanceSpecDiagram,
  "power-efficiency": PowerEfficiencyDiagram,
  "cost-comparison": CostComparisonDiagram,
  "software-stack": SoftwareStackDiagram,
  "usage-map": UsageMapDiagram,
  "future-outlook": FutureOutlookDiagram,
  "msft-jp-overview": MsftJpOverviewDiagram,
  "msft-jp-infra": MsftJpInfraDiagram,
  "msft-jp-security": MsftJpSecurityDiagram,
  "msft-jp-talent": MsftJpTalentDiagram,
  "msft-jp-vs-cloud": MsftJpVsCloudDiagram,
  "msft-jp-semi-link": MsftJpSemiLinkDiagram,
  "msft-jp-impact": MsftJpImpactDiagram,
  "glasswing-overview": GlasswingOverviewDiagram,
  "glasswing-benchmarks": GlasswingBenchmarkDiagram,
  "glasswing-partners": GlasswingPartnersDiagram,
  "glasswing-discoveries": GlasswingDiscoveriesDiagram,
  "glasswing-safety": GlasswingSafetyDiagram,
  "glasswing-strategy": GlasswingStrategyDiagram,
  "glasswing-timeline": GlasswingTimelineDiagram,
  "muse-spark-overview": MuseSparkOverviewDiagram,
  "muse-spark-modes": MuseSparkModesDiagram,
  "muse-spark-benchmarks": MuseSparkBenchmarksDiagram,
  "muse-spark-investment": MuseSparkInvestmentDiagram,
  "muse-spark-sns": MuseSparkSnsDiagram,
  "muse-spark-vs-llama": MuseSparkVsLlamaDiagram,
  "muse-spark-japan": MuseSparkJapanDiagram,
  "claude-opus-overview": ClaudeOpus46OverviewDiagram,
  "claude-opus-benchmarks": ClaudeOpus46BenchmarksDiagram,
  "claude-opus-safety": ClaudeOpus46SafetyDiagram,
  "claude-opus-vs-rivals": ClaudeOpus46VsRivalsDiagram,
  "claude-opus-japan": ClaudeOpus46JapanDiagram,
  "claude-opus-usecases": ClaudeOpus46UsecasesDiagram,
  "ai-landscape-overview": AiLandscape2026OverviewDiagram,
  "ai-landscape-models": AiLandscape2026ModelsDiagram,
  "ai-landscape-benchmark": AiLandscape2026BenchmarkDiagram,
  "ai-landscape-strategy": AiLandscape2026StrategyDiagram,
  "ai-landscape-japan": AiLandscape2026JapanDiagram,
  "ai-landscape-timeline": AiLandscape2026TimelineDiagram,
  "ai-landscape-future": AiLandscape2026FutureDiagram,
  "llm-overview": LlmOverviewDiagram,
  "llm-transformer": LlmTransformerDiagram,
  "llm-params": LlmParamsDiagram,
  "llm-comparison": LlmComparisonDiagram,
  "llm-hallucination": LlmHallucinationDiagram,
  "llm-rag": LlmRagDiagram,
  "llm-japan": LlmJapanDiagram,
  "llm-usecase": LlmUsecaseDiagram,
  "vibe-coding-overview": VibeCodingOverviewDiagram,
  "vibe-coding-stats": VibeCodingStatsDiagram,
  "vibe-coding-tools": VibeCodingToolsDiagram,
  "vibe-coding-productivity": VibeCodingProductivityDiagram,
  "vibe-coding-security": VibeCodingSecurityDiagram,
  "vibe-coding-japan": VibeCodingJapanDiagram,
  "vibe-coding-agentic": VibeCodingAgenticDiagram,
  "cma-architecture": CmaArchitectureDiagram,
  "cma-decoupling": CmaDecouplingDiagram,
  "cma-platform-comparison": CmaPlatformComparisonDiagram,
  "cma-stakeholders": CmaStakeholdersDiagram,
  "cma-japan-impact": CmaJapanImpactDiagram,
  "cma-autonomy-levels": CmaAutonomyLevelsDiagram,
  "cma-competitor-matrix": CmaCompetitorMatrixDiagram,
  "claudenomics-overview": ClaudenomicsOverviewDiagram,
  "claudenomics-pricing": ClaudenomicsPricingDiagram,
  "claudenomics-caching": ClaudenomicsCachingDiagram,
  "claudenomics-batch": ClaudenomicsBatchDiagram,
  "claudenomics-routing": ClaudenomicsRoutingDiagram,
  "claudenomics-revenue": ClaudenomicsRevenueDiagram,
  "claudenomics-paradox": ClaudenomicsParadoxDiagram,
  "claudenomics-strategy": ClaudenomicsStrategyDiagram,
  "token-overview": TokenOverviewDiagram,
  "token-bpe": TokenBpeDiagram,
  "token-cjk": TokenCjkDiagram,
  "token-context": TokenContextDiagram,
  "token-pricing": TokenPricingDiagram,
  "token-future": TokenFutureDiagram,
  "physical-ai-overview": PhysicalAiOverviewDiagram,
  "physical-ai-market": PhysicalAiMarketDiagram,
  "physical-ai-nvidia": PhysicalAiNvidiaDiagram,
  "physical-ai-players": PhysicalAiPlayersDiagram,
  "physical-ai-japan": PhysicalAiJapanDiagram,
  "physical-ai-applications": PhysicalAiApplicationsDiagram,
};

export default async function AiArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = aiArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleIndex = aiArticles.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? aiArticles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < aiArticles.length - 1
      ? aiArticles[articleIndex + 1]
      : null;

  return (
    <div className="max-w-[720px] mx-auto px-5 sm:px-6 py-16">
      <ArticleJsonLd
        title={article.title}
        description={article.summary}
        datePublished={article.date}
        dateModified={article.date}
        author="The Brief"
        url={`https://thebrief.info/industry/ai/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "AI", href: "/industry/ai" },
          { name: article.title, href: `/industry/ai/${article.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-12 font-medium tracking-wide">
        <Link href="/" className="hover:text-foreground/70 transition-colors">
          Home
        </Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30"><path d="M9 18l6-6-6-6"/></svg>
        <Link href="/industry" className="hover:text-foreground/70 transition-colors">
          Industry
        </Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30"><path d="M9 18l6-6-6-6"/></svg>
        <Link href="/industry/ai" className="hover:text-foreground/70 transition-colors">
          AI
        </Link>
      </nav>

      {/* ── Hero Header ── */}
      <header className="mb-14">
        {/* Category + Tags */}
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span className="text-[10px] tracking-[2.5px] uppercase font-semibold text-[#8b5cf6]/60">
            AI
          </span>
          <span className="w-px h-3 bg-[#8b5cf6]/15" />
          {article.tags.map((tag) => (
            <TagLink key={tag} tag={tag} color="#8b5cf6" />
          ))}
        </div>

        {/* Title */}
        <h1 className="font-serif text-[28px] sm:text-[36px] font-bold leading-[1.25] tracking-tight">
          {article.title}
        </h1>

        {/* Subtitle */}
        {article.titleEn && (
          <p className="mt-2 text-[11px] tracking-[1px] text-foreground/25 font-medium uppercase">
            {article.titleEn}
          </p>
        )}

        {/* Summary */}
        <p className="mt-6 text-[15px] text-foreground/65 leading-[1.9] border-l-2 border-[#8b5cf6]/20 pl-5">
          {article.summary}
        </p>

        {/* Meta */}
        <div className="mt-6 flex items-center gap-5 text-[11px] text-foreground/35 font-medium">
          <time className="tabular-nums">{article.date}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/15" />
          <span>{article.readTime}</span>
        </div>
      </header>

      {/* ── Table of Contents ── */}
      <nav className="mb-16 relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.005]" />
        <div className="relative p-6 sm:p-8 rounded-2xl border border-foreground/[0.05]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-6 rounded-md bg-foreground/[0.04] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground/30">
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </div>
            <span className="text-[10px] tracking-[2.5px] uppercase text-foreground/30 font-semibold">
              Contents
            </span>
          </div>
          <ol className="space-y-0">
            {article.sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="group flex items-center gap-4 py-2.5 text-foreground/65 hover:text-[#8b5cf6] transition-colors"
                >
                  <span className="text-[11px] tabular-nums font-semibold text-[#8b5cf6]/30 group-hover:text-[#8b5cf6]/60 w-5 text-right transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-medium">{section.heading}</span>
                </a>
                {i < article.sections.length - 1 && (
                  <div className="ml-[30px] h-px bg-foreground/[0.03]" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ── Article Content ── */}
      <article>
        {article.sections.map((section, i) => {
          const paragraphs = section.body.split("\n\n").filter((p) => p.trim());
          const DiagramComponent = section.diagramId ? diagramMap[section.diagramId] : null;

          return (
            <section key={i} id={`section-${i}`} className="mb-20 scroll-mt-24">
              {/* Section heading */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[32px] sm:text-[40px] font-bold tabular-nums text-[#8b5cf6]/[0.08] leading-none select-none font-serif">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-serif text-[22px] sm:text-[26px] font-bold leading-tight tracking-tight">
                      {section.heading}
                    </h2>
                    {section.headingEn && (
                      <span className="text-[10px] tracking-[2px] uppercase text-foreground/25 font-medium mt-0.5 block">
                        {section.headingEn}
                      </span>
                    )}
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-[#8b5cf6]/15 via-[#8b5cf6]/5 to-transparent" />
              </div>

              {/* Diagram */}
              {DiagramComponent && <DiagramComponent />}

              {/* Section body */}
              <div className="space-y-6">
                {paragraphs.map((paragraph, j) => {
                  const trimmed = paragraph.trim();

                  // Callout box
                  if (trimmed.startsWith("> ")) {
                    const calloutText = trimmed.slice(2);
                    return (
                      <div
                        key={j}
                        className="my-8 pl-5 py-4 rounded-r-lg bg-[#8b5cf6]/[0.03] dark:bg-[#8b5cf6]/[0.06] border-l-3 border-[#8b5cf6]/25"
                      >
                        <div>
                          <p className="text-[14px] text-foreground/70 leading-[1.9] italic">
                            <RichText text={calloutText} />
                          </p>
                        </div>
                      </div>
                    );
                  }

                  // 【bracket】labels
                  if (trimmed.startsWith("【")) {
                    const bracketEnd = trimmed.indexOf("】");
                    if (bracketEnd > 0) {
                      const label = trimmed.slice(1, bracketEnd);
                      const content = trimmed.slice(bracketEnd + 1).trim();
                      return (
                        <div
                          key={j}
                          className="group pl-5 py-3 relative"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[#8b5cf6]/20 group-hover:bg-[#8b5cf6]/35 transition-colors" />
                          <div className="text-[11px] font-bold text-[#8b5cf6]/60 tracking-wide mb-1.5">
                            {label}
                          </div>
                          <p className="text-[14px] text-foreground/75 leading-[1.9]">
                            <RichText text={content} />
                          </p>
                        </div>
                      );
                    }
                  }

                  // Lead paragraph
                  const isLead = j === 0 || (j === 1 && paragraphs[0].trim().startsWith("> "));

                  return (
                    <p
                      key={j}
                      className={
                        isLead
                          ? "text-[16px] text-foreground/80 leading-[2] tracking-[0.02em] first-letter:text-[2em] first-letter:font-serif first-letter:font-bold first-letter:text-[#8b5cf6]/40 first-letter:float-left first-letter:mr-1 first-letter:mt-1 first-letter:leading-[0.8]"
                          : "text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]"
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

      <ShareButton title={article.title} />
      <ArticleReferences sources={article.sources} />

      {/* FAQ Structured Data */}
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
        articles={aiArticles}
        basePath="/industry/ai"
        accentColor="#8b5cf6"
      />

      <RecommendedReads currentSlug={slug} currentTags={article.tags} />

      {/* ── Article Navigation ── */}
      <div className="mt-20 pt-12 border-t border-foreground/[0.04]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/industry/ai/${prevArticle.slug}`}
              className="group p-5 rounded-2xl border border-foreground/[0.05] hover:border-foreground/[0.1] transition-all hover:bg-foreground/[0.01]"
            >
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[2px] text-foreground/30 mb-2 font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40"><path d="M15 18l-6-6 6-6"/></svg>
                Previous
              </div>
              <div className="text-[13px] font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/industry/ai/${nextArticle.slug}`}
              className="group p-5 rounded-2xl border border-foreground/[0.05] hover:border-foreground/[0.1] transition-all text-right hover:bg-foreground/[0.01]"
            >
              <div className="flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-[2px] text-foreground/30 mb-2 font-medium">
                Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40"><path d="M9 18l6-6-6-6"/></svg>
              </div>
              <div className="text-[13px] font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/industry/ai"
            className="inline-flex items-center gap-2 text-[12px] text-foreground/35 hover:text-foreground/60 transition-colors font-medium tracking-wide"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            記事一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
