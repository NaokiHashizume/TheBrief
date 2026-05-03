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

export function BojAprilDecisionDiagram() {
  return (
    <DiagramCard title="日銀4月28日決定会合 — 概要">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "決定", value: "据え置き", sub: "政策金利 0.75%", color: "#b9770e" },
          { label: "賛否", value: "6対3", sub: "反対3名は即時0.25%利上げ支持", color: "#ef4444" },
          { label: "CPI見通し", value: "+2.8%", sub: "2026年度（前月比+0.3pt上方修正）", color: "#22c55e" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-foreground/[0.06] p-4 text-center">
            <p className="text-[11px] text-foreground/40 uppercase tracking-wider">{item.label}</p>
            <p className="mt-1 text-[22px] font-black tabular-nums" style={{ color: item.color }}>{item.value}</p>
            <p className="mt-1 text-[11px] text-foreground/50">{item.sub}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function BojJuneProbabilityDiagram() {
  return (
    <DiagramCard title="6月会合 利上げ確率と条件">
      <div className="mb-4 flex items-center justify-between rounded-xl bg-foreground/[0.03] p-4">
        <p className="text-[13px] font-semibold text-foreground">市場織り込み利上げ確率（OIS）</p>
        <p className="text-[28px] font-black text-[#b9770e]">約65%</p>
      </div>
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/40">利上げの主トリガー条件</p>
        {[
          "5月CPI（6/20公表）が前年比+2%以上を継続",
          "春闘最終集計（5月中旬）で実質賃金プラス確認",
          "為替が150円/ドル以内で安定推移",
        ].map((cond, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg border border-foreground/[0.05] p-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#b9770e]" />
            <p className="text-[12px] text-foreground/65">{cond}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function BojYenImpactDiagram() {
  return (
    <DiagramCard title="利上げ期待でも円安が続く3つの構造要因">
      <div className="space-y-3">
        {[
          { num: "①", title: "日米金利差の圧縮が遅い", detail: "日銀1.0%でもFRB 5%超→日米差4%超が継続、キャリートレードを後押し" },
          { num: "②", title: "デジタル赤字が拡大", detail: "Google・Apple等への支払いが年8兆円超→経常収支の円買い圧力を侵食" },
          { num: "③", title: "「安全資産＝円」の法則が弱体化", detail: "地政学リスク上昇時でも円高が起きにくくなった" },
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

export function BojMortgageImpactDiagram() {
  const impacts = [
    { name: "残高2,000万円・残25年", change: "+約2,400円/月", annual: "+2.9万円/年" },
    { name: "残高3,000万円・残25年", change: "+約3,600円/月", annual: "+4.3万円/年" },
    { name: "残高4,000万円・残20年", change: "+約4,500円/月", annual: "+5.4万円/年" },
  ];
  return (
    <DiagramCard title="6月+0.25%利上げ時の変動ローン返済額増加試算">
      <div className="space-y-2">
        {impacts.map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-lg border border-foreground/[0.05] p-3">
            <p className="text-[12px] text-foreground/70">{item.name}</p>
            <div className="text-right">
              <p className="text-[14px] font-bold text-[#ef4444]">{item.change}</p>
              <p className="text-[11px] text-foreground/40">{item.annual}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-foreground/40">※ 2026年末1.0%到達シナリオでは総支払額が200〜350万円増も</p>
    </DiagramCard>
  );
}

export function BojStrategicViewDiagram() {
  return (
    <DiagramCard title="The Brief視点 — 利上げ局面の3つの示唆">
      <div className="space-y-2">
        {[
          { label: "①変動金利ローン", action: "固定金利との差が縮まったタイミングでの借り換え検討が合理的" },
          { label: "②現金過多の企業", action: "定期預金・MMFで金利収入を得る運用見直しが必要" },
          { label: "③海外投資家", action: "日米金利差縮小でヘッジなし外貨建て資産のリターンが低下に注意" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-foreground/[0.06] p-4">
            <p className="text-[13px] font-bold text-[#b9770e]">{item.label}</p>
            <p className="mt-1 text-[12px] text-foreground/60">{item.action}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}
