"use client";

import { T } from "@/components/T";

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
  titleEn,
  subtitle,
  subtitleEn,
  children,
}: {
  title: string;
  titleEn: string;
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
          style={{ color: `${MAT}cc` }}
        >
          <T ja="図表" en="Chart" />
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">
          <T ja={title} en={titleEn} />
        </div>
        {subtitle && subtitleEn && (
          <div className="text-[11px] text-foreground/50 mt-1"><T ja={subtitle} en={subtitleEn} /></div>
        )}
        {subtitle && !subtitleEn && (
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
    { name: "ライトナフサ", nameEn: "Light Naphtha", bp: "〜100℃", bpEn: "up to 100°C", use: "エチレン・プロピレン原料", useEn: "Feedstock for ethylene & propylene", color: GREEN },
    { name: "ヘビーナフサ", nameEn: "Heavy Naphtha", bp: "100-180℃", bpEn: "100–180°C", use: "ガソリン基材・BTX原料", useEn: "Gasoline blendstock & BTX feedstock", color: ECON },
  ];
  return (
    <Card title="ナフサの分類" titleEn="Naphtha Classification" subtitle="沸点で2つに分けられる" subtitleEn="Divided into two types by boiling point">
      <div className="grid grid-cols-2 gap-3 mb-4">
        {items.map((i) => (
          <div
            key={i.name}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0d` }}
          >
            <div className="text-[12px] font-bold mb-1" style={{ color: i.color }}>
              <T ja={i.name} en={i.nameEn} />
            </div>
            <div className="text-[10px] text-foreground/60 mb-2"><T ja="沸点" en="Boiling point" /> <T ja={i.bp} en={i.bpEn} /></div>
            <div className="text-[11px] text-foreground/75"><T ja={i.use} en={i.useEn} /></div>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        <T
          ja={<>原油を常圧蒸留して得られる <strong>沸点30-180℃前後の軽質留分</strong>。日本の統計では「粗製ガソリン」とも呼ばれる</>}
          en={<>A <strong>light fraction with a boiling point of roughly 30–180°C</strong> obtained by atmospheric distillation of crude oil. Also called &ldquo;crude gasoline&rdquo; in Japanese statistics.</>}
        />
      </div>
    </Card>
  );
}

/* ── 2. Flow (naphtha → products) ── */
export function NaphthaFlowDiagram() {
  const rows = [
    { from: "エチレン (30%)", fromEn: "Ethylene (30%)", to: "ポリエチレン", toEn: "Polyethylene", end: "レジ袋・容器・フィルム", endEn: "Shopping bags, containers, film", color: GREEN },
    { from: "プロピレン (15%)", fromEn: "Propylene (15%)", to: "ポリプロピレン", toEn: "Polypropylene", end: "自動車部品・紙おむつ", endEn: "Auto parts, diapers", color: NAVY },
    { from: "ブタジエン", fromEn: "Butadiene", to: "SBR・ABS", toEn: "SBR / ABS", end: "タイヤ・家電筐体", endEn: "Tires, appliance housings", color: ECON },
    { from: "ベンゼン・キシレン", fromEn: "Benzene / Xylene", to: "PS・PET", toEn: "PS / PET", end: "弁当容器・ペットボトル", endEn: "Lunch boxes, PET bottles", color: PURPLE },
  ];
  return (
    <Card
      title="ナフサ → 基礎製品 → 身近な製品"
      titleEn="Naphtha → Basic Chemicals → Everyday Products"
      subtitle="850℃で熱分解、すべてはここから始まる"
      subtitleEn="Thermal cracking at 850°C — everything starts here"
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
              <T ja={r.from} en={r.fromEn} />
            </div>
            <div className="text-foreground/30 text-[10px]">→</div>
            <div className="text-[11px] font-bold text-foreground/80 w-[90px]"><T ja={r.to} en={r.toEn} /></div>
            <div className="text-foreground/30 text-[10px]">→</div>
            <div className="text-[10px] text-foreground/65 flex-1"><T ja={r.end} en={r.endEn} /></div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        <T
          ja={<>ナフサ1トンから得られるエチレンは約 <strong>300kg</strong>。残りもプロピレン・BTX・燃料ガスとして余さず利用</>}
          en={<>One ton of naphtha yields approximately <strong>300 kg</strong> of ethylene. The remainder is fully utilized as propylene, BTX, and fuel gas.</>}
        />
      </div>
    </Card>
  );
}

/* ── 3. Price 2026 ── */
export function NaphthaPrice2026Diagram() {
  return (
    <Card title="2026年3月 ― ナフサ価格スパイク" titleEn="March 2026 — Naphtha Price Spike" subtitle="1カ月で+60%の異常事態" subtitleEn="+60% surge in a single month">
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: `${RED}0d` }}>
          <div className="text-[10px] text-foreground/60"><T ja="シンガポール" en="Singapore" /></div>
          <div className="text-[22px] font-bold tabular-nums" style={{ color: RED }}>
            $1,000
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="/mt 突破" en="/mt breached" /></div>
        </div>
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: `${RED}0d` }}>
          <div className="text-[10px] text-foreground/60">C&F Japan</div>
          <div className="text-[22px] font-bold tabular-nums" style={{ color: RED }}>
            $1,010-50
          </div>
          <div className="text-[10px] text-foreground/60">/mt</div>
        </div>
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: `${ECON}0d` }}>
          <div className="text-[10px] text-foreground/60"><T ja="国産ナフサ" en="Domestic Naphtha" /></div>
          <div className="text-[22px] font-bold tabular-nums" style={{ color: ECON }}>
            87,917
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="円/KL" en="JPY/KL" /></div>
        </div>
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${RED}0d` }}
      >
        <T
          ja={<>直近1カ月で <strong>約+60%</strong> の急騰 ― 中東軍事衝突・ホルムズ海峡実質封鎖が直接要因（S&P Global / FinancialContent）</>}
          en={<>A <strong>~+60%</strong> surge over the past month — driven directly by Middle East military conflict and the de facto closure of the Strait of Hormuz (S&P Global / FinancialContent).</>}
        />
      </div>
    </Card>
  );
}

/* ── 4. Import dependency ── */
export function NaphthaImportDiagram() {
  const items = [
    { label: "輸入ナフサの中東比率", labelEn: "Middle East share of naphtha imports", pct: 74, color: RED },
    { label: "国内消費全体の中東依存", labelEn: "Middle East dependency of total domestic consumption", pct: 45, color: ECON },
    { label: "実質中東依存度（原油含む）", labelEn: "Effective Middle East dependency (incl. crude oil)", pct: 80, color: RED },
  ];
  return (
    <Card title="日本のナフサ 中東依存度" titleEn="Japan's Naphtha Dependence on the Middle East" subtitle="74%が中東から ― 致命的な集中" subtitleEn="74% sourced from the Middle East — a critical concentration">
      <div className="space-y-3 mb-4">
        {items.map((i) => (
          <div key={i.label}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70"><T ja={i.label} en={i.labelEn} /></span>
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
          <div className="text-[10px] text-foreground/60"><T ja="原油" en="Crude Oil" /></div>
          <div className="text-[18px] font-bold tabular-nums" style={{ color: NAVY }}>
            250<T ja="日" en=" days" />
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="国家備蓄" en="Strategic reserve" /></div>
        </div>
        <div
          className="p-3 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60"><T ja="ナフサ" en="Naphtha" /></div>
          <div className="text-[18px] font-bold tabular-nums" style={{ color: RED }}>
            <T ja="約20日" en="~20 days" />
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="民間在庫のみ" en="Private stockpiles only" /></div>
        </div>
      </div>
    </Card>
  );
}

/* ── 5. Cracker rate ── */
export function NaphthaCrackerRateDiagram() {
  const rates = [
    { month: "2025年1月", monthEn: "Jan 2025", rate: 80.6, color: GREEN },
    { month: "2025年12月", monthEn: "Dec 2025", rate: 77.0, color: ECON },
    { month: "2026年1月", monthEn: "Jan 2026", rate: 75.8, color: RED },
  ];
  return (
    <Card title="日本ナフサクラッカー稼働率" titleEn="Japan Naphtha Cracker Operating Rate" subtitle="採算ライン90%を大きく下回る" subtitleEn="Well below the breakeven threshold of 90%">
      <div className="space-y-2 mb-4">
        {rates.map((r) => (
          <div key={r.month}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70"><T ja={r.month} en={r.monthEn} /></span>
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
        <T
          ja={<>2026年1月エチレン生産 <strong>43.37万トン</strong>（前月比 -5%、前年比 -7%）― 日本のクラッカーは赤字圏（S&P Global）</>}
          en={<>January 2026 ethylene production: <strong>433,700 tons</strong> (−5% MoM, −7% YoY) — Japan crackers operating in the red (S&P Global).</>}
        />
      </div>
    </Card>
  );
}

/* ── 6. Household impact ── */
export function NaphthaHouseholdDiagram() {
  const items = [
    { name: "紙おむつ", nameEn: "Diapers", src: "PP不織布・吸水ポリマー", srcEn: "PP nonwoven & superabsorbent polymer" },
    { name: "食品ラップ", nameEn: "Food Wrap", src: "ポリエチレン／PVDC", srcEn: "Polyethylene / PVDC" },
    { name: "ペットボトル", nameEn: "PET Bottles", src: "PET樹脂", srcEn: "PET resin" },
    { name: "弁当容器", nameEn: "Lunch Box Containers", src: "ポリスチレン・OPS", srcEn: "Polystyrene / OPS" },
    { name: "洗剤容器", nameEn: "Detergent Bottles", src: "HDPE", srcEn: "HDPE" },
    { name: "合成繊維衣料", nameEn: "Synthetic Fiber Clothing", src: "ポリエステル", srcEn: "Polyester" },
    { name: "タイヤ", nameEn: "Tires", src: "合成ゴム（SBR・BR）", srcEn: "Synthetic rubber (SBR / BR)" },
  ];
  return (
    <Card title="値上がりが予想される日用品" titleEn="Everyday Products Expected to Rise in Price" subtitle="2026年夏以降、家計に波及" subtitleEn="Impact on household budgets from summer 2026">
      <div className="grid grid-cols-2 gap-2 mb-4">
        {items.map((i) => (
          <div
            key={i.name}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${ECON}0a` }}
          >
            <div className="text-[12px] font-bold" style={{ color: ECON }}>
              <T ja={i.name} en={i.nameEn} />
            </div>
            <div className="text-[10px] text-foreground/60 mt-0.5"><T ja={i.src} en={i.srcEn} /></div>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        <T
          ja={<>ナフサ → 樹脂（1-2カ月） → 成形品（2-3カ月） → 店頭価格（3-6カ月）。<strong>2026年3月スパイクは夏以降に顕在化</strong></>}
          en={<>Naphtha → resin (1–2 months) → molded products (2–3 months) → shelf prices (3–6 months). <strong>The March 2026 spike will materialize at retail from summer onward.</strong></>}
        />
      </div>
    </Card>
  );
}

/* ── 7. MOF formula ── */
export function NaphthaFormulaDiagram() {
  return (
    <Card title="国産ナフサ価格の計算式" titleEn="Domestic Naphtha Pricing Formula" subtitle="3カ月ラグで遅れて反映される仕組み" subtitleEn="Structure with a 3-month lag before prices are reflected">
      <div
        className="p-4 rounded-lg mb-4 text-center"
        style={{ backgroundColor: `${NAVY}0d` }}
      >
        <div className="text-[13px] font-bold" style={{ color: NAVY }}>
          <T
            ja="国産ナフサ価格 = MOF価格 + 2,000円/KL"
            en="Domestic Naphtha Price = MOF Price + ¥2,000/KL"
          />
        </div>
        <div className="text-[10px] text-foreground/60 mt-2">
          <T
            ja="MOF価格 = 財務省貿易統計の輸入ナフサ平均価格（直近3カ月の加重平均）"
            en="MOF Price = weighted average of imported naphtha prices from Ministry of Finance trade statistics (prior 3 months)"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div
          className="p-3 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${GREEN}0a` }}
        >
          <div className="text-[11px] font-bold" style={{ color: GREEN }}>
            <T ja="2025年10-12月期" en="Q4 2025 (Oct–Dec)" />
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            <T ja="3四半期ぶり +4% 上昇（円安要因、日経）" en="+4% increase for the first time in 3 quarters (yen weakness factor, Nikkei)" />
          </div>
        </div>
        <div
          className="p-3 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${ECON}0a` }}
        >
          <div className="text-[11px] font-bold" style={{ color: ECON }}>
            <T ja="2026年 5月前半入着分" en="Early May 2026 arrivals" />
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            <T
              ja={<><strong>87,917円/KL</strong>（三協化学、2026年3月6日更新）</>}
              en={<><strong>¥87,917/KL</strong> (Sankyo Chemical, updated March 6, 2026)</>}
            />
          </div>
        </div>
        <div
          className="p-3 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${RED}0a` }}
        >
          <div className="text-[11px] font-bold" style={{ color: RED }}>
            <T ja="2026年 第3四半期（予想）" en="Q3 2026 (Forecast)" />
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            <T
              ja={<>中東ショックがフル反映 → <strong>10万円/KL 台 再突入の可能性</strong></>}
              en={<>Middle East shock fully reflected → <strong>possibility of re-entering the ¥100,000/KL range</strong></>}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 8. Alternatives ── */
export function NaphthaAlternativesDiagram() {
  const alts = [
    { name: "バイオマスナフサ", nameEn: "Bio-based Naphtha", co2: "◎", cost: "×", note: "三井化学が採用", noteEn: "Adopted by Mitsui Chemicals", color: GREEN },
    { name: "エタンクラッカー", nameEn: "Ethane Cracker", co2: "○", cost: "◎", note: "米シェール由来", noteEn: "US shale-derived", color: MAT },
    { name: "フレックスフィード", nameEn: "Flex-feed Cracker", co2: "○", cost: "○", note: "韓台で先行", noteEn: "Pioneered in Korea & Taiwan", color: NAVY },
    { name: "ケミカルリサイクル", nameEn: "Chemical Recycling", co2: "◎", cost: "△", note: "廃プラ → ナフサ", noteEn: "Waste plastic → naphtha", color: PURPLE },
  ];
  return (
    <Card title="脱ナフサの4つの選択肢" titleEn="Four Alternatives to Naphtha Dependence" subtitle="多源化とフレキシビリティが鍵" subtitleEn="Diversification and flexibility are key">
      <div className="space-y-2">
        {alts.map((a) => (
          <div
            key={a.name}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${a.color}0a` }}
          >
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <div className="text-[13px] font-bold" style={{ color: a.color }}>
                <T ja={a.name} en={a.nameEn} />
              </div>
              <div className="flex gap-3 text-[10px] tabular-nums">
                <span className="text-foreground/65">CO2 {a.co2}</span>
                <span className="text-foreground/65"><T ja="コスト" en="Cost" /> {a.cost}</span>
              </div>
            </div>
            <div className="text-[10px] text-foreground/60"><T ja={a.note} en={a.noteEn} /></div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        <T
          ja={<>経産省はナフサを <strong>「エネルギー安全保障上の重要物資」</strong> として再定義検討中。国家備蓄対象入りが議論されている</>}
          en={<>METI is considering redefining naphtha as a <strong>&ldquo;critical commodity for energy security.&rdquo;</strong> Its inclusion in the national strategic reserve is under debate.</>}
        />
      </div>
    </Card>
  );
}

/* ── 9. Takeaway ── */
export function NaphthaTakeawayDiagram() {
  const points = [
    { num: "①", text: "ナフサは石油化学の「米」", textEn: `Naphtha is the "rice" of petrochemicals`, color: NAVY },
    { num: "②", text: "日本は74%中東依存、在庫は20日分", textEn: "Japan is 74% dependent on the Middle East, with just 20 days of inventory", color: RED },
    { num: "③", text: "2026年3月 $1,000突破、+60%急騰", textEn: "Breached $1,000 in March 2026 — a +60% surge", color: RED },
    { num: "④", text: "国内エチレン稼働率 75.8% へ低下", textEn: "Domestic ethylene cracker operating rate fell to 75.8%", color: ECON },
    { num: "⑤", text: "2026年夏以降、家計に波及", textEn: "Impact on household budgets from summer 2026 onward", color: ECON },
  ];
  return (
    <Card title="本記事の5つのポイント" titleEn="5 Key Takeaways" subtitle="紙おむつの先にある地政学" subtitleEn="The geopolitics behind your diapers">
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
            <div className="text-[12px] text-foreground/80 pt-0.5"><T ja={p.text} en={p.textEn} /></div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        <T
          ja={<>「安いナフサ時代」は終わった ― 日本が原料戦略を根本から見直す <strong>最後のチャンス</strong></>}
          en={<>The era of cheap naphtha is over — this may be Japan&apos;s <strong>last chance</strong> to fundamentally rethink its feedstock strategy.</>}
        />
      </div>
    </Card>
  );
}
