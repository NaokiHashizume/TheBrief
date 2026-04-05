import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const fontData = await readFile(join(root, "src/lib/fonts/NotoSansJP-Regular.ttf"));

const width = 1250;
const height = 500;

const jsx = {
  type: "div",
  props: {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)",
      fontFamily: "NotoSansJP",
      padding: "48px 56px",
    },
    children: [
      // Top bar: category badges
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            alignItems: "center",
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: "#38bdf8",
                },
                children: "ICT & AI",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  width: 1,
                  height: 14,
                  background: "rgba(255,255,255,0.15)",
                  marginLeft: 14,
                  marginRight: 14,
                },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: 11,
                  color: "#22c55e",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 4,
                  padding: "3px 10px",
                },
                children: "DEEP DIVE",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  width: 1,
                  height: 14,
                  background: "rgba(255,255,255,0.15)",
                  marginLeft: 14,
                  marginRight: 14,
                },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: 11,
                  color: "rgba(255,255,255,0.4)",
                },
                children: "25 min read",
              },
            },
          ],
        },
      },
      // Center: title area
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 4,
                  color: "rgba(255,255,255,0.25)",
                },
                children: "COMPLETE GUIDE",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: 36,
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1.3,
                  letterSpacing: -1,
                  marginTop: 8,
                },
                children: "OpenClaw",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginTop: 6,
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        fontSize: 16,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.5,
                      },
                      children: "60\u65E5\u3067React\u3092\u8D85\u3048\u305F\u300C\u53F2\u4E0A\u6700\u901F\u300DAI\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u5168\u8C8C",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      // Bottom: stats + branding
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          },
          children: [
            // Stats
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        marginRight: 32,
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            style: { fontSize: 22, fontWeight: 900, color: "#38bdf8" },
                            children: "335K+",
                          },
                        },
                        {
                          type: "div",
                          props: {
                            style: { fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: 1 },
                            children: "GitHub Stars",
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        marginRight: 32,
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            style: { fontSize: 22, fontWeight: 900, color: "#f59e0b" },
                            children: "172",
                          },
                        },
                        {
                          type: "div",
                          props: {
                            style: { fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: 1 },
                            children: "Startups Built",
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            style: { fontSize: 22, fontWeight: 900, color: "#a78bfa" },
                            children: "2M+",
                          },
                        },
                        {
                          type: "div",
                          props: {
                            style: { fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: 1 },
                            children: "Active Users",
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            // Branding
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 4,
                        color: "rgba(255,255,255,0.2)",
                      },
                      children: "THE",
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        fontSize: 24,
                        fontWeight: 900,
                        color: "#ffffff",
                        letterSpacing: -1,
                        marginLeft: 6,
                      },
                      children: "Brief",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

const svg = await satori(jsx, {
  width,
  height,
  fonts: [
    {
      name: "NotoSansJP",
      data: fontData,
      style: "normal",
    },
  ],
});

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: width },
});
const pngData = resvg.render();
const pngBuffer = pngData.asPng();

const outputPath = join(root, "public", "images", "openclaw-article-hero.png");
await writeFile(outputPath, pngBuffer);
console.log(`Generated: ${outputPath} (${pngBuffer.length} bytes, ${width}x${height})`);
