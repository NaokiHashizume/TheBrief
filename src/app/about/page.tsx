import type { Metadata } from "next";
import { Logo } from "@/components/Logo";

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

      <h1 className="font-serif text-3xl font-bold mb-6">About The Brief</h1>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/70">
        <p>
          The Briefは、日本の政治・経済・金融から業界動向、テクノロジー・AI、ライフスタイルまで、幅広いニュースとオピニオンをシンプルに届ける総合メディアです。
        </p>

        <p>
          忙しいビジネスパーソンや、日本の最新動向に関心を持つ読者のために、本当に重要なニュースを厳選し、簡潔でわかりやすい形でお届けします。
        </p>

        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-foreground/[0.03] rounded-xl border border-brief-border dark:border-white/5">
              <h3 className="font-serif text-base font-bold mb-2">Concise</h3>
              <p className="text-xs text-foreground/50 leading-relaxed">
                5分で読める。要点を押さえた簡潔な記事で、忙しい朝でも最新情報をキャッチアップ。
              </p>
            </div>
            <div className="p-6 bg-foreground/[0.03] rounded-xl border border-brief-border dark:border-white/5">
              <h3 className="font-serif text-base font-bold mb-2">Insightful</h3>
              <p className="text-xs text-foreground/50 leading-relaxed">
                表面的なニュースではなく、背景や文脈を含めた深い洞察を提供。
              </p>
            </div>
            <div className="p-6 bg-foreground/[0.03] rounded-xl border border-brief-border dark:border-white/5">
              <h3 className="font-serif text-base font-bold mb-2">Independent</h3>
              <p className="text-xs text-foreground/50 leading-relaxed">
                特定の政党や企業に偏らない、独立した視点からの報道とオピニオン。
              </p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">Coverage</h2>
          <ul className="space-y-2">
            <li><span className="text-brief-red font-medium">Politics</span> — 国内政治、政策、選挙</li>
            <li><span className="text-brief-red font-medium">Economy</span> — マクロ経済、金融市場、日銀政策</li>
            <li><span className="text-brief-red font-medium">Industry</span> — AI、半導体、自動車、製薬、エネルギーなど業界別に深掘り</li>
            <li><span className="text-brief-red font-medium">Lifestyle</span> — カルチャー、トレンド、ウェルネス</li>
            <li><span className="text-brief-red font-medium">Opinion</span> — 論説、ゲストコラム、分析</li>
            <li><span className="text-brief-red font-medium">University</span> — 大学・教育・研究の最前線</li>
          </ul>
        </section>

        <section className="pt-4">
          <h2 className="font-serif text-lg font-bold text-foreground mb-3">Contact</h2>
          <p>
            ご質問やフィードバックは
            <a href="/contact" className="text-brief-red hover:underline">お問い合わせページ</a>
            からお送りください。
          </p>
        </section>
      </div>
    </div>
  );
}
