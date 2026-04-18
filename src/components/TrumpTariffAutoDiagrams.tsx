"use client";

import { T } from "./T";

const ACCENT = "#ef4444";

function Card({
  title,
  titleEn,
  children,
}: {
  title: string;
  titleEn: string;
  children: React.ReactNode;
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

/* ── 1. tariff-impact-summary ── */
export function TariffImpactSummaryDiagram() {
  const companies = [
    { ja: "トヨタ", en: "Toyota", impact: "▲3.1兆円（純利益35%減）", impactEn: "▲¥3.1T (net profit −35%)", bar: 95 },
    { ja: "ホンダ", en: "Honda", impact: "▲7,134億円（営業利益）", impactEn: "▲¥713.4B (operating)", bar: 60 },
    { ja: "日産", en: "Nissan", impact: "▲数千億円（赤字転落）", impactEn: "▲Hundreds of ¥B (deficit)", bar: 50 },
    { ja: "スズキ", en: "Suzuki", impact: "▲数百億円", impactEn: "▲Tens of ¥B", bar: 30 },
    { ja: "マツダ", en: "Mazda", impact: "▲数百億円", impactEn: "▲Tens of ¥B", bar: 25 },
  ];
  return (
    <Card title="大手7社への関税影響（2026年3月期）" titleEn="Tariff Impact on Major 7 Automakers (FY2026 Mar)">
      <div className="mb-4 p-4 rounded-xl text-center" style={{ background: `${ACCENT}0d` }}>
        <div className="text-[11px] text-foreground/50 mb-1">
          <T ja="大手7社 合計押し下げ" en="Total profit reduction (top 7)" />
        </div>
        <div className="text-[32px] font-bold font-serif" style={{ color: ACCENT }}>▲2.7兆円</div>
        <div className="text-[11px] text-foreground/40 mt-1">
          <T ja="関税率: 25% → 日米合意で15%（事前水準2.5%の6倍）" en="Tariff: 25% → 15% by US-Japan deal (6× pre-tariff 2.5%)" />
        </div>
      </div>
      <div className="space-y-3">
        {companies.map((c, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-[12px] mb-1">
              <span className="font-medium text-foreground/80">
                <T ja={c.ja} en={c.en} />
              </span>
              <span className="text-foreground/55 text-[11px]">
                <T ja={c.impact} en={c.impactEn} />
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-foreground/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${c.bar}%`, backgroundColor: ACCENT, opacity: 0.6 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/40">
        <T ja="出典: 日本経済新聞 / Strategy& PwC" en="Source: Nikkei / Strategy& PwC" />
      </div>
    </Card>
  );
}

/* ── 2. tariff-production-shift ── */
export function TariffProductionShiftDiagram() {
  const items = [
    {
      ja: "ホンダ",
      en: "Honda",
      action: "シビック・CR-Vを米国生産に移管計画",
      actionEn: "Plans to shift Civic/CR-V to US production",
      type: "move",
    },
    {
      ja: "トヨタ",
      en: "Toyota",
      action: "ケンタッキー工場の生産能力を増強",
      actionEn: "Expanding Kentucky plant capacity",
      type: "move",
    },
    {
      ja: "中小サプライヤー",
      en: "SME Suppliers",
      action: "移転困難——資金力・人材に限界",
      actionEn: "Cannot relocate — limited capital & talent",
      type: "stuck",
    },
    {
      ja: "経産省「ミカタプロジェクト」",
      en: "METI 'Mikata Project'",
      action: "中堅・中小の米国進出支援（規模は限定的）",
      actionEn: "Supports SME US entry (limited scale)",
      type: "policy",
    },
  ];
  return (
    <Card title="生産移転の現実——移転できる企業とできない企業" titleEn="Production Relocation Reality — Who Can and Cannot Move">
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-xl"
            style={{
              background:
                item.type === "stuck"
                  ? `${ACCENT}0d`
                  : item.type === "policy"
                  ? "#3b82f60d"
                  : "#22c55e0d",
            }}
          >
            <span
              className="text-[11px] font-bold px-2 py-0.5 rounded-full mt-0.5 flex-shrink-0"
              style={{
                color:
                  item.type === "stuck"
                    ? ACCENT
                    : item.type === "policy"
                    ? "#3b82f6"
                    : "#22c55e",
                background:
                  item.type === "stuck"
                    ? `${ACCENT}18`
                    : item.type === "policy"
                    ? "#3b82f618"
                    : "#22c55e18",
              }}
            >
              <T
                ja={item.type === "stuck" ? "困難" : item.type === "policy" ? "政策" : "移転"}
                en={item.type === "stuck" ? "Stuck" : item.type === "policy" ? "Policy" : "Moving"}
              />
            </span>
            <div>
              <div className="text-[12px] font-bold text-foreground/80">
                <T ja={item.ja} en={item.en} />
              </div>
              <div className="text-[11px] text-foreground/55 mt-0.5">
                <T ja={item.action} en={item.actionEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. tariff-supply-chain-impact ── */
export function TariffSupplyChainImpactDiagram() {
  const chain = [
    { ja: "OEM（自動車メーカー）", en: "OEM (Automakers)", detail: "米国生産移転→日本工場稼働率低下", detailEn: "US shift → Japan plant utilization drops", level: 1 },
    { ja: "Tier1 部品メーカー", en: "Tier 1 Suppliers", detail: "鉄鋼・プレス・電子部品の需要減", detailEn: "Demand drops for steel/stamped/electronic parts", level: 2 },
    { ja: "Tier2/3 サプライヤー", en: "Tier 2/3 Suppliers", detail: "工作機械・精密機器の発注減", detailEn: "Orders for machine tools & precision parts fall", level: 3 },
  ];
  return (
    <Card title="サプライチェーン連鎖被害の構造" titleEn="Supply Chain Cascade Damage Structure">
      <div className="space-y-2 mb-5">
        {chain.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5"
              style={{ background: `${ACCENT}18`, color: ACCENT }}
            >
              {i + 1}
            </div>
            <div className="flex-1 p-3 rounded-xl bg-foreground/[0.03]">
              <div className="text-[12px] font-bold text-foreground/80">
                <T ja={item.ja} en={item.en} />
              </div>
              <div className="text-[11px] text-foreground/50 mt-0.5">
                <T ja={item.detail} en={item.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl border" style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}08` }}>
        <div className="text-[11px] text-foreground/50 mb-1">
          <T ja="国内乗用車生産への影響（日本総研試算）" en="Impact on domestic passenger car production (JRI estimate)" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-bold" style={{ color: ACCENT }}>
            <T ja="生産▲4%減 / 最大5.4万人の雇用影響" en="Production −4% / Up to 54,000 jobs at risk" />
          </span>
        </div>
      </div>
    </Card>
  );
}

/* ── 4. tariff-nissan-crisis ── */
export function TariffNissanCrisisDiagram() {
  const scenarios = [
    {
      ja: "ホンダ・日産 経営統合",
      en: "Honda-Nissan Merger",
      desc: "2025年に一度協議→条件面で難航→再活発化の可能性",
      descEn: "Talks in 2025 → stalled → may resume amid tariff pressure",
      status: "検討",
      statusEn: "Under review",
      color: "#f59e0b",
    },
    {
      ja: "鴻海による日産買収",
      en: "Foxconn Nissan Acquisition",
      desc: "台湾EMS大手が関心→政府の外資規制が壁",
      descEn: "Taiwan EMS giant interested → blocked by FDI rules",
      status: "困難",
      statusEn: "Blocked",
      color: ACCENT,
    },
    {
      ja: "日産単独再建",
      en: "Nissan Solo Restructuring",
      desc: "国内工場稼働率60%台前半→コスト削減と構造改革の同時進行",
      descEn: "Plant utilization in low 60s% → cost cuts + structural reform",
      status: "進行中",
      statusEn: "In progress",
      color: "#22c55e",
    },
  ];
  return (
    <Card title="日産・三菱の経営危機と業界再編シナリオ" titleEn="Nissan/Mitsubishi Crisis & Industry Restructuring Scenarios">
      <div className="space-y-3">
        {scenarios.map((s, i) => (
          <div key={i} className="p-4 rounded-xl bg-foreground/[0.03] border border-foreground/[0.04]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] font-bold text-foreground/80">
                <T ja={s.ja} en={s.en} />
              </span>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ color: s.color, background: `${s.color}18` }}
              >
                <T ja={s.status} en={s.statusEn} />
              </span>
            </div>
            <p className="text-[11px] text-foreground/55">
              <T ja={s.desc} en={s.descEn} />
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. tariff-ev-double-burden ── */
export function TariffEvDoubleBurdenDiagram() {
  const burdens = [
    {
      ja: "関税コスト",
      en: "Tariff Cost",
      detail: "15%関税（事前水準の6倍）が継続",
      detailEn: "15% tariff ongoing (6× pre-tariff level)",
      icon: "🔴",
    },
    {
      ja: "EV転換投資",
      en: "EV Transition Cost",
      detail: "トヨタ4兆円・ホンダ10兆円（〜2030年）",
      detailEn: "Toyota ¥4T / Honda ¥10T by 2030",
      icon: "⚡",
    },
  ];
  return (
    <Card title="関税×EV化の二重苦" titleEn="Double Burden: Tariffs × EV Transition">
      <div className="grid grid-cols-2 gap-3 mb-4">
        {burdens.map((b, i) => (
          <div key={i} className="p-4 rounded-xl text-center" style={{ background: `${ACCENT}0d` }}>
            <div className="text-[24px] mb-2">{b.icon}</div>
            <div className="text-[12px] font-bold text-foreground/80 mb-1">
              <T ja={b.ja} en={b.en} />
            </div>
            <div className="text-[11px] text-foreground/55">
              <T ja={b.detail} en={b.detailEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-xl bg-foreground/[0.03] text-center">
        <div className="text-[12px] text-foreground/55">
          <T ja="競合: Tesla・BYDは「関税なし」かつ「EV転換済み」" en="Rivals Tesla & BYD face neither burden — no tariffs, already EV-native" />
        </div>
      </div>
    </Card>
  );
}

/* ── 6. tariff-government-response ── */
export function TariffGovernmentResponseDiagram() {
  const policies = [
    { ja: "ミカタプロジェクト", en: "Mikata Project", desc: "中堅・中小部品メーカーの米国進出支援", descEn: "Supports SME parts makers entering US market" },
    { ja: "国内生産維持補助金", en: "Domestic Production Subsidy", desc: "空洞化防止を旗印に補助金・税制優遇を検討", descEn: "Subsidies to prevent industrial hollowing-out" },
    { ja: "日米関税交渉", en: "Japan-US Tariff Talks", desc: "25%→15%へ引き下げ合意（2026年7月）", descEn: "Reduced from 25% to 15% (July 2026 agreement)" },
  ];
  const limits = [
    { ja: "スピードのミスマッチ", en: "Speed Mismatch", desc: "支援が整う前に中小が力尽きるリスク", descEn: "SMEs may run out of capacity before support arrives" },
    { ja: "米国政治の不確実性", en: "US Political Uncertainty", desc: "大統領交代で再び25%に戻るリスク", descEn: "Risk of return to 25% under a new president" },
    { ja: "円安の両刃効果", en: "Yen Weakness Double-Edge", desc: "輸出競争力を支えるが輸入コストも押し上げ", descEn: "Supports exports but raises import input costs" },
  ];
  return (
    <Card title="政府の対応措置と構造的限界" titleEn="Government Measures & Structural Limitations">
      <div className="mb-4">
        <div className="text-[11px] font-bold text-foreground/40 uppercase tracking-wider mb-2">
          <T ja="施策" en="Policies" />
        </div>
        <div className="space-y-2">
          {policies.map((p, i) => (
            <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-foreground/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#22c55e" }} />
              <div>
                <span className="text-[12px] font-bold text-foreground/75">
                  <T ja={p.ja} en={p.en} />
                </span>
                <span className="text-[11px] text-foreground/50 ml-2">
                  <T ja={p.desc} en={p.descEn} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[11px] font-bold text-foreground/40 uppercase tracking-wider mb-2">
          <T ja="限界" en="Limitations" />
        </div>
        <div className="space-y-2">
          {limits.map((l, i) => (
            <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-foreground/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: ACCENT }} />
              <div>
                <span className="text-[12px] font-bold text-foreground/75">
                  <T ja={l.ja} en={l.en} />
                </span>
                <span className="text-[11px] text-foreground/50 ml-2">
                  <T ja={l.desc} en={l.descEn} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* ── 7. tariff-strategic-view ── */
export function TariffStrategicViewDiagram() {
  const paths = [
    {
      ja: "販売市場ごとの現地生産比率向上",
      en: "Increase local production per market",
      note: "移行に数年・数兆円のコスト",
      noteEn: "Takes years and trillions of yen",
    },
    {
      ja: "日本を「プレミアム・高付加価値部品」拠点に特化",
      en: "Specialize Japan as premium/high-value parts hub",
      note: "産業構造転換が前提",
      noteEn: "Requires structural industrial transformation",
    },
    {
      ja: "EVサプライチェーンの国内産業化",
      en: "Domesticate EV supply chain (batteries/motors)",
      note: "関税回避かつ競争力向上",
      noteEn: "Bypasses tariffs and builds competitiveness",
    },
  ];
  return (
    <Card title="「輸出依存」の次——日本自動車産業の戦略的方向性" titleEn="Beyond 'Export Dependence' — Strategic Options for Japan's Auto Industry">
      <div className="mb-4 p-4 rounded-xl text-center" style={{ background: `${ACCENT}0d` }}>
        <div className="text-[12px] text-foreground/60">
          <T
            ja="2.7兆円の打撃が問い直すビジネスモデル：「日本で作って世界に売る」の持続可能性"
            en="The ¥2.7T shock challenges 'make in Japan, sell globally' model"
          />
        </div>
      </div>
      <div className="space-y-3">
        {paths.map((p, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-foreground/[0.03]">
            <span
              className="text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${ACCENT}18`, color: ACCENT }}
            >
              {i + 1}
            </span>
            <div>
              <div className="text-[12px] font-bold text-foreground/80">
                <T ja={p.ja} en={p.en} />
              </div>
              <div className="text-[11px] text-foreground/50 mt-0.5">
                <T ja={p.note} en={p.noteEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
