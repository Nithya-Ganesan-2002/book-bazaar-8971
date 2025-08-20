"use client";

import { useRouter } from "next/navigation";
import SearchBar from "@/components/SearchBar";

/**
 * PUBLIC_INTERFACE
 * HomeSearchClient renders the SearchBar and handles client-side navigation
 * when a search is submitted from the homepage.
 */
export default function HomeSearchClient(): JSX.Element {
  const router = useRouter();

  // When the user searches from home, navigate to /browse with ?q=
  const handleSearch = (q: string) => {
    const url = q ? `/browse?q=${encodeURIComponent(q)}` : "/browse";
    router.push(url);
  };

  return <SearchBar onSearch={handleSearch} />;
}
