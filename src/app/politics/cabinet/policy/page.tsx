import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import { policyPillars, policyIndicators } from "@/lib/cabinetPolicy";

// Phase 1 inline English translations (lib stays JP-only)
const pillarEn: Record<string, { description: string; keyPoints: string[] }> = {
  "Responsible Proactive Fiscal Policy": {
    description:
      "Reversing years of austerity, this pillar pairs 'crisis-management investment' with 'growth investment' to build a strong economy. A ¥21.3 trillion comprehensive economic package has been adopted.",
    keyPoints: [
      "¥21.3T comprehensive package (¥11.7T livelihood security + ¥7.2T growth investment + ¥1.7T defense)",
      "Zero consumption tax on food for two years (under review in the national council)",
      "Raised the ¥1.03M income threshold to ¥1.23M (in force January 2026)",
      "Multi-year earmarked budget for 17 strategic fields (AI, semiconductors, quantum, space, etc.)",
    ],
  },
  "Defense & Diplomacy": {
    description:
      "Firmly hitting defense spending at 2% of GDP and advancing diplomacy toward a Free and Open Indo-Pacific, while boosting space and cyber capabilities.",
    keyPoints: [
      "Defense budget accelerated to ~¥11T/year (moved up two years from the 2027 goal)",
      "ASDF reorganized into the Air and Space Self-Defense Force with a new Space Operations Group",
      "Establishment of a National Intelligence Agency (targeted for July 2026)",
      "Special Defense Corporate Tax takes effect (April 2026)",
    ],
  },
  "Livelihood Security": {
    description:
      "Accelerating investment to protect daily life — tackling the birth rate, disaster resilience, and energy security — including a new Disaster Agency and expanded child policy.",
    keyPoints: [
      "Establishment of a Disaster Management Agency (target: autumn 2026)",
      "Full rollout of the universal childcare-access program (from April 2026)",
      "Start of child and child-rearing support levy collection",
      "Maximizing decarbonized power sources and accelerating GX investment",
    ],
  },
};

const indicatorEn: Record<string, { title: string; description: string; target: string; current: string; statusLabel: string; category: string }> = {
  approval: {
    title: "Cabinet Approval Rating",
    description: "Average of major public opinion polls",
    target: "Stable governance (maintain above 50%)",
    current: "58–64% (March 2026, various polls)",
    statusLabel: "Holding high",
    category: "Cabinet",
  },
  gdp: {
    title: "Real GDP Growth",
    description: "Median of Cabinet Office and private forecasts",
    target: "FY2026 +1.5% or higher (government outlook)",
    current: "+1.0% (private forecast median)",
    statusLabel: "Below government target",
    category: "Economy",
  },
  wages: {
    title: "Shunto Wage Hike Rate",
    description: "Rengo's tally of spring wage negotiations",
    target: "Sustained wage growth outpacing inflation",
    current: "+5.09% (3rd tally, 2026 Shunto — 3rd straight year above 5%)",
    statusLabel: "On pace to meet target",
    category: "Economy",
  },
  cpi: {
    title: "Consumer Price Index (CPI)",
    description: "Core CPI (excluding fresh food)",
    target: "Stable inflation around 2%",
    current: "+1.6% (Feb 2026, year-on-year)",
    statusLabel: "Stabilizing as pace eases",
    category: "Economy",
  },
  "food-tax": {
    title: "Zero Consumption Tax on Food",
    description: "Cutting the food consumption tax to 0% for two years",
    target: "Interim report from national council by early summer, then bill submission",
    current: "Under review in the national council",
    statusLabel: "Still under debate",
    category: "Economy",
  },
  defense: {
    title: "Defense Spending at 2% of GDP",
    description: "Defense-related spending as a share of GDP",
    target: "~¥11T/year (moved from 2027 to 2025)",
    current: "Over ¥9T in the FY2026 budget proposal",
    statusLabel: "Ramping up in stages",
    category: "Defense",
  },
  intelligence: {
    title: "Establish National Intelligence Agency",
    description: "A new body consolidating intelligence functions",
    target: "Launch in July 2026",
    current: "Establishment bill submitted to the Diet (Cabinet decision March 13)",
    statusLabel: "Under Diet deliberation",
    category: "Defense",
  },
  disaster: {
    title: "Establish Disaster Management Agency",
    description: "Elevating Cabinet Office disaster management to an independent agency",
    target: "Launch in autumn 2026",
    current: "Establishment bill submitted to the Diet (Cabinet decision March 6)",
    statusLabel: "Under Diet deliberation",
    category: "Livelihood",
  },
  childcare: {
    title: "Universal Childcare Access Program",
    description: "Allowing unenrolled children under 3 to use nurseries",
    target: "Full launch in April 2026",
    current: "Rolled out nationwide from April 1",
    statusLabel: "In force",
    category: "Livelihood",
  },
};

