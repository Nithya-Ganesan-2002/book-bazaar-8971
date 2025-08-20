import CategorySidebar from "@/components/CategorySidebar";
import HomeSearchClient from "@/components/HomeSearchClient";
import BookCard from "@/components/BookCard";
import { getCategories, getFeaturedBooks } from "@/lib/api";

export const revalidate = 60; // enable ISR for homepage
// This file is a Server Component by default (no "use client")

export default async function Home() {
  const [categories, featured] = await Promise.all([
    getCategories(),
    getFeaturedBooks(),
  ]);

  return (
    <div className="min-h-[60vh]">
      <section className="mb-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Discover your next favorite book
          </h1>
          <HomeSearchClient />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-6">
        <CategorySidebar categories={categories} />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">Featured</h2>
            <a href="/browse" className="text-sm font-medium text-red-600">
              View all →
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
