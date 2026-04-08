"use client";

const ACCENT = "#dc2626";

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

/* ─────────  minority-government-year-two-2026  ───────── */

export function Mg2yBudgetBreakdownDiagram() {
  const items = [
    { name: "社会保障", val: 38, color: ACCENT },
    { name: "国債費", val: 31, color: "#f97316" },
    { name: "地方交付税", val: 17, color: "#f59e0b" },
    { name: "防衛", val: 9, color: "#6366f1" },
    { name: "公共事業", val: 7, color: "#22c55e" },
    { name: "その他", val: 20, color: "#94a3b8" },
  ];
  const total = items.reduce((s, i) => s + i.val, 0);
  return (
    <Card title="2026年度一般会計予算 122.3兆円の内訳（兆円）">
      <div className="flex h-6 rounded-full overflow-hidden mb-4">
        {items.map((s, i) => (
          <div
            key={i}
            style={{ width: `${(s.val / total) * 100}%`, backgroundColor: s.color }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: s.color }} />
            <div className="text-[11px] text-foreground/75 flex-1">{s.name}</div>
            <div className="text-[11px] font-bold tabular-nums text-foreground/60">
              {s.val}兆円
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[11px] text-foreground/45">
        合計 122.3兆円（2025年度比 +約7兆円、2年連続で過去最大）
      </div>
    </Card>
  );
}

export function Mg2ySeatGapDiagram() {
  const chambers = [
    { name: "衆議院", ruling: "安定多数", note: "自民＋公明で過半数確保" },
    { name: "参議院", ruling: "過半数-4", note: "国民民主・日本保守党・無所属議員と個別交渉" },
  ];
  return (
    <Card title="衆参両院の与党勢力 — 参院4議席不足という現実">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {chambers.map((c, i) => (
          <div key={i} className="p-4 rounded-xl border border-brief-border">
            <div className="text-[11px] uppercase tracking-[1.5px] font-bold mb-1" style={{ color: ACCENT }}>
              {c.name}
            </div>
            <div className="text-[16px] font-bold font-serif text-foreground/90 mb-1">
              {c.ruling}
            </div>
            <div className="text-[11px] text-foreground/55">{c.note}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function Mg2yMarketSignalDiagram() {
  const rows = [
    { y: "2024末", r: 0.9 },
    { y: "2025春", r: 1.1 },
    { y: "2025秋", r: 1.4 },
    { y: "2026春", r: 1.6 },
  ];
  const max = 1.8;
  return (
    <Card title="10年国債利回りの推移 — 積極財政の重力">
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-16 text-[11px] tabular-nums text-foreground/55">{r.y}</div>
            <div className="flex-1 h-5 bg-foreground/[0.04] rounded overflow-hidden">
              <div
                className="h-full flex items-center justify-end pr-2"
                style={{ width: `${(r.r / max) * 100}%`, backgroundColor: `${ACCENT}33` }}
              >
                <span className="text-[10px] font-bold tabular-nums" style={{ color: ACCENT }}>
                  {r.r.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[11px] text-foreground/45">
        2011年以来の水準。日銀利上げと積極財政が重なり、上昇基調が続く。
      </div>
    </Card>
  );
}

export function Mg2yRoadmapDiagram() {
  const items = [
    { y: "2026春", e: "122.3兆円予算成立（11年ぶりに4月以降）" },
    { y: "2026夏", e: "子ども支援金・防衛特別法人税 施行" },
    { y: "2026秋", e: "補正予算と長期金利の綱引き" },
    { y: "2027春", e: "2027年度予算 成立" },
    { y: "2027夏", e: "参議院選挙 — 少数与党状態の帰趨" },
  ];
  return (
    <Card title="2026春 → 2027夏 参院選までのロードマップ">
      <ol className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3">
            <div
              className="text-[11px] font-bold tabular-nums w-14 shrink-0 pt-0.5"
              style={{ color: ACCENT }}
            >
              {it.y}
            </div>
            <div className="text-[12px] text-foreground/75 leading-relaxed">{it.e}</div>
          </li>
        ))}
      </ol>
    </Card>
  );
}

/* ─────────  ichihyo-kakusa-2026  ───────── */

export function IchihyoGapNumbersDiagram() {
  return (
    <Card title="最大格差 2.10倍 — 北海道3区と鳥取1区">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-5 rounded-xl border border-brief-border text-center">
          <div className="text-[11px] uppercase tracking-[1.5px] font-bold mb-2" style={{ color: ACCENT }}>
            最多
          </div>
          <div className="text-[13px] font-semibold text-foreground/80 mb-1">北海道3区</div>
          <div className="text-[26px] font-bold tabular-nums font-serif">462,088</div>
          <div className="text-[10px] text-foreground/45">有権者数（人）</div>
        </div>
        <div className="p-5 rounded-xl border border-brief-border text-center">
          <div className="text-[11px] uppercase tracking-[1.5px] font-bold mb-2" style={{ color: ACCENT }}>
            最少
          </div>
          <div className="text-[13px] font-semibold text-foreground/80 mb-1">鳥取1区</div>
          <div className="text-[26px] font-bold tabular-nums font-serif">223,368</div>
          <div className="text-[10px] text-foreground/45">有権者数（人）</div>
        </div>
      </div>
      <div className="mt-4 text-center text-[13px] text-foreground/70">
        格差 <span className="font-bold text-lg" style={{ color: ACCENT }}>2.10</span> 倍
        ・2倍超の選挙区 <span className="font-bold" style={{ color: ACCENT }}>17</span>
      </div>
    </Card>
  );
}

export function IchihyoLawsuitMapDiagram() {
  const courts = [
    "札幌",
    "仙台",
    "東京",
    "名古屋",
    "大阪",
    "広島",
    "福岡",
    "高松",
    "那覇",
    "金沢",
    "松江",
    "宮崎",
    "秋田",
    "盛岡",
  ];
  return (
    <Card title="全国14高裁に一斉提訴（2026年2月9日）">
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
        {courts.map((c, i) => (
          <div
            key={i}
            className="text-[11px] font-semibold text-center py-2 px-2 rounded-lg border border-brief-border"
            style={{ color: ACCENT }}
          >
            {c}
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45 text-center">
        升永英俊弁護士らが 289小選挙区すべての無効を求めて提訴
      </div>
    </Card>
  );
}

export function IchihyoPrecedentCompareDiagram() {
  const rows = [
    { y: "2009", gap: "2.30", ruling: "違憲状態" },
    { y: "2012", gap: "2.43", ruling: "違憲状態" },
    { y: "2014", gap: "2.13", ruling: "違憲状態" },
    { y: "2017", gap: "1.98", ruling: "合憲" },
    { y: "2021", gap: "2.08", ruling: "合憲" },
    { y: "2024", gap: "2.06", ruling: "合憲" },
    { y: "2026", gap: "2.10", ruling: "（係争中）" },
  ];
  return (
    <Card title="衆院選・最高裁判決と最大格差の推移">
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-3 gap-3 p-3 rounded-lg border border-brief-border items-center"
          >
            <div className="text-[12px] font-bold tabular-nums">{r.y}年選挙</div>
            <div
              className="text-[13px] font-bold tabular-nums text-center"
              style={{ color: ACCENT }}
            >
              {r.gap}倍
            </div>
            <div className="text-[11px] font-semibold text-foreground/70 text-right">
              {r.ruling}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function IchihyoNextReformDiagram() {
  const items = [
    { ja: "短期：10増10減の再設計", desc: "アダムズ方式の微調整" },
    { ja: "中期：比例重視への傾斜", desc: "比例代表の議席比率引き上げ" },
    { ja: "長期：抜本改革論", desc: "人口比例の完全採用・中選挙区復活" },
    { ja: "現実：地方議員の反発", desc: "削減対象の選出議員から強い反対" },
  ];
  return (
    <Card title="この先の選挙制度改革 — 4つの論点">
      <div className="grid grid-cols-2 gap-3">
        {items.map((it, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-l-4 bg-brief-card"
            style={{ borderLeftColor: ACCENT }}
          >
            <div className="text-[12px] font-bold mb-1" style={{ color: ACCENT }}>
              {it.ja}
            </div>
            <div className="text-[11px] text-foreground/55">{it.desc}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────  foreign-worker-ikusei-2026  ───────── */

export function IkuseiPurposeShiftDiagram() {
  return (
    <Card title="建前の転換 — 技能実習から育成就労へ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-5 rounded-xl border border-brief-border">
          <div className="text-[11px] uppercase tracking-[1.5px] font-bold mb-2 text-foreground/45">
            〜2027年3月
          </div>
          <div className="text-[15px] font-bold font-serif text-foreground/85 mb-2">
            技能実習制度
          </div>
          <div className="text-[11px] text-foreground/60 leading-relaxed">
            建前：途上国への技術移転 = 国際貢献
            <br />
            実態：安価な労働力供給
          </div>
        </div>
        <div
          className="p-5 rounded-xl border-2"
          style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}05` }}
        >
          <div className="text-[11px] uppercase tracking-[1.5px] font-bold mb-2" style={{ color: ACCENT }}>
            2027年4月〜
          </div>
          <div className="text-[15px] font-bold font-serif mb-2" style={{ color: ACCENT }}>
            育成就労制度
          </div>
          <div className="text-[11px] text-foreground/75 leading-relaxed">
            建前：特定産業分野の人材育成・人材確保
            <br />
            実態と建前を一致させる設計に
          </div>
        </div>
      </div>
    </Card>
  );
}

export function IkuseiCareerPathDiagram() {
  const steps = [
    { stage: "入国", req: "日本語 N5相当" },
    { stage: "育成就労 1年目", req: "技能基礎級＋N5" },
    { stage: "育成就労 3年目", req: "技能3級 or 評価試験＋N4" },
    { stage: "特定技能 1号", req: "最大5年、家族帯同不可" },
    { stage: "特定技能 2号", req: "更新制限なし、家族帯同可" },
  ];
  return (
    <Card title="入国から特定技能2号までのキャリアパス">
      <div className="space-y-2">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold tabular-nums shrink-0"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-bold text-foreground/85">{s.stage}</div>
              <div className="text-[11px] text-foreground/55">{s.req}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[11px] text-foreground/45">
        合計で10年超の長期就労ルートが初めて制度化される。
      </div>
    </Card>
  );
}

export function IkuseiJapaneseReqDiagram() {
  const levels = [
    { lv: "N5", desc: "ごく基礎（入国要件）" },
    { lv: "N4", desc: "基礎（特定技能1号移行時）" },
    { lv: "N3", desc: "日常会話" },
    { lv: "N2", desc: "業務で通用（特定技能2号の実務目安）" },
  ];
  return (
    <Card title="日本語能力のスケール — N5からN2への階段">
      <div className="space-y-2">
        {levels.map((l, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
          >
            <div
              className="text-[13px] font-bold w-10 text-center"
              style={{ color: ACCENT }}
            >
              {l.lv}
            </div>
            <div className="text-[12px] text-foreground/70 flex-1">{l.desc}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function IkuseiEmployerChecklistDiagram() {
  const items = [
    "監督支援機関との契約と届出",
    "日本人と同等の賃金テーブルの整備",
    "住居・通訳・生活オリエンテーション",
    "就労時間内の日本語研修の確保",
    "キャリアパス（10年超）の明示",
  ];
  return (
    <Card title="受け入れ企業の実務チェックリスト">
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
          >
            <div
              className="w-5 h-5 rounded flex items-center justify-center shrink-0"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              ✓
            </div>
            <div className="text-[12px] text-foreground/75">{it}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
