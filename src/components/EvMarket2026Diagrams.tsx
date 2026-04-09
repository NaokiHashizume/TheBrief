"use client";

import { T } from "./T";

const ACCENT = "#2563eb";

function Card({
  children,
  title,
  titleEn,
}: {
  children: React.ReactNode;
  title: string;
  titleEn: string;
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
        <h3 className="text-[15px] font-bold text-foreground/90 mt-1">
          <T ja={title} en={titleEn} />
        </h3>
      </figcaption>
      {children}
    </figure>
  );
}

/* ============================================================
 * ev-market-share — 世界EV市場シェア 2026
 * ============================================================ */
export function EvMarketShareDiagram() {
  const makers = [
    { ja: "BYD（中国）", en: "BYD (China)", share: 17.3, q: "2026年2月" },
    { ja: "Geely（中国）", en: "Geely (China)", share: 10.5, q: "2026年2月" },
    { ja: "テスラ（米国）", en: "Tesla (US)", share: 7.8, q: "2026年2月" },
    { ja: "SAIC（中国）", en: "SAIC (China)", share: 6.2, q: "2026年2月" },
    { ja: "フォルクスワーゲン（独）", en: "Volkswagen (Germany)", share: 5.1, q: "2026年2月" },
    { ja: "トヨタ（日本）", en: "Toyota (Japan)", share: 3.4, q: "2026年2月" },
    { ja: "その他", en: "Others", share: 49.7, q: "" },
  ];
  const max = 50;
  return (
    <Card
      title="世界BEV市場シェア（2026年2月）"
      titleEn="Global BEV Market Share (February 2026)"
    >
      <div className="space-y-3">
        {makers.map((m, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-foreground/80 font-medium">
                <T ja={m.ja} en={m.en} />
              </span>
              <span
                className="font-bold tabular-nums px-2 py-0.5 rounded-full text-[11px]"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                {m.share}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(m.share / max) * 100}%`,
                  backgroundColor: i < 3 ? ACCENT : i === 5 ? "#ef4444" : `${ACCENT}55`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[10px] text-foreground/40">
        <T
          ja="出典: CleanTechnica 2026年4月 / BEV（純電気自動車）のみ"
          en="Source: CleanTechnica April 2026 / BEV only"
        />
      </p>
    </Card>
  );
}

/* ============================================================
 * ev-toyota-strategy — トヨタのEV戦略ロードマップ
 * ============================================================ */
export function EvToyotaStrategyDiagram() {
  const roadmap = [
    {
      year: "2026",
      ja: "次世代BEVプラットフォーム投入・航続1,000km・充電20分以下",
      en: "Next-gen BEV platform launch — 1,000 km range, charge in under 20 min",
    },
    {
      year: "2027–28",
      ja: "全固体電池 初搭載EV（フラッグシップ）・出光と協業・9 GWh計画",
      en: "Solid-state battery debut in flagship EV — Idemitsu JV, 9 GWh plan",
    },
    {
      year: "2028",
      ja: "HEV/PHEV 670万台体制（全生産の約60%）・途上国向け継続強化",
      en: "HEV/PHEV at 6.7M units (~60% of production) — emerging markets focus",
    },
    {
      year: "2030",
      ja: "BEV 350万台（うち170万台は次世代）・全固体電池量産へ",
      en: "BEV 3.5M units (1.7M next-gen) — solid-state enters mass production",
    },
  ];
  return (
    <Card
      title="トヨタEV戦略ロードマップ（2026–2030）"
      titleEn="Toyota EV Strategy Roadmap (2026–2030)"
    >
      <div className="space-y-3">
        {roadmap.map((r, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
          >
            <span
              className="text-[11px] font-bold tabular-nums whitespace-nowrap px-2 py-1 rounded"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {r.year}
            </span>
            <span className="text-[12px] text-foreground/80 leading-snug">
              <T ja={r.ja} en={r.en} />
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[10px] text-foreground/40">
        <T
          ja="出典: トヨタグローバルニュースルーム・各社発表・日経テクノロジー"
          en="Source: Toyota Global Newsroom, corporate announcements, Nikkei Tech"
        />
      </p>
    </Card>
  );
}

/* ============================================================
 * ev-china-advance — 中国EVの日本・欧州進出
 * ============================================================ */
export function EvChinaAdvanceDiagram() {
  const entries = [
    {
      brand: "BYD",
      jaTarget: "日本",
      en: "Japan",
      ja: "2026年Q2、軽EV「Racco（ラッコ）」投入。日本専用モデルとして初開発。",
      enBody:
        "Q2 2026: launches Japan-specific kei EV 'Racco' — first BYD vehicle designed exclusively for a single market.",
    },
    {
      brand: "BYD",
      jaTarget: "欧州（ハンガリー）",
      en: "Europe (Hungary)",
      ja: "2026年から年産20万台の量産工場稼働。Dolphin Surfを€20,000〜34,000で販売。",
      enBody:
        "From 2026, mass production plant in Szeged (200k units/yr). Dolphin Surf priced €20,000–€34,000.",
    },
    {
      brand: "NIO",
      jaTarget: "欧州（北欧・西欧）",
      en: "Europe (Nordic/Western)",
      ja: "Fireflyブランドで欧州向けコンパクト高級車を展開。2026年初頭にUK・ベルギー・ルクセンブルクへ拡大。",
      enBody:
        "Firefly brand for European compact luxury. Expanding to UK, Belgium, Luxembourg in early 2026.",
    },
    {
      brand: "Xiaomi",
      jaTarget: "グローバル（2027年〜）",
      en: "Global (from 2027)",
      ja: "SU7・YU7で国内月産4万台超。海外展開は2027年計画、規制と資金が課題。",
      enBody:
        "SU7 / YU7 at 40k+ units/month domestically. Global rollout planned 2027; regulatory and capital hurdles remain.",
    },
    {
      brand: "CATL",
      jaTarget: "欧州（電池供給）",
      en: "Europe (battery supply)",
      ja: "ハンガリー工場でBMW・Stellantis向けに電池を供給。2027年から凝集態電池を商用化予定。",
      enBody:
        "Hungary plant supplies BMW and Stellantis. Condensed-state battery commercialization planned 2027.",
    },
  ];
  return (
    <Card
      title="中国EVブランドの日本・欧州進出状況（2026年）"
      titleEn="Chinese EV Brands in Japan and Europe (2026)"
    >
      <div className="space-y-3">
        {entries.map((e, i) => (
          <div key={i} className="p-3 rounded-lg border border-brief-border space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                {e.brand}
              </span>
              <span className="text-[11px] text-foreground/50 font-medium">
                <T ja={e.jaTarget} en={e.en} />
              </span>
            </div>
            <p className="text-[12px] text-foreground/75 leading-snug">
              <T ja={e.ja} en={e.enBody} />
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[10px] text-foreground/40">
        <T
          ja="出典: Nikkei / CNBC / ChinaEVHome / BYD公式発表 / 2026年4月時点"
          en="Source: Nikkei, CNBC, ChinaEVHome, BYD press releases — as of April 2026"
        />
      </p>
    </Card>
  );
}

/* ============================================================
 * ev-japan-infra — 日本のEV普及率・充電インフラ
 * ============================================================ */
export function EvJapanInfraDiagram() {
  const stats = [
    { ja: "新車販売に占めるBEV+PHEVシェア（2025年）", en: "BEV+PHEV share of new car sales (2025)", v: "2.66%" },
    { ja: "世界平均のEVシェア（2025年）", en: "Global average EV share (2025)", v: "27.7%" },
    { ja: "急速充電器（2024年末）", en: "Fast chargers installed (end-2024)", v: "12,313台" },
    { ja: "普通充電器（2024年末）", en: "Normal chargers installed (end-2024)", v: "73,089台" },
    { ja: "EV充電器合計（2025年3月末）", en: "Total EV charging points (Mar 2025)", v: "約6.8万口" },
    { ja: "政府目標：2030年までに整備", en: "Government target by 2030", v: "30万口" },
  ];
  return (
    <Card
      title="日本のEV普及率と充電インフラ整備状況"
      titleEn="Japan's EV Adoption Rate and Charging Infrastructure"
    >
      <div className="space-y-2">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-lg border border-brief-border gap-3"
          >
            <div className="text-[12px] font-medium text-foreground/75 leading-snug flex-1">
              <T ja={s.ja} en={s.en} />
            </div>
            <div
              className="text-[13px] font-bold tabular-nums whitespace-nowrap px-3 py-1 rounded-full"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {s.v}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[10px] text-foreground/40">
        <T
          ja="出典: EV充電エネチェンジ / 経済産業省 / 日本カーソリューションズ（2026年最新）"
          en="Source: EV Charge Enechange, METI, Japan Car Solutions (2026 latest)"
        />
      </p>
    </Card>
  );
}

/* ============================================================
 * ev-cost-comparison — BYD vs テスラ vs トヨタ コスト比較
 * ============================================================ */
export function EvCostComparisonDiagram() {
  const items = [
    {
      ja: "BYD vs テスラのコスト差（1台当たり）",
      en: "BYD cost gap vs Tesla (per vehicle)",
      byd: "$4,700 有利",
      en2: "$4,700 advantage",
      note_ja: "補助金は5%のみ。残りは垂直統合・規模・人件費",
      note_en: "Subsidies account for just 5%; the rest is scale, integration, labor",
    },
    {
      ja: "BYD サプライヤー代金の平均支払い期間",
      en: "BYD avg. supplier payment terms",
      byd: "155日",
      en2: "155 days",
      note_ja: "テスラ60日・VW43日・トヨタ41日。資金繰り優位",
      note_en: "Tesla 60d / VW 43d / Toyota 41d — a significant working-capital edge",
    },
    {
      ja: "BYD グロスマージン（2025年）",
      en: "BYD gross margin (2025)",
      byd: "20%",
      en2: "20%",
      note_ja: "テスラの18%を上回る。低価格でも利益率は高い",
      note_en: "Above Tesla's 18%, proving low price ≠ low margin",
    },
    {
      ja: "BYD の1台当たりサプライヤーマークアップ節約額",
      en: "BYD supplier markup savings vs Tesla Model 3 (per vehicle)",
      byd: "$2,369",
      en2: "$2,369",
      note_ja: "垂直統合による内製化コスト削減",
      note_en: "Savings from in-house production vs Tesla Model 3 parts",
    },
  ];
  return (
    <Card
      title="BYDのコスト競争力の構造（vs テスラ・トヨタ）"
      titleEn="BYD's Cost Advantage Structure (vs Tesla and Toyota)"
    >
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="p-3 rounded-lg border border-brief-border space-y-1.5">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <span className="text-[12px] font-medium text-foreground/80 flex-1 leading-snug">
                <T ja={item.ja} en={item.en} />
              </span>
              <span
                className="text-[13px] font-bold tabular-nums whitespace-nowrap px-2.5 py-1 rounded-full"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                <T ja={item.byd} en={item.en2} />
              </span>
            </div>
            <p className="text-[11px] text-foreground/50 leading-snug">
              <T ja={item.note_ja} en={item.note_en} />
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[10px] text-foreground/40">
        <T
          ja="出典: Rest of World / Rhodium Group / CNBC（2026年3月）"
          en="Source: Rest of World, Rhodium Group, CNBC (March 2026)"
        />
      </p>
    </Card>
  );
}

/* ============================================================
 * ev-future-scenario — 日本自動車メーカーの生存シナリオ
 * ============================================================ */
export function EvFutureScenarioDiagram() {
  const scenarios = [
    {
      label: "A",
      ja: "ハイブリッド持久戦",
      en: "Hybrid endurance",
      color: "#16a34a",
      ja_body:
        "途上国市場（インド・ASEAN・中東・アフリカ）でHEVが主力を維持。トヨタは「全方位」で規模の利益を確保し、EV専業中国勢が届かない市場を独占。確度: 高",
      en_body:
        "HEVs remain dominant in emerging markets (India, ASEAN, Middle East, Africa). Toyota's multi-pathway locks in scale where China EV-pure plays can't reach. Probability: High",
    },
    {
      label: "B",
      ja: "全固体電池ブレークスルー",
      en: "Solid-state breakthrough",
      color: "#2563eb",
      ja_body:
        "2028年頃にトヨタが全固体電池搭載EVを量産化し、航続1,200km・充電10分で市場の評価が反転。BYDの液系バッテリー優位を技術で一気に飛び越える。確度: 中",
      en_body:
        "Toyota achieves solid-state mass production around 2028, with 1,200 km range and 10-min charging, flipping market perception. Leapfrogs BYD's liquid-battery advantage. Probability: Medium",
    },
    {
      label: "C",
      ja: "中国EVによる置換加速",
      en: "Chinese EV displacement",
      color: "#dc2626",
      ja_body:
        "BYDが日本市場でシェア10%超を確立し、欧州同様に価格の「底」を再定義。日本メーカーは利益率の高い市場を次々と失い、リストラが連鎖する最悪シナリオ。確度: 中",
      en_body:
        "BYD secures 10%+ in Japan, resets price expectations as in Europe. Japanese makers lose high-margin markets one by one, triggering cascading restructuring. Probability: Medium",
    },
    {
      label: "D",
      ja: "産業再編・提携加速",
      en: "Industry consolidation",
      color: "#7c3aed",
      ja_body:
        "ホンダ・日産・スズキ・マツダなどが技術・購買・SDVで提携深化。対中国の「日本連合」が形成され、規模の不利を補い合う。確度: 中〜高",
      en_body:
        "Honda, Nissan, Suzuki, Mazda deepen ties on tech, procurement and SDV. A Japan consortium forms to offset scale disadvantages against China. Probability: Medium-to-High",
    },
  ];
  return (
    <Card
      title="日本自動車メーカーの生存シナリオ（2026–2030）"
      titleEn="Survival Scenarios for Japan's Automakers (2026–2030)"
    >
      <div className="space-y-3">
        {scenarios.map((s, i) => (
          <div key={i} className="p-3 rounded-lg border border-brief-border space-y-1.5">
            <div className="flex items-center gap-2">
              <span
                className="text-[12px] font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${s.color}20`, color: s.color }}
              >
                {s.label}
              </span>
              <span className="text-[13px] font-bold text-foreground/90">
                <T ja={s.ja} en={s.en} />
              </span>
            </div>
            <p className="text-[12px] text-foreground/70 leading-snug pl-8">
              <T ja={s.ja_body} en={s.en_body} />
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[10px] text-foreground/40">
        <T
          ja="The Brief編集部シナリオ分析（2026年4月）"
          en="The Brief editorial scenario analysis (April 2026)"
        />
      </p>
    </Card>
  );
}
