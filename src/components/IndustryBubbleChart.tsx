"use client";

import { useState } from "react";

interface IndustryBubble {
  slug: string;
  label: string;
  labelJa: string;
  marketSize: number; // 兆円
  color: string;
}

const bubbles: IndustryBubble[] = [
  { slug: "automotive", label: "Automotive", labelJa: "自動車", marketSize: 71.5, color: "#ef4444" },
  { slug: "finance", label: "Finance", labelJa: "金融", marketSize: 58.2, color: "#f59e0b" },
  { slug: "real-estate", label: "Real Estate", labelJa: "不動産", marketSize: 46.8, color: "#64748b" },
  { slug: "retail", label: "Retail / EC", labelJa: "小売・EC", marketSize: 44.3, color: "#14b8a6" },
  { slug: "energy", label: "Energy", labelJa: "エネルギー", marketSize: 29.5, color: "#f97316" },
  { slug: "pharma", label: "Pharma", labelJa: "医薬品", marketSize: 14.8, color: "#10b981" },
  { slug: "media", label: "Media", labelJa: "メディア", marketSize: 12.1, color: "#ec4899" },
  { slug: "ai", label: "AI / Tech", labelJa: "AI・テック", marketSize: 8.4, color: "#8b5cf6" },
  { slug: "semiconductors", label: "Semicon", labelJa: "半導体", marketSize: 7.2, color: "#06b6d4" },
];

// Pre-computed circle-packing positions (cx, cy as % of viewBox 600x400)
const positions: { cx: number; cy: number }[] = [
  { cx: 220, cy: 195 }, // automotive (largest)
  { cx: 390, cy: 180 }, // finance
  { cx: 130, cy: 310 }, // real-estate
  { cx: 370, cy: 320 }, // retail
  { cx: 490, cy: 255 }, // energy
  { cx: 90, cy: 175 },  // pharma
  { cx: 270, cy: 330 }, // media
  { cx: 500, cy: 140 }, // ai
  { cx: 150, cy: 105 }, // semiconductors
];

function radiusFromSize(size: number): number {
  // Scale: sqrt for area-proportional, then fit into viewBox
  const minR = 28;
  const maxR = 88;
  const minSize = 7.2;
  const maxSize = 71.5;
  const t = (Math.sqrt(size) - Math.sqrt(minSize)) / (Math.sqrt(maxSize) - Math.sqrt(minSize));
  return minR + t * (maxR - minR);
}

export function IndustryBubbleChart() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="mt-8 mb-4">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] tracking-[2px] uppercase text-foreground/30">
          Market Size Overview
        </span>
        <span className="text-[10px] text-foreground/20">
          (日本国内市場規模・兆円)
        </span>
      </div>

      <div className="relative w-full rounded-xl border border-brief-border bg-white overflow-hidden">
        <svg
          viewBox="0 0 600 420"
          className="w-full h-auto"
          role="img"
          aria-label="各業界の国内市場規模を示すバブルチャート"
        >
          {bubbles.map((b, i) => {
            const r = radiusFromSize(b.marketSize);
            const { cx, cy } = positions[i];
            const isHovered = hovered === b.slug;
            const fontSize = r > 50 ? 12 : r > 35 ? 10 : 9;
            const showLabel = r > 25;

            return (
              <g
                key={b.slug}
                onMouseEnter={() => setHovered(b.slug)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer"
                style={{ transition: "transform 0.2s ease" }}
              >
                {/* Bubble */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? r + 4 : r}
                  fill={b.color}
                  fillOpacity={isHovered ? 0.25 : 0.12}
                  stroke={b.color}
                  strokeWidth={isHovered ? 2 : 1.2}
                  strokeOpacity={isHovered ? 0.8 : 0.4}
                  style={{ transition: "all 0.2s ease" }}
                />

                {/* Label */}
                {showLabel && (
                  <>
                    <text
                      x={cx}
                      y={cy - (r > 40 ? 8 : 2)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={fontSize}
                      fontWeight="600"
                      fill={b.color}
                      fillOpacity={isHovered ? 1 : 0.8}
                      style={{ transition: "fill-opacity 0.2s ease" }}
                    >
                      {b.label}
                    </text>
                    {r > 40 && (
                      <text
                        x={cx}
                        y={cy + 6}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={10}
                        fill="currentColor"
                        fillOpacity={0.3}
                      >
                        {b.labelJa}
                      </text>
                    )}
                    <text
                      x={cx}
                      y={cy + (r > 40 ? 22 : 12)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={r > 50 ? 13 : 10}
                      fontWeight="700"
                      fill={b.color}
                      fillOpacity={isHovered ? 1 : 0.6}
                      style={{ transition: "fill-opacity 0.2s ease" }}
                    >
                      {b.marketSize}兆円
                    </text>
                  </>
                )}

                {/* Tooltip for small bubbles */}
                {isHovered && !showLabel && (
                  <>
                    <rect
                      x={cx - 50}
                      y={cy - r - 30}
                      width={100}
                      height={24}
                      rx={4}
                      fill="var(--color-foreground)"
                      fillOpacity={0.9}
                    />
                    <text
                      x={cx}
                      y={cy - r - 18}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={10}
                      fontWeight="600"
                      fill="var(--color-background)"
                    >
                      {b.label} — {b.marketSize}兆円
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <p className="mt-2 text-[10px] text-foreground/20 text-right">
        出典: 各業界団体・経済産業省（2025年度推計）
      </p>
    </div>
  );
}
