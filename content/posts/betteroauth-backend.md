---
title: "BetterOAuth Backend"
date: "2026-03-05"
excerpt: "A TypeScript OAuth backend built on better-auth and Drizzle, containerized and ready to deploy."
tags: ["Auth"]
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/BetterOAuth-Backend" }]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/f599fac9-60ca-4712-9cc5-8a6f47f5a8b7.png"
---

BetterOAuth Backend handles the server side of OAuth login: authentication routes, protected routes, and schema-managed migrations via Drizzle Kit. It's built in TypeScript, ships with a Dockerfile, and pairs with the BetterOAuth UI frontend.

**Why:** Wanted to actually understand the different types of login flows and how OAuth works under the hood, rather than just dropping a library in and trusting it.

**Stack:** TypeScript, better-auth, Drizzle ORM, Docker
