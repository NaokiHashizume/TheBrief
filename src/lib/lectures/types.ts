export type LectureChapter = {
  number: string;
  title: string;
  lead: string;
  body: string[];
  keyTerms: { term: string; def: string }[];
  callout?: string;
};

export type Lecture = {
  /** URL slug under the category, e.g. "math" or "economics" */
  slug: string;
  /** University category id, e.g. "formal", "social" */
  category: string;
  /** Subfield label as it appears in the University catalogue, e.g. "数学" */
  subfield: string;
  /** Lecture badge text, e.g. "Mathematics 101" */
  badge: string;
  /** Lecture title (Japanese, primary) */
  title: string;
  /** Subtitle / kicker after the title */
  subtitle: string;
  /** Metadata description */
  description: string;
  /** Hero lead paragraph */
  lead: string;
  /** Hero stats grid */
  meta: { label: string; value: string }[];
  /** Lecture chapters */
  chapters: LectureChapter[];
  /** Suggested further-reading list */
  reading: { title: string; note: string }[];
  /** Closing summary paragraphs */
  summary: string[];
};
