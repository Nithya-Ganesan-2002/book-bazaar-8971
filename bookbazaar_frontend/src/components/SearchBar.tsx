"use client";

import { useState } from "react";

// PUBLIC_INTERFACE
export default function SearchBar({
  placeholder = "Search books, authors...",
  onSearch,
  defaultValue = "",
}: {
  placeholder?: string;
  defaultValue?: string;
  onSearch?: (q: string) => void;
}) {
  const [q, setQ] = useState(defaultValue);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(q.trim());
  };

  return (
    <form onSubmit={submit} role="search" aria-label="Sitewide">
      <div className="flex items-center rounded-md border bg-white overflow-hidden shadow-sm">
        <input
          aria-label="Search query"
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
