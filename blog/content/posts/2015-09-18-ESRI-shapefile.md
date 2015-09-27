---
title: "ESRI Shapefile"
created_at: Fri Sep 18 10:01:57 MDT 2015
kind: article
tags:
  - ESRI
  - ESRI_shapfile
  - shp_file
---


# [wikipedia](https://en.wikipedia.org/wiki/Shapefile) ESRI Shapefile

The shapefile format is a popular geospatial vector data format
for geographic information system (GIS) software. It is developed
and regulated by Esri as a (mostly) open specification for data
interoperability among Esri and other GIS software products.[1]
The shapefile format can spatially describe vector features: points,
lines, and polygons, representing, for example, water wells, rivers,
and lakes. Each item usually has attributes that describe it, such as
name or temperature.

The shapefile format is a digital vector storage format for storing
geometric location and associated attribute information. This format
lacks the capacity to store topological information. The shapefile format
was introduced with ArcView GIS version 2 in the early 1990s. It is now
possible to read and write geographical datasets using the shapefile
format with a wide variety of software.

The shapefile format is simple because it can store the primitive
geometric data types of points, lines, and polygons. Shapes
(points/lines/polygons) together with data attributes can create
infinitely many representations about geographic data. Representation
provides the ability for powerful and accurate computations.

The term "shapefile" is quite common, but is misleading since the format
consists of a collection of files with a common filename prefix, stored in
the same directory. The three mandatory files have filename extensions
.shp, .shx, and .dbf. The actual shapefile relates specifically to
the .shp file, but alone is incomplete for distribution as the other
supporting files are required. Legacy GIS software may expect that the
filename prefix be limited to eight characters to conform to the DOS 8.3
filename convention, though modern software applications accept files
with longer names.


#### Mandatory files 

* .shp — shape format; the feature geometry itself
* .shx — shape index format; a positional index of the feature geometry to allow seeking forwards and backwards quickly
* .dbf — attribute format; columnar attributes for each shape, in dBase IV format


#### [esri.com/library pdf](https://www.esri.com/library/whitepapers/pdfs/shapefile.pdf) ESRI Shapefile Technicals


#### [GeospatialPython/pyshp](https://github.com/GeospatialPython/pyshp)  library reads and writes ESRI Shapefiles

# shp libraries

## pyshp

https://pypi.python.org/pypi/pyshp


## spatialnetworks/shp-ruby

https://github.com/spatialnetworks/shp-ruby

# ruby sqlite

## sequel

http://sequel.jeremyevans.net/

# ruby georuby

https://github.com/nofxx/georuby

