import type { MetadataRoute } from "next";
import { sampleStories } from "@/lib/stories";

export const dynamic = "force-static";
import { debates } from "@/lib/debates";
import { enactedItems } from "@/lib/enacted";
import { passedItems } from "@/lib/passed";

const SITE_URL = "https://thebrief.info";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  // Politics section pages
  const politicsPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/politics`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/politics/diet`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/politics/cabinet`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/politics/legislators`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/politics/debates`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/politics/passed`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/politics/enacted`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  // Dynamic debate detail pages
  const debatePages: MetadataRoute.Sitemap = debates.map((d) => ({
    url: `${SITE_URL}/politics/debates/${d.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  // Dynamic passed detail pages
  const passedPages: MetadataRoute.Sitemap = passedItems.map((p) => ({
    url: `${SITE_URL}/politics/passed/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Dynamic enacted detail pages
  const enactedPages: MetadataRoute.Sitemap = enactedItems.map((e) => ({
    url: `${SITE_URL}/politics/enacted/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Story pages
  const storyPages: MetadataRoute.Sitemap = sampleStories.map((s) => ({
    url: `${SITE_URL}/story/${s.slug}`,
    lastModified: new Date(s.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Economy & Industry pages
  const sectionPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/economy`, lastModified: now, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/industry`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  return [
    ...staticPages,
    ...politicsPages,
    ...sectionPages,
    ...debatePages,
    ...passedPages,
    ...enactedPages,
    ...storyPages,
  ];
}
