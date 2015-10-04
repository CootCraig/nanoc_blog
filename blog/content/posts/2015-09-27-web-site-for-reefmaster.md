---
title: "Web Site for Reefmaster"
created_at: Sun Sep 27 13:53:43 MDT 2015
kind: article
tags:
  - reefmaster
---

# Motivation

* Pen plots of Reefmaster user maps
* Processing data from Reefmaster

# Research

* Numpy / SciPy batch processing
* sidekiq
* Ruby Celluloid gems
* browser javascript ui

# JavaScript Geo Libraries

<a href="http://techslides.com/50-javascript-libraries-and-plugins-for-maps" target="_blank">50 JavaScript Libraries and Plugins for Maps</a>

## Leaflet

#### <a href="https://github.com/shramov/leaflet-plugins" target="_blank">Shramov Leaflet Plugins</a>

#### <a href="http://wiki.openstreetmap.org/wiki/Leaflet" target="_blank">Leaflet page on OpenStreetMap</a>

# PostGis

## <a href="http://postgis.net/docs/ST_MakeLine.html" target="_blank">ST_MakeLine</a>

ST_MakeLine — Creates a Linestring from point or line geometries.

* geometry ST_MakeLine(geometry set geoms);
* geometry ST_MakeLine(geometry geom1, geometry geom2);
* geometry ST_MakeLine(geometry[] geoms_array);

ST_MakeLine comes in 3 forms: a spatial aggregate that takes rows of
point-or-line geometries and returns a line string, a function that
takes an array of point-or-lines, and a regular function that takes two
point-or-line geometries. You might want to use a subselect to order
points before feeding them to the aggregate version of this function.

When adding line components a common node is removed from the output. 

## <a href="http://postgis.net/docs/ST_MakePolygon.html" target="_blank">ST_MakePolygon</a>

ST_MakePolygon — Creates a Polygon formed by the given shell. Input
geometries must be closed LINESTRINGS.  Synopsis

geometry ST_MakePolygon(geometry linestring);

geometry ST_MakePolygon(geometry outerlinestring, geometry[] interiorlinestrings);

Creates a Polygon formed by the given shell. Input geometries must be
closed LINESTRINGS. Comes in 2 variants.

Variant 1: takes one closed linestring.

Variant 2: Creates a Polygon formed by the given shell and array
of holes. You can construct a geometry array using ST_Accum or the
PostgreSQL ARRAY[] and ARRAY() constructs. Input geometries must be
closed LINESTRINGS.

## <a href="http://postgis.net/docs/ST_Contains.html" target="_blank">ST_Contains</a>

ST_Contains — Returns true if and only if no points of B lie in the
exterior of A, and at least one point of the interior of B lies in the
interior of A.

boolean ST_Contains(geometry geomA, geometry geomB);



## <a href="http://postgis.net/docs/reference.html" target="_blank">Chapter 8. PostGIS Reference</a>





