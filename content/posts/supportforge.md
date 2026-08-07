---
title: "SupportForge"
date: "2026-07-27"
excerpt: "A RAG-powered Telegram support bot that simulates its own incidents and customer personas to catch answer-quality regressions before real users do."
tags: ["AI/ML", "Backend"]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/4f91f1b4-d60d-482a-8980-28f8c0bb515b.jpg"
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/SupportForge" }, { label: "Try it on Telegram", url: "https://t.me/VITE_testingbot" }]
---

SupportForge is a Telegram bot that answers questions and takes document uploads (PDF/Markdown/text), running a LangGraph `retrieve → generate` workflow over a Qdrant vector store generation handled entirely by local Ollama models, no external LLM API in the loop.

What sets it apart from a typical RAG demo is the evaluation layer: every answer can be scored for faithfulness and hallucination (DeepEval) and context precision/recall (Ragas), automatically on a 👎 reaction or on demand via `/incident`. A nightly Celery Beat job and that same `/incident` command generates realistic customer messages across four personas (angry, confused, technical, scammer) against canned incidents like a payment gateway outage, runs them through the real pipeline, and reports the worst-scoring answers, so knowledge-base gaps or prompt regressions surface before a real user hits them.

**Why:** Wanted to build a support bot that's actually trained against real data and tested against realistic customer behavior not a demo that only ever answers one happy-path question well.

**Stack:** FastAPI, LangGraph, Qdrant, Ollama, Celery + Redis, Postgres, Prometheus + Grafana, Langfuse, DeepEval, Ragas
