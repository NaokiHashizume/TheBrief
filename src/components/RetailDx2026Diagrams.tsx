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

/* ─────────────────────────────────────────────
   retail-dx-overview
   DX投資額と主要施策の俯瞰
   ───────────────────────────────────────────── */
export function RetailDxOverviewDiagram() {
  const players = [
    {
      name: "セブン-イレブン",
      dx: "生成AI基盤（13 LLM）全社員展開",
      investment: "次世代POSシステム全国2万1千店",
      color: "#ef4444",
    },
    {
      name: "イオン",
      dx: "デジタル売上高1兆円目標（2026年度）",
      investment: "AI発注・AIカカク・AIアシスタント390店",
      color: "#f59e0b",
    },
    {
      name: "楽天",
      dx: "AI活用で利益255億円創出（2025年）",
      investment: "国内EC流通総額6.3兆円・モバイルシナジー",
      color: "#dc2626",
    },
  ];

  return (
    <Card title="3大プレーヤーのDX投資俯瞰 — 2025〜2026年">
      <div className="space-y-3">
        {players.map((p, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-l-4"
            style={{ borderLeftColor: p.color, backgroundColor: `${p.color}08` }}
          >
            <div
              className="text-[13px] font-bold mb-1"
              style={{ color: p.color }}
            >
              {p.name}
            </div>
            <div className="text-[12px] font-semibold text-foreground/80 mb-0.5">
              {p.dx}
            </div>
            <div className="text-[11px] text-foreground/55">{p.investment}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45 text-center">
        出典: 各社IR・プレスリリース (2025-2026年)
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   retail-cashierless
   無人レジ・キャッシュレス普及率と課題
   ───────────────────────────────────────────── */
export function RetailCashierlessDiagram() {
  const issues = [
    {
      issue: "万引き・スキャン漏れ",
      severity: "高",
      detail: "セルフレジ普及で不正持出し増加。AI画像認識で対抗中",
    },
    {
      issue: "システム障害リスク",
      severity: "中",
      detail: "停電・ネットワーク障害で店舗機能が完全停止",
    },
    {
      issue: "導入コスト",
      severity: "高",
      detail: "完全無人対応AIカメラシステムは1店舗500万〜1000万円超",
    },
    {
      issue: "高齢者対応",
      severity: "中",
      detail: "スマホ非所持層への配慮が必須。操作サポートコスト発生",
    },
  ];

  const stats = [
    { label: "セルフレジ導入率\n（大手SM）", value: "約70%", note: "2025年推計" },
    { label: "完全無人店舗数\n（国内）", value: "約200店", note: "TTG・大手各社計" },
    { label: "万引き損失額\n（年間・全業態）", value: "約4,600億", note: "2024年推計" },
  ];

  return (
    <Card title="無人レジ・AIレジの普及と4大課題">
      <div className="grid grid-cols-3 gap-3 mb-5">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-3 rounded-xl border border-brief-border text-center"
          >
            <div
              className="text-xl font-bold tabular-nums"
              style={{ color: ACCENT }}
            >
              {s.value}
            </div>
            <div className="text-[9px] text-foreground/50 mt-1 whitespace-pre-line leading-tight">
              {s.label}
            </div>
            <div className="text-[9px] text-foreground/35">{s.note}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {issues.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
          >
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5"
              style={{
                color: item.severity === "高" ? ACCENT : "#f59e0b",
                backgroundColor:
                  item.severity === "高" ? `${ACCENT}14` : "#f59e0b14",
              }}
            >
              {item.severity}
            </span>
            <div>
              <div className="text-[12px] font-semibold text-foreground/85">
                {item.issue}
              </div>
              <div className="text-[11px] text-foreground/55 leading-snug">
                {item.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   retail-points
   ポイント経済圏の規模比較
   ───────────────────────────────────────────── */
export function RetailPointsDiagram() {
  const points = [
    {
      name: "楽天ポイント",
      members: "1.7億人",
      economy: "楽天市場・モバイル・金融",
      strength: "EC×モバイルのシナジー最強",
      color: "#dc2626",
    },
    {
      name: "Vポイント（旧T+SMF）",
      members: "約1.6億人",
      economy: "TSUTAYAグループ・三井住友",
      strength: "2024年4月統合。金融×リテール融合",
      color: "#1d4ed8",
    },
    {
      name: "dポイント",
      members: "約1億人",
      economy: "NTTドコモ経済圏",
      strength: "d払い・マツキヨなど加盟店最多",
      color: "#e11d48",
    },
    {
      name: "Pontaポイント",
      members: "約1.1億人",
      economy: "ローソン・au（KDDI）",
      strength: "auとの統合でローソン×通信の軸",
      color: "#f97316",
    },
    {
      name: "PayPayポイント",
      members: "約6,500万人",
      economy: "Yahoo!・PayPay・ソフトバンク",
      strength: "QRコード決済シェアトップ",
      color: "#ef4444",
    },
  ];

  return (
    <Card title="5大ポイント経済圏の規模比較 — 5.5億会員の争奪戦">
      <div className="space-y-2">
        {points.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: p.color }}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="text-[12px] font-bold"
                  style={{ color: p.color }}
                >
                  {p.name}
                </span>
                <span className="text-[10px] text-foreground/50">
                  会員 {p.members}
                </span>
              </div>
              <div className="text-[10px] text-foreground/55 leading-snug">
                {p.strength}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div
          className="text-[10px] font-bold mb-1"
          style={{ color: ACCENT }}
        >
          5大ポイント合計会員数
        </div>
        <div className="text-[22px] font-bold tabular-nums text-foreground/90">
          5.5億人
        </div>
        <div className="text-[10px] text-foreground/45">
          ※重複あり。日本人口の約4.4倍（2025年3月末時点推計）
        </div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   retail-vs-amazon
   日本の小売DX vs Amazon の構造差
   ───────────────────────────────────────────── */
export function RetailVsAmazonDiagram() {
  const comparison = [
    {
      axis: "需要予測",
      japan: "天候・曜日ベースのAI発注（単店舗最適化）",
      amazon: "数億品目・数百万ユーザーの行動を横断学習",
      gap: "大",
    },
    {
      axis: "在庫最適化",
      japan: "店舗単位の適正在庫管理（フルフィルメントなし）",
      amazon: "FC横断・地域別先配置で在庫をリアルタイム移動",
      gap: "大",
    },
    {
      axis: "配送自動化",
      japan: "ドローン実証段階・一部ロボット搬送",
      amazon: "30分配送「Amazon Now」・Flex全国展開済み",
      gap: "大",
    },
    {
      axis: "価格設定",
      japan: "電子棚札+閉店前ダイナミック値引き",
      amazon: "1日数百万回のリアルタイム動的価格変更",
      gap: "大",
    },
    {
      axis: "顧客データ活用",
      japan: "ID-POSベース。会員カード紐付け",
      amazon: "検索・閲覧・購買・レビューの統合プロファイル",
      gap: "中",
    },
  ];

  return (
    <Card title="日本の小売DX vs Amazon — 一気通貫DXとの本質的な差">
      <div className="mb-3 grid grid-cols-3 gap-1 text-center text-[9px] font-bold text-foreground/40 uppercase tracking-wider">
        <div>DX軸</div>
        <div style={{ color: ACCENT }}>日本の小売</div>
        <div style={{ color: "#f59e0b" }}>Amazon</div>
      </div>
      <div className="space-y-2">
        {comparison.map((c, i) => (
          <div
            key={i}
            className="grid grid-cols-3 gap-2 p-2 rounded-lg border border-brief-border items-start"
          >
            <div className="text-[10px] font-bold text-foreground/70 pt-0.5">
              {c.axis}
            </div>
            <div
              className="text-[10px] text-foreground/60 leading-snug p-2 rounded"
              style={{ backgroundColor: `${ACCENT}08` }}
            >
              {c.japan}
            </div>
            <div
              className="text-[10px] text-foreground/60 leading-snug p-2 rounded"
              style={{ backgroundColor: "#f59e0b08" }}
            >
              {c.amazon}
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 p-3 rounded-xl text-[12px] leading-relaxed"
        style={{ backgroundColor: `${ACCENT}06`, borderLeft: `3px solid ${ACCENT}` }}
      >
        <span className="font-bold" style={{ color: ACCENT }}>
          核心の差:{" "}
        </span>
        日本の小売DXは「レジ効率化」「発注精度向上」という点の最適化。Amazonは需要予測→在庫→配送→価格→顧客体験を一本のパイプラインで繋ぐ面の最適化。この差が5年後の競争力格差を生む。
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   retail-cost
   DXコスト構造とROI試算
   ───────────────────────────────────────────── */
export function RetailCostDiagram() {
  const items = [
    {
      category: "AIレジ・セルフレジ導入",
      cost: "1店舗あたり 200〜500万円",
      roi: "人件費削減: 月30〜60万円で回収2〜5年",
      risk: "万引き損失・保守コストがROIを圧縮",
    },
    {
      category: "完全無人店舗（AIカメラ型）",
      cost: "1店舗あたり 800〜2,000万円",
      roi: "24時間無人営業で月40〜80万円削減。回収7〜15年",
      risk: "システム障害・万引き損失でROI悪化リスク高",
    },
    {
      category: "AI需要予測・自動発注",
      cost: "システム構築 数億円〜。店舗運用費別途",
      roi: "食品廃棄30%削減・機会損失減で年間数億円効果",
      risk: "精度向上には大量データ蓄積が必要（3〜5年）",
    },
    {
      category: "生成AI基盤（全社展開）",
      cost: "年間数十億円規模（ライセンス+インフラ）",
      roi: "楽天: 255億円/年の利益創出。セブン: 全社8000人展開",
      risk: "ハルシネーション・情報漏洩リスクの管理コスト",
    },
  ];

  return (
    <Card title="小売DX主要施策のコスト・ROI・リスク試算">
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-brief-border"
          >
            <div
              className="text-[12px] font-bold mb-2"
              style={{ color: ACCENT }}
            >
              {item.category}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-foreground/40 text-[10px]">コスト: </span>
                <span className="text-foreground/75">{item.cost}</span>
              </div>
              <div>
                <span className="text-foreground/40 text-[10px]">ROI: </span>
                <span className="text-foreground/75">{item.roi}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-foreground/40 text-[10px]">リスク: </span>
                <span className="text-foreground/60">{item.risk}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   retail-future
   2031年の競争力シナリオ
   ───────────────────────────────────────────── */
export function RetailFuture2026Diagram() {
  const scenarios = [
    {
      label: "シナリオA: 差別化成功",
      probability: "30%",
      condition: "ポイント経済圏 × リテールメディア × 物流垂直統合が完成",
      outcome: "Amazon・Temuと異なる「体験価値」で共存。国内EC化率15%超",
      color: "#10b981",
    },
    {
      label: "シナリオB: 現状維持・部分的DX",
      probability: "50%",
      condition: "レジ効率化・AI発注止まり。Amazonとの差は縮まらず",
      outcome: "EC化率12〜13%。中間層は楽天/Amazonに流出、実店舗は高齢者軸",
      color: "#f59e0b",
    },
    {
      label: "シナリオC: 競争力喪失",
      probability: "20%",
      condition: "Temu関税免除継続・物流コスト高騰・DX投資不足が重なる",
      outcome: "地方の実店舗消滅加速。EC市場はAmazon+Temu/Sheinが席巻",
      color: ACCENT,
    },
  ];

  return (
    <Card title="2031年競争力シナリオ — 5年後の小売地図">
      <div className="space-y-4">
        {scenarios.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: s.color, borderLeftWidth: 4 }}
          >
            <div className="flex items-baseline gap-3 mb-2 flex-wrap">
              <span
                className="text-[12px] font-bold"
                style={{ color: s.color }}
              >
                {s.label}
              </span>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded"
                style={{
                  color: s.color,
                  backgroundColor: `${s.color}14`,
                }}
              >
                確率 {s.probability}
              </span>
            </div>
            <div className="text-[11px] text-foreground/60 mb-1">
              <span className="text-foreground/40">条件: </span>
              {s.condition}
            </div>
            <div className="text-[11px] text-foreground/70">
              <span className="text-foreground/40">結果: </span>
              {s.outcome}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45">
        ※確率はシナリオ分析上の定性推計。経済環境・政策変化により変動
      </div>
    </Card>
  );
}
