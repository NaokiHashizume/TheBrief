"use client";

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
          style={{ color: `${ICT}99` }}
        >
          図表
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
    { era: "1990s", label: "日本ロジック", share: "50%+", color: ICT },
    { era: "2000s", label: "韓・台に敗退", share: "～10%", color: "#94a3b8" },
    { era: "2020s", label: "最先端は0%", share: "0%", color: WARN },
    { era: "2027～", label: "Rapidus 2nm", share: "目標10%", color: ACCENT },
  ];
  return (
    <Card title="日本ロジック半導体 世界シェアの推移と Rapidus の位置づけ">
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
              {it.label}
            </div>
            <div
              className="text-[18px] font-bold tabular-nums mt-1"
              style={{ color: it.color }}
            >
              {it.share}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        ※「最先端」は5nm 以下のロジック半導体ベース
      </div>
    </Card>
  );
}

/* ── 2. IIM-1 Timeline ── */
export function RapidusIim1TimelineDiagram() {
  const milestones = [
    { date: "2023-09", label: "起工式", detail: "千歳市 IIM-1 着工" },
    { date: "2024-12", label: "建屋完成", detail: "外装工事完了" },
    { date: "2025-04", label: "クリーンルーム稼働", detail: "ASML EUV搬入" },
    { date: "2025-中", label: "パイロット稼働", detail: "2nm 試作開始" },
    { date: "2026-04", label: "本格稼働", detail: "顧客サンプル出荷" },
    { date: "2027", label: "量産開始", detail: "目標年" },
  ];
  return (
    <Card title="IIM-1 工場のマイルストーン（北海道千歳）">
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
                {m.label}
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5">
                {m.detail}
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
  const newcomers = ["キヤノン", "ホンダ", "富士通", "富士フイルム"];
  return (
    <Card
      title="Rapidus 出資企業の構図（2023年設立 → 2026年拡大）"
      subtitle="製造業・通信・金融が組む「日の丸連合」"
    >
      <div className="space-y-4">
        <div>
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold mb-2"
            style={{ color: ICT }}
          >
            創業出資（2022-2023）
          </div>
          <div className="flex flex-wrap gap-2">
            {original.map((n) => (
              <span
                key={n}
                className="px-3 py-1.5 text-[12px] font-bold rounded-md border border-brief-border"
                style={{ backgroundColor: `${ICT}0d`, color: ICT }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold mb-2"
            style={{ color: ACCENT }}
          >
            追加出資（2025-2026）
          </div>
          <div className="flex flex-wrap gap-2">
            {newcomers.map((n) => (
              <span
                key={n}
                className="px-3 py-1.5 text-[12px] font-bold rounded-md border"
                style={{
                  backgroundColor: `${ACCENT}12`,
                  color: ACCENT,
                  borderColor: `${ACCENT}55`,
                }}
              >
                ＋{n}
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
    { label: "Rapidus 単独支援", amount: 7800, color: ICT },
    { label: "AI・他半導体支援", amount: 4590, color: ACCENT },
  ];
  const total = items.reduce((s, i) => s + i.amount, 0);
  return (
    <Card
      title="METI 2026年度 AI・半導体予算 1兆2,390億円の内訳"
      subtitle="前年度比 約3.7倍"
    >
      <div className="space-y-3">
        {items.map((it) => {
          const pct = (it.amount / total) * 100;
          return (
            <div key={it.label}>
              <div className="flex justify-between text-[12px] mb-1">
                <span className="font-bold text-foreground">{it.label}</span>
                <span
                  className="font-bold tabular-nums"
                  style={{ color: it.color }}
                >
                  {it.amount.toLocaleString()} 億円
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
        <span className="font-bold text-foreground">合計</span>
        <span className="font-bold tabular-nums text-foreground">
          12,390 億円
        </span>
      </div>
    </Card>
  );
}

/* ── 5. TSMC Kumamoto + Microsoft ── */
export function RapidusTsmcMsftDiagram() {
  return (
    <Card
      title="日本半導体「3つの柱」の同時進行"
      subtitle="Rapidus、TSMC熊本、Microsoft 100億ドル"
    >
      <div className="space-y-3">
        {[
          {
            title: "Rapidus IIM-1（千歳）",
            node: "2nm",
            timing: "2027量産",
            color: ICT,
          },
          {
            title: "TSMC 熊本第2工場（JASM）",
            node: "3nm（7nm から仕様引き上げ）",
            timing: "2027末稼働",
            color: ACCENT,
          },
          {
            title: "Microsoft 日本投資",
            node: "AIインフラ・データセンター",
            timing: "100億ドル / 2026-2029",
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
              {p.title}
            </div>
            <div className="text-[11px] text-foreground/70">
              プロセス／領域：{p.node}
            </div>
            <div className="text-[11px] text-foreground/70">
              タイミング：{p.timing}
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
    { node: "2nm", year: "2025-27", phase: "パイロット → 量産", color: ICT },
    { node: "1.4nm", year: "2026-29", phase: "R&D → 量産", color: ACCENT },
    { node: "1nm 級", year: "2030+", phase: "構想段階", color: "#94a3b8" },
  ];
  return (
    <Card title="Rapidus プロセスノード ロードマップ">
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
            <div className="text-[11px] text-foreground/70 mt-2">{s.phase}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        IIM-2 起工：2027年度予定（1.4nm 量産拠点）
      </div>
    </Card>
  );
}

/* ── 7. Risks ── */
export function RapidusRisksDiagram() {
  const risks = [
    {
      title: "顧客リスク",
      detail: "2nm の量産顧客（ファブレス）が未確定",
      severity: "高",
      color: WARN,
    },
    {
      title: "歩留まりリスク",
      detail: "GAA（gate-all-around）2nm の量産歩留まり実績ゼロ",
      severity: "高",
      color: WARN,
    },
    {
      title: "資金リスク",
      detail: "総事業費5兆円規模、民間出資は数%にとどまる",
      severity: "中",
      color: "#f59e0b",
    },
    {
      title: "人材リスク",
      detail: "最先端ロジック量産経験者が国内に少ない",
      severity: "中",
      color: "#f59e0b",
    },
    {
      title: "地政学リスク",
      detail: "EUV 装置・素材の輸出規制の波及",
      severity: "中",
      color: "#f59e0b",
    },
  ];
  return (
    <Card title="Rapidus 量産化に向けた5つのリスク">
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
              {r.severity}
            </div>
            <div className="flex-1">
              <div
                className="text-[12px] font-bold"
                style={{ color: r.color }}
              >
                {r.title}
              </div>
              <div className="text-[11px] text-foreground/70 mt-0.5">
                {r.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
