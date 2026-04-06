import type { Metadata } from "next";
import { WebsiteJsonLd } from "@/components/JsonLd";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  alternates: { canonical: "https://thebrief.info" },
};

export default function Home() {
  return (
    <div>
      <WebsiteJsonLd />
      <HomeContent />
    </div>
  );
}
