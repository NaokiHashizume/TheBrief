import type { Story } from "./stories";
import { sampleStories } from "./stories";

// Try to load from microCMS, fallback to sample data
export async function getAllStories(): Promise<Story[]> {
  try {
    const { getStories, getEpisodesByStory, formatStory } = await import("./microcms");
    const cmsStories = await getStories();

    if (cmsStories.length === 0) {
      return sampleStories;
    }

    const stories = await Promise.all(
      cmsStories.map(async (s) => {
        const episodes = await getEpisodesByStory(s.id);
        return formatStory(s, episodes);
      })
    );

    return stories;
  } catch {
    return sampleStories;
  }
}

export async function getEpisodeById(
  slug: string,
  episodeId: string
): Promise<{ story: Story; episode: Story["episodes"][0]; episodeIndex: number } | undefined> {
  const story = await getStoryBySlug(slug);
  if (!story) return undefined;
  const episodeIndex = story.episodes.findIndex((e) => e.id === episodeId);
  if (episodeIndex === -1) return undefined;
  return { story, episode: story.episodes[episodeIndex], episodeIndex };
}

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  try {
    const { getStoryBySlug: cmsGetStory, getEpisodesByStory, formatStory } = await import("./microcms");
    const story = await cmsGetStory(slug);

    if (!story) {
      return sampleStories.find((s) => s.slug === slug);
    }

    const episodes = await getEpisodesByStory(story.id);
    return formatStory(story, episodes);
  } catch {
    return sampleStories.find((s) => s.slug === slug);
  }
}
