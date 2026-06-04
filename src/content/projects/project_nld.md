---
title: "NL Dynamics w. Diffeomorphism"
description: "Explore nonlinear dynamics properties without tracking. Novel methods using diffeomorphism maps to understand beam dynamics in storage rings."
category: "Dynamics"
tags: ["Nonlinear Dynamics", "Diffeomorphism", "Storage Rings"]
status: "active"
image: "/images/projects/cm_6d.png"
order: 1
---

## Overview

This project develops new analytical tools to study nonlinear beam dynamics in storage rings without relying on particle tracking simulations. By leveraging diffeomorphism maps — smooth, invertible coordinate transformations — we can characterize the topology of phase space and predict dynamic aperture from first principles.

## Motivation

Particle tracking is a traditional method for determine the long-term stability of a ring accelerator.  However, it is also computationally expensive and miss the physics interpretation of non-stable motions.  Diffeomorphism-based approaches allow us to:

- Identify invariant tori and chaotic regions analytically
- Apply the KAM (Kolmogorov–Arnold–Moser) theorem to assess stability
- Faster optimizing lattice designs for maximum dynamic aperture

## Methods

- Construction of square matrix near fixed points
- Computation of approximated action-angle variables 
- Iterative method to get precise frequency and orbit diffeomorphism to a rigid rotation
- Infer topology using the iterative results

## Extensions

- Expand the method from 4-D to 6-D or even higher dimensions
- Include self-field nonlinearity, such as beam-beam effect and space charge effects

