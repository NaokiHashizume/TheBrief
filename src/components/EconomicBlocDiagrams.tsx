"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Bloc Overview Diagram
   ───────────────────────────────────────────── */
export function BlocOverviewDiagram() {
  const blocs = [
    { name: "米国圏", nameLocalEn: "US-led bloc", nameEn: "US-led", color: "#3b82f6", members: "米・日・豪・加・英・EU", membersEn: "US, Japan, Australia, Canada, UK, EU", focus: "安全保障同盟 + CHIPS法", focusEn: "Security alliances + CHIPS Act", gdpShare: "~40%" },
    { name: "中国圏", nameLocalEn: "China-led bloc", nameEn: "China-led", color: "#ef4444", members: "中・ASEAN・一帯一路", membersEn: "China, ASEAN, Belt and Road partners", focus: "RCEP + 一帯一路", focusEn: "RCEP + Belt and Road", gdpShare: "~25%" },
    { name: "EU圏", nameLocalEn: "EU bloc", nameEn: "EU", color: "#f59e0b", members: "EU27カ国", membersEn: "27 EU member states", focus: "規制主導 + CBAM", focusEn: "Regulation-led + CBAM", gdpShare: "~15%" },
    { name: "グローバルサウス", nameLocalEn: "Global South", nameEn: "Global South", color: "#10b981", members: "BRICS 11カ国+", membersEn: "BRICS 11 countries+", focus: "脱ドル化 + 資源", focusEn: "De-dollarization + resources", gdpShare: "~40% (PPP)" },
  ];

  return (
    <div role="img" aria-label="Economic bloc overview and GDP shares" className="my-6 grid grid-cols-2 gap-3">
      {blocs.map((b) => (
        <div
          key={b.name}
          className="p-3 rounded-xl border border-brief-border bg-brief-card"
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: b.color }}
            />
            <div className="text-sm font-bold" style={{ color: b.color }}>
              <T ja={b.name} en={b.nameLocalEn} />
            </div>
          </div>
          <div className="text-[10px] text-foreground/50 mb-1"><T ja={b.members} en={b.membersEn} /></div>
          <div className="text-[10px] text-foreground/60 font-medium"><T ja={b.focus} en={b.focusEn} /></div>
          <div className="mt-2 text-xs font-bold tabular-nums" style={{ color: b.color }}>
            GDP {b.gdpShare}
          </div>
        </div>
      ))}
      <div className="col-span-2 mt-1 p-3 rounded-xl border border-dashed border-[#8b5cf6]/30 bg-[#8b5cf6]/5 text-center">
        <div className="text-xs font-bold text-[#8b5cf6]"><T ja="日本の立ち位置" en="Japan's positioning" /></div>
        <div className="text-[10px] text-foreground/55 mt-1">
          <T ja="米国同盟 × RCEP × CPTPP × EU EPA — 全ブロックと接点を持つ唯一のG7メンバー" en="US alliance × RCEP × CPTPP × EU EPA — the only G7 member touching every bloc" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Tariff Timeline Diagram
   ───────────────────────────────────────────── */
