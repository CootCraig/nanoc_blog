---
title: "BeagleBone Black CNC Research"
created_at: Wed Sep 30 03:37:10 MDT 2015
kind: article
tags:
  - cnc
  - beaglebone
  - wood_shop
---

# This went sideways, start over

<a href="http://xylotex.netfirms.com/OSCommerce/catalog/product_info.php?cPath=27&products_id=62" target="_blank">Xylotex - BBB_DB25_26</a>




# Current Straw Man selection

130 + 46 + 96 + 130 + 180 =
$582

#### TinyG Controller - $130

<img src="/assets/images/600tinygv7-600x399.jpg" width="800px">

#### Meanwell Power Supply - $46 - 24V 14.6A

<img src="/assets/images/MeanWell-power-supply-NES-350.jpg" width="450px">


#### NEMA23 425oz/in 2.8A Stepper Motor - 3 x $32

<img src="/assets/images/nema23-stepper.png" width="400px">


#### Solsylva 31x13 - frame parts $130

<img src="/assets/images/solsylva_13x13wood1.jpg" width="540px">

#### Makita RF1101 2-1/4-Horsepower Router - $180

<img src="/assets/images/makita_cradles.jpg" width="300px">



* <a href="http://solsylva.com/cnc/13x13x5.shtml" target="_blank">Solsylva - 13 x 13 x 5 Fixed Gantry Machine</a>
* <a href="http://xylotex.netfirms.com/OSCommerce/catalog/product_info.php?cPath=22&products_id=91" target="_blank">Xylotex 3 axis drive box with steppers</a>
* <a href="http://xylotex.netfirms.com/OSCommerce/catalog/product_info.php?cPath=27&products_id=62" target="_blank">BBB_DB25_26 - $32 - BeagleBone Black DB25 output</a>
 

$400 - Xylotex 3AX_40V_600 - 3 Axis Drive Box complete with 600 oz.in. Nema34 Motors and Cables

<a href="http://solsylva.com/cnc/drives_steppers.shtml" target="_blank">Solsylva steppers / drivers page</a>


# Online Forums

* <a href="http://www.linuxcnc.org/index.php/english/forum/index" target="_blank">LinuxCNC Forum</a>
* <a href="http://www.linuxcnc.org/index.php/english/forum/beaglebone" target="_blank">BeagleBone on LinuxCNC Forum</a>
* <a href="https://groups.google.com/forum/#!forum/machinekit" target="_blank">MachineKit Google Group</a>


# <a href="http://solsylva.com/cnc/drives_steppers.shtml" target="_blank">Solsylva Drives and Steppers Page</a>

These CNC machines require:

* Steppers
* Drives
* Power Supplies

## NEMA 23 steppers - 269 oz.in.

The 269 oz.in. steppers can push a trim router hard enough for the router
to stall, though usually the steppers will stall first.


# Xylotex Parts and info

## <a href="http://xylotex.netfirms.com/OSCommerce/catalog/product_info.php?products_id=62" target="_blank">BBB_DB25_26</a>

This board is intended to run in a BeagleBone Black system as the top board. It has an identification eeprom, but is unprogrammed. The user can program the eeprom as required, while noting the BBB_DB25 P8 and P9 pin requirements. See the table at the bottom of this page.

A complete (minimum) LinuxCNC Control system would consist of:

* 1 BBB board
* 1 BBB_DB25 board (with optional Case)
* 1 uSD Card with LinuxCNC set up for BBB_DB25.
* 1 5V 1A+ Power source (not 5V from a PC USB port)
* 1 USB self powered hub
* 1 USB Keyboard
* 1 USB Mouse
* 1 HDMI compatible monitor with micro HDMI connector (possible micro HDMI to HDMI to DVI adapter required)
* 1 DB25 Parallel port extension cable
* 1 Motion System with DB25 connector such as Xylotex drives/drive boxes (tested) or Gecko G540 (not tested)
* 1 Multi outlet AC source for all of the AC powered devices.
* 1 User ability to modify the ini file for the particular application (steps/unit, accel, max travel, etc.) Use 'nano' in a Linux terminal to do this.

By ordering the BBB with uSD, BBB_DB25 and other components all at one
time, you can save in shipping costs.

# Designs

* Dave Gatton Sidewinder
* <a href="http://solsylva.com/cnc/18x24x5.shtml" target="_blank">solsylva plans - 18 x 24 x 5 V Bearing Machine</a>
* <a href="https://buildyourcnc.com/DesktopCNCMachineKitblueChick.aspx" target="_blank">blueChick 13"x24" or 13"x36" Desktop CNC Router Kit v3.0</a>
* <a href="http://www.cncrouterparts.com/crp2448-2-x-4-cnc-router-kit-p-164.html" target="_blank">CRP2448 2' x 4' CNC Router Kit</a>
* <a href="http://www.openbuilds.com/builds/openbuilds-ox-cnc-machine.341/" target="_blank">OpenBuilds OX CNC Machine 22.8in x 48in</a>
* <a href="http://www.openbuilds.com/builds/c-beam%E2%84%A2-machine-plate-maker.2020/" target="_blank"></a> Openbuilds C-Beam
* <a href="http://www.probotix.com/CNC-ROUTERS/V90-MK2" target="_blank">$2700 - Probotix V90 Mk2 CNC ROUTER</a>



# Beagle Bone Linux images

<a href="http://blog.machinekit.io/p/machinekit_16.html" target="_blank">Machinekit Images</a>



# Beagle Bone Controller Capes

<a href="http://blog.machinekit.io/p/hardware-capes.html" target="_blank">Machinekit Blog - BeagleBone Hardware Capes</a>

<a href="http://xylotex.netfirms.com/OSCommerce/catalog/product_info.php?cPath=22&products_id=92" target="_blank">4 Axis 40V 4.0A Drive Box</a>

