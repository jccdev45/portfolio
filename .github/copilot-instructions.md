<!--
  Short, codebase-focused Copilot orientation.
  Purpose: give an AI agent the minimal, precise facts it needs to be productive in this repo.
  Keep this file short — follow linked instruction files in this folder for broader policy.
  Note: linked instructions files omitted from version control; see https://github.com/github/awesome-copilot
-->

# Quick Copilot Guide — portfolio (nextjs + tailwind)

1) Big picture
- Next.js (app dir) single-page portfolio that mimics a Windows 98 desktop. UI is componentized under `components/`, small primitives in `atoms/`, and global state lives in `atoms/atoms.ts` (Jotai).
- Entry points: `app/layout.tsx` mounts `Desktop`, `DesktopDialog`, `MainNav` and providers (Jotai, Analytics, Toaster).

2) Essential scripts (from `package.json`)
- dev: `next dev --turbopack` (fast local dev)
- build: `next build` (production build)
- start: `next start`
- lint: `eslint ./`  (use `lint:fix` to auto-fix)
- Note: repo contains `bun.lock` — prefer Bun tooling when appropriate, but `npm`/`pnpm` scripts work.

3) Key conventions & patterns
- App-dir routing (PUT pages under `app/`); use server/client component rules from `nextjs.instructions.md`.
- Styling: Tailwind with custom tokens; check `tailwind.config.js` and `globals.css` for utility patterns and custom scrollbar/window styles.
- State: shared UI/global state uses Jotai atoms in `atoms/atoms.ts`. Reuse these atoms — e.g., `desktopIconsAtom`, `volumeAtom`.
- Components: small focused components under `components/` and re-usable UI primitives under `components/ui/` (Radix/shadcn like wrappers).
- Path aliases: imports like `@/components/...` and `@/lib/...` are used throughout — respect `tsconfig.json`/Next aliasing.

4) Integrations & external deps to be aware of
- Analytics: `@vercel/analytics` is loaded in `app/layout.tsx`.
- MDX: uses `@next/mdx`/`next-mdx-remote-client` and `articles/` contains MDX posts.
- Jotai for state management; many components expect atoms to exist (don't replace with another store without an integration plan).
- Local font: `assets/ms-sans-serif.ttf` is loaded in `app/layout.tsx` — changes require rebuilding.

5) Concrete examples to follow
- Reuse atoms: `atoms/atoms.ts` exports atoms (dateAtom, desktopIconsAtom, volumeAtom). Pattern: define atom in `atoms/` and import where needed.
- UI composition: `app/layout.tsx` renders `Desktop` then `MainNav` — new global UI should follow same provider patterns (wrap in `JotaiProvider`).
- Menu and navigation style: inspect `components/main-nav.tsx` for Menubar/MenubarContent patterns and the project's Tailwind classes for window borders/shadows.

6) When to ask for human review
- Changes touching build scripts, Next.js config, or `package.json` deps.
- Changes that replace the global state layer (Jotai) or routing structure.

7) Where to look next (quick links)
- `package.json`, `app/layout.tsx`, `atoms/atoms.ts`, `components/desktop.tsx`, `components/main-nav.tsx`, `tailwind.config.js`, `next.config.mjs`, `tsconfig.json`.
- For process/policy: the `.github/*.instructions.md` files in this folder — especially `conventional-commit.instructions.md`.

If any of these areas are unclear or you want examples (small PRs, commit message templates, or a typecheck script), tell me which part to expand and I’ll update this file.
