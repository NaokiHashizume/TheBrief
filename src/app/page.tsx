import type { Metadata } from "next";
import { WebsiteJsonLd, NewsMediaOrganizationJsonLd } from "@/components/JsonLd";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  alternates: { canonical: "https://thebrief.info" },
};

export default function Home() {
  return (
    <div>
      <WebsiteJsonLd />
      <NewsMediaOrganizationJsonLd />
      <HomeContent />
    </div>
  );
}
