# Pro Oche — Website Plan

## Product Understanding

The **Pro Oche** is a premium all-in-one dart oche setup featuring:
- Foldable dartboard backboard with built-in LED backlighting (blue glow)
- Dart holder shelf
- Long throwing mat that extends from the board to the oche line
- Sleek black finish with gold ProOche branding/dart logo
- Designed to turn any room into a pro-level darts setup in seconds

---

## Design Direction

### Inspiration: Single-Product Landing Pages
Taking cues from sites like **Peak Design**, **Aesop**, **Bellroy**, and **Ridge Wallet** — brands that sell one hero product with a cinematic, scroll-driven experience.

### Brand Identity
- **Primary color:** Black (#0A0A0A) — premium, dark feel matching the product
- **Accent color:** Gold (#C8A84E) — matching the logo embroidery on the product
- **Secondary accent:** Electric blue (#00BFFF) — pulled from the LED glow
- **Typography:** Bold, uppercase sans-serif for headings (e.g. Oswald or Bebas Neue), clean sans for body (e.g. Inter)
- **Tone:** Confident, premium, slightly playful — "bring the stage to your home"

### Overall Feel
Dark, atmospheric, moody — like walking into a PDC stage. The blue LED glow is a recurring visual motif.

---

## Site Structure (Single Page with Sections)

### 1. Hero Section
- Full-screen dark background
- Large hero product image (the setup with LED glow on)
- Headline: something like **"Your Home. Your Stage."**
- Subheadline: one-liner about what it is
- CTA button: "Order Now" (gold accent, scrolls to buy section)
- ProOche logo in the navbar

### 2. Product Showcase
- Scroll-triggered section with multiple product images
- Show the oche from different angles: folded, unfolded, in-use, full mat view
- Short feature callouts alongside each image:
  - LED backlighting
  - Built-in dart holder
  - Foldable & portable
  - Full-length throwing mat
  - Fits any room

### 3. Features / Why Pro Oche
- Icon-driven grid or alternating image+text blocks
- Key selling points:
  - **Pro Setup in Seconds** — unfolds and locks into place
  - **LED Atmosphere** — built-in blue LED strip for that stage feel
  - **Space Saving** — folds flat for storage
  - **Premium Build** — durable materials, textured black finish
  - **Regulation Distance** — mat marks the official oche line

### 4. Gallery / Lifestyle
- 2-3 images showing the product in a real room setting (from the photos provided)
- Gives buyers confidence it fits in a normal living space

### 5. Specifications
- Clean table or card layout:
  - Dimensions (folded / unfolded)
  - Mat length
  - Weight
  - Materials
  - LED details
  - What's included / not included (dartboard not included, etc.)
- *Note: we'll need exact specs from you to fill this in*

### 6. Buy / CTA Section
- Product image + price
- "Add to Cart" / "Buy Now" button (Stripe integration placeholder for now)
- Possibly a quantity selector
- Trust badges (secure payment, shipping info, etc.)

### 7. FAQ
- Collapsible accordion:
  - Does it include a dartboard?
  - What are the dimensions?
  - How does it fold?
  - Shipping & delivery info
  - Returns policy

### 8. Footer
- ProOche logo
- Contact email
- Social media links (Instagram, etc.)
- Legal (terms, privacy — placeholder)

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js (App Router)** | Fast, SEO-friendly, easy deployment on Vercel |
| Styling | **Tailwind CSS** | Rapid styling, dark theme support, responsive |
| Animations | **Framer Motion** | Scroll-triggered reveals, smooth transitions |
| Payments | **Stripe Checkout** (later) | Redirect to Stripe-hosted page — simple, secure |
| Hosting | **Vercel** | One-click deploy from repo |
| Images | Optimized via `next/image` | Fast loading, responsive sizing |

---

## Deliverables (Phase 1 — Website Only)

1. Next.js project setup with Tailwind + Framer Motion
2. Responsive single-page site with all sections above
3. Product images optimized and placed
4. Logo integrated into navbar and footer
5. Mobile-first responsive design
6. Placeholder "Buy Now" button (no Stripe yet)
7. SEO basics: meta tags, Open Graph image, page title

---

## What I Need From You

- [ ] Confirm the design direction / tone feels right
- [ ] Product price
- [ ] Exact product specifications (dimensions, weight, materials)
- [ ] What's included in the box?
- [ ] Does it include a dartboard or is that separate?
- [ ] Shipping countries / details
- [ ] Any social media links to include
- [ ] Contact email for the footer
- [ ] Any specific tagline or copy you want used

---

## Next Steps

Once you approve this plan, I'll build the full site in one go.
