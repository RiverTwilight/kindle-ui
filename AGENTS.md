# Repository Guidelines

## Project Structure & Module Organization
- `packages/kindle-ui` holds the core React component library written in TypeScript; keep new components under `src/components` and export through `src/index.ts`.
- `packages/kindle-fonts` bundles embeddable Kindle font files referenced by the core package and docs.
- `docs` is the Next.js demo site (Turbopack in dev) and consumes the workspace packages; static assets live under `docs/public`.
- Shared assets live in `assets/`, while `test/utils` provides Jest-DOM helpers for mocha; automation scripts live in `scripts/`.
- The workspace is managed by `pnpm-workspace.yaml`; prefer `pnpm` workspaces and `workspace:*` ranges when introducing internal dependencies.

## Build, Test, and Development Commands
- `pnpm install` — Restore the monorepo with the pinned pnpm version (`pnpm@8.15.4`).
- `pnpm dev` — Run Turborepo pipelines; starts Rollup watch for the core package and the docs site in dev mode.
- `pnpm build` — Execute `turbo run build` to produce distributable artifacts (Rollup output and Next.js production build).
- `pnpm build:packages` / `pnpm build:docs` — Build only the package bundle or the documentation site.
- `pnpm test:unit` — Run mocha against `packages/kindle-ui/**/*.test.{js,ts,tsx}` and `test/utils/**/*.test.{js,ts,tsx}`.

## Coding Style & Naming Conventions
- Use TypeScript (`.ts/.tsx`) and default to React function components; export UI primitives via named exports in `src/index.ts`.
- Follow the existing tab indentation and double-quoted strings; colocate `styled-components` definitions with their component files.
- Keep component directories PascalCase with an `index.tsx`; colocate story/demo assets under the same folder when needed.
- Use module aliases such as `@/utils` for shared utilities, and prefer relative imports only within a feature folder.

## Testing Guidelines
- Mocha + Testing Library power the unit tests; DOM setup is handled by `test/utils/setupBabel` and `jsdom` in `.mocharc.js`.
- Name tests `<Component>.test.tsx` beside the component or inside `test/utils` for shared helpers; keep assertions focused on rendered behavior.
- Run `pnpm test:unit` locally before publishing; add regression tests when fixing bugs in `packages/kindle-ui`.

## Commit & Pull Request Guidelines
- Follow Conventional Commit prefixes (`feat:`, `fix:`, `build:`, etc.) as seen in recent history; keep subject lines imperative and under 72 characters.
- Group related changes per commit; include follow-up context in the body when touching multiple packages.
- Pull requests should describe the change, list affected packages, link issues when available, and attach screenshots/GIFs for UI updates.
- Ensure CI-critical commands (`pnpm build`, `pnpm test:unit`) pass before requesting review and note any skipped steps explicitly.
