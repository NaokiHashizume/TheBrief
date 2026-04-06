import { WebsiteJsonLd } from "@/components/JsonLd";
import { HomeContent } from "@/components/HomeContent";

export default function Home() {
  return (
    <div>
      <WebsiteJsonLd />
      <HomeContent />
    </div>
  );
}
