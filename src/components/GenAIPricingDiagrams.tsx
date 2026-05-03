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

export function GenAIPricingOverviewDiagram() {
  return (
    <DiagramCard title="2026年5月 生成AI料金の3大変化">
      <div className="space-y-3">
        {[
          { label: "①Googleの多階層化", detail: "AI Plus（¥1,200/月）新設 → 4階層体制", color: "#4285f4" },
          { label: "②Anthropicのビジネス強化", detail: "Claude for Work（$25/シート〜）日本正式展開", color: "#c084fc" },
          { label: "③API料金の大幅値下げ", detail: "GPT-4.1 API 前世代比▲65%、Haiku-4.5 $0.80/Mトークン", color: "#22c55e" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 rounded-xl border border-foreground/[0.05] p-4">
            <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ background: item.color }} />
            <div>
              <p className="text-[13px] font-semibold text-foreground">{item.label}</p>
              <p className="mt-0.5 text-[12px] text-foreground/55">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function GenAIPersonalPlansDiagram() {
  const plans = [
    { service: "ChatGPT Plus", price: "$20/月", model: "o3・o4-mini・DALL-E 3", color: "#10b981" },
    { service: "Claude Pro", price: "$20/月", model: "Opus 4.6・Sonnet 4.6・Projects", color: "#8b5cf6" },
    { service: "Perplexity Pro", price: "$20/月", model: "検索無制限・GPT-4.1/Claude切替", color: "#f97316" },
    { service: "Google AI Plus", price: "¥1,200/月", model: "Gemini 2.0 Flash・入門層向け", color: "#4285f4" },
    { service: "Google AI Pro", price: "¥2,900/月", model: "Gemini 2.5 Pro・全機能", color: "#34a853" },
  ];
  return (
    <DiagramCard title="個人向けプラン比較（2026年5月）">
      <div className="space-y-2">
        {plans.map((p) => (
          <div key={p.service} className="flex items-center gap-3 rounded-lg border border-foreground/[0.05] p-3">
            <div className="w-2 h-full flex-shrink-0">
              <div className="h-8 w-1.5 rounded-full" style={{ background: p.color }} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-foreground">{p.service}</p>
              <p className="text-[11px] text-foreground/50">{p.model}</p>
            </div>
            <p className="text-[13px] font-bold tabular-nums" style={{ color: p.color }}>{p.price}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function GenAIHighTierDiagram() {
  return (
    <DiagramCard title="高額プランの費用対効果">
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "ChatGPT Pro", price: "$200/月", benefit: "o3無制限・推論最強", target: "数学・医療・研究専用" },
          { name: "Google AI Ultra", price: "¥36,400/月", benefit: "1M Token・DeepResearch無制限", target: "コンサル・研究者向け" },
        ].map((item) => (
          <div key={item.name} className="rounded-xl border border-foreground/[0.08] p-4 space-y-2">
            <p className="text-[14px] font-bold text-foreground">{item.name}</p>
            <p className="text-[20px] font-black text-foreground/80">{item.price}</p>
            <p className="text-[12px] text-foreground/60">{item.benefit}</p>
            <p className="text-[11px] text-foreground/40 italic">{item.target}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[12px] text-foreground/50 border-t border-foreground/[0.05] pt-3">※ 月$20プランを徹底活用してから上位検討を推奨</p>
    </DiagramCard>
  );
}

export function GenAIApiPricingDiagram() {
  const apis = [
    { model: "GPT-4.1", input: "$2.00", output: "$8.00", note: "前世代比▲65%" },
    { model: "GPT-4.1 mini", input: "$0.40", output: "$1.60", note: "コスパ最強汎用" },
    { model: "Claude Sonnet 4.6", input: "$3.00", output: "$15.00", note: "コーディング最強" },
    { model: "claude-haiku-4.5", input: "$0.80", output: "$4.00", note: "高速・チャットボット" },
    { model: "Gemini 1.5 Flash", input: "$0.075", output: "$0.30", note: "長文バッチ最安" },
  ];
  return (
    <DiagramCard title="主要モデルAPI料金（per 1M tokens）">
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-foreground/[0.08]">
              <th className="text-left py-2 text-foreground/40 font-medium">モデル</th>
              <th className="text-right py-2 text-foreground/40 font-medium">入力</th>
              <th className="text-right py-2 text-foreground/40 font-medium">出力</th>
              <th className="text-right py-2 text-foreground/40 font-medium">特徴</th>
            </tr>
          </thead>
          <tbody>
            {apis.map((a) => (
              <tr key={a.model} className="border-b border-foreground/[0.04]">
                <td className="py-2 font-semibold text-foreground">{a.model}</td>
                <td className="py-2 text-right text-foreground/70 tabular-nums">{a.input}</td>
                <td className="py-2 text-right text-foreground/70 tabular-nums">{a.output}</td>
                <td className="py-2 text-right text-foreground/50">{a.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DiagramCard>
  );
}

export function GenAIUseCaseMatrixDiagram() {
  const cases = [
    { task: "コーディング・技術文書", best: "Claude Sonnet 4.6", reason: "エラー追跡・リファクタリング精度が高い" },
    { task: "調査・情報収集", best: "Perplexity Pro", reason: "Web検索+引用統合、ハルシネーション低" },
    { task: "創造的文章・画像生成", best: "ChatGPT Plus", reason: "DALL-E 3統合・創造的多様性" },
    { task: "長文バッチ処理・RAG", best: "Gemini 1.5 Pro API", reason: "200万Token×最安API" },
    { task: "日本語ビジネス文書", best: "Claude Sonnet 4.6", reason: "専門用語精度で優位" },
  ];
  return (
    <DiagramCard title="用途別推奨モデル（2026年5月）">
      <div className="space-y-2">
        {cases.map((c) => (
          <div key={c.task} className="rounded-lg border border-foreground/[0.05] p-3">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[12px] font-semibold text-foreground/70">{c.task}</p>
              <span className="flex-shrink-0 text-[11px] font-bold text-[#8b5cf6]">{c.best}</span>
            </div>
            <p className="mt-1 text-[11px] text-foreground/40">{c.reason}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function GenAIJapanConsiderationsDiagram() {
  return (
    <DiagramCard title="日本語ユーザーへの注意点">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-foreground/[0.08] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/40">日本語品質</p>
          <div className="mt-2 space-y-1 text-[12px]">
            <p><span className="font-semibold text-[#8b5cf6]">Claude</span> — 技術専門用語◎</p>
            <p><span className="font-semibold text-[#10b981]">GPT-4.1</span> — 総合バランス○</p>
            <p><span className="font-semibold text-[#4285f4]">Gemini</span> — 口語・SNS◎</p>
          </div>
        </div>
        <div className="rounded-xl border border-foreground/[0.08] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/40">円建て料金（2026/5）</p>
          <div className="mt-2 space-y-1 text-[12px]">
            <p>ChatGPT Plus ≈ <span className="font-bold">¥3,000</span></p>
            <p>Claude Pro ≈ <span className="font-bold">¥3,000</span></p>
            <p>Google AI Pro = <span className="font-bold">¥2,900</span>（固定）</p>
            <p>Google AI Plus = <span className="font-bold">¥1,200</span>（固定）</p>
          </div>
        </div>
      </div>
    </DiagramCard>
  );
}
