# Agroc Nursery E-commerce Demo

## Goal
Build a complete, mobile-first sales prototype for a Sri Lankan plant nursery that feels premium, trustworthy, and tailored to real nursery customers. The experience will prioritize product discovery, WhatsApp enquiries, nursery visits, and future e-commerce readiness without adding backend functionality or unverified claims.

## What I’ll Build
- Sticky, compact-on-scroll navigation with desktop links, mobile menu, and persistent WhatsApp access.
- Immersive nursery hero using realistic custom imagery, clear calls to action, editable positioning text, and a location prompt.
- Six visual category cards that filter and scroll customers into the product collection.
- Popular plant catalogue with demo-only prices, availability labels, descriptions, category filtering, and prefilled WhatsApp enquiries.
- Interactive “Right Plant” finder using growing location, plant purpose, and space filters against local demo data.
- Value-based trust content, nursery story, customer journey steps, and beginner-friendly plant-care articles without fabricated claims.
- Premium bulk-order section for farms, landscaping, hotels, offices, and commercial customers.
- Nursery gallery with responsive image grid and working lightbox.
- Contact and visit section with clearly marked phone, email, hours, location, and map placeholders.
- Professional footer with replaceable branding, contact links, social placeholders, and subtle CZone credit.
- Toast feedback, smooth scrolling, restrained transitions, and back-to-top control.

## Visual Direction
- Deep forest green, fresh botanical green, warm off-white, earthy beige, muted terracotta, and charcoal.
- Elegant editorial headings paired with a highly readable modern sans-serif.
- Realistic, sunlit tropical nursery photography suited to Sri Lanka.
- Refined low-radius cards, soft shadows, clear spacing, and restrained motion rather than startup-style effects.
- Responsive layouts specifically checked at 360px, 390px, 430px, tablet, and desktop widths.

## Content Structure
- Central editable data for business identity, contact details, categories, products, articles, and gallery items.
- Demo products and pricing visibly identified as sample content so they cannot be mistaken for confirmed client information.
- WhatsApp links generated from the shared placeholder number and item-specific messages.
- All major navigation items will target meaningful sections within this intentionally single-page sales demo.

## Technical Details
- React 19, TypeScript, TanStack Start, and Tailwind CSS v4.
- Semantic design tokens defined in the global theme; no hardcoded page colors.
- Reusable components for navigation, section headings, categories, products, filters, gallery, calls to action, and footer.
- Generated project-local plant and nursery imagery, optimized and imported as assets.
- Route-level metadata for Agroc, with no placeholder project branding.
- Frontend-only state; no database, authentication, checkout, or real order processing.

## Validation
- Confirm the project builds cleanly and the page renders without runtime or console errors.
- Exercise filters, mobile menu, gallery lightbox, WhatsApp links, toast feedback, and back-to-top behavior.
- Visually inspect desktop and required mobile widths for clipping, overlap, legibility, and touch usability.
