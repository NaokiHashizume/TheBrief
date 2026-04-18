"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   AI Chip War 2026 Diagrams
   ───────────────────────────────────────────── */

export function AiChipMarketShareDiagram() {
  const players = [
    { name: "NVIDIA Blackwell", share: 80, revenue: "512億ドル/Q", color: "#10b981" },
    { name: "AMD MI350", share: 9, revenue: "目標15%", color: "#f59e0b" },
    { name: "Google TPU v5", share: 5, revenue: "内部利用", color: "#3b82f6" },
    { name: "AWS Trainium2", share: 3, revenue: "内部利用", color: "#8b5cf6" },
    { name: "その他", share: 3, revenue: "—", color: "#64748b" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI accelerator market share 2026"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="AIアクセラレータ市場シェア 2026" en="AI Accelerator Market Share 2026" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="NVIDIAが約80%支配。データセンター部門売上512億ドル/四半期" en="NVIDIA controls ~80%. Data center revenue $51.2B per quarter" />
      </div>

      <div className="space-y-3 mb-4">
        {players.map((p) => (
          <div key={p.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-medium text-foreground/70">{p.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-foreground/40">{p.revenue}</span>
                <span className="text-[11px] font-bold" style={{ color: p.color }}>
                  {p.share}%
                </span>
              </div>
            </div>
            <div className="h-4 bg-foreground/[0.05] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${p.share}%`, backgroundColor: p.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "市場シェア", labelEn: "Market share", value: "~80%", color: "#10b981" },
          { label: "前年比成長", labelEn: "YoY growth", value: "+66%", color: "#3b82f6" },
          { label: "2027年予測累計", labelEn: "2027 cumulative est.", value: "$1T", color: "#8b5cf6" },
        ].map((s) => (
          <div key={s.label} className="p-2.5 rounded-lg bg-foreground/[0.03] text-center">
            <div className="text-[14px] font-bold" style={{ color: s.color }}>
              {s.value}
            </div>
            <div className="text-[9px] text-foreground/40 mt-0.5">
              <T ja={s.label} en={s.labelEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: NVIDIA IR / siliconanalysts.com (2026 Q1)" en="Source: NVIDIA IR / siliconanalysts.com (Q1 2026)" />
      </div>
    </div>
  );
}

export function AiChipAmdComparisonDiagram() {
  const specs = [
    { spec: "HBMメモリ容量", specEn: "HBM Memory", nvidia: "192 GB", amd: "288 GB (MI350)", winner: "amd", color: "#f59e0b" },
    { spec: "次世代メモリ (2026H2)", specEn: "Next-gen memory (2026H2)", nvidia: "Rubin: HBM4", amd: "432 GB (MI400)", winner: "amd", color: "#f59e0b" },
    { spec: "NVLink/帯域幅", specEn: "Interconnect bandwidth", nvidia: "1.8 TB/s", amd: "19.6 TB/s (MI400)", winner: "amd", color: "#f59e0b" },
    { spec: "エコシステム成熟度", specEn: "Ecosystem maturity", nvidia: "CUDA (成熟)", amd: "ROCm (発展中)", winner: "nvidia", color: "#10b981" },
    { spec: "ソフトウェア互換性", specEn: "Software compatibility", nvidia: "業界標準", amd: "CUDA移行コスト", winner: "nvidia", color: "#10b981" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="NVIDIA vs AMD AI chip specification comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="NVIDIA Blackwell vs AMD MI350/MI400 スペック比較" en="NVIDIA Blackwell vs AMD MI350/MI400 Spec Comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="メモリ容量でAMDが逆転。エコシステムはNVIDIAがリード" en="AMD surpasses on memory capacity. NVIDIA leads on ecosystem maturity" />
      </div>

      <div className="space-y-2">
        {specs.map((s) => (
          <div key={s.spec} className="grid grid-cols-5 gap-2 items-center py-2 border-b border-foreground/[0.04] last:border-0">
            <div className="col-span-2 text-[10px] text-foreground/55">
              <T ja={s.spec} en={s.specEn} />
            </div>
            <div
              className="col-span-1 text-[10px] font-semibold text-center py-1 px-1 rounded"
              style={s.winner === "nvidia" ? { backgroundColor: "#10b98115", color: "#10b981" } : { color: "#94a3b8" }}
            >
              {s.nvidia}
            </div>
            <div className="col-span-1 flex justify-center">
              <span className="text-[9px] text-foreground/30">vs</span>
            </div>
            <div
              className="col-span-1 text-[10px] font-semibold text-center py-1 px-1 rounded"
              style={s.winner === "amd" ? { backgroundColor: "#f59e0b15", color: "#f59e0b" } : { color: "#94a3b8" }}
            >
              {s.amd}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3 text-[9px]">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-[#10b981]/20 border border-[#10b981]/30" />
          <span className="text-foreground/50 font-semibold">NVIDIA 優位</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-[#f59e0b]/20 border border-[#f59e0b]/30" />
          <span className="text-foreground/50 font-semibold">AMD 優位</span>
        </div>
      </div>

      <div className="mt-3 p-2.5 rounded bg-[#f59e0b]/[0.06] border border-[#f59e0b]/15 text-[10px] text-foreground/60">
        <T
          ja="Microsoft・Meta・OpenAIがMI350採用を確約または検討。AMDは2026年Q4までに市場シェア12〜15%獲得を目標。"
          en="Microsoft, Meta, and OpenAI have committed or are considering MI350 adoption. AMD targets 12–15% market share by Q4 2026."
        />
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: AMD公式 / Tom's Hardware (2026-04)" en="Source: AMD official / Tom's Hardware (April 2026)" />
      </div>
    </div>
  );
}

export function AiChipIntelGapDiagram() {
  const timeline = [
    { product: "Gaudi 3", year: "2024", status: "出荷済み", statusEn: "Shipped", color: "#94a3b8", available: true },
    { product: "Gaudi 4", year: "2025〜2026", status: "事実上スキップ", statusEn: "Effectively skipped", color: "#ef4444", available: false },
    { product: "Crescent Island", year: "2026 H2", status: "サンプリング開始予定", statusEn: "Sampling start planned", color: "#f59e0b", available: false },
    { product: "Jaguar Shores", year: "2027+", status: "HBM4E搭載予定", statusEn: "HBM4E planned", color: "#64748b", available: false },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Intel AI chip roadmap gap analysis"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="Intel AIチップロードマップ——「Gaudi 4」空白問題" en="Intel AI Chip Roadmap — The 'Gaudi 4' Gap Problem" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2026年中に競争力ある高性能AIアクセラレータを投入できない現実" en="Intel cannot deliver a competitive high-performance AI accelerator in 2026" />
      </div>

      <div className="space-y-3 mb-4">
        {timeline.map((t) => (
          <div
            key={t.product}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{
              backgroundColor: t.available ? "#10b98108" : `${t.color}06`,
              borderLeft: `3px solid ${t.color}`,
            }}
          >
            <div>
              <div className="text-[12px] font-bold" style={{ color: t.color }}>
                {t.product}
              </div>
              <div className="text-[9px] text-foreground/40">{t.year}</div>
            </div>
            <div className="ml-auto">
              <span
                className="text-[9px] px-2 py-0.5 rounded-full font-semibold"
                style={{ backgroundColor: `${t.color}20`, color: t.color }}
              >
                <T ja={t.status} en={t.statusEn} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-red-500/[0.06] border border-red-500/15">
        <div className="text-[10px] text-red-500 font-semibold mb-1">
          <T ja="結論: NVIDIA-AMD二極体制への移行" en="Conclusion: Shift to NVIDIA-AMD Duopoly" />
        </div>
        <div className="text-[11px] text-foreground/60">
          <T
            ja="Intel GPU事業は「技術競争」から「資金調達の問題」に変質。2026年はNVIDIA対AMDの構図が鮮明化。"
            en="Intel's GPU business has shifted from 'technology competition' to 'funding problem.' 2026 sees a clear NVIDIA vs AMD dynamic."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: Intel公式ロードマップ / Tom's Hardware (2026-04)" en="Source: Intel official roadmap / Tom's Hardware (April 2026)" />
      </div>
    </div>
  );
}

export function AiChipEfficiencyParadoxDiagram() {
  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="GPU demand efficiency paradox - Jevons paradox in AI"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="効率化のパラドックス——GPU需要の天井はあるのか" en="The Efficiency Paradox — Is There a Ceiling on GPU Demand?" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="DeepSeek V3.2が提起した「コスト低下が需要を増やす」ジェボンズのパラドックス" en="DeepSeek V3.2 posed the Jevons paradox: 'lower costs increase total demand'" />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3.5 rounded-lg bg-red-500/[0.06] border border-red-500/20">
          <div className="text-[10px] font-bold text-red-400 mb-2">
            <T ja="需要減少論" en="Demand Decrease Thesis" />
          </div>
          <ul className="space-y-1.5">
            {[
              { ja: "効率化でGPU投資減少", en: "Efficiency reduces GPU investment" },
              { ja: "DeepSeekで同等タスクが激安に", en: "DeepSeek makes equivalent tasks far cheaper" },
              { ja: "NVIDIAへの需要圧力", en: "Demand pressure on NVIDIA" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-[10px] text-foreground/60">
                <span className="text-red-400 flex-shrink-0">▾</span>
                <T ja={item.ja} en={item.en} />
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20">
          <div className="text-[10px] font-bold text-emerald-400 mb-2">
            <T ja="需要増加論（優勢）" en="Demand Increase Thesis (Prevailing)" />
          </div>
          <ul className="space-y-1.5">
            {[
              { ja: "ジェボンズのパラドックス", en: "Jevons Paradox in action" },
              { ja: "コスト低下→活用範囲拡大", en: "Lower cost → expanded use cases" },
              { ja: "エージェントが推論需要を爆増", en: "Agents explode inference demand" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-[10px] text-foreground/60">
                <span className="text-emerald-400 flex-shrink-0">▴</span>
                <T ja={item.ja} en={item.en} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-foreground/[0.03] border border-foreground/[0.06]">
        <div className="text-[10px] font-semibold text-foreground/60 mb-1">
          <T ja="2026年現在の判断" en="Current Assessment (2026)" />
        </div>
        <div className="text-[11px] text-foreground/65">
          <T
            ja="2026年時点はジェボンズ的需要増が優勢。ただしこの議論はNVIDIAの株価・設備投資計画に直接影響するため、継続的に監視が必要。"
            en="As of 2026, Jevons-style demand increase is prevailing. However, this debate directly impacts NVIDIA stock price and capex plans, requiring ongoing monitoring."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: The Brief編集部分析 / Wall Street consensus (2026-04)" en="Source: The Brief editorial analysis / Wall Street consensus (April 2026)" />
      </div>
    </div>
  );
}

export function AiChipJapanMarketDiagram() {
  const investments = [
    { investor: "Microsoft Japan", amount: "100億ドル", amountEn: "$10B", period: "2026〜2029", focus: "Azure DC拡張・AI・セキュリティ", focusEn: "Azure DC expansion, AI, security", color: "#3b82f6" },
    { investor: "SoftBank", amount: "Eagle整備", amountEn: "Eagle build-out", period: "2025〜2026", focus: "NVIDIA AIスパコン国内設置", focusEn: "NVIDIA AI supercomputer in Japan", color: "#f59e0b" },
    { investor: "日本政府 (NEDO)", amount: "公的補助", amountEn: "Public subsidies", period: "2025〜2030", focus: "地方DC誘致・電力整備", focusEn: "Regional DC attraction, power infrastructure", color: "#10b981" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Japan AI infrastructure investment landscape"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本AIインフラ投資マップ 2026" en="Japan AI Infrastructure Investment Map 2026" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="市場規模55億ドル超（前年比+18%、3年前比7倍超）" en="Market size over $5.5B (+18% YoY, 7x vs 3 years ago)" />
      </div>

      <div className="space-y-3 mb-4">
        {investments.map((inv) => (
          <div
            key={inv.investor}
            className="p-3.5 rounded-lg"
            style={{ borderLeft: `3px solid ${inv.color}`, backgroundColor: `${inv.color}08` }}
          >
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <span className="text-[11px] font-bold text-foreground/80">{inv.investor}</span>
              <span className="text-[10px] font-bold" style={{ color: inv.color }}>
                <T ja={inv.amount} en={inv.amountEn} />
              </span>
            </div>
            <div className="text-[9px] text-foreground/40 mb-1">{inv.period}</div>
            <div className="text-[10px] text-foreground/60">
              <T ja={inv.focus} en={inv.focusEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="p-2.5 rounded bg-amber-500/[0.06] border border-amber-500/15 text-[10px] text-foreground/60">
        <T
          ja="次のボトルネック: 地方DC誘致で北海道・九州・沖縄が激化。電力インフラとの連携が課題。"
          en="Next bottleneck: Regional DC competition intensifying in Hokkaido, Kyushu, Okinawa. Power infrastructure linkage is the key challenge."
        />
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: IDC Japan / Microsoft Source Asia / SoftBank Group (2026)" en="Source: IDC Japan / Microsoft Source Asia / SoftBank Group (2026)" />
      </div>
    </div>
  );
}

export function AiChipOutlookDiagram() {
  const pressures = [
    { source: "AMD MI400", year: "2026 H2", impact: "HBM4メモリ432GB・帯域19.6TB/s", impactEn: "HBM4 432GB memory, 19.6TB/s bandwidth", color: "#f59e0b" },
    { source: "AWS Trainium2", year: "2026〜2027", impact: "自社推論チップで外部GPU依存減", impactEn: "Own inference chip reduces external GPU dependency", color: "#f97316" },
    { source: "Google TPU v5+", year: "2026〜2027", impact: "GeminiトレーニングのGPU代替加速", impactEn: "Accelerating GPU replacement for Gemini training", color: "#3b82f6" },
    { source: "Qualcomm DC AI", year: "2027+", impact: "データセンター向けArmアーキテクチャ参入", impactEn: "Arm-architecture entry into data center AI", color: "#8b5cf6" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="NVIDIA market share future outlook and competitive pressures"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="「ポスト独占」への圧力——2027〜28年に本格化" en="Pressure Toward 'Post-Monopoly' — Full Impact Expected 2027–28" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="NVIDIAシェアを三方向から侵食するプレイヤー" en="Players eroding NVIDIA's share from three directions" />
      </div>

      <div className="space-y-2.5 mb-4">
        {pressures.map((p) => (
          <div key={p.source} className="flex items-start gap-3 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[11px] font-bold" style={{ color: p.color }}>{p.source}</span>
                <span className="text-[8px] text-foreground/40">{p.year}</span>
              </div>
              <div className="text-[10px] text-foreground/55">
                <T ja={p.impact} en={p.impactEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[10px] font-semibold text-foreground/50 mb-2">
        <T ja="日本企業への示唆" en="Implications for Japanese Companies" />
      </div>
      <div className="space-y-2">
        {[
          { ja: "①NVIDIA一択から複数選択肢の評価へ（AMD MI350/AWS Trainium）", en: "① Move from NVIDIA-only to evaluating multiple options (AMD MI350, AWS Trainium)" },
          { ja: "②CUDAコードベースの依存を減らしROCm/XLA対応を視野に", en: "② Reduce CUDA codebase dependency and consider ROCm/XLA compatibility" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2 text-[10px] text-foreground/60 p-2 rounded bg-foreground/[0.02]">
            <T ja={item.ja} en={item.en} />
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: The Brief編集部分析 / siliconanalysts.com (2026-04)" en="Source: The Brief editorial analysis / siliconanalysts.com (April 2026)" />
      </div>
    </div>
  );
}
