"use client";

import { useEffect, useRef, useState } from "react";

interface PagefindResult {
  id: string;
  data: () => Promise<{
    url: string;
    excerpt: string;
    meta: { title?: string };
  }>;
}

interface PagefindAPI {
  search: (query: string) => Promise<{ results: PagefindResult[] }>;
}

interface ResolvedResult {
  id: string;
  url: string;
  title: string;
  excerpt: string;
}

export function SearchClient() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ResolvedResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagefindReady, setPagefindReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiRef = useRef<PagefindAPI | null>(null);

  // Pagefind は build 時に out/_pagefind/pagefind.js が生成される
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // @vite-ignore
        const mod: PagefindAPI = await import(
          /* webpackIgnore: true */ "/_pagefind/pagefind.js" as string
        );
        if (!cancelled) {
          apiRef.current = mod;
          setPagefindReady(true);
        }
      } catch {
        if (!cancelled) setError("検索インデックスを読み込めませんでした。");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const api = apiRef.current;
    if (!api || !query.trim()) {
      setResults([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    const handle = setTimeout(async () => {
      try {
        const search = await api.search(query);
        const resolved = await Promise.all(
          search.results.slice(0, 20).map(async (r) => {
            const data = await r.data();
            return {
              id: r.id,
              url: data.url,
              title: data.meta?.title ?? data.url,
              excerpt: data.excerpt,
            };
          })
        );
        if (!cancelled) setResults(resolved);
      } catch {
        if (!cancelled) setError("検索に失敗しました。");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 200);
    return () => {
      cancelled = true;
      clearTimeout(handle);
    };
  }, [query]);

  return (
    <div>
      <label htmlFor="search-input" className="sr-only">
        検索ワード
      </label>
      <input
        id="search-input"
        type="search"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="キーワードを入力..."
        className="w-full px-5 py-4 text-base border border-brief-border rounded-xl bg-transparent focus:outline-none focus:border-brief-red"
        disabled={!pagefindReady && !error}
      />

      {!pagefindReady && !error && (
        <p className="mt-4 text-xs text-foreground/40">検索インデックスを読み込み中...</p>
      )}
      {error && (
        <p className="mt-4 text-xs text-brief-red" role="alert">
          {error}
        </p>
      )}

      {loading && <p className="mt-6 text-sm text-foreground/45">検索中...</p>}

      {!loading && results.length > 0 && (
        <ul className="mt-8 space-y-4">
          {results.map((r) => (
            <li key={r.id} className="border-b border-brief-border pb-4">
              <a
                href={r.url}
                className="block group"
                dangerouslySetInnerHTML={{
                  __html: `<div class="font-serif text-lg font-bold group-hover:text-brief-red transition-colors">${r.title}</div><div class="mt-1 text-sm text-foreground/60 leading-relaxed">${r.excerpt}</div><div class="mt-2 text-[10px] text-foreground/40">${r.url}</div>`,
                }}
              />
            </li>
          ))}
        </ul>
      )}

      {!loading && query && results.length === 0 && pagefindReady && !error && (
        <p className="mt-6 text-sm text-foreground/45">
          「{query}」に一致する記事は見つかりませんでした。
        </p>
      )}
    </div>
  );
}
