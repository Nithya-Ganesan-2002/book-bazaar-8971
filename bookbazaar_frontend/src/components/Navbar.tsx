"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { theme } from "@/lib/theme";

// PUBLIC_INTERFACE
export default function Navbar() {
  const pathname = usePathname();
  const linkClasses = (href: string) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === href
        ? "bg-white text-gray-900 shadow-sm"
        : "text-white/90 hover:text-white"
    }`;

  return (
    <header
      className="w-full"
      style={{ backgroundColor: theme.colors.primary }}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-14 items-center justify-between" aria-label="Global">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span
                className="inline-block h-6 w-6 rounded-sm"
                style={{ backgroundColor: theme.colors.accent }}
                aria-hidden
              />
              <span className="text-white font-semibold tracking-tight">
                BookBazaar
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-2 ml-2">
              <Link href="/browse" className={linkClasses("/browse")}>
                Browse
              </Link>
              <Link href="/auth" className={linkClasses("/auth")}>
                Sign In
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/auth"
              className="px-3 py-1.5 rounded-md text-sm font-medium border border-white/20 text-white hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link
              href="/auth?tab=signup"
              className="px-3 py-1.5 rounded-md text-sm font-medium"
              style={{ backgroundColor: theme.colors.accent, color: "white" }}
            >
              Create account
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
