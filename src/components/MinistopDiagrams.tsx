"use client";

const ACCENT = "#ef4444";
const TEAL = "#14b8a6";

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <figure
      role="img"
      aria-label={title}
      className="my-8 p-6 rounded-2xl border border-brief-border bg-brief-card"
    >
      <figcaption className="mb-5">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 font-bold">
          Figure
        </div>
        <h3 className="text-[15px] font-bold text-foreground/90 mt-1">{title}</h3>
      </figcaption>
      {children}
    </figure>
  );
}

/* ─────────────────────────────────────────────
   ministop-performance
   業績推移タイムライン（売上高・営業利益/損失）
   ───────────────────────────────────────────── */
export function MinistopPerformanceDiagram() {
  const data = [
    { year: "2024/2月期", revenue: 853, opProfit: -2.1, netProfit: -4.7, color: ACCENT },
    { year: "2025/2月期", revenue: 875, opProfit: -34.9, netProfit: -67.7, color: ACCENT },
    { year: "2026/2月期\n(実績)", revenue: 918, opProfit: -36.1, netProfit: -56.3, color: ACCENT },
  ];

  const maxRevenue = 1000;

  return (
    <Card title="ミニストップ業績推移 — 3期連続赤字の軌跡（単位：億円）">
      <div className="space-y-5">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[12px] font-bold text-foreground/80 whitespace-pre-line">{d.year}</span>
              <div className="flex items-center" style={{ gap: "12px" }}>
                <span className="text-[11px] text-foreground/55">売上総収入 {d.revenue}億円</span>
                <span className="text-[12px] font-bold" style={{ color: ACCENT }}>
                  純損失 {Math.abs(d.netProfit)}億円
                </span>
              </div>
            </div>
            {/* 売上バー */}
            <div className="h-5 rounded-full bg-brief-border overflow-hidden mb-1">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(d.revenue / maxRevenue) * 100}%`,
                  background: "linear-gradient(90deg, #0d9488, #14b8a6)",
                }}
              />
            </div>
            {/* 損失バー */}
            <div className="flex items-center" style={{ gap: "6px" }}>
              <span className="text-[10px] text-foreground/40 w-16">営業損失</span>
              <div className="flex-1 h-3 rounded-full bg-brief-border overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(Math.abs(d.opProfit) / 50) * 100}%`,
                    background: `linear-gradient(90deg, ${ACCENT}, #f87171)`,
                  }}
                />
              </div>
              <span className="text-[10px] font-bold" style={{ color: ACCENT, minWidth: "48px" }}>
                -{Math.abs(d.opProfit)}億円
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 p-3 rounded-lg" style={{ backgroundColor: `${ACCENT}08`, borderLeft: `3px solid ${ACCENT}` }}>
        <div className="text-[11px] font-bold" style={{ color: ACCENT }}>当初予想との乖離（2026/2月期）</div>
        <div className="text-[11px] text-foreground/65 mt-1">
          期初予想：純利益 +0.07億円　→　実績：純損失 -56.3億円　（乖離：約61億円）
        </div>
      </div>
      <div className="mt-3 text-[10px] text-foreground/40 text-center">
        出典: ミニストップ株式会社 決算短信・流通ニュース (2026年4月)
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   ministop-cvs-comparison
   コンビニ4社比較（店舗数・規模・特徴）
   ───────────────────────────────────────────── */
