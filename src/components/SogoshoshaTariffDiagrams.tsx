"use client";
import React from "react";

function DiagramCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div role="img" aria-label={title} className="my-8 rounded-2xl border border-brief-border bg-brief-card p-6">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[2px] text-foreground/40">{title}</p>
      {children}
    </div>
  );
}

export function SogoshoshaTariffOverviewDiagram() {
  return (
    <DiagramCard title="関税が貿易の地図を書き換える — 商社への両面影響">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[#ef4444]/15 p-4">
          <p className="text-[12px] font-bold text-[#ef4444]">マイナス面</p>
          <p className="mt-2 text-[12px] text-foreground/60">従来の米中間貿易仲介が縮小。取り扱い量×マージンが減少</p>
        </div>
        <div className="rounded-xl border border-[#22c55e]/15 p-4">
          <p className="text-[12px] font-bold text-[#22c55e]">プラス面</p>
          <p className="mt-2 text-[12px] text-foreground/60">新貿易ルートの「設計者・実装者」として現地ネットワークの価値が上昇</p>
        </div>
      </div>
    </DiagramCard>
  );
}

export function SogoshoashaEnergyValueDiagram() {
  return (
    <DiagramCard title="5大商社のエネルギー権益 — 地政学的価値の再評価">
      <div className="space-y-2">
        {[
          { company: "三菱商事", asset: "カナダLNG（LNG Canada）", note: "欧州のロシア依存脱却需要で価値上昇" },
          { company: "三井物産", asset: "モザンビーク・ブラジルLNG", note: "アジアのエネルギー安全保障強化で堅調" },
          { company: "伊藤忠・丸紅", asset: "米国シェールオイル・ガス", note: "米国産エネルギー輸出拡大政策と一致" },
        ].map((item) => (
          <div key={item.company} className="flex items-start gap-3 rounded-lg border border-foreground/[0.05] p-3">
            <span className="flex-shrink-0 text-[11px] font-bold bg-[#0d9488]/10 text-[#0d9488] rounded px-2 py-0.5">{item.company}</span>
            <div>
              <p className="text-[12px] font-semibold text-foreground">{item.asset}</p>
              <p className="text-[11px] text-foreground/50">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function SogoshoashaAseanStrategyDiagram() {
  return (
    <DiagramCard title="ASEAN拠点の戦略価値 — 「迂回ルート」の構築">
      <div className="space-y-2">
        {[
          { location: "ベトナム・タイ", action: "繊維・アパレル・電子部品の製造拠点拡充支援（伊藤忠・三菱）" },
          { location: "インド", action: "EV充電インフラ（三井）・FamilyMart展開（伊藤忠）。「米中対立の漁夫の利」狙い" },
          { location: "コンプライアンス注意", action: "「実質的付加価値が発生しているか」の確認が必須。貿易詐称リスクを排除すること" },
        ].map((item) => (
          <div key={item.location} className="rounded-xl border border-foreground/[0.06] p-3">
            <p className="text-[12px] font-bold text-[#0d9488]">{item.location}</p>
            <p className="mt-0.5 text-[12px] text-foreground/60">{item.action}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function SogoshoashaStrategicViewDiagram() {
  return (
    <DiagramCard title="商社の強みと懸念点（2026年視点）">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-[11px] font-semibold text-[#22c55e] mb-2">強み</p>
          <div className="space-y-1">
            {[
              "複雑な関税環境ほど現地情報の価値が上がる",
              "分散した権益ポートフォリオは関税ショック耐性が高い",
              "エネルギー・食料権益がインフレヘッジとして機能",
            ].map((s, i) => (
              <p key={i} className="text-[11px] text-foreground/60 flex gap-1.5"><span className="text-[#22c55e]">✓</span>{s}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-[#ef4444] mb-2">懸念点</p>
          <div className="space-y-1">
            {[
              "デジタルプラットフォームによる情報仲介機能の代替",
              "中国事業の多額投資→デカップリング深化で減損リスク",
            ].map((s, i) => (
              <p key={i} className="text-[11px] text-foreground/60 flex gap-1.5"><span className="text-[#ef4444]">△</span>{s}</p>
            ))}
          </div>
        </div>
      </div>
    </DiagramCard>
  );
}
