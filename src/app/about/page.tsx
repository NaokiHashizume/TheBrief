import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "About",
  description: "The Briefは、日本の政治・経済・金融から業界動向、テクノロジー・AI、ライフスタイルまで、幅広いニュースとオピニオンをシンプルに届ける総合メディアです。",
  alternates: { canonical: "https://thebrief.info/about" },
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <Logo />
      </div>

      <h1 className="font-serif text-3xl font-bold mb-6"><T ja="About The Brief" en="About The Brief" /></h1>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/70">
        <p>
          <T ja="The Briefは、日本の政治・経済・金融から業界動向、テクノロジー・AI、ライフスタイルまで、幅広いニュースとオピニオンをシンプルに届ける総合メディアです。" en="The Brief is a comprehensive media platform that delivers a wide range of news and opinions — from Japanese politics, economy, and finance to industry trends, technology/AI, and lifestyle — in a simple, accessible format." />
        </p>

        <p>
          <T ja="忙しいビジネスパーソンや、日本の最新動向に関心を持つ読者のために、本当に重要なニュースを厳選し、簡潔でわかりやすい形でお届けします。" en="For busy professionals and readers interested in the latest developments in Japan, we curate the most important news and deliver it in a concise, easy-to-understand format." />
        </p>

        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-brief-card rounded-xl border border-brief-border">
              <h3 className="font-serif text-base font-bold mb-2">Concise</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                <T ja="5分で読める。要点を押さえた簡潔な記事で、忙しい朝でも最新情報をキャッチアップ。" en="Read in 5 minutes. Concise articles that hit the key points, so you can catch up on the latest even on a busy morning." />
              </p>
            </div>
            <div className="p-6 bg-brief-card rounded-xl border border-brief-border">
              <h3 className="font-serif text-base font-bold mb-2">Insightful</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                <T ja="表面的なニュースではなく、背景や文脈を含めた深い洞察を提供。" en="Not surface-level news, but deep insights that include background and context." />
              </p>
            </div>
            <div className="p-6 bg-brief-card rounded-xl border border-brief-border">
              <h3 className="font-serif text-base font-bold mb-2">Independent</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                <T ja="特定の政党や企業に偏らない、独立した視点からの報道とオピニオン。" en="Reporting and opinion from an independent perspective, not biased toward any political party or corporation." />
              </p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="Coverage" en="Coverage" /></h2>
          <ul className="space-y-2">
            <li><span className="text-brief-red font-medium">Politics</span> — <T ja="国内政治、政策、選挙" en="Domestic politics, policy, elections" /></li>
            <li><span className="text-brief-red font-medium">Economy</span> — <T ja="マクロ経済、金融市場、日銀政策" en="Macroeconomics, financial markets, BOJ policy" /></li>
            <li><span className="text-brief-red font-medium">Industry</span> — <T ja="AI、半導体、自動車、製薬、エネルギーなど業界別に深掘り" en="Deep dives by sector: AI, semiconductors, automotive, pharma, energy, and more" /></li>
            <li><span className="text-brief-red font-medium">Lifestyle</span> — <T ja="カルチャー、トレンド、ウェルネス" en="Culture, trends, wellness" /></li>
            <li><span className="text-brief-red font-medium">Opinion</span> — <T ja="論説、ゲストコラム、分析" en="Editorials, guest columns, analysis" /></li>
            <li><span className="text-brief-red font-medium">University</span> — <T ja="大学・教育・研究の最前線" en="The forefront of universities, education, and research" /></li>
          </ul>
        </section>

        <section className="pt-4">
          <h2 className="font-serif text-lg font-bold text-foreground mb-3"><T ja="Contact" en="Contact" /></h2>
          <p>
            <T ja="ご質問やフィードバックは" en="For questions or feedback, please visit our " />
            <Link href="/contact" className="text-brief-red hover:underline"><T ja="お問い合わせページ" en="contact page" /></Link>
            <T ja="からお送りください。" en="." />
          </p>
        </section>
      </div>
    </div>
  );
}
