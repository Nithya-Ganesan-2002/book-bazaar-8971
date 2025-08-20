import { theme } from "@/lib/theme";

// PUBLIC_INTERFACE
export default function Footer() {
  return (
    <footer className="mt-12 border-t py-8" style={{ borderColor: theme.colors.border }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} BookBazaar. All rights reserved.</p>
        <p>
          Built with Next.js. <span className="hidden sm:inline">Fast, minimal, and SEO-friendly.</span>
        </p>
      </div>
    </footer>
  );
}
