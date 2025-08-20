import type { Metadata } from "next";
import { getBookById, getFeaturedBooks } from "@/lib/api";
import { theme } from "@/lib/theme";

type BookPageProps = {
  params: { id: string };
};

export const revalidate = 300; // ISR for details

// Example SSG path generation using featured as initial subset
export async function generateStaticParams() {
  const featured = await getFeaturedBooks();
  return featured.map((b) => ({ id: b.id }));
}

// PUBLIC_INTERFACE
export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const book = await getBookById(params.id);
  if (!book) {
    return {
      title: "Book not found — BookBazaar",
      description: "The requested book could not be found.",
    };
  }
  return {
    title: `${book.title} by ${book.author} — BookBazaar`,
    description:
      book.description ||
      `Preview ${book.title} by ${book.author} on BookBazaar.`,
    openGraph: {
      title: `${book.title} — BookBazaar`,
      description:
        book.description ||
        `Preview ${book.title} by ${book.author} on BookBazaar.`,
      type: "article",
      images: [{ url: book.coverUrl }],
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const book = await getBookById(params.id);

  if (!book) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-semibold mb-2">Book not found</h1>
        <p className="text-gray-600">
          The book you are looking for does not exist or was removed.
        </p>
      </div>
    );
  }

  return (
    <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          className="w-full rounded-md border"
          style={{ borderColor: theme.colors.border }}
        />
      </div>
      <div className="md:col-span-2">
        <h1 className="text-3xl font-semibold">{book.title}</h1>
        <p className="text-gray-700 mt-1">by {book.author}</p>
        {book.rating && (
          <div className="mt-2 text-sm">
            <span className="px-2 py-0.5 rounded text-white" style={{ backgroundColor: theme.colors.accent }}>
              ★ {book.rating.toFixed(1)}
            </span>
          </div>
        )}
        <div className="mt-4 prose max-w-none">
          <p className="text-gray-800">
            {book.description ||
              "No description available. Check back later for more details about this title."}
          </p>
        </div>
        <div className="mt-6 flex gap-3">
          <button
            className="px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: theme.colors.accent }}
          >
            Preview sample
          </button>
          <button
            className="px-4 py-2 rounded-md border"
            style={{ borderColor: theme.colors.border, color: theme.colors.secondary }}
          >
            Add to wishlist
          </button>
        </div>
      </div>
    </article>
  );
}
