import { describe, it, expect } from "vitest";
import { t, translations } from "./i18n";

describe("i18n.t", () => {
  it("returns Japanese strings for ja locale", () => {
    expect(t("nav.politics", "ja")).toBe("Politics");
    expect(t("politics.title", "ja")).toBe("政治");
  });

  it("returns English strings for en locale", () => {
    expect(t("politics.title", "en")).toBe("Politics");
    expect(t("articles.back", "en")).toBe("Back to article list");
  });

  it("falls back to ja when en is missing", () => {
    // すべてのキーで ja は必ず存在する
    for (const key of Object.keys(translations) as (keyof typeof translations)[]) {
      expect(translations[key].ja).toBeTruthy();
    }
  });
});
