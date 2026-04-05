import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllStories, getEpisodeById } from "@/lib/getStories";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";

export async function generateStaticParams() {
  const stories = await getAllStories();
  const params: { slug: string; episodeId: string }[] = [];
  for (const story of stories) {
    for (const episode of story.episodes) {
      params.push({ slug: story.slug, episodeId: episode.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; episodeId: string }>;
}): Promise<Metadata> {
  const { slug, episodeId } = await params;
  const result = await getEpisodeById(slug, episodeId);
  if (!result) return { title: "Episode Not Found" };

  const { story, episode } = result;

  return {
    title: `${episode.title} — ${story.title}`,
    description: episode.summary,
    alternates: {
      canonical: `https://thebrief.info/story/${story.slug}/${episode.id}`,
    },
    openGraph: {
      title: episode.title,
      description: episode.summary,
      url: `https://thebrief.info/story/${story.slug}/${episode.id}`,
      type: "article",
      locale: "ja_JP",
      siteName: "The Brief",
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description: episode.summary,
    },
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string; episodeId: string }>;
}) {
  const { slug, episodeId } = await params;
  const result = await getEpisodeById(slug, episodeId);
  if (!result) notFound();

  const { story, episode, episodeIndex } = result;
  const prevEpisode = episodeIndex > 0 ? story.episodes[episodeIndex - 1] : null;
  const nextEpisode =
    episodeIndex < story.episodes.length - 1
      ? story.episodes[episodeIndex + 1]
      : null;
  const isLatest = episodeIndex === story.episodes.length - 1;

  // Parse markdown-like content into paragraphs and headings
  const contentBlocks = (episode.content || episode.summary)
    .split("\n\n")
    .filter((block) => block.trim());

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <ArticleJsonLd
        title={episode.title}
        description={episode.summary}
        datePublished={episode.date}
        dateModified={episode.date}
        author="The Brief"
        url={`https://thebrief.info/story/${story.slug}/${episode.id}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: story.title, href: `/story/${story.slug}` },
          { name: episode.title, href: `/story/${story.slug}/${episode.id}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-8 flex-wrap">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/story/${story.slug}`}
          className="hover:text-foreground transition-colors"
        >
          {story.title}
        </Link>
        <span>/</span>
        <span className="text-foreground/70">
          Ep. {episodeIndex + 1}
        </span>
      </div>

      {/* Episode Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="category-pill text-brief-red font-medium">
            {story.categoryLabel}
            {story.industryLabel && (
              <span className="text-foreground/45"> / {story.industryLabel}</span>
            )}
          </span>
          <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full font-medium bg-foreground/5 text-foreground/55">
            Episode {episodeIndex + 1} / {story.episodes.length}
          </span>
          {isLatest && (
            <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full font-medium bg-brief-red/10 text-brief-red">
              Latest
            </span>
          )}
        </div>

        <h1 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
          {episode.title}
        </h1>

        <p className="mt-4 text-foreground/60 leading-relaxed text-sm">
          {episode.summary}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-foreground/45">
          <time>{episode.date}</time>
          <span>·</span>
          <span>{episode.readTime}</span>
        </div>
      </header>

      <div className="h-px bg-brief-border mb-10" />

      {/* Article Content */}
      <article className="space-y-5">
        {contentBlocks.map((block, i) => {
          const trimmed = block.trim();

          // H2 heading
          if (trimmed.startsWith("## ")) {
            return (
              <h2
                key={i}
                className="font-serif text-xl font-bold mt-8 mb-3"
              >
                {trimmed.slice(3)}
              </h2>
            );
          }

          // Numbered list items
          if (/^\d+\.\s/.test(trimmed)) {
            const items = trimmed.split("\n").filter((l) => l.trim());
            return (
              <ol key={i} className="space-y-2 pl-1">
                {items.map((item, j) => {
                  const content = item.replace(/^\d+\.\s/, "");
                  // Handle **bold** in list items
                  const parts = content.split(/\*\*(.*?)\*\*/);
                  return (
                    <li
                      key={j}
                      className="text-[15px] text-foreground/80 leading-relaxed flex gap-2"
                    >
                      <span className="text-foreground/50 flex-shrink-0 tabular-nums">
                        {j + 1}.
                      </span>
                      <span>
                        {parts.map((part, k) =>
                          k % 2 === 1 ? (
                            <strong key={k} className="font-semibold text-foreground">
                              {part}
                            </strong>
                          ) : (
                            <span key={k}>{part}</span>
                          )
                        )}
                      </span>
                    </li>
                  );
                })}
              </ol>
            );
          }

          // Bullet list items
          if (trimmed.startsWith("- ")) {
            const items = trimmed.split("\n").filter((l) => l.trim());
            return (
              <ul key={i} className="space-y-2 pl-1">
                {items.map((item, j) => {
                  const content = item.replace(/^-\s/, "");
                  const parts = content.split(/\*\*(.*?)\*\*/);
                  return (
                    <li
                      key={j}
                      className="text-[15px] text-foreground/80 leading-relaxed flex gap-2"
                    >
                      <span className="text-brief-red flex-shrink-0 mt-1.5">
                        <svg width="6" height="6" viewBox="0 0 6 6">
                          <circle cx="3" cy="3" r="3" fill="currentColor" />
                        </svg>
                      </span>
                      <span>
                        {parts.map((part, k) =>
                          k % 2 === 1 ? (
                            <strong key={k} className="font-semibold text-foreground">
                              {part}
                            </strong>
                          ) : (
                            <span key={k}>{part}</span>
                          )
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            );
          }

          // Regular paragraph — handle **bold**
          const parts = trimmed.split(/\*\*(.*?)\*\*/);
          return (
            <p
              key={i}
              className="text-[15px] text-foreground/80 leading-[1.85]"
            >
              {parts.map((part, k) =>
                k % 2 === 1 ? (
                  <strong key={k} className="font-semibold text-foreground">
                    {part}
                  </strong>
                ) : (
                  <span key={k}>{part}</span>
                )
              )}
            </p>
          );
        })}
      </article>

      <ShareButton title={episode.title} />

      {/* Story Navigation */}
      <div className="mt-14 pt-8 border-t border-brief-border">
        {/* Episode navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevEpisode ? (
            <Link
              href={`/story/${story.slug}/${prevEpisode.id}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-brief-red/30 transition-colors"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-1">
                ← 前のエピソード
              </div>
              <div className="text-sm font-medium group-hover:text-brief-red transition-colors line-clamp-2">
                {prevEpisode.title}
              </div>
              <div className="text-[10px] text-foreground/50 mt-1">{prevEpisode.date}</div>
            </Link>
          ) : (
            <div />
          )}
          {nextEpisode ? (
            <Link
              href={`/story/${story.slug}/${nextEpisode.id}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-brief-red/30 transition-colors text-right"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-1">
                次のエピソード →
              </div>
              <div className="text-sm font-medium group-hover:text-brief-red transition-colors line-clamp-2">
                {nextEpisode.title}
              </div>
              <div className="text-[10px] text-foreground/50 mt-1">{nextEpisode.date}</div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back to story */}
        <div className="mt-6 text-center">
          <Link
            href={`/story/${story.slug}`}
            className="inline-flex items-center gap-2 text-sm text-brief-red hover:underline"
          >
            ← ストーリー全体を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
