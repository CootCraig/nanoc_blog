---
title: "Qmapshack"
created_at: Tue Sep 27 06:01:11 MDT 2016
kind: article
tags:
  - gps
  - handheld_gps
  - openstreetmap
  - garmin_etrex_vista_hcx
  - garmin_img
  - qmapshack
---

# Build from source

<a href="https://bitbucket.org/maproom/qmapshack/downloads" target="_blank">qmapshack/downloads</a>

<a href="https://bitbucket.org/maproom/qmapshack/wiki/DocGetQMapShack#markdown-header-from-source" target="_blank">Build from source</a>

### To compile QMapShack, you need to have installed:

<ul>
  <li>Qt5 (at least 5.4)</li>
  <li>GDAL</li>
  <li>Proj4</li>
  <li>Routino (at least 3.0)</li>
  <li>CMake/Make</li>
  <li>a C++ compiler (supporting C++11)</li>
</ul>


#### get prerequisites

<pre>
sudo apt-get install libpoppler-qt5-dev pyqt5-dev pyqt5-dev-tools libpoppler-qt5-1 libpoppler-dev python3-sip-dev python-sip-dev python3-pyqt5 sip-dev libqt5designer5 libqt5help5 sip-py3api-11.1 python3-sip sip-dev libqt5clucene5
</pre>

<pre>
wget https://bitbucket.org/maproom/qmapshack/downloads/qmapshack-1.7.1.tar.gz
</pre>

### cmake attempt

<pre>
➜  qmapshack git:(compile) ✗ cd build_QMapShack 
➜  build_QMapShack git:(compile) ✗ cmake ../qmapshack-1.7.1 

-- The C compiler identification is GNU 4.9.2
-- The CXX compiler identification is GNU 4.9.2
-- Check for working C compiler: /usr/bin/cc
-- Check for working C compiler: /usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++
-- Check for working CXX compiler: /usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Performing Test WITH_FPIC
-- Performing Test WITH_FPIC - Success
-- Looking for stdint.h
-- Looking for stdint.h - found
-- Looking for inttypes.h
-- Looking for inttypes.h - found
-- Looking for byteswap.h
-- Looking for byteswap.h - found
-- Check if the system is big endian
-- Searching 16 bit integer
-- Looking for sys/types.h
-- Looking for sys/types.h - found
-- Looking for stddef.h
-- Looking for stddef.h - found
-- Check size of unsigned short
-- Check size of unsigned short - done
-- Using unsigned short
-- Check if the system is big endian - little endian
-- Looking for arc4random
-- Looking for arc4random - not found

CMake Warning at src/CMakeLists.txt:17 (find_package):
  By not providing "FindQt5Script.cmake" in CMAKE_MODULE_PATH this project
  has asked CMake to find a package configuration file provided by
  "Qt5Script", but CMake did not find one.

  Could not find a package configuration file provided by "Qt5Script" with
  any of the following names:

    Qt5ScriptConfig.cmake
    qt5script-config.cmake

  Add the installation prefix of "Qt5Script" to CMAKE_PREFIX_PATH or set
  "Qt5Script_DIR" to a directory containing one of the above files.  If
  "Qt5Script" provides a separate development package or SDK, be sure it has
  been installed.


CMake Warning at src/CMakeLists.txt:19 (find_package):
  By not providing "FindQt5WebKitWidgets.cmake" in CMAKE_MODULE_PATH this
  project has asked CMake to find a package configuration file provided by
  "Qt5WebKitWidgets", but CMake did not find one.

  Could not find a package configuration file provided by "Qt5WebKitWidgets"
  with any of the following names:

    Qt5WebKitWidgetsConfig.cmake
    qt5webkitwidgets-config.cmake

  Add the installation prefix of "Qt5WebKitWidgets" to CMAKE_PREFIX_PATH or
  set "Qt5WebKitWidgets_DIR" to a directory containing one of the above
  files.  If "Qt5WebKitWidgets" provides a separate development package or
  SDK, be sure it has been installed.


CMake Warning at src/CMakeLists.txt:20 (find_package):
  By not providing "FindQt5LinguistTools.cmake" in CMAKE_MODULE_PATH this
  project has asked CMake to find a package configuration file provided by
  "Qt5LinguistTools", but CMake did not find one.

  Could not find a package configuration file provided by "Qt5LinguistTools"
  with any of the following names:

    Qt5LinguistToolsConfig.cmake
    qt5linguisttools-config.cmake

  Add the installation prefix of "Qt5LinguistTools" to CMAKE_PREFIX_PATH or
  set "Qt5LinguistTools_DIR" to a directory containing one of the above
  files.  If "Qt5LinguistTools" provides a separate development package or
  SDK, be sure it has been installed.


CMake Error at cmake/Modules/FindGDAL.cmake:85 (message):
  Could not find GDAL
Call Stack (most recent call first):
  src/CMakeLists.txt:25 (find_package)


-- Configuring incomplete, errors occurred!
See also "/home/craig/dev/qmapshack/build_QMapShack/CMakeFiles/CMakeOutput.log".
See also "/home/craig/dev/qmapshack/build_QMapShack/CMakeFiles/CMakeError.log".

</pre>

### GDAL

<pre>
sudo apt-get update
sudo apt-get install libgdal-dev
sudo apt-get install pktools pktools-dev
</pre>

### proj4

<pre>
sudo apt-get install libgeo-proj4-perl libproj-dev
</pre>

<pre>
sudo apt-get install routino routino-www libroutino-dev libroutino-slim0

sudo apt-get install routino
sudo apt-get install libroutino-dev
</pre>

### cmake again

CMake Error at cmake/Modules/FindPROJ.cmake:83 (message):
  Could not find PROJ

/bin/sh: 1: /home/craig/dev/qmapshack/qmapshack-1.7.1/src/locale/qmapshack_cs.ts: Permission denied

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
