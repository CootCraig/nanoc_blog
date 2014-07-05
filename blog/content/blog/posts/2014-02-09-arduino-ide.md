---
title: "Arduino IDE"
created_at: Sun Feb  9 17:32:51 MST 2014
kind: article
tags: [ 'arduino', 'arduino_ide' ]
---

# Makefile alternative to Arduino IDE

I am goint to try out the Github Makefile project for Arduino from
Sudar Muthu

## A Makefile for Arduino Sketches - managed by Sudar Muthu

* [Sudar Muthu - A Makefile for Arduino Sketches](https://github.com/sudar/Arduino-Makefile)

This is a very simple Makefile which knows how to build Arduino
sketches. It defines entire workflows for compiling code, flashing it
to Arduino and even communicating through Serial monitor. You don't need
to change anything in the Arduino sketches.

### Installation Options

#### Through package

If you're using FreeBSD, Debian or Ubuntu, you can find this in the
arduino-mk package and can be installed using apt-get or aptitude.

#### From source

Download the latest release

Or clone it from Github using the command git clone 
[Github Repo](git@github.com:sudar/Arduino-Makefile.git)


### Sudar Muthu

* [Sudar Muthu - Night Dreaming (by Sudar)](http://sudarmuthu.com/)

Night Dreaming (by Sudar) WordPress, JavaScript, Android, Arduino and some random stuff

Hello and Welcome

I am Sudar and this is my personal site. It serves as a starting point
for most of the information I have put on the web. I started this site
as a hobby so that I can return back what I can to this online world from
where I have learned and still learning so many things. Have a nice sta

* [Sudar Muthu - Why you should open source your next pet project](http://sudarmuthu.com/blog/why-you-should-open-source-your-next-pet-project/)

### Features

* Very robust
* Highly customizable
* Supports all official AVR-based Arduino boards
* Supports chipKIT
* Works on all three major OS (Mac, Linux, Windows)
* Auto detects serial baud rate and libraries used
* Support for *.ino and *.pde sketches as well as raw *.c and *.cpp
* Support for Arduino Software versions 1.0.x as well as 0.x. Support for Arduino 1.5.x is still work in progress
* Automatic dependency tracking. Referred libraries are automatically included in the build process. Changes in *.h files lead to recompilation of sources which include them

### [Article / guide - Compiling Arduino sketches using Makefile](http://hardwarefun.com/tutorials/compiling-arduino-sketches-using-makefile)

One of the main reasons why Arduino is very popular with beginners is that
it is completely self-contained which makes it very easy to use. Once you
have an Arduino board, all you have to do is to download the software
and within minutes you can make your first led blink. The software has
everything you need right from the IDE, to the compiler and even serial
monitor to communicate with Arduino, all within one single package.

While the Arduino IDE is very good for beginners, you might start to
feel its limitations, once you start working with it regularly. I use
vim for everything and always wished writing Arduino sketches in vim.

I configured Arduino IDE, to use an external editor and started using
vim to write code and then Arduino IDE to compile and upload. While this
worked for sometime, I started to feel the need for a proper makefile
so that I can do everything from vim itself.

## My Setup and Use Log

### Get the Linux tarball.

[Linux tarball](http://arduino.googlecode.com/files/arduino-1.0.5-linux64.tgz)


<pre><code>
lug$ cd /opt/Arduino
log$ wget http://arduino.googlecode.com/files/arduino-1.0.5-linux64.tgz
lug$ tar xzf arduino-1.0.5-linux64.tgz
lug$ ln -s arduino-1.0.5 arduino
lug$ ls -l
lrwxrwxrwx 1 craig craig       13 Mar 23 14:45 arduino -> arduino-1.0.5
drwxr-xr-x 8 craig craig     4096 May 17  2013 arduino-1.0.5
</code></pre>

### Install dependencies

The Makefile delegates resetting the board to a short Perl
program. You’ll need to install Device::SerialPort and YAML library.

On Debian or Ubuntu:

<pre><code>
apt-get install libdevice-serialport-perl
apt-get install libyaml-perl
</code></pre>

### Clone Arduino-Makefile from github

I forked Arduino-Makefile from sudar.

<pre><code>
$ mkdir /opt/sudar; cd /opt/sudar
$ git clone git@github.com:CootCraig/Arduino-Makefile.git
$ cd /opt/sudar/Arduino-Makefile
</code></pre>

Pull in upstream changes

<pre><code>
$ git remote add upstream https://github.com/sudar/Arduino-Makefile.git
$ git fetch upstream
$ git merge upstream/master
</code></pre>

Set up git branches for craig local working changes.
Leave master as copy of upsteam.

<pre><code>
 $ git checkout -b craig
 Switched to a new branch 'craig'
 craig@lug:/opt/sudar/Arduino-Makefile$ git branch
 * craig
   master
 $ git checkout -b craig-develop
 Switched to a new branch 'craig-develop'
 $ git branch
   craig
 * craig-develop
   master
</code></pre>

### Setup environment variables

What are the avr packages.

<pre><code>
$ dpkg --get-selections |grep avr
avr-libc					install
avrdude						install
binutils-avr					install
gcc-avr						install
</code></pre>

Where are the avr files.

<pre><code>
/usr/bin/avr-g++
/usr/bin/avrdude
/usr/lib/avr/lib/libc.a
/usr/lib/avr/bin/ar
/usr/lib/gcc/avr/4.7.2/
</code></pre>

~/.profile

<pre><code>
export ARDUINO_DIR=/opt/arduino/arduino
export ARDMK_DIR=/opt/sudar/Arduino-Makefile
export AVR_TOOLS_DIR=/usr
</code></pre>


### Example sketch Makefile


<pre><code>
/opt/sudar/Arduino-Makefile/Arduino.mk
</code></pre>

Per sketch variables

After the global settings, you will need to specify the following variables for each sketch

BOARD_TAG – The Arduino board that you are using. By default Uno is used
ARDUINO_PORT – The serial port where Arduino is connected
ARDUINO_LIBS – Space separated set of libraries that are used by your sketch

