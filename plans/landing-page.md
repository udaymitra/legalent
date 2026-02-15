# Plan: LegalEnt.ai Landing Page

## Steps

### Phase 1: Project Scaffolding
- [x] Initialize Next.js project with TypeScript and Tailwind CSS
- [x] Configure design system colors/fonts in `globals.css` (using Tailwind v4 `@theme`)
- [x] Set up `globals.css` with base styles
- [x] Set up ESLint and `.gitignore`

### Phase 2: Landing Page Sections
- [x] **Hero Section** — "Build the Law Firm of Your Design", architect's approach subtext, CTA button
- [x] **Core Beliefs Section** — 3 cards: "Your Workflow, Your Rules", "Precision as a Mandate", "Amplifying Expertise"
- [x] **Why Infrastructure Matters** — "Glass Box" messaging, transparency/auditability
- [x] **Built by Industry Leaders** — Team credibility (Uber, Apple)
- [x] **CTA Section** — Placeholder email field + "Stay Informed" button (non-functional for now)
- [x] **Footer** — Copyright, minimal links

### Phase 3: Build Verification & Deploy
- [x] Verify `npm run build` succeeds
- [ ] Test responsive design in browser
- [ ] Create GitHub repo and push
- [ ] Deploy to Vercel

## Unresolved Questions
1. **Domain**: Is `legalent.ai` already configured, or will we use Vercel's default URL initially?
2. **Logo**: User mentioned they have a logo — needs to be placed in `public/`
