"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   1. Japan5GCoverageMapDiagram
   ID: 5g-coverage-map
   5G人口カバー率の実態（NSA vs SA）
   ───────────────────────────────────────────── */
export function Japan5GCoverageMapDiagram() {
  const color = "#0ea5e9";
  const stats = [
    {
      value: "98.4%",
      label: "全国5G人口カバー率",
      labelEn: "National 5G Population Coverage",
      sub: "2024年度末（2025年3月末）総務省",
      subEn: "End of FY2024 (March 2025), MIC",
      color,
    },
    {
      value: "51%",
      label: "5G SA（スタンドアローン）比率",
      labelEn: "5G SA (Standalone) Ratio",
      sub: "15万5,721局 / 全5G基地局の半数強",
      subEn: "155,721 stations — just over half of all 5G",
      color: "#38bdf8",
    },
    {
      value: "88.4%",
      label: "最低都道府県（島根県）",
      labelEn: "Lowest Prefecture (Shimane)",
      sub: "最高は神奈川・大阪の99.9%",
      subEn: "Highest: Kanagawa & Osaka at 99.9%",
      color: "#7dd3fc",
    },
    {
      value: "1,741",
      label: "全市区町村に基地局設置完了",
      labelEn: "All municipalities with 5G base stations",
      sub: "日本全市区町村 整備達成",
      subEn: "Full national municipal coverage achieved",
      color: "#0284c7",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日本の5G人口カバー率と実態"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本の5G整備状況 2024年度末" en="Japan 5G Coverage Status — End of FY2024" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="人口カバー率98.4%の内訳と「NSAとSAの違い」"
          en="Breakdown of 98.4% coverage and the NSA vs SA distinction"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-lg border-l-[3px]"
            style={{ borderLeftColor: s.color, backgroundColor: `${s.color}10` }}
          >
            <div className="text-2xl sm:text-3xl font-bold tabular-nums" style={{ color: s.color }}>
              {s.value}
            </div>
            <div className="text-[11px] font-semibold mt-1.5 text-foreground/80">
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div className="text-[9px] text-foreground/45 mt-0.5 leading-relaxed">
              <T ja={s.sub} en={s.subEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-amber-500/[0.06] border border-amber-500/20">
        <div className="text-[10px] font-bold text-amber-600/80 dark:text-amber-400/80 mb-1">
          <T ja="NSAとSAの本質的な違い" en="The Key Difference: NSA vs SA" />
        </div>
        <div className="text-[11px] text-foreground/70 leading-relaxed">
          <T
            ja="NSA（ノンスタンドアローン）は既存4Gコアに5G無線を接続する方式。カバー率は高くなるが、超低遅延・ネットワークスライシングなどの5G固有能力は発揮されない。SA（スタンドアローン）方式のみが「真の5G」を実現できる。"
            en="NSA (Non-Standalone) attaches 5G radio to the existing 4G core — coverage improves, but 5G-specific capabilities like ultra-low latency and network slicing are unavailable. Only SA (Standalone) delivers 'real 5G.'"
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2. Japan5GAdoptionComparisonDiagram
   ID: 5g-adoption-comparison
   各国5G普及率・契約比率比較
   ───────────────────────────────────────────── */
export function Japan5GAdoptionComparisonDiagram() {
  const countries = [
    {
      name: "米国",
      nameEn: "USA",
      coverage: 77,
      contractRatio: 74,
      note: "T-Mobile SA中心展開で先行",
      noteEn: "T-Mobile leads with SA-first strategy",
      color: "#3b82f6",
    },
    {
      name: "韓国",
      nameEn: "South Korea",
      coverage: 96,
      contractRatio: 60,
      note: "世界初商用化も「失望」先行",
      noteEn: "World-first launch, but user disappointment followed",
      color: "#f59e0b",
    },
    {
      name: "中国",
      nameEn: "China",
      coverage: 99,
      contractRatio: 65,
      note: "政府主導で産業利用も同時推進",
      noteEn: "State-driven industrial + consumer 5G in parallel",
      color: "#ef4444",
    },
    {
      name: "日本",
      nameEn: "Japan",
      coverage: 98.4,
      contractRatio: 45,
      note: "カバー率高いが実利用は低調",
      noteEn: "High coverage, low real-world utilization",
      color: "#0ea5e9",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="各国5G普及率比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="各国5G比較 2025年" en="International 5G Comparison — 2025" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="人口カバー率 vs 実質的な5G契約・利用比率"
          en="Population coverage vs. actual 5G subscription and usage ratio"
        />
      </div>

      <div className="space-y-4">
        {countries.map((c) => (
          <div key={c.name} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="text-[12px] font-semibold text-foreground/80">
                  <T ja={c.name} en={c.nameEn} />
                </span>
              </div>
              <span className="text-[10px] text-foreground/40">
                <T ja={c.note} en={c.noteEn} />
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-foreground/40 w-20 text-right">
                  <T ja="カバー率" en="Coverage" />
                </span>
                <div className="flex-1 h-2 bg-foreground/[0.05] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${c.coverage}%`, backgroundColor: `${c.color}80` }}
                  />
                </div>
                <span className="text-[10px] tabular-nums font-bold w-12" style={{ color: c.color }}>
                  {c.coverage}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-foreground/40 w-20 text-right">
                  <T ja="契約比率" en="Contract %" />
                </span>
                <div className="flex-1 h-2 bg-foreground/[0.05] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${c.contractRatio}%`, backgroundColor: c.color }}
                  />
                </div>
                <span className="text-[10px] tabular-nums font-bold w-12" style={{ color: c.color }}>
                  {c.contractRatio}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/30 text-right">
        <T
          ja="出典：エリクソン・Opensignal・各社発表資料・推計値を含む（2025年）"
          en="Sources: Ericsson, Opensignal, carrier disclosures, estimates (2025)"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   3. Japan5GCarriersDiagram
   ID: 5g-carriers
   キャリア別5G基地局数・戦略比較
   ───────────────────────────────────────────── */
export function Japan5GCarriersDiagram() {
  const carriers = [
    {
      name: "KDDI（au）",
      nameEn: "KDDI (au)",
      stations: 110037,
      pct: 100,
      color: "#f59e0b",
      strategy: "SA移行先行・ネットワークスライシング商用化",
      strategyEn: "SA migration leader, commercial network slicing",
    },
    {
      name: "ソフトバンク",
      nameEn: "SoftBank",
      stations: 104441,
      pct: 94.9,
      color: "#ef4444",
      strategy: "都市部SA集中・ミリ波展開",
      strategyEn: "Urban SA focus, mmWave deployment",
    },
    {
      name: "NTTドコモ",
      nameEn: "NTT Docomo",
      stations: 52532,
      pct: 47.7,
      color: "#0ea5e9",
      strategy: "2025〜26年度に急ピッチで拡充計画中",
      strategyEn: "Rapid expansion plan for FY2025-26",
    },
    {
      name: "楽天モバイル",
      nameEn: "Rakuten Mobile",
      stations: 35108,
      pct: 31.9,
      color: "#8b5cf6",
      strategy: "ミリ波特化・特定高密度エリア戦略",
      strategyEn: "mmWave-focused, specific high-density venues",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="キャリア別5G基地局数比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="キャリア別5G基地局数（2025年3月末）" en="5G Base Stations by Carrier — March 2025" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="総務省データ。KDDIが約11万局でトップ、ドコモは大幅に少ない"
          en="MIC data. KDDI leads with ~110K stations; Docomo significantly trails"
        />
      </div>

      <div className="space-y-3">
        {carriers.map((c) => (
          <div key={c.name} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-foreground/80">
                <T ja={c.name} en={c.nameEn} />
              </span>
              <span className="text-[12px] tabular-nums font-bold" style={{ color: c.color }}>
                {c.stations.toLocaleString()}<T ja="局" en=" stations" />
              </span>
            </div>
            <div className="h-2.5 bg-foreground/[0.05] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${c.pct}%`, backgroundColor: c.color }}
              />
            </div>
            <div className="text-[9px] text-foreground/40">
              <T ja={c.strategy} en={c.strategyEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#0ea5e9]/[0.05] border border-[#0ea5e9]/15">
        <div className="text-[10px] font-bold text-[#0ea5e9]/80 mb-1">
          <T ja="全体の5G基地局数" en="Total 5G Base Stations" />
        </div>
        <div className="text-[11px] text-foreground/70">
          <T
            ja="4社合計30万2,118局（全携帯基地局113万6,592局の26.6%）。SA対応は15万5,721局（5G全体の51%）。"
            en="Total 302,118 stations across 4 carriers (26.6% of all 1.136M mobile base stations). SA-capable: 155,721 stations (51% of all 5G)."
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   4. Japan5GIndustrialUseDiagram
   ID: 5g-industrial-use
   5G産業利用の実態（実証 vs 本番）
   ───────────────────────────────────────────── */
export function Japan5GIndustrialUseDiagram() {
  const sectors = [
    {
      name: "スマート工場",
      nameEn: "Smart Factory",
      stage: "一部本番",
      stageEn: "Partial production",
      stageColor: "#f59e0b",
      example: "大阪港コンテナターミナル — 年2,700万円削減効果",
      exampleEn: "Osaka Port terminal — est. ¥27M annual cost savings",
      barrier: "初期投資額（数千万〜億円）・専門人材不足",
      barrierEn: "High upfront cost (tens of millions to billions JPY), talent shortage",
    },
    {
      name: "遠隔医療",
      nameEn: "Remote Healthcare",
      stage: "実証段階",
      stageEn: "Pilot stage",
      stageColor: "#ef4444",
      example: "脳神経外科スマート治療室・へき地内視鏡遠隔指示",
      exampleEn: "Neurosurgery smart OR, remote endoscopy guidance in rural areas",
      barrier: "医師法・保険適用制度・医療機関IT人材不足",
      barrierEn: "Medical Practice Act, insurance coverage, hospital IT talent gap",
    },
    {
      name: "自動運転支援",
      nameEn: "Autonomous Driving",
      stage: "実証段階",
      stageEn: "Pilot stage",
      stageColor: "#ef4444",
      example: "C-V2X実証。公道商用化はレベル4解禁後（2027〜28年以降）",
      exampleEn: "C-V2X pilots only. Public road commercialization awaits Level 4 legalization (2027+)",
      barrier: "道路交通法・インフラ整備コスト・通信遅延要件",
      barrierEn: "Road Traffic Act, infrastructure costs, latency requirements",
    },
    {
      name: "スマートスタジアム",
      nameEn: "Smart Stadium",
      stage: "本番運用",
      stageEn: "Live production",
      stageColor: "#22c55e",
      example: "KDDI — 国立競技場でネットワークスライシング商用利用",
      exampleEn: "KDDI — commercial network slicing at National Olympic Stadium",
      barrier: "スケールアウト困難（会場限定）",
      barrierEn: "Limited scalability (venue-specific)",
    },
    {
      name: "ローカル5G（物流）",
      nameEn: "Local 5G (Logistics)",
      stage: "一部本番",
      stageEn: "Partial production",
      stageColor: "#f59e0b",
      example: "港湾・倉庫の無人搬送・映像監視に活用",
      exampleEn: "Unmanned transport and video monitoring at ports and warehouses",
      barrier: "基地局設置・周波数取得の手続きコスト",
      barrierEn: "Installation and spectrum licensing overhead",
    },
  ];

  const stageColors: Record<string, string> = {
    "本番運用": "#22c55e",
    "一部本番": "#f59e0b",
    "実証段階": "#ef4444",
    "Live production": "#22c55e",
    "Partial production": "#f59e0b",
    "Pilot stage": "#ef4444",
  };

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="5G産業利用の実態"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="5G産業利用の実態（2026年4月時点）" en="Industrial 5G Status — April 2026" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="「実証実験」と「本番稼働」のギャップを分野別に整理"
          en="Field-by-field breakdown of the gap between pilots and live production"
        />
      </div>

      <div className="space-y-3">
        {sectors.map((s) => (
          <div
            key={s.name}
            className="p-3 rounded-lg border border-foreground/[0.05] bg-foreground/[0.01]"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[12px] font-semibold text-foreground/80">
                <T ja={s.name} en={s.nameEn} />
              </span>
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  color: s.stageColor,
                  backgroundColor: `${s.stageColor}20`,
                }}
              >
                <T ja={s.stage} en={s.stageEn} />
              </span>
            </div>
            <div className="text-[10px] text-foreground/60 mb-1">
              <T ja={s.example} en={s.exampleEn} />
            </div>
            <div className="text-[9px] text-foreground/35">
              <T ja={`障壁: ${s.barrier}`} en={`Barrier: ${s.barrierEn}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-3 text-[9px] text-foreground/40">
        {[
          { label: "本番運用", labelEn: "Live", color: "#22c55e" },
          { label: "一部本番", labelEn: "Partial", color: "#f59e0b" },
          { label: "実証段階", labelEn: "Pilot", color: "#ef4444" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
            <T ja={l.label} en={l.labelEn} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   5. Japan5GRevenueDiagram
   ID: 5g-revenue
   キャリア収益・ARPU比較
   ───────────────────────────────────────────── */
export function Japan5GRevenueDiagram() {
  const color = "#0ea5e9";

  const carriers = [
    {
      name: "NTTドコモ",
      nameEn: "NTT Docomo",
      arpu: "¥5,250〜5,850",
      arpuNote: "最高水準",
      arpuNoteEn: "Highest tier",
      color: "#0ea5e9",
      bar: 100,
    },
    {
      name: "KDDI（au）",
      nameEn: "KDDI (au)",
      arpu: "¥4,500〜5,200",
      arpuNote: "中〜高水準",
      arpuNoteEn: "Mid-to-high tier",
      color: "#f59e0b",
      bar: 87,
    },
    {
      name: "ソフトバンク",
      nameEn: "SoftBank",
      arpu: "¥4,200〜4,800",
      arpuNote: "中水準",
      arpuNoteEn: "Mid tier",
      color: "#ef4444",
      bar: 76,
    },
    {
      name: "楽天モバイル",
      nameEn: "Rakuten Mobile",
      arpu: "¥2,250〜2,700",
      arpuNote: "低水準（赤字継続）",
      arpuNoteEn: "Low tier (ongoing losses)",
      color: "#8b5cf6",
      bar: 43,
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="キャリア別ARPU比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="キャリア別ARPU（月間平均売上/ユーザー）" en="Carrier ARPU Comparison (Monthly Average Revenue per User)" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="5G移行後もARPUの構造的上昇は起きていない"
          en="Structural ARPU growth has not materialized despite 5G migration"
        />
      </div>

      <div className="space-y-3 mb-5">
        {carriers.map((c) => (
          <div key={c.name} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-foreground/80">
                <T ja={c.name} en={c.nameEn} />
              </span>
              <div className="text-right">
                <span className="text-[12px] tabular-nums font-bold" style={{ color: c.color }}>
                  {c.arpu}
                </span>
                <span className="text-[9px] text-foreground/40 ml-1">
                  <T ja={c.arpuNote} en={c.arpuNoteEn} />
                </span>
              </div>
            </div>
            <div className="h-2 bg-foreground/[0.05] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${c.bar}%`, backgroundColor: c.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-3 rounded-lg border-l-[3px]"
          style={{ borderLeftColor: color, backgroundColor: `${color}10` }}
        >
          <div className="text-[10px] font-bold mb-1" style={{ color }}>
            <T ja="5G収益化の問題" en="The 5G Revenue Problem" />
          </div>
          <div className="text-[10px] text-foreground/65 leading-relaxed">
            <T
              ja="5G端末普及で自動的に5G加入者は増加。しかし料金プランは4G同等水準のまま、5G固有の付加価値サービスへの課金は成立していない。"
              en="5G subscribers grow automatically with device upgrades, but plan pricing matches 4G, and 5G-exclusive value services haven't generated incremental revenue."
            />
          </div>
        </div>
        <div
          className="p-3 rounded-lg border-l-[3px]"
          style={{ borderLeftColor: "#f59e0b", backgroundColor: "#f59e0b10" }}
        >
          <div className="text-[10px] font-bold mb-1" style={{ color: "#f59e0b" }}>
            <T ja="5G投資の重さ" en="The Weight of 5G Capex" />
          </div>
          <div className="text-[10px] text-foreground/65 leading-relaxed">
            <T
              ja="2027年度の5G基地局数は約46万局（予測）。5G投資はピークを過ぎ2027年度に約4,400億円へ収束見込みだが、収益化が追いつかない。"
              en="FY2027 5G base station count projected ~460K. 5G capex expected to peak and converge to ~¥440B in FY2027, but revenue generation isn't keeping pace."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   6. Japan5GFutureDiagram
   ID: 5g-future
   5G→SAへの移行ロードマップ・6Gへの布石
   ───────────────────────────────────────────── */
export function Japan5GFutureDiagram() {
  const color = "#0ea5e9";

  const milestones = [
    {
      year: "2025",
      title: "5G SA本格展開",
      titleEn: "5G SA Full Rollout",
      desc: "KDDI・ソフトバンクがSA人口カバー率90%超を目標。ネットワークスライシング商用化拡大。",
      descEn: "KDDI & SoftBank target 90%+ SA population coverage. Commercial network slicing expands.",
      status: "進行中",
      statusEn: "Ongoing",
      color: "#0ea5e9",
    },
    {
      year: "2026",
      title: "ドコモSA急拡充・産業利用加速",
      titleEn: "Docomo SA Acceleration & Industrial 5G Growth",
      desc: "ドコモが5G SA展開を急ピッチで追上げ。改正道交法によるレベル4自動運転実用化が5G産業利用のトリガーに。",
      descEn: "Docomo rapidly catches up on 5G SA. Revised road traffic law enabling Level 4 autonomy triggers industrial 5G.",
      status: "目標",
      statusEn: "Target",
      color: "#38bdf8",
    },
    {
      year: "2027〜28",
      title: "5G産業利用の本番化",
      titleEn: "Industrial 5G Goes Live at Scale",
      desc: "スマート工場・遠隔医療の本番稼働が加速。ローカル5G普及によるBtoB収益貢献が本格化。",
      descEn: "Smart factory and remote healthcare deployments scale up. Local 5G drives BtoB revenue contribution.",
      status: "期待",
      statusEn: "Expected",
      color: "#7dd3fc",
    },
    {
      year: "2030年代",
      title: "6G商用化・IOWN統合",
      titleEn: "6G Commercial Launch & IOWN Integration",
      desc: "NTT IOWN構想を軸に6G国際標準形成へ。5Gでの失敗を教訓に「ユースケース・ファースト」の開発が試される。",
      descEn: "6G international standards shaped around NTT IOWN vision. 'Use-case-first' development tested, informed by 5G lessons.",
      status: "構想",
      statusEn: "Vision",
      color: "#0284c7",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="5G今後の展望と6Gへのロードマップ"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="5G→6G ロードマップ（2025〜2030年代）" en="5G to 6G Roadmap — 2025 Through the 2030s" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="SA移行・産業利用本番化・6G構想の三段階で「幻のインフラ」を脱却できるか"
          en="Can Japan escape the 'phantom infrastructure' trap through SA migration, industrial scale-up, and 6G vision?"
        />
      </div>

      <div className="space-y-3">
        {milestones.map((m, i) => (
          <div key={m.year} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                style={{ backgroundColor: m.color }}
              >
                {i + 1}
              </div>
              {i < milestones.length - 1 && (
                <div className="w-px flex-1 mt-1" style={{ backgroundColor: `${m.color}30` }} />
              )}
            </div>
            <div className="pb-4 flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] tabular-nums font-bold" style={{ color: m.color }}>
                  {m.year}
                </span>
                <span
                  className="text-[8px] px-1.5 py-0.5 rounded-full font-bold"
                  style={{ color: m.color, backgroundColor: `${m.color}20` }}
                >
                  <T ja={m.status} en={m.statusEn} />
                </span>
              </div>
              <div className="text-[12px] font-semibold text-foreground/80 mb-0.5">
                <T ja={m.title} en={m.titleEn} />
              </div>
              <div className="text-[10px] text-foreground/55 leading-relaxed">
                <T ja={m.desc} en={m.descEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 p-3 rounded-lg bg-[#0ea5e9]/[0.05] border border-[#0ea5e9]/15">
        <div className="text-[10px] font-bold text-[#0ea5e9]/80 mb-1">
          <T ja="鍵を握る三つの変数" en="Three Variables That Determine Success" />
        </div>
        <div className="text-[10px] text-foreground/70 leading-relaxed">
          <T
            ja="① コンテンツエコシステムの再構築（5G専用体験の創出）　② 産業利用の制度改革（医療・交通・物流）　③ BtoB収益モデルの確立（ネットワークスライシング・ローカル5G）"
            en="① Rebuild content ecosystem (create 5G-exclusive experiences) ② Regulatory reform for industrial use (healthcare, transport, logistics) ③ Establish BtoB revenue models (network slicing, local 5G)"
          />
        </div>
      </div>
    </div>
  );
}
