"use client";

import { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * SearchBar is a client component for entering a search query.
 * It accepts an optional onSearch callback which must be provided
 * by a client component (do not pass event handlers from server components).
 *
 * If onSearch is not provided, SearchBar will default to navigating
 * to /browse?q=<query> on submit, enabling safe server rendering
 * without passing any handlers.
 */
export default function SearchBar({
  placeholder = "Search books, authors...",
  onSearch,
  defaultValue = "",
}: {
  placeholder?: string;
  defaultValue?: string;
  onSearch?: (q: string) => void;
}): JSX.Element {
  const [q, setQ] = useState(defaultValue);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = q.trim();
    if (onSearch) {
      onSearch(query);
    } else if (typeof window !== "undefined") {
      const url = query ? `/browse?q=${encodeURIComponent(query)}` : "/browse";
      window.location.href = url;
    }
  };

  return (
    <form onSubmit={submit} role="search" aria-label="Sitewide search">
      <div className="flex items-center rounded-md border bg-white overflow-hidden shadow-sm">
        <input
          aria-label="Search query"
          name="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 outline-none text-gray-800"
        />
        <button
          type="submit"
          className="px-3 py-2 text-white"
          style={{ backgroundColor: "#e53e3e" }}
          aria-label="Submit search"
        >
          Search
        </button>
      </div>
    </form>
  );
}
