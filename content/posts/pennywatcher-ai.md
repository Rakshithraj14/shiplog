---
title: "PennyWatcher AI"
date: "2025-11-27"
excerpt: "An algorithmic trading system with multi-indicator strategies, paper trading, a REST API, and a live dashboard."
tags: ["AI/ML", "Finance"]
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/pennywatcher-ai" }]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/09525252-8c2a-48c1-8989-2be68ec5ea9c.png"
---

PennyWatcher is a stock tracker that goes well past "fetch a price": it computes RSI, MACD, Bollinger Bands, SMA, and EMA, combines them into five selectable strategies (with a confidence-scored combined strategy as the default), and paper-trades a virtual $100,000 portfolio so none of it touches real money.

Signal changes go out over Telegram, a REST API exposes candles/indicators/signals/portfolio data, and a web dashboard charts all of it live. Everything's explicitly framed as a learning project the README is upfront that the strategies will likely underperform real markets.

**Why:** Wanted a personal tool for actually tracking and reasoning about penny stocks, instead of eyeballing charts by hand.

**Stack:** Python, PostgreSQL, Flask/REST API, Telegram Bot API
