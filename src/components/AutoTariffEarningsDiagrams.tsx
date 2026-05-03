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

export function AutoTariffEarningsNumbersDiagram() {
  return (
    <DiagramCard title="2026年度 主要日系自動車メーカー関税損失">
      <div className="space-y-3">
        {[
          { company: "ホンダ", tariff: "¥4,500億", opProfit: "¥5,000億", change: "▲7,134億（前年比）" },
          { company: "日産自動車", tariff: "最大¥4,500億", opProfit: "業績回復の踊り場", change: "構造改革加速中" },
          { company: "トヨタ", tariff: "約¥180億/月", opProfit: "北米生産比率高く相対影響小", change: "影響は限定的" },
        ].map((item) => (
          <div key={item.company} className="rounded-xl border border-foreground/[0.07] p-4">
            <div className="flex items-start justify-between">
              <p className="text-[15px] font-bold text-foreground">{item.company}</p>
              <span className="text-[12px] font-bold text-[#ef4444]">関税コスト {item.tariff}</span>
            </div>
            <p className="mt-1 text-[12px] text-foreground/60">営業利益見込み：{item.opProfit}</p>
            <p className="mt-0.5 text-[11px] text-foreground/40">{item.change}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function AutoTariffEuImpactDiagram() {
  return (
    <DiagramCard title="EU向け関税25%引き上げ（2026年5月トランプ表明）">
      <div className="space-y-2">
        <div className="rounded-xl bg-[#ef4444]/5 border border-[#ef4444]/15 p-4">
          <p className="text-[13px] font-bold text-[#ef4444]">直接対象：EU系ブランド（BMW・メルセデス・ボルボ等）</p>
          <p className="mt-1 text-[12px] text-foreground/60">欧州工場から米国輸出する全車両が対象</p>
        </div>
        <div className="space-y-2">
          {[
            { item: "マツダのフィンランド工場産", detail: "CX-60の米国輸出分がEU関税対象になりうる" },
            { item: "競合比較の変化", detail: "欧州ブランドの価格上昇で日本ブランドの相対競争力が一時的に改善する可能性" },
            { item: "EUの対米報復", detail: "欧州委員会が工業用品への報復関税を検討中→日系部品メーカーへの波及リスク" },
          ].map((i) => (
            <div key={i.item} className="flex gap-2 rounded-lg border border-foreground/[0.05] p-3">
              <div className="h-1.5 w-1.5 rounded-full bg-[#ef4444]/60 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-[12px] font-semibold text-foreground">{i.item}</p>
                <p className="text-[11px] text-foreground/50">{i.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DiagramCard>
  );
}

export function AutoTariffProductionShiftDiagram() {
  return (
    <DiagramCard title="北米生産シフトの現状と限界">
      <div className="grid grid-cols-3 gap-3">
        {[
          { company: "トヨタ", ratio: "約70%", status: "北米販売の北米生産比率", note: "追加投資最小限で対応可" },
          { company: "ホンダ", ratio: "拡大中", status: "オハイオ・アラバマ工場増強", note: "2〜3年の投資期間が必要" },
          { company: "日産", ratio: "増強検討", status: "スマーナ・メキシコ拡充", note: "USMCA適合なら関税免除" },
        ].map((item) => (
          <div key={item.company} className="rounded-xl border border-foreground/[0.07] p-3 text-center">
            <p className="text-[13px] font-bold text-foreground">{item.company}</p>
            <p className="text-[16px] font-black text-[#ef4444] mt-1">{item.ratio}</p>
            <p className="text-[11px] text-foreground/50 mt-1">{item.status}</p>
            <p className="text-[10px] text-foreground/35 mt-0.5 italic">{item.note}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function AutoTariffTradeTalksDiagram() {
  return (
    <DiagramCard title="日米通商協議の現状（2026年5月）">
      <div className="space-y-2">
        {[
          { party: "日本側の提案", content: "自動車・農業の同時交渉パッケージ" },
          { party: "米国側の立場", content: "「農業の市場開放なしに自動車関税引き下げはない」を維持" },
          { party: "業界の期待値", content: "「2026年度内に合意が成立する確率は低い」が業界コンセンサス" },
        ].map((item) => (
          <div key={item.party} className="flex items-start gap-3 rounded-lg border border-foreground/[0.05] p-3">
            <span className="flex-shrink-0 text-[11px] font-bold bg-foreground/[0.06] text-foreground/50 rounded px-2 py-0.5">{item.party}</span>
            <p className="text-[12px] text-foreground/65">{item.content}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function AutoTariffStrategicViewDiagram() {
  return (
    <DiagramCard title="「関税新常態」前提での3つの戦略">
      <div className="space-y-2">
        {[
          { num: "①", title: "製品価格引き上げ（価格決定力の強化）", detail: "関税コストを転嫁できるブランド力を持つ上位グレードに注力" },
          { num: "②", title: "EV・HEV化による税制優遇活用", detail: "IRAクリーンビークル税額控除（最大$7,500）でUSMCA要件満たせば関税コストを相殺" },
          { num: "③", title: "部品の北米調達比率向上", detail: "中長期投資としてサプライチェーンの北米シフトを進める" },
        ].map((item) => (
          <div key={item.num} className="flex gap-3 rounded-xl border border-foreground/[0.06] p-4">
            <span className="text-[18px] font-black text-foreground/15">{item.num}</span>
            <div>
              <p className="text-[13px] font-semibold text-foreground">{item.title}</p>
              <p className="mt-0.5 text-[12px] text-foreground/55">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}
