import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { T } from "@/components/T";

const DESCRIPTION =
  "The Briefは、日本の政治・経済・業界動向・テクノロジーを独立した視点で伝える日本語メディアです。編集方針、コンテンツ作成プロセス、AIツールの活用方針についてご説明します。";
const DESCRIPTION_EN =
  "The Brief is an independent Japanese-language media covering politics, economy, industry, and technology. Learn about our editorial standards, content process, and AI usage policy.";

export const metadata: Metadata = {
  title: "About — 編集方針・運営について",
  description: DESCRIPTION,
  alternates: { canonical: "https://thebrief.info/about" },
  openGraph: {
    title: "About The Brief — 編集方針・運営について",
    description: DESCRIPTION,
    url: "https://thebrief.info/about",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About The Brief — 編集方針・運営について",
    description: DESCRIPTION,
  },
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <Logo />
      </div>

      <h1 className="font-serif text-3xl font-bold mb-2">
        <T ja="About The Brief" en="About The Brief" />
      </h1>
      <p className="text-xs text-foreground/45 tracking-wider uppercase mb-10">
        <T ja="編集方針・運営について" en="Editorial Standards & Operations" />
      </p>

      <div className="space-y-12 text-sm leading-relaxed text-foreground/70">

        {/* Mission */}
        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">
            <T ja="ミッション" en="Our Mission" />
          </h2>
          <p className="mb-3">
            <T
              ja="The Briefは、日本の政治・経済・金融・業界動向・テクノロジーを、偏りなく・わかりやすく・深く伝えることを目的とした独立メディアです。2025年後半に開設し、国内外の読者に向けて日本語と英語で情報を提供しています。"
              en="The Brief is an independent media outlet covering Japanese politics, economy, finance, industry, and technology — objectively, accessibly, and in depth. Launched in late 2025, we publish in both Japanese and English for domestic and international readers."
            />
          </p>
          <p>
            <T
              ja="忙しい読者が短時間で本質を掴めるよう、重要な論点を整理し、背景・文脈・データを組み合わせた記事を提供しています。速報よりも「理解」を重視する編集方針を採っています。"
              en="We organize key arguments and combine background, context, and data so busy readers can grasp the essentials quickly. Our editorial approach prioritizes understanding over breaking news."
            />
          </p>
        </section>

        {/* Three pillars */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-brief-card rounded-xl border border-brief-border">
              <h3 className="font-serif text-base font-bold mb-2">Concise</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                <T
                  ja="要点を押さえた記事で、忙しい朝でも最新動向をキャッチアップ。"
                  en="Key-point-focused articles that let you catch up on the latest even on a busy morning."
                />
              </p>
            </div>
            <div className="p-5 bg-brief-card rounded-xl border border-brief-border">
              <h3 className="font-serif text-base font-bold mb-2">Insightful</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                <T
                  ja="表面的なニュースではなく、背景・文脈・データを含めた深い洞察を提供。"
                  en="Not surface-level news, but deep insights with background, context, and data."
                />
              </p>
            </div>
            <div className="p-5 bg-brief-card rounded-xl border border-brief-border">
              <h3 className="font-serif text-base font-bold mb-2">Independent</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                <T
                  ja="特定の政党・企業・広告主の影響を受けない独立した視点からの報道。"
                  en="Reporting from an independent perspective, free from the influence of political parties, corporations, or advertisers."
                />
              </p>
            </div>
          </div>
        </section>

        {/* Editorial process */}
        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">
            <T ja="編集プロセス" en="Editorial Process" />
          </h2>
          <p className="mb-3">
            <T
              ja="各記事は、複数の一次情報源（官公庁発表、国会議事録、企業IR資料、国内外メディア報道など）をもとに作成します。情報の正確性を最優先とし、掲載前に事実関係・数値・引用元を確認するプロセスを経ています。"
              en="Each article is based on multiple primary sources — government announcements, Diet records, corporate IR materials, and domestic and international media reports. Accuracy is our top priority; facts, figures, and citations are verified before publication."
            />
          </p>
          <p>
            <T
              ja="政治・経済・業界分析の記事には、可能な限り出典リンクまたは参照情報を付記しています。掲載後に誤りが判明した場合は、速やかに訂正を行い、記事末尾に訂正履歴を記載します。"
              en="Political, economic, and industry analysis articles include source links or references wherever possible. If an error is found after publication, we correct it promptly and note the correction history at the end of the article."
            />
          </p>
        </section>

        {/* AI disclosure */}
        <section>
          <div className="p-5 border border-brief-border rounded-xl bg-brief-card">
            <h2 className="font-serif text-base font-bold text-foreground mb-3">
              <T ja="AIツールの活用について（開示）" en="AI Tool Usage Disclosure" />
            </h2>
            <p className="mb-3">
              <T
                ja="The Briefは、コンテンツの調査・構成・執筆の一部にAI言語モデルを活用しています。AIは情報の収集・整理・初稿生成を補助しますが、掲載する内容の選択・事実確認・編集判断はすべて編集担当者が行っています。"
                en="The Brief uses AI language models to assist with research, structuring, and drafting of content. AI helps gather and organize information and generate initial drafts, but all decisions about what to publish, fact-checking, and editorial judgment are made by our editors."
              />
            </p>
            <p className="mb-3">
              <T
                ja="AIが生成した記述であっても、一次情報源に基づかない内容は掲載しません。数値・固有名詞・政策内容等については、原典資料との照合を必ず行っています。"
                en="We do not publish AI-generated content that is not grounded in primary sources. Figures, proper nouns, and policy details are always cross-checked against source documents."
              />
            </p>
            <p className="text-xs text-foreground/50">
              <T
                ja="本方針はGoogle等の検索エンジンのガイドラインおよびAdSenseポリシーに準拠するものです。"
                en="This policy is in compliance with the guidelines of search engines such as Google and with AdSense policies."
              />
            </p>
          </div>
        </section>

        {/* Independence & advertising */}
        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">
            <T ja="独立性と広告" en="Independence & Advertising" />
          </h2>
          <p className="mb-3">
            <T
              ja="The Briefは特定の政党・企業・団体から資金援助を受けておらず、編集判断はすべて独立して行っています。広告収入（Google AdSense）によって運営費の一部を賄っていますが、広告主が記事内容に影響を与えることはありません。"
              en="The Brief receives no funding from political parties, corporations, or organizations, and all editorial decisions are made independently. We partially fund operations through advertising revenue (Google AdSense), but advertisers have no influence over article content."
            />
          </p>
          <p>
            <T
              ja="特定の商品・サービス・投資商品への勧誘や、政治的キャンペーンの支持を目的とした記事は掲載しません。"
              en="We do not publish articles intended to solicit purchases of specific products, services, or investment instruments, or to endorse political campaigns."
            />
          </p>
        </section>

        {/* Coverage */}
        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">
            <T ja="取り扱いテーマ" en="Coverage Areas" />
          </h2>
          <ul className="space-y-2.5">
            <li>
              <span className="text-brief-red font-semibold">Politics</span>
              {" — "}
              <T
                ja="国内政治、国会審議、内閣・政策、選挙動向"
                en="Domestic politics, Diet deliberations, cabinet and policy, election trends"
              />
            </li>
            <li>
              <span className="text-brief-red font-semibold">Economy</span>
              {" — "}
              <T
                ja="マクロ経済、金融市場、日銀政策、財政"
                en="Macroeconomics, financial markets, BOJ policy, public finance"
              />
            </li>
            <li>
              <span className="text-brief-red font-semibold">Industry</span>
              {" — "}
              <T
                ja="AI・半導体・自動車・製薬・エネルギー・建設など業界別の深掘り分析"
                en="In-depth analysis by sector: AI, semiconductors, automotive, pharma, energy, construction, and more"
              />
            </li>
            <li>
              <span className="text-brief-red font-semibold">Economy Articles</span>
              {" — "}
              <T
                ja="国際経済、地政学リスク、為替・資源市場"
                en="International economy, geopolitical risk, FX and commodity markets"
              />
            </li>
            <li>
              <span className="text-brief-red font-semibold">Column</span>
              {" — "}
              <T
                ja="社会・生活・税制・教育に関する解説コラム"
                en="Explanatory columns on society, lifestyle, taxation, and education"
              />
            </li>
            <li>
              <span className="text-brief-red font-semibold">University</span>
              {" — "}
              <T
                ja="大学の学問領域・研究分野の体系的な解説"
                en="Systematic explanations of academic fields and research areas in universities"
              />
            </li>
          </ul>
        </section>

        {/* Corrections */}
        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">
            <T ja="訂正・お問い合わせ" en="Corrections & Contact" />
          </h2>
          <p className="mb-3">
            <T
              ja="記事の誤り・不正確な情報をご発見の場合は、お問い合わせフォームからご連絡ください。内容を確認のうえ、必要に応じて速やかに訂正します。"
              en="If you find an error or inaccurate information in an article, please contact us via the inquiry form. We will review it and correct it promptly if necessary."
            />
          </p>
          <p>
            <T ja="取材依頼・掲載提案・広告に関するお問い合わせも" en="Inquiries about press requests, content proposals, or advertising are also welcome via the " />
            <Link href="/contact" className="text-brief-red hover:underline">
              <T ja="お問い合わせページ" en="contact page" />
            </Link>
            <T ja="よりお送りください。" en="." />
          </p>
        </section>

      </div>
    </div>
  );
}
