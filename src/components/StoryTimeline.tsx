import type { Story } from "@/lib/stories";
import Link from "next/link";

export function StoryTimeline({ story }: { story: Story }) {
  const episodes = story.episodes;
  const latestIndex = episodes.length - 1;

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[11px] top-3 bottom-3 w-px bg-brief-border" />

      <div className="space-y-0">
        {episodes.map((episode, i) => {
          const isLatest = i === latestIndex;
          return (
            <div key={episode.id} className="relative flex gap-5 group">
              {/* Dot */}
              <div className="flex-shrink-0 mt-1.5 relative z-10">
                <div
                  className={`w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${
                    isLatest
                      ? "border-brief-red bg-brief-red"
                      : "border-brief-border bg-background"
                  }`}
                >
                  {isLatest && (
                    <div className="w-2 h-2 rounded-full bg-brief-card" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 pb-8 ${isLatest ? "" : "opacity-70"}`}>
                <div className="flex items-center gap-3 mb-1">
                  <time className="text-xs text-foreground/50 tabular-nums">{episode.date}</time>
                  {isLatest && (
                    <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 bg-brief-red/10 text-brief-red rounded-full font-medium">
                      Latest
                    </span>
                  )}
                </div>
                <h3 className={`font-serif font-bold leading-snug cursor-pointer hover:text-brief-red transition-colors ${isLatest ? "text-lg" : "text-base"}`}>
                  <Link href={`/story/${story.slug}#${episode.id}`}>
                    {episode.title}
                  </Link>
                </h3>
                <p className="mt-1.5 text-sm text-foreground/45 leading-relaxed line-clamp-2">
                  {episode.summary}
                </p>
                <div className="mt-2 text-xs text-foreground/45">
                  {episode.author} · {episode.readTime}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function StoryCardCompact({ story }: { story: Story }) {
  const latest = story.episodes[story.episodes.length - 1];
  const episodeCount = story.episodes.length;

  return (
    <article className="group cursor-pointer p-6 border border-brief-border rounded-xl hover:border-brief-red/30 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <span className="category-pill text-brief-red font-medium">
          {story.categoryLabel}
          {story.industryLabel && (
            <span className="text-foreground/45"> / {story.industryLabel}</span>
          )}
        </span>
        <span className={`text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full font-medium ${
          story.status === "ongoing"
            ? "bg-brief-red/10 text-brief-red"
            : "bg-foreground/5 text-foreground/55"
        }`}>
          {story.status === "ongoing" ? "Ongoing" : "Concluded"}
        </span>
      </div>

      <Link href={`/story/${story.slug}`}>
        <h3 className="font-serif text-xl font-bold leading-snug group-hover:text-brief-red transition-colors">
          {story.title}
        </h3>
      </Link>

      <p className="mt-2 text-sm text-foreground/45 leading-relaxed line-clamp-2">
        {story.description}
      </p>

      {/* Mini timeline preview */}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center gap-1">
          {story.episodes.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === episodeCount - 1 ? "bg-brief-red" : "bg-foreground/15"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-foreground/45">
          {episodeCount} episodes
        </span>
      </div>

      <div className="mt-3 pt-3 border-t border-brief-border flex items-center justify-between">
        <span className="text-xs text-foreground/45">
          Latest: {latest.date}
        </span>
        <Link
          href={`/story/${story.slug}`}
          className="text-xs text-brief-red hover:underline"
        >
          Read full story →
        </Link>
      </div>
    </article>
  );
}
