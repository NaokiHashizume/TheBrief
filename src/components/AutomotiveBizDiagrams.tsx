"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Automotive Business Model — Diagrams
   ──────────────────────────────────────────────────────────── */

const AUTO = "#0ea5e9";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const ECON = "#b9770e";

function Card({
  title,
  titleEn,
  subtitle,
  subtitleEn,
  children,
}: {
  title: string;
  titleEn?: string;
  subtitle?: string;
  subtitleEn?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
      aria-label={title}
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${AUTO}aa` }}
        >
          <T ja="図表" en="Figure" />
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">
          <T ja={title} en={titleEn ?? title} />
        </div>
        {subtitle && (
          <div className="text-[11px] text-foreground/50 mt-1">
            <T ja={subtitle} en={subtitleEn ?? subtitle} />
          </div>
        )}
      </figcaption>
      {children}
    </figure>
  );
}

/* ── 1. Overview ── */
export function AutoOverviewDiagram() {
  const stats = [
    { label: "製造品出荷額", labelEn: "Mfg. shipments", value: "60兆円", valueEn: "¥60T", note: "製造業の20%", noteEn: "20% of manufacturing", color: AUTO },
    { label: "関連雇用", labelEn: "Related jobs", value: "550万人", valueEn: "5.5M people", note: "就業者の8%", noteEn: "8% of workforce", color: NAVY },
    { label: "輸出額", labelEn: "Exports", value: "17兆円", valueEn: "¥17T", note: "総輸出の20%", noteEn: "20% of total exports", color: GREEN },
    { label: "R&D投資", labelEn: "R&D spend", value: "3兆円", valueEn: "¥3T", note: "民間R&Dの20%", noteEn: "20% of private R&D", color: ECON },
  ];
  return (
    <Card
      title="日本の自動車産業 ― マクロの規模"
      titleEn="Japan's Auto Industry — Macro Scale"
      subtitle="製造業の屋台骨"
      subtitleEn="The backbone of manufacturing"
    >
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${s.color}0d` }}
          >
            <div className="text-[10px] text-foreground/60">
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div
              className="text-[20px] font-bold tabular-nums mt-1"
              style={{ color: s.color }}
            >
              <T ja={s.value} en={s.valueEn} />
            </div>
            <div className="text-[10px] text-foreground/50 mt-0.5">
              <T ja={s.note} en={s.noteEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. Toyota PL ── */
export function AutoToyotaPLDiagram() {
  const segments = [
    { name: "自動車事業", nameEn: "Automotive", pct: 80, color: AUTO },
    { name: "金融事業", nameEn: "Financial services", pct: 15, color: GREEN },
    { name: "その他", nameEn: "Other", pct: 5, color: "#94a3b8" },
  ];
  return (
    <Card
      title="トヨタ自動車の収益構造"
      titleEn="Toyota's Revenue Structure"
      subtitle="2025年3月期：売上45兆円・営業利益5兆円"
      subtitleEn="FY Mar-2025: ¥45T revenue, ¥5T operating profit"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-lg bg-foreground/[0.04]">
            <div className="text-[10px] text-foreground/60"><T ja="売上" en="Revenue" /></div>
            <div
              className="text-[18px] font-bold tabular-nums"
              style={{ color: AUTO }}
            >
              <T ja="45兆円" en="¥45T" />
            </div>
          </div>
          <div className="p-3 rounded-lg bg-foreground/[0.04]">
            <div className="text-[10px] text-foreground/60"><T ja="営業利益" en="Op. profit" /></div>
            <div
              className="text-[18px] font-bold tabular-nums"
              style={{ color: AUTO }}
            >
              <T ja="5兆円" en="¥5T" />
            </div>
          </div>
          <div className="p-3 rounded-lg bg-foreground/[0.04]">
            <div className="text-[10px] text-foreground/60"><T ja="利益率" en="Margin" /></div>
            <div
              className="text-[18px] font-bold tabular-nums"
              style={{ color: AUTO }}
            >
              11%
            </div>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-bold text-foreground/60 mb-2">
            <T ja="営業利益のセグメント別構成" en="Operating profit by segment" />
          </div>
          <div className="space-y-1">
            {segments.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-foreground/70"><T ja={s.name} en={s.nameEn} /></span>
                  <span className="tabular-nums font-bold" style={{ color: s.color }}>
                    {s.pct}%
                  </span>
                </div>
                <div className="h-3 rounded bg-foreground/5 overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      width: `${s.pct}%`,
                      backgroundColor: s.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70 text-center">
          <T
            ja={<>為替感応度：1円の円安で営業利益 <strong>+450億円</strong></>}
            en={<>FX sensitivity: ¥1 yen weakening = <strong>+¥45B</strong> op. profit</>}
          />
        </div>
      </div>
    </Card>
  );
}

/* ── 3. Three companies ── */
export function AutoThreeCompaniesDiagram() {
  const cos = [
    {
      name: "トヨタ",
      nameEn: "Toyota",
      sales: "45兆円",
      salesEn: "¥45T",
      margin: "11%",
      strength: "HV・販売金融・全方位",
      strengthEn: "Hybrids, auto finance, full lineup",
      color: AUTO,
    },
    {
      name: "ホンダ",
      nameEn: "Honda",
      sales: "20兆円",
      salesEn: "¥20T",
      margin: "8%",
      strength: "二輪世界1位・北米",
      strengthEn: "#1 motorcycles worldwide, North America",
      color: NAVY,
    },
    {
      name: "日産",
      nameEn: "Nissan",
      sales: "13兆円",
      salesEn: "¥13T",
      margin: "2-3%",
      strength: "EV先駆者・e-POWER",
      strengthEn: "EV pioneer, e-POWER hybrids",
      color: RED,
    },
  ];
  return (
    <Card
      title="トヨタ・ホンダ・日産 比較"
      titleEn="Toyota vs. Honda vs. Nissan"
      subtitle="売上・利益率・強み"
      subtitleEn="Revenue, margin, core strengths"
    >
      <div className="space-y-2">
        {cos.map((c) => (
          <div
            key={c.name}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${c.color}0d` }}
          >
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <div className="text-[14px] font-bold" style={{ color: c.color }}>
                <T ja={c.name} en={c.nameEn} />
              </div>
              <div className="flex gap-3 text-[11px] tabular-nums">
                <span className="text-foreground/70"><T ja={`売上 ${c.sales}`} en={`Rev ${c.salesEn}`} /></span>
                <span className="font-bold" style={{ color: c.color }}>
                  <T ja={`利益率 ${c.margin}`} en={`Margin ${c.margin}`} />
                </span>
              </div>
            </div>
            <div className="text-[10px] text-foreground/60"><T ja={c.strength} en={c.strengthEn} /></div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Regions ── */
export function AutoRegionsDiagram() {
  const regions = [
    { name: "北米", nameEn: "North America", pct: 35, color: AUTO },
    { name: "日本", nameEn: "Japan", pct: 20, color: NAVY },
    { name: "アジア", nameEn: "Asia", pct: 15, color: GREEN },
    { name: "欧州", nameEn: "Europe", pct: 12, color: ECON },
    { name: "中国", nameEn: "China", pct: 8, color: RED },
    { name: "その他", nameEn: "Other", pct: 10, color: "#94a3b8" },
  ];
  return (
    <Card
      title="トヨタの地域別売上構成"
      titleEn="Toyota Revenue by Region"
      subtitle="北米が最大市場・利益源"
      subtitleEn="North America is the biggest market and profit engine"
    >
      <div className="space-y-1">
        {regions.map((r) => (
          <div key={r.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70"><T ja={r.name} en={r.nameEn} /></span>
              <span className="tabular-nums font-bold" style={{ color: r.color }}>
                {r.pct}%
              </span>
            </div>
            <div className="h-4 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${r.pct * 2}%`,
                  backgroundColor: r.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        <T
          ja="※ 北米でレクサス・ピックアップ等の高単価車が利益源"
          en="* Profit driven by high-ASP vehicles (Lexus, pickups) in North America"
        />
      </div>
    </Card>
  );
}

/* ── 5. Supply chain ── */
export function AutoSupplyChainDiagram() {
  const tiers = [
    {
      tier: "完成車メーカー",
      tierEn: "OEMs",
      ex: "トヨタ・ホンダ・日産・スズキ・マツダ・スバル",
      exEn: "Toyota, Honda, Nissan, Suzuki, Mazda, Subaru",
      color: AUTO,
      width: 100,
    },
    {
      tier: "Tier 1",
      tierEn: "Tier 1",
      ex: "デンソー・アイシン・トヨタ紡織・矢崎総業",
      exEn: "Denso, Aisin, Toyota Boshoku, Yazaki",
      color: NAVY,
      width: 80,
    },
    {
      tier: "Tier 2",
      tierEn: "Tier 2",
      ex: "中堅専門メーカー（約1万社）",
      exEn: "Mid-sized specialists (~10,000 firms)",
      color: GREEN,
      width: 60,
    },
    {
      tier: "Tier 3",
      tierEn: "Tier 3",
      ex: "素材・加工・中小（家族経営多数）",
      exEn: "Materials, machining, SMEs (many family-run)",
      color: ECON,
      width: 40,
    },
  ];
  return (
    <Card
      title="自動車サプライチェーンの4階層"
      titleEn="The 4-Tier Auto Supply Chain"
      subtitle="1台に約3万点・約1万社の中小Tier"
      subtitleEn="~30,000 parts per car, ~10,000 SME suppliers"
    >
      <div className="space-y-2">
        {tiers.map((t) => (
          <div
            key={t.tier}
            className="p-3 rounded-lg border border-brief-border"
            style={{
              backgroundColor: `${t.color}0d`,
              marginLeft: `${(100 - t.width) / 2}%`,
              marginRight: `${(100 - t.width) / 2}%`,
            }}
          >
            <div className="text-[12px] font-bold" style={{ color: t.color }}>
              <T ja={t.tier} en={t.tierEn} />
            </div>
            <div className="text-[10px] text-foreground/60 mt-0.5"><T ja={t.ex} en={t.exEn} /></div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<>EVシフトで部品点数が <strong>約2/3</strong> に。Tier 2・3 が再編・廃業に直面。</>}
          en={<>EVs cut parts count to <strong>~2/3</strong>. Tier 2/3 face consolidation and closures.</>}
        />
      </div>
    </Card>
  );
}

/* ── 6. EV shift ── */
export function AutoEvShiftDiagram() {
  const items = [
    {
      label: "部品点数",
      labelEn: "Parts count",
      ice: "約3万点",
      iceEn: "~30,000",
      ev: "約2万点",
      evEn: "~20,000",
      color: AUTO,
    },
    {
      label: "原価に占める電池",
      labelEn: "Battery share of BOM",
      ice: "0%",
      iceEn: "0%",
      ev: "30-40%",
      evEn: "30-40%",
      color: GREEN,
    },
    {
      label: "工程数",
      labelEn: "Process steps",
      ice: "多",
      iceEn: "Many",
      ev: "少（シンプル化）",
      evEn: "Few (simpler)",
      color: NAVY,
    },
    {
      label: "販売後収益",
      labelEn: "Post-sale revenue",
      ice: "なし",
      iceEn: "None",
      ev: "OTAアップグレード",
      evEn: "OTA upgrades",
      color: ECON,
    },
  ];
  return (
    <Card
      title="ICE車 vs EV ― 収益構造の違い"
      titleEn="ICE vs. EV — Different Profit Structures"
      subtitle="EVシフトは「環境」より「収益構造」の話"
      subtitleEn="The EV shift is about economics, not just the environment"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-foreground/50">
              <th className="text-left py-2 px-2"><T ja="項目" en="Item" /></th>
              <th className="text-left py-2 px-2"><T ja="ガソリン車" en="ICE" /></th>
              <th className="text-left py-2 px-2">EV</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.label} className="border-t border-brief-border">
                <td className="py-2 px-2 font-bold text-foreground">
                  <T ja={i.label} en={i.labelEn} />
                </td>
                <td className="py-2 px-2 text-foreground/70 tabular-nums">
                  <T ja={i.ice} en={i.iceEn} />
                </td>
                <td
                  className="py-2 px-2 font-bold tabular-nums"
                  style={{ color: i.color }}
                >
                  <T ja={i.ev} en={i.evEn} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${RED}0d` }}>
        <div className="text-[11px] font-bold" style={{ color: RED }}>
          <T ja="脅威：BYD（中国）" en="Threat: BYD (China)" />
        </div>
        <div className="text-[10px] text-foreground/70 mt-1">
          <T
            ja="バッテリー内製＋低価格＋高品質。2024年に販売台数で世界トップへ。"
            en="In-house batteries + low prices + high quality. Became world's top EV seller by units in 2024."
          />
        </div>
      </div>
    </Card>
  );
}
