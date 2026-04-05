"use client";

import { useEffect } from "react";

const ADSENSE_PUB_ID = "ca-pub-6798688011773123";

export function AdBanner({
  slot,
  format = "auto",
  className = "",
}: {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}) {
  useEffect(() => {
    try {
      ((window as unknown as Record<string, unknown>).adsbygoogle as unknown[] || []).push({});
    } catch {
      // AdSense not loaded yet
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_PUB_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export function AdBannerPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-brief-card border border-dashed border-brief-border rounded-lg flex items-center justify-center py-8 text-xs text-foreground/45 tracking-wider uppercase ${className}`}
    >
      Advertisement
    </div>
  );
}
