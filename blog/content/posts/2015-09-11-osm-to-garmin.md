---
title: "Garmin map from OSM"
created_at: Fri Sep 11 09:24:16 MDT 2015
kind: article
tags:
  - mapping
  - garmin_map
---

http://download.geofabrik.de/north-america/us/colorado.html

http://download.geofabrik.de/north-america/us/colorado-latest.osm.pbf

colorado-latest.osm.pbf, suitable for Osmium, Osmosis, imposm, osm2pgsql,
mkgmap, and others. This file was last modified 13 hours ago and contains
all OSM data up to 2015-09-10T21:23:02Z. File size: 133 MB; MD5 sum:
24e8a870804bc3fc1bd4b8e275179150.

# mkgmap program - OSM to Garmin

* http://www.mkgmap.org.uk/download/mkgmap.html
* http://www.mkgmap.org.uk/download/mkgmap-r3641.zip
* http://www.mkgmap.org.uk/doc/index.html
* http://www.mkgmap.org.uk/doc/options

# mkgmap tile splitter

* http://www.mkgmap.org.uk/doc/splitter.html
* http://www.mkgmap.org.uk/download/splitter.html
* http://www.mkgmap.org.uk/download/splitter-r427.zip

The format used for Garmin maps has, in effect, a maximum size, meaning
that you have to split an .osm file that contains large well mapped
regions into a number of smaller tiles. This program does that. There
are at least two stages of processing required. The first stage is to
calculate what area each tile should cover, based on the distribution of
nodes. The second stage writes out the nodes, ways and relations from
the original .osm file into separate smaller .osm files, one for each
area that was calculated in stage one. With option keep-complete=true,
two additional stages are used to avoid broken ways and polygons.

The two most important features are:

* Variable sized tiles so that you don't get a large number of tiny files.
* Tiles join exactly with no overlap or gaps.


# pre processed boundaries

http://www.mkgmap.org.uk/news/2013/01/10/creating-pre-processed-boundaries

http://wiki.openstreetmap.org/wiki/Mkgmap/help/options#Using_preprocessed_bounds_for_the_address_index

osmctools Debian package, to install run: apt install osmctools

* osmconvert
* osmfilter

~~~~~~~~~~~~~~
$ osmconvert europe.osm.pbf -o=europe.o5m
$ osmfilter europe.o5m \
    --keep-nodes= \
    --keep-ways-relations="boundary=administrative =postal_code postal_code=" \
    -o=europe-boundaries.o5m
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
osmconvert colorado-20150911.osm.pbf -o=colorado-20150911.o5m

osmfilter colorado-20150911.o5m --keep-nodes= --keep-ways-relations="boundary=administrative =postal_code postal_code=" -o=colorado-20150911-boundaries.o5m
~~~~~~~~~~~~~~

Create Preprocessed Bounds

mkgmap itself is used to create preprocessed boundary files. For example:

~~~~~~~~~~~~~~
java -cp mkgmap.jar \
    uk.me.parabola.mkgmap.reader.osm.boundary.BoundaryPreprocessor \
    <inputfile> \
    <boundsdirectory>
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
<inputfile> is the file created by osmfilter or osmosis. In
our example, it would be either europe-boundaries.o5m or
europe-boundaries.osm.pbf. <boundsdirectory> contains the
preprocessed boundary files created by mkgmap. If the directory
does not yet exist, it will be created. If you're following
Mkgmap/help/How_to_create_a_map#Walkthrough, the directory should be
called "bounds".
~~~~~~~~~~~~~~

http://www.cferrero.net/maps/mkgmap_tiddlywiki.html

    mkgmap_options▾

--createboundsfile

Usage: --createboundsfile=file

Description: Reads the boundary information contained in file
and creates a pre-processed set of bounds files, by default in a
directory called bounds unless the --bounds option is also set. You
would use this if you want to use boundary information to populate
addresses in your map. The boundary information in file can be in
OSM or PBF format. You could either use a regular OSM extract,
or preferentially extract just the boundary information from an
OSM extract using osmosis. The latter uses a lot less memory. See
http://www.mkgmap.org.uk/pipermail/mkgmap-dev/2011q2/011199.html for
more details.

See also --bounds, --location-autofill


http://wiki.openstreetmap.org/wiki/Mkgmap/help/How_to_create_a_map

Finally, you can use mkgmap to compile the tiles and bounding information into something comprehensible by a Garmin GPS.

~~~~~~~~~~~~~~
$ java -jar mkgmap.jar \
    --route \
    --add-pois-to-areas \
    --bounds=bounds \
    --index \
    --gmapsupp \
    6324*.osm.pbf
~~~~~~~~~~~~~~

This creates several files, including the coveted gmapsupp.img file. Copy
this file onto the SD card used by the GPS. The details are listed here,
but here's a quick refresher:

* The SD card should be formatted as FAT32.
* There should be a folder called "Garmin" at the root of the SD card.
* The gmapsupp.img goes into the "Garmin" folder.

Warning -
	Do not copy gmapsupp.img to the GPS's internal memory! You can
	brick your GPS!

Information -
	If you get an "OutOfMemoryError: java heap space" error,
	you'll need to increase the available memory by using the -Xmx
	parameter. (eg. java -Xmx2000M -jar mkgmap.jar ...)

