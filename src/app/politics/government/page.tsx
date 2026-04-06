import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "官公庁リンク集 — Government Directory",
  description:
    "日本の省庁・官公庁の公式サイトリンク集。内閣府、全11省、主要な庁・委員会、独立機関、政府データポータルを網羅。",
  alternates: { canonical: "https://thebrief.info/politics/government" },
};

interface GovLink {
  name: string;
  nameEn: string;
  url: string;
  description?: string;
}

interface GovCategory {
  title: string;
  titleEn: string;
  color: string;
  icon: string;
  links: GovLink[];
}

const categories: GovCategory[] = [
  {
    title: "内閣関連",
    titleEn: "Cabinet",
    color: "#dc2626",
    icon: "🏛",
    links: [
      {
        name: "首相官邸",
        nameEn: "Prime Minister's Office",
        url: "https://www.kantei.go.jp/",
        description: "内閣総理大臣の公式サイト。政策情報、記者会見、施政方針演説など。",
      },
      {
        name: "内閣官房",
        nameEn: "Cabinet Secretariat",
        url: "https://www.cas.go.jp/",
        description: "内閣の重要政策の企画・総合調整。行政機構図、重要政策会議の情報。",
      },
      {
        name: "内閣法制局",
        nameEn: "Cabinet Legislation Bureau",
        url: "https://www.clb.go.jp/",
        description: "法律案の審査、法制についての意見。憲法解釈に関する見解。",
      },
      {
        name: "内閣府",
        nameEn: "Cabinet Office",
        url: "https://www.cao.go.jp/",
        description: "経済財政政策、規制改革、防災、男女共同参画、GDP統計など。",
      },
    ],
  },
  {
    title: "省（全11省）",
    titleEn: "Ministries",
    color: "#3b82f6",
    icon: "🏢",
    links: [
      {
        name: "総務省",
        nameEn: "Ministry of Internal Affairs and Communications",
        url: "https://www.soumu.go.jp/",
        description: "地方自治、情報通信、統計、選挙、行政評価。",
      },
      {
        name: "法務省",
        nameEn: "Ministry of Justice",
        url: "https://www.moj.go.jp/",
        description: "司法制度、民事・刑事法制、人権擁護、出入国管理。",
      },
      {
        name: "外務省",
        nameEn: "Ministry of Foreign Affairs",
        url: "https://www.mofa.go.jp/",
        description: "外交政策、国際協力、領事サービス、各国情勢。",
      },
      {
        name: "財務省",
        nameEn: "Ministry of Finance",
        url: "https://www.mof.go.jp/",
        description: "予算・税制・国債・関税・財政投融資。税収統計、財政資料。",
      },
      {
        name: "文部科学省",
        nameEn: "MEXT",
        url: "https://www.mext.go.jp/",
        description: "教育政策、科学技術・学術政策、スポーツ、文化。",
      },
      {
        name: "厚生労働省",
        nameEn: "MHLW",
        url: "https://www.mhlw.go.jp/",
        description: "医療・福祉・年金・雇用・労働。社会保障統計、毎月勤労統計。",
      },
      {
        name: "農林水産省",
        nameEn: "MAFF",
        url: "https://www.maff.go.jp/",
        description: "農業・林業・水産業の振興、食料安全保障、食品安全。",
      },
      {
        name: "経済産業省",
        nameEn: "METI",
        url: "https://www.meti.go.jp/",
        description: "経済・産業政策、通商政策、エネルギー政策、中小企業支援。",
      },
      {
        name: "国土交通省",
        nameEn: "MLIT",
        url: "https://www.mlit.go.jp/",
        description: "国土計画、都市・住宅政策、交通・物流、建設業、気象。",
      },
      {
        name: "環境省",
        nameEn: "MOE",
        url: "https://www.env.go.jp/",
        description: "環境保全、地球温暖化対策、廃棄物・リサイクル、自然保護。",
      },
      {
        name: "防衛省",
        nameEn: "MOD",
        url: "https://www.mod.go.jp/",
        description: "防衛政策、自衛隊の運用、安全保障、防衛白書。",
      },
    ],
  },
  {
    title: "内閣府の外局・委員会",
    titleEn: "Cabinet Office Agencies",
    color: "#8b5cf6",
    icon: "⚖️",
    links: [
      {
        name: "宮内庁",
        nameEn: "Imperial Household Agency",
        url: "https://www.kunaicho.go.jp/",
      },
      {
        name: "公正取引委員会",
        nameEn: "Japan Fair Trade Commission",
        url: "https://www.jftc.go.jp/",
        description: "独占禁止法の運用、競争政策。",
      },
      {
        name: "金融庁",
        nameEn: "Financial Services Agency",
        url: "https://www.fsa.go.jp/",
        description: "金融制度の企画・立案、金融機関の検査・監督。NISA・投資関連。",
      },
      {
        name: "消費者庁",
        nameEn: "Consumer Affairs Agency",
        url: "https://www.caa.go.jp/",
        description: "消費者行政の司令塔。製品安全、食品表示、景品表示法。",
      },
      {
        name: "こども家庭庁",
        nameEn: "Children and Families Agency",
        url: "https://www.cfa.go.jp/",
        description: "2023年新設。子ども政策、少子化対策、児童福祉。",
      },
      {
        name: "個人情報保護委員会",
        nameEn: "Personal Information Protection Commission",
        url: "https://www.ppc.go.jp/",
        description: "個人情報保護法の運用、マイナンバー制度の監視・監督。",
      },
    ],
  },
  {
    title: "デジタル庁・復興庁",
    titleEn: "Digital Agency & Reconstruction Agency",
    color: "#14b8a6",
    icon: "💻",
    links: [
      {
        name: "デジタル庁",
        nameEn: "Digital Agency",
        url: "https://www.digital.go.jp/",
        description: "2021年新設。行政DX、マイナンバーカード、ガバメントクラウド。",
      },
      {
        name: "復興庁",
        nameEn: "Reconstruction Agency",
        url: "https://www.reconstruction.go.jp/",
        description: "東日本大震災からの復興施策の統括・推進。",
      },
    ],
  },
  {
    title: "主要な外局・庁",
    titleEn: "Key Agencies",
    color: "#f59e0b",
    icon: "🏗",
    links: [
      {
        name: "国税庁",
        nameEn: "National Tax Agency",
        url: "https://www.nta.go.jp/",
        description: "税務行政の執行。確定申告、税制解説、e-Tax。（財務省外局）",
      },
      {
        name: "警察庁",
        nameEn: "National Police Agency",
        url: "https://www.npa.go.jp/",
        description: "治安維持、犯罪統計、サイバーセキュリティ。（国家公安委員会の下）",
      },
      {
        name: "消防庁",
        nameEn: "Fire and Disaster Management Agency",
        url: "https://www.fdma.go.jp/",
        description: "消防・防災行政、救急医療、危機管理。（総務省外局）",
      },
      {
        name: "気象庁",
        nameEn: "Japan Meteorological Agency",
        url: "https://www.jma.go.jp/",
        description: "天気予報、地震・津波情報、火山情報、気候データ。（国土交通省外局）",
      },
      {
        name: "海上保安庁",
        nameEn: "Japan Coast Guard",
        url: "https://www.kaiho.mlit.go.jp/",
        description: "海上の安全確保、海難救助、領海警備。（国土交通省外局）",
      },
      {
        name: "資源エネルギー庁",
        nameEn: "Agency for Natural Resources and Energy",
        url: "https://www.enecho.meti.go.jp/",
        description: "エネルギー政策、電力・ガス、石油、再エネ。（経産省外局）",
      },
      {
        name: "特許庁",
        nameEn: "Japan Patent Office",
        url: "https://www.jpo.go.jp/",
        description: "特許・実用新案・意匠・商標の出願・審査。（経産省外局）",
      },
      {
        name: "中小企業庁",
        nameEn: "Small and Medium Enterprise Agency",
        url: "https://www.chusho.meti.go.jp/",
        description: "中小企業・小規模事業者支援、補助金情報。（経産省外局）",
      },
      {
        name: "観光庁",
        nameEn: "Japan Tourism Agency",
        url: "https://www.mlit.go.jp/kankocho/",
        description: "観光政策、訪日外国人統計、宿泊旅行統計。（国土交通省外局）",
      },
      {
        name: "文化庁",
        nameEn: "Agency for Cultural Affairs",
        url: "https://www.bunka.go.jp/",
        description: "文化振興、著作権制度、文化財保護。（文科省外局）",
      },
      {
        name: "スポーツ庁",
        nameEn: "Japan Sports Agency",
        url: "https://www.mext.go.jp/sports/",
        description: "スポーツ振興政策、オリンピック・パラリンピック。（文科省外局）",
      },
      {
        name: "林野庁",
        nameEn: "Forestry Agency",
        url: "https://www.rinya.maff.go.jp/",
        description: "森林・林業政策、国有林管理。（農水省外局）",
      },
      {
        name: "水産庁",
        nameEn: "Fisheries Agency",
        url: "https://www.jfa.maff.go.jp/",
        description: "水産業の振興、漁業政策、水産資源管理。（農水省外局）",
      },
      {
        name: "出入国在留管理庁",
        nameEn: "Immigration Services Agency",
        url: "https://www.moj.go.jp/isa/",
        description: "出入国管理、在留資格、外国人材受入れ。（法務省外局）",
      },
      {
        name: "原子力規制委員会",
        nameEn: "Nuclear Regulation Authority",
        url: "https://www.nra.go.jp/",
        description: "原子力施設の安全規制、原子力防災。（環境省外局）",
      },
    ],
  },
  {
    title: "独立機関",
    titleEn: "Independent Bodies",
    color: "#64748b",
    icon: "🏦",
    links: [
      {
        name: "日本銀行",
        nameEn: "Bank of Japan",
        url: "https://www.boj.or.jp/",
        description: "金融政策、物価安定、金融システムの安定。政策金利・統計データ。",
      },
      {
        name: "会計検査院",
        nameEn: "Board of Audit of Japan",
        url: "https://www.jbaudit.go.jp/",
        description: "国の収入・支出の検査。決算検査報告。",
      },
      {
        name: "人事院",
        nameEn: "National Personnel Authority",
        url: "https://www.jinji.go.jp/",
        description: "国家公務員の人事行政、給与勧告。",
      },
    ],
  },
  {
    title: "統計・データポータル",
    titleEn: "Data & Statistics Portals",
    color: "#0ea5e9",
    icon: "📊",
    links: [
      {
        name: "e-Stat",
        nameEn: "Government Statistics Portal",
        url: "https://www.e-stat.go.jp/",
        description: "政府統計の総合窓口。国勢調査、家計調査、人口動態など全統計を検索・取得。",
      },
      {
        name: "e-Gov",
        nameEn: "e-Government Portal",
        url: "https://www.e-gov.go.jp/",
        description: "電子政府の総合窓口。行政手続き、パブリックコメント、法令検索。",
      },
      {
        name: "e-Gov データポータル",
        nameEn: "Open Data Portal",
        url: "https://data.e-gov.go.jp/",
        description: "政府オープンデータ。CSV・API形式でデータ取得が可能。",
      },
      {
        name: "RESAS",
        nameEn: "Regional Economy and Society Analyzing System",
        url: "https://resas.go.jp/",
        description: "地域経済分析システム。人口動態、産業構造、観光を地図上で可視化。",
      },
      {
        name: "総務省統計局",
        nameEn: "Statistics Bureau",
        url: "https://www.stat.go.jp/",
        description: "国勢調査、消費者物価指数（CPI）、家計調査、労働力調査。",
      },
      {
        name: "政府広報オンライン",
        nameEn: "Government Public Relations",
        url: "https://www.gov-online.go.jp/",
        description: "政府の政策や制度を国民向けにわかりやすく解説。",
      },
      {
        name: "JapanGov",
        nameEn: "Japan Government Portal (English)",
        url: "https://www.japan.go.jp/",
        description: "日本政府の公式英語ポータル。政策情報を英語で発信。",
      },
    ],
  },
];

