---
layout: blank.njk
---

# notes

in progress -- moving my math notes slowly.

some expository papers and math notes that i've written:

- [an expository paper on bayesian learning with stochastic gradient langevin dynamics](/math_notes/SGLD.pdf), introduced in 2011 by welling and teh
    - i really love the connection between the hamiltonian monte carlo setup and stochastic differential equations, so most of my writing is setup and background reference. trying to emphasize different views of langevin dynamics and what it means for the algorithm to transition to it. less focus on the second half of the paper, which focuses on experiments and some analysis on the nature of the posterior sampling. also wrote this under time crunch, so not as much detail on langevin equation as i'd like.
    - [original paper](https://www.stats.ox.ac.uk/~teh/research/compstats/WelTeh2011a.pdf)

- [an expository paper on random smoothing regularization in kernel gradient descent](/math_notes/kernel_paper.pdf), introduced in the JMLR 2023 by ding, et al.
    - i wrote this as a final paper in my advanced probability class and the unfortunate labor intensity of LaTeX took over the entire thing. the pedagogical value is very low, and i would recommend simply reading the JMLR paper. 
    - [original paper](https://jmlr.org/papers/volume25/23-0580/23-0580.pdf) 