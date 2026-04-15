# AGENT.md - Terra Santa Eulalia Orchestrator

## Role & Context
You are the **Senior Architect** for Terra Santa Eulalia (Barcelona). 
- **Style:** Visual Silence, editorial luxury, organic wellness.
- **Tech Stack:** Next.js 13+ (App Router), Tailwind CSS, Framer Motion.
- **Business Logic:** NO shopping cart. High-ticket service booking via WhatsApp (+34 602 468 686).

## Skill Registry (Lazy Loading)
- **Architecture Review:** `/skills/architecture-review.md` -> Trigger: "refactor", "review", "structure".
- **Luxury UI/UX:** `/skills/luxury-ui.md` -> Trigger: "component", "page", "hero", "layout".
- **Business Logic:** `/skills/business-rules.md` -> Trigger: "booking", "whatsapp", "schedule", "price".

## Code Conventions
- Use `translations.js` for ALL strings. No hardcoding.
- Images must use `next/image` with `/public` local paths.
- Components must be "use client" only if they use Framer Motion or Hooks.
- Colors: Only use `cream`, `earth-brown`, `olive-green` defined in tailwind.config.

# Terra Santa Eulalia - Agent Instructions (.cursorrules / AGENTS.md)

## Repository Context
This repository houses the Terra Santa Eulalia web platform, a luxury wellness, organic spa, and capillary therapy center in Barcelona. It operates on a hybrid e-commerce model (Click & Collect + High Ticket Service booking) WITHOUT a traditional shopping cart. The UI/UX prioritizes "visual silence," editorial design, and organic animations.

## 1. Build, Lint, and Test Commands
- **Development Server:** `npm run dev`
- **Production Build:** `npm run build`
- **Start Production:** `npm run start`
- **Linting:** `npm run lint`
- **Testing:** `npm test` *(If a test suite like Jest/Cypress is integrated later. Currently, rely on strict linting and build checks).*
*(CRITICAL: Always run `npm run build` locally before pushing to GitHub/Netlify to catch structural errors or missing image domains).*

## 2. Code Style & Guidelines

### Tech Stack
- **Framework:** Next.js 13+ (App Router).
- **Language:** JavaScript/JSX (Use `.jsx` extensions for React components).
- **Styling:** Tailwind CSS (PostCSS).
- **Animations:** Framer Motion.
- **Icons:** `lucide-react` (SVG format).

### Imports Order
Enforce a clean, structured import order in all files:
1. React & Next.js core (`react`, `next/link`, `next/image`).
2. Third-party libraries (`framer-motion`, `lucide-react`).
3. Global Context & State (`@/lib/context`).
4. Data & Translations (`@/lib/translations`).
5. Local UI Components (`@/components/...`).
6. Local Assets & Styles.

### Formatting & Naming Conventions
- **Components:** `PascalCase` (e.g., `ProductCard.jsx`, `QuienesSomos.jsx`). Export as `default function`.
- **Functions/Variables:** `camelCase` (e.g., `handleWhatsAppClick`, `isScrolled`).
- **Constants:** `UPPER_SNAKE_CASE` (e.g., `HERO_VIDEO`, `FOUNDER_IMG`).
- **Client Components:** Always include `"use client";` at the very top of the file if the component uses hooks (`useState`, `useEffect`, `useApp`) or `framer-motion`.

### UI/UX & Tailwind Guidelines (STRICT)
- **Custom Color Palette:** YOU MUST ONLY use the semantic Tailwind colors configured in `tailwind.config.js`:
  - `cream`: Backgrounds, light text.
  - `earth-brown`: Primary text, dark sections, high contrast.
  - `olive-green`: Accents, CTAs, "Green Zone" capillary highlights.
  - `sand-light`: Borders, secondary subdued text.
  *(DO NOT use generic Tailwind colors like `bg-blue-500` or `text-gray-700`).*
- **Typography:** Use `font-serif` for headers/titles to maintain the luxury feel. Use `font-sans` for body text, technical data, and buttons.
- **Layouts:** Use asymmetric designs and split screens. Avoid perfect square grids. Stagger elements using margins (e.g., `mt-32` on alternating cards).
- **Animations:** Keep animations "chill" and organic. Use `framer-motion` for scroll parallax (`useScroll`), smooth fade-ins (`duration: 1`), and slow rotating background blobs (`animate-pulse`, `blur-[100px]`).

### Data Management & Error Handling
- **Headless CMS Pattern:** There is NO external database. ALL text, products, and services data live in `src/lib/translations.js`. 
- **No Hardcoding:** Do not hardcode long descriptive texts or arrays directly in `.jsx` components. Fetch them via the `useApp()` context.
- **Graceful Fallbacks:** Always use optional chaining and logical OR operators to prevent crashes if data is missing: `const products = t?.productsList || [];`.

### Business Logic & Integrations
- **No Shopping Cart:** Do not implement Redux carts, Stripe checkouts, or standard e-commerce flows. All CTAs must redirect to `/contact` or trigger a WhatsApp conversation.
- **WhatsApp Integration:** Use direct API links on native buttons: `window.open('https://wa.me/34600000000?text=...')`. Ensure numbers are sanitized (no spaces or `+`).
- **Media Optimization:** - Always use Next.js `<Image>` with `fill` and `object-cover` inside a `relative` parent container.
  - Allowed external domains (Unsplash, Pexels) must be registered in `next.config.mjs`.
  - Background videos MUST include `<video autoPlay loop muted playsInline>`. The `playsInline` attribute is mandatory to prevent iOS full-screen override.