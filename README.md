# Kamy's Delights website

Marketing site for **Kamy's Delights Ltd**: cleaning & facility management, laundry & dry cleaning,
catering & bakery in Kampala. Built by Dakdot Creations.

**Stack:** SvelteKit 3 · Svelte 5 (runes) · TypeScript (strict) · Tailwind CSS v4 · `@sveltejs/enhanced-img` ·
self-hosted Fraunces + Inter · `@sveltejs/adapter-vercel`

```sh
npm install
npm run dev      # http://localhost:5173
npm run check    # type-check
npm run build    # prerenders every page into .vercel/output
npm run preview
```

## Where things live

```
src/
  app.css                  brand tokens (@theme), base styles, motion
  lib/
    content/site.ts        name, phones, WhatsApp number, offices, hours, nav  ← edit business details here
    content/services.ts    all service copy, FAQs, cake flavours/sizes        ← edit page content here
    seo/jsonld.ts          schema.org builders (Organization, LocalBusiness, Service, FAQ, Breadcrumbs)
    photos.ts              auto-registers images in assets/photos (see PHOTOS.md)
    actions/               reveal (scroll-in), magnetic (button pull)
    components/            Seo, Header, Footer, PageHero, Photo, Button, FaqList, CtaBand, …
  routes/
    +page.svelte           home
    cleaning/              overview + [slug] for residential / commercial / industrial / specialised
    laundry-dry-cleaning/  catering-bakery/  about/  contact/  legal/
    sitemap.xml/ robots.txt/   generated at build
    catering/ laundry_care/ get_in_touch/ supplies/   308 redirects from the old site's URLs
```

## SEO checklist

- [x] Every page prerendered to static HTML with unique title, description, canonical, Open Graph
- [x] JSON-LD: Organization, WebSite, 2 × LocalBusiness (Ntinda, Bweyogerere), Service, FAQPage, BreadcrumbList
- [x] `sitemap.xml` + `robots.txt`; old URLs 308-redirect to their new pages
- [x] Responsive images (AVIF/WebP), preloaded fonts, about 72 KB gzipped JS in total
- [ ] Add the domain in Vercel and point `kamysdelights.com` → `www.kamysdelights.com`
- [ ] Submit `https://www.kamysdelights.com/sitemap.xml` in Google Search Console
- [ ] Create/verify **Google Business Profile** for both offices with the *exact* name, address and phone in `site.ts`
- [ ] Add social profile URLs to `site.social` once they exist (feeds `sameAs`)
- [ ] Optional analytics: `npm i @vercel/analytics`, then track clicks on `[data-track]` links

## Motion (GSAP 3.15)

All motion runs through `src/lib/gsap/useGsap.svelte.ts` (loads GSAP + ScrollTrigger, ScrollSmoother, SplitText
once, scopes everything in a `gsap.context`, reverts on unmount).

- **Smooth scroll:** `ScrollSmoother` in `src/routes/+layout.svelte` wraps `<main>` + footer in
  `#smooth-wrapper > #smooth-content`. Header and WhatsApp button stay outside (fixed elements must).
  Native scrolling on touch devices and under reduced motion. Same-page `#hash` links and arriving with a
  hash are routed through the smoother with a header offset.
- **Page transitions:** outgoing `<main>` fades up and out (`onNavigate`), incoming rises in (`afterNavigate`).
- **Reveals:** add attributes, no imports needed. `<PageMotion />` (mounted by the layout, keyed per URL)
  runs `useReveals()` from `src/lib/gsap/reveals.ts`:
  - `data-reveal="rise|fade|scale"` (+ optional `data-reveal-delay="120"`): fades in once on scroll
  - `data-split` (+ optional `data-split-delay`): heading split into masked lines that slide up
  - `data-speed="0.8"` / `data-lag`: ScrollSmoother parallax (used on the big decorative stars)
- **Hero:** pointer parallax on the home collage via `gsap.quickTo` (`data-depth` layers).
- CSS-only extras: magnetic buttons, hover sheen, marquee, rotating/floating star (on the `rotate`/`translate`
  properties so they never fight GSAP transforms), FAQ accordion.
- Reveal targets are hidden in CSS only when JS runs; if GSAP hasn't loaded within 4 s, `html.gsap-failed`
  shows everything. Reduced motion skips all GSAP animation and the smoother.
