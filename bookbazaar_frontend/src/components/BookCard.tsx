import Link from "next/link";
import { Book } from "@/types";
import { theme } from "@/lib/theme";

// PUBLIC_INTERFACE
export default function BookCard({ book }: { book: Book }) {
  return (
    <div
      className="rounded-md border bg-white overflow-hidden flex flex-col"
      style={{ borderColor: theme.colors.border }}
    >
      <div className="relative aspect-[2/3] bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {book.rating && (
          <div
            className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: theme.colors.accent, color: "white" }}
          >
            ★ {book.rating.toFixed(1)}
          </div>
        )}
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-xs text-gray-600 mt-1">{book.author}</p>
        <div className="mt-auto pt-3">
          <Link
            href={`/book/${book.id}`}
            className="text-sm font-medium"
            style={{ color: theme.colors.accent }}
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
}
