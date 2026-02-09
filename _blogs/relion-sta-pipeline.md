---
title: "RELION 5 STA pipeline"
image: /images/blogs/relion-sta-pipeline/relion5-cover.jpg
date: 2026-02-08
layout: blog
---

This tutorial will guide you through the entire Subtomogram Averaging (STA) workflow using RELION 5.


## Prerequisites
{: #prerequisites}

Before starting, ensure you have:
- RELION 5.0 or later installed
- A dataset of tilt-series images
- Sufficient computational resources (GPU recommended)

## Step 1: Import Data
{: #step1}

First, import your tilt-series data into RELION:

    relion_import --i "Movies/*.tif" --odir Import/ --ofile movies.star

## Step 2: Motion Correction
{: #step2}

Run motion correction to align frames within each movie:

    relion_motioncorr --i movies.star --o MotionCorr/ --gpu 0

## Step 3: CTF Estimation
{: #step3}

Estimate the Contrast Transfer Function parameters:

    relion_ctffind --i MotionCorr/corrected_micrographs.star --o CtfFind/

## Step 4: Tilt-Series Alignment
{: #step4}

Align the tilt-series using fiducial markers or patch tracking:

    relion_tiltalign --i CtfFind/micrographs_ctf.star --o AlignTilt/

## Step 5: Tomogram Reconstruction
{: #step5}

Reconstruct 3D tomograms:

    relion_tomo_reconstruct --i AlignTilt/tilt_series.star --o Tomograms/

## Step 6: Particle Picking
{: #step6}

Pick particles from reconstructed tomograms.

## Step 7: Subtomogram Averaging
{: #step7}

Iterative refinement including:
1. Initial model generation
2. 3D classification
3. High-resolution refinement
4. Post-processing

## Results
{: #results}

After completing the pipeline, you should obtain a high-resolution 3D reconstruction.

## References
{: #references}

- [RELION Documentation](https://relion.readthedocs.io)
