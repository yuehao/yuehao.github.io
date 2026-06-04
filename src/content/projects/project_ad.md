---
title: "Auto-Diff in Beam Tracking"
description: "Development of JuTrack code, focusing on automatic differentiation for self-field calculations and gradient-based optimization."
category: "Computation"
tags: ["Julia", "Auto-Differentiation", "JuTrack", "TrackPad"]
status: "active"
order: 3
image: "/images/projects/jutrack.jpg"
links:
  - label: "JuTrack on GitHub"
    href: "https://github.com/MSU-Beam-Dynamics/JuTrack.jl"
  - label: "TrackPad on GitHub"
    href: "https://github.com/MSU-Beam-Dynamics/TrackPad.jl"
---

## Overview

[JuTrack](https://github.com/MSU-Beam-Dynamics/JuTrack.jl) is a Julia-based particle tracking code developed by our group that exploits *automatic differentiation* (AD) to compute derivatives of beam observables with respect to lattice parameters — without finite-difference approximations.  We are also extending the functionality of integrating machine learning representation for complicated beam dynamics and machine components, in a new package [TrackPad] (https://github.com/MSU-Beam-Dynamics/TrackPad.jl)

## Why Automatic Differentiation?

Traditional accelerator codes compute Jacobians and higher-order maps via finite differences, which requires proper choice of finite steps, inaccurate at machine precision, and cannot scale to large parameter spaces. AD provides:

- **Exact derivatives** through forward/reverse mode differentiation
- **Easy Gradient-based optimization** of dynamic aperture, beam emittance, and luminosity
- **Sensitivity analysis** for error studies and tolerancing
- **Compatibility with ML frameworks** such as Lux.jl and Flux.jl

## Capabilities

- 6D symplectic tracking with thin- and thick-lens elements
- Space charge and collective effects via AD-differentiable field solvers
- Native GPU acceleration through CUDA.jl (on-going)
- Easy integration with Julia's optimization ecosystem

## Applications

- Dynamic aperture optimization under realistic error models
- AD enabled Space charge modeling 
- Automated lattice correction algorithms
- Including physics-informed neural networks with measured/simulated data
