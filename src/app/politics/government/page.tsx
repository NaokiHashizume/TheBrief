import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";

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
  descriptionEn?: string;
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
        nameEn: "Kantei (Prime Minister's Office)",
        url: "https://www.kantei.go.jp/",
        description: "内閣総理大臣の公式サイト。政策情報、記者会見、施政方針演説など。",
        descriptionEn:
          "Official site of the Prime Minister. Policy information, press conferences, and policy speeches.",
      },
      {
        name: "内閣官房",
        nameEn: "Cabinet Secretariat",
        url: "https://www.cas.go.jp/",
        description: "内閣の重要政策の企画・総合調整。行政機構図、重要政策会議の情報。",
        descriptionEn:
          "Planning and coordination of key cabinet policies. Government org charts and key policy council information.",
      },
      {
        name: "内閣法制局",
        nameEn: "Cabinet Legislation Bureau",
        url: "https://www.clb.go.jp/",
        description: "法律案の審査、法制についての意見。憲法解釈に関する見解。",
        descriptionEn:
          "Review of legislative bills, legal opinions, and views on constitutional interpretation.",
      },
      {
        name: "内閣府",
        nameEn: "Cabinet Office",
        url: "https://www.cao.go.jp/",
        description: "経済財政政策、規制改革、防災、男女共同参画、GDP統計など。",
        descriptionEn:
          "Economic and fiscal policy, regulatory reform, disaster prevention, gender equality, and GDP statistics.",
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
        descriptionEn:
          "Local government, telecommunications, statistics, elections, and administrative evaluation.",
      },
      {
        name: "法務省",
        nameEn: "Ministry of Justice",
        url: "https://www.moj.go.jp/",
        description: "司法制度、民事・刑事法制、人権擁護、出入国管理。",
        descriptionEn:
          "Judicial system, civil and criminal law, human rights protection, and immigration control.",
      },
      {
        name: "外務省",
        nameEn: "Ministry of Foreign Affairs",
        url: "https://www.mofa.go.jp/",
        description: "外交政策、国際協力、領事サービス、各国情勢。",
        descriptionEn:
          "Foreign policy, international cooperation, consular services, and country information.",
      },
      {
        name: "財務省",
        nameEn: "Ministry of Finance",
        url: "https://www.mof.go.jp/",
        description: "予算・税制・国債・関税・財政投融資。税収統計、財政資料。",
        descriptionEn:
          "Budget, taxation, government bonds, tariffs, and fiscal investment. Tax revenue and fiscal data.",
      },
      {
        name: "文部科学省",
        nameEn: "MEXT (Ministry of Education, Culture, Sports, Science and Technology)",
        url: "https://www.mext.go.jp/",
        description: "教育政策、科学技術・学術政策、スポーツ、文化。",
        descriptionEn:
          "Education policy, science and technology, academic policy, sports, and culture.",
      },
      {
        name: "厚生労働省",
        nameEn: "MHLW (Ministry of Health, Labour and Welfare)",
        url: "https://www.mhlw.go.jp/",
        description: "医療・福祉・年金・雇用・労働。社会保障統計、毎月勤労統計。",
        descriptionEn:
          "Healthcare, welfare, pensions, employment, and labor. Social security and monthly labor statistics.",
      },
      {
        name: "農林水産省",
        nameEn: "MAFF (Ministry of Agriculture, Forestry and Fisheries)",
        url: "https://www.maff.go.jp/",
        description: "農業・林業・水産業の振興、食料安全保障、食品安全。",
        descriptionEn:
          "Promotion of agriculture, forestry, and fisheries, food security, and food safety.",
      },
      {
        name: "経済産業省",
        nameEn: "METI (Ministry of Economy, Trade and Industry)",
        url: "https://www.meti.go.jp/",
        description: "経済・産業政策、通商政策、エネルギー政策、中小企業支援。",
        descriptionEn:
          "Economic and industrial policy, trade policy, energy policy, and SME support.",
      },
      {
        name: "国土交通省",
        nameEn: "MLIT (Ministry of Land, Infrastructure, Transport and Tourism)",
        url: "https://www.mlit.go.jp/",
        description: "国土計画、都市・住宅政策、交通・物流、建設業、気象。",
        descriptionEn:
          "National land planning, urban and housing policy, transport and logistics, construction, and weather.",
      },
      {
        name: "環境省",
        nameEn: "Ministry of the Environment",
        url: "https://www.env.go.jp/",
        description: "環境保全、地球温暖化対策、廃棄物・リサイクル、自然保護。",
        descriptionEn:
          "Environmental conservation, climate change measures, waste and recycling, and nature protection.",
      },
      {
        name: "防衛省",
        nameEn: "Ministry of Defense",
        url: "https://www.mod.go.jp/",
        description: "防衛政策、自衛隊の運用、安全保障、防衛白書。",
        descriptionEn:
          "Defense policy, Self-Defense Forces operations, national security, and the Defense White Paper.",
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
        descriptionEn: "Enforcement of antitrust law and competition policy.",
      },
      {
        name: "金融庁",
        nameEn: "Financial Services Agency",
        url: "https://www.fsa.go.jp/",
        description: "金融制度の企画・立案、金融機関の検査・監督。NISA・投資関連。",
        descriptionEn:
          "Planning of the financial system, inspection and supervision of financial institutions. NISA and investment information.",
      },
      {
        name: "消費者庁",
        nameEn: "Consumer Affairs Agency",
        url: "https://www.caa.go.jp/",
        description: "消費者行政の司令塔。製品安全、食品表示、景品表示法。",
        descriptionEn:
          "Lead agency for consumer affairs. Product safety, food labeling, and the Premiums and Representations Act.",
      },
      {
        name: "こども家庭庁",
        nameEn: "Children and Families Agency",
        url: "https://www.cfa.go.jp/",
        description: "2023年新設。子ども政策、少子化対策、児童福祉。",
        descriptionEn:
          "Established in 2023. Child policy, declining birthrate measures, and child welfare.",
      },
      {
        name: "個人情報保護委員会",
        nameEn: "Personal Information Protection Commission",
        url: "https://www.ppc.go.jp/",
        description: "個人情報保護法の運用、マイナンバー制度の監視・監督。",
        descriptionEn:
          "Enforcement of the Personal Information Protection Act and oversight of the My Number system.",
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
        descriptionEn:
          "Established in 2021. Government DX, My Number Card, and Government Cloud.",
      },
      {
        name: "復興庁",
        nameEn: "Reconstruction Agency",
        url: "https://www.reconstruction.go.jp/",
        description: "東日本大震災からの復興施策の統括・推進。",
        descriptionEn:
          "Coordination and promotion of recovery measures from the Great East Japan Earthquake.",
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
        descriptionEn:
          "Enforcement of tax administration. Tax returns, tax explanations, and e-Tax. (Under Ministry of Finance)",
      },
      {
        name: "警察庁",
        nameEn: "National Police Agency",
        url: "https://www.npa.go.jp/",
        description: "治安維持、犯罪統計、サイバーセキュリティ。（国家公安委員会の下）",
        descriptionEn:
          "Public safety, crime statistics, and cybersecurity. (Under the National Public Safety Commission)",
      },
      {
        name: "消防庁",
        nameEn: "Fire and Disaster Management Agency",
        url: "https://www.fdma.go.jp/",
        description: "消防・防災行政、救急医療、危機管理。（総務省外局）",
        descriptionEn:
          "Firefighting and disaster management, emergency medical services, and crisis management. (Under MIC)",
      },
      {
        name: "気象庁",
        nameEn: "Japan Meteorological Agency",
        url: "https://www.jma.go.jp/",
        description: "天気予報、地震・津波情報、火山情報、気候データ。（国土交通省外局）",
        descriptionEn:
          "Weather forecasts, earthquake and tsunami information, volcano information, and climate data. (Under MLIT)",
      },
      {
        name: "海上保安庁",
        nameEn: "Japan Coast Guard",
        url: "https://www.kaiho.mlit.go.jp/",
        description: "海上の安全確保、海難救助、領海警備。（国土交通省外局）",
        descriptionEn:
          "Maritime safety, sea rescue, and territorial waters patrol. (Under MLIT)",
      },
      {
        name: "資源エネルギー庁",
        nameEn: "Agency for Natural Resources and Energy",
        url: "https://www.enecho.meti.go.jp/",
        description: "エネルギー政策、電力・ガス、石油、再エネ。（経産省外局）",
        descriptionEn:
          "Energy policy, electricity and gas, oil, and renewables. (Under METI)",
      },
      {
        name: "特許庁",
        nameEn: "Japan Patent Office",
        url: "https://www.jpo.go.jp/",
        description: "特許・実用新案・意匠・商標の出願・審査。（経産省外局）",
        descriptionEn:
          "Filing and examination of patents, utility models, designs, and trademarks. (Under METI)",
      },
      {
        name: "中小企業庁",
        nameEn: "Small and Medium Enterprise Agency",
        url: "https://www.chusho.meti.go.jp/",
        description: "中小企業・小規模事業者支援、補助金情報。（経産省外局）",
        descriptionEn:
          "Support for SMEs and small businesses, subsidy information. (Under METI)",
      },
      {
        name: "観光庁",
        nameEn: "Japan Tourism Agency",
        url: "https://www.mlit.go.jp/kankocho/",
        description: "観光政策、訪日外国人統計、宿泊旅行統計。（国土交通省外局）",
        descriptionEn:
          "Tourism policy, inbound visitor statistics, and accommodation travel statistics. (Under MLIT)",
      },
      {
        name: "文化庁",
        nameEn: "Agency for Cultural Affairs",
        url: "https://www.bunka.go.jp/",
        description: "文化振興、著作権制度、文化財保護。（文科省外局）",
        descriptionEn:
          "Promotion of culture, copyright system, and protection of cultural properties. (Under MEXT)",
      },
      {
        name: "スポーツ庁",
        nameEn: "Japan Sports Agency",
        url: "https://www.mext.go.jp/sports/",
        description: "スポーツ振興政策、オリンピック・パラリンピック。（文科省外局）",
        descriptionEn:
          "Sports promotion policy, Olympics and Paralympics. (Under MEXT)",
      },
      {
        name: "林野庁",
        nameEn: "Forestry Agency",
        url: "https://www.rinya.maff.go.jp/",
        description: "森林・林業政策、国有林管理。（農水省外局）",
        descriptionEn:
          "Forest and forestry policy, and management of national forests. (Under MAFF)",
      },
      {
        name: "水産庁",
        nameEn: "Fisheries Agency",
        url: "https://www.jfa.maff.go.jp/",
        description: "水産業の振興、漁業政策、水産資源管理。（農水省外局）",
        descriptionEn:
          "Promotion of fisheries, fishery policy, and fishery resource management. (Under MAFF)",
      },
      {
        name: "出入国在留管理庁",
        nameEn: "Immigration Services Agency",
        url: "https://www.moj.go.jp/isa/",
        description: "出入国管理、在留資格、外国人材受入れ。（法務省外局）",
        descriptionEn:
          "Immigration control, residency status, and acceptance of foreign workers. (Under Ministry of Justice)",
      },
      {
        name: "原子力規制委員会",
        nameEn: "Nuclear Regulation Authority",
        url: "https://www.nra.go.jp/",
        description: "原子力施設の安全規制、原子力防災。（環境省外局）",
        descriptionEn:
          "Safety regulation of nuclear facilities and nuclear disaster prevention. (Under Ministry of the Environment)",
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
        descriptionEn:
          "Monetary policy, price stability, and financial system stability. Policy rates and statistical data.",
      },
      {
        name: "会計検査院",
        nameEn: "Board of Audit of Japan",
        url: "https://www.jbaudit.go.jp/",
        description: "国の収入・支出の検査。決算検査報告。",
        descriptionEn:
          "Audit of national revenues and expenditures. Audit reports on final accounts.",
      },
      {
        name: "人事院",
        nameEn: "National Personnel Authority",
        url: "https://www.jinji.go.jp/",
        description: "国家公務員の人事行政、給与勧告。",
        descriptionEn:
          "Personnel administration for national public servants and salary recommendations.",
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
        descriptionEn:
          "One-stop portal for government statistics. Search and download the census, household surveys, vital statistics, and more.",
      },
      {
        name: "e-Gov",
        nameEn: "e-Government Portal",
        url: "https://www.e-gov.go.jp/",
        description: "電子政府の総合窓口。行政手続き、パブリックコメント、法令検索。",
        descriptionEn:
          "Comprehensive e-government portal. Administrative procedures, public comments, and law search.",
      },
      {
        name: "e-Gov データポータル",
        nameEn: "Open Data Portal",
        url: "https://data.e-gov.go.jp/",
        description: "政府オープンデータ。CSV・API形式でデータ取得が可能。",
        descriptionEn:
          "Government open data. Downloadable in CSV and API formats.",
      },
      {
        name: "RESAS",
        nameEn: "Regional Economy and Society Analyzing System",
        url: "https://resas.go.jp/",
        description: "地域経済分析システム。人口動態、産業構造、観光を地図上で可視化。",
        descriptionEn:
          "Regional economy analysis system. Visualize demographics, industry structure, and tourism on maps.",
      },
      {
        name: "総務省統計局",
        nameEn: "Statistics Bureau",
        url: "https://www.stat.go.jp/",
        description: "国勢調査、消費者物価指数（CPI）、家計調査、労働力調査。",
        descriptionEn:
          "Census, Consumer Price Index (CPI), household survey, and labor force survey.",
      },
      {
        name: "政府広報オンライン",
        nameEn: "Government Public Relations",
        url: "https://www.gov-online.go.jp/",
        description: "政府の政策や制度を国民向けにわかりやすく解説。",
        descriptionEn:
          "Clear explanations of government policies and programs for citizens.",
      },
      {
        name: "JapanGov",
        nameEn: "Japan Government Portal (English)",
        url: "https://www.japan.go.jp/",
        description: "日本政府の公式英語ポータル。政策情報を英語で発信。",
        descriptionEn:
          "Official English portal of the Japanese government. Policy information in English.",
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
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">
          Politics
        </Link>
        <span>/</span>
        <span>
          <T ja="官公庁リンク集" en="Government Directory" />
        </span>
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
              <T ja="官公庁リンク集" en="Government Directory" />
            </h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/40">
              <T ja="Government Directory" en="Official Ministry & Agency Links" />
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-2xl">
          <T
            ja="日本の省庁・官公庁の公式サイトリンク集です。記事の一次情報の確認や、統計データの取得にご活用ください。"
            en="A directory of official websites for Japan's ministries and government agencies. Use it to verify primary sources for articles and to access statistical data."
          />
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-2xl font-bold text-[#dc2626]">{categories.length}</div>
          <div className="text-[10px] text-foreground/50 mt-1">
            <T ja="カテゴリ" en="Categories" />
          </div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-2xl font-bold text-[#3b82f6]">{totalLinks}</div>
          <div className="text-[10px] text-foreground/50 mt-1">
            <T ja="サイト数" en="Sites" />
          </div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-2xl font-bold text-[#14b8a6]">11</div>
          <div className="text-[10px] text-foreground/50 mt-1">
            <T ja="省の数" en="Ministries" />
          </div>
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
            <T ja={cat.title} en={cat.titleEn} />
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
              <h2 className="font-serif text-lg font-bold">
                <T ja={cat.title} en={cat.titleEn} />
              </h2>
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
                        <T ja={link.name} en={link.nameEn} />
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
                    <span className="text-[10px] tracking-[1px] uppercase text-foreground/35">
                      {link.nameEn}
                    </span>
                  </div>
                </div>
                {link.description && (
                  <p className="mt-2 text-[11px] text-foreground/50 leading-relaxed line-clamp-2">
                    <T ja={link.description} en={link.descriptionEn ?? link.description} />
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
        <h3 className="text-sm font-medium mb-2 text-foreground/70">
          <T ja="ご利用にあたって" en="Notes on use" />
        </h3>
        <p className="text-[11px] text-foreground/45 leading-relaxed">
          <T
            ja="掲載URLは各省庁の公式サイト（.go.jpドメイン）です。日本銀行のみ.or.jpドメインとなっています。省庁再編等によりURLが変更される場合があります。最新の一覧は"
            en="The URLs listed are the official websites of each ministry (.go.jp domain). Only the Bank of Japan uses the .or.jp domain. URLs may change due to ministry reorganizations. You can also check the latest list at "
          />
          <a
            href="https://www.gov-online.go.jp/governmentlinks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3b82f6] hover:underline mx-0.5"
          >
            <T
              ja="政府広報オンライン 官公庁サイト一覧"
              en="Government PR Online - Ministry & Agency Site List"
            />
          </a>
          <T ja="でもご確認いただけます。" en="." />
        </p>
      </div>
    </div>
  );
}
