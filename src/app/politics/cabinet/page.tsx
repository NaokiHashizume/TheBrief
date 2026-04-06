import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import { cabinet } from "@/lib/politics";

export const metadata: Metadata = {
  title: "内閣 — 第2次高市内閣",
  description:
    "第2次高市内閣の施政方針・政策進捗と全閣僚一覧。「責任ある積極財政」の実現度を可視化。",
  alternates: { canonical: "https://thebrief.info/politics/cabinet" },
};

export default function CabinetPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span><T ja="内閣" en="Cabinet" /></span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold"><T ja="内閣" en="Cabinet" /></h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T ja="第2次高市内閣（2026年2月18日発足）の施政方針・政策進捗と閣僚一覧です。" en="Policy platform, progress tracker, and cabinet members of the 2nd Takaichi Cabinet (inaugurated February 18, 2026)." />
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        <T ja="第2次高市内閣（2026年2月18日発足）｜ 政策進捗は2026年4月時点" en="2nd Takaichi Cabinet (inaugurated Feb 18, 2026) | Policy progress as of April 2026" />
      </p>

      {/* 施政方針・政策進捗 リンク */}
      <Link
        href="/politics/cabinet/policy"
        className="mt-8 flex items-center gap-3 p-4 rounded-xl border border-brief-border hover:border-brief-red/30 hover:bg-foreground/[0.02] transition-all"
      >
        <div className="w-10 h-10 rounded-lg bg-brief-red/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brief-red">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </div>
        <div>
          <h2 className="font-serif text-base font-bold"><T ja="施政方針・政策進捗" en="Policy Platform & Progress" /></h2>
          <p className="text-xs text-foreground/55"><T ja="3本柱の施政方針と政策進捗トラッカー" en="Three-pillar policy platform and progress tracker" /></p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-foreground/30 flex-shrink-0">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </Link>

      {/* ═══════ 閣僚一覧セクション ═══════ */}
      <div className="mt-14">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold"><T ja="閣僚一覧" en="Cabinet Members" /></h2>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              <T ja="Cabinet Members" en="Cabinet Members" />
            </span>
          </div>
          <div className="flex-1 h-px bg-foreground/5" />
        </div>

        <div className="border border-brief-border rounded-xl overflow-hidden">
          {/* PM highlight */}
          <div className="p-6 bg-brief-card">
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              {cabinet[0].positionEn}
            </span>
            <div className="mt-1 flex items-baseline gap-3">
              <h3 className="font-serif text-2xl font-bold">{cabinet[0].name}</h3>
              <span className="text-sm text-foreground/55">{cabinet[0].nameEn}</span>
            </div>
            <span className="text-xs text-foreground/50">{cabinet[0].party}</span>
            {cabinet[0].note && (
              <span className="ml-2 text-xs text-brief-red">{cabinet[0].note}</span>
            )}
          </div>

          {/* Other ministers */}
          <div className="divide-y divide-brief-border">
            {cabinet.slice(1).map((member) => (
              <div key={member.positionEn} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-foreground/50 mb-0.5">{member.position}</div>
                  <div className="font-medium">{member.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-foreground/45">{member.nameEn}</div>
                  <div className="text-xs text-foreground/50">{member.party}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
