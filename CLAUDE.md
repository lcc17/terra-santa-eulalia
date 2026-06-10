# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build (outputs to ./out — always run before pushing)
npm run lint       # ESLint check
```

There is no test suite. Correctness is validated via `npm run build` — a successful build with all 15 routes generated means no structural errors.

## Deployment

CI/CD runs on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`). It builds the project and deploys the `./out/` static export to IONOS via SFTP. Credentials are stored as GitHub secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).

The project uses `output: "export"` (fully static), so no server-side features (API routes, server actions, SSR) are available in production.

## Architecture

**Framework:** Next.js App Router (static export), React 19, Tailwind CSS, Framer Motion.

**Site:** Luxury organic wellness center in Barcelona. No shopping cart — all purchase/booking CTAs go to WhatsApp (`https://wa.me/34602468686?text=...`) or `/contact`.

### Routing

| Route | Purpose |
|---|---|
| `/` | Home (Catalan default) |
| `/domesticos` | Natural products for home use |
| `/rituales` | In-salon treatments & booking |
| `/filosofia` | Brand philosophy |
| `/contact` | Contact form (EmailJS) |
| `/profesionales` | Gated area for salon professionals (JWT auth) |

Catalan is the default locale served at `/`. Spanish and English have `/es/` and `/en/` URL prefixes. Locale detection happens client-side in `AppProvider` via the `NEXT_LOCALE` cookie or URL pathname — the server always renders Catalan to avoid hydration mismatches.

### Data layer

ALL content (text, product lists, treatment menus, prices) lives in `src/lib/translations.js` as a plain JS object keyed by locale (`ca`, `es`, `en`). There is no database or CMS.

Access translations in components via the `useApp()` hook from `src/lib/context.js`:

```jsx
const { t, lang, toggleLang, mounted } = useApp();
const products = t?.productsList || [];
```

Always use optional chaining and `|| []` / `|| ""` fallbacks when reading from `t`. The `mounted` flag from context is `false` on the server render — use it to prevent locale-dependent content from causing hydration mismatches.

### Auth

`/profesionales` is protected by JWT. The middleware (`middleware.js`) checks for an `auth_token` cookie and redirects to `/contact` on failure. The JWT secret is `process.env.JWT_SECRET` (falls back to a hardcoded string in dev — set it in `.env.local`).

### `useSchedule` hook

`src/lib/useSchedule.js` returns `{ isOpen, nextOpenTime }` based on Europe/Madrid business hours (Mon–Fri 10:00–14:00, 15:00–19:00). Used in the WhatsApp CTA components.

## Code Conventions

**File extensions:** `.jsx` for all React components. `default function` exports with `PascalCase` names.

**`"use client"` directive:** Required at the top of any file using hooks (`useState`, `useEffect`, `useApp`) or Framer Motion. Server components are the default — don't add `"use client"` unnecessarily.

**Custom color palette only** (no generic Tailwind colors like `bg-gray-700`):
- `cream` — backgrounds
- `earth-brown` — primary text, dark sections
- `olive-green` — accents, CTAs
- `sand-light` / `sand-dark` — borders, secondary text
- `terracotta` — warm highlights

**Typography:** `font-serif` (Playfair Display) for headings/titles; `font-sans` (Roboto) for body text and buttons.

**Animations:** Framer Motion only. Standard easing: `duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96]`. Keep animations slow and organic — no snappy or bouncy transitions.

**Layouts:** Asymmetric grids. Stagger elements with margin offsets (`mt-12`, `mt-24`). Avoid symmetric square grids.

**Images:** Always `<Image>` from `next/image`. Since the build uses `unoptimized: true`, use local paths under `/public`. No external image domains are configured.

**Videos:** `<video autoPlay loop muted playsInline>` — `playsInline` is mandatory to prevent iOS full-screen takeover.

**Import order:**
1. React / Next.js core
2. Third-party libraries (framer-motion, lucide-react)
3. Context (`@/lib/context`)
4. Data (`@/lib/translations`)
5. Local components (`@/components/...`)
