API Integration Notes

- All API calls should be routed through src/lib/api.ts to keep fetch logic centralized.
- Set NEXT_PUBLIC_API_BASE_URL in your environment (.env) to point to the backend REST API base.
- Replace mock implementations with http() wrapper calls, e.g.:
    export async function getFeaturedBooks() { 
      return http<Book[]>('/books/featured'); 
    }

SSR and SSG
- Server components can call the functions from src/lib/api.ts directly.
- For ISR, export revalidate = <seconds> from pages (as shown on home and book pages).
- For dynamic SSR queries (e.g., search), use dynamic = "force-dynamic" or set fetch cache: "no-store".
