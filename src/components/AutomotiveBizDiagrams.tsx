"use client";

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
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
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
          Figure
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

/* ── 1. Overview ── */
export function AutoOverviewDiagram() {
  const stats = [
    { label: "製造品出荷額", value: "60兆円", note: "製造業の20%", color: AUTO },
    { label: "関連雇用", value: "550万人", note: "就業者の8%", color: NAVY },
    { label: "輸出額", value: "17兆円", note: "総輸出の20%", color: GREEN },
    { label: "R&D投資", value: "3兆円", note: "民間R&Dの20%", color: ECON },
  ];
  return (
    <Card
      title="日本の自動車産業 ― マクロの規模"
      subtitle="製造業の屋台骨"
    >
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${s.color}0d` }}
          >
            <div className="text-[10px] text-foreground/60">{s.label}</div>
            <div
              className="text-[20px] font-bold tabular-nums mt-1"
              style={{ color: s.color }}
            >
              {s.value}
            </div>
            <div className="text-[10px] text-foreground/50 mt-0.5">
              {s.note}
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
    { name: "自動車事業", pct: 80, color: AUTO },
    { name: "金融事業", pct: 15, color: GREEN },
    { name: "その他", pct: 5, color: "#94a3b8" },
  ];
  return (
    <Card
      title="トヨタ自動車の収益構造"
      subtitle="2025年3月期：売上45兆円・営業利益5兆円"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-lg bg-foreground/[0.04]">
            <div className="text-[10px] text-foreground/60">売上</div>
            <div
              className="text-[18px] font-bold tabular-nums"
              style={{ color: AUTO }}
            >
              45兆円
            </div>
          </div>
          <div className="p-3 rounded-lg bg-foreground/[0.04]">
            <div className="text-[10px] text-foreground/60">営業利益</div>
            <div
              className="text-[18px] font-bold tabular-nums"
              style={{ color: AUTO }}
            >
              5兆円
            </div>
          </div>
          <div className="p-3 rounded-lg bg-foreground/[0.04]">
            <div className="text-[10px] text-foreground/60">利益率</div>
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
            営業利益のセグメント別構成
          </div>
          <div className="space-y-1">
            {segments.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-foreground/70">{s.name}</span>
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
          為替感応度：1円の円安で営業利益 <strong>+450億円</strong>
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
      sales: "45兆円",
      margin: "11%",
      strength: "HV・販売金融・全方位",
      color: AUTO,
    },
    {
      name: "ホンダ",
      sales: "20兆円",
      margin: "8%",
      strength: "二輪世界1位・北米",
      color: NAVY,
    },
    {
      name: "日産",
      sales: "13兆円",
      margin: "2-3%",
      strength: "EV先駆者・e-POWER",
      color: RED,
    },
  ];
  return (
    <Card
      title="トヨタ・ホンダ・日産 比較"
      subtitle="売上・利益率・強み"
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
                {c.name}
              </div>
              <div className="flex gap-3 text-[11px] tabular-nums">
                <span className="text-foreground/70">売上 {c.sales}</span>
                <span className="font-bold" style={{ color: c.color }}>
                  利益率 {c.margin}
                </span>
              </div>
            </div>
            <div className="text-[10px] text-foreground/60">{c.strength}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Regions ── */
export function AutoRegionsDiagram() {
  const regions = [
    { name: "北米", pct: 35, color: AUTO },
    { name: "日本", pct: 20, color: NAVY },
    { name: "アジア", pct: 15, color: GREEN },
    { name: "欧州", pct: 12, color: ECON },
    { name: "中国", pct: 8, color: RED },
    { name: "その他", pct: 10, color: "#94a3b8" },
  ];
  return (
    <Card
      title="トヨタの地域別売上構成"
      subtitle="北米が最大市場・利益源"
    >
      <div className="space-y-1">
        {regions.map((r) => (
          <div key={r.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70">{r.name}</span>
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
        ※ 北米でレクサス・ピックアップ等の高単価車が利益源
      </div>
    </Card>
  );
}

/* ── 5. Supply chain ── */
export function AutoSupplyChainDiagram() {
  const tiers = [
    {
      tier: "完成車メーカー",
      ex: "トヨタ・ホンダ・日産・スズキ・マツダ・スバル",
      color: AUTO,
      width: 100,
    },
    {
      tier: "Tier 1",
      ex: "デンソー・アイシン・トヨタ紡織・矢崎総業",
      color: NAVY,
      width: 80,
    },
    {
      tier: "Tier 2",
      ex: "中堅専門メーカー（約1万社）",
      color: GREEN,
      width: 60,
    },
    {
      tier: "Tier 3",
      ex: "素材・加工・中小（家族経営多数）",
      color: ECON,
      width: 40,
    },
  ];
  return (
    <Card
      title="自動車サプライチェーンの4階層"
      subtitle="1台に約3万点・約1万社の中小Tier"
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
              {t.tier}
            </div>
            <div className="text-[10px] text-foreground/60 mt-0.5">{t.ex}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        EVシフトで部品点数が <strong>約2/3</strong> に。Tier 2・3 が再編・廃業に直面。
      </div>
    </Card>
  );
}

/* ── 6. EV shift ── */
export function AutoEvShiftDiagram() {
  const items = [
    {
      label: "部品点数",
      ice: "約3万点",
      ev: "約2万点",
      color: AUTO,
    },
    {
      label: "原価に占める電池",
      ice: "0%",
      ev: "30-40%",
      color: GREEN,
    },
    {
      label: "工程数",
      ice: "多",
      ev: "少（シンプル化）",
      color: NAVY,
    },
    {
      label: "販売後収益",
      ice: "なし",
      ev: "OTAアップグレード",
      color: ECON,
    },
  ];
  return (
    <Card
      title="ICE車 vs EV ― 収益構造の違い"
      subtitle="EVシフトは「環境」より「収益構造」の話"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-foreground/50">
              <th className="text-left py-2 px-2">項目</th>
              <th className="text-left py-2 px-2">ガソリン車</th>
              <th className="text-left py-2 px-2">EV</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.label} className="border-t border-brief-border">
                <td className="py-2 px-2 font-bold text-foreground">
                  {i.label}
                </td>
                <td className="py-2 px-2 text-foreground/70 tabular-nums">
                  {i.ice}
                </td>
                <td
                  className="py-2 px-2 font-bold tabular-nums"
                  style={{ color: i.color }}
                >
                  {i.ev}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${RED}0d` }}>
        <div className="text-[11px] font-bold" style={{ color: RED }}>
          脅威：BYD（中国）
        </div>
        <div className="text-[10px] text-foreground/70 mt-1">
          バッテリー内製＋低価格＋高品質。2024年に販売台数で世界トップへ。
        </div>
      </div>
    </Card>
  );
}
