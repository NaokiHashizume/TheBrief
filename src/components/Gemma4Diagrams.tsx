"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Gemma 4 Model Family Overview
   ───────────────────────────────────────────── */
export function Gemma4ModelFamilyDiagram() {
  const models = [
    {
      name: "E2B",
      params: "2.3B有効 (5.1B)",
      paramsEn: "2.3B active (5.1B)",
      active: "2.3B",
      context: "128K",
      modality: "テキスト・画像・音声",
      modalityEn: "Text, image, audio",
      target: "スマートフォン・IoT",
      targetEn: "Smartphones & IoT",
      color: "#10b981",
      icon: "📱",
    },
    {
      name: "E4B",
      params: "4.5B有効 (8B)",
      paramsEn: "4.5B active (8B)",
      active: "4.5B",
      context: "128K",
      modality: "テキスト・画像・音声",
      modalityEn: "Text, image, audio",
      target: "モバイル・エッジ",
      targetEn: "Mobile & edge",
      color: "#3b82f6",
      icon: "💻",
    },
    {
      name: "26B A4B",
      params: "25.2B (MoE)",
      paramsEn: "25.2B (MoE)",
      active: "3.8B",
      context: "256K",
      modality: "テキスト・画像",
      modalityEn: "Text, image",
      target: "PC・ワークステーション",
      targetEn: "PC & workstation",
      color: "#8b5cf6",
      icon: "🖥",
    },
    {
      name: "31B Dense",
      params: "30.7B",
      paramsEn: "30.7B",
      active: "30.7B",
      context: "256K",
      modality: "テキスト・画像",
      modalityEn: "Text, image",
      target: "サーバー・クラウド",
      targetEn: "Server & cloud",
      color: "#f59e0b",
      icon: "☁",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="Gemma 4 モデルファミリー" en="Gemma 4 model family" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="4つのモデルバリエーション — エッジからクラウドまで" en="Four model variants — from edge to cloud" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {models.map((m) => (
          <div
            key={m.name}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${m.color}`,
              backgroundColor: `${m.color}08`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{m.icon}</span>
              <div>
                <span className="text-sm font-bold" style={{ color: m.color }}>
                  {m.name}
                </span>
                <div className="text-[9px] text-foreground/40"><T ja={m.target} en={m.targetEn} /></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-3">
              <div>
                <div className="text-[9px] text-foreground/40">
                  <T ja="総パラメータ" en="Total params" />
                </div>
                <div className="text-xs font-medium tabular-nums">
                  <T ja={m.params} en={m.paramsEn} />
                </div>
              </div>
              <div>
                <div className="text-[9px] text-foreground/40">
                  <T ja="有効パラメータ" en="Active params" />
                </div>
                <div className="text-xs font-bold tabular-nums" style={{ color: m.color }}>
                  {m.active}
                </div>
              </div>
              <div>
                <div className="text-[9px] text-foreground/40">
                  <T ja="コンテキスト" en="Context" />
                </div>
                <div className="text-xs font-medium tabular-nums">
                  {m.context}
                </div>
              </div>
              <div>
                <div className="text-[9px] text-foreground/40">
                  <T ja="対応モダリティ" en="Modalities" />
                </div>
                <div className="text-[10px] font-medium"><T ja={m.modality} en={m.modalityEn} /></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
        <span className="text-[11px] text-foreground/60 leading-relaxed">
          <T
            ja={<>全モデル <strong>Apache 2.0</strong> ライセンス — MAU制限なし、商用利用完全自由</>}
            en={<>Every model ships under the <strong>Apache 2.0</strong> license — no MAU cap, fully free for commercial use</>}
          />
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Benchmark Comparison Chart
   ───────────────────────────────────────────── */
export function Gemma4BenchmarkDiagram() {
  const benchmarks = [
    {
      name: "MMLU Pro",
      desc: "総合知識",
      descEn: "General knowledge",
      gemma4_31b: 85.2,
      gemma4_26b: 82.6,
      gemma4_e4b: 69.4,
      gemma3_27b: 67.5,
      max: 90,
    },
    {
      name: "AIME 2026",
      desc: "数学競技",
      descEn: "Math olympiad",
      gemma4_31b: 89.2,
      gemma4_26b: 88.3,
      gemma4_e4b: 42.5,
      gemma3_27b: 20.8,
      max: 95,
    },
    {
      name: "LiveCodeBench",
      desc: "コード生成",
      descEn: "Code generation",
      gemma4_31b: 80.0,
      gemma4_26b: 77.1,
      gemma4_e4b: 52.0,
      gemma3_27b: 32.0,
      max: 85,
    },
    {
      name: "GPQA Diamond",
      desc: "科学推論",
      descEn: "Scientific reasoning",
      gemma4_31b: 84.3,
      gemma4_26b: 82.3,
      gemma4_e4b: 58.6,
      gemma3_27b: 47.2,
      max: 90,
    },
  ];

  const models = [
    { key: "gemma4_31b", label: "Gemma 4 31B", color: "#f59e0b" },
    { key: "gemma4_26b", label: "Gemma 4 26B MoE", color: "#8b5cf6" },
    { key: "gemma4_e4b", label: "Gemma 4 E4B", color: "#3b82f6" },
    { key: "gemma3_27b", label: "Gemma 3 27B", color: "#94a3b8" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ベンチマーク性能" en="Benchmark performance" />
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        <T ja="主要ベンチマークでのスコア比較(%)" en="Score comparison across major benchmarks (%)" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-5 text-[9px]">
        {models.map((m) => (
          <span key={m.key} className="flex items-center gap-1.5 text-foreground/60">
            <span
              className="w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: m.color }}
            />
            {m.label}
          </span>
        ))}
      </div>

      <div className="space-y-5">
        {benchmarks.map((b) => (
          <div key={b.name}>
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="text-xs font-semibold">{b.name}</span>
              <span className="text-[9px] text-foreground/40"><T ja={b.desc} en={b.descEn} /></span>
            </div>
            <div className="space-y-1">
              {models.map((m) => {
                const value = b[m.key as keyof typeof b] as number;
                return (
                  <div key={m.key} className="flex items-center gap-2">
                    <div className="w-full h-5 bg-foreground/[0.03] rounded overflow-hidden">
                      <div
                        className="h-full rounded flex items-center justify-end pr-1.5 transition-all"
                        style={{
                          width: `${(value / b.max) * 100}%`,
                          backgroundColor: m.color,
                          opacity: 0.75,
                        }}
                      >
                        <span className="text-[9px] font-bold text-white tabular-nums">
                          {value}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: Google DeepMind Gemma 4 Model Card、各ベンチマーク公式スコア" en="Source: Google DeepMind Gemma 4 Model Card and each benchmark's official scores" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Architecture Diagram — Hybrid Attention + PLE
   ───────────────────────────────────────────── */
export function Gemma4ArchitectureDiagram() {
  const layers = [
    {
      name: "入力トークン化",
      nameRomaji: "トークン化処理",
      nameEn: "Input tokenization",
      subEn: "Tokenization pipeline",
      detail: "語彙サイズ 262K、140以上の言語に対応",
      detailEn: "262K vocabulary, supports 140+ languages",
      color: "#6366f1",
    },
    {
      name: "Per-Layer Embeddings (PLE)",
      nameRomaji: "E2B/E4B専用",
      nameEn: "Per-Layer Embeddings (PLE)",
      subEn: "E2B/E4B only",
      detail: "各デコーダ層に独立した埋め込み信号を注入し、少パラメータで高い表現力を実現",
      detailEn: "Injects an independent embedding signal into each decoder layer, delivering strong expressiveness with few parameters",
      color: "#10b981",
    },
    {
      name: "ハイブリッドアテンション層",
      nameRomaji: "ハイブリッド注意機構",
      nameEn: "Hybrid attention layers",
      subEn: "Hybrid attention mechanism",
      detail: "ローカル（スライディングウィンドウ 512-1024トークン）と グローバル（フルコンテキスト）を交互配置",
      detailEn: "Interleaves local (512–1024-token sliding window) and global (full-context) attention",
      color: "#3b82f6",
    },
    {
      name: "Shared KV Cache",
      nameRomaji: "KVキャッシュ共有",
      nameEn: "Shared KV cache",
      subEn: "KV cache sharing",
      detail: "後半N層が前半層のKVを再利用 → メモリ使用量を大幅削減",
      detailEn: "Later layers reuse KV from earlier layers, dramatically reducing memory use",
      color: "#f59e0b",
    },
    {
      name: "ビジョン / オーディオエンコーダ",
      nameRomaji: "視覚（約550M）/ 音声（約300M）",
      nameEn: "Vision / audio encoders",
      subEn: "Vision ~550M / audio ~300M",
      detail: "可変アスペクト比対応、トークンバジェット設定可能（70〜1120）",
      detailEn: "Supports variable aspect ratios and configurable token budgets (70–1120)",
      color: "#ec4899",
    },
    {
      name: "出力生成",
      nameRomaji: "出力生成処理",
      nameEn: "Output generation",
      subEn: "Output generation pipeline",
      detail: "テキスト出力、JSON構造化出力、Function Callingに対応",
      detailEn: "Supports text output, structured JSON output, and function calling",
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="Gemma 4 アーキテクチャ" en="Gemma 4 architecture" />
      </div>
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <div
            key={i}
            className="relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-colors"
            style={{
              backgroundColor: `${layer.color}08`,
              borderLeft: `3px solid ${layer.color}`,
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: layer.color }}
            >
              {i + 1}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold"><T ja={layer.name} en={layer.nameEn} /></div>
              <div className="text-[10px] text-foreground/40">
                <T ja={layer.nameRomaji} en={layer.subEn} />
              </div>
              <div className="mt-0.5 text-[11px] text-foreground/55 leading-relaxed">
                <T ja={layer.detail} en={layer.detailEn} />
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="absolute -bottom-2.5 left-7 text-foreground/20 text-xs z-10">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Open Model Comparison Table
   ───────────────────────────────────────────── */
export function OpenModelComparisonDiagram() {
  const models = [
    {
      name: "Gemma 4 31B",
      org: "Google",
      params: "30.7B",
      active: "30.7B",
      context: "256K",
      license: "Apache 2.0",
      licenseEn: "Apache 2.0",
      multimodal: "画像",
      multimodalEn: "Image",
      arena: "1452",
      highlight: true,
    },
    {
      name: "Gemma 4 26B",
      org: "Google",
      params: "25.2B",
      active: "3.8B",
      context: "256K",
      license: "Apache 2.0",
      licenseEn: "Apache 2.0",
      multimodal: "画像",
      multimodalEn: "Image",
      arena: "1441",
      highlight: true,
    },
    {
      name: "Qwen 3.5 27B",
      org: "Alibaba",
      params: "27B",
      active: "27B",
      context: "128K",
      license: "Apache 2.0",
      licenseEn: "Apache 2.0",
      multimodal: "テキストのみ",
      multimodalEn: "Text only",
      arena: "1460",
      highlight: false,
    },
    {
      name: "Llama 4 Scout",
      org: "Meta",
      params: "109B",
      active: "17B",
      context: "10M",
      license: "独自 (700M MAU制限)",
      licenseEn: "Custom (700M MAU cap)",
      multimodal: "画像",
      multimodalEn: "Image",
      arena: "1410",
      highlight: false,
    },
    {
      name: "GLM-5 32B",
      org: "Zhipu AI",
      params: "32B",
      active: "32B",
      context: "128K",
      license: "MIT",
      licenseEn: "MIT",
      multimodal: "画像",
      multimodalEn: "Image",
      arena: "1448",
      highlight: false,
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card overflow-x-auto">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="オープンモデル動向(2026年)" en="Open model landscape (2026)" />
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        <T ja="主要オープンモデル比較(2026年4月時点)" en="Major open model comparison (as of April 2026)" />
      </div>

      <table className="w-full text-[11px] min-w-[600px]">
        <thead>
          <tr className="border-b border-brief-border">
            <th className="text-left py-2 pr-2 text-foreground/40 font-medium">
              <T ja="モデル" en="Model" />
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              <T ja="有効パラメータ" en="Active params" />
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              <T ja="コンテキスト" en="Context" />
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              <T ja="マルチモーダル" en="Multimodal" />
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              Arena
            </th>
            <th className="text-left py-2 pl-2 text-foreground/40 font-medium">
              <T ja="ライセンス" en="License" />
            </th>
          </tr>
        </thead>
        <tbody>
          {models.map((m) => (
            <tr
              key={m.name}
              className={`border-b border-brief-border/50 ${m.highlight ? "bg-blue-500/5" : ""}`}
            >
              <td className="py-2.5 pr-2">
                <div className="font-medium">{m.name}</div>
                <div className="text-[9px] text-foreground/40">{m.org}</div>
              </td>
              <td className="py-2.5 px-2 text-center tabular-nums font-medium">
                {m.active}
              </td>
              <td className="py-2.5 px-2 text-center tabular-nums">
                {m.context}
              </td>
              <td className="py-2.5 px-2 text-center"><T ja={m.multimodal} en={m.multimodalEn} /></td>
              <td className="py-2.5 px-2 text-center tabular-nums font-bold">
                {m.arena}
              </td>
              <td className="py-2.5 pl-2 text-[10px]"><T ja={m.license} en={m.licenseEn} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: LMArena Leaderboard、各社公式発表(2026年4月時点) 青背景 = Gemma 4モデル" en="Source: LMArena Leaderboard and each company's official announcements (as of April 2026). Blue rows = Gemma 4 models" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Use Cases & Deployment Options
   ───────────────────────────────────────────── */
export function Gemma4UseCasesDiagram() {
  const useCases = [
    {
      category: "エッジ / オンデバイス",
      categoryEn: "Edge / on-device",
      color: "#10b981",
      models: "E2B / E4B",
      cases: [
        {
          name: "オフラインAIアシスタント",
          nameEn: "Offline AI assistant",
          detail: "1.5GB未満のメモリで動作、Raspberry Pi 5対応",
          detailEn: "Runs in under 1.5 GB of RAM; works on Raspberry Pi 5",
        },
        {
          name: "リアルタイム音声認識",
          nameEn: "Real-time speech recognition",
          detail: "USM音声エンコーダ搭載、オンデバイス文字起こし",
          detailEn: "USM audio encoder enables on-device transcription",
        },
        {
          name: "カメラ画像分析",
          nameEn: "Camera image analysis",
          detail: "物体検出（JSON座標出力）、OCR、シーン認識",
          detailEn: "Object detection with JSON coordinates, OCR, scene recognition",
        },
      ],
    },
    {
      category: "ワークステーション / PC",
      categoryEn: "Workstation / PC",
      color: "#8b5cf6",
      models: "26B MoE",
      cases: [
        {
          name: "ローカルコード生成",
          nameEn: "Local code generation",
          detail: "3.8B有効パラメータで31B級の性能を実現",
          detailEn: "Delivers 31B-class quality with only 3.8B active parameters",
        },
        {
          name: "マルチステップ推論",
          nameEn: "Multi-step reasoning",
          detail: "Thinkingモードで段階的な論理展開",
          detailEn: "Thinking mode for step-by-step logical reasoning",
        },
        {
          name: "ドキュメント分析",
          nameEn: "Document analysis",
          detail: "256Kコンテキストで長文書の要約・分析",
          detailEn: "256K context enables summarization and analysis of long documents",
        },
      ],
    },
    {
      category: "サーバー / API",
      categoryEn: "Server / API",
      color: "#f59e0b",
      models: "31B Dense",
      cases: [
        {
          name: "エージェント型ワークフロー",
          nameEn: "Agentic workflows",
          detail: "Function Calling + JSON出力で自律的なタスク実行",
          detailEn: "Autonomous task execution via function calling and JSON output",
        },
        {
          name: "高精度コード生成",
          nameEn: "High-accuracy code generation",
          detail: "Codeforces ELO 2150、LiveCodeBench 80%",
          detailEn: "Codeforces ELO 2150, LiveCodeBench 80%",
        },
        {
          name: "多言語カスタマーサポート",
          nameEn: "Multilingual customer support",
          detail: "140言語以上に対応、高品質な翻訳・応答",
          detailEn: "High-quality translation and responses across 140+ languages",
        },
      ],
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="デプロイとユースケース" en="Deployment & use cases" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="モデル選択ガイド — ユースケース別の推奨構成" en="Model selection guide — recommended setup per use case" />
      </div>

      <div className="space-y-4">
        {useCases.map((uc) => (
          <div
            key={uc.category}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${uc.color}`,
              backgroundColor: `${uc.color}08`,
            }}
          >
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-sm font-bold" style={{ color: uc.color }}>
                <T ja={uc.category} en={uc.categoryEn} />
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: `${uc.color}15`, color: uc.color }}>
                {uc.models}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {uc.cases.map((c) => (
                <div
                  key={c.name}
                  className="p-2.5 rounded bg-background/50"
                >
                  <div className="text-[11px] font-semibold"><T ja={c.name} en={c.nameEn} /></div>
                  <div className="text-[10px] text-foreground/50 mt-0.5 leading-relaxed">
                    <T ja={c.detail} en={c.detailEn} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Code Example Diagram (Pipeline)
   ───────────────────────────────────────────── */
export function Gemma4CodeExampleDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="クイックスタート コード例" en="Quick-start code examples" />
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        <T ja="Hugging Face Transformers を使った基本的な使い方" en="Basic usage with Hugging Face Transformers" />
      </div>

      {/* Install */}
      <div className="mb-4">
        <div className="text-[10px] font-bold text-foreground/60 mb-1">
          <T ja="1. インストール" en="1. Install" />
        </div>
        <pre className="p-3 rounded-lg bg-[#1e1e2e] text-[11px] text-[#cdd6f4] overflow-x-auto leading-relaxed">
          <code>pip install -U transformers torch</code>
        </pre>
      </div>

      {/* Simple pipeline */}
      <div className="mb-4">
        <div className="text-[10px] font-bold text-foreground/60 mb-1">
          <T ja="2. テキスト生成（シンプル）" en="2. Text generation (simple)" />
        </div>
        <pre className="p-3 rounded-lg bg-[#1e1e2e] text-[11px] text-[#cdd6f4] overflow-x-auto leading-relaxed">
          <code>{`from transformers import pipeline

pipe = pipeline(
    "any-to-any",
    model="google/gemma-4-e4b-it",
    device_map="auto"
)

output = pipe(
    [{"role": "user",
      "content": [{"type": "text",
        "text": "日本経済の現状を要約して"}]}],
    max_new_tokens=200,
    return_full_text=False
)
print(output[0]["generated_text"])`}</code>
        </pre>
      </div>

      {/* Image + Text */}
      <div className="mb-4">
        <div className="text-[10px] font-bold text-foreground/60 mb-1">
          <T ja="3. 画像理解(マルチモーダル)" en="3. Image understanding (multimodal)" />
        </div>
        <pre className="p-3 rounded-lg bg-[#1e1e2e] text-[11px] text-[#cdd6f4] overflow-x-auto leading-relaxed">
          <code>{`messages = [{
    "role": "user",
    "content": [
        {"type": "image",
         "image": "photo.jpg"},
        {"type": "text",
         "text": "この画像を説明して"}
    ]
}]
output = pipe(messages, max_new_tokens=200)`}</code>
        </pre>
      </div>

      {/* Function calling */}
      <div>
        <div className="text-[10px] font-bold text-foreground/60 mb-1">
          <T ja="4. Function Calling(ツール使用)" en="4. Function calling (tool use)" />
        </div>
        <pre className="p-3 rounded-lg bg-[#1e1e2e] text-[11px] text-[#cdd6f4] overflow-x-auto leading-relaxed">
          <code>{`from transformers import AutoModelForMultimodalLM, AutoProcessor

model = AutoModelForMultimodalLM.from_pretrained(
    "google/gemma-4-31B-it", device_map="auto")
processor = AutoProcessor.from_pretrained(
    "google/gemma-4-31B-it")

tool = {"type": "function", "function": {
    "name": "search_web",
    "description": "Web検索を実行",
    "parameters": {"type": "object",
        "properties": {"query": {"type": "string"}},
        "required": ["query"]}}}

inputs = processor.apply_chat_template(
    messages, tools=[tool],
    enable_thinking=True,  # 推論モード有効化
    tokenize=True, return_dict=True,
    return_tensors="pt",
    add_generation_prompt=True
).to(model.device)`}</code>
        </pre>
      </div>
    </div>
  );
}
