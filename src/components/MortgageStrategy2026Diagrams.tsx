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

export function MortgageRateHistoryDiagram() {
  const data = [
    { period: "2024年3月", rate: "0.3〜0.5%", policy: "マイナス金利解除" },
    { period: "2025年1月", rate: "0.5〜0.7%", policy: "政策金利0.25%" },
    { period: "2026年1月", rate: "0.85〜1.0%", policy: "政策金利0.75%" },
    { period: "2026年4月", rate: "0.975〜1.15%", policy: "適用1%突破" },
  ];
  return (
    <DiagramCard title="変動金利（優遇後適用金利）の推移">
      <div className="space-y-2">
        {data.map((d) => (
          <div key={d.period} className="flex items-center gap-3">
            <p className="w-24 text-[11px] text-foreground/40 flex-shrink-0">{d.period}</p>
            <div className="flex-1 h-6 rounded-full bg-foreground/[0.04] relative overflow-hidden">
              <div className="h-full rounded-full bg-[#b9770e]/30" style={{ width: `${(parseFloat(d.rate) / 1.2) * 100}%` }} />
            </div>
            <p className="w-28 text-right text-[12px] font-bold text-[#b9770e]">{d.rate}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-foreground/40">{data[data.length - 1].policy}</p>
    </DiagramCard>
  );
}

export function MortgagePaymentSimDiagram() {
  const sims = [
    { desc: "残高2,000万円・残25年", increase: "+¥2,400/月", annual: "年+2.9万円" },
    { desc: "残高3,000万円・残25年", increase: "+¥3,600/月", annual: "年+4.3万円" },
    { desc: "残高4,000万円・残20年", increase: "+¥4,500/月", annual: "年+5.4万円" },
  ];
  return (
    <DiagramCard title="+0.25%利上げ時の月々返済増加試算">
      <div className="space-y-2">
        {sims.map((s) => (
          <div key={s.desc} className="flex items-center justify-between rounded-lg border border-foreground/[0.05] p-4">
            <p className="text-[13px] text-foreground/70">{s.desc}</p>
            <div className="text-right">
              <p className="text-[16px] font-black text-[#ef4444]">{s.increase}</p>
              <p className="text-[11px] text-foreground/40">{s.annual}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function MortgageFixedBreakevenDiagram() {
  return (
    <DiagramCard title="変動→固定 損益分岐点（試算例）">
      <div className="space-y-3">
        <div className="rounded-xl bg-foreground/[0.03] p-4">
          <p className="text-[12px] text-foreground/50">条件：残高2,500万円・残25年・変動1.0% → 固定2.8%</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#22c55e]/20 p-4">
            <p className="text-[11px] text-[#22c55e] font-semibold">固定化が有利になる条件</p>
            <p className="mt-2 text-[14px] font-bold text-foreground">変動が3年以内に<br/>2.3%以上到達・継続</p>
            <p className="mt-1 text-[11px] text-foreground/40">（年+0.43%ペース）</p>
          </div>
          <div className="rounded-xl border border-[#b9770e]/20 p-4">
            <p className="text-[11px] text-[#b9770e] font-semibold">変動継続が有利になる条件</p>
            <p className="mt-2 text-[14px] font-bold text-foreground">2028年末でも<br/>2.3%以下に留まる</p>
            <p className="mt-1 text-[11px] text-foreground/40">（利上げペースが鈍化）</p>
          </div>
        </div>
      </div>
    </DiagramCard>
  );
}

export function MortgageActionPlanDiagram() {
  return (
    <DiagramCard title="今すぐやるべき3つのアクション">
      <div className="space-y-3">
        {[
          { num: "1", title: "繰り上げ返済シミュレーション", detail: "余剰資金の一部を繰り上げ返済に充て、元本を先に減らす" },
          { num: "2", title: "金利上昇前提の家計見直し", detail: "変動2%でも維持できるか試算。難しければ固定費削減・収入増を検討" },
          { num: "3", title: "固定・変動の最新金利比較", detail: "借り換えコンペアサービスで乗り換えコスト込みの総コスト比較を実施" },
        ].map((item) => (
          <div key={item.num} className="flex gap-3 rounded-xl border border-foreground/[0.06] p-4">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#b9770e]/10 text-[13px] font-black text-[#b9770e]">{item.num}</div>
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

export function MortgageStrategicViewDiagram() {
  const risks = [
    "残期間が20年以上ある",
    "世帯収入が将来減少する可能性がある",
    "手元貯蓄が残高の10%以下（繰り上げ余力なし）",
    "変動2%時に返済が苦しくなる試算結果",
  ];
  return (
    <DiagramCard title="固定化を優先すべき条件（複数該当するほどリスク高）">
      <div className="space-y-2">
        {risks.map((r, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-foreground/[0.05] p-3">
            <div className="h-2 w-2 rounded-full bg-[#ef4444]/60 flex-shrink-0" />
            <p className="text-[12px] text-foreground/65">{r}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-foreground/40 border-t border-foreground/[0.05] pt-3">金利環境は6ヶ月ごとに見直すことを習慣化する</p>
    </DiagramCard>
  );
}
