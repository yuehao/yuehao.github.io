---
title: "ML-based Control Methods"
description: "Model predictive control enabled by data-driven models for improved accelerator operation and optimization."
category: "Data Driven Modeling"
tags: ["MPC", "Control", "Machine Learning"]
status: "active"
image: "/images/projects/mpc_rfq.png"
order: 5
---

## Overview

Modern particle accelerators require real-time control of thousands of coupled parameters. Classical PID controllers and lookup tables cannot handle the complexity of multi-input, multi-output (MIMO) systems with highly nonlinear responses. This project develops **Data-0Driven Model Predictive Control (MPC)** methods powered by data-driven surrogate models.

## Model Predictive Control

MPC solves an online optimization problem at each control step:

$$\min_{u_0,\ldots,u_{N-1}} \sum_{k=0}^{N-1} \ell(x_k, u_k) + \ell_f(x_N)$$

subject to the system dynamics $x_{k+1} = f(x_k, u_k)$ and operational constraints. The key ingredient is a fast, accurate model $f$ — which we learn from data.

## Data-Driven Surrogate Models

We train surrogate models using:

- **Koopman-based linear predictors** for convex MPC formulations
- **LSTM** to handle time-delays in the system

## Accelerator Applications

- Lower-level RF control of RFQ, which has significant delays 
- Beam stablity control of hadron beam sources
- Beam halo management and loss prevention
- Adaptive tuning under drift and perturbations


