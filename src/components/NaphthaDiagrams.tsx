"use client";

/* ────────────────────────────────────────────────────────────
   Naphtha 2026 Crisis — Diagrams
   ──────────────────────────────────────────────────────────── */

const MAT = "#0ea5e9";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const ECON = "#b9770e";
const PURPLE = "#8b5cf6";

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
          style={{ color: `${MAT}cc` }}
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

/* ── 1. Basics ── */
export function NaphthaBasicsDiagram() {
  const items = [
    { name: "ライトナフサ", bp: "〜100℃", use: "エチレン・プロピレン原料", color: GREEN },
    { name: "ヘビーナフサ", bp: "100-180℃", use: "ガソリン基材・BTX原料", color: ECON },
  ];
  return (
    <Card title="ナフサの分類" subtitle="沸点で2つに分けられる">
      <div className="grid grid-cols-2 gap-3 mb-4">
        {items.map((i) => (
          <div
            key={i.name}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0d` }}
          >
            <div className="text-[12px] font-bold mb-1" style={{ color: i.color }}>
              {i.name}
            </div>
            <div className="text-[10px] text-foreground/60 mb-2">沸点 {i.bp}</div>
            <div className="text-[11px] text-foreground/75">{i.use}</div>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        原油を常圧蒸留して得られる <strong>沸点30-180℃前後の軽質留分</strong>。日本の統計では「粗製ガソリン」とも呼ばれる
      </div>
    </Card>
  );
}

/* ── 2. Flow (naphtha → products) ── */
export function NaphthaFlowDiagram() {
  const rows = [
    { from: "エチレン (30%)", to: "ポリエチレン", end: "レジ袋・容器・フィルム", color: GREEN },
    { from: "プロピレン (15%)", to: "ポリプロピレン", end: "自動車部品・紙おむつ", color: NAVY },
    { from: "ブタジエン", to: "SBR・ABS", end: "タイヤ・家電筐体", color: ECON },
    { from: "ベンゼン・キシレン", to: "PS・PET", end: "弁当容器・ペットボトル", color: PURPLE },
  ];
  return (
    <Card
      title="ナフサ → 基礎製品 → 身近な製品"
      subtitle="850℃で熱分解、すべてはここから始まる"
    >
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.from}
            className="flex items-center gap-2 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${r.color}0a` }}
          >
            <div
              className="text-[11px] font-bold tabular-nums shrink-0 w-[110px]"
              style={{ color: r.color }}
            >
              {r.from}
            </div>
            <div className="text-foreground/30 text-[10px]">→</div>
            <div className="text-[11px] font-bold text-foreground/80 w-[90px]">{r.to}</div>
            <div className="text-foreground/30 text-[10px]">→</div>
            <div className="text-[10px] text-foreground/65 flex-1">{r.end}</div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        ナフサ1トンから得られるエチレンは約 <strong>300kg</strong>。残りもプロピレン・BTX・燃料ガスとして余さず利用
      </div>
    </Card>
  );
}

/* ── 3. Price 2026 ── */
export function NaphthaPrice2026Diagram() {
  return (
    <Card title="2026年3月 ― ナフサ価格スパイク" subtitle="1カ月で+60%の異常事態">
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: `${RED}0d` }}>
          <div className="text-[10px] text-foreground/60">シンガポール</div>
          <div className="text-[22px] font-bold tabular-nums" style={{ color: RED }}>
            $1,000
          </div>
          <div className="text-[10px] text-foreground/60">/mt 突破</div>
        </div>
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: `${RED}0d` }}>
          <div className="text-[10px] text-foreground/60">C&F Japan</div>
          <div className="text-[22px] font-bold tabular-nums" style={{ color: RED }}>
            $1,010-50
          </div>
          <div className="text-[10px] text-foreground/60">/mt</div>
        </div>
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: `${ECON}0d` }}>
          <div className="text-[10px] text-foreground/60">国産ナフサ</div>
          <div className="text-[22px] font-bold tabular-nums" style={{ color: ECON }}>
            87,917
          </div>
          <div className="text-[10px] text-foreground/60">円/KL</div>
        </div>
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${RED}0d` }}
      >
        直近1カ月で <strong>約+60%</strong> の急騰 ― 中東軍事衝突・ホルムズ海峡実質封鎖が直接要因（S&P Global / FinancialContent）
      </div>
    </Card>
  );
}

/* ── 4. Import dependency ── */
export function NaphthaImportDiagram() {
  const items = [
    { label: "輸入ナフサの中東比率", pct: 74, color: RED },
    { label: "国内消費全体の中東依存", pct: 45, color: ECON },
    { label: "実質中東依存度（原油含む）", pct: 80, color: RED },
  ];
  return (
    <Card title="日本のナフサ 中東依存度" subtitle="74%が中東から ― 致命的な集中">
      <div className="space-y-3 mb-4">
        {items.map((i) => (
          <div key={i.label}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70">{i.label}</span>
              <span
                className="tabular-nums font-bold"
                style={{ color: i.color }}
              >
                {i.pct}%
              </span>
            </div>
            <div className="h-4 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{ width: `${i.pct}%`, backgroundColor: i.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-3 rounded-lg text-center"
          style={{ backgroundColor: `${NAVY}0d` }}
        >
          <div className="text-[10px] text-foreground/60">原油</div>
          <div className="text-[18px] font-bold tabular-nums" style={{ color: NAVY }}>
            250日
          </div>
          <div className="text-[10px] text-foreground/60">国家備蓄</div>
        </div>
        <div
          className="p-3 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60">ナフサ</div>
          <div className="text-[18px] font-bold tabular-nums" style={{ color: RED }}>
            約20日
          </div>
          <div className="text-[10px] text-foreground/60">民間在庫のみ</div>
        </div>
      </div>
    </Card>
  );
}

/* ── 5. Cracker rate ── */
export function NaphthaCrackerRateDiagram() {
  const rates = [
    { month: "2025年1月", rate: 80.6, color: GREEN },
    { month: "2025年12月", rate: 77.0, color: ECON },
    { month: "2026年1月", rate: 75.8, color: RED },
  ];
  return (
    <Card title="日本ナフサクラッカー稼働率" subtitle="採算ライン90%を大きく下回る">
      <div className="space-y-2 mb-4">
        {rates.map((r) => (
          <div key={r.month}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70">{r.month}</span>
              <span
                className="tabular-nums font-bold"
                style={{ color: r.color }}
              >
                {r.rate}%
              </span>
            </div>
            <div className="h-4 rounded bg-foreground/5 overflow-hidden relative">
              <div
                className="h-full"
                style={{ width: `${r.rate}%`, backgroundColor: r.color }}
              />
              <div
                className="absolute top-0 bottom-0 w-[1.5px] bg-foreground/40"
                style={{ left: "90%" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${RED}0d` }}
      >
        2026年1月エチレン生産 <strong>43.37万トン</strong>（前月比 -5%、前年比 -7%）― 日本のクラッカーは赤字圏（S&P Global）
      </div>
    </Card>
  );
}

