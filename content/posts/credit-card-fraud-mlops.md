---
title: "Credit Card Fraud Detection MLOps"
date: "2026-07-17"
excerpt: "An end-to-end MLOps pipeline for credit card fraud detection DVC for data versioning, MLflow for experiment tracking, and a FastAPI serving layer, all wired into CI."
tags: ["AI/ML", "MLOps"]
links: [{ label: "View on GitHub", url: "https://github.com/Rakshithraj14/credit-card-fraud-mlops" }]
coverImage: "https://pub-4b8d052eb02f4c1b8bb10f64d495b0f3.r2.dev/2026/08/abf4b2fc-fffb-4bd3-8c36-75c37f043217.png"
---

This project takes fraud detection past the notebook stage into something closer to production. It trains a `RandomForestClassifier` on the classic (and severely imbalanced 492 fraud cases out of 284,807 transactions) Kaggle credit card dataset, favoring precision/recall/PR-AUC over raw accuracy given the class imbalance.

Data and model artifacts are versioned with DVC instead of committed to git, experiment runs are logged to MLflow, and a FastAPI service exposes `/predict` for inference. GitHub Actions runs the test suite and a Docker build on every push using a synthetic placeholder model in CI so the pipeline doesn't depend on a private DVC remote.

**Why:** Everyone trains a model and calls it done. I wanted to go further build the full pipeline around it: an API to serve it, and DVC to actually version the data and model artifacts.

**Stack:** scikit-learn, MLflow, DVC, FastAPI, Docker, GitHub Actions
