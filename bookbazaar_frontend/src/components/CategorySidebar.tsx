import Link from "next/link";
import { Category } from "@/types";
import { theme } from "@/lib/theme";

// PUBLIC_INTERFACE
export default function CategorySidebar({ categories }: { categories: Category[] }) {
  return (
    <aside
      className="w-full md:w-64 flex-shrink-0"
      aria-label="Book categories"
    >
      <div
        className="rounded-md border"
        style={{ borderColor: theme.colors.border }}
      >
        <div
          className="px-4 py-3 rounded-t-md font-semibold"
          style={{
            backgroundColor: theme.colors.muted,
            color: theme.colors.text,
          }}
        >
          Categories
        </div>
        <ul className="divide-y" style={{ borderColor: theme.colors.border }}>
          {categories.map((c) => (
            <li key={c.id} className="px-4 py-3 hover:bg-gray-50">
              <Link
                href={`/browse?category=${encodeURIComponent(c.slug)}`}
                prefetch={false}
                className="flex items-center justify-between text-sm"
                rel="nofollow"
              >
                <span className="text-gray-800">{c.name}</span>
                {typeof c.count === "number" && (
                  <span
                    className="text-xs rounded-full px-2 py-0.5"
                    style={{
                      backgroundColor: theme.colors.muted,
                      color: theme.colors.secondary,
                    }}
                  >
                    {c.count}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
