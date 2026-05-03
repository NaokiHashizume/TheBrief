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

export function AiDcInvestmentMapDiagram() {
  return (
    <DiagramCard title="日本のAIデータセンター主要投資（2026年）">
      <div className="space-y-2">
        {[
          { company: "Microsoft Azure Japan", amount: "約¥1.5兆（2026〜2029年）", detail: "東日本・西日本のクラウドDC拡張＋NVIDIA GPU大量導入" },
          { company: "SoftBank「Eagle」", amount: "NVIDIA Blackwell 10万基超", detail: "国内最大規模AIスーパーコンピュータ。2026年本格稼働" },
          { company: "Google Cloud", amount: "東京・大阪DC増強", detail: "数千億円規模の国内投資継続（2026〜2027年）" },
          { company: "AWS東京・大阪", amount: "容量倍増計画", detail: "地方DC誘致競争（北海道・九州）も活発化" },
        ].map((item) => (
          <div key={item.company} className="rounded-xl border border-foreground/[0.06] p-3">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[13px] font-semibold text-[#3b82f6]">{item.company}</p>
              <span className="flex-shrink-0 text-[11px] font-bold text-foreground/50">{item.amount}</span>
            </div>
            <p className="mt-1 text-[12px] text-foreground/55">{item.detail}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function AiDcPowerForecastDiagram() {
  return (
    <DiagramCard title="データセンター電力需要予測（経産省試算）">
      <div className="mb-4 rounded-xl bg-[#3b82f6]/5 border border-[#3b82f6]/15 p-5 text-center">
        <p className="text-[12px] text-foreground/50">2030年 データセンター電力需要</p>
        <p className="text-[32px] font-black text-[#3b82f6]">100〜140 TWh/年</p>
        <p className="text-[13px] text-foreground/60">国内総発電量の <span className="font-black text-[#3b82f6]">10〜14%</span>（原発5〜7基相当）</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-foreground/[0.06] p-3 text-center">
          <p className="text-[11px] text-foreground/40">AIリクエスト1回の電力消費</p>
          <p className="text-[16px] font-black text-foreground">検索の<span className="text-[#3b82f6]">数百倍</span></p>
        </div>
        <div className="rounded-lg border border-foreground/[0.06] p-3 text-center">
          <p className="text-[11px] text-foreground/40">GPUサーバー消費電力</p>
          <p className="text-[16px] font-black text-foreground">旧サーバーの<span className="text-[#3b82f6]">10〜20倍</span></p>
        </div>
      </div>
    </DiagramCard>
  );
}

export function AiDcRenewableGapDiagram() {
  return (
    <DiagramCard title="「グリーンAI」宣言と日本の現実のギャップ">
      <div className="space-y-2">
        {[
          { label: "大手IT企業の宣言", value: "2030年100%再エネ運用", color: "#22c55e" },
          { label: "日本の再エネ比率（2025年度）", value: "約35%（水力込み）", color: "#f97316" },
          { label: "太陽光・風力のみ", value: "約30%", color: "#ef4444" },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between rounded-lg border border-foreground/[0.05] p-3">
            <p className="text-[12px] text-foreground/60">{item.label}</p>
            <p className="text-[13px] font-bold" style={{ color: item.color }}>{item.value}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-foreground/50 bg-foreground/[0.03] rounded-lg p-3">オフサイトPPA＋RE100証書での「証書上のカーボン中立」が現実的な手段</p>
    </DiagramCard>
  );
}

export function AiDcBottleneckDiagram() {
  return (
    <DiagramCard title="電力インフラがボトルネックになる現実">
      <div className="space-y-3">
        {[
          { issue: "電力系統接続の待ち行列", detail: "100MW以上の大型DC申請は系統調査・増強工事で3〜5年かかるケースも" },
          { issue: "系統容量の逼迫", detail: "北海道・九州では新規大型接続の受入停止が発生している地域も" },
          { issue: "水冷・液浸冷却の普及", detail: "冷却コスト（電力消費の40%超）削減に向けFujitsu・NECが液浸冷却ソリューションを強化" },
        ].map((item) => (
          <div key={item.issue} className="rounded-xl border border-foreground/[0.06] p-4">
            <p className="text-[13px] font-semibold text-[#3b82f6]">{item.issue}</p>
            <p className="mt-1 text-[12px] text-foreground/60">{item.detail}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function AiDcStrategicViewDiagram() {
  return (
    <DiagramCard title="電力需要急増の「もう一つの読み方」">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[#ef4444]/15 p-4">
          <p className="text-[11px] font-semibold text-[#ef4444]">一般的な見方</p>
          <p className="mt-2 text-[12px] text-foreground/60">電力消費急増＝「問題」「CO2排出増」として報道される</p>
        </div>
        <div className="rounded-xl border border-[#22c55e]/15 p-4">
          <p className="text-[11px] font-semibold text-[#22c55e]">もう一つの視点</p>
          <p className="mt-2 text-[12px] text-foreground/60">電力需要安定増大＝長期低迷の電力会社に「収益回復の機会」</p>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-foreground/50 bg-foreground/[0.03] rounded-lg p-3">日本がAIインフラハブになるには電力インフラ整備と再エネ拡大の加速が不可欠</p>
    </DiagramCard>
  );
}
