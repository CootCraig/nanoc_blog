---
title: "Solsylva 10x9 Gantry CNC"
created_at: Sun Oct  4 20:14:18 MDT 2015
kind: article
tags:
  - cnc
  - solsylva
---

<a href="http://solsylva.com/cnc/10x9x4.shtml" target="_blank">10 x 9 x 4 Fixed Gantry Machine</a>

### Simple, Solid and Inexpensive

* Sturdy
* Easy to build
* Low cost
* Built with basic tools
* Made of stock materials

This fixed gantry machine uses bearings that ride steel rails. Bearings
also support the leadscrews. These features give a solid machine that
can use a trim router to cut aluminum.

### The photo below is of a piece of 3/8 x 6 inch aluminum flat bar that was milled with a 10x9 machine.

<img src="/assets/images/solsylva_10x9_aluminum_closeup_acme500.jpg" width="350px">


### Construction

Only basic tools are required to build this machine. Tool list (on FAQ
page) The machine's body is made of 1x4 and 1x6 boards that are cut to
length and drilled. These boards are stiffer than MDF.  Materials.pdf

Most cuts are cross-cuts, and all wood cuts can be made with a power-miter
or hand saw. A table saw is neither needed nor missed.

The rails are black iron pipe, rigid conduit, or galvanized plumbing
pipe, which can be cut with a hacksaw.  There are no threads to tap,
and the steel rails are not drilled.

The table is sized so it can use half (18 inches) of a standard three
foot Acme leadscrew on the X and Y axes. This simplifies upgrades.

### Steppers and Speeds

NEMA 23 steppers move each axis. This is a standard size that is available
in many stepper and drive packages.  The prototypes used the HobbyCNC
200 oz.in. system. HobbyCNC also sells a 305 oz.in. system. Its extra
power is noticeable, but was not missed in machining the aluminum with
this 10x9 machine. Other stepper packages can be used.

The 5/16-18 threaded rod leadscrews gave rapids above 50 inches per
minute. The precision Acme leadscrews permitted rapids over 250 ipm with
the 200 oz.in. steppers.

The machine uses a trim router. Its power is compatible with the wooden
construction and the popular steppers and drives.

### aluminum Milled with the 10x9

<a href="http://solsylva.com/cnc/10x9x4details.shtml" target="_blank">3/8 inch aluminum Milled with the 10x9</a>

The milled stock is 6061 T6511 extruded aluminum bare rectangle
(flat bar).

The edge cut shown on the 10x9 page used 3/8-8 four start precision
Acme leadscrews with anti-backlash leadnuts on the X and Y axes. This
was the only upgrade, and it added ~$140 to the price of the machine.

The proprietary stepper to leadscrew couplers, leadnuts and collar clamps
add up quickly.

### Hold Downs and Spoil Board

<a href="http://solsylva.com/cnc/holddown.shtml" target="_blank">Hold Downs</a>

### Precision Acme Leadscrew Upgrade

The edge cut shown on the 10x9 page used 3/8-8 four start precision
Acme leadscrews with anti-backlash leadnuts on the X and Y axes. This
was the only upgrade, and it added ~$140 to the price of the machine.

The proprietary stepper to leadscrew couplers, leadnuts and collar clamps
add up quickly.

The rails and bearings remained pipe and skate bearings, and the machine's
frame was stock spruce-pine-fir 1x4 and 1x6 boards.

# Electronics

### Synthetos TinyG controller

<a href="http://www.smw3d.com/tinyg/" target="_blank">$130 TinyG at smw3d.com</a>

<img src="/assets/images/tinyg-v8.jpg" width="600px">

<img src="/assets/images/tinyg-v8-diagram.jpg" width="600px">

### Smothieboard

#### Stepper drivers

* 3 to 5 Allegro A4982 stepper drivers.
* Each capable of driving bipolar steppers up to 35V and 2A.
* 1/16 microstepping.
* TSSOP package allows for much better thermal handling than commonly used A4983/8.
* Digital control of the current setting for each driver instead of trimpot manual control.

#### Microcontroller

* NXP LPC 1768/9 32-bits Cortex-M3 MCU, running at 96 to 120Mhz. 512kB Flash, 64kB RAM.
* Drag and drop flashing : simply drop a new firmware file to the smoothieboard to update.
* USB2 Composite device : shows to the computer as both a Serial device, and a Mass Storage device ( exposing the SD-card ), à-la mbed.
* Ethernet
* microSD card file storage.



<img src="/assets/images/Smoothieboard-3d-printer-setup.jpg" width="600px">

