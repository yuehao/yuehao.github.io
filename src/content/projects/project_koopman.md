---
title: "ML Model for Nonlinear Beam Dynamics"
description: "Apply machine learning to find transformations for rotation-based coordinate systems in nonlinear beam dynamics analysis."
category: "Data Driven Modeling"
tags: ["Koopman Operator", "Machine Learning", "Beam Dynamics"]
image: "/images/projects/koopman_network.png"
status: "active"
order: 4
---

## Overview

This project applies the **Koopman operator** framework to beam dynamics. The central idea is to lift the nonlinear particle motion in phase space into a higher-dimensional linear space of observables, where the dynamics become a linear (and thus tractable) evolution.

## The Koopman Framework

For a nonlinear dynamical system $x_{n+1} = F(x_n)$, the Koopman operator $\mathcal{K}$ acts on scalar observables $g$ as:

$$(\mathcal{K}\, g)(x) = g(F(x))$$

This infinite-dimensional linear operator can be approximated by a finite matrix using data-driven techniques such as:

- **Dynamic Mode Decomposition (DMD)**
- **Extended DMD (EDMD)** with hand-crafted or learned dictionary functions
- **Deep learning** to discover optimal observable embeddings

## Application to Accelerators

By learning a Koopman representation from particle tracking data, we can:

- Predict long-term beam stability without running expensive full simulations
- Identify dominant modes of beam motion
- Design controllers that exploit the linear structure of the lifted space

## Current Work

We are developing neural network architectures that jointly learn the lifting map and the Koopman matrix, trained on tracking data from JuTrack. The resulting models generalize well to operating conditions not seen during training.