export function MinistopCvsComparisonDiagram() {
  const chains = [
    {
      name: "セブン-イレブン",
      stores: 21722,
      color: "#dc2626",
      parent: "セブン＆アイHD",
      feature: "AI発注・Goアプリ・7pay",
      profitLevel: "高",
    },
    {
      name: "ファミリーマート",
      stores: 16415,
      color: "#1d4ed8",
      parent: "伊藤忠商事",
      feature: "ファミペイ・海外8,351店",
      profitLevel: "中〜高",
    },
    {
      name: "ローソン",
      stores: 14697,
      color: "#16a34a",
      parent: "三菱商事・KDDIグループ",
      feature: "デジタル強化・ナチュラルローソン",
      profitLevel: "中〜高",
    },
    {
      name: "ミニストップ",
      stores: 1793,
      color: ACCENT,
      parent: "イオン（100%子会社）",
      feature: "コンボストア・ソフトクリーム",
      profitLevel: "赤字（3期連続）",
    },
  ];

  const maxStores = 22000;

  return (
    <Card title="コンビニ4社 店舗数・規模比較（2026年2月時点）">
      <div className="space-y-4">
        {chains.map((c, i) => (
          <div key={i} className="p-3 rounded-xl border-l-4" style={{ borderLeftColor: c.color, backgroundColor: `${c.color}06` }}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-[13px] font-bold" style={{ color: c.color }}>{c.name}</div>
                <div className="text-[10px] text-foreground/45">{c.parent}</div>
              </div>
              <div className="text-right">
                <div className="text-[15px] font-bold text-foreground/85">
                  {c.stores.toLocaleString()}店
                </div>
                <div
                  className="text-[10px] font-bold mt-0.5"
                  style={{ color: c.profitLevel === "赤字（3期連続）" ? ACCENT : "#16a34a" }}
                >
                  収益: {c.profitLevel}
                </div>
              </div>
            </div>
            <div className="h-2 rounded-full bg-brief-border overflow-hidden mb-2">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(c.stores / maxStores) * 100}%`,
                  backgroundColor: c.color,
                  opacity: 0.7,
                }}
              />
            </div>
            <div className="text-[10px] text-foreground/50">{c.feature}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-brief-card border border-brief-border">
        <div className="text-[11px] font-bold text-foreground/60 mb-1">業界集中度</div>
        <div className="text-[11px] text-foreground/55">
          セブン・ファミマ・ローソン3社で全国売上の <span className="font-bold text-foreground/80">約90%</span> を占める。
          ミニストップの店舗数はトップのセブン比で <span className="font-bold" style={{ color: ACCENT }}>約8%</span>。
        </div>
      </div>
      <div className="mt-3 text-[10px] text-foreground/40 text-center">
        出典: 各社IR資料・ガベージニュース (2026年)
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   ministop-fraud-impact
   消費期限偽装問題の影響マップ
   ───────────────────────────────────────────── */
export function MinistopFraudImpactDiagram() {
  const impacts = [
    {
      category: "直接財務影響",
      color: ACCENT,
      items: [
        { label: "営業利益押し下げ", value: "約25億円超（試算）" },
        { label: "加盟店補助金", value: "8.7億円" },
        { label: "設備導入（監視カメラ等）", value: "2.1億円" },
        { label: "特別損失（不採算店閉店）", value: "13.9億円" },
      ],
    },
    {
      category: "オペレーション影響",
      color: "#f59e0b",
      items: [
        { label: "店内加工品販売中止", value: "全店 → 約4割のみ再開" },
        { label: "既存店日販（全体）", value: "前年比 -2.2%" },
        { label: "客数減少", value: "前年比 -3.8%" },
        { label: "ファストフード部門日販", value: "前年比 -9.0%" },
      ],
    },
    {
      category: "信頼・ブランド影響",
      color: "#8b5cf6",
      items: [
        { label: "発覚店舗数", value: "25店舗（7都府県）" },
        { label: "不正期間", value: "最長3年前から継続" },
        { label: "販売再開状況（2月末）", value: "全店舗の約40%" },
        { label: "体調不良申告", value: "2件（因果関係不明）" },
      ],
    },
  ];

  return (
    <Card title="消費期限偽装問題の多層的影響（2025年8月発覚〜2026年2月期）">
      <div className="space-y-4">
        {impacts.map((cat, i) => (
          <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: `${cat.color}30` }}>
            <div
              className="px-4 py-2 text-[11px] font-bold tracking-wide uppercase"
              style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
            >
              {cat.category}
            </div>
            <div className="p-3 space-y-2">
              {cat.items.map((item, j) => (
                <div key={j} className="flex items-center justify-between">
                  <span className="text-[11px] text-foreground/60">{item.label}</span>
                  <span className="text-[11px] font-bold text-foreground/80 text-right ml-2">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${ACCENT}08`, borderLeft: `3px solid ${ACCENT}` }}>
        <div className="text-[11px] font-bold" style={{ color: ACCENT }}>偽装の背景</div>
        <div className="text-[11px] text-foreground/65 mt-1">
          一人で夜中に60〜70個のおにぎりを製造する現場負担、廃棄ロス削減のインセンティブ、複数店舗オーナーによる管理希薄化が複合。
        </div>
      </div>
      <div className="mt-3 text-[10px] text-foreground/40 text-center">
        出典: ミニストップ株式会社 発表資料・流通ニュース・各報道 (2025-2026年)
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   ministop-aeon-position
   イオングループ内の立ち位置
   ───────────────────────────────────────────── */
export function MinistopAeonPositionDiagram() {
  const group = [
    {
      name: "イオン（GMS）",
      desc: "総合スーパー・大型SC",
      scale: "国内最大のGMS",
      status: "主力",
      color: "#1d4ed8",
    },
    {
      name: "マックスバリュ",
      desc: "食品スーパー",
      scale: "イオン系食品SM",
      status: "成長",
      color: "#16a34a",
    },
    {
      name: "まいばすけっと",
      desc: "都市型小型食品店",
      scale: "首都圏1,000店超",
      status: "急成長",
      color: TEAL,
    },
    {
      name: "ウエルシア",
      desc: "ドラッグストア",
      scale: "国内最大級DgS",
      status: "成長",
      color: "#7c3aed",
    },
    {
      name: "ミニストップ",
      desc: "コンビニ（コンボストア）",
      scale: "国内1,793店",
      status: "赤字・縮小",
      color: ACCENT,
    },
  ];

  return (
    <Card title="イオングループ内のミニストップの立ち位置">
      <div className="space-y-3">
        {group.map((item, i) => (
          <div
            key={i}
            className="flex items-center rounded-xl p-3 border-l-4"
            style={{
              borderLeftColor: item.color,
              backgroundColor: `${item.color}06`,
            }}
          >
            <div className="flex-1">
              <div className="flex items-center" style={{ gap: "8px" }}>
                <span className="text-[13px] font-bold" style={{ color: item.color }}>
                  {item.name}
                </span>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor:
                      item.status === "赤字・縮小"
                        ? `${ACCENT}20`
                        : item.status === "急成長"
                        ? `${TEAL}20`
                        : "#16a34a20",
                    color:
                      item.status === "赤字・縮小"
                        ? ACCENT
                        : item.status === "急成長"
                        ? TEAL
                        : "#16a34a",
                  }}
                >
                  {item.status}
                </span>
              </div>
              <div className="text-[11px] text-foreground/55 mt-0.5">{item.desc}</div>
            </div>
            <div className="text-[11px] text-foreground/50 text-right">{item.scale}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-brief-card border border-brief-border">
        <div className="text-[11px] font-bold text-foreground/60 mb-1">カニバリゼーションの構図</div>
        <div className="text-[11px] text-foreground/55">
          同じイオングループ内の「まいばすけっと」（都市型小型食品店）と、ミニストップは立地・価格帯・商品構成で直接競合する。グループ内での顧客の奪い合いが生じている。
        </div>
      </div>
      <div className="mt-3 text-[10px] text-foreground/40 text-center">
        出典: イオン株式会社 IR資料・各社公式情報
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   ministop-scenarios
   今後のシナリオ（再建/売却/縮小）
   ───────────────────────────────────────────── */
export function MinistopScenariosDiagram() {
  const scenarios = [
    {
      label: "A",
      title: "選択と集中による再建",
      desc: "不採算店整理・信頼回復後の黒字転換。消費期限偽装問題の収束と全店での店内調理品販売再開が前提。",
      probability: "中",
      upside: "ブランド価値維持・FC継続",
      risk: "3強との差は縮まらない",
      color: TEAL,
    },
    {
      label: "B",
      title: "業態転換・まいばすけっと統合",
      desc: "コンビニからイオン系小型食品店への業態転換。FC加盟店への補償とブランド資産の活用が課題。",
      probability: "中",
      upside: "イオングループのカニバリゼーション解消",
      risk: "FC加盟店への補償問題",
      color: "#f59e0b",
    },
    {
      label: "C",
      title: "売却・第三者資本連携",
      desc: "イオンが保有株式を売却し、他社による経営再建。業界再編の文脈での大手との統合も視野に。",
      probability: "低〜中",
      upside: "スケールメリット獲得の可能性",
      risk: "イオンが手放す経営判断ができるか",
      color: "#8b5cf6",
    },
    {
      label: "D",
      title: "縮小均衡",
      desc: "大きな変革なく採算店のみ維持しながら緩やかに縮小。最も現実的だが縮小スパイラルのリスク。",
      probability: "高",
      upside: "短期的な安定",
      risk: "長期的なネットワーク価値低下",
      color: ACCENT,
    },
  ];

  return (
    <Card title="ミニストップの今後：4つのシナリオ">
      <div className="space-y-3">
        {scenarios.map((s, i) => (
          <div
            key={i}
            className="rounded-xl border p-4"
            style={{ borderColor: `${s.color}25`, backgroundColor: `${s.color}04` }}
          >
            <div className="flex items-start" style={{ gap: "12px" }}>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[12px] font-bold text-white"
                style={{ backgroundColor: s.color }}
              >
                {s.label}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[13px] font-bold text-foreground/85">{s.title}</div>
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${s.color}20`, color: s.color }}
                  >
                    確率:{s.probability}
                  </span>
                </div>
                <div className="text-[11px] text-foreground/60 mb-2">{s.desc}</div>
                <div className="flex" style={{ gap: "16px" }}>
                  <div>
                    <div className="text-[9px] text-foreground/40 mb-0.5">好機</div>
                    <div className="text-[10px] text-foreground/65">{s.upside}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-foreground/40 mb-0.5">リスク</div>
                    <div className="text-[10px]" style={{ color: ACCENT }}>{s.risk}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/40 text-center">
        ※シナリオ確率は編集部推定。業界動向・親会社の戦略により変動。
      </div>
    </Card>
  );
}
