---
title: "RELION 5 STA pipeline"
image: /images/blogs/relion5-cover.jpg
date: 2026-02-08
layout: blog
---

This tutorial will guide you through the entire Subtomogram Averaging (STA) workflow using RELION 5.

## Prerequisites
{:#prerequisites}

Before starting, ensure you have:
- RELION 5.0 or later installed
- A dataset of tilt-series images
- Sufficient computational resources (GPU recommended)

## Step 1: Import Data
{:#step1}

First, import your tilt-series data into RELION:

```bash
relion_import --i "Movies/*.tif" --odir Import/ --ofile movies.star
