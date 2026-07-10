# OC-LearnHome — Learn@Home

## What this is

This repo holds the **design deliverables** for the Learn@Home project (an OpenClassrooms
project brief): use-case diagrams, user stories, and static HTML/CSS mockups for a student/tutor
learning platform. There is **no backend, no build step, and no JS framework** — `demo/` is a
set of hand-written, self-contained static HTML pages deployed as-is to GitHub Pages.

## Repo layout

- `demo/` — the actual product: static HTML mockups, deployed to GitHub Pages from this folder.
  - `demo/index.html` — landing page with a student/tutor role switcher.
  - `demo/student/{desktop,mobile}/*.html` and `demo/tutor/{desktop,mobile}/*.html` — one HTML
    file per page (login, signup, recovery, dashboard, chat, calendar, tasks, settings) per role
    per viewport. 33 HTML files total, ~30k lines.
  - `demo/assets/icons/` — icon set, each icon as both `.svg` and `.png` (1x/2x).
  - `demo/assets/pictures/` — avatar/photo assets used in mockups.
- `Livrables/` — final PDF/Figma deliverables handed to the client (diagrams, user stories, `.fig`).
- `diagramme/` — source Markdown/SVG for use-case diagrams and user stories.
- `.oc/` — brief/notes from the client (French), not project source.

## Critical fact: every HTML page is fully self-contained

**There is no shared CSS or JS file.** Every one of the 33 pages in `demo/` embeds its own
`<style>` block and inline `<script>` — there are no `<link rel="stylesheet">` or
`<script src>` references anywhere. This is a known, significant source of drift: the same
components (`.button-primary`, `.toast`, `.nav-item`, `.header`, `.container`, etc.) are
redefined slightly differently across most of the 33 files because each was copy-pasted and
tweaked independently. When fixing a bug or restyling a shared-looking component, **check
whether the same class is duplicated (with variations) across other pages** before assuming a
single-file fix is complete — grep for the class name across `demo/**/*.html`.

Consolidating this into a shared stylesheet is a legitimate future improvement, but is a
large, visually risky refactor across 33 pages and hasn't been done — treat any such change as
needing before/after screenshot verification (Chromium is available in sandboxed environments
via Playwright), not a blind find-and-replace.

## Tooling

Package manager is **pnpm** (see `packageManager` field in `package.json`). Do not use npm/yarn.

```bash
pnpm install        # install devDependencies (ESLint + Prettier only — no runtime deps)
pnpm run lint       # eslint . (lints inline <script> blocks in HTML too, via eslint-plugin-html)
pnpm run lint:fix
pnpm exec prettier --check "**/*.{html,css,js,mjs,cjs,json}" --ignore-path .gitignore
pnpm run update:check    # ncu — check for outdated deps
pnpm run update:all      # ncu -u — bump package.json (then `pnpm install`)
```

CI (`.github/workflows/ci.yml`) runs ESLint + Prettier check on every push/PR to `main`.
`.github/workflows/deploy-pages.yml` deploys `demo/` to GitHub Pages on push to `main`.

## Conventions

- Formatting is Prettier-enforced (`.prettierrc.json`): 2-space indent, single quotes in
  JS/JSON, double quotes in HTML/CSS, 120 col width. Run `pnpm exec prettier --write` before
  committing.
- ESLint (`eslint.config.js`) lints both standalone JS and inline `<script>` in HTML, with
  relaxed `no-unused-vars` rules for HTML mockup scripts (handlers like `handleX`, `toggleX` are
  allowed to look unused since they're invoked via `onclick=` attributes in markup).
- French is used in UI copy and doc/deliverable filenames (e.g. `Livrables/`, `diagramme/`);
  code identifiers (classes, JS) are in English.
- No test suite exists — this is a mockup repo, correctness is verified visually.
