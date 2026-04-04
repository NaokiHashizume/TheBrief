import type { Metadata } from "next";
import Link from "next/link";
import {
  houseOfRepresentatives,
  houseOfCouncillors,
  cabinet,
  legislators,
  HOUSE_TOTAL,
  COUNCIL_TOTAL,
} from "@/lib/politics";
import { SeatChart, CoalitionIndicator } from "@/components/SeatChart";
import { LegislatorsByParty } from "@/components/LegislatorsByParty";

export const metadata: Metadata = {
  title: "Politics — 国会・内閣・議員",
  description:
    "衆議院・参議院の政党別議席数、内閣の顔ぶれ、主要議員の一覧。日本の政治の全体像をわかりやすくまとめます。",
  alternates: { canonical: "https://thebrief.info/politics" },
};

function SectionHeader({ title, titleEn }: { title: string; titleEn: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 mt-14">
      <div>
        <h2 className="font-serif text-2xl font-bold">{title}</h2>
        <span className="text-[10px] tracking-[2px] uppercase text-foreground/30">{titleEn}</span>
      </div>
      <div className="flex-1 h-px bg-brief-border dark:bg-white/10" />
    </div>
  );
}

export default function PoliticsPage() {
  // Get unique party names from legislators in display order
  const partyOrder = [
    "自由民主党",
    "中道改革連合",
    "日本維新の会",
    "国民民主党",
    "参政党",
    "チームみらい",
    "日本共産党",
    "れいわ新選組",
  ];

  // Color map from house data
  const partyColors: Record<string, string> = {};
  for (const p of [...houseOfRepresentatives, ...houseOfCouncillors]) {
    partyColors[p.name] = p.color;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span>Politics</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">国会・内閣・議員</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        日本の国会（衆議院・参議院）の政党別議席数、内閣の顔ぶれ、主要議員をわかりやすくまとめています。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        Last updated: 2026-04-05 ※最新の情報に基づき随時更新
      </p>

      {/* ━━━━━━━━━━ Section 1: 国会 ━━━━━━━━━━ */}
      <SectionHeader title="国会" titleEn="National Diet" />

      {/* 衆議院 */}
      <h3 className="font-serif text-lg font-bold mb-3 flex items-center gap-2">
        <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
        衆議院
        <span className="text-xs font-normal text-foreground/30">House of Representatives</span>
      </h3>
      <div className="p-6 border border-brief-border dark:border-white/5 rounded-xl">
        <SeatChart
          parties={houseOfRepresentatives}
          total={HOUSE_TOTAL}
          title={`衆議院 (${HOUSE_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfRepresentatives} total={HOUSE_TOTAL} />
      </div>

      {/* 参議院 */}
      <h3 className="font-serif text-lg font-bold mb-3 mt-10 flex items-center gap-2">
        <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
        参議院
        <span className="text-xs font-normal text-foreground/30">House of Councillors</span>
      </h3>
      <div className="p-6 border border-brief-border dark:border-white/5 rounded-xl">
        <SeatChart
          parties={houseOfCouncillors}
          total={COUNCIL_TOTAL}
          title={`参議院 (${COUNCIL_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfCouncillors} total={COUNCIL_TOTAL} />
      </div>

      {/* ━━━━━━━━━━ Section 2: 内閣 ━━━━━━━━━━ */}
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

      {/* ━━━━━━━━━━ Section 3: 議員 ━━━━━━━━━━ */}
      <SectionHeader title="議員" titleEn="Legislators" />
      <p className="text-sm text-foreground/40 mb-6">
        各政党の主要議員一覧。ウェブサイト・SNSへのリンク付き。
      </p>

      <LegislatorsByParty
        legislators={legislators}
        partyOrder={partyOrder}
        partyColors={partyColors}
      />

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-foreground/[0.03] rounded-lg text-xs text-foreground/35 leading-relaxed">
        ※ 議席数は補欠選挙・離党等により変動する場合があります。最新の情報は各政党・国会の公式サイトをご確認ください。
      </div>
    </div>
  );
}