export function TariffTimelineDiagram() {
  const events = [
    { date: "2025.04", label: "IEEPA相互関税発動", labelEn: "IEEPA reciprocal tariffs imposed", detail: "日本24% / 中国125%", detailEn: "Japan 24% / China 125%", color: "#ef4444" },
    { date: "2025.05", label: "米中休戦合意", labelEn: "US–China truce reached", detail: "双方10%に引下げ", detailEn: "Both sides cut to 10%", color: "#f59e0b" },
    { date: "2025.07", label: "日米枠組み合意", labelEn: "US–Japan framework deal", detail: "日本→15% / 投資5,500億ドル", detailEn: "Japan to 15% / $550B investment", color: "#3b82f6" },
    { date: "2026.02", label: "最高裁違憲判決", labelEn: "Supreme Court ruling: unconstitutional", detail: "IEEPA関税は無効（6対3）", detailEn: "IEEPA tariffs struck down (6–3)", color: "#ef4444" },
    { date: "2026.02", label: "セクション122発動", labelEn: "Section 122 invoked", detail: "全輸入品に一律10%", detailEn: "Flat 10% on all imports", color: "#f97316" },
    { date: "2026.07", label: "セクション122失効予定", labelEn: "Section 122 sunset", detail: "150日ルール（最大15%）", detailEn: "150-day rule (max 15%)", color: "#64748b" },
  ];

  return (
    <div role="img" aria-label="US tariff policy timeline 2025–2026" className="my-6 relative">
      <div className="absolute left-[52px] top-0 bottom-0 w-px bg-brief-border" />
      <div className="space-y-3">
        {events.map((e, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-[44px] text-[10px] tabular-nums text-foreground/50 text-right flex-shrink-0 pt-0.5">
              {e.date}
            </div>
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 border-2 border-background relative z-10"
              style={{ backgroundColor: e.color }}
            />
            <div className="min-w-0">
              <div className="text-xs font-bold" style={{ color: e.color }}>
                <T ja={e.label} en={e.labelEn} />
              </div>
              <div className="text-[10px] text-foreground/55"><T ja={e.detail} en={e.detailEn} /></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div className="text-[10px] font-bold text-foreground/60 mb-1"><T ja="米国の実効関税率（加重平均）" en="US effective tariff rate (weighted average)" /></div>
        <div className="flex items-center gap-4 text-[10px]">
          <span className="text-foreground/50"><T ja="2024年" en="2024" />: <span className="font-bold text-foreground/70">2.4%</span></span>
          <span className="text-foreground/50">→ <T ja="現在" en="now" />: <span className="font-bold text-[#f97316]">10.2%</span></span>
          <span className="text-foreground/50">→ <T ja="7月以降" en="from July" />: <span className="font-bold text-foreground/70">6.7%</span></span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   US-China Decoupling Diagram
   ───────────────────────────────────────────── */
export function USChinaDecouplingDiagram() {
  const items = [
    { category: "対中関税（実効）", categoryEn: "Tariffs on China (effective)", us: "33.9%（加重平均）", usEn: "33.9% (weighted avg)", cn: "31.9%", cnEn: "31.9%", severity: 4 },
    { category: "AIチップ輸出", categoryEn: "AI chip exports", us: "ケースバイケース審査", usEn: "Case-by-case review", cn: "輸入許可不透明", cnEn: "Import permissions opaque", severity: 5 },
    { category: "CHIPS法補助", categoryEn: "CHIPS Act subsidies", us: "Intel $78.6億 / TSMC 大規模", usEn: "Intel $7.86B / large TSMC awards", cn: "対抗補助", cnEn: "Counter-subsidies", severity: 3 },
    { category: "休戦合意", categoryEn: "Truce agreement", us: "2026年11月まで延長", usEn: "Extended to Nov 2026", cn: "10%相互引下げ", cnEn: "Mutual 10% cut", severity: 2 },
    { category: "密輸摘発", categoryEn: "Smuggling crackdowns", us: "H100/H200 $1.6億相当", usEn: "$160M in H100/H200", cn: "ネットワーク解体", cnEn: "Smuggling networks dismantled", severity: 5 },
  ];

  return (
    <div role="img" aria-label="US–China decoupling indicators" className="my-6 rounded-xl border border-brief-border bg-brief-card overflow-hidden">
      <div className="px-4 py-2 bg-foreground/[0.03] border-b border-brief-border">
        <div className="text-[10px] font-bold text-foreground/60 tracking-wider uppercase">
          <T ja="米中デカップリング指標(2026年4月)" en="US–China decoupling indicators (Apr 2026)" />
        </div>
      </div>
      <div className="divide-y divide-brief-border">
        {items.map((item, i) => (
          <div key={i} className="px-4 py-2.5 flex items-center gap-3">
            <div className="w-[100px] sm:w-[130px] flex-shrink-0">
              <div className="text-[11px] font-bold text-foreground/70"><T ja={item.category} en={item.categoryEn} /></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-foreground/55">
                <span className="text-[#3b82f6] font-medium"><T ja="米: " en="US: " /></span><T ja={item.us} en={item.usEn} />
              </div>
              <div className="text-[10px] text-foreground/55">
                <span className="text-[#ef4444] font-medium"><T ja="中: " en="CN: " /></span><T ja={item.cn} en={item.cnEn} />
              </div>
            </div>
            <div className="flex gap-0.5 flex-shrink-0">
              {Array.from({ length: 5 }, (_, j) => (
                <div
                  key={j}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: j < item.severity ? "#ef4444" : "var(--border-color)",
                    opacity: j < item.severity ? 0.7 : 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Semiconductor Race Diagram
   ───────────────────────────────────────────── */
export function SemiconductorRaceDiagram() {
  const companies = [
    { name: "TSMC", node: "2nm (N2)", status: "量産中", statusEn: "In mass production", fabs: "台湾 / アリゾナ / 熊本", fabsEn: "Taiwan / Arizona / Kumamoto", color: "#3b82f6", progress: 95 },
    { name: "Samsung", node: "2nm GAA", status: "量産中", statusEn: "In mass production", fabs: "平澤 / テイラーTX", fabsEn: "Pyeongtaek / Taylor TX", color: "#8b5cf6", progress: 85 },
    { name: "Intel", node: "18A (1.8nm)", status: "HVM開始", statusEn: "HVM started", fabs: "チャンドラーAZ / オハイオ", fabsEn: "Chandler AZ / Ohio", color: "#0ea5e9", progress: 80 },
    { name: "Rapidus", node: "2nm GAA", status: "パイロット", statusEn: "Pilot line", fabs: "千歳（北海道）", fabsEn: "Chitose, Hokkaido", color: "#ef4444", progress: 50 },
  ];

  return (
    <div role="img" aria-label="Leading-edge semiconductor foundry race" className="my-6 space-y-3">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-2">
        <T ja="先端半導体ファウンドリ競争(2026年4月)" en="Leading-edge foundry race (Apr 2026)" />
      </div>
      {companies.map((c) => (
        <div key={c.name} className="p-3 rounded-xl border border-brief-border bg-brief-card">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-sm font-bold" style={{ color: c.color }}>{c.name}</span>
              <span className="text-[10px] text-foreground/50 ml-2">{c.node}</span>
            </div>
            <span
              className="text-[9px] font-medium px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${c.color}15`, color: c.color }}
            >
              <T ja={c.status} en={c.statusEn} />
            </span>
          </div>
          <div className="h-2 rounded-full bg-foreground/[0.06] overflow-hidden mb-1.5">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${c.progress}%`, backgroundColor: c.color, opacity: 0.6 }}
            />
          </div>
          <div className="text-[10px] text-foreground/50"><T ja={c.fabs} en={c.fabsEn} /></div>
        </div>
      ))}
      <div className="p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div className="text-[10px] text-foreground/55">
          <span className="font-bold"><T ja="日本の半導体補助金:" en="Japan semiconductor subsidies:" /></span>{" "}
          <T ja="2022年以降累計" en="cumulative since 2022:" />{" "}
          <span className="font-bold text-[#ef4444]"><T ja="257億ドル" en="$25.7B" /></span>
          <T ja="（GDP比で世界最大）" en=" (largest relative to GDP worldwide)" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Trade Blocs Comparison Diagram
   ───────────────────────────────────────────── */
export function TradeBlocsDiagram() {
  const blocs = [
    {
      name: "CPTPP",
      members: 12,
      population: "5.8億人",
      populationEn: "580M",
      gdp: "$14.8兆",
      gdpEn: "$14.8T",
      color: "#3b82f6",
      highlights: [
        { ja: "英国加盟済", en: "UK has acceded" },
        { ja: "コスタリカ・ウルグアイ交渉中", en: "Costa Rica and Uruguay negotiating" },
        { ja: "UAE・比・尼 2026年開始予定", en: "UAE, Philippines, Indonesia slated to begin 2026" },
      ],
      pending: "中国・ウクライナ申請中",
      pendingEn: "China and Ukraine pending",
    },
    {
      name: "RCEP",
      members: 15,
      population: "22億人",
      populationEn: "2.2B",
      gdp: "$29.7兆",
      gdpEn: "$29.7T",
      color: "#ef4444",
      highlights: [
        { ja: "世界GDP 30%", en: "30% of world GDP" },
        { ja: "域内貿易 2026年 $10兆突破見込み", en: "Intra-bloc trade to top $10T in 2026" },
        { ja: "ASEAN+日中韓豪NZ", en: "ASEAN + Japan, China, Korea, Australia, NZ" },
      ],
      pending: "インド不参加",
      pendingEn: "India has not joined",
    },
  ];

  return (
    <div role="img" aria-label="CPTPP and RCEP trade blocs comparison" className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {blocs.map((b) => (
        <div key={b.name} className="p-4 rounded-xl border border-brief-border bg-brief-card">
          <div className="text-lg font-bold mb-2" style={{ color: b.color }}>{b.name}</div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div>
              <div className="text-lg font-bold tabular-nums">{b.members}</div>
              <div className="text-[9px] text-foreground/45"><T ja="加盟国" en="Members" /></div>
            </div>
            <div>
              <div className="text-xs font-bold tabular-nums"><T ja={b.population} en={b.populationEn} /></div>
              <div className="text-[9px] text-foreground/45"><T ja="人口" en="Population" /></div>
            </div>
            <div>
              <div className="text-xs font-bold tabular-nums"><T ja={b.gdp} en={b.gdpEn} /></div>
              <div className="text-[9px] text-foreground/45">GDP</div>
            </div>
          </div>
          <div className="space-y-1">
            {b.highlights.map((h, i) => (
              <div key={i} className="text-[10px] text-foreground/55">
                <span className="font-medium" style={{ color: b.color }}>•</span> <T ja={h.ja} en={h.en} />
              </div>
            ))}
          </div>
          <div className="mt-2 text-[10px] text-foreground/45 italic"><T ja={b.pending} en={b.pendingEn} /></div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   EU + BRICS Diagram
   ───────────────────────────────────────────── */
export function EuBricsDiagram() {
  return (
    <div role="img" aria-label="EU carbon border adjustment and BRICS bloc overview" className="my-6 space-y-3">
      {/* EU CBAM */}
      <div className="p-4 rounded-xl border border-brief-border bg-brief-card">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
          <div className="text-sm font-bold text-[#f59e0b]"><T ja="EU CBAM(炭素国境調整)" en="EU CBAM (carbon border adjustment)" /></div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-2">
          <div>
            <div className="text-xs font-bold"><T ja="2026年1月" en="Jan 2026" /></div>
            <div className="text-[9px] text-foreground/45"><T ja="本格施行" en="Full enforcement" /></div>
          </div>
          <div>
            <div className="text-xs font-bold">12,000+</div>
            <div className="text-[9px] text-foreground/45"><T ja="認可申請" en="Authorization filings" /></div>
          </div>
          <div>
            <div className="text-xs font-bold"><T ja="6品目" en="6 categories" /></div>
            <div className="text-[9px] text-foreground/45"><T ja="対象カテゴリ" en="Covered" /></div>
          </div>
        </div>
        <div className="text-[10px] text-foreground/50">
          <T ja="対象: セメント / 鉄鋼 / アルミ / 肥料 / 電力 / 水素" en="Covered: cement / steel / aluminum / fertilizer / electricity / hydrogen" />
        </div>
      </div>

      {/* BRICS */}
      <div className="p-4 rounded-xl border border-brief-border bg-brief-card">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-[#10b981]" />
          <div className="text-sm font-bold text-[#10b981]"><T ja="BRICS(2026年4月時点)" en="BRICS (as of Apr 2026)" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
          <div>
            <div className="text-xs font-bold"><T ja="11カ国" en="11 countries" /></div>
            <div className="text-[9px] text-foreground/45"><T ja="正式メンバー" en="Full members" /></div>
          </div>
          <div>
            <div className="text-xs font-bold"><T ja="10カ国+" en="10+ countries" /></div>
            <div className="text-[9px] text-foreground/45"><T ja="パートナー" en="Partners" /></div>
          </div>
          <div>
            <div className="text-xs font-bold">~48.5%</div>
            <div className="text-[9px] text-foreground/45"><T ja="世界人口" en="World population" /></div>
          </div>
          <div>
            <div className="text-xs font-bold">40%+</div>
            <div className="text-[9px] text-foreground/45"><T ja="世界GDP (PPP)" en="World GDP (PPP)" /></div>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
          <div className="text-[10px] font-bold text-[#10b981] mb-1"><T ja="脱ドル化の進捗" en="De-dollarization progress" /></div>
          <div className="text-[10px] text-foreground/55">
            <T ja="域内貿易の65%が現地通貨決済（2024年）。BRICS Unit（金40%＋通貨バスケット60%）パイロット開始。統一通貨は2030年以降が現実的。" en="65% of intra-bloc trade settled in local currencies (2024). BRICS Unit pilot (40% gold + 60% currency basket) underway. A common currency is realistic only after 2030." />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Japan Strategy Diagram
   ───────────────────────────────────────────── */
export function JapanStrategyDiagram() {
  const pillars = [
    { label: "経済安全保障推進法", labelEn: "Economic Security Promotion Act", detail: "サプライチェーン / 基幹インフラ / 先端技術 / 特許非公開", detailEn: "Supply chains / critical infrastructure / advanced tech / classified patents", icon: "🛡" },
    { label: "半導体国家戦略", labelEn: "National semiconductor strategy", detail: "Rapidus（2nm）/ TSMC熊本（3nm〜）/ キオクシア（NAND）", detailEn: "Rapidus (2nm) / TSMC Kumamoto (3nm and below) / Kioxia (NAND)", icon: "⚡" },
    { label: "多層的FTA網", labelEn: "Multilayered FTA network", detail: "CPTPP + RCEP + EU EPA + 日米枠組み合意", detailEn: "CPTPP + RCEP + EU EPA + US–Japan framework deal", icon: "🌐" },
    { label: "フレンドショアリング", labelEn: "Friend-shoring", detail: "チャイナ+1 / ASEAN生産拡大 / リスク分散", detailEn: "China+1 / expanded ASEAN production / risk diversification", icon: "🤝" },
  ];

  return (
    <div role="img" aria-label="Japan economic security strategy four pillars" className="my-6">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-3">
        <T ja="日本の経済安全保障 4本柱" en="Japan's four pillars of economic security" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pillars.map((p, i) => (
          <div key={i} className="p-3 rounded-xl border border-brief-border bg-brief-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">{p.icon}</span>
              <div className="text-xs font-bold text-[#8b5cf6]"><T ja={p.label} en={p.labelEn} /></div>
            </div>
            <div className="text-[10px] text-foreground/55 leading-relaxed"><T ja={p.detail} en={p.detailEn} /></div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div className="text-[10px] text-foreground/55">
          <span className="font-bold"><T ja="2026年後半の注目点:" en="What to watch in H2 2026:" /></span>{" "}
          <T ja="①セクション122失効（7/24） ②CPTPP新規加盟交渉 ③BRICS首脳会議（8〜9月）" en="(1) Section 122 sunset (7/24); (2) new CPTPP accession talks; (3) BRICS summit (Aug–Sep)" />
        </div>
      </div>
    </div>
  );
}
