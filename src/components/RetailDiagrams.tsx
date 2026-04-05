"use client";

/* ─────────────────────────────────────────────
   Retail Market Scale Stats Banner
   ───────────────────────────────────────────── */
export function RetailMarketScaleDiagram() {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#14b8a6]">154兆円</div>
        <div className="text-[10px] text-foreground/50 mt-1">
          小売業販売額
        </div>
        <div className="text-[9px] text-foreground/35">2024年（経産省）</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#8b5cf6]">約100万</div>
        <div className="text-[10px] text-foreground/50 mt-1">店舗数</div>
        <div className="text-[9px] text-foreground/35">全国の小売店</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#f59e0b]">13.4%</div>
        <div className="text-[10px] text-foreground/50 mt-1">EC化率</div>
        <div className="text-[9px] text-foreground/35">物販系（2024年）</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#ef4444]">8兆円</div>
        <div className="text-[10px] text-foreground/50 mt-1">
          インバウンド消費
        </div>
        <div className="text-[9px] text-foreground/35">2025年目標</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Retail Formats Comparison
   ───────────────────────────────────────────── */
export function RetailFormatsDiagram() {
  const formats = [
    {
      name: "コンビニエンスストア",
      nameEn: "Convenience Stores",
      sales: "約12.5兆円",
      stores: "約5.7万店",
      trend: "微増",
      color: "#14b8a6",
      key: "日販70万円前後、高付加価値化",
    },
    {
      name: "スーパーマーケット",
      nameEn: "Supermarkets",
      sales: "約15兆円",
      stores: "約2.2万店",
      trend: "横ばい",
      color: "#3b82f6",
      key: "食品中心、PB強化、ネットスーパー",
    },
    {
      name: "ドラッグストア",
      nameEn: "Drug Stores",
      sales: "約9兆円",
      stores: "約2.2万店",
      trend: "急成長",
      color: "#8b5cf6",
      key: "食品併売で成長、インバウンド恩恵",
    },
    {
      name: "百貨店",
      nameEn: "Department Stores",
      sales: "約5.7兆円",
      stores: "約180店",
      trend: "回復基調",
      color: "#f59e0b",
      key: "富裕層・インバウンド依存、閉店続く",
    },
    {
      name: "EC（電子商取引）",
      nameEn: "E-commerce",
      sales: "約14.6兆円",
      stores: "—",
      trend: "拡大中",
      color: "#ef4444",
      key: "物販系EC化率13.4%、先進国では低水準",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        日本の小売業態別 市場規模
      </div>
      <div className="space-y-2">
        {formats.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{
              backgroundColor: `${f.color}06`,
              borderLeft: `3px solid ${f.color}`,
            }}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs font-bold"
                  style={{ color: f.color }}
                >
                  {f.name}
                </span>
                <span className="text-[9px] text-foreground/35">
                  {f.nameEn}
                </span>
              </div>
              <div className="mt-0.5 text-[10px] text-foreground/50">
                {f.key}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-sm font-bold" style={{ color: f.color }}>
                {f.sales}
              </div>
              <div className="text-[8px] text-foreground/30">
                {f.stores} · {f.trend}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Convenience Store Big 3
   ───────────────────────────────────────────── */
export function ConvenienceStoreDiagram() {
  const chains = [
    {
      name: "セブン-イレブン",
      parent: "セブン&アイ HD",
      stores: "21,500+",
      dailySales: "約71万円",
      color: "#ef4444",
      strength: "商品開発力、PB「セブンプレミアム」",
    },
    {
      name: "ファミリーマート",
      parent: "伊藤忠商事",
      stores: "16,500+",
      dailySales: "約56万円",
      color: "#14b8a6",
      strength: "ファミペイ決済、コンビニジム進出",
    },
    {
      name: "ローソン",
      parent: "KDDI",
      stores: "14,600+",
      dailySales: "約54万円",
      color: "#3b82f6",
      strength: "Ponta/au連携、健康志向商品",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        コンビニ大手3社の比較
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {chains.map((c, i) => (
          <div
            key={i}
            className="p-4 rounded-lg"
            style={{
              backgroundColor: `${c.color}06`,
              borderLeft: `3px solid ${c.color}`,
            }}
          >
            <div className="text-sm font-bold" style={{ color: c.color }}>
              {c.name}
            </div>
            <div className="text-[9px] text-foreground/40">{c.parent}</div>
            <div className="mt-3 space-y-1.5">
              <div className="flex justify-between text-[10px]">
                <span className="text-foreground/45">店舗数</span>
                <span className="font-bold">{c.stores}</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-foreground/45">平均日販</span>
                <span className="font-bold">{c.dailySales}</span>
              </div>
            </div>
            <div className="mt-2 text-[9px] text-foreground/50 leading-relaxed">
              {c.strength}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        3社合計で全国約5.3万店。日本人口1人あたり約2,300人に1店舗のコンビニが存在
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Retail Industry Challenges
   ───────────────────────────────────────────── */
export function RetailChallengesDiagram() {
  const challenges = [
    {
      name: "人手不足",
      severity: 95,
      desc: "欠員率は全産業最悪水準。パート時給は1,200円超に上昇",
      icon: "👥",
      color: "#ef4444",
    },
    {
      name: "物流コスト高騰",
      severity: 85,
      desc: "2024年問題でドライバー不足深刻化。配送頻度削減が必須に",
      icon: "🚛",
      color: "#f59e0b",
    },
    {
      name: "人口減少・高齢化",
      severity: 80,
      desc: "商圏人口減で地方店舗の存続が困難。買い物弱者問題も深刻",
      icon: "📉",
      color: "#8b5cf6",
    },
    {
      name: "原材料・エネルギー高",
      severity: 75,
      desc: "食品・日用品の値上げが常態化。消費者の節約志向が強まる",
      icon: "📈",
      color: "#3b82f6",
    },
    {
      name: "EC競争の激化",
      severity: 70,
      desc: "Amazon・楽天に加えSHEIN・Temu等の越境ECが台頭",
      icon: "🛒",
      color: "#14b8a6",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        小売業が直面する5つの構造的課題
      </div>
      <div className="space-y-3">
        {challenges.map((c, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xl flex-shrink-0">{c.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-bold"
                  style={{ color: c.color }}
                >
                  {c.name}
                </span>
              </div>
              <div className="h-2 rounded-full bg-foreground/[0.06] overflow-hidden mb-1">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${c.severity}%`,
                    backgroundColor: c.color,
                    opacity: 0.5,
                  }}
                />
              </div>
              <div className="text-[9px] text-foreground/45">{c.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Retail DX / Innovation
   ───────────────────────────────────────────── */
export function RetailDxDiagram() {
  const innovations = [
    {
      name: "セルフレジ / 無人店舗",
      desc: "人件費削減と待ち時間短縮。TOUCH TO GOなど完全無人型も登場",
      color: "#14b8a6",
      icon: "🤖",
    },
    {
      name: "リテールメディア",
      desc: "店舗・アプリの顧客データを活用した広告事業。新たな収益源に",
      color: "#3b82f6",
      icon: "📊",
    },
    {
      name: "ダイナミックプライシング",
      desc: "賞味期限に応じた自動値引き。食品ロス削減とマージン最適化を両立",
      color: "#8b5cf6",
      icon: "🏷",
    },
    {
      name: "OMO / オムニチャネル",
      desc: "実店舗とECの融合。注文→店舗受取、店舗→自宅配送などシームレス化",
      color: "#f59e0b",
      icon: "🔄",
    },
    {
      name: "AI需要予測・発注",
      desc: "天候・イベント・過去データからAIが最適発注量を算出。廃棄ロス30%削減も",
      color: "#ef4444",
      icon: "🧠",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        小売DX — テクノロジーによる変革
      </div>
      <div className="space-y-2">
        {innovations.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{
              backgroundColor: `${item.color}06`,
              borderLeft: `3px solid ${item.color}`,
            }}
          >
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            <div>
              <div
                className="text-xs font-semibold"
                style={{ color: item.color }}
              >
                {item.name}
              </div>
              <div className="text-[10px] text-foreground/50">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Retail Value Chain
   ───────────────────────────────────────────── */
export function RetailValueChainDiagram() {
  const steps = [
    {
      icon: "🏭",
      label: "メーカー",
      detail: "商品企画・製造",
      color: "#94a3b8",
    },
    {
      icon: "🏢",
      label: "卸売",
      detail: "中間流通・在庫調整",
      color: "#64748b",
    },
    {
      icon: "🚛",
      label: "物流",
      detail: "配送・倉庫管理",
      color: "#f59e0b",
    },
    {
      icon: "🏪",
      label: "小売店舗",
      detail: "販売・接客・陳列",
      color: "#14b8a6",
    },
    {
      icon: "👤",
      label: "消費者",
      detail: "購買・体験・評価",
      color: "#3b82f6",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        小売業のバリューチェーン
      </div>
      {/* Desktop */}
      <div className="hidden sm:flex items-start gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start">
            <div className="flex flex-col items-center w-[100px]">
              <div
                className="w-12 h-12 rounded-xl border border-brief-border flex items-center justify-center text-xl"
                style={{ backgroundColor: `${step.color}10` }}
              >
                {step.icon}
              </div>
              <div
                className="mt-1.5 text-[10px] font-semibold text-center"
                style={{ color: step.color }}
              >
                {step.label}
              </div>
              <div className="mt-0.5 text-[9px] text-foreground/40 text-center leading-tight">
                {step.detail}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="mt-5 mx-1 text-foreground/25 text-[10px] flex-shrink-0">
                →
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="sm:hidden space-y-1">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 py-1.5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{ backgroundColor: `${step.color}10` }}
              >
                {step.icon}
              </div>
              <div>
                <div
                  className="text-xs font-semibold"
                  style={{ color: step.color }}
                >
                  {step.label}
                </div>
                <div className="text-[10px] text-foreground/45">
                  {step.detail}
                </div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-4 text-foreground/20 text-[10px]">↓</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        近年はメーカー→消費者のD2Cモデルや、小売主導のPB（プライベートブランド）が従来のチェーンを変革
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Retail Future Trends
   ───────────────────────────────────────────── */
export function RetailFutureDiagram() {
  const trends = [
    {
      year: "現在進行中",
      label: "リテールメディア",
      desc: "セブン、イオンが広告事業を本格化。米国では小売広告市場が450億ドル規模に",
      color: "#14b8a6",
      icon: "📺",
    },
    {
      year: "2025〜",
      label: "AI店舗運営",
      desc: "需要予測、自動発注、ダイナミックプライシングの全自動化が進行",
      color: "#3b82f6",
      icon: "🧠",
    },
    {
      year: "2025〜",
      label: "ラストワンマイル革命",
      desc: "ドローン配送、自動運転配送ロボットの実証実験が各地で進む",
      color: "#8b5cf6",
      icon: "🚁",
    },
    {
      year: "2026〜",
      label: "食品ロスゼロへ",
      desc: "2025年食品ロス削減法改正。AIによる需要予測と消費期限の見える化が標準に",
      color: "#f59e0b",
      icon: "♻️",
    },
    {
      year: "2030年目標",
      label: "買い物弱者ゼロ",
      desc: "移動販売車、ネットスーパー、コンビニ配送の組み合わせで全国カバーを目指す",
      color: "#ef4444",
      icon: "🏘",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        小売業の未来 — 注目トレンド
      </div>
      <div className="space-y-1.5">
        {trends.map((t, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                style={{ backgroundColor: `${t.color}15` }}
              >
                {t.icon}
              </div>
              {i < trends.length - 1 && (
                <div className="w-px h-6 bg-brief-border" />
              )}
            </div>
            <div className="pb-2 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[10px] font-bold tabular-nums"
                  style={{ color: t.color }}
                >
                  {t.year}
                </span>
                <span className="text-xs font-bold">{t.label}</span>
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5 leading-relaxed">
                {t.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
