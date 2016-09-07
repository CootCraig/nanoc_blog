---
title: "Marching Cubes"
created_at: Fri Sep  2 09:44:27 MDT 2016
kind: article
tags:
  - marching_cubes
---

#### <a href="http://paulbourke.net/geometry/polygonise/" target="_blank">paulbourke.net/geometry/polygonise</a>

This document describes an algorithm for creating a polygonal surface
representation of an isosurface of a 3D scalar field. A common name for
this type of problem is the so called "marching cubes" algorithm. It
combines simplicity with high speed since it works almost entirely on
lookup tables.

<a href="https://pypi.python.org/pypi/PyMCubes" target="_blank">python.org/pypi/PyMCubes</a> PyMCubes 0.0.6

<a href="https://github.com/pmneila/PyMCubes" target="_blank">pmneila/PyMCubes</a>

PyMCubes is an implementation of the marching cubes algorithm to extract
isosurfaces from volumetric data. The volumetric data can be given as a
three-dimensional NumPy array or as a Python function f(x, y, z). The
first option is much faster, but it requires more memory and becomes
unfeasible for very large volumes.

PyMCubes also provides a function to export the results of the marching
cubes as COLLADA (.dae) files. This requires the PyCollada library.

<a href="https://github.com/pycollada/pycollada" target="_blank">github pycollada</a>

<a href="https://github.com/mutantbob/blender-marching-cubes" target="_blank">mutantbob/blender-marching-cubes</a>

<a href="http://users.polytech.unice.fr/~lingrand/MarchingCubes/algo.html" target="_blank">~lingrand/MarchingCubes/algo.html</a>

<a href="http://www.vtk.org/Wiki/VTK/Examples/Cxx/Modelling/MarchingCubes" target="_blank">VTK/Examples/Cxx/Modelling/MarchingCubes</a>

<!--
html boilerplate
<a href="" target="_blank"></a>
<a name=""></a>
<img src="" width="400px">
<ul>
  <li></li>
</ul>
<pre>
</pre>
<pre><code>
</code></pre>
-->

