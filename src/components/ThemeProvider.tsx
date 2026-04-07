"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolved: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  resolved: "light",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  try {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && ["light", "dark", "system"].includes(stored)) return stored;
  } catch {
    /* ignore */
  }
  return "system";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 遅延初期化で localStorage を一度だけ読み、cascading render を回避
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme());
  const [resolved, setResolved] = useState<"light" | "dark">(() => {
    const t = readStoredTheme();
    return t === "system" ? getSystemTheme() : t;
  });

  // theme が変わったら DOM に反映 (副作用は外部システム = DOM 同期のみ)
  useEffect(() => {
    const r = theme === "system" ? getSystemTheme() : theme;
    if (r !== resolved) setResolved(r);
    document.documentElement.classList.toggle("dark", r === "dark");
    // resolved を依存に入れない: theme 変更時のみ評価
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  // system 追従 (外部システム購読 = OK)
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const r = getSystemTheme();
      setResolved(r);
      document.documentElement.classList.toggle("dark", r === "dark");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("theme", t);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ theme, resolved, setTheme }), [theme, resolved, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
