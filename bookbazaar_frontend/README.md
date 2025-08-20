# BookBazaar Frontend

A modern, minimalistic, light-themed Next.js application for browsing, searching, and previewing books. Built for SEO with SSR/SSG/ISR.

## Quickstart

1. Install dependencies:
   - npm install

2. Configure environment:
   - Copy .env.example to .env and set NEXT_PUBLIC_API_BASE_URL

3. Run the dev server:
   - npm run dev
   - Open http://localhost:3000

## Features in this scaffold

- Top navigation bar with primary/accent colors
- Homepage with search bar, category sidebar, and featured books grid
- Browse page with search and category filtering
- Book detail page with sample preview action
- Auth placeholder page (signin/signup tabs)
- Centralized API layer, ready to switch to REST backend using NEXT_PUBLIC_API_BASE_URL
- SSR/SSG/ISR examples (revalidate, generateStaticParams, dynamic)
- Tailwind v4 with custom CSS variables using the provided palette

## Project structure

- src/app: pages and layouts (Next.js App Router)
- src/components: UI components (Navbar, SearchBar, CategorySidebar, BookCard, Footer)
- src/lib: theme and API integration helpers
- src/types: shared TypeScript models

## Theming

Using provided palette:
- Primary: #1a202c
- Secondary: #2d3748
- Accent: #e53e3e

Global CSS exposes these as CSS variables.

## Integrating a real backend

- Update NEXT_PUBLIC_API_BASE_URL in .env
- Swap mock implementations in src/lib/api.ts for http() calls to your REST endpoints
- Keep server components fetching via src/lib/api.ts for SSR/SSG benefits

