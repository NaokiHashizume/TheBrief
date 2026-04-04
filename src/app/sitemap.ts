import type { MetadataRoute } from "next";

const SITE_URL = "https://thebrief.info";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  const categories = ["politics", "economy", "industry", "lifestyle", "opinion", "university"];
  const categoryPages = categories.map((cat) => ({
    url: `${SITE_URL}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const industries = ["ai", "semiconductors", "automotive", "pharma", "finance", "energy", "real-estate", "media", "retail"];
  const industryPages = industries.map((ind) => ({
    url: `${SITE_URL}/category/industry/${ind}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...industryPages];
}
