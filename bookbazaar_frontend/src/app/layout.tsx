import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { theme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "BookBazaar — Discover, Browse, and Preview Books",
  description:
    "BookBazaar is a modern digital bookstore. Browse curated collections, search by category, and preview books with a clean, fast experience.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "BookBazaar",
    description:
      "Discover, browse, and preview books in a clean and fast experience.",
    siteName: "BookBazaar",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BookBazaar",
    description:
      "Discover, browse, and preview books in a clean and fast experience.",
  },
  other: {
    themeColor: theme.colors.background,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
