import type { Metadata } from "next";
import Link from "next/link";
import {
  houseOfRepresentatives,
  houseOfCouncillors,
  HOUSE_TOTAL,
  COUNCIL_TOTAL,
} from "@/lib/politics";
import { SeatChart, CoalitionIndicator } from "@/components/SeatChart";

export const metadata: Metadata = {
  title: "国会 — 衆議院・参議院の構成",
  description:
    "日本の国会を構成する衆議院と参議院の役割、政党別議席数をわかりやすく解説します。",
  alternates: { canonical: "https://thebrief.info/politics/diet" },
};

function ChamberExplainer({
  title,
  titleEn,
  points,
}: {
  title: string;
  titleEn: string;
  points: { label: string; value: string }[];
}) {
  return (
    <div className="p-5 bg-foreground/[0.03] rounded-xl">
      <h4 className="font-serif font-bold text-lg">{title}</h4>
      <span className="text-[9px] tracking-[2px] uppercase text-foreground/25">{titleEn}</span>
      <dl className="mt-4 space-y-2">
        {points.map((p) => (
          <div key={p.label} className="flex gap-3">
            <dt className="text-xs text-foreground/40 w-24 flex-shrink-0 pt-0.5">{p.label}</dt>
            <dd className="text-sm text-foreground/70 leading-relaxed">{p.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function DietPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span>国会</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">国会</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        日本の国会は、衆議院（下院）と参議院（上院）の二院制で構成されています。
        両院はそれぞれ異なる役割と権限を持ち、法律の制定・予算の議決・条約の承認などを行います。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        Last updated: 2026-04-05
      </p>

      {/* 二院制の解説 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <ChamberExplainer
          title="衆議院"
          titleEn="House of Representatives"
          points={[
            { label: "定数", value: "465議席（小選挙区289・比例代表176）" },
            { label: "任期", value: "4年（解散あり）" },
            { label: "被選挙権", value: "25歳以上" },
            { label: "優越権", value: "予算の先議権、予算・条約の承認、内閣総理大臣の指名で参議院に優越" },
            { label: "特徴", value: "解散があるため国民の最新の民意を反映しやすく、より強い権限を持つ。内閣不信任決議は衆議院のみが提出可能。" },
          ]}
        />
        <ChamberExplainer
          title="参議院"
          titleEn="House of Councillors"
          points={[
            { label: "定数", value: "248議席（選挙区148・比例代表100）" },
            { label: "任期", value: "6年（3年ごとに半数改選・解散なし）" },
            { label: "被選挙権", value: "30歳以上" },
            { label: "独自権限", value: "衆議院の解散中に緊急集会を開催可能" },
            { label: "特徴", value: "解散がなく長期的な視点で審議を行う「良識の府」。衆議院の行き過ぎを抑制するチェック機能を担う。" },
          ]}
        />
      </div>

      {/* 衆議院 議席 */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            衆議院の議席構成
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/30 ml-3.5">
            House of Representatives — Seats
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border dark:bg-white/10" />
      </div>
      <div className="p-6 border border-brief-border dark:border-white/5 rounded-xl">
        <SeatChart
          parties={houseOfRepresentatives}
          total={HOUSE_TOTAL}
          title={`衆議院 (${HOUSE_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfRepresentatives} total={HOUSE_TOTAL} />
      </div>

      {/* 参議院 議席 */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            参議院の議席構成
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/30 ml-3.5">
            House of Councillors — Seats
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border dark:bg-white/10" />
      </div>
      <div className="p-6 border border-brief-border dark:border-white/5 rounded-xl">
        <SeatChart
          parties={houseOfCouncillors}
          total={COUNCIL_TOTAL}
          title={`参議院 (${COUNCIL_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfCouncillors} total={COUNCIL_TOTAL} />
      </div>

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-foreground/[0.03] rounded-lg text-xs text-foreground/35 leading-relaxed">
        ※ 議席数は補欠選挙・離党等により変動する場合があります。最新の情報は各政党・国会の公式サイトをご確認ください。
      </div>
    </div>
  );
}
