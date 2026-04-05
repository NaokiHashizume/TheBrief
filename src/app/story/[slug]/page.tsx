import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { sampleStories } from "@/lib/stories";
import { getAllStories, getStoryBySlug } from "@/lib/getStories";
import { StoryTimeline } from "@/components/StoryTimeline";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export async function generateStaticParams() {
  const stories = await getAllStories();
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);
  if (!story) return { title: "Story Not Found" };

  return {
    title: story.title,
    description: story.description,
    alternates: { canonical: `https://thebrief.info/story/${story.slug}` },
    openGraph: {
      title: story.title,
      description: story.description,
      url: `https://thebrief.info/story/${story.slug}`,
      type: "article",
      locale: "ja_JP",
      siteName: "The Brief",
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.description,
    },
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);
  if (!story) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <ArticleJsonLd
        title={story.title}
        description={story.description}
        datePublished={story.episodes[0]?.date ?? story.lastUpdated}
        dateModified={story.lastUpdated}
        author="The Brief"
        url={`https://thebrief.info/story/${story.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: story.categoryLabel, href: `/${story.category}` },
          { name: story.title, href: `/story/${story.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-foreground/50 mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${story.category}`} className="hover:text-foreground transition-colors">{story.categoryLabel}</Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground/70">Story</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
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

        <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
          {story.title}
        </h1>

        <p className="mt-4 text-foreground/60 leading-relaxed">
          {story.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-foreground/45">
          <span>{story.episodes.length} episodes</span>
          <span>·</span>
          <span>
            {story.episodes.reduce((sum, ep) => sum + (parseInt(ep.readTime) || 5), 0)} min read
          </span>
          <span>·</span>
          <span>Last updated: {story.lastUpdated}</span>
        </div>
      </div>

      <div className="h-px bg-brief-border mb-10" />

      {/* Timeline */}
      <StoryTimeline story={story} />

      {/* What's Next */}
      {story.status === "ongoing" && (
        <div className="mt-4 ml-10 p-5 bg-brief-card border border-dashed border-brief-border rounded-xl">
          <p className="text-sm text-foreground/55 italic">
            This story is ongoing. New episodes will be added as the story develops.
          </p>
        </div>
      )}
    </div>
  );
}
