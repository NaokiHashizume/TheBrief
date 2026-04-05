import { readFile } from "node:fs/promises";
import { join } from "node:path";

let fontCache: ArrayBuffer | null = null;

export async function getJapaneseFont(): Promise<ArrayBuffer> {
  if (fontCache) return fontCache;
  const fontPath = join(process.cwd(), "src/lib/fonts/NotoSansJP-Regular.ttf");
  const buffer = await readFile(fontPath);
  fontCache = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  return fontCache;
}
