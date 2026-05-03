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

export function AiGovLawOverviewDiagram() {
  return (
    <DiagramCard title="日本AI基本法 vs EU AI Act 対比">
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "日本 AI基本法", date: "2025年9月1日全面施行", scope: "AIの透明性・説明可能性・人間監督", penalty: "努力義務中心（罰則限定的）", color: "#e11d48" },
          { name: "EU AI Act", date: "2026年8月2日高リスク全面施行", scope: "4段階リスク分類、技術文書・監督義務", penalty: "罰則：最大年商7%または3,500万€", color: "#2563eb" },
        ].map((law) => (
          <div key={law.name} className="rounded-xl p-4 border-2" style={{ borderColor: law.color + "30" }}>
            <p className="font-bold text-[13px] text-foreground">{law.name}</p>
            <p className="mt-1 text-[11px]" style={{ color: law.color }}>{law.date}</p>
            <p className="mt-2 text-[12px] text-foreground/60">{law.scope}</p>
            <p className="mt-2 text-[11px] text-foreground/40">{law.penalty}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function AiGovTransparencyDiagram() {
  const items = [
    { num: "①", title: "AI使用の表示義務", detail: "顧客向けAI生成コンテンツに「AI生成」表示（努力義務）" },
    { num: "②", title: "説明可能性の確保", detail: "採用・融資・医療補助でのAI意思決定根拠を確認可能にする" },
    { num: "③", title: "人間監督体制の構築", detail: "高リスク分野では監督者指定・手順書整備が必要" },
  ];
  return (
    <DiagramCard title="AI基本法の主な義務・努力義務">
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.num} className="flex gap-3 rounded-xl border border-foreground/[0.06] p-4">
            <span className="text-[20px] font-black text-foreground/15">{item.num}</span>
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

export function AiGovRiskMatrixDiagram() {
  const risks = [
    { level: "禁止", color: "#dc2626", examples: "社会スコアリング・公共空間での生体認証・感情認識（職場）" },
    { level: "高リスク", color: "#f97316", examples: "採用選考・融資スコアリング・医療診断補助・重要インフラ" },
    { level: "限定リスク", color: "#eab308", examples: "チャットボット・ディープフェイク（表示義務）" },
    { level: "最小リスク", color: "#22c55e", examples: "スパムフィルター・ゲームAI・一般的な生産性ツール" },
  ];
  return (
    <DiagramCard title="EU AI Act リスク分類（2026年8月全面施行）">
      <div className="space-y-2">
        {risks.map((r) => (
          <div key={r.level} className="flex items-start gap-3 rounded-lg border border-foreground/[0.05] p-3">
            <span className="flex-shrink-0 rounded-md px-2 py-0.5 text-[11px] font-bold text-white" style={{ background: r.color }}>{r.level}</span>
            <p className="text-[12px] text-foreground/65">{r.examples}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function AiGovInventoryDiagram() {
  const steps = [
    { step: "1", label: "AI使用の洗い出し", detail: "全部門からSaaS経由のAI含め網羅的に収集" },
    { step: "2", label: "リスク分類", detail: "各AIシステムの用途×規制対象チェック" },
    { step: "3", label: "文書化の優先順位付け", detail: "高リスク分類から技術文書・体制整備を開始" },
  ];
  return (
    <DiagramCard title="AIインベントリ作成の3ステップ">
      <div className="relative space-y-0">
        {steps.map((s, i) => (
          <div key={s.step} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8b5cf6]/10 text-[13px] font-bold text-[#8b5cf6]">{s.step}</div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-[#8b5cf6]/10 my-1" />}
            </div>
            <div className="pb-6">
              <p className="text-[13px] font-semibold text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[12px] text-foreground/55">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function AiGovExamplesDiagram() {
  return (
    <DiagramCard title="先行企業の対応事例">
      <div className="space-y-3">
        {[
          { company: "富士通", action: "Responsible AI Framework を全プロジェクトに適用・EU向け技術文書提供を標準化" },
          { company: "NEC", action: "開発・調達段階でのリスクアセスメント社内規程化。NeoFace（生体認証）のEU規制準拠を宣言" },
          { company: "三菱UFJほか", action: "融資審査AIへのSHAP等の説明可能性ツール組み込み、金融庁ガイドラインとの整合確保" },
        ].map((ex) => (
          <div key={ex.company} className="rounded-xl border border-foreground/[0.06] p-4">
            <p className="text-[13px] font-bold text-[#8b5cf6]">{ex.company}</p>
            <p className="mt-1 text-[12px] text-foreground/60">{ex.action}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function AiGovStrategicDiagram() {
  const checklist = [
    "どのAIを誰がどの業務に使えるかのルール化",
    "機密情報・個人情報のAIへの入力禁止範囲の明文化",
    "AI出力の最終確認責任者の指定",
    "インシデント発生時の報告・対処手順の策定",
  ];
  return (
    <DiagramCard title="企業が最低限整備すべきAI使用方針（4点）">
      <div className="space-y-2">
        {checklist.map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg border border-foreground/[0.05] p-3">
            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-[#8b5cf6]/30 text-[10px] font-bold text-[#8b5cf6]">{i + 1}</div>
            <p className="text-[13px] text-foreground/70">{item}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-foreground/40 border-t border-foreground/[0.05] pt-3">AI使用方針を持たない企業はシャドーAI利用を組織的にコントロールできない</p>
    </DiagramCard>
  );
}
