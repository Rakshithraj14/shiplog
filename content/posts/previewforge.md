---
title: "PreviewForge"
date: "2026-08-28"
excerpt: "Paste a URL, see how it renders as a Twitter/LinkedIn/Facebook/Telegram card, edit the fields, and copy ready-to-paste meta tags for six frameworks."
tags: ["Web", "Full-Stack"]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/1c0dbf77-e7e5-4f93-87b2-42b7268b65d1.png"
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/PreviewForge" }, { label: "View Live", url: "https://previewforgeui.ravanasura1422.workers.dev/" }]
---

PreviewForge parses a URL server-side, pulls its title, OG/Twitter meta tags, and favicon, and renders it as a live preview card for Twitter, LinkedIn, Facebook, and Telegram. Edit the title, description, or image and every card updates instantly along with generated, ready-to-paste meta tags for HTML, React, Next.js, Vue, Svelte, or Angular no manual tag-writing or guessing at field names.

Parsed results are cache-aside: a short-TTL Cloudflare KV cache sits in front of a durable D1 row per URL, with an explicit "Refresh Data" action that bypasses both and re-fetches the origin on demand.

**Why:** Every other social-preview checker I tried kept serving stale cached data instead of the page's actual current title, description, and image, and none of them let you edit those fields or hand you a code snippet you could actually paste into a project built this to fix both.

**Stack:** Vite, React, TypeScript, Tailwind CSS, Hono, Cloudflare Workers, Cloudflare D1 (Drizzle ORM), Cloudflare KV
