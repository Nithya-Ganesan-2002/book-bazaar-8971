import { searchBooks, getBooksByCategory, getCategories } from "@/lib/api";
import CategorySidebar from "@/components/CategorySidebar";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";

type BrowseProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export const dynamic = "force-dynamic"; // ensure SSR for fresh queries

export default async function BrowsePage({ searchParams }: BrowseProps) {
  const q = (searchParams.q as string) || "";
  const category = (searchParams.category as string) || "";
  const page = Number(searchParams.page || 1) || 1;

  const [categories, data] = await Promise.all([
    getCategories(),
    category
      ? getBooksByCategory(category, page)
      : searchBooks(q, page),
  ]);

  return (
    <div className="min-h-[60vh]">
      <section className="mb-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Browse Books
          </h1>
          <SearchBar
            defaultValue={q}
            onSearch={(query) => {
              if (typeof window !== "undefined") {
                const params = new URLSearchParams();
                if (query) params.set("q", query);
                if (category) params.set("category", category);
                window.location.href = `/browse${params.toString() ? `?${params}` : ""}`;
              }
            }}
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-6">
        <CategorySidebar categories={categories} />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">
              {category ? `Category: ${category}` : q ? `Results for "${q}"` : "All Books"}
            </h2>
            <span className="text-sm text-gray-600">
              {data.total} {data.total === 1 ? "result" : "results"}
            </span>
          </div>
          {data.items.length === 0 ? (
            <p className="text-gray-600 text-sm">No books found. Try a different search.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.items.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
