---
title: "Burning DVD and CD"
created_at: Tue Dec 23 05:39:10 MST 2014
kind: article
tags:
  - burn_dvd_cd
---


# Burning DVD and CD

## Package: xfburn - This works

~~~~~~~~~~~~~~
apt-get install xfburn
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libburn4 libisofs6 libjte1
The following NEW packages will be installed:
  libburn4 libisofs6 libjte1 xfburn
0 upgraded, 4 newly installed, 0 to remove and 0 not upgraded.
Need to get 720 kB of archives.
After this operation, 3,126 kB of additional disk space will be used.
~~~~~~~~~~~~~~

## Package: brasero (3.11.4-1) 


## burn-configure - create a configuration file for burn(1)

burn-configure is a configuration utility for burn(1). Burn (“Burn until
recorded, now!”) is a tool for writing optical media of various kinds.

The burn(1) program looks for its configuration settings in the following
files: /etc/burn.conf, ~/.burnrc.

When  invoked,  burn-configure  will  ask  a  series  of  questions
interactively  at the console, and then write a new configuration to the
file burn.conf.new in the current directory. This file can then be used
for the contents of any of the burn(1) configuration files.


## [bigpaul.org - Burn Home Site](http://www.bigpaul.org/burn/)

Burn is a simple program/script written in Python.

It's aim is to make it simple and quick to burn CDs or DVDs.

First of all Burn...

* has to be a command line program/script;
* must perform any of its feature invoking it only once and with one and only one command line.

Burn should be able to:

* create Audio CD from .ogg, .mp3, .wav (even toghether)
* copy CDs
* create Data-CD or DVD (storage, backups, etc.)
* create a CD or DVD from an existing ISO image.

## Package: burn (0.4.6-2)

* cdrdao - records CDs in Disk-At-Once (DAO) mode 
* genisoimage - Creates ISO-9660 CD-ROM filesystem images 
* wodim - command line CD/DVD writing tool 

wodim is currently maintained as part of the cdrkit project by its
developers.


~~~~~~~~~~~~~~
dmesg:
[609266.449503] scsi 20:0:0:0: CD-ROM            HL-DT-ST BDDVDRW UH12NS30 1.03 PQ: 0 ANSI: 0
[609266.550163] sr0: scsi3-mmc drive: 0x/48x writer dvd-ram cd/rw xa/form2 cdda tray
[609266.550284] sr 20:0:0:0: Attached scsi CD-ROM sr0
[609266.550345] sr 20:0:0:0: Attached scsi generic sg4 type 5
~~~~~~~~~~~~~~

## [cdrtools - From Wikipedia](http://en.wikipedia.org/wiki/Cdrtools)

cdrtools (formerly known as cdrecord) is a collection of independent
projects of free software/open source computer programs, created by
Jörg Schilling and others.

The most important parts of the package are cdrecord, a console-based
burning program; cdda2wav, a CD audio ripper that uses libparanoia;
and mkisofs, a CD/DVD/BD/UDF/HFS filesystem image creator. Because these
tools do not include any GUI, many graphical front-ends have been created.

In 2000, Jörg Schilling changed the name of his package from "cdrecord"
to "cdrtools"[6] to better reflect the fact that it had become a
collection of tools.

## [Cdrtools - Home](http://cdrecord.org/private/cdrecord.html)

Cdrtools is a set of command line programs that allows to record CD/DVD/BluRay media.

The suite includes the following programs:

* cdrecord   A CD/DVD/BD recording program 
* readcd       A program to read CD/DVD/BD media with CD-clone features 
* cdda2wav	The most evolved CD-audio extraction program with paranoia support 
* mkisofs     A program to create hybrid ISO9660/JOLIET/HFS filesystes with optional Rock Ridge attributes 
* isodebug   A program to print mkisofs debug information from media 
* isodump   A program to dump ISO-9660 media 
* isoinfo       A program to analyse/verify ISO/9660/Joliet/Rock-Ridge Filesystems 
* isovfy         A program to verify the ISO-9660 structures 
* rscsi           A Remote SCSI enabling daemon 


