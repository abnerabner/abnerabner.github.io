---
layout: single
title: "RELION 5 STA pipeline: workflow, notes and common pitfalls"
permalink: /blogs/relion5-sta/
author_profile: true
---

## Background

Subtomogram averaging (STA) is a core method in cryo-electron tomography (cryoET) for resolving
high-resolution structures of macromolecular complexes *in situ*.
RELION 5 introduces a redesigned STA pipeline that unifies alignment, refinement, and optimisation
under a consistent Bayesian framework.

In this note, I summarise my practical experience running the RELION 5 STA pipeline,
focusing on **what works well**, **what easily breaks**, and **how to debug common problems**.

---

## Overall workflow in RELION 5 STA

A typical RELION 5 STA workflow consists of the following steps:

1. Import tomograms and metadata  
2. Particle (or filament) picking  
3. Subtomogram extraction  
4. Initial alignment and averaging  
5. Refinement and optimisation  
6. Cleanup and particle selection  

Although the pipeline appears linear, several steps are **iterative** and require
manual inspection.

---

## Subtomogram extraction

Subtomogram extraction defines the signal-to-noise ratio of the entire pipeline.

Key parameters that require attention:

- **Box size**  
  Should comfortably enclose the target structure, with sufficient margin.
- **Pixel size consistency**  
  Mixing tomograms with different pixel sizes requires careful rescaling.
- **CTF handling**  
  Incorrect amplitude contrast or defocus ranges will severely limit convergence.

In my experience, most downstream failures can be traced back to suboptimal extraction settings.

---

## Alignment and refinement

During alignment, RELION optimises particle poses by maximising the posterior probability
given the current reference.

A common error message at this stage is:
