"use client";

import { T } from "./T";

const ACCENT = "#0ea5e9";

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
 * Article 6 — Honda × Nissan: One Year After
 * ============================================================ */

export function HnTimelineDiagram() {
  const steps = [
    { d: "2024-12-23", ja: "統合協議開始を発表", en: "Merger talks announced" },
    { d: "2025-01-下旬", dEn: "Late Jan 2025", ja: "ホンダが子会社化案を提示", en: "Honda proposes subsidiary structure" },
    { d: "2025-02-13", ja: "両社が協議打ち切りを共同発表", en: "Talks called off" },
    { d: "2025-04-01", ja: "エスピノーサ氏が日産CEO就任", en: "Espinosa becomes Nissan CEO" },
    { d: "2025-05", ja: "Re:Nissan発表", en: "Re:Nissan unveiled" },
    { d: "2025-11", ja: "北米での共同開発検討を公表", en: "North America co-dev discussed" },
  ];
  return (
    <Card
      title="白紙までの90日 — そして1年後まで"
      titleEn="90 Days to Collapse — and the Year After"
    >
      <div className="space-y-2">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
          >
            <span
              className="text-[10px] font-bold tabular-nums whitespace-nowrap px-2 py-1 rounded"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              <T ja={s.d} en={s.dEn ?? s.d} />
            </span>
            <span className="text-[12px] text-foreground/80 leading-snug">
              <T ja={s.ja} en={s.en} />
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function RenissanNumbersDiagram() {
  const rows = [
    { ja: "固定費削減目標", en: "Fixed-cost cut target", v: "¥250 B" },
    { ja: "2025年12月時点の達成", en: "Achieved by Dec 2025", v: "¥160 B" },
    { ja: "工場の統廃合", en: "Plants consolidated", v: "7" },
    { ja: "FY2025 営業損益見通し", en: "FY2025 op. profit guidance", v: "–¥60 B" },
    { ja: "FY2025 純損失見通し", en: "FY2025 net loss guidance", v: "–¥650 B" },
  ];
  return (
    <Card
      title="Re:Nissan の数字（2026年4月時点）"
      titleEn="Re:Nissan by the Numbers (April 2026)"
    >
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-lg border border-brief-border"
          >
            <div className="text-[13px] font-medium text-foreground/80">
              <T ja={r.ja} en={r.en} />
            </div>
            <div
              className="text-[13px] font-bold tabular-nums px-3 py-1 rounded-full"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {r.v}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function HondaAfterDiagram() {
  const items = [
    {
      ja: "0シリーズ",
      en: "0 Series",
      desc: "北米で2026年下半期から量産",
      descEn: "NA production from H2 2026",
    },
    {
      ja: "中国販売",
      en: "China sales",
      desc: "前年比 約-30%",
      descEn: "≈ -30% YoY",
    },
    {
      ja: "北米HVシフト",
      en: "NA hybrid shift",
      desc: "ラインナップが追随できず",
      descEn: "Lineup lags demand",
    },
    {
      ja: "日産との協議",
      en: "Talks with Nissan",
      desc: "北米・限定範囲で継続",
      descEn: "Continuing, NA-scoped",
    },
  ];
  return (
    <Card title="1年後のホンダの4つの顔" titleEn="Honda One Year On — Four Faces">
      <div className="grid grid-cols-2 gap-3">
        {items.map((it, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-l-4 bg-brief-card"
            style={{ borderLeftColor: ACCENT }}
          >
            <div className="text-[13px] font-bold text-foreground/90 mb-1">
              <T ja={it.ja} en={it.en} />
            </div>
            <div className="text-[11px] text-foreground/55">
              <T ja={it.desc} en={it.descEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function HnNaCooperationDiagram() {
  const themes = [
    { n: 1, ja: "HV/PHEVパワートレイン共通化", en: "Shared HV/PHEV powertrains" },
    { n: 2, ja: "北米向け車両共同開発", en: "Joint NA vehicle development" },
    { n: 3, ja: "EV充電・ソフトウェア連携", en: "EV charging & software cooperation" },
  ];
  return (
    <Card
      title="北米協業の3テーマ"
      titleEn="Three Threads of North America Cooperation"
    >
      <ol className="space-y-2">
        {themes.map((t) => (
          <li
            key={t.n}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
          >
            <span
              className="text-[11px] font-bold tabular-nums w-6 h-6 rounded-full flex items-center justify-center"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {t.n}
            </span>
            <span className="text-[13px] text-foreground/80 font-medium">
              <T ja={t.ja} en={t.en} />
            </span>
          </li>
        ))}
      </ol>
    </Card>
  );
}

export function HnRematchScenariosDiagram() {
  const scenarios = [
    { tag: "A", ja: "再統合", en: "Re-merger", prob: "Low" },
    { tag: "B", ja: "北米限定のJV", en: "NA-only JV", prob: "Med-High" },
    { tag: "C", ja: "別の組み合わせ", en: "Different partner", prob: "Medium" },
  ];
  return (
    <Card
      title="3つのシナリオ — 2026年4月時点の蓋然性"
      titleEn="Three Scenarios — Probabilities as of April 2026"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {scenarios.map((s) => (
          <div
            key={s.tag}
            className="p-4 rounded-xl border border-brief-border text-center"
          >
            <div
              className="inline-block text-[10px] font-bold uppercase tracking-[2px] px-2 py-0.5 rounded mb-2"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              Scenario {s.tag}
            </div>
            <div className="text-[14px] font-bold text-foreground/85 mb-1">
              <T ja={s.ja} en={s.en} />
            </div>
            <div className="text-[11px] text-foreground/50">{s.prob}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ============================================================
 * Article 7 — Chinese EVs in Europe
 * ============================================================ */

export function CnEuShareDiagram() {
  const years = [
    { y: "2023", v: "≈ 3%" },
    { y: "2024", v: "≈ 5%" },
    { y: "2025 Dec", v: "10%" },
  ];
  return (
    <Card
      title="欧州市場での中国ブランドシェア"
      titleEn="Chinese Brand Share of the European Market"
    >
      <div className="space-y-3">
        {years.map((yr, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[11px] tabular-nums w-20 text-foreground/60">
              {yr.y}
            </span>
            <div className="flex-1 h-6 rounded-full bg-brief-border/40 relative overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width:
                    yr.y === "2023"
                      ? "15%"
                      : yr.y === "2024"
                        ? "25%"
                        : "50%",
                  backgroundColor: ACCENT,
                }}
              />
            </div>
            <span
              className="text-[13px] font-bold tabular-nums w-16 text-right"
              style={{ color: ACCENT }}
            >
              {yr.v}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[10px] text-foreground/40">
        <T
          ja="出所: Schmidt Automotive Research ほか（概算）"
          en="Source: Schmidt Automotive Research et al. (approximate)"
        />
      </div>
    </Card>
  );
}

export function CnEuTariffsDiagram() {
  const rows = [
    { maker: "BYD", cv: "+17.0%", total: "27.0%" },
    { maker: "Geely", cv: "+18.8%", total: "28.8%" },
    { maker: "SAIC (MG)", cv: "+35.3%", total: "45.3%" },
  ];
  return (
    <Card
      title="EU の中国製BEVへの関税（2024年10月〜）"
      titleEn="EU Duties on Chinese-Built BEVs (from Oct 2024)"
    >
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-3 gap-2 p-3 rounded-lg border border-brief-border text-[12px]"
          >
            <div className="font-bold text-foreground/85">{r.maker}</div>
            <div className="text-foreground/60 tabular-nums">
              <T ja="相殺関税" en="Counterv." /> {r.cv}
            </div>
            <div
              className="font-bold tabular-nums text-right"
              style={{ color: ACCENT }}
            >
              <T ja="合計" en="Total" /> {r.total}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/55 leading-relaxed">
        <T
          ja="関税対象はBEVのみ。PHEVは対象外 → 2024-2025年で中国製PHEVの欧州輸出は約14倍に。"
          en="BEVs only. PHEVs are exempt — Chinese PHEV exports to Europe jumped ~14x from 2024 to 2025."
        />
      </div>
    </Card>
  );
}

export function CnEuFactoriesDiagram() {
  const plants = [
    {
      maker: "BYD",
      loc: "Hungary (Szeged)",
      cap: "200,000/yr",
      start: "2026",
    },
    {
      maker: "Chery",
      loc: "Spain (Barcelona)",
      cap: "—",
      start: "2025",
    },
    {
      maker: "Leapmotor",
      loc: "Poland (via Stellantis JV)",
      cap: "—",
      start: "2025",
    },
  ];
  return (
    <Card
      title="中国メーカーの欧州域内工場"
      titleEn="Chinese OEM Plants Inside Europe"
    >
      <div className="space-y-2">
        {plants.map((p, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-brief-border"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[13px] font-bold text-foreground/85">
                {p.maker}
              </span>
              <span
                className="text-[10px] font-bold tabular-nums px-2 py-0.5 rounded-full"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                {p.start}
              </span>
            </div>
            <div className="text-[11px] text-foreground/55">
              {p.loc} · {p.cap}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function CnEuMinPriceDiagram() {
  const compare = [
    {
      label: "現行",
      labelEn: "Current",
      desc: "一律の相殺関税",
      descEn: "Flat countervailing duties",
    },
    {
      label: "新制度案",
      labelEn: "Proposed",
      desc: "メーカー別の最低価格合意",
      descEn: "Per-maker minimum-price commitments",
    },
  ];
  return (
    <Card
      title="関税 vs 最低価格制度"
      titleEn="Tariffs vs Minimum-Price Mechanism"
    >
      <div className="grid grid-cols-2 gap-3">
        {compare.map((c, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-l-4 bg-brief-card"
            style={{ borderLeftColor: ACCENT }}
          >
            <div
              className="text-[10px] uppercase tracking-[1.5px] font-bold mb-2"
              style={{ color: ACCENT }}
            >
              <T ja={c.label} en={c.labelEn} />
            </div>
            <div className="text-[12px] text-foreground/70 leading-snug">
              <T ja={c.desc} en={c.descEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function CnEuImpactDiagram() {
  const impacts = [
    {
      ja: "EV価格の下方修正",
      en: "EV price reset",
      detail: "€10〜15k 下振れ",
      detailEn: "€10-15k lower",
    },
    {
      ja: "モデルサイクル圧縮",
      en: "Shorter model cycles",
      detail: "5-7年 → 2-3年",
      detailEn: "5-7 yrs → 2-3 yrs",
    },
    {
      ja: "OEM 同士の提携",
      en: "OEM tie-ups",
      detail: "VW×Xpeng, Stellantis×Leapmotor",
      detailEn: "VW×Xpeng, Stellantis×Leapmotor",
    },
  ];
  return (
    <Card
      title="欧州メーカーへの3つの衝撃"
      titleEn="Three Shocks Hitting European OEMs"
    >
      <div className="space-y-2">
        {impacts.map((im, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-brief-border"
          >
            <div className="text-[13px] font-bold text-foreground/85 mb-1">
              <T ja={im.ja} en={im.en} />
            </div>
            <div className="text-[11px] text-foreground/55">
              <T ja={im.detail} en={im.detailEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ============================================================
 * Article 8 — Solid-State Battery Race
 * ============================================================ */

export function SsbWhyDiagram() {
  const rows = [
    {
      ja: "エネルギー密度",
      en: "Energy density",
      now: "~280 Wh/kg",
      next: "400-500 Wh/kg",
    },
    {
      ja: "安全性",
      en: "Safety",
      now: "可燃性電解液",
      nowEn: "Flammable liquid",
      next: "不燃・低リスク",
      nextEn: "Non-flammable",
    },
    {
      ja: "急速充電",
      en: "Fast charge",
      now: "15→80% ≈ 30分",
      nowEn: "15→80% in ~30 min",
      next: "15→80% ≈ 10-15分",
      nextEn: "15→80% in ~10-15 min",
    },
  ];
  return (
    <Card
      title="リチウムイオン vs 全固体"
      titleEn="Lithium-Ion vs Solid-State"
    >
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-3 gap-2 p-3 rounded-lg border border-brief-border text-[12px]"
          >
            <div className="font-semibold text-foreground/70">
              <T ja={r.ja} en={r.en} />
            </div>
            <div className="text-foreground/60">
              <span
                className="text-[9px] font-bold uppercase tracking-wider mr-1 text-foreground/40"
              >
                Li-ion
              </span>
              <T ja={r.now} en={r.nowEn ?? r.now} />
            </div>
            <div className="text-foreground/85">
              <span
                className="text-[9px] font-bold uppercase tracking-wider mr-1"
                style={{ color: ACCENT }}
              >
                SSB
              </span>
              <T ja={r.next} en={r.nextEn ?? r.next} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SsbToyotaDiagram() {
  const items = [
    { y: "2023", ja: "出光と協業を発表", en: "Idemitsu partnership announced" },
    { y: "2026-01", ja: "出光が大型パイロット装置着工", en: "Idemitsu breaks ground on pilot facility" },
    { y: "2027-28", ja: "フラッグシップ車に少量搭載", en: "Small-volume launch in flagships" },
    { y: "2030", ja: "年産 9 GWh 規模を想定", en: "Target: ≈ 9 GWh/yr" },
  ];
  return (
    <Card
      title="トヨタ × 出光 9 GWh ロードマップ"
      titleEn="Toyota × Idemitsu — The 9 GWh Roadmap"
    >
      <div className="space-y-2">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
          >
            <span
              className="text-[10px] font-bold tabular-nums whitespace-nowrap px-2 py-1 rounded"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {it.y}
            </span>
            <span className="text-[12px] text-foreground/80 leading-snug">
              <T ja={it.ja} en={it.en} />
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SsbNissanDiagram() {
  const specs = [
    { ja: "方式", en: "Chemistry", v: "Sulfide" },
    { ja: "目標エネルギー密度", en: "Target density", v: "~350 Wh/kg" },
    { ja: "急速充電目標", en: "Fast-charge target", v: "15→80% / 15 min" },
    { ja: "パイロットライン稼働", en: "Pilot line live", v: "2025-01" },
    { ja: "車両搭載目標", en: "Vehicle target", v: "FY2028" },
  ];
  return (
    <Card
      title="日産の全固体電池スペック"
      titleEn="Nissan's Solid-State Battery Specs"
    >
      <div className="space-y-2">
        {specs.map((s, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-lg border border-brief-border"
          >
            <div className="text-[13px] font-medium text-foreground/80">
              <T ja={s.ja} en={s.en} />
            </div>
            <div
              className="text-[12px] font-bold tabular-nums px-3 py-1 rounded-full"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SsbRivalsDiagram() {
  const rivals = [
    {
      name: "Samsung SDI",
      country: "KR",
      chem: "Sulfide",
      target: "Pilot MP 2027",
    },
    {
      name: "QuantumScape",
      country: "US",
      chem: "Oxide",
      target: "Vehicle eval 2026",
    },
    {
      name: "CATL",
      country: "CN",
      chem: "Condensed-state",
      target: "Commercial 2027",
    },
    {
      name: "WeLion",
      country: "CN",
      chem: "Semi-solid",
      target: "Shipping since 2024",
    },
  ];
  return (
    <Card
      title="日本勢を追う 4 社"
      titleEn="The Four Players Chasing Japan"
    >
      <div className="space-y-2">
        {rivals.map((r, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-brief-border"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[13px] font-bold text-foreground/85">
                {r.name}
              </span>
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                {r.country}
              </span>
              <span className="text-[10px] text-foreground/45">{r.chem}</span>
            </div>
            <div className="text-[11px] text-foreground/60">{r.target}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SsbProductionRealityDiagram() {
  const phases = [
    {
      p: "2027-28",
      ja: "フラッグシップ車で少量搭載",
      en: "Small volumes in flagships",
    },
    {
      p: "2029-30",
      ja: "プレミアム帯へ拡大",
      en: "Expansion to premium segments",
    },
    {
      p: "2031-33",
      ja: "普及帯への展開",
      en: "Move into mainstream segments",
    },
    {
      p: "2035+",
      ja: "主流化の可能性",
      en: "Potential mainstream chemistry",
    },
  ];
  return (
    <Card
      title="全固体電池の市場投入シナリオ"
      titleEn="Solid-State Deployment Scenario"
    >
      <div className="space-y-2">
        {phases.map((ph, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
          >
            <span
              className="text-[10px] font-bold tabular-nums whitespace-nowrap px-2 py-1 rounded"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {ph.p}
            </span>
            <span className="text-[12px] text-foreground/80 leading-snug">
              <T ja={ph.ja} en={ph.en} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/50 leading-relaxed">
        <T
          ja="試作コストは現行Li-ionの3〜5倍。歩留まりを95%超に持ち上げることが量産化の鍵。"
          en="Prototype cost is 3-5x current Li-ion. Pushing yields past 95% is the key to mass production."
        />
      </div>
    </Card>
  );
}
