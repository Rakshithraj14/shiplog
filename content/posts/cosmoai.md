---
title: "CosmoAI"
date: "2025-12-06"
excerpt: "A full-stack AI wrapper app React frontend, Hono backend that demonstrates how chat and image generation apps talk to AI providers under the hood."
tags: ["AI/ML", "Full-Stack"]
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/CosmoAI" }]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/960274b9-15a7-4a5d-92d1-3d0ba818cad6.png"
---

CosmoAI is a teaching project as much as a product: a ChatGPT-style interface that shows the full request path from a React frontend, through a Hono backend, to actual AI providers Groq (Llama 3.1) for text, HuggingFace Stable Diffusion for images. Ask it to "draw a cat" and it auto-detects the image intent.

The point is the pattern, not the polish: frontend ↔ backend ↔ AI model is the same shape behind ChatGPT, Claude, and most AI apps this is that shape, stripped down and readable.

**Why:** Wanted to learn how AI apps actually work end to end how an image-generation request gets handled, how responses get pooled, and what's really happening between a UI and a model.

**Stack:** React, TypeScript, Vite, Tailwind CSS, Bun, Hono, Groq, HuggingFace
