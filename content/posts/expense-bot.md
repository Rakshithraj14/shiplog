---
title: "Telegram Expense Bot"
date: "2026-02-05"
excerpt: "A Telegram bot that tracks income and expenses from natural language messages balances, summaries, and month-over-month comparisons included."
tags: ["Backend", "Tooling"]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/72bb158c-14e6-4d11-a2f5-323932718df9.jpg"
coverImagePosition: "top"
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/expense-bot" }, { label: "Try it on Telegram", url: "https://t.me/asuratrackerbot" }]
---

A Nami-themed Telegram bot for logging expenses without opening a spreadsheet just message it. It parses amount, category, and date from natural language, then answers questions like current balance, monthly summaries, top spending category, and month-over-month comparisons.

Transactions and user profiles are stored in Postgres (Supabase), with a Docker-based publish workflow in GitHub Actions.

**Why:** Opening a spreadsheet every time to log an expense was too much friction this made tracking as simple, easy, and low-effort as sending a message.

**Stack:** TypeScript, Bun, Postgres (Supabase), Telegram Bot API, Docker
