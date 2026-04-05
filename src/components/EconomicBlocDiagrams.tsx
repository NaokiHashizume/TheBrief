"use client";

/* ─────────────────────────────────────────────
   Bloc Overview Diagram
   ───────────────────────────────────────────── */
export function BlocOverviewDiagram() {
  const blocs = [
    { name: "米国圏", nameEn: "US-led", color: "#3b82f6", members: "米・日・豪・加・英・EU", focus: "安全保障同盟 + CHIPS法", gdpShare: "~40%" },
    { name: "中国圏", nameEn: "China-led", color: "#ef4444", members: "中・ASEAN・一帯一路", focus: "RCEP + 一帯一路", gdpShare: "~25%" },
    { name: "EU圏", nameEn: "EU", color: "#f59e0b", members: "EU27カ国", focus: "規制主導 + CBAM", gdpShare: "~15%" },
    { name: "グローバルサウス", nameEn: "Global South", color: "#10b981", members: "BRICS 11カ国+", focus: "脱ドル化 + 資源", gdpShare: "~40% (PPP)" },
  ];

  return (
    <div className="my-6 grid grid-cols-2 gap-3">
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
              {b.name}
            </div>
          </div>
          <div className="text-[10px] text-foreground/50 mb-1">{b.members}</div>
          <div className="text-[10px] text-foreground/60 font-medium">{b.focus}</div>
          <div className="mt-2 text-xs font-bold tabular-nums" style={{ color: b.color }}>
            GDP {b.gdpShare}
          </div>
        </div>
      ))}
      <div className="col-span-2 mt-1 p-3 rounded-xl border border-dashed border-[#8b5cf6]/30 bg-[#8b5cf6]/5 text-center">
        <div className="text-xs font-bold text-[#8b5cf6]">日本の立ち位置</div>
        <div className="text-[10px] text-foreground/55 mt-1">
          米国同盟 × RCEP × CPTPP × EU EPA — 全ブロックと接点を持つ唯一のG7メンバー
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
    { date: "2025.04", label: "IEEPA相互関税発動", detail: "日本24% / 中国125%", color: "#ef4444" },
    { date: "2025.05", label: "米中休戦合意", detail: "双方10%に引下げ", color: "#f59e0b" },
    { date: "2025.07", label: "日米枠組み合意", detail: "日本→15% / 投資5,500億ドル", color: "#3b82f6" },
    { date: "2026.02", label: "最高裁違憲判決", detail: "IEEPA関税は無効（6対3）", color: "#ef4444" },
    { date: "2026.02", label: "セクション122発動", detail: "全輸入品に一律10%", color: "#f97316" },
    { date: "2026.07", label: "セクション122失効予定", detail: "150日ルール（最大15%）", color: "#64748b" },
  ];

  return (
    <div className="my-6 relative">
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
                {e.label}
              </div>
              <div className="text-[10px] text-foreground/55">{e.detail}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div className="text-[10px] font-bold text-foreground/60 mb-1">米国の実効関税率（加重平均）</div>
        <div className="flex items-center gap-4 text-[10px]">
          <span className="text-foreground/50">2024年: <span className="font-bold text-foreground/70">2.4%</span></span>
          <span className="text-foreground/50">→ 現在: <span className="font-bold text-[#f97316]">10.2%</span></span>
          <span className="text-foreground/50">→ 7月以降: <span className="font-bold text-foreground/70">6.7%</span></span>
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
    { category: "対中関税（実効）", us: "33.9%（加重平均）", cn: "31.9%", severity: 4 },
    { category: "AIチップ輸出", us: "ケースバイケース審査", cn: "輸入許可不透明", severity: 5 },
    { category: "CHIPS法補助", us: "Intel $78.6億 / TSMC 大規模", cn: "対抗補助", severity: 3 },
    { category: "休戦合意", us: "2026年11月まで延長", cn: "10%相互引下げ", severity: 2 },
    { category: "密輸摘発", us: "H100/H200 $1.6億相当", cn: "ネットワーク解体", severity: 5 },
  ];

  return (
    <div className="my-6 rounded-xl border border-brief-border bg-brief-card overflow-hidden">
      <div className="px-4 py-2 bg-foreground/[0.03] border-b border-brief-border">
        <div className="text-[10px] font-bold text-foreground/60 tracking-wider uppercase">
          米中デカップリング指標（2026年4月）
        </div>
      </div>
      <div className="divide-y divide-brief-border">
        {items.map((item, i) => (
          <div key={i} className="px-4 py-2.5 flex items-center gap-3">
            <div className="w-[100px] sm:w-[130px] flex-shrink-0">
              <div className="text-[11px] font-bold text-foreground/70">{item.category}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-foreground/55">
                <span className="text-[#3b82f6] font-medium">米: </span>{item.us}
              </div>
              <div className="text-[10px] text-foreground/55">
                <span className="text-[#ef4444] font-medium">中: </span>{item.cn}
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
    { name: "TSMC", node: "2nm (N2)", status: "量産中", fabs: "台湾 / アリゾナ / 熊本", color: "#3b82f6", progress: 95 },
    { name: "Samsung", node: "2nm GAA", status: "量産中", fabs: "平澤 / テイラーTX", color: "#8b5cf6", progress: 85 },
    { name: "Intel", node: "18A (1.8nm)", status: "HVM開始", fabs: "チャンドラーAZ / オハイオ", color: "#0ea5e9", progress: 80 },
    { name: "Rapidus", node: "2nm GAA", status: "パイロット", fabs: "千歳（北海道）", color: "#ef4444", progress: 50 },
  ];

  return (
    <div className="my-6 space-y-3">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-2">
        先端半導体ファウンドリ競争（2026年4月）
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
              {c.status}
            </span>
          </div>
          <div className="h-2 rounded-full bg-foreground/[0.06] overflow-hidden mb-1.5">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${c.progress}%`, backgroundColor: c.color, opacity: 0.6 }}
            />
          </div>
          <div className="text-[10px] text-foreground/50">{c.fabs}</div>
        </div>
      ))}
      <div className="p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div className="text-[10px] text-foreground/55">
          <span className="font-bold">日本の半導体補助金:</span> 2022年以降累計
          <span className="font-bold text-[#ef4444]"> 257億ドル</span>（GDP比で世界最大）
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
      gdp: "$14.8兆",
      color: "#3b82f6",
      highlights: ["英国加盟済", "コスタリカ・ウルグアイ交渉中", "UAE・比・尼 2026年開始予定"],
      pending: "中国・ウクライナ申請中",
    },
    {
      name: "RCEP",
      members: 15,
      population: "22億人",
      gdp: "$29.7兆",
      color: "#ef4444",
      highlights: ["世界GDP 30%", "域内貿易 2026年 $10兆突破見込み", "ASEAN+日中韓豪NZ"],
      pending: "インド不参加",
    },
  ];

  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {blocs.map((b) => (
        <div key={b.name} className="p-4 rounded-xl border border-brief-border bg-brief-card">
          <div className="text-lg font-bold mb-2" style={{ color: b.color }}>{b.name}</div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div>
              <div className="text-lg font-bold tabular-nums">{b.members}</div>
              <div className="text-[9px] text-foreground/45">加盟国</div>
            </div>
            <div>
              <div className="text-xs font-bold tabular-nums">{b.population}</div>
              <div className="text-[9px] text-foreground/45">人口</div>
            </div>
            <div>
              <div className="text-xs font-bold tabular-nums">{b.gdp}</div>
              <div className="text-[9px] text-foreground/45">GDP</div>
            </div>
          </div>
          <div className="space-y-1">
            {b.highlights.map((h, i) => (
              <div key={i} className="text-[10px] text-foreground/55">
                <span className="font-medium" style={{ color: b.color }}>•</span> {h}
              </div>
            ))}
          </div>
          <div className="mt-2 text-[10px] text-foreground/45 italic">{b.pending}</div>
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
    <div className="my-6 space-y-3">
      {/* EU CBAM */}
      <div className="p-4 rounded-xl border border-brief-border bg-brief-card">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
          <div className="text-sm font-bold text-[#f59e0b]">EU CBAM（炭素国境調整）</div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-2">
          <div>
            <div className="text-xs font-bold">2026年1月</div>
            <div className="text-[9px] text-foreground/45">本格施行</div>
          </div>
          <div>
            <div className="text-xs font-bold">12,000+</div>
            <div className="text-[9px] text-foreground/45">認可申請</div>
          </div>
          <div>
            <div className="text-xs font-bold">6品目</div>
            <div className="text-[9px] text-foreground/45">対象カテゴリ</div>
          </div>
        </div>
        <div className="text-[10px] text-foreground/50">
          対象: セメント / 鉄鋼 / アルミ / 肥料 / 電力 / 水素
        </div>
      </div>

      {/* BRICS */}
      <div className="p-4 rounded-xl border border-brief-border bg-brief-card">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-[#10b981]" />
          <div className="text-sm font-bold text-[#10b981]">BRICS（2026年4月時点）</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
          <div>
            <div className="text-xs font-bold">11カ国</div>
            <div className="text-[9px] text-foreground/45">正式メンバー</div>
          </div>
          <div>
            <div className="text-xs font-bold">10カ国+</div>
            <div className="text-[9px] text-foreground/45">パートナー</div>
          </div>
          <div>
            <div className="text-xs font-bold">~48.5%</div>
            <div className="text-[9px] text-foreground/45">世界人口</div>
          </div>
          <div>
            <div className="text-xs font-bold">40%+</div>
            <div className="text-[9px] text-foreground/45">世界GDP (PPP)</div>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
          <div className="text-[10px] font-bold text-[#10b981] mb-1">脱ドル化の進捗</div>
          <div className="text-[10px] text-foreground/55">
            域内貿易の65%が現地通貨決済（2024年）。BRICS Unit（金40%＋通貨バスケット60%）パイロット開始。
            統一通貨は2030年以降が現実的。
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
    { label: "経済安全保障推進法", detail: "サプライチェーン / 基幹インフラ / 先端技術 / 特許非公開", icon: "🛡" },
    { label: "半導体国家戦略", detail: "Rapidus（2nm）/ TSMC熊本（3nm〜）/ キオクシア（NAND）", icon: "⚡" },
    { label: "多層的FTA網", detail: "CPTPP + RCEP + EU EPA + 日米枠組み合意", icon: "🌐" },
    { label: "フレンドショアリング", detail: "チャイナ+1 / ASEAN生産拡大 / リスク分散", icon: "🤝" },
  ];

  return (
    <div className="my-6">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-3">
        日本の経済安全保障 4本柱
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pillars.map((p, i) => (
          <div key={i} className="p-3 rounded-xl border border-brief-border bg-brief-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">{p.icon}</span>
              <div className="text-xs font-bold text-[#8b5cf6]">{p.label}</div>
            </div>
            <div className="text-[10px] text-foreground/55 leading-relaxed">{p.detail}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div className="text-[10px] text-foreground/55">
          <span className="font-bold">2026年後半の注目点:</span>{" "}
          ①セクション122失効（7/24） ②CPTPP新規加盟交渉 ③BRICS首脳会議（8〜9月）
        </div>
      </div>
    </div>
  );
}
