import type { Metadata } from "next";
import Link from "next/link";
import { cabinet } from "@/lib/politics";
import { policyPillars, policyIndicators } from "@/lib/cabinetPolicy";

export const metadata: Metadata = {
  title: "内閣 — 第2次高市内閣",
  description:
    "第2次高市内閣の施政方針・政策進捗と全閣僚一覧。「責任ある積極財政」の実現度を可視化。",
  alternates: { canonical: "https://thebrief.info/politics/cabinet" },
};

function StatusBadge({ status, label }: { status: string; label: string }) {
  const colors: Record<string, string> = {
    "on-track": "bg-green-500/10 text-green-400 border-green-500/20",
    "delayed": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "at-risk": "bg-red-500/10 text-red-400 border-red-500/20",
    "achieved": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colors[status] || ""}`}>
      {label}
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
    <div className="h-2 rounded-full overflow-hidden bg-white/5 w-full">
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

export default function CabinetPage() {
  // Group indicators by category
  const categories = [...new Set(policyIndicators.map((p) => p.category))];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span>内閣</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">内閣</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        第2次高市内閣（2026年2月18日発足）の施政方針・政策進捗と閣僚一覧です。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        第2次高市内閣（2026年2月18日発足）｜ 政策進捗は2026年4月時点
      </p>

      {/* ═══════ 施政方針セクション ═══════ */}
      <div className="mt-10">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold">施政方針</h2>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/25">
              Policy Platform — 2026.2.20 Speech
            </span>
          </div>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Mission statement */}
        <div className="p-5 rounded-xl bg-foreground/[0.03] border border-brief-border dark:border-white/5 mb-6">
          <blockquote className="font-serif text-lg font-bold leading-relaxed">
            &ldquo;日本列島を、強く豊かに。&rdquo;
          </blockquote>
          <p className="mt-2 text-sm text-foreground/40">
            成長のスイッチを押して、押して、押して、押して、押しまくる。
            &mdash; 高市早苗 施政方針演説（2026年2月20日）
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {policyPillars.map((pillar) => (
            <div
              key={pillar.titleEn}
              className="p-5 rounded-xl border border-brief-border dark:border-white/5"
            >
              <div className="text-foreground/20 mb-3">
                <PillarIcon type={pillar.icon} />
              </div>
              <h3 className="font-serif text-lg font-bold">{pillar.title}</h3>
              <span className="text-[9px] tracking-[1px] uppercase text-foreground/20">
                {pillar.titleEn}
              </span>
              <p className="mt-2 text-xs text-foreground/40 leading-relaxed">
                {pillar.description}
              </p>
              <ul className="mt-3 space-y-1.5">
                {pillar.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/50">
                    <span className="text-brief-red mt-0.5 flex-shrink-0">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ 政策進捗セクション ═══════ */}
      <div className="mt-14">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold">政策進捗</h2>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/25">
              Policy Tracker
            </span>
          </div>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-6">
          <StatusBadge status="achieved" label="達成" />
          <StatusBadge status="on-track" label="順調" />
          <StatusBadge status="delayed" label="遅延" />
          <StatusBadge status="at-risk" label="懸念" />
        </div>

        {/* Grouped by category */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const items = policyIndicators.filter((p) => p.category === cat);
            const catEn = items[0]?.categoryEn || "";
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-serif text-base font-bold">{cat}</h3>
                  <span className="text-[9px] tracking-[1px] uppercase text-foreground/20">{catEn}</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                <div className="space-y-3">
                  {items.map((indicator) => (
                    <div
                      key={indicator.id}
                      className="p-4 rounded-xl border border-brief-border dark:border-white/5"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-sm">{indicator.title}</h4>
                            <StatusBadge status={indicator.status} label={indicator.statusLabel} />
                          </div>
                          <p className="text-xs text-foreground/35 mt-0.5">{indicator.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-lg font-bold tabular-nums">{indicator.progress}%</div>
                        </div>
                      </div>

                      <ProgressBar value={indicator.progress} status={indicator.status} />

                      <div className="flex items-start justify-between gap-4 mt-3">
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] text-foreground/25 uppercase tracking-wider mb-0.5">Target</div>
                          <p className="text-xs text-foreground/50">{indicator.target}</p>
                        </div>
                        <div className="flex-1 min-w-0 text-right">
                          <div className="text-[10px] text-foreground/25 uppercase tracking-wider mb-0.5">Current</div>
                          <p className="text-xs text-foreground/50">{indicator.current}</p>
                        </div>
                      </div>

                      <div className="mt-2 text-right">
                        <span className="text-[9px] text-foreground/20 tabular-nums">
                          {indicator.lastUpdated} 更新
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══════ 閣僚一覧セクション ═══════ */}
      <div className="mt-14">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold">閣僚一覧</h2>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/25">
              Cabinet Members
            </span>
          </div>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="border border-brief-border dark:border-white/5 rounded-xl overflow-hidden">
          {/* PM highlight */}
          <div className="p-6 bg-foreground/[0.03]">
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/35">
              {cabinet[0].positionEn}
            </span>
            <div className="mt-1 flex items-baseline gap-3">
              <h3 className="font-serif text-2xl font-bold">{cabinet[0].name}</h3>
              <span className="text-sm text-foreground/40">{cabinet[0].nameEn}</span>
            </div>
            <span className="text-xs text-foreground/35">{cabinet[0].party}</span>
            {cabinet[0].note && (
              <span className="ml-2 text-xs text-brief-red">{cabinet[0].note}</span>
            )}
          </div>

          {/* Other ministers */}
          <div className="divide-y divide-brief-border dark:divide-white/5">
            {cabinet.slice(1).map((member) => (
              <div key={member.positionEn} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-foreground/35 mb-0.5">{member.position}</div>
                  <div className="font-medium">{member.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-foreground/30">{member.nameEn}</div>
                  <div className="text-xs text-foreground/25">{member.party}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
