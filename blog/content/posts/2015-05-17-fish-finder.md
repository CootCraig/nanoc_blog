---
title: "Fish Finder"
created_at: Sun May 17 21:37:54 MDT 2015
kind: article
tags:
  - fishing
  - fish_finder
---


# NMEA

#### [Wikipedia](http://en.wikipedia.org/wiki/NMEA_0183) NMEA 0183

NMEA 0183 is a combined electrical and data specification for
communication between marine electronics such as echo sounder, sonars,
anemometer, gyrocompass, autopilot, GPS receivers and many other types of
instruments. It has been defined by, and is controlled by, the National
Marine Electronics Association. It replaces the earlier NMEA 0180 and
NMEA 0182 standards.[1] In marine applications, it is slowly being phased
out in favor of the newer NMEA 2000 standard.

The electrical standard that is used is EIA-422, although most
hardware with NMEA-0183 outputs are also able to drive a single EIA-232
port. Although the standard calls for isolated inputs and outputs, there
are various series of hardware that do not adhere to this requirement.

The NMEA 0183 standard uses a simple ASCII, serial communications protocol
that defines how data are transmitted in a "sentence" from one "talker" to
multiple "listeners" at a time. Through the use of intermediate expanders,
a talker can have a unidirectional conversation with a nearly unlimited
number of listeners, and using multiplexers, multiple sensors can talk
to a single computer port.

At the application layer, the standard also defines the contents of
each sentence (message) type, so that all listeners can parse messages
accurately.


#### [OpenSeaMap Data Logger](http://seesea.sourceforge.net/datalogger/)

#### [Hardware-logger for NMEA-0183 devices](https://github.com/OpenSeaMap/logger-oseam-0183)


#### [doctor sonar insight genesis review](/assets/pdf/doctor-sonar-insight-genesis-review.pdf)


