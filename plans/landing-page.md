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
- [x] Test responsive design in browser
- [x] Create GitHub repo and push
- [x] Deploy to Vercel

### Phase 4: Email Capture Backend
- [ ] Create API route for email submission (`app/api/subscribe/route.ts`)
- [ ] Set up database (e.g., Vercel Postgres or similar)
- [ ] Wire up "Stay Informed" form to API
- [ ] Add validation and success/error feedback

### Phase 5: Testing
- [ ] Install Playwright for e2e browser testing
- [ ] Install Jest + React Testing Library for unit/component tests
- [ ] Write e2e tests for landing page flow
- [ ] Write unit tests for business logic

### Phase 6: Dark Mode
- [ ] Add dark mode color tokens to design system
- [ ] Add `dark:` variants across all components
- [ ] Add theme toggle to header

### Phase 7: Analytics
- [ ] Integrate analytics (e.g., Vercel Analytics, PostHog)
- [ ] Track page views and CTA interactions

## Resolved Questions
1. **Domain**: Using `legalent.ai`, configured via Vercel
2. **Logo**: Placed in `public/logo.png`, displayed in header with brand text