export const metadata: Metadata = {
  title: "施政方針・政策進捗 — Policy Platform & Progress",
  description:
    "第2次高市内閣の施政方針3本柱と政策進捗トラッカー。「日本列島を、強く豊かに。」の実現度を可視化。",
  alternates: { canonical: "https://thebrief.info/politics/cabinet/policy" },
  openGraph: {
    title: "施政方針・政策進捗 — Policy Platform & Progress",
    description: "第2次高市内閣の施政方針3本柱と政策進捗トラッカー。「日本列島を、強く豊かに。」の実現度を可視化。",
    url: "https://thebrief.info/politics/cabinet/policy",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "施政方針・政策進捗 — Policy Platform & Progress",
    description: "第2次高市内閣の施政方針3本柱と政策進捗トラッカー。「日本列島を、強く豊かに。」の実現度を可視化。",
  },
};

function StatusBadge({ status, label, labelEn }: { status: string; label: string; labelEn?: string }) {
  const colors: Record<string, string> = {
    "on-track": "bg-green-500/10 text-green-400 border-green-500/20",
    "delayed": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "at-risk": "bg-red-500/10 text-red-400 border-red-500/20",
    "achieved": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colors[status] || ""}`}>
      <T ja={label} en={labelEn ?? label} />
    </span>
  );
}

function ProgressBar({ value, status }: { value: number; status: string }) {
  const barColors: Record<string, string> = {
    "on-track": "bg-green-500",
    "delayed": "bg-amber-500",
    "at-risk": "bg-red-500",
    "achieved": "bg-blue-500",
  };
  return (
    <div className="h-2 rounded-full overflow-hidden bg-foreground/5 w-full">
      <div
        className={`h-full rounded-full transition-all duration-500 ${barColors[status] || "bg-foreground/30"}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function PillarIcon({ type }: { type: string }) {
  if (type === "fiscal") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }
  if (type === "defense") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export default function CabinetPolicyPage() {
  const categories = [...new Set(policyIndicators.map((p) => p.category))];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <Link href="/politics/cabinet" className="hover:text-foreground transition-colors"><T ja="内閣" en="Cabinet" /></Link>
        <span>/</span>
        <span><T ja="施政方針" en="Policy" /></span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold"><T ja="施政方針・政策進捗" en="Policy Platform & Progress" /></h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T ja="第2次高市内閣の施政方針3本柱と政策進捗トラッカー。" en="The three policy pillars and progress tracker of the 2nd Takaichi Cabinet." />
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        <T ja="政策進捗は2026年4月時点" en="Policy progress as of April 2026" />
      </p>

      {/* Back to cabinet link */}
      <div className="mt-4">
        <Link href="/politics/cabinet" className="text-xs text-brief-red hover:underline">
          <T ja="← 閣僚一覧に戻る" en="← Back to Cabinet Members" />
        </Link>
      </div>

      {/* ═══════ 施政方針セクション ═══════ */}
      <div className="mt-10">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold"><T ja="施政方針" en="Policy Platform" /></h2>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Policy Platform — 2026.2.20 Speech
            </span>
          </div>
          <div className="flex-1 h-px bg-foreground/5" />
        </div>

        {/* Mission statement */}
        <div className="p-5 rounded-xl bg-brief-card border border-brief-border mb-6">
          <blockquote className="font-serif text-lg font-bold leading-relaxed">
            <T ja="&ldquo;日本列島を、強く豊かに。&rdquo;" en="&ldquo;Make the Japanese archipelago strong and prosperous.&rdquo;" />
          </blockquote>
          <p className="mt-2 text-sm text-foreground/55">
            <T ja="成長のスイッチを押して、押して、押して、押して、押しまくる。" en="Press the growth switch — again, and again, and again, and again." />
            &mdash; <T ja="高市早苗 施政方針演説（2026年2月20日）" en="Sanae Takaichi, Policy Speech (February 20, 2026)" />
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {policyPillars.map((pillar) => {
            const en = pillarEn[pillar.titleEn];
            return (
            <div
              key={pillar.titleEn}
              className="p-5 rounded-xl border border-brief-border"
            >
              <div className="text-foreground/45 mb-3">
                <PillarIcon type={pillar.icon} />
              </div>
              <h3 className="font-serif text-lg font-bold">
                <T ja={pillar.title} en={pillar.titleEn} />
              </h3>
              <span className="text-[10px] tracking-[1px] uppercase text-foreground/45">
                {pillar.titleEn}
              </span>
              <p className="mt-2 text-xs text-foreground/55 leading-relaxed">
                <T ja={pillar.description} en={en?.description ?? pillar.description} />
              </p>
              <ul className="mt-3 space-y-1.5">
                {pillar.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/60">
                    <span className="text-brief-red mt-0.5 flex-shrink-0">-</span>
                    <span>
                      <T ja={point} en={en?.keyPoints[i] ?? point} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
      </div>

      {/* ═══════ 政策進捗セクション ═══════ */}
      <div className="mt-14">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold"><T ja="政策進捗" en="Policy Progress" /></h2>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Policy Tracker
            </span>
          </div>
          <div className="flex-1 h-px bg-foreground/5" />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-6">
          <StatusBadge status="achieved" label="達成" labelEn="Achieved" />
          <StatusBadge status="on-track" label="順調" labelEn="On Track" />
          <StatusBadge status="delayed" label="遅延" labelEn="Delayed" />
          <StatusBadge status="at-risk" label="懸念" labelEn="At Risk" />
        </div>

        {/* Grouped by category */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const items = policyIndicators.filter((p) => p.category === cat);
            const catEn = items[0]?.categoryEn || "";
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-serif text-base font-bold">
                    <T ja={cat} en={catEn} />
                  </h3>
                  <span className="text-[10px] tracking-[1px] uppercase text-foreground/45">{catEn}</span>
                  <div className="flex-1 h-px bg-foreground/5" />
                </div>

                <div className="space-y-3">
                  {items.map((indicator) => {
                    const ien = indicatorEn[indicator.id];
                    return (
                    <div
                      key={indicator.id}
                      className="p-4 rounded-xl border border-brief-border"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-sm">
                              <T ja={indicator.title} en={ien?.title ?? indicator.title} />
                            </h4>
                            <StatusBadge status={indicator.status} label={indicator.statusLabel} labelEn={ien?.statusLabel} />
                          </div>
                          <p className="text-xs text-foreground/50 mt-0.5">
                            <T ja={indicator.description} en={ien?.description ?? indicator.description} />
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-lg font-bold tabular-nums">{indicator.progress}%</div>
                        </div>
                      </div>

                      <ProgressBar value={indicator.progress} status={indicator.status} />

                      <div className="flex items-start justify-between gap-4 mt-3">
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] text-foreground/50 uppercase tracking-wider mb-0.5">Target</div>
                          <p className="text-xs text-foreground/60">
                            <T ja={indicator.target} en={ien?.target ?? indicator.target} />
                          </p>
                        </div>
                        <div className="flex-1 min-w-0 text-right">
                          <div className="text-[10px] text-foreground/50 uppercase tracking-wider mb-0.5">Current</div>
                          <p className="text-xs text-foreground/60">
                            <T ja={indicator.current} en={ien?.current ?? indicator.current} />
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 text-right">
                        <span className="text-[9px] text-foreground/45 tabular-nums">
                          {indicator.lastUpdated} <T ja="更新" en="updated" />
                        </span>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
