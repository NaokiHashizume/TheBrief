"use client";

import { T } from "./T";

const ACCENT = "#3b82f6";

function Card({
  children,
  title,
  titleEn,
}: {
  children: React.ReactNode;
  title: string;
  titleEn: string;
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

export function GovCloudProvidersDiagram() {
  const providers = [
    { name: "AWS", origin: "USA", since: "2021", domestic: false },
    { name: "Google Cloud", origin: "USA", since: "2021", domestic: false },
    { name: "Microsoft Azure", origin: "USA", since: "2022", domestic: false },
    { name: "Oracle Cloud", origin: "USA", since: "2022", domestic: false },
    { name: "Sakura Cloud", origin: "Japan", since: "2026", domestic: true },
  ];
  return (
    <Card
      title="ガバメントクラウド認定事業者 5社（2026年4月時点）"
      titleEn="Government Cloud Approved Providers (April 2026)"
    >
      <div className="space-y-2">
        {providers.map((p, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-lg border border-brief-border"
            style={
              p.domestic
                ? { backgroundColor: `${ACCENT}08`, borderColor: `${ACCENT}40` }
                : undefined
            }
          >
            <div className="text-[13px] font-bold text-foreground/85">
              {p.name}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-foreground/55">
                <T ja={p.origin === "Japan" ? "日本" : "米国"} en={p.origin} />
              </span>
              <span
                className="text-[10px] font-bold tabular-nums px-2 py-0.5 rounded-full"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                {p.since}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45">
        <T
          ja="さくらは2023年11月に条件付き採択、2026年3月27日に正式認定"
          en="Sakura was conditionally approved Nov 2023; formally certified Mar 27, 2026"
        />
      </div>
    </Card>
  );
}

export function SovereignCloudWhyDiagram() {
  const args = [
    {
      ja: "データ主権",
      en: "Data sovereignty",
      desc: "CLOUD Actで米司法当局の射程内",
      descEn: "US CLOUD Act reaches data abroad",
    },
    {
      ja: "産業政策",
      en: "Industrial policy",
      desc: "国内に技術と雇用を残す",
      descEn: "Keep tech and jobs at home",
    },
    {
      ja: "運用冗長性",
      en: "Operational redundancy",
      desc: "単一ベンダー依存からの脱却",
      descEn: "Reduce single-vendor lock-in",
    },
  ];
  return (
    <Card
      title="クラウド国産化の3つの論拠"
      titleEn="Three Arguments for a Domestic Cloud"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {args.map((a, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-l-4 bg-brief-card"
            style={{ borderLeftColor: ACCENT }}
          >
            <div
              className="text-[10px] uppercase tracking-[1.5px] font-bold mb-2"
              style={{ color: ACCENT }}
            >
              <T ja={a.ja} en={a.en} />
            </div>
            <div className="text-[12px] text-foreground/70 leading-snug">
              <T ja={a.desc} en={a.descEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SakuraVsHyperscalersDiagram() {
  const rows = [
    {
      label: "年間売上",
      labelEn: "Annual revenue",
      sakura: "≈ ¥30 B",
      hyper: "$50 B – $100 B+",
    },
    {
      label: "マネージドサービス数",
      labelEn: "Managed services",
      sakura: "数十",
      sakuraEn: "Dozens",
      hyper: "数百",
      hyperEn: "Hundreds",
    },
    {
      label: "国内DC拠点",
      labelEn: "Domestic DC sites",
      sakura: "北海道・福岡 ほか",
      sakuraEn: "Hokkaido, Fukuoka, etc.",
      hyper: "東京・大阪リージョン",
      hyperEn: "Tokyo / Osaka regions",
    },
    {
      label: "差別化軸",
      labelEn: "Differentiation",
      sakura: "国内事業者・経済安保",
      sakuraEn: "Domestic operator / econ-sec",
      hyper: "規模・機能・価格",
      hyperEn: "Scale / features / price",
    },
  ];
  return (
    <Card
      title="さくら vs 米系ハイパースケーラ"
      titleEn="Sakura vs the US Hyperscalers"
    >
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-3 gap-2 p-3 rounded-lg border border-brief-border text-[12px]"
          >
            <div className="font-semibold text-foreground/70">
              <T ja={r.label} en={r.labelEn} />
            </div>
            <div className="text-foreground/80">
              <span
                className="text-[9px] font-bold uppercase tracking-wider mr-1"
                style={{ color: ACCENT }}
              >
                Sakura
              </span>
              <T ja={r.sakura} en={r.sakuraEn ?? r.sakura} />
            </div>
            <div className="text-foreground/60">
              <span className="text-[9px] font-bold uppercase tracking-wider mr-1 text-foreground/40">
                Hyper
              </span>
              <T ja={r.hyper} en={r.hyperEn ?? r.hyper} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function MicrosoftSovereignAiDiagram() {
  const layers = [
    {
      ja: "アプリ層",
      en: "Application layer",
      who: "Microsoft Azure",
      desc: "API・モデル・運用",
      descEn: "APIs, models, operations",
    },
    {
      ja: "計算層",
      en: "Compute layer",
      who: "Sakura / SoftBank",
      desc: "NVIDIA GPU・国内DC",
      descEn: "NVIDIA GPUs in JP DCs",
    },
    {
      ja: "データ層",
      en: "Data layer",
      who: "JP Territory",
      desc: "国内残留・現地ガバナンス",
      descEn: "Local residency & governance",
    },
  ];
  return (
    <Card
      title="Microsoft『ソブリンAI』の3層構造"
      titleEn="Microsoft's 'Sovereign AI' Stack — Three Layers"
    >
      <div className="space-y-3">
        {layers.map((l, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-brief-border flex items-center justify-between"
          >
            <div>
              <div
                className="text-[10px] uppercase tracking-[1.5px] font-bold mb-1"
                style={{ color: ACCENT }}
              >
                <T ja={l.ja} en={l.en} />
              </div>
              <div className="text-[12px] text-foreground/65">
                <T ja={l.desc} en={l.descEn} />
              </div>
            </div>
            <div
              className="text-[11px] font-bold px-3 py-1 rounded-full"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {l.who}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45 text-center">
        <T
          ja="2026〜2029年で日本に総額100億ドル投資"
          en="$10 B Japan investment, 2026–2029"
        />
      </div>
    </Card>
  );
}

export function GovCloudWatchlistDiagram() {
  const items = [
    {
      ja: "自治体のクラウド選択が二極化するか",
      en: "Will local-government cloud choices split?",
    },
    {
      ja: "IIJ・NTT・富士通の次回採択挑戦",
      en: "IIJ, NTT, Fujitsu retry the next round",
    },
    {
      ja: "生成AI向け『国産』の定義論",
      en: "Defining 'domestic' for generative-AI compute",
    },
  ];
  return (
    <Card
      title="2026年以降の3つの観測点"
      titleEn="Three Things to Watch From 2026 Onward"
    >
      <ol className="space-y-2">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
          >
            <span
              className="text-[11px] font-bold tabular-nums w-6 h-6 rounded-full flex items-center justify-center"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {i + 1}
            </span>
            <span className="text-[13px] text-foreground/80 font-medium">
              <T ja={it.ja} en={it.en} />
            </span>
          </li>
        ))}
      </ol>
    </Card>
  );
}
