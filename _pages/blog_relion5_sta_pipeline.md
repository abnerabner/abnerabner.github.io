---
layout: default
title: "RELION 5 STA pipeline"
permalink: /blogs/relion5-sta/
author_profile: false
---

{: .notice--info}
This is a technical note based on my hands-on experience with the RELION 5 STA pipeline.
The content reflects practical observations rather than an official tutorial.

---

## Overview

Subtomogram averaging (STA) is a core method in cryo-electron tomography (cryoET)
for resolving macromolecular structures *in situ*.
RELION 5 introduces a redesigned STA pipeline that unifies alignment, refinement,
and optimisation under a consistent Bayesian framework.

This post summarises the **actual workflow**, **common failure modes**,
and **practical strategies** that I found useful.

---

## Pipeline structure

### 1. Import and preprocessing

At this stage, consistency in pixel size, tilt geometry, and CTF modelling
is more important than aggressive optimisation.

### 2. Particle picking and extraction

Extraction parameters define the signal-to-noise ratio of the entire pipeline.
Most downstream failures can be traced back to overly optimistic box sizes
or inconsistent sampling.

### 3. Alignment and refinement

A frequently encountered error is:
