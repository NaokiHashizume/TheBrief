"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Japan Offshore Wind 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const RED = "#dc2626";
const AMBER = "#d97706";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const SLATE = "#64748b";
const TEAL = "#0d9488";

function Card({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Offshore wind diagram"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${TEAL}aa` }}
        >
          <T ja="図" en="FIGURE" />
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">
          {title}
        </div>
        {subtitle && (
          <div className="text-[11px] text-foreground/50 mt-1">{subtitle}</div>
        )}
      </figcaption>
      {children}
    </figure>
  );
}

/* ── 1. 浮体式商用稼働の意義 ── */
export function OffshoreWindFloatingLaunchDiagram() {
  const comparison = [
    {
      type: "固定式（着床式）",
      typeEn: "Fixed-bottom",
      depth: "〜50m",
      area: "限定的",
      cost: "低",
      status: "第1ラウンド主力（一部頓挫）",
      color: AMBER,
    },
    {
      type: "浮体式",
      typeEn: "Floating",
      depth: "50m以上",
      area: "EEZ全域（10倍超拡大）",
      cost: "高（固定式の2〜3倍）",
      status: "五島沖で商用稼働開始（2026年1月）",
      color: TEAL,
    },
  ];

  return (
    <Card
      title={<T ja="固定式vs.浮体式——五島沖稼働の歴史的意義" en="Fixed vs. Floating — The Historic Significance of the Goto Islands Launch" />}
      subtitle={<T ja="浮体式が実用化されれば設置可能場所は10倍超に拡大" en="Floating wind could expand viable sites by more than 10×" />}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {comparison.map((c) => (
          <div
            key={c.type}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderTopColor: c.color, borderTopWidth: "3px" }}
          >
            <div className="text-[14px] font-bold text-foreground mb-3" style={{ color: c.color }}>
              {c.type}
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-foreground/50">適水深</span>
                <span className="font-medium text-foreground">{c.depth}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/50">設置可能面積</span>
                <span className="font-medium text-foreground">{c.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/50">コスト</span>
                <span className="font-medium text-foreground">{c.cost}</span>
              </div>
            </div>
            <div
              className="mt-3 p-2 rounded-lg text-[10px] text-foreground/65"
              style={{ backgroundColor: `${c.color}10` }}
            >
              {c.status}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${TEAL}10` }}>
        <T
          ja="五島沖：8基・16,800kW。「商用化の証明」として業界の信頼性を高める意義がある"
          en="Goto Islands: 8 turbines, 16.8 MW. Its significance lies in proving commercial viability, not scale"
        />
      </div>
    </Card>
  );
}

/* ── 2. 三菱商事撤退の構造 ── */
export function OffshoreWindMitsubishiExitDiagram() {
  const timeline = [
    { year: "2021年", event: "第1ラウンド入札", detail: "三菱商事が秋田港・能代港・千葉銚子沖を「安値落札」", color: GREEN },
    { year: "2022年〜", event: "コスト急騰", detail: "資材高騰・円安・金利上昇でプロジェクト採算が崩壊", color: AMBER },
    { year: "2025年8月", event: "正式撤退表明", detail: "3海域すべてからの撤退を公表。業界に衝撃", color: RED },
    { year: "2025年〜", event: "制度見直し", detail: "政府が第2ラウンド以降の入札基準を大幅改訂", color: BLUE },
  ];

  return (
    <Card
      title={<T ja="三菱商事3海域撤退——「安値入札のツケ」の構造" en="Mitsubishi Corp's 3-Site Exit: The Price of Low-Ball Bidding" />}
      subtitle={<T ja="入札は勝ったが、事業は負けた" en="Won the bid, lost the business" />}
    >
      <div className="relative pl-5">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-foreground/10" />
        {timeline.map((t) => (
          <div key={t.year} className="relative mb-4 last:mb-0">
            <div
              className="absolute -left-3 top-1 w-3 h-3 rounded-full border-2 border-white"
              style={{ backgroundColor: t.color }}
            />
            <div className="pl-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-foreground/40 tabular-nums">{t.year}</span>
                <span className="text-[12px] font-bold text-foreground">{t.event}</span>
              </div>
              <div className="text-[11px] text-foreground/65 leading-relaxed">{t.detail}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="第1ラウンドの入札設計（価格重視）とインフレ環境の衝突が引き起こした政策設計の失敗"
          en="The collision of price-focused bid design and the inflationary environment: a policy design failure"
        />
      </div>
    </Card>
  );
}

/* ── 3. 第2ラウンドの改革ポイント ── */
export function OffshoreWindRound2ReformDiagram() {
  const reforms = [
    {
      title: "国内調達比率の評価",
      titleEn: "Domestic procurement weighting",
      desc: "日本製部材・サービス利用計画を加点評価。欧州依存からの脱却を促進",
      descEn: "Points awarded for using Japanese parts and services; reduces dependence on European suppliers",
      icon: "🏭",
    },
    {
      title: "事業実現確実性の重視",
      titleEn: "Project certainty emphasis",
      desc: "財務基盤・技術力・地元合意を総合評価。価格一辺倒からの脱却",
      descEn: "Holistic assessment of financial strength, technology, and community buy-in — away from price-only competition",
      icon: "✅",
    },
    {
      title: "現実的コスト試算の要件",
      titleEn: "Realistic cost requirements",
      desc: "インフレ・金利リスクを織り込んだ事業計画を提出義務化",
      descEn: "Business plans must incorporate inflation and interest-rate risk scenarios",
      icon: "📊",
    },
  ];

  return (
    <Card
      title={<T ja="第2ラウンドへの「3つの反省」" en="Three Reforms for Round 2 Bidding" />}
      subtitle={<T ja="価格競争から事業確実性重視へのパラダイム転換" en="Paradigm shift: from price competition to project certainty" />}
    >
      <div className="space-y-3">
        {reforms.map((r) => (
          <div
            key={r.title}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: TEAL, borderLeftWidth: "3px" }}
          >
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">{r.icon}</span>
              <div>
                <div className="text-[13px] font-bold text-foreground mb-1">
                  <T ja={r.title} en={r.titleEn} />
                </div>
                <div className="text-[11px] text-foreground/65 leading-relaxed">
                  <T ja={r.desc} en={r.descEn} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${BLUE}10` }}>
        <T
          ja="14社が浮体式洋上風力技術研究組合を設立。コスト・リスク低減の共同研究も開始"
          en="14 companies formed a floating offshore wind R&D consortium for shared cost and risk reduction"
        />
      </div>
    </Card>
  );
}

