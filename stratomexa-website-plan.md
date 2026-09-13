# Stratomexa Website Revamp — Technical Plan

## 1. Current Site Audit (stratomexa.in)

**Type:** Single-page site (everything on `/` via anchor links: `#services #why #process #signup #contact`)

**Sections present:**
- Hero — "Simplify Your Finances. Grow Your Business." + WhatsApp CTA
- Stats bar (11+ Services, Pan India, 100% Compliant)
- Services grid (11 cards: Zoho Books setup, App Integration, Bookkeeping, Advisory, GST/TDS, FEMA/RBI/ROC, Risk & Controls, Audit Support, Due Diligence, Startup Advisory, Budgeting/FP&A)
- "Why Choose Us" (4 points) + certifications panel
- 4-step process
- Zoho Partner signup links (8 product deep-links — affiliate/reseller IDs)
- Contact section (phone, email, address, hours, a basic form)
- Footer

**Gaps vs. what you want:**
- No dedicated pages (no URL for each service → weak SEO, can't rank per-service keyword like "Zoho Books implementation Hyderabad")
- No blog/resources (no long-tail SEO content engine)
- No case studies / testimonials / client logos (no trust signals)
- No interactive/motion design — flat, template-like
- No visible meta/OG tags optimization, no schema markup, no sitemap surfaced
- Contact form has no visible backend (static form action unclear)

---

## 2. Proposed Site Architecture (Multi-page)

```
/                       Home
/services               Services overview (grid → links to each)
/services/[slug]        11 individual service pages (SEO landing pages)
/about                  About / team / certifications / Zoho partner status
/process                How we work (4-step, expanded)
/case-studies           Client results (even 2-3 to start)
/case-studies/[slug]    Individual case study
/blog                   Articles (GST updates, Zoho tips, compliance deadlines)
/blog/[slug]            Individual post
/zoho-products          Partner signup hub (existing deep-links, better designed)
/contact                Contact + form + map
/privacy-policy, /terms Legal (needed for GST/finance trust + Google Ads if run later)
```

Each `/services/[slug]` page targets one keyword cluster: e.g. `/services/zoho-books-implementation`, `/services/gst-tds-compliance`, `/services/audit-assurance-support`. This alone will meaningfully improve SEO vs. the current single page.

---

## 3. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSG for every page, best-in-class SEO tooling, file-based routing fits multi-page structure |
| Language | **TypeScript** | Fewer bugs when Antigravity is generating/refactoring code |
| Styling | **Tailwind CSS v4** | Fast, consistent design system, easy to hand off/theme |
| UI Components | **shadcn/ui** | Accessible, unstyled primitives (accordion, dialog, form, tabs) you fully own the code for |
| Icons | **lucide-react** | Clean, matches shadcn |
| Animation | **Framer Motion** | Scroll reveals, page transitions, micro-interactions |
| Interactive hero | **Custom Canvas (see §5)** or **tsParticles (`@tsparticles/react`)** | Mouse-reactive particle/network background |
| Forms | **React Hook Form + Zod** | Validated contact/lead forms |
| Form backend (static hosting) | **Web3Forms** or **Formspree** (free tier) | Since a pure static export has no server, form POSTs to their endpoint via fetch — no backend needed |
| SEO | **next-seo** or native Next.js `metadata` API + **next-sitemap** | Per-page title/description/OG/Twitter cards, auto sitemap.xml + robots.txt |
| Structured data | Manual JSON-LD (`LocalBusiness`, `ProfessionalService`, `FAQPage`, `Article` for blog) | Rich snippets in Google |
| Analytics | **GA4** + **Google Search Console** verification | Track + index |
| Blog content | **MDX** (`@next/mdx` or `contentlayer`) or simple markdown files parsed at build | No CMS needed to start; can add Sanity/Contentful later |
| Fonts | `next/font` with a Google Font (e.g., Inter or Manrope for body, a serif/display for headings) | Perf-optimized, no layout shift |
| Deployment | **GitHub Actions → GitHub Pages** (static export) — see §6 for the trade-off | You asked specifically for GitHub hosting |

**package.json core deps:**
```
next, react, react-dom, typescript
tailwindcss, postcss, autoprefixer
framer-motion
@tsparticles/react @tsparticles/slim   (if using tsParticles route)
lucide-react
react-hook-form, zod, @hookform/resolvers
next-sitemap
clsx, tailwind-merge (shadcn utils)
```

---

## 4. Page-by-Page Design Direction

**Design language:** Professional fintech/consulting feel — not flashy startup, not boring corporate. Think: dark navy/charcoal + a single accent (Zoho's brand red `#E42527` or your own teal/blue), generous white space, large confident type, subtle motion (not gimmicky).

### Home (`/`)
- **Hero (full viewport):** Dark background, interactive particle/network canvas reacting to mouse (see §5). Large headline, subhead, two CTAs (WhatsApp + "View Services"). Certification badges float in with a slight parallax on scroll.
- **Trust strip:** Zoho Certified Partner, Partner ID, logos of Zoho products supported — animated marquee or static row.
- **Services preview:** 6 of the 11 services as cards with hover-lift + icon animation, "View all services →"
- **Why Us:** 4-point grid, icons animate in on scroll (Framer Motion `whileInView`)
- **Process:** Horizontal stepper (desktop) / vertical (mobile), connecting line animates as you scroll
- **Case study teaser** (once you have 1-2): before/after numbers, e.g. "40% faster monthly close"
- **CTA band:** Full-width, WhatsApp + phone
- **Footer:** Sitemap links, socials, address, certifications

### Services Overview (`/services`)
- Filterable grid (by category: Accounting / Compliance / Advisory) — 11 cards linking to individual pages

### Individual Service Page (`/services/[slug]`)
- Hero with service name + one-line value prop
- What's included (bullet breakdown)
- Who it's for
- Process specific to that service
- FAQ (accordion, also feeds FAQPage schema)
- CTA

### About
- Founder/team story, Zoho Partner credentials in detail, mission, office photo/map

### Case Studies
- Simple before/after cards; expandable to full write-ups later

### Blog
- List view with categories (GST Updates, Zoho Tips, Compliance Deadlines), card grid

### Contact
- Form (name, phone, service dropdown, message) → Web3Forms/Formspree
- Embedded Google Map (S.R. Nagar office)
- WhatsApp floating button site-wide

---

## 5. Interactive Hero — Implementation Options

**Option A — tsParticles (fastest to ship):**
Config a "links" preset — dots connected by lines that repel/attract on mouse move. Tune color to match brand, low particle count (40-60) for a subtle, professional look rather than a busy screensaver.

**Option B — Custom Canvas (more control, no extra dependency):**
A `<canvas>` full-bleed in the hero, `requestAnimationFrame` loop, particles with velocity, mouse position tracked via `pointermove`, particles gently repelled/attracted near the cursor, thin lines drawn between nearby particles (classic "network" effect). ~150 lines of TypeScript, zero dependencies — good for perf and full brand control (colors, density, speed all yours).

**Recommendation:** Option B for a finance/consulting brand — feels custom-built rather than a template plugin, and you avoid a dependency. I can hand Antigravity the exact canvas component spec if you want it written out.

Either option: respect `prefers-reduced-motion`, and fall back to a static gradient/SVG on mobile if perf testing shows jank on low-end devices.

---

## 6. Hosting: GitHub Pages — What Works and the One Trade-off

**Works fine on GitHub Pages (`next export` / `output: 'export'`):**
- All pages above (fully static, pre-rendered at build)
- SEO: metadata, sitemap.xml, robots.txt, JSON-LD — all generated at build time, no server needed
- Custom domain (stratomexa.in) via CNAME file + DNS A/CNAME records — GitHub Pages supports this free, with free HTTPS

**The one limitation:** static export has **no API routes / server functions**. The contact form can't POST to a Next.js backend. Fix: form submits via `fetch` directly to **Web3Forms** or **Formspree** (both have generous free tiers, no backend code needed on your side).

**Deploy flow:**
1. GitHub Actions workflow triggers on push to `main`
2. `next build` → static export to `/out`
3. Action publishes `/out` to `gh-pages` branch (or Pages' native "deploy from Actions" flow)
4. Custom domain + HTTPS configured once in repo Settings → Pages

**Alternative worth knowing:** If down the line you want the contact form handled server-side without a third party, **Cloudflare Pages** (also free, also connects to your GitHub repo) supports Next.js edge functions — same code, one config change, no GitHub Pages limitation. Not necessary now, just flagging it as a zero-cost upgrade path later.

---

## 7. Suggested Build Order (for Antigravity)

1. Scaffold Next.js + TS + Tailwind + shadcn, set up design tokens (colors, type scale, spacing) as a first step
2. Build shared layout: header/nav, footer, WhatsApp floating button
3. Build Home page (static content first, hero canvas last)
4. Build Services overview + one dynamic `[slug]` service page template, then populate content for all 11
5. Build About, Process, Contact (with Web3Forms wiring), legal pages
6. Add Case Studies + Blog (MDX) once content is ready — can ship v1 without these
7. Wire metadata API per page, generate sitemap.xml/robots.txt, add JSON-LD
8. Perf pass: Lighthouse (target 90+ across the board), image optimization, font loading
9. GitHub Actions deploy + custom domain + Search Console submission

---

Send this file to Antigravity as the spec, or paste in the sections you want it to start with. Happy to go deeper on any one part first — e.g. write out the full canvas hero component, or draft the actual copy/content for each service page.
