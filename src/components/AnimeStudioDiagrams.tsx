"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Anime Studio Economics — Diagrams
   ──────────────────────────────────────────────────────────── */

const ANIME = "#ec4899";
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
          style={{ color: `${ANIME}cc` }}
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

/* ── 1. Overview ── */
export function AnimeOverviewDiagram() {
  const segs = [
    { name: "海外売上", nameEn: "Overseas sales", value: 17000, color: NAVY },
    { name: "商品化", nameEn: "Merchandise", value: 7000, color: GREEN },
    { name: "配信", nameEn: "Streaming", value: 4000, color: PURPLE },
    { name: "パチンコ", nameEn: "Pachinko", value: 3000, color: ECON },
    { name: "ライブ・興行", nameEn: "Live events", value: 2000, color: ANIME },
  ];
  const max = 17000;
  return (
    <Card
      title={<T ja="アニメ産業 3.3兆円の内訳" en="Japan's ¥3.3 Trillion Anime Industry Breakdown" />}
      subtitle={<T ja="2024年実績（億円）" en="FY2024 results (¥100M)" />}
    >
      <div className="space-y-2">
        {segs.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70"><T ja={s.name} en={s.nameEn} /></span>
              <span
                className="tabular-nums font-bold"
                style={{ color: s.color }}
              >
                <T ja={`${s.value.toLocaleString()}億円`} en={`¥${s.value.toLocaleString()}00M`} />
              </span>
            </div>
            <div className="h-4 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${(s.value / max) * 100}%`,
                  backgroundColor: s.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70 text-center">
        <T
          ja={<>市場 <strong>3.3兆円</strong> ／ 制作会社全体の売上 <strong>約3,000億円</strong></>}
          en={<>Total market <strong>¥3.3 trillion</strong> / Production studios' combined revenue <strong>~¥300 billion</strong></>}
        />
      </div>
    </Card>
  );
}

/* ── 2. Production committee ── */
export function AnimeCommitteeDiagram() {
  const members = [
    { name: "原作（出版社）", nameEn: "Original work (publisher)", share: "原作料・コミックス収入", shareEn: "Rights fees and manga sales", color: NAVY },
    { name: "テレビ局", nameEn: "TV broadcaster", share: "放映権・CM収益", shareEn: "Broadcast rights and ad revenue", color: GREEN },
    { name: "配信会社", nameEn: "Streaming platform", share: "配信権", shareEn: "Streaming rights", color: PURPLE },
    { name: "玩具・グッズ", nameEn: "Toys & merchandise", share: "商品化権", shareEn: "Merchandising rights", color: ECON },
    { name: "レコード会社", nameEn: "Music label", share: "音楽収入", shareEn: "Music revenue", color: ANIME },
    { name: "制作スタジオ", nameEn: "Production studio", share: "制作費（原価＋微利）", shareEn: "Production fee (cost + thin margin)", color: RED },
  ];
  return (
    <Card
      title={<T ja="製作委員会方式 ― 利益分配" en="Production Committee Model — Profit Distribution" />}
      subtitle={<T ja="制作スタジオの取り分は最小" en="Studios receive the smallest share" />}
    >
      <div className="space-y-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex items-baseline justify-between gap-2 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${m.color}0a` }}
          >
            <div className="text-[12px] font-bold" style={{ color: m.color }}>
              <T ja={m.name} en={m.nameEn} />
            </div>
            <div className="text-[10px] text-foreground/65 text-right">
              <T ja={m.share} en={m.shareEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<><strong>制作会社の出資比率</strong>：通常 0〜10%／作品がヒットしてもスタジオへの配当はわずか</>}
          en={<><strong>Studio investment stake</strong>: typically 0–10% / Even a hit title yields minimal dividends to the studio</>}
        />
      </div>
    </Card>
  );
}

/* ── 3. Studio P&L ── */
export function AnimeStudioPlDiagram() {
  const costs = [
    { name: "原画", nameEn: "Key animation", pct: 33, color: NAVY },
    { name: "動画・仕上げ", nameEn: "In-between animation & finishing", pct: 22, color: PURPLE },
    { name: "演出・脚本", nameEn: "Direction & screenplay", pct: 10, color: GREEN },
    { name: "音響・録音", nameEn: "Sound & recording", pct: 7, color: ECON },
    { name: "美術背景", nameEn: "Art & backgrounds", pct: 8, color: ANIME },
    { name: "制作管理・諸経費", nameEn: "Production management & overheads", pct: 17, color: "#94a3b8" },
    { name: "スタジオ利益", nameEn: "Studio profit", pct: 3, color: RED },
  ];
  return (
    <Card
      title={<T ja="制作スタジオのコスト構造" en="Anime Studio Cost Structure" />}
      subtitle={<T ja="営業利益率は1〜5%" en="Operating margin: 1–5%" />}
    >
      <div className="space-y-1.5">
        {costs.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="text-foreground/70"><T ja={c.name} en={c.nameEn} /></span>
              <span
                className="tabular-nums font-bold"
                style={{ color: c.color }}
              >
                {c.pct}%
              </span>
            </div>
            <div className="h-3 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{ width: `${c.pct * 3}%`, backgroundColor: c.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<><strong>動画マンの年収</strong>：100〜200万円／時給換算で最低賃金以下のケースも</>}
          en={<><strong>In-between animator annual income</strong>: ¥1–2 million / sometimes below minimum wage on an hourly basis</>}
        />
      </div>
    </Card>
  );
}

/* ── 4. Three studios ── */
export function AnimeThreeStudiosDiagram() {
  const studios = [
    {
      name: "MAPPA",
      works: "呪術廻戦・チェンソーマン・進撃の巨人",
      worksEn: "Jujutsu Kaisen, Chainsaw Man, Attack on Titan",
      strategy: "攻めの量産型",
      strategyEn: "Aggressive high-volume production",
      color: NAVY,
    },
    {
      name: "ufotable",
      works: "鬼滅の刃・Fate",
      worksEn: "Demon Slayer, Fate series",
      strategy: "選択と集中＋IP保有型",
      strategyEn: "Focus and concentration + IP ownership",
      color: GREEN,
    },
    {
      name: "京都アニメーション",
      nameEn: "Kyoto Animation",
      works: "けいおん！・ヴァイオレット・エヴァーガーデン",
      worksEn: "K-On!, Violet Evergarden",
      strategy: "自社養成・自社IPの職人型",
      strategyEn: "In-house talent development and IP ownership",
      color: ECON,
    },
  ];
  return (
    <Card
      title={<T ja="3スタジオ比較" en="3 Studio Comparison" />}
      subtitle={<T ja="戦略と代表作" en="Strategy and signature titles" />}
    >
      <div className="space-y-2">
        {studios.map((s) => (
          <div
            key={s.name}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${s.color}0d` }}
          >
            <div className="text-[14px] font-bold" style={{ color: s.color }}>
              <T ja={s.name} en={(s as { nameEn?: string }).nameEn ?? s.name} />
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">
              <T ja={s.works} en={s.worksEn} />
            </div>
            <div
              className="text-[10px] mt-1 font-semibold"
              style={{ color: s.color }}
            >
              <T ja={s.strategy} en={s.strategyEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. Streaming ── */
export function AnimeStreamingDiagram() {
  return (
    <Card
      title={<T ja="海外配信プラットフォームの台頭" en="Rise of Overseas Streaming Platforms" />}
      subtitle={<T ja="製作委員会 vs 直接発注" en="Production committee vs. direct commissioning" />}
    >
      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${NAVY}0d` }}
        >
          <div className="text-[11px] font-bold mb-2" style={{ color: NAVY }}>
            <T ja="製作委員会" en="Production committee" />
          </div>
          <ul className="space-y-1 text-[10px] text-foreground/70">
            <li><T ja="• IP共有・上振れ可能" en="• Shared IP; upside potential" /></li>
            <li><T ja="• 制作費は薄利" en="• Thin margin on production fees" /></li>
            <li><T ja="• 多様な権利者" en="• Multiple rights holders" /></li>
          </ul>
        </div>
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[11px] font-bold mb-2" style={{ color: GREEN }}>
            <T ja="直接発注（Netflix型）" en="Direct commission (Netflix model)" />
          </div>
          <ul className="space-y-1 text-[10px] text-foreground/70">
            <li><T ja="• 制作費が直接入金" en="• Production fee paid directly" /></li>
            <li><T ja="• 利益率は改善" en="• Better margins" /></li>
            <li><T ja="• IP は配信会社が保有" en="• IP retained by the streamer" /></li>
          </ul>
        </div>
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${PURPLE}0d` }}
      >
        <T
          ja="Crunchyroll（Sony傘下）は世界最大級のアニメ配信。米国・欧州市場の窓口"
          en="Crunchyroll (Sony subsidiary) is one of the world's largest anime streamers, serving as the gateway to US and European markets"
        />
      </div>
    </Card>
  );
}

/* ── 6. Future ── */
export function AnimeFutureDiagram() {
  const items = [
    { num: "①", title: "労働環境の改善", titleEn: "Improving working conditions", color: GREEN },
    { num: "②", title: "IP保有モデル拡大", titleEn: "Expanding IP ownership models", color: NAVY },
    { num: "③", title: "AI・デジタル化", titleEn: "AI and digitalization", color: PURPLE },
    { num: "④", title: "海外配信との交渉力強化", titleEn: "Strengthening bargaining power with overseas streamers", color: ECON },
  ];
  return (
    <Card
      title={<T ja="次の10年 ― 4つの課題" en="The Next Decade — 4 Key Challenges" />}
      subtitle={<T ja="持続可能なアニメ産業へ" en="Toward a sustainable anime industry" />}
    >
      <div className="space-y-2">
        {items.map((i) => (
          <div
            key={i.num}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div
              className="text-[16px] font-bold tabular-nums shrink-0"
              style={{ color: i.color }}
            >
              {i.num}
            </div>
            <div className="text-[12px] font-bold" style={{ color: i.color }}>
              <T ja={i.title} en={i.titleEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
