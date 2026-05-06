# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VinoVoss — wine e-commerce frontend. **Next.js 15 (App Router)**, **React 19**, **TypeScript 5**. Yarn 4 workspaces with internal packages under `library/`.

## Commands

```bash
yarn dev                  # Next.js dev server (Turbopack)
yarn build                # Production build
yarn start                # Start production server
yarn lint                 # ESLint (src/ + library/**/src)
yarn lint:fix             # ESLint with autofix
yarn format               # Prettier --write
yarn format:check         # Prettier --check
yarn typecheck            # tsc --noEmit
yarn test                 # Vitest watch mode
yarn test:ci              # Vitest with coverage (CI)
yarn storybook            # Storybook on port 6006
```

Run a single test: `yarn test src/path/to/file.test.ts`

Pre-commit hooks (lefthook): Prettier → ESLint fix → TypeScript check. Never use `--no-verify`. Use `gh` CLI for GitHub operations.

Node 20.14.0 (`.nvmrc`). Yarn 4.12.0 (Corepack).

## Architecture

See the **`project-architecture`** skill for where components live, how layers import each other, and the hook-connector pattern. The skill is the authoritative source; the summary below covers only tooling and state.

### Route Groups

- **`app/(legacy)/`** — Old routes using centralized `src/components/`
- **`app/(main)/`** — New routes using `src/features/` + VDS
- Parallel routes: `@actionBarBottom`, `@actionBarSearch`

### State & Data

- **Zustand** (`src/store/`) — global state (auth, app, search, location, profile, etc.)
- **TanStack React Query v5** — server state / GET requests
- **Axios** (`src/api/httpClient/`) — HTTP client; services in `src/api/services/`
- **React Context** (`src/context/`) — auth, map, menu, viewport
- **React Hook Form + Yup** — form handling/validation

### Key Directories

- `src/actions/` — Server Actions (`'use server'`)
- `src/features/` — Product UI components, hook connectors, domain hooks (organized by domain)
- `src/modules/` — Legacy feature modules (wine, merchants, basket, orders, profile, filters, etc.)
- `src/hooks/`, `src/utils/`, `src/types/`, `src/constants/`

### Import Paths

```typescript
import { VDButton } from '@library/vds/src/VDButton/VDButton'
import { WineCard } from '@/features/wine/WineCard'
import { useWineCardProps } from '@/features/wine/useWineCardProps'
```

Path aliases: `@/*` → `./src/*`, plus `@components/*`, `@hooks/*`, `@utils/*`, `@api/*`, `@constants/*`, `@styles/*`, `@configs/*`, `@views/*`, `@assets/*`

**No barrel files** — always import from the specific file path.

### Styling

- **Tailwind CSS 3** (JIT, mobile-first, `preflight: false`) with custom preset `vd-tailwind.preset.js`
- SCSS/Sass for global styles
- **shadcn/ui** outputs into `library/vds` (config: `components.json`)

## Code Conventions

### Components

- Props interface named `Props` (not `ComponentNameProps`)
- Destructure props on first line: `const { x, y } = props`
- Max **150 lines** per component file — refactor if longer
- **1 file = 1 exported component**; no nested component definitions
- File order: imports → `Props` → main component → helpers/tiny components below
- Server Components are default; `'use client'` only for hooks/browser APIs
- `'use server'` is for Server Actions only, never on components
- No `React.forwardRef` (deprecated in React 19 — pass ref as regular prop)
- Use `ClipLoader` for loading states
- Use `next/image` for images

### TypeScript

- `consistent-type-imports` enforced (`import type`)
- Prefer string union types over enums; `as const` objects for runtime access
- Avoid `any`; guard browser globals with `typeof window !== 'undefined'`

### Naming

- Booleans: `is/has/can/should` prefix; no negative names
- Numbers: `Count` or `Index` suffix
- Acronyms: Google Style (`XmlHttpRequest` not `XMLHTTPRequest`)
- Folders: lowercase with dashes; component files: PascalCase

### Quality

- No `console.log` in production code
- No suppressing `exhaustive-deps` without justification
- No array index keys in dynamic lists
- No `dangerouslySetInnerHTML` without sanitization
- Clean up side effects (timeouts, listeners, subscriptions)
- Only `useMemo`/`useCallback` when measurably needed
- Prefer early return over if/else chains

### Git

- Branch names must start with the Jira ticket number as a prefix (e.g. `MB-1234-suggested-git-branch-name`)
- Squash and merge for PRs
- When creating a PR, follow the repository GitHub PR template in `.github/PULL_REQUEST_TEMPLATE.md`

## Reference Skills

Skills live in `.agents/skills/` (canonical) and are linked from `.claude/skills/`. Consult these when working on relevant tasks:

- **project-architecture/** — 3-layer architecture (vds / api / src/features / src/app), decision flowchart, hook-connector pattern, import rules, deprecated layers. Reference when creating or moving any component.
- **shadcn-ui/** — Component patterns for shadcn/ui, Radix UI, Tailwind. Reference when adding/modifying VDS components.
- **vercel-react-best-practices/** — 45 performance rules for React/Next.js (waterfalls, bundle size, re-renders, server perf). Reference `rules/` subfolder for specific patterns.
- **accessibility-compliance/** — WCAG 2.2 patterns, ARIA, keyboard nav, screen reader support. Reference `references/` for detailed guidelines.
- **react-state-management/** — Zustand, Jotai, React Query patterns. Reference when adding/refactoring state logic.
- **web-design-guidelines/** — UI review checklist against Web Interface Guidelines.
- **figma-vds-colors/** — Figma VDS color tokens. Reference when matching design colors.
- **figma-vds-typography/** — Figma VDS typography tokens. Reference when matching design typography.
- **z-index-management/** — Semantic z-index tokens from VDS. Reference when setting z-index values.
