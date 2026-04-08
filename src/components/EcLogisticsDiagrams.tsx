"use client";

const ACCENT = "#10b981";

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

export function EcLogisticsVolumeDiagram() {
  const rows = [
    { y: "2014", v: 36, label: "36億個" },
    { y: "2019", v: 43, label: "43億個" },
    { y: "2023", v: 50, label: "50億個" },
    { y: "2025", v: 58, label: "58億個" },
    { y: "2026見込", v: 60, label: "60億個" },
  ];
  const max = 60;
  return (
    <Card title="宅配便取扱個数の推移 — 10年で約1.7倍">
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-16 text-[11px] tabular-nums text-foreground/55">
              {r.y}
            </div>
            <div className="flex-1 h-6 bg-foreground/[0.04] rounded overflow-hidden">
              <div
                className="h-full flex items-center justify-end pr-2"
                style={{ width: `${(r.v / max) * 100}%`, backgroundColor: `${ACCENT}33` }}
              >
                <span className="text-[10px] font-bold tabular-nums" style={{ color: ACCENT }}>
                  {r.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45 text-center">
        出典: 国土交通省「宅配便等取扱実績」各年度
      </div>
    </Card>
  );
}

export function EcAmazonLogisticsDiagram() {
  const items = [
    { label: "Amazon Logistics", desc: "自社配送網・委託ドライバー", share: "約60-70%" },
    { label: "Amazon Key for Business", desc: "オートロック向け置き配", share: "3万棟超" },
    { label: "Amazon Flex", desc: "個人事業主ベースの配送員", share: "都市部主力" },
    { label: "ヤマト・佐川・日本郵便", desc: "既存大手への委託", share: "約30-40%" },
  ];
  return (
    <Card title="Amazonジャパンの配送スタック (2026年)">
      <div className="space-y-3">
        {items.map((it, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-l-4 bg-brief-card"
            style={{ borderLeftColor: ACCENT }}
          >
            <div className="flex items-baseline justify-between mb-1">
              <div className="text-[13px] font-bold text-foreground/90">{it.label}</div>
              <div
                className="text-[11px] font-bold px-2 py-0.5 rounded"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                {it.share}
              </div>
            </div>
            <div className="text-[11px] text-foreground/55">{it.desc}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function EcRakutenYamatoDiagram() {
  const pillars = [
    { ja: "ヤマト戦略提携", desc: "倉庫共同運営・大型イベント時の優先確保" },
    { ja: "楽天エクスプレス", desc: "特定地域での自社配送を再起動" },
    { ja: "楽天ペイ × 置き配", desc: "置き配完了で10〜30ポイント付与" },
    { ja: "楽天モバイル連携", desc: "配送利便性を契約訴求に活用" },
  ];
  return (
    <Card title="楽天の物流4本柱 — 『配送網を持たないEC』からの脱却">
      <div className="grid grid-cols-2 gap-3">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-brief-border"
          >
            <div
              className="text-[12px] font-bold mb-1"
              style={{ color: ACCENT }}
            >
              {p.ja}
            </div>
            <div className="text-[11px] text-foreground/60 leading-snug">{p.desc}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function EcCarrierMarginsDiagram() {
  const carriers = [
    { name: "ヤマト運輸", strategy: "個人向けEC+EAZY", redeliv: "5%以下 (EAZY)", posture: "前線維持" },
    { name: "佐川急便", strategy: "法人BtoB重視", redeliv: "8-10%", posture: "選別撤退" },
    { name: "日本郵便", strategy: "ゆうパケ/置き配全振り", redeliv: "7-9%", posture: "量で勝負" },
  ];
  return (
    <Card title="大手3社のラストマイル戦略比較">
      <div className="space-y-3">
        {carriers.map((c, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-brief-border"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                {c.name}
              </span>
              <span className="text-[12px] font-semibold text-foreground/80">{c.strategy}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[11px] text-foreground/60">
              <div>
                <span className="text-foreground/40">再配達率:</span> {c.redeliv}
              </div>
              <div>
                <span className="text-foreground/40">姿勢:</span> {c.posture}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
