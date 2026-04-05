import type { Article } from "@/lib/articles";

function CategoryBadge({ label, subLabel }: { label: string; subLabel?: string }) {
  return (
    <span className="category-pill text-brief-red font-medium">
      {label}{subLabel && <span className="text-foreground/30"> / {subLabel}</span>}
    </span>
  );
}

export function ArticleCardFeatured({ article }: { article: Article }) {
  return (
    <article className="group cursor-pointer">
      <div className="aspect-[16/9] bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-xl mb-4 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-foreground/20 text-sm">
          {article.categoryLabel}
        </div>
      </div>
      <CategoryBadge label={article.categoryLabel} subLabel={article.industryLabel} />
      <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold leading-tight group-hover:text-brief-red transition-colors">
        {article.title}
      </h2>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed line-clamp-2">
        {article.excerpt}
      </p>
      <div className="mt-3 flex items-center gap-3 text-xs text-foreground/35">
        <span>{article.author}</span>
        <span>·</span>
        <time>{article.date}</time>
        <span>·</span>
        <span>{article.readTime}</span>
      </div>
    </article>
  );
}

export function ArticleCardCompact({ article }: { article: Article }) {
  return (
    <article className="group cursor-pointer py-5 border-b border-brief-border last:border-0">
      <CategoryBadge label={article.categoryLabel} subLabel={article.industryLabel} />
      <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug group-hover:text-brief-red transition-colors">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-foreground/45 leading-relaxed line-clamp-2">
        {article.excerpt}
      </p>
      <div className="mt-2 flex items-center gap-3 text-xs text-foreground/30">
        <span>{article.author}</span>
        <span>·</span>
        <time>{article.date}</time>
        <span>·</span>
        <span>{article.readTime}</span>
      </div>
    </article>
  );
}

export function ArticleCardHorizontal({ article }: { article: Article }) {
  return (
    <article className="group cursor-pointer flex gap-4 py-4 border-b border-brief-border last:border-0">
      <div className="flex-1">
        <CategoryBadge label={article.categoryLabel} subLabel={article.industryLabel} />
        <h3 className="mt-1 font-serif text-base font-bold leading-snug group-hover:text-brief-red transition-colors">
          {article.title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-xs text-foreground/30">
          <time>{article.date}</time>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
      <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-lg" />
    </article>
  );
}