/* ── 4. 再エネ目標vs.現実 ── */
export function OffshoreWindRenewableTargetDiagram() {
  const data = [
    { label: "現状（2024年）", wind: 1.1, target: false, color: SLATE },
    { label: "2030年風力目標", wind: 5.7, target: true, color: AMBER, note: "洋上目標GW" },
    { label: "2040年風力目標", wind: 15, target: true, color: GREEN, note: "全体の4〜8%" },
  ];

  return (
    <Card
      title={<T ja="日本の洋上風力目標と現実の乖離" en="Japan's Offshore Wind Targets vs. Reality" />}
      subtitle={<T ja="現状の風力比率は1.1%。2030年5.7GW目標達成は困難との見方が広がる" en="Current wind share: 1.1%. Consensus is that the 5.7 GW 2030 target is unlikely to be met" />}
    >
      <div className="space-y-3 mb-4">
        {data.map((d) => (
          <div key={d.label}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[12px] text-foreground/70">{d.label}</span>
              <span className="text-[12px] font-bold tabular-nums" style={{ color: d.color }}>
                {d.wind}{d.note ? "" : "%"}
                {d.note && <span className="text-[10px] text-foreground/50 ml-1">{d.note}</span>}
              </span>
            </div>
            <div className="h-5 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${Math.min((d.wind / 15) * 100, 100)}%`, backgroundColor: d.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${AMBER}10` }}>
        <T
          ja="業界見通し：2030年洋上5.7GW目標は現実的に2〜3GW台。失われた時間の埋め合わせは難しい"
          en="Industry estimate: 2030 offshore target likely to land at 2–3 GW, not 5.7 GW. The lost time is hard to recover"
        />
      </div>
    </Card>
  );
}

/* ── 5. サプライチェーン課題 ── */
export function OffshoreWindSupplyChainDiagram() {
  const items = [
    { part: "風力発電機本体", partEn: "Wind turbine", domestic: 5, note: "欧州勢が世界市場を寡占" },
    { part: "海底ケーブル", partEn: "Subsea cable", domestic: 40, note: "古河電工・住友電工が参入" },
    { part: "SEP船（設置船）", partEn: "Installation vessel", domestic: 10, note: "国内に数隻のみ" },
    { part: "係留システム（浮体式）", partEn: "Mooring system", domestic: 20, note: "国内メーカー開発中" },
    { part: "鋼材・架台", partEn: "Steel & foundations", domestic: 60, note: "新日鉄等が供給可能" },
  ];

  return (
    <Card
      title={<T ja="洋上風力サプライチェーンの国内調達率（推定）" en="Estimated Domestic Content Rate in Offshore Wind Supply Chain" />}
      subtitle={<T ja="政府目標「2040年に国内6割」へのギャップ" en="Gap to the government's '60% domestic content by 2040' target" />}
    >
      <div className="space-y-2.5">
        {items.map((item) => (
          <div key={item.part}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-foreground/70">{item.part}</span>
              <span className="text-[11px] font-bold tabular-nums" style={{ color: item.domestic >= 50 ? GREEN : item.domestic >= 30 ? AMBER : RED }}>
                {item.domestic}%
              </span>
            </div>
            <div className="h-4 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.domestic}%`,
                  backgroundColor: item.domestic >= 50 ? GREEN : item.domestic >= 30 ? AMBER : RED,
                }}
              />
            </div>
            <div className="text-[10px] text-foreground/40 mt-0.5">{item.note}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="「まだ市場が小さいから投資しない」という鶏と卵の問題が解消されていない"
          en="The chicken-and-egg problem persists: 'We won't invest until the market is bigger'"
        />
      </div>
    </Card>
  );
}

/* ── 6. 戦略視点 ── */
export function OffshoreWindStrategicViewDiagram() {
  const conditions = [
    { label: "長期安定的なPPA設計", sub: "電力購入契約で事業リスクを軽減", icon: "📋", color: TEAL },
    { label: "国内サプライチェーンへの先行投資支援", sub: "造船・鉄鋼・電機の設備投資補助", icon: "🏗️", color: BLUE },
    { label: "規制緩和（環境アセス迅速化）", sub: "欧州並みの審査期間への短縮", icon: "⚖️", color: GREEN },
  ];

  return (
    <Card
      title={<T ja="日本の洋上風力が「成功物語」になるための3条件" en="Three Conditions for Japan's Offshore Wind to Become a Success Story" />}
      subtitle={<T ja="2026年が「まだ間に合うか」の判断が求められる年" en="2026 is the year to decide whether it's still possible to catch up" />}
    >
      <div className="space-y-3">
        {conditions.map((c) => (
          <div
            key={c.label}
            className="p-4 rounded-xl border border-brief-border flex items-center gap-4"
            style={{ borderLeftColor: c.color, borderLeftWidth: "3px" }}
          >
            <span className="text-2xl shrink-0">{c.icon}</span>
            <div>
              <div className="text-[13px] font-bold text-foreground">{c.label}</div>
              <div className="text-[11px] text-foreground/55 mt-0.5">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${SLATE}10` }}>
        <T
          ja="浮体式の商用成功＋固定式の政策失敗という対比が示す矛盾。両者の教訓を統合した第3フェーズが必要"
          en="The contrast — floating's commercial success vs. fixed-bottom's policy failure — reveals a contradiction demanding a third-phase synthesis"
        />
      </div>
    </Card>
  );
}
