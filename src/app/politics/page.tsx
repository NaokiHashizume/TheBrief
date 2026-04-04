import type { Metadata } from "next";
import Link from "next/link";
import {
  houseOfRepresentatives,
  houseOfCouncillors,
  cabinet,
  keyLegislators,
  HOUSE_TOTAL,
  COUNCIL_TOTAL,
} from "@/lib/politics";
import { SeatChart, CoalitionIndicator } from "@/components/SeatChart";

export const metadata: Metadata = {
  title: "Politics — 国会・内閣の構成",
  description:
    "衆議院・参議院の政党別議席数、内閣の顔ぶれ、主要議員の一覧。日本の政治の全体像をわかりやすくまとめます。",
  alternates: { canonical: "https://thebrief.info/politics" },
};

function SectionHeader({ title, titleEn }: { title: string; titleEn: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 mt-12">
      <div>
        <h2 className="font-serif text-2xl font-bold">{title}</h2>
        <span className="text-[10px] tracking-[2px] uppercase text-foreground/30">{titleEn}</span>
      </div>
      <div className="flex-1 h-px bg-brief-border dark:bg-white/10" />
    </div>
  );
}

export default function PoliticsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span>Politics</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">国会・内閣の構成</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        日本の国会（衆議院・参議院）の政党別議席数、内閣の顔ぶれ、主要議員をわかりやすくまとめています。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        Last updated: 2026-04-05 ※最新の情報に基づき随時更新
      </p>

      {/* 衆議院 */}
      <SectionHeader title="衆議院" titleEn="House of Representatives" />
      <div className="p-6 border border-brief-border dark:border-white/5 rounded-xl">
        <SeatChart
          parties={houseOfRepresentatives}
          total={HOUSE_TOTAL}
          title={`衆議院 (${HOUSE_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfRepresentatives} total={HOUSE_TOTAL} />
      </div>

      {/* 参議院 */}
      <SectionHeader title="参議院" titleEn="House of Councillors" />
      <div className="p-6 border border-brief-border dark:border-white/5 rounded-xl">
        <SeatChart
          parties={houseOfCouncillors}
          total={COUNCIL_TOTAL}
          title={`参議院 (${COUNCIL_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfCouncillors} total={COUNCIL_TOTAL} />
      </div>

      {/* 内閣 */}
      <SectionHeader title="内閣" titleEn="Cabinet" />
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

      {/* 主要議員 */}
      <SectionHeader title="主要議員" titleEn="Key Legislators" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {keyLegislators.map((leg) => (
          <div
            key={leg.nameEn}
            className="p-5 border border-brief-border dark:border-white/5 rounded-xl flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-serif font-bold text-foreground/30">
                {leg.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <div className="font-medium">{leg.name}</div>
              <div className="text-xs text-foreground/30">{leg.nameEn}</div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-brief-red">{leg.party}</span>
                <span className="text-xs text-foreground/30">· {leg.role}</span>
              </div>
            </div>
            <span className="text-[9px] tracking-wider uppercase px-2 py-1 bg-foreground/5 rounded-full text-foreground/35">
              {leg.chamber === "house" ? "衆" : "参"}
            </span>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-foreground/[0.03] rounded-lg text-xs text-foreground/35 leading-relaxed">
        ※ 議席数は補欠選挙・離党等により変動する場合があります。最新の情報は各政党・国会の公式サイトをご確認ください。
      </div>
    </div>
  );
}
