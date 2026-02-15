# CLAUDE.md - Project Rules for LegalEnt

## Tech Stack
- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Package Manager**: npm

## Architecture Pattern - Three-Layer Separation

**All pages MUST follow this strict three-layer pattern.**

### 1. Page Layer (`page.tsx`)
- ONLY handles presentation structure and shell
- Authentication checks (if needed)
- Layout wrapper (Header, main structure)
- Imports and renders the main component
- NO business logic, state management, or API calls
- NO event handlers or complex flow logic

### 2. Flow Logic Layer (`ComponentName.tsx`)
- Handles all user interactions and flow control
- State management (useState, useEffect for UI state)
- Event handlers (onClick, onSubmit, onChange, etc.)
- Form validation and UI state
- Navigation logic (router.push)
- Calls business logic functions from utility files
- NO direct API calls or database operations

### 3. Business Logic Layer (`utilityName.ts`)
- ONLY data fetching and writing operations
- API calls (fetch to `/api/*` endpoints)
- Data transformation and formatting
- Error handling for data operations
- Returns typed data structures
- NO React hooks or components
- Pure TypeScript functions

## File Organization

```
app/
  [feature]/
    page.tsx              # Presentation shell only
    FeatureName.tsx       # Flow logic component
    FeatureNameUtils.ts   # Business logic utilities
  api/
    [feature]/
      route.ts            # API route handlers
```

## Naming Conventions
- **Pages**: `page.tsx` (Next.js convention)
- **Flow Components**: `PascalCase.tsx` (e.g., `ContractSearch.tsx`)
- **Business Logic**: `PascalCase.ts` (e.g., `ContractUtils.ts`)
- **API Routes**: `route.ts` (Next.js convention)

## Commands
- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

## TypeScript
- Define interfaces for all data structures
- Use explicit return types for functions
- Prefer `interface` over `type` for object shapes
- Use absolute imports with `@/` alias

## Styling
- Use Tailwind CSS utility classes
- Always include dark mode variants using `dark:` prefix
- Use consistent spacing scale

## API Routes
- Place in `app/api/[feature]/route.ts`
- Use proper HTTP methods (GET, POST, PATCH, DELETE)
- Return consistent JSON: `{ success: boolean, data?: any, error?: string }`
- Document edge cases and business rules with comments above the handler (e.g., duplicate handling, silent vs. error behavior, input normalization)
- Use `// TODO:` comments for known gaps that need future attention (e.g., missing validation, unhandled scenarios)
- When implementing a new endpoint, review and call out: What happens on duplicate/conflict? What inputs are validated vs. passed through? What does the caller see on partial failure?

## Error Handling
- Handle errors in business logic layer
- Return error messages as strings in result objects
- Display errors in the flow logic layer (UI)
- Use try-catch for async operations

## Code Quality
- Keep functions small and focused (single responsibility)
- Use descriptive variable and function names
- Remove console.log statements before committing
- Handle edge cases (null/undefined checks, empty arrays)

## Testing
- Add unit tests where possible for business logic and flow components
- Use Jest and React Testing Library for unit/component tests
- Use Playwright for end-to-end browser testing of user flows
- After implementing a feature, run browser tests to auto-verify the flow works

## Planning & Execution
- Before executing any non-trivial task, write a plan to a markdown file (e.g., `plans/feature-name.md`)
- Include a progress tracker with checkboxes for each phase/step
- Update checkboxes in the plan file after completing each phase/step
- End every plan with a "## Unresolved Questions" section listing any open items

## Deployment
- Deploy via Vercel (connected to GitHub repo)
- Environment variables configured in Vercel dashboard
- Preview deployments on PRs, production on `main` branch

## Git Workflow
- Branch from `main` for features
- Use descriptive branch names: `feature/`, `fix/`, `chore/`
- Keep commits focused and well-described
- Do NOT include "Co-Authored-By" or any other AI/Claude attribution in commit messages

## Pre-Push Review Checklist
Before pushing any code, review and confirm:
- **Diff review**: Run `git diff` and verify every changed line is intentional — no debug code, no unrelated changes, no secrets
- **Plan alignment**: If a plan file exists for the feature, confirm the changes match the spec and update checkboxes accordingly
- **Edge case comments**: Verify that non-obvious business rules, conflict handling, and silent behaviors are documented with comments
- **TODO tracking**: Any known gaps or deferred work are marked with `// TODO:` comments
- **Tests passing**: Run `npm test` (unit) and `npm run test:e2e` (browser) before pushing
- **Build passing**: Run `npm run build` to catch type errors and build failures
