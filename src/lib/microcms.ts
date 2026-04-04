import { createClient } from "microcms-js-sdk";
import type { Category, IndustrySubcategory } from "./articles";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

// microCMS response types
export interface MicroCMSStory {
  id: string;
  title: string;
  description: string;
  category: Category[];
  industrySubcategory?: IndustrySubcategory[];
  status: string[];
  createdAt: string;
  updatedAt: string;
}

export interface MicroCMSEpisode {
  id: string;
  title: string;
  summary: string;
  content?: string;
  date: string;
  author: string;
  readTime: string;
  story: MicroCMSStory;
  createdAt: string;
  updatedAt: string;
}

interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

const categoryLabels: Record<Category, string> = {
  politics: "Politics",
  economy: "Economy",
  industry: "Industry",
  lifestyle: "Lifestyle",
  opinion: "Opinion",
  university: "University",
};

const industryLabels: Record<IndustrySubcategory, string> = {
  ai: "AI / Technology",
  semiconductors: "Semiconductors",
  automotive: "Automotive / Mobility",
  pharma: "Pharma / Healthcare",
  finance: "Finance / Fintech",
  energy: "Energy",
  "real-estate": "Real Estate",
  media: "Media / Entertainment",
  retail: "Retail / E-Commerce",
};

export async function getStories() {
  try {
    const res = await client.getList<MicroCMSStory>({
      endpoint: "stories",
      queries: { limit: 50 },
    });
    return res.contents;
  } catch {
    return [];
  }
}

export async function getStoryBySlug(slug: string) {
  try {
    const story = await client.get<MicroCMSStory>({
      endpoint: "stories",
      contentId: slug,
    });
    return story;
  } catch {
    return null;
  }
}

export async function getEpisodesByStory(storyId: string) {
  try {
    const res = await client.getList<MicroCMSEpisode>({
      endpoint: "episodes",
      queries: {
        filters: `story[equals]${storyId}`,
        orders: "date",
        limit: 100,
      },
    });
    return res.contents;
  } catch {
    return [];
  }
}

// Convert microCMS data to our app format
export function formatStory(story: MicroCMSStory, episodes: MicroCMSEpisode[]) {
  const category = story.category[0] as Category;
  const industrySubcategory = story.industrySubcategory?.[0] as IndustrySubcategory | undefined;

  return {
    slug: story.id,
    title: story.title,
    description: story.description,
    category,
    categoryLabel: categoryLabels[category] || category,
    industrySubcategory,
    industryLabel: industrySubcategory ? industryLabels[industrySubcategory] : undefined,
    status: (story.status[0] || "ongoing") as "ongoing" | "concluded",
    lastUpdated: episodes.length > 0 ? episodes[episodes.length - 1].date : story.updatedAt,
    episodes: episodes.map((ep) => ({
      id: ep.id,
      title: ep.title,
      summary: ep.summary,
      date: ep.date,
      author: ep.author,
      readTime: ep.readTime,
      content: ep.content,
    })),
  };
}
