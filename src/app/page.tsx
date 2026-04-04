import { sampleArticles } from "@/lib/articles";
import {
  ArticleCardFeatured,
  ArticleCardCompact,
  ArticleCardHorizontal,
} from "@/components/ArticleCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { AdBannerPlaceholder } from "@/components/AdSense";
import { WebsiteJsonLd } from "@/components/JsonLd";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-[11px] tracking-[3px] uppercase text-foreground/40 font-medium whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-brief-border dark:bg-white/10" />
    </div>
  );
}

export default function Home() {
  const featured = sampleArticles.filter((a) => a.featured);
  const latest = sampleArticles.filter((a) => !a.featured).slice(0, 4);
  const trending = sampleArticles.slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <WebsiteJsonLd />
      {/* Date bar */}
      <div className="text-center mb-8">
        <p className="text-xs text-foreground/30 tracking-[2px] uppercase">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Hero: Featured articles */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {featured.map((article) => (
          <ArticleCardFeatured key={article.id} article={article} />
        ))}
      </section>

      {/* Ad: Top banner */}
      <AdBannerPlaceholder className="mb-8" />

      <div className="w-full h-px bg-brief-border dark:bg-white/10 mb-12" />

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Latest articles - 2 cols */}
        <div className="lg:col-span-2">
          <SectionHeader title="Latest" />
          <div>
            {latest.map((article) => (
              <ArticleCardCompact key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Sidebar - Trending */}
        <aside>
          <SectionHeader title="Trending" />
          <div>
            {trending.map((article, i) => (
              <div key={article.id} className="flex gap-3 py-3 border-b border-brief-border dark:border-white/5 last:border-0">
                <span className="font-serif text-2xl font-bold text-brief-red/30 leading-none mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <span className="category-pill text-foreground/35">
                    {article.categoryLabel}
                  </span>
                  <h4 className="mt-1 text-sm font-medium leading-snug hover:text-brief-red transition-colors cursor-pointer">
                    {article.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-8 p-6 bg-foreground/[0.03] rounded-xl border border-brief-border dark:border-white/5">
            <h3 className="font-serif text-lg font-bold">Morning Brief</h3>
            <p className="mt-2 text-sm text-foreground/50 leading-relaxed">
              毎朝5分で読める厳選ニュース。無料で購読できます。
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </aside>
      </div>

      {/* Ad: Mid-page banner */}
      <AdBannerPlaceholder className="my-12" />

      {/* Category sections */}
      <section>
        <SectionHeader title="Economy & Markets" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleArticles
            .filter((a) => a.category === "economy")
            .map((article) => (
              <ArticleCardHorizontal key={article.id} article={article} />
            ))}
        </div>
      </section>

      <div className="my-10" />

      <section>
        <SectionHeader title="Technology & AI" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleArticles
            .filter((a) => a.category === "tech")
            .map((article) => (
              <ArticleCardHorizontal key={article.id} article={article} />
            ))}
        </div>
      </section>
    </div>
  );
}
