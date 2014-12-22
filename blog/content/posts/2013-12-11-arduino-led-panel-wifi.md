---
title: "Hardware Project - Wifi controlled LED panel"
created_at: Wed Dec 11 23:25:49 MST 2013
kind: article
tags: [ 'wifi','diy','led','ti_cc_3000']
---

## Strawman component list

* Raspberry Pi with USB WiFi
* Peggy 2LE Light Emitting Pegboard kit
* Sparkfun - MAX3232 Breakout

## Components in hand

* Peggy 2LE Light Emitting Pegboard kit
* Raspberry Pi with USB WiFi
* Max232CPE

## Components to consider

* [Peggy 2LE Light Emitting Pegboard kit](http://shop.evilmadscientist.com/productsmenu/tinykitlist/157)
* [Spark Core for WiFi](https://www.spark.io/)
* [Sparkfun - MAX3232 Breakout](https://www.sparkfun.com/products/11189)
* [JeeLabs UART Plug](http://moderndevice.com/product/jeelabs-uart-plug/)



### Microcontroller platform

## Peggy 2LE

* [Peggy 2LE Light Emitting Pegboard kit](http://shop.evilmadscientist.com/productsmenu/tinykitlist/157)

### Serial interface on Peggy 2LE

[Serial interface on Peggy 2LE](http://www.evilmadscientist.com/2009/peggy-2le/)

You can use it to send or stream data or images to the Peggy. (Note
that the pins used to replace the serial port otherwise go to the I2C
interface and to button b5 on the PCB. So, you’ll need to choose
between I2C and Serial when you build it.)

## Arduino and the I2C bus

* [tronixstuff Tutorial: Arduino and the I2C bus – Part One](http://tronixstuff.com/2010/10/20/tutorial-arduino-and-the-i2c-bus/)

## JeeNode format microcontroller and interconnect

[JeeNode v6 kit](http://moderndevice.com/product/jeenode-v6-kit/)

JeeNodes are a collaboration between Modern Device and a talented and energetic engineer, Jean-Claude Wippler. 

The JeeNode Kit contains all the parts needed to build a JeeNode v6
– including an ATmega328p processor and an RFM12B radio module. The
processor chip is pre-flashed with the Arduino boot loader and the
RF12demo sketch, so it works to talk to another JeeNode right out of the
box. Kits are shipped with the ISM-band 915 or 434 MHz radio module for
orders within the Americas

### I2C on JeeNodes

[Flashback – Ports and I2C in JeeLib](http://jeelabs.org/2013/10/02/flashback-ports-and-i2c-in-jeelib/)

### JeeLabs UART Plug

[JeeLabs UART Plug](http://moderndevice.com/product/jeelabs-uart-plug/)

The UART Plug contains a hardware serial port with 64-byte buffers for
both sending and receiving. It can support baud rates up to 115200 baud,
though this will probably tax the bus through which it is being accessed.

An I2C bus running at 3.3V is used as interconnect, with all the power
and signal lines brought out to to both sides of the board to allow
daisy-chaining with other I2C-conformant boards.

The two solder jumpers on the board allow up to four UART Plugs to be
used together on the same I2C bus.

## Beaglebone Black as platform

[BeagleBone Black at Adafruit - $45](https://www.adafruit.com/products/1278)


If you liked the BeagleBone, you will love the next gen BeagleBone
Black! With a blistering 1GHz processor, 512MB onboard DDR3 RAM, built
in 2GB storage with pre-installed Linux operating system (no microSD
card required!), and best of all, the addition of a MicroHDMI connector
for audio/video output. This is a ultra-powered embedded computer that
can fit in a mint tin. Note: As of October 24, 2013, 11:15amET Adafruit
is shipping Rev A6.