/* ── 6. Household impact ── */
export function NaphthaHouseholdDiagram() {
  const items = [
    { name: "紙おむつ", src: "PP不織布・吸水ポリマー" },
    { name: "食品ラップ", src: "ポリエチレン／PVDC" },
    { name: "ペットボトル", src: "PET樹脂" },
    { name: "弁当容器", src: "ポリスチレン・OPS" },
    { name: "洗剤容器", src: "HDPE" },
    { name: "合成繊維衣料", src: "ポリエステル" },
    { name: "タイヤ", src: "合成ゴム（SBR・BR）" },
  ];
  return (
    <Card title="値上がりが予想される日用品" subtitle="2026年夏以降、家計に波及">
      <div className="grid grid-cols-2 gap-2 mb-4">
        {items.map((i) => (
          <div
            key={i.name}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${ECON}0a` }}
          >
            <div className="text-[12px] font-bold" style={{ color: ECON }}>
              {i.name}
            </div>
            <div className="text-[10px] text-foreground/60 mt-0.5">{i.src}</div>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        ナフサ → 樹脂（1-2カ月） → 成形品（2-3カ月） → 店頭価格（3-6カ月）。<strong>2026年3月スパイクは夏以降に顕在化</strong>
      </div>
    </Card>
  );
}

/* ── 7. MOF formula ── */
export function NaphthaFormulaDiagram() {
  return (
    <Card title="国産ナフサ価格の計算式" subtitle="3カ月ラグで遅れて反映される仕組み">
      <div
        className="p-4 rounded-lg mb-4 text-center"
        style={{ backgroundColor: `${NAVY}0d` }}
      >
        <div className="text-[13px] font-bold" style={{ color: NAVY }}>
          国産ナフサ価格 = MOF価格 + 2,000円/KL
        </div>
        <div className="text-[10px] text-foreground/60 mt-2">
          MOF価格 = 財務省貿易統計の輸入ナフサ平均価格（直近3カ月の加重平均）
        </div>
      </div>
      <div className="space-y-2">
        <div
          className="p-3 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${GREEN}0a` }}
        >
          <div className="text-[11px] font-bold" style={{ color: GREEN }}>
            2025年10-12月期
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            3四半期ぶり +4% 上昇（円安要因、日経）
          </div>
        </div>
        <div
          className="p-3 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${ECON}0a` }}
        >
          <div className="text-[11px] font-bold" style={{ color: ECON }}>
            2026年 5月前半入着分
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            <strong>87,917円/KL</strong>（三協化学、2026年3月6日更新）
          </div>
        </div>
        <div
          className="p-3 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${RED}0a` }}
        >
          <div className="text-[11px] font-bold" style={{ color: RED }}>
            2026年 第3四半期（予想）
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            中東ショックがフル反映 → <strong>10万円/KL 台 再突入の可能性</strong>
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 8. Alternatives ── */
export function NaphthaAlternativesDiagram() {
  const alts = [
    { name: "バイオマスナフサ", co2: "◎", cost: "×", note: "三井化学が採用", color: GREEN },
    { name: "エタンクラッカー", co2: "○", cost: "◎", note: "米シェール由来", color: MAT },
    { name: "フレックスフィード", co2: "○", cost: "○", note: "韓台で先行", color: NAVY },
    { name: "ケミカルリサイクル", co2: "◎", cost: "△", note: "廃プラ → ナフサ", color: PURPLE },
  ];
  return (
    <Card title="脱ナフサの4つの選択肢" subtitle="多源化とフレキシビリティが鍵">
      <div className="space-y-2">
        {alts.map((a) => (
          <div
            key={a.name}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${a.color}0a` }}
          >
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <div className="text-[13px] font-bold" style={{ color: a.color }}>
                {a.name}
              </div>
              <div className="flex gap-3 text-[10px] tabular-nums">
                <span className="text-foreground/65">CO2 {a.co2}</span>
                <span className="text-foreground/65">コスト {a.cost}</span>
              </div>
            </div>
            <div className="text-[10px] text-foreground/60">{a.note}</div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        経産省はナフサを <strong>「エネルギー安全保障上の重要物資」</strong> として再定義検討中。国家備蓄対象入りが議論されている
      </div>
    </Card>
  );
}

/* ── 9. Takeaway ── */
export function NaphthaTakeawayDiagram() {
  const points = [
    { num: "①", text: "ナフサは石油化学の「米」", color: NAVY },
    { num: "②", text: "日本は74%中東依存、在庫は20日分", color: RED },
    { num: "③", text: "2026年3月 $1,000突破、+60%急騰", color: RED },
    { num: "④", text: "国内エチレン稼働率 75.8% へ低下", color: ECON },
    { num: "⑤", text: "2026年夏以降、家計に波及", color: ECON },
  ];
  return (
    <Card title="本記事の5つのポイント" subtitle="紙おむつの先にある地政学">
      <div className="space-y-2">
        {points.map((p) => (
          <div
            key={p.num}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${p.color}0a` }}
          >
            <div
              className="text-[18px] font-bold tabular-nums shrink-0"
              style={{ color: p.color }}
            >
              {p.num}
            </div>
            <div className="text-[12px] text-foreground/80 pt-0.5">{p.text}</div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        「安いナフサ時代」は終わった ― 日本が原料戦略を根本から見直す <strong>最後のチャンス</strong>
      </div>
    </Card>
  );
}
