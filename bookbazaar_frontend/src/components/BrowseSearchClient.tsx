"use client";

import { useRouter } from "next/navigation";
import SearchBar from "@/components/SearchBar";

/**
 * PUBLIC_INTERFACE
 * BrowseSearchClient renders the SearchBar with a default value and updates
 * the /browse URL query parameters client-side without passing handlers
 * from a server component.
 *
 * Props:
 * - defaultValue: initial query string to show in the input
 * - category: currently selected category slug to preserve during search
 */
export default function BrowseSearchClient({
  defaultValue = "",
  category = "",
}: {
  defaultValue?: string;
  category?: string;
}): JSX.Element {
  const router = useRouter();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category) params.set("category", category);
    const qs = params.toString();
    router.push(`/browse${qs ? `?${qs}` : ""}`);
  };

  return <SearchBar defaultValue={defaultValue} onSearch={handleSearch} />;
}