<img src="/assets/images/Smoothieboard-3x-pic.jpg" width="600px">

<img src="/assets/images/Smoothieboard-host-side.jpg" width="600px">

<img src="/assets/images/smoothieboard-wiring.png" width="600px">


<a href="http://www.openbuilds.com/threads/smoothieboard-vs-tinyg-for-cnc-milling.1924/" target="_blank">SmoothieBoard vs. TinyG for CNC milling</a>

Arthur from the Smoothie project discusses.

<a href="http://smoothieware.org/smoothieboard" target="_blank">SmoothieBoard</a>

<a href="http://shop.uberclock.com/collections/smoothie/products/smoothieboard-3x" target="_blank">shop.uberclock.com - smoothieboard-3x - $110</a>

<a href="https://www.youtube.com/watch?v=vsu_vAKvRO0" target="_blank">Thomas Sanladerer - review: The Smoothieboard</a>

<a href="https://www.youtube.com/watch?v=uIn7blr1iEs" target="_blank">Mark Cooper of SmoothieBoard</a>

<a href="http://smoothieware.org/cnc-mill-guide" target="_blank">Your guide to installing Smoothieboard in a CNC Milling Machine</a>

<a href="http://store.hackaday.com/products/smoothieboard5xc" target="_blank">store.hackaday.com smoothieboard5xc</a>


### 24V power supply

#### Meanwell Power Supply - $46 - 24V 14.6A

<a href="http://www.mouser.com/ProductDetail/Mean-Well/NES-350-24/?qs=%2fha2pyFaduhxfhzsenBkIkgMfhBr0hSVdTJWNZMLFL2wp6eI7VH7oQ%3d%3d" target="_blank">Mouser.com MeanWell Power Supply</a>

<img src="/assets/images/MeanWell-power-supply-NES-350.jpg" width="450px">

### NEMA23 stepper motors

NEMA23 425oz/in 2.8A Stepper Motor ¼” Dual shaft (KL23H286-20-8B)

<a href="http://www.automationtechnologiesinc.com/products-page/nema-23/kl23h286-20-8b" target="_blank">Automation Technologies NEMA23 3x$32</a>

<img src="/assets/images/nema23-stepper.png" width="400px">


### GRBL Arduino with shield

Arduino CNC Shield V3.10 – GRBL v0.9 compatible (PWM Spindle + Soft limits)

<a href="http://blog.protoneer.co.nz/arduino-cnc-shield/" target="_blank">Protoneer CNC shield - GRBL compatible</a>


<a href="http://www.elecrow.com/cooperated-designers-c-127/protoneer-c-127_168/cnc-shield-for-arduinogrbl-compatible-p-778.html" target="_blank">Protoneer GRBL shield built by Elecrow</a>


Features

