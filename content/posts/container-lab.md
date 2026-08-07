---
title: "Container Lab"
date: "2026-07-19"
excerpt: "A FastAPI + SQLite products service optimized down to a ~121MB Docker image, with volume-backed persistence and a non-root runtime."
tags: ["Backend"]
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/container-lab" }]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/46a7e083-26bb-4287-b3cb-9a81fa63d464.png"
---

container-lab is a small products CRUD service built to explore how lean a Docker image can get without giving anything up. The API is FastAPI over SQLite, with a Swagger UI, a health check, and a full pytest suite.

The interesting part is the Dockerfile: a two-stage build on `python:3.12-alpine` that compiles wheels in a builder stage and ships only the resulting venv plus app code no compiler, no pip cache, no build tools in the final layer. The container runs as a non-root user, and a named volume keeps the SQLite file alive across restarts.

Final image size: **~121MB**.

**Why:** Every Docker image I'd built before came out huge. This was about actually learning how far you can shrink one down and how to keep data alive across container restarts using a volume instead of baking it into the image.

**Stack:** FastAPI, SQLAlchemy, SQLite, Docker (multi-stage, Alpine), pytest
