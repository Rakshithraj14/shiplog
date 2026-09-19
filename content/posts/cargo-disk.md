---
title: "cargo-disk"
date: "2026-09-16"
excerpt: "A zero-dependency Cargo subcommand that shows where your target/ directory went and cleans up only what's safe to delete."
tags: ["Tooling"]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/09/ba11e0f3-6b2b-4e81-aff2-13385c071976.png"
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/cargo-disk" }, { label: "View on crates.io", url: "https://crates.io/crates/cargo-disk" }]
---

`cargo disk` breaks down a Rust project's `target/` directory by profile, build artifact, and crate, then points at what's reclaimable. `--all` scans every Cargo project under a directory, `deps` flags potentially unused and outdated dependencies with an estimate of the space each would free, and `clean --incremental` deletes only the incremental caches rustc rebuilds on demand instead of nuking everything like `cargo clean`.

It has no dependencies of its own and is published on crates.io: `cargo install cargo-disk`.

**Why:** `target/` quietly eats tens of gigabytes across projects, and `cargo clean` is all-or-nothing wanted a tool that shows where the space went first and only removes what's safe to rebuild.

**Stack:** Rust, Cargo, crates.io
