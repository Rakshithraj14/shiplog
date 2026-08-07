---
title: "SIWE Authentication Demo"
date: "2025-07-15"
excerpt: "A Sign-In with Ethereum (EIP-4361) demo using Wagmi and RainbowKit for wallet-based authentication."
tags: ["Blockchain"]
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/siwe" }]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/8f0154e4-4c67-4ecc-9f6c-39cec18c24c4.png"
---

A working demo of Sign-In with Ethereum (EIP-4361): connect a wallet through RainbowKit, sign a nonce-based challenge via Wagmi, and get authenticated without a password in sight. Signature verification is mocked for the demo, but the nonce/replay-protection flow is real.

**Why:** Another login-flow exploration this time wallet-based instead of OAuth, to see how Sign-In with Ethereum actually compares to a normal auth flow.

**Stack:** React, TypeScript, Vite, Wagmi, RainbowKit, SIWE, Tailwind CSS
