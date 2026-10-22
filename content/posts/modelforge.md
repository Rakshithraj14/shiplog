---
title: "ModelForge"
date: "2026-09-01"
excerpt: "A monitoring dashboard that asks the question deploying a model never answers: is it still healthy in production?"
tags: ["AI/ML", "MLOps"]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/10/722b4fd5-0164-4659-8976-8fcf5a2a4a41.png"
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/ModelForge" }, { label: "View Live", url: "https://model-forge-psi.vercel.app" }]
---

ModelForge (Model Doctor) watches a fraud-detection model trained on PaySim after it's deployed, not just while it's being built. The model itself is served from a FastAPI instance on a VPS, firing a telemetry event after every prediction to a Cloudflare Worker that checks it against the model's registered schema, scores its data quality, and stores it in D1. A Next.js dashboard turns that into drift heatmaps, performance charts, and an alerts feed.

The monitoring itself shipped in stages: data-quality scoring first, then PSI-based drift detection per feature against a training baseline on a 15-minute cron, then accuracy/precision/recall/F1 once ground-truth labels catch up to predictions, then Telegram/webhook alerts on high drift or recall dropping below 0.8, with a 24-hour cooldown per alert kind so one bad patch doesn't spam the channel.

**Why:** Training and serving a model answers whether it works on day one ModelForge is for the question that actually matters six months in: is it still making good predictions, or has the real-world data quietly drifted out from under it.

**Stack:** FastAPI, scikit-learn, Cloudflare Workers, Cloudflare D1, Next.js, Docker
