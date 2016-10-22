---
title: "OpenStreetmap on Garmin"
created_at: Tue Sep 27 04:49:23 MDT 2016
kind: article
tags:
  - gps
  - handheld_gps
  - openstreetmap
  - garmin_etrex_vista_hcx
  - mkgmap
---

# <a href="http://daveh.dev.openstreetmap.org/garmin/Lambertus/latest/" target="_blank">daveh US img</a>

wget -O gmapsupp.img http://daveh.dev.openstreetmap.org/garmin/Lambertus/latest/8000MB-lon_-170.68_to_161.54.2016-09-20.gmapsupp.img

# Mkgmap

## <a href="http://wiki.openstreetmap.org/wiki/Mkgmap" target="_blank">openstreetmap.org/wiki/Mkgmap</a>

Mkgmap is a command line utility that converts OpenStreetMap data into
vector maps that can be loaded onto a Garmin GPS device. It does the
conversion in one step without depending on any other program. Mkgmap
only supports the OSM map data format.

### Mkgmap main features

<ul>
  <li>Creates maps for Garmin GPS devices using OSM data</li>
  <li>Full control which OSM data is integrated into the map (style system)</li>
  <li>Full control how POIs, streets and all other elements are displayed (TYP file compiler)</li>
  <li>Full address search support</li>
  <li>Routing support</li>
  <li>Many options for fine control over the map creation process</li>
</ul>

## <a href="http://www.mkgmap.org.uk/" target="_blank">mkgmap.org.uk App Site</a>

### Features

<ul>
  <li>Generates a map directly from a file saved from JOSM or from an extract of the main OSM planet file.</li>
  <li>Converts several .osm files in one run of the program to create a map tile set.</li>
  <li>Creates a .tdb file and an overview map that can be used to view the maps in MapSource or QLandkarte.</li>
  <li>Creates a gmapsupp.img file that can be copied directly to an SD card.</li>
  <li>Can also combine previously produced .img files into one gmapsupp.img file.</li>
  <li>Create a .tdb and overview map from previously produced .img files.</li>
  <li>The mapping between OSM features features in the Garmin map can be customised.</li>
  <li>Transliteration of characters to ascii where that is possible to enable viewing on low end devices or for international maps.</li>
  <li>Character set can be specified for display on capable GPS devices.</li>
  <li>Control over the zoom levels that any feature appears at.</li>
</ul>

##  <a href="https://wiki.openstreetmap.org/wiki/Mkgmap/help/How_to_create_a_map" target="_blank">openstreetmap.org mkgmap tutorial</a>


# <a href="http://download.geofabrik.de/north-america.html" target="_blank">Geofabrik North America</a>

## Colorado

<a href="http://download.geofabrik.de/north-america/us/colorado-latest.osm.pbf" target="_blank">Colorado</a>

<pre>
mkgmap --input-file=colorado-latest.osm.pbf --gmapsupp
</pre>

## Kansas

iowa

minnesota

montana

nebraska

north dakota

south dakota

wyoming

# garmin.openstreetmap.nl.

You successfully requested a Garmin map on http://garmin.openstreetmap.nl.

Below you find a link to a webpage that shows the current status of your request.

Tue Sep 27 10:07:12 MDT 2016

<a href="http://osm2.pleiades.uni-wuppertal.de/garmin/status.php?id=ff1bd5743de6548e937ca1499c2276cb" target="_blank">map status</a>

Your request for a Garmin map on garmin.openstreetmap.nl is ready.

The server has generated four different configurations of your map:
<pre>
 _windows.exe = Installer for Garmin BaseCamp/MapSource (Windows).
 _macosx.zip = Installer for Garmin BaseCamp/RoadTrip (Mac OSX)
 _gmapsupp.zip = Combined image for direct manual placement on the GPS device (gmapsupp.img)
 _tiles.zip = A zip file containing the tiles in the request, especially useful for Linux users (e.g. QLandkarte)
</pre>

<pre>
[TXT] tiles.txt                    2016-09-27 18:09  1.7K  
Contains a list of tile numbers that are used for the maps in this directory.
wget http://osm2.pleiades.uni-wuppertal.de/garmin/generic_new/20-09-2016/597411137a36fb2c12dfb19dfd89b1c8/tiles.txt

[   ] osm_generic_new_tiles.zip    2016-09-27 18:15  745M  
Compressed file that contains the tiles and overview map. This is useful for applications like Qlandkarte and Linux users.
wget http://osm2.pleiades.uni-wuppertal.de/garmin/generic_new/20-09-2016/597411137a36fb2c12dfb19dfd89b1c8/osm_generic_new_tiles.zip

[   ] osm_generic_new_gmapsupp.zip 2016-09-27 18:14  701M  
Compressed file that contains a single image that can be placed directly onto the SD-card of the GPS.
wget http://osm2.pleiades.uni-wuppertal.de/garmin/generic_new/20-09-2016/597411137a36fb2c12dfb19dfd89b1c8/osm_generic_new_gmapsupp.zip

[   ] 2000.typ                     2016-04-09 16:54   14K  
The Garmin TYP file used for this map.
wget http://osm2.pleiades.uni-wuppertal.de/garmin/generic_new/20-09-2016/597411137a36fb2c12dfb19dfd89b1c8/2000.typ
</pre>

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
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
</math>
-->
