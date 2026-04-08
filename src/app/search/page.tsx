import type { Metadata } from "next";
import { T } from "@/components/T";
import { SearchClient } from "./SearchClient";

export const metadata: Metadata = {
  title: "検索 / Search",
  description: "The Brief 内のニュース・記事・コラムを検索します。",
  alternates: { canonical: "https://thebrief.info/search" },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl font-bold mb-2">Search</h1>
      <p className="text-sm text-foreground/55 mb-8">
        <T ja="サイト内のすべての記事・ニュース・コラムを横断検索します。" en="Search across all articles, news, and columns on the site." />
      </p>
      <SearchClient />
    </div>
  );
}
