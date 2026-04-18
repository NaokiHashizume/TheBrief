"use client";

import { T } from "./T";

const ACCENT = "#3b82f6";

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

/* ── 1. rapidus-funding-overview ── */
export function RapidusFundingOverviewDiagram() {
  const items = [
    { ja: "政府支援累計（ラピダス）", en: "Cumulative gov't support (Rapidus)", value: "2.9兆円", valueEn: "¥2.9T", color: ACCENT },
    { ja: "NEDO 2026年度支援（承認済）", en: "NEDO FY2026 support (approved)", value: "6,315億円", valueEn: "¥631.5B", color: "#0891b2" },
    { ja: "民間32社出資（2026年2月）", en: "32 private investors (Feb 2026)", value: "1,676億円", valueEn: "¥167.6B", color: "#8b5cf6" },
    { ja: "政府の半導体・AI支援総額", en: "Total gov't semiconductor/AI support", value: "10兆円規模", valueEn: "~¥10T", color: "#94a3b8" },
    { ja: "総投資必要額（試算）", en: "Total investment required (estimate)", value: "7兆円超", valueEn: "7T+", color: "#ef4444" },
  ];
  return (
    <Card title="ラピダスへの資金投入——公的支援と民間出資の全貌" titleEn="Rapidus Funding — Full Picture of Public and Private Investment">
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-foreground/[0.03]">
            <span className="text-[12px] text-foreground/70">
              <T ja={item.ja} en={item.en} />
            </span>
            <span
              className="text-[14px] font-bold tabular-nums px-3 py-1 rounded-full"
              style={{ color: item.color, background: `${item.color}15` }}
            >
              <T ja={item.value} en={item.valueEn} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-xl bg-foreground/[0.02] text-[11px] text-foreground/50 text-center">
        <T
          ja="民間調達1,676億円 = 総投資必要額7兆円の約24%"
          en="Private funding ¥167.6B = ~24% of ¥7T total required"
        />
      </div>
    </Card>
  );
}

