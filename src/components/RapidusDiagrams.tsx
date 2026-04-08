"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Rapidus 2nm Pilot Line — Diagrams
   ──────────────────────────────────────────────────────────── */

const ICT = "#1e8449";
const ACCENT = "#0d9488";
const WARN = "#dc2626";

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
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${ICT}99` }}
        >
          <T ja="図表" en="FIGURE" />
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

/* ── 1. Overview: Why Rapidus matters ── */
export function RapidusOverviewDiagram() {
  const items = [
    { era: "1990s", label: "日本ロジック", labelEn: "Japan logic", share: "50%+", color: ICT },
    { era: "2000s", label: "韓・台に敗退", labelEn: "Ceded to Korea & Taiwan", share: "～10%", color: "#94a3b8" },
    { era: "2020s", label: "最先端は0%", labelEn: "Cutting-edge: 0%", share: "0%", color: WARN },
    { era: "2027～", label: "Rapidus 2nm", labelEn: "Rapidus 2nm", share: "目標10%", shareEn: "Target 10%", color: ACCENT },
  ];
  return (
    <Card title={<T ja="日本ロジック半導体 世界シェアの推移と Rapidus の位置づけ" en="Japan Logic Semiconductor Global Share and Rapidus's Role" />}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((it) => (
          <div
            key={it.era}
            className="p-3 rounded-lg border border-brief-border text-center"
            style={{ backgroundColor: `${it.color}0a` }}
          >
            <div
              className="text-[10px] tracking-[1.5px] uppercase font-bold"
              style={{ color: it.color }}
            >
              {it.era}
            </div>
            <div className="text-[12px] font-bold text-foreground mt-1">
              <T ja={it.label} en={it.labelEn} />
            </div>
            <div
              className="text-[18px] font-bold tabular-nums mt-1"
              style={{ color: it.color }}
            >
              {it.shareEn ? <T ja={it.share} en={it.shareEn} /> : it.share}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        <T ja={`※「最先端」は5nm 以下のロジック半導体ベース`} en={`* "Cutting-edge" defined as logic semiconductors at 5nm or below`} />
      </div>
    </Card>
  );
}

/* ── 2. IIM-1 Timeline ── */
export function RapidusIim1TimelineDiagram() {
  const milestones = [
    { date: "2023-09", label: "起工式", labelEn: "Groundbreaking", detail: "千歳市 IIM-1 着工", detailEn: "IIM-1 construction begins in Chitose" },
    { date: "2024-12", label: "建屋完成", labelEn: "Building complete", detail: "外装工事完了", detailEn: "Exterior construction finished" },
    { date: "2025-04", label: "クリーンルーム稼働", labelEn: "Cleanroom operational", detail: "ASML EUV搬入", detailEn: "ASML EUV tool installed" },
    { date: "2025-中", label: "パイロット稼働", labelEn: "Pilot line running", detail: "2nm 試作開始", detailEn: "2nm prototyping begins" },
    { date: "2026-04", label: "本格稼働", labelEn: "Full operations", detail: "顧客サンプル出荷", detailEn: "Customer sample shipments" },
    { date: "2027", label: "量産開始", labelEn: "Mass production", detail: "目標年", detailEn: "Target year" },
  ];
  return (
    <Card title={<T ja="IIM-1 工場のマイルストーン（北海道千歳）" en="IIM-1 Factory Milestones (Chitose, Hokkaido)" />}>
      <div className="space-y-2">
        {milestones.map((m, i) => (
          <div
            key={m.date}
            className="flex items-center gap-4 p-3 rounded-lg border border-brief-border"
            style={{
              backgroundColor: i >= 4 ? `${ACCENT}10` : `${ICT}06`,
            }}
          >
            <div
              className="text-[11px] font-bold tabular-nums w-16 shrink-0"
              style={{ color: i >= 4 ? ACCENT : ICT }}
            >
              {m.date}
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-bold text-foreground">
                <T ja={m.label} en={m.labelEn} />
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5">
                <T ja={m.detail} en={m.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. Investors ── */
export function RapidusInvestorsDiagram() {
  const original = [
    "トヨタ", "デンソー", "ソニー", "NTT", "NEC", "ソフトバンク", "キオクシア", "MUFG",
  ];
  const originalEn = [
    "Toyota", "Denso", "Sony", "NTT", "NEC", "SoftBank", "Kioxia", "MUFG",
  ];
  const newcomers = ["キヤノン", "ホンダ", "富士通", "富士フイルム"];
  const newcomersEn = ["Canon", "Honda", "Fujitsu", "Fujifilm"];
  return (
    <Card
      title={<T ja="Rapidus 出資企業の構図（2023年設立 → 2026年拡大）" en="Rapidus Investor Lineup (Founded 2023 → Expanded 2026)" />}
      subtitle={<T ja="製造業・通信・金融が組む「日の丸連合」" en="Manufacturing, telecoms, and finance: a Japanese national consortium" />}
    >
      <div className="space-y-4">
        <div>
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold mb-2"
            style={{ color: ICT }}
          >
            <T ja="創業出資（2022-2023）" en="FOUNDING INVESTORS (2022–2023)" />
          </div>
          <div className="flex flex-wrap gap-2">
            {original.map((n, idx) => (
              <span
                key={n}
                className="px-3 py-1.5 text-[12px] font-bold rounded-md border border-brief-border"
                style={{ backgroundColor: `${ICT}0d`, color: ICT }}
              >
                <T ja={n} en={originalEn[idx]} />
              </span>
            ))}
          </div>
        </div>
        <div>
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold mb-2"
            style={{ color: ACCENT }}
          >
            <T ja="追加出資（2025-2026）" en="ADDITIONAL INVESTORS (2025–2026)" />
          </div>
          <div className="flex flex-wrap gap-2">
            {newcomers.map((n, idx) => (
              <span
                key={n}
                className="px-3 py-1.5 text-[12px] font-bold rounded-md border"
                style={{
                  backgroundColor: `${ACCENT}12`,
                  color: ACCENT,
                  borderColor: `${ACCENT}55`,
                }}
              >
                ＋<T ja={n} en={newcomersEn[idx]} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 4. METI Budget ── */
export function RapidusMetiBudgetDiagram() {
  const items = [
    { label: "Rapidus 単独支援", labelEn: "Rapidus dedicated support", amount: 7800, color: ICT },
    { label: "AI・他半導体支援", labelEn: "AI & other semiconductor support", amount: 4590, color: ACCENT },
  ];
  const total = items.reduce((s, i) => s + i.amount, 0);
  return (
    <Card
      title={<T ja="METI 2026年度 AI・半導体予算 1兆2,390億円の内訳" en="METI FY2026 AI & Semiconductor Budget: ¥1.239T Breakdown" />}
      subtitle={<T ja="前年度比 約3.7倍" en="Approx. 3.7× year-on-year" />}
    >
      <div className="space-y-3">
        {items.map((it) => {
          const pct = (it.amount / total) * 100;
          return (
            <div key={it.label}>
              <div className="flex justify-between text-[12px] mb-1">
                <span className="font-bold text-foreground"><T ja={it.label} en={it.labelEn} /></span>
                <span
                  className="font-bold tabular-nums"
                  style={{ color: it.color }}
                >
                  {it.amount.toLocaleString()} <T ja="億円" en="¥100M" />
                </span>
              </div>
              <div className="h-3 rounded-full bg-foreground/5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, backgroundColor: it.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-brief-border flex justify-between text-[12px]">
        <span className="font-bold text-foreground"><T ja="合計" en="Total" /></span>
        <span className="font-bold tabular-nums text-foreground">
          12,390 <T ja="億円" en="¥100M" />
        </span>
      </div>
    </Card>
  );
}

/* ── 5. TSMC Kumamoto + Microsoft ── */
export function RapidusTsmcMsftDiagram() {
  return (
    <Card
      title={<T ja="日本半導体「3つの柱」の同時進行" en={`Japan's Semiconductor "Three Pillars" Advancing in Parallel`} />}
      subtitle={<T ja="Rapidus、TSMC熊本、Microsoft 100億ドル" en="Rapidus, TSMC Kumamoto, Microsoft $10B" />}
    >
      <div className="space-y-3">
        {[
          {
            title: "Rapidus IIM-1（千歳）",
            titleEn: "Rapidus IIM-1 (Chitose)",
            node: "2nm",
            nodeEn: "2nm",
            timing: "2027量産",
            timingEn: "Mass production 2027",
            color: ICT,
          },
          {
            title: "TSMC 熊本第2工場（JASM）",
            titleEn: "TSMC Kumamoto Plant 2 (JASM)",
            node: "3nm（7nm から仕様引き上げ）",
            nodeEn: "3nm (upgraded from 7nm spec)",
            timing: "2027末稼働",
            timingEn: "Operational end-2027",
            color: ACCENT,
          },
          {
            title: "Microsoft 日本投資",
            titleEn: "Microsoft Japan investment",
            node: "AIインフラ・データセンター",
            nodeEn: "AI infrastructure & data centers",
            timing: "100億ドル / 2026-2029",
            timingEn: "$10B / 2026–2029",
            color: "#2563eb",
          },
        ].map((p) => (
          <div
            key={p.title}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${p.color}08` }}
          >
            <div
              className="text-[13px] font-bold mb-1"
              style={{ color: p.color }}
            >
              <T ja={p.title} en={p.titleEn} />
            </div>
            <div className="text-[11px] text-foreground/70">
              <T ja={`プロセス／領域：${p.node}`} en={`Process/Domain: ${p.nodeEn}`} />
            </div>
            <div className="text-[11px] text-foreground/70">
              <T ja={`タイミング：${p.timing}`} en={`Timing: ${p.timingEn}`} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. Roadmap to 1.4nm ── */
export function RapidusRoadmapDiagram() {
  const stages = [
    { node: "2nm", year: "2025-27", phase: "パイロット → 量産", phaseEn: "Pilot → Mass production", color: ICT },
    { node: "1.4nm", year: "2026-29", phase: "R&D → 量産", phaseEn: "R&D → Mass production", color: ACCENT },
    { node: "1nm 級", year: "2030+", phase: "構想段階", phaseEn: "Concept stage", color: "#94a3b8" },
  ];
  return (
    <Card title={<T ja="Rapidus プロセスノード ロードマップ" en="Rapidus Process Node Roadmap" />}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stages.map((s) => (
          <div
            key={s.node}
            className="p-4 rounded-lg border border-brief-border text-center"
            style={{ backgroundColor: `${s.color}0a` }}
          >
            <div
              className="text-[22px] font-bold tabular-nums"
              style={{ color: s.color }}
            >
              {s.node}
            </div>
            <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-foreground/60 mt-1">
              {s.year}
            </div>
            <div className="text-[11px] text-foreground/70 mt-2"><T ja={s.phase} en={s.phaseEn} /></div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        <T ja="IIM-2 起工：2027年度予定（1.4nm 量産拠点）" en="IIM-2 groundbreaking: planned FY2027 (1.4nm mass production site)" />
      </div>
    </Card>
  );
}

/* ── 7. Risks ── */
export function RapidusRisksDiagram() {
  const risks = [
    {
      title: "顧客リスク",
      titleEn: "Customer risk",
      detail: "2nm の量産顧客（ファブレス）が未確定",
      detailEn: "No confirmed fabless customer for 2nm mass production",
      severity: "高",
      severityEn: "High",
      color: WARN,
    },
    {
      title: "歩留まりリスク",
      titleEn: "Yield risk",
      detail: "GAA（gate-all-around）2nm の量産歩留まり実績ゼロ",
      detailEn: "No track record of volume yield for GAA 2nm",
      severity: "高",
      severityEn: "High",
      color: WARN,
    },
    {
      title: "資金リスク",
      titleEn: "Funding risk",
      detail: "総事業費5兆円規模、民間出資は数%にとどまる",
      detailEn: "Total project cost around ¥5T; private investment covers only a few percent",
      severity: "中",
      severityEn: "Mid",
      color: "#f59e0b",
    },
    {
      title: "人材リスク",
      titleEn: "Talent risk",
      detail: "最先端ロジック量産経験者が国内に少ない",
      detailEn: "Few domestic engineers with cutting-edge logic mass-production experience",
      severity: "中",
      severityEn: "Mid",
      color: "#f59e0b",
    },
    {
      title: "地政学リスク",
      titleEn: "Geopolitical risk",
      detail: "EUV 装置・素材の輸出規制の波及",
      detailEn: "Ripple effects from export controls on EUV equipment and materials",
      severity: "中",
      severityEn: "Mid",
      color: "#f59e0b",
    },
  ];
  return (
    <Card title={<T ja="Rapidus 量産化に向けた5つのリスク" en="Five Risks on Rapidus's Path to Mass Production" />}>
      <div className="space-y-2">
        {risks.map((r) => (
          <div
            key={r.title}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${r.color}08` }}
          >
            <div
              className="text-[10px] font-bold px-2 py-1 rounded shrink-0"
              style={{
                backgroundColor: `${r.color}20`,
                color: r.color,
              }}
            >
              <T ja={r.severity} en={r.severityEn} />
            </div>
            <div className="flex-1">
              <div
                className="text-[12px] font-bold"
                style={{ color: r.color }}
              >
                <T ja={r.title} en={r.titleEn} />
              </div>
              <div className="text-[11px] text-foreground/70 mt-0.5">
                <T ja={r.detail} en={r.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
