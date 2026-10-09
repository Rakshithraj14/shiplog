---
title: "PeekPal"
date: "2026-10-07"
excerpt: "A dependency-free web component mascot that follows your cursor, watches the field you're typing in, and celebrates when your form submits."
tags: ["Web", "Tooling"]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/10/e24c8994-ed36-4e6f-8d92-a99763cb616c.png"
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/PeekPal" }, { label: "Try the demo", url: "https://peek-pal.vercel.app" }]
---

PeekPal is a single custom element, `<peek-pal>`, built from two sprite sheets poses and moods that drops into plain HTML, React, Vue, or Svelte with no build step and no dependencies. On its own it follows the cursor in eight directions, blinks and reacts when poked, naps after 15 seconds of inactivity, looks away from password fields, and celebrates when any form on the page submits, all without extra wiring. It's a real focusable button under the hood, so it comes with a visible focus ring and respects `prefers-reduced-motion`.

Making a new character just needs 18 frames nine look directions and nine moods which a set of small Pillow scripts can slice, composite, and build into the two sprite sheets the element expects.

**Why:** Wanted page mascots the page-mascot idea to be a real reusable primitive one element, two sprite sheets, works anywhere instead of copy-pasting one-off mascot code into every new project.

**Stack:** TypeScript, Web Components, Next.js (demo site), Pillow