/* ── 2. rapidus-technical-progress ── */
export function RapidusTechnicalProgressDiagram() {
  const milestones = [
    { ja: "2022年", en: "2022", label: "ラピダス設立", labelEn: "Rapidus founded", done: true },
    { ja: "2023年", en: "2023", label: "IBM連携・IIM-1着工", labelEn: "IBM partnership / IIM-1 construction", done: true },
    { ja: "2025〜26年", en: "2025–26", label: "2nm GAAトランジスタ動作確認", labelEn: "2nm GAA transistor operation confirmed", done: true },
    { ja: "2027年", en: "2027", label: "MPW（量産試作）・歩留まり確認", labelEn: "MPW pilot production / yield validation", done: false },
    { ja: "2027年後半", en: "Late 2027", label: "量産開始予定", labelEn: "Volume production target", done: false },
  ];
  return (
    <Card title="2nmプロセス開発の進捗——「動作確認」から「量産」への道" titleEn="2nm Process Progress — From 'Confirmed Operation' to 'Volume Production'">
      <div className="space-y-2">
        {milestones.map((m, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] font-bold"
              style={{
                background: m.done ? `${ACCENT}18` : "rgba(0,0,0,0.04)",
                color: m.done ? ACCENT : "#94a3b8",
              }}
            >
              {m.done ? "✓" : "○"}
            </div>
            <div className="flex-1 pb-3 border-b border-foreground/[0.04] last:border-0">
              <div className="text-[10px] text-foreground/40 font-bold">
                <T ja={m.ja} en={m.en} />
              </div>
              <div
                className="text-[12px] font-medium mt-0.5"
                style={{ color: m.done ? "inherit" : "#94a3b8" }}
              >
                <T ja={m.label} en={m.labelEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/55">
        <T
          ja="「動作確認」と「量産」の間のギャップ：歩留まりの壁——TSMCは数十年の「工程管理の暗黙知」を持つ"
          en="Gap between 'confirmed' and 'volume': yield wall — TSMC has decades of tacit process knowledge"
        />
      </div>
    </Card>
  );
}

/* ── 3. rapidus-customers ── */
export function RapidusCustomersDiagram() {
  const customers = [
    {
      ja: "富士通",
      en: "Fujitsu",
      detail: "先端AI半導体（1.4nm NPU）の製造委託",
      detailEn: "Manufacturing order for advanced AI chip (1.4nm NPU)",
      type: "confirmed",
    },
    {
      ja: "日本IBM",
      en: "IBM Japan",
      detail: "民間出資参加・技術協力",
      detailEn: "Private investor & technology partner",
      type: "confirmed",
    },
    {
      ja: "Apple・NVIDIA・AMD級",
      en: "Apple / NVIDIA / AMD class",
      detail: "グローバル商業顧客の獲得が「真の自立」の条件",
      detailEn: "Winning global commercial customers is the real test of viability",
      type: "target",
    },
  ];
  return (
    <Card title="顧客開拓の現状——国内大手確保と次のステップ" titleEn="Customer Pipeline — Domestic Anchors Secured, Global Next">
      <div className="space-y-3">
        {customers.map((c, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-foreground/[0.03]">
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
              style={{
                color: c.type === "confirmed" ? "#22c55e" : "#f59e0b",
                background: c.type === "confirmed" ? "#22c55e18" : "#f59e0b18",
              }}
            >
              <T ja={c.type === "confirmed" ? "確定" : "目標"} en={c.type === "confirmed" ? "Confirmed" : "Target"} />
            </span>
            <div>
              <div className="text-[12px] font-bold text-foreground/80">
                <T ja={c.ja} en={c.en} />
              </div>
              <div className="text-[11px] text-foreground/55 mt-0.5">
                <T ja={c.detail} en={c.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl" style={{ background: "#f59e0b0d", border: "1px solid #f59e0b20" }}>
        <div className="text-[11px] text-foreground/60">
          <T
            ja="経産省が富士通・日本IBMへ900億円補助（2026年4月）——国策文脈での受注であり、商業競争力ベースではない"
            en="METI subsidized Fujitsu/IBM Japan ¥90B (Apr 2026) — policy-driven orders, not commercial-competition-based"
          />
        </div>
      </div>
    </Card>
  );
}

/* ── 4. rapidus-vs-tsmc ── */
export function RapidusVsTsmcDiagram() {
  const compare = [
    { label: "製造世代", labelEn: "Process node", tsmc: "28nm〜（成熟）", tsmc_en: "28nm+ (mature)", rapidus: "2nm以下（最先端）", rapidus_en: "2nm or below (cutting-edge)" },
    { label: "用途", labelEn: "Applications", tsmc: "車載・IoT・産業機器", tsmc_en: "Auto / IoT / Industrial", rapidus: "AI・サーバー・次世代", rapidus_en: "AI / servers / next-gen" },
    { label: "稼働", labelEn: "Operation", tsmc: "第1工場2024年〜", tsmc_en: "Plant 1 from 2024", rapidus: "2027年後半（予定）", rapidus_en: "Late 2027 (planned)" },
    { label: "リスク", labelEn: "Risk level", tsmc: "低（実績ある量産技術）", tsmc_en: "Low (proven tech)", rapidus: "高（最先端をゼロから）", rapidus_en: "High (frontier from scratch)" },
  ];
  return (
    <Card title="TSMC熊本 vs ラピダス——役割分担の構造" titleEn="TSMC Kumamoto vs Rapidus — Complementary, Not Competing">
      <div className="grid grid-cols-3 gap-1 text-[11px]">
        <div className="font-bold text-foreground/40 p-2" />
        <div className="font-bold text-center p-2 rounded-t-lg" style={{ background: "#0891b218", color: "#0891b2" }}>
          <T ja="TSMC熊本" en="TSMC Kumamoto" />
        </div>
        <div className="font-bold text-center p-2 rounded-t-lg" style={{ background: `${ACCENT}18`, color: ACCENT }}>
          <T ja="ラピダス" en="Rapidus" />
        </div>
        {compare.map((row, i) => (
          <>
            <div key={`l-${i}`} className="p-2 text-foreground/50 flex items-center">
              <T ja={row.label} en={row.labelEn} />
            </div>
            <div key={`t-${i}`} className="p-2 text-center text-foreground/70 bg-foreground/[0.02] rounded">
              <T ja={row.tsmc} en={row.tsmc_en} />
            </div>
            <div key={`r-${i}`} className="p-2 text-center text-foreground/70 bg-foreground/[0.02] rounded">
              <T ja={row.rapidus} en={row.rapidus_en} />
            </div>
          </>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. rapidus-milestone-2026-2027 ── */
export function RapidusMilestone20262027Diagram() {
  const milestones = [
    { year: "2026", ja: "民間追加出資の可否", en: "Private additional investment decision", critical: true },
    { year: "2026", ja: "装置・材料サプライヤーとの長期契約", en: "Long-term equipment/material supplier contracts", critical: true },
    { year: "2026", ja: "ASML製EUVリソグラフィ機の追加調達", en: "Additional ASML EUV lithography tool procurement", critical: true },
    { year: "2027", ja: "MPW量産試作での歩留まり確認", en: "Yield validation in MPW pilot production", critical: true },
    { year: "2027", ja: "グローバル顧客との商談開始", en: "Commercial talks with global customers", critical: true },
  ];
  return (
    <Card title="2026〜2027年の不可逆的判断ポイント" titleEn="Make-or-Break Decision Points in 2026–2027">
      <div className="space-y-2">
        {milestones.map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: `${ACCENT}08` }}>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
              style={{ background: `${ACCENT}18`, color: ACCENT }}
            >
              {m.year}
            </span>
            <span className="text-[12px] text-foreground/75">
              <T ja={m.ja} en={m.en} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/55">
        <T
          ja="これらが一つでも「失敗・遅延」した場合、資金調達の連鎖が崩れるリスク"
          en="If any one of these fails or is delayed, it risks triggering a funding chain collapse"
        />
      </div>
    </Card>
  );
}

/* ── 6. rapidus-strategic-assessment ── */
export function RapidusStrategicAssessmentDiagram() {
  const scenarios = [
    {
      ja: "成功シナリオ",
      en: "Success Scenario",
      desc: "2027年に歩留まり50%以上・グローバル顧客1社以上確保→民間資金が本格流入し「自走」フェーズへ",
      descEn: "≥50% yield in 2027 + at least 1 global customer → private capital flows in, self-sustaining phase begins",
      color: "#22c55e",
    },
    {
      ja: "リスクシナリオ",
      en: "Risk Scenario",
      desc: "歩留まり確保に時間がかかり量産が2028年以降に延伸→TSMCとの競争力差が拡大し「壮大な学習コスト」に",
      descEn: "Yield problems push volume production past 2028 → TSMC gap widens, becomes 'grandiose learning expense'",
      color: "#ef4444",
    },
  ];
  return (
    <Card title="「賭け」の評価——2027年に出る答え" titleEn="Evaluating the Bet — The Answer Arrives in 2027">
      <div className="space-y-3">
        {scenarios.map((s, i) => (
          <div key={i} className="p-4 rounded-xl" style={{ background: `${s.color}0d`, border: `1px solid ${s.color}25` }}>
            <div className="text-[12px] font-bold mb-2" style={{ color: s.color }}>
              <T ja={s.ja} en={s.en} />
            </div>
            <p className="text-[12px] text-foreground/65 leading-relaxed">
              <T ja={s.desc} en={s.descEn} />
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/55 text-center">
        <T
          ja="外部経済効果（安全保障・人材・周辺産業）を考慮すれば国家戦略として正当化可能"
          en="National security, human capital, and industrial spillovers justify it as a state strategy — if pure business ROI is not the sole criterion"
        />
      </div>
    </Card>
  );
}
