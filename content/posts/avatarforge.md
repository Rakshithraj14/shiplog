---
title: "AvatarForge"
date: "2026-09-02"
excerpt: "A single Cloudflare Worker endpoint serving all 60+ DiceBear avatar styles same seed, same avatar, every time."
tags: ["Backend", "Tooling"]
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/AvatarForge" }, { label: "View Live", url: "https://avatarforge.ravanasura1422.workers.dev/" }]
---

AvatarForge wraps every DiceBear style adventurer, bottts, pixel-art, notionists, and 50-plus more behind one endpoint: `GET /:id/:seed`, where `:id` picks the style and `:seed` (a username, an email, anything) deterministically picks the avatar. The homepage lists all of them with a live preview so picking a style is a click, not a guess. Size, radius, scale, background color, and flip are all forwarded straight through as query params.

Requests are rate-limited per IP via Cloudflare's native Rate Limiting binding and served from Cloudflare's edge cache with a one-year immutable `Cache-Control`, so a repeat request for the same style/seed never touches DiceBear's renderer twice.

**Why:** Wanted one avatar endpoint to own instead of hot-linking a third-party avatar service from every project a single Worker with all 60+ DiceBear styles behind it, so any app just needs a seed and a style id to get a deterministic default avatar.

**Stack:** TypeScript, Hono, Cloudflare Workers, DiceBear, Cloudflare Cache API, Cloudflare Rate Limiting