export default function GovernmentPage() {
  const totalLinks = categories.reduce((sum, c) => sum + c.links.length, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "官公庁リンク集", href: "/politics/government" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">
          Politics
        </Link>
        <span>/</span>
        <span>官公庁リンク集</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#dc2626]/10 text-[#dc2626]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21h18" />
              <path d="M5 21V7l7-4 7 4v14" />
              <path d="M9 21v-4h6v4" />
              <path d="M10 10h4" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">
              官公庁リンク集
            </h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/40">
              Government Directory
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-2xl">
          日本の省庁・官公庁の公式サイトリンク集です。記事の一次情報の確認や、統計データの取得にご活用ください。
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-2xl font-bold text-[#dc2626]">{categories.length}</div>
          <div className="text-[10px] text-foreground/50 mt-1">カテゴリ</div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-2xl font-bold text-[#3b82f6]">{totalLinks}</div>
          <div className="text-[10px] text-foreground/50 mt-1">サイト数</div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-2xl font-bold text-[#14b8a6]">11</div>
          <div className="text-[10px] text-foreground/50 mt-1">省の数</div>
        </div>
      </div>

      {/* Quick navigation */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <a
            key={cat.titleEn}
            href={`#cat-${cat.titleEn.toLowerCase().replace(/\s+/g, "-")}`}
            className="px-3 py-1.5 text-[11px] font-medium rounded-full border border-brief-border bg-brief-card hover:border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <span className="mr-1">{cat.icon}</span>
            {cat.title}
          </a>
        ))}
      </div>

      <div className="h-px bg-brief-border mb-10" />

      {/* Category sections */}
      {categories.map((cat) => (
        <section
          key={cat.titleEn}
          id={`cat-${cat.titleEn.toLowerCase().replace(/\s+/g, "-")}`}
          className="mb-12 scroll-mt-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">{cat.icon}</span>
            <div>
              <h2 className="font-serif text-lg font-bold">{cat.title}</h2>
              <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/35">
                {cat.titleEn}
              </span>
            </div>
            <div className="flex-1 h-px bg-brief-border" />
            <span className="text-[10px] text-foreground/40 tabular-nums">
              {cat.links.length} sites
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cat.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl border border-brief-border hover:border-foreground/20 hover:shadow-sm bg-brief-card transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3
                        className="text-sm font-bold group-hover:transition-colors"
                        style={{ color: cat.color }}
                      >
                        {link.name}
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-foreground/25 flex-shrink-0"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                    <span className="text-[9px] tracking-[1px] uppercase text-foreground/35">
                      {link.nameEn}
                    </span>
                  </div>
                </div>
                {link.description && (
                  <p className="mt-2 text-[11px] text-foreground/50 leading-relaxed line-clamp-2">
                    {link.description}
                  </p>
                )}
                <div className="mt-2 text-[9px] text-foreground/30 truncate">
                  {link.url}
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* Note */}
      <div className="mt-4 p-5 rounded-xl border border-dashed border-brief-border">
        <h3 className="text-sm font-medium mb-2 text-foreground/70">ご利用にあたって</h3>
        <p className="text-[11px] text-foreground/45 leading-relaxed">
          掲載URLは各省庁の公式サイト（.go.jpドメイン）です。日本銀行のみ.or.jpドメインとなっています。
          省庁再編等によりURLが変更される場合があります。最新の一覧は
          <a
            href="https://www.gov-online.go.jp/governmentlinks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3b82f6] hover:underline mx-0.5"
          >
            政府広報オンライン 官公庁サイト一覧
          </a>
          でもご確認いただけます。
        </p>
      </div>
    </div>
  );
}
