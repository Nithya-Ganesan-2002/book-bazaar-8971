import { Book, Category, PaginatedResponse } from "@/types";

/**
 * Note: http() helper and API_BASE removed temporarily to satisfy ESLint (unused).
 * When integrating real REST API, reintroduce them and replace mock implementations.
 */

// Mock data for initial scaffolding
const mockCategories: Category[] = [
  { id: "1", name: "Fiction", slug: "fiction", count: 128 },
  { id: "2", name: "Non-Fiction", slug: "non-fiction", count: 90 },
  { id: "3", name: "Mystery", slug: "mystery", count: 54 },
  { id: "4", name: "Sci-Fi", slug: "sci-fi", count: 72 },
  { id: "5", name: "Fantasy", slug: "fantasy", count: 64 },
];

const mockBooks: Book[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `book-${i + 1}`,
  title: `Sample Book Title ${i + 1}`,
  author: ["Alex Smith", "Jordan Lee", "Taylor Brooks"][i % 3],
  coverUrl: `https://picsum.photos/seed/book${i + 1}/400/600`,
  description:
    "A captivating sample description that teases the content of the book and invites you to preview more.",
  category: mockCategories[i % mockCategories.length].slug,
  rating: 3 + ((i % 3) as 0 | 1 | 2),
}));

// PUBLIC_INTERFACE
export async function getFeaturedBooks(): Promise<Book[]> {
  // Placeholder for SSR fetch; switching to http('/books/featured') later
  return mockBooks.slice(0, 8);
}

// PUBLIC_INTERFACE
export async function getCategories(): Promise<Category[]> {
  // Placeholder for SSG fetch; switching to http('/categories') later
  return mockCategories;
}

// PUBLIC_INTERFACE
export async function searchBooks(
  query: string,
  page = 1,
  pageSize = 12
): Promise<PaginatedResponse<Book>> {
  // Placeholder filtering over mockBooks
  const normalized = query.trim().toLowerCase();
  const filtered = mockBooks.filter(
    (b) =>
      b.title.toLowerCase().includes(normalized) ||
      b.author.toLowerCase().includes(normalized)
  );
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);
  return { items, total: filtered.length, page, pageSize };
}

// PUBLIC_INTERFACE
export async function getBookById(id: string): Promise<Book | null> {
  return mockBooks.find((b) => b.id === id) ?? null;
}

// PUBLIC_INTERFACE
export async function getBooksByCategory(
  slug: string,
  page = 1,
  pageSize = 12
): Promise<PaginatedResponse<Book>> {
  const filtered = mockBooks.filter((b) => b.category === slug);
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);
  return { items, total: filtered.length, page, pageSize };
}