* GRBL 0.8c compatible. (Open source firmware that runs on an Arduino UNO that turns G-code commands into stepper signals https://github.com/grbl/grbl)
* 4-Axis support (X, Y, Z , A-Can duplicate X,Y,Z or do a full 4th axis with custom firmware using pins D12 and D13)
* 2 x End stops for each axis (6 in total)
* Spindle enable and direction
* Coolant enable
* Uses removable Pololu A4988 compatible stepper drivers. (A4988, DRV8825 and others)
* Jumpers to set the Micro-Stepping for the stepper drivers. (Some drivers like the DRV8825 can do up to 1/32 micro-stepping )
* Compact design.
* Stepper Motors can be connected with 4 pin molex connectors.
* Runs on 12-36V DC. (At the moment only the Pololu DRV8825 drivers can handle up to 36V so please consider the operation voltage when powering the board.)

### GeckoDrive G540

<a href="http://www.geckodrive.com/geckodrive-step-motor-drives/g540.html" target="_blank">$299 - G540 4-Axis Digital Step Drive</a>

<img src="/assets/images/geckodrive-g540.png" width="450px">


### Spark Concepts - CNC xPRO Controller V2

<a href="http://www.spark-concepts.com/cnc-xpro-controller-v2/" target="_blank">CNC xPRO Controller V2 - $129.00</a>

Take your CNC router to the next level with Spark Concepts' original
CNC xPRO driver.  Runs 4 DRV8825 motor drivers; allowing for dual motor
configurations on the X,Y, or Z axis.  The CNC xPRO is printed on 2oz
copper to handle heavy current and improve thermal management of the
motor drivers.  Version 2 of the CNC xPRO ships with the latest GRBL.

### Polulu DRV8825 Stepper Motor Driver Carrier, High Current

<a href="https://www.pololu.com/product/2133" target="_blank">Polulu DRV8825 page</a>

### NEMA 23 Stepper

<a href="http://www.automationtechnologiesinc.com/products-page/nema-23/nema-23-quarter-inch-dual-shaft-with-flat-270-oz-in" target="_blank">Automation Technolory - $26 270 oz/in</a>

 
# Acme Precision Lead Screws


<a href="http://solsylva.com/cnc/acme_rod.shtml" target="_blank">Acme Threaded Rod</a>

3/8-8 four start precision lead screws

The edge cut shown on the 10x9 page used 3/8-8 four start precision
Acme leadscrews with anti-backlash leadnuts on the X and Y axes. This
was the only upgrade, and it added ~$140 to the price of the machine.

The proprietary stepper to leadscrew couplers, leadnuts and collar clamps
add up quickly.

### proprietary fittings

* stepper to leadscrew couplers
* leadnuts
* collar clamps

### <a href="http://www.cncroutersource.com/acme-lead-screw.html" target="_blank">CNC Router Source ACME Lead Screw Page</a>

# lead screw suppliers

## Roton

<a href="http://www.roton.com/Mating_Components.aspx?family=7061412" target="_blank">3/8 X .375 Right Hand Hi-Lead</a>

* Product Line: Hi-Lead®
* Major Diameter: 3/8" (in.)
* Threads Per Inch: 10 2/3 (Threads/in.)
* Number of Starts: 4
* Lead: .375 (in./rev.)
* Effective Threads Per Inch: 2 2/3 (Effective TPI)
* Hand: Right Hand

$18 / ft.

## dumpster CNC

http://www.dumpstercnc.com/

* ACME 3/8-8, 4 Start Components (2 Turns Per Inch)
* For screws measuring 3/8" diameter with 8 TPI and a 4 start acme thread form.
* Screws available at: McMaster-Carr [part# 98940A607]

* Anti-backlash leadnuts
* threaded couplers
* thread clamps
* flange nuts

part# 98940A607
3 foot - $34.15
6 foot - $68.30

4140 Alloy Steel Precision ACME Threaded Rod, 3/8"-8 Size, 1/2"
Travel/Turn, 3' Long, Right-Hand Thread, 4 Starts


# Sidewinder CNC FAQ


<a href="http://www.cncsidewinder.com/faq---links.html" target="_blank">Sidewinder CNC FAQ</a>

# cnczone.com forum - ACME Leadscrew question

<a href="http://www.cnczone.com/forums/open-source-cnc-machine-designs/45879-cnc.html" target="_blank">ACME Leadscrew question</a>

<a href="http://www.cnczone.com/forums/diy-cnc-router-table-machines/" target="_blank">Forum: DIY CNC Router Table Machines</a>

<a href="http://www.cnczone.com/forums/diy-cnc-router-table-machines/143303-cnc-software-forum-posts.html" target="_blank">Newbie- Introduction and 10x9 planning</a>

<a href="http://www.cnczone.com/forums/diy-cnc-router-table-machines/139840-cnc.html" target="_blank">Solsylva 10x9 - First Build</a>



# Notes

## Forum - WoodWorking Machines - DIY CNC Router Table Machines

### New builder - Solsylva 10x9 vs. OpenBuilds C-Beam vs ??

~~~~~~~~~~~~~~~~~~
I am researching a DIY CNC router build. The two designs that
have caught my eye are the OpenBuilds C-Beam and the Solsylva
10x9.  Some thoughts on what I'm interested in:

A small work area and machine size
Lower cost
Machine fabrication that I can accomplish
Produce pieces and design engraving for small wooden boxes.
Aluminum plate milling
Resin cast mold making

C-Beam Machine Specs:
  X Axis Travel 350mm - (13.5")
  Y Axis Travel 280mm - (11") 
  Z Axis Travel 160mm - (6") Actual working depth is 1.250"

Solsylva 10x9  has a cutting area of 10 x 9 inches with 4 inches of Z travel,

I would like to use the Smoothieboard controller:

<a href="http://smoothieware.org/smoothieboard" target="_blank">SmoothieBoard</a>

My current choice is the Solsylva 10x9 with Acme leadscrews.

I would like to hear from others to help guide my research and
eventual project choice.
~~~~~~~~~~~~~~~~~~



~~~~~~~~~~~~~~~~~~
<a href="" target="_blank"></a>
~~~~~~~~~~~~~~~~~~

