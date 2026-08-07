# shiplog

A personal blog documenting what I build and ship AI engineering, MLOps, and full-stack projects. Static Next.js site, Markdown content, deployed to GitHub Pages.

## Stack

- **Next.js 16** (App Router) + TypeScript, static export
- **Tailwind CSS v4** (CSS-first config)
- **Markdown content** with Zod-validated frontmatter — a bad post fails the build, not the page
- **unified/remark/rehype** pipeline with Shiki syntax highlighting
- Native **sitemap**, **robots.txt**, and hand-rolled **RSS feed**
- **motion** for the link-button component
- **pnpm** + **GitHub Actions** for CI and Pages deploy

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm lint
pnpm typecheck
pnpm build      # static export to ./out
```

## Writing a post

Add a Markdown file to `content/posts/<slug>.md`:

```markdown
---
title: "Post title"
date: "2026-01-01"
excerpt: "One-line summary shown on the card."
tags: ["Backend"]
coverImage: "https://..."          # optional
coverImagePosition: "center"       # optional: top | center | bottom
links: [{ label: "View on GitHub", url: "https://..." }]  # optional
---

Post body in Markdown.
```

The frontmatter schema lives in [`src/lib/schema.ts`](src/lib/schema.ts) — required/optional fields and defaults are defined there.

## Deployment

Deploys automatically via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`. One-time setup:

1. On GitHub, go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push (or merge) to `main` — the workflow builds and deploys automatically.
4. The site will be live at `https://<username>.github.io/<repo>/`.

Every push to `main` re-triggers the deploy. Pull requests run [`ci.yml`](.github/workflows/ci.yml) (lint, typecheck, build) as a merge gate but don't deploy.
