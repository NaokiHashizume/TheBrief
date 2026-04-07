import type { Lecture } from "./types";
import { formalLectures } from "./formal";
import { naturalLectures } from "./natural";
import { humanitiesLectures } from "./humanities";
import { socialLectures } from "./social";
import { appliedLectures } from "./applied";
import { interdisciplinaryLectures } from "./interdisciplinary";

export type { Lecture, LectureChapter } from "./types";

export const allLectures: Lecture[] = [
  ...formalLectures,
  ...naturalLectures,
  ...humanitiesLectures,
  ...socialLectures,
  ...appliedLectures,
  ...interdisciplinaryLectures,
];

export function getLecture(category: string, slug: string): Lecture | undefined {
  return allLectures.find((lecture) => lecture.category === category && lecture.slug === slug);
}

export function getLecturesByCategory(category: string): Lecture[] {
  return allLectures.filter((lecture) => lecture.category === category);
}
