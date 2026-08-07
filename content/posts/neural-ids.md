---
title: "Neural IDS: Real-Time DDoS Detection"
date: "2025-05-09"
excerpt: "A hybrid CNN-LSTM intrusion detection system that flags DDoS attacks in real time, with Prometheus and Grafana wired in for monitoring."
tags: ["AI/ML", "Security"]
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/Neural-IDS" }]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/d31ecec4-6e09-49de-b0a7-1a9381800395.png"
---

Neural IDS is a deep learning intrusion detection system trained on the CICIDS DDoS subset, using a hybrid CNN-LSTM model that processes 10 time steps of 78 features per input. A Flask API serves predictions, Prometheus scrapes the metrics, and Grafana turns them into a real-time dashboard you can actually watch during an attack.

Built and trained for educational and research purposes not a production security tool.

**Why:** Wanted experience working with real static, labelled data training against CICIDS instead of a toy dataset. Grafana can alert straight to Telegram when a prediction crosses a threshold, so wiring that up became part of it too.

**Stack:** Python, TensorFlow/Keras, Flask, Prometheus, Grafana