Most Dave Gatton SidewinderCNC users will be using Mach3 or Mach4. If you
have software setup questions, please address them to the Xylotex Forum

4 Axis 40V 4.0A Drive Box with Four 4.0A 425 oz.in. Stepper motors.

Four Motor cables (about 6 feet long) are pre-installed and come out the
round hole in the back. The cables have Molex connectors which mate to
the connectors supplied on the motors.

* 1/16th step (microstep) for smooth, precise motion (1/8th available)
* Two Built-in Cooling Fans
* Easy connect for most popular Step/Direction control software such as Mach2/3/4, LinuxCNC or TurboCNC.
* These 425 oz.in. motors(.25 inch shafts, nema23 mounting holes) are better for 5 TPI screws and below, or Rack and Pinion or Direct Belt Drive systems. The available 269 oz.in. motors are better for 10 TPI screwsand above.

The higher voltage drive (40V) and higher amperage motors (4.0A) means
you can have a faster top end speed compared to lower voltage/amperage
drive/motor combinations.

Also comes with a 3 foot parallel port extension cable and IEC 110VAC Power Cord.

After unpacking the drive box, motors and cables, you can be ready to
spin motors in less than a minute*: Just plug-in the motors to the drive
box cables, connect the parallel port cable to the box and to a suitable
PC parallel port, and finally, plug in the AC power and turn on AC power
switch on the box.

assumes your PC software is already setup properly.

# Openbuilds C-Beam

#### <a href="http://openbuildspartstore.com/c-beam-machine-mechanical-bundle/" target="_blank">$500 - C-Beam Machine Mechanical Bundle</a>

## C-Beam Machine Specs:

* X Axis Travel 350mm - (13.5")
* Y Axis Travel 280mm - (11") 
* Z Axis Travel 160mm - (6") Actual working depth is 1.250"

# LinuxCNC


# Synthetos TinyG Controller

* <a href="http://makezine.com/2014/03/20/motion-control-for-the-masses-the-tinyg-story/" target="_blank">Makezine article by Alden Hart</a>
* <a href="https://github.com/synthetos/TinyG/wiki" target="_blank">Synthetos TinyG Wiki</a>
* <a href="https://www.synthetos.com/forum/" target="_blank">Synthetos Forum</a>
* <a href="https://www.youtube.com/watch?v=2HQi6RzazSc" target="_blank">TinyG Hackaday video</a>
* <a href="https://github.com/synthetos/TinyG/wiki/Stepper-Motors-and-Power-Supplies" target="_blank">Recommended Stepper Motors and Power Supplies</a>



# Suppliers

* <a href="http://www.cncrouterparts.com/index.php" target="_blank">CNC Router Parts</a>
* <a href="https://buildyourcnc.com/item/electronicsAndMotors-3axis-425-elcombo" target="_blank">$390 - buildyourcnc 3 axis combo</a>
* <a href="https://synthetos.myshopify.com/collections/assembled-electronics/products/tinyg" target="_blank">Synthetos TinyG</a>
* <a href="http://www.probotix.com/CNC-CONTROL-SYSTEMS/STEPPER-MOTOR-DRIVERS/MondoStep-4.2-Bi-Polar-Stepper-Motor-Driver" target="_blank">$80 - MondoStep 4.2 Bi-Polar Stepper Motor Driver</a>
* <a href="http://www.probotix.com/CNC-CONTROL-SYSTEMS/POWER-SUPPLIES/40vdc-10amp-linear-power-supply.html" target="_blank">$90 - Probotix 40VDC 10Amp Linear Power Supply</a>
* <a href="http://www.probotix.com/CNC-CONTROL-SYSTEMS/CNC-CONTROLLER/3-AXIS-KITS/3-Axis-Lightening-280ozin-Stepper-Motor-Driver-Kit" target="_blank">$470 - Probotix 3-Axis Lightening Stepper Motor Driver Kit</a>
* <a href="http://www.smw3d.com/tinyg/" target="_blank">$130 - smw3d store - TinyG</a>
* <a href="http://www.automationtechnologiesinc.com/products-page/nema-23/kl23h286-20-8b" target="_blank">Automation Technologies NEMA23 3x$32</a>
* <a href="http://www.mouser.com/ProductDetail/Mean-Well/NES-350-24/?qs=%2fha2pyFaduhxfhzsenBkIkgMfhBr0hSVdTJWNZMLFL2wp6eI7VH7oQ%3d%3d" target="_blank">Mouser.com Mean Well Power Supply</a>


http://www.planet-cnc.com/

# Builds


## Thomas Shue - TinyG - OX

* <a href="https://www.youtube.com/watch?v=7kcekkZlbmg" target="_blank">TinyG Controlled OX CNC Machine First Pass</a>
* <a href="https://www.youtube.com/watch?v=WZC8U3VhirI" target="_blank">Setup Overview Of The OX CNC With TinyG Chilipeppr & JScut</a>

## Covey Woodworks

* <a href="http://coveywoodworks.com/" target="_blank">Covey Woodworks Site</a>
* <a href="https://www.youtube.com/watch?v=NP9asVGftto" target="_blank">Using LinuxCNC Control - Probotix</a>
* <a href="https://www.youtube.com/watch?t=5&v=OxQu-VsQc-4" target="_blank">Overview and first run of Probotix CNC Rotary Axis</a>
* <a href="https://www.youtube.com/watch?v=eakfxCt4zyU&index=7&list=PLjFHFZ7yr2NGzM8g00bUs2SYuoZq7pCwI" target="_blank">First Project on Probotix Asteroid CNC Router</a>



~~~~~~~~~~~~~~~~~~
<a href="" target="_blank"></a>
~~~~~~~~~~~~~~~~~~



