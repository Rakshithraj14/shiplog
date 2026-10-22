---
title: "DeskForge"
date: "2026-08-10"
excerpt: "A pixel-art desktop pet that turns typed requests into AI-planned actions validated against a small allowlist, never a raw shell command."
tags: ["AI/ML", "Tooling"]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/10/c43f05b3-1e68-426c-a1ba-8f5965e72a17.png"
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/DeskForge" }, { label: "Download", url: "https://github.com/Rakshithraj14/DeskForge/releases/tag/main-latest" }]
---

DeskForge is an Electron app that puts a pixel-art pet in a transparent, always-on-top window on your desktop. It roams, sleeps, and gets hungry on its own, and clicking it opens a prompt: type a request like "open VS Code and play some music" and your chosen AI provider (local Ollama, Claude, or OpenAI) turns it into a JSON action plan.

That plan never reaches a shell. It's checked against a small allowlist opening an app, a file, a folder, listing a directory, playing music and anything outside that list is dropped before it runs. Characters are just a folder of sprite sheets and a JSON config, so new pets drop in without touching the app's code.

**Why:** Wanted a desktop pet that could actually act on real requests, not just animate so the AI execution path was built around a small validated tool allowlist from day one, not shell access bolted on after the fact.

**Stack:** Electron, Node.js, Ollama / Claude / OpenAI APIs, Electron safeStorage
