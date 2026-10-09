---
title: "LinkForge"
date: "2026-09-22"
excerpt: "A self-hosted downloader for video, audio, subtitles, and metadata from 1800+ sites preview first, nothing kept on the server."
tags: ["Web", "Full-Stack"]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/10/1d2a38a5-0224-413e-a382-709b6bbe00df.png"
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/LinkForge" }, { label: "Docker Hub", url: "https://hub.docker.com/r/rakshithraj/linkforge" }]
---

Paste a link, see its title, thumbnail, length, and the resolutions it actually has, then pick video, audio, or both at whatever quality and format you want. LinkForge is a single-page FastAPI app wrapping yt-dlp and ffmpeg across 1800+ supported sites, with subtitles, auto captions, thumbnails, and info JSON as extra download options. Files stream straight to the browser and are deleted from the server right after no accounts, no database, nothing retained.

It ships as a Docker image with per-IP rate limits on previews and downloads, rejects anything but public http(s) links (so it can't be pointed at its own network), and pushes a tagged image to Docker Hub on every push to main via GitHub Actions.

**Why:** Every online downloader site is ad-choked, caps resolution behind a paywall, or won't show what you're actually getting until after you've downloaded it wanted something self-hosted that previews first and keeps nothing afterward.

**Stack:** FastAPI, yt-dlp, ffmpeg, Docker, GitHub Actions
