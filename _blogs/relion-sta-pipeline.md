---
layout: default
title: "RELION 5 STA pipeline"
author_profile: false
date: 2026-02-08
image: /images/blogs/relion-sta-pipeline/relion5-cover.jpg
---

This tutorial will guide you through the entire Subtomogram Averaging (STA) workflow using RELION 5.

## Prerequisites

Before starting, ensure you have:
- RELION 5.0 or later installed
- A dataset of tilt-series images
- Sufficient computational resources (GPU recommended)

## Step 1: Import Data

First, import your tilt-series data into RELION:

```bash
relion_import --i "Movies/*.tif" --odir Import/ --ofile movies.star
