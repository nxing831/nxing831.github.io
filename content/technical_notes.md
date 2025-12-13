---
layout: blank.njk
---

# notes

in progress -- moving my math notes slowly.

some expository papers and math notes that i've written:

- [an expository paper on bayesian learning with stochastic gradient langevin dynamics](/math_notes/SGLD.pdf), introduced in 2011 by welling and teh
    - i really love the connection between the hamiltonian monte carlo setup and stochastic differential equations, so most of my writing is setup and background reference. trying to emphasize different views of langevin dynamics and what it means for the algorithm to transition to it. less focus on the later half of the paper, which focuses on experiments and some analysis on the nature of the posterior sampling.
    - [original paper](https://www.stats.ox.ac.uk/~teh/research/compstats/WelTeh2011a.pdf)

- [an expository paper on random smoothing regularization in kernel gradient descent](/math_notes/kernel_paper.pdf), introduced in the JMLR 2023 by ding, *et al.* 
    - i wrote this as a final paper in my advanced probability class and it was unfortunately a terribly devious process. the concept is very interesting; i spent most of my time trying to add in all the intro-level topics needed to synthesize the main idea. but everything fell apart into terrible asymptotic analysis and i ended up copying so much LaTeX i almost died.
    - [original paper](https://jmlr.org/papers/volume25/23-0580/23-0580.pdf) 