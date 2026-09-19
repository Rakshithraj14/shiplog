---
title: "pixel"
date: "2026-09-19"
excerpt: "A CLI that turns an AI-generated character sheet into a game-ready sprite atlas and pet.json, validated and packaged."
tags: ["Tooling"]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/09/5aa04480-ad34-45bb-8d62-103bbf4fbcf8.png"
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/pixel" }]
---

pixel takes an AI-generated character sheet a grid of poses on a flat background and turns it into a DeskForge pet: a `spritesheet.webp` atlas plus a `pet.json` describing its animations. It removes the background, detects each frame, normalizes size and alignment, builds the atlas, and writes the JSON. A local preview server plays every animation row, and `validate` and `package` check the atlas against its declared grid and zip it under the 5 MB limit.

**Why:** The image model should only have to draw the artwork the tedious part (cutting out frames, aligning them, building the atlas, hand-writing the JSON) is exactly what a script does better, so this automates it end to end.

**Stack:** Node.js, sharp
