---
title: "Cymatic Vibration Motor"
created_at: Fri Jun 24 22:01:49 MDT 2016
kind: article
tags:
  - cymatics
  - vibration_motor
---

# Brushless DC Motor

Make a variable speed vibration motor
using an arduino and a tinyESC v2

## tinyESC v2 - Brushless Speed Controller

<a href="https://www.sparkfun.com/products/13204" target="_blank">sparkfun page</a> tinyESC v2 - Brushed Speed Controller 


## FingerTech tinyESC v2

<a href="http://www.fingertechrobotics.com/proddetail.php?prod=ft-tinyESCv2" target="_blank">fingertechrobotics.com page</a>
FingerTech tinyESC v2

<table cellpadding="4" cellspacing="4" border="2">
  <tr>
    <th>R/C Stick</th>
    <th>Arduino Pulse</th>
    <th>Motor Output</th>
    <th>LED status</th>
  </tr>
  <tr>
    <td>Full Forward</td>
    <td>2000µs</td>
    <td>Full Forward</td>
    <td>Solid Green</td>
  </tr>
  <tr>
    <td>Forward</td>
    <td>1510-2000µs</td>
    <td>Forward</td>
    <td>Flashing Green</td>
  </tr>
  <tr>
    <td>Centered</td>
    <td>1500µs (+/-10µs deadband)</td>
    <td>Off</td>
    <td>Either LED Could Flash</td>
  </tr>
  <tr>
    <td>Backward</td>
    <td>1000-1490µs</td>
    <td>Backward</td>
    <td>Flashing Red</td>
  </tr>
  <tr>
    <td>Full Backward</td>
    <td>1000µs</td>
    <td>Full Backward</td>
    <td>Solid Red</td>
  </tr>
  <tr>
    <td>No R/C Signal</td>
    <td>No Pulse Stream</td>
    <td>Off (Failsafe)</td>
    <td>Slow Blinking Red</td>
  </tr>
</table>


<a href="http://www.fingertechrobotics.com/images/servo201012_tinyESC_review.pdf" target="_blank">Combat Zone Review by Thomas Kenney</a>


<a href="https://www.youtube.com/watch?v=e2XQ4k7bWdU" target="_blank">SparkFun TinyESC demo</a>
SparkFun 12-12-14 Product Showcase: Dial R for Resistance

## Arduino ESC research


<a name="SEng466-esc-cal"></a>

### ESC Calibration & Programming

Mechatronics Project Site for SEng466 at the University of Victoria

<a href="http://robots.dacloughb.com/project-2/esc-calibration-programming/" target="_blank">ESC Calibration & Programming</a>

The PWM signal read by the ESC is the same type as a servo signal, meaning
the Servo library from Adruino can be used to calibrate and control the
ESCs.  The ESC sets the speed of the motor depending on the ratio of high
to low signals.  Calibration involves programming the ESC to understand
the PWM waves corresponding to the stop and maximum speeds of the motor.

The default signal range for most servo motors and ESCs is a high signal
width between 1000 and 2000 microseconds over a repetition period of
20 milliseconds (assuming a 50hz PWM signal).  For the quad copter,
however, we want the range to be as wide as possible to allow for greater
incremental control of the motor.  To this end, we calibrated the ESCs
to read a signal width from 700 to 2000 microseconds with 700 being the
stop speed and 2000 being the max speed.  We found that the ESC could
not read a signal lower than 700 microseconds.

Calibrating the Mystery ESCs was quite simple.  To enter programming mode,
the maximum servo signal (2000 microseconds) is sent to the ESC, the ESC
is powered on and waits for two seconds, then the minimum servo signal
is sent (700 microseconds).  Once the ESC emits a series of confirmation
beeps (special wave signals sent to the motor to emit beeping sounds),
the ESC is calibrated.


### Arduino - Control ESC/Motor Tutorial

<a href="http://techvalleyprojects.blogspot.com/2012/06/arduino-control-escmotor-tutorial.html" target="_blank">techvalleyprojects - Arduino - Control ESC/Motor Tutorial</a>

#### Summary

This is a tutorial of how to control an electronic speed control (ESC) and
brushless motor using an Arduino.

#### Description

This tutorial is about controlling a brushless motor, the type commonly
used in RC hobbies, and controlling the motor using an Arduino.  The goal
is to use the Arduino Servo library, give an input from 0 to 180, and
see the motor move based on our input.

### ESC Programming on Arduino (Hobbyking ESC)

<a href="http://www.instructables.com/id/ESC-Programming-on-Arduino-Hobbyking-ESC/" target="_blank">ESC Programming on Arduino (Hobbyking ESC)</a>

### How to control a brushless motor through a ESC with Arduino

<a href="https://dronesandrovs.wordpress.com/2012/11/24/how-to-control-a-brushless-motor-esc-with-arduino/" target="_blank">dronesandrovs article</a>
How to control a brushless motor through a ESC with Arduino

A ESC is made to receive inputs from a R/C transmitter, so it works as
a servo: to control it you can use the Arduino Servo Library, so the
test code is based on the servo library basic example published on the
Arduino site.


### Kyle Fieldus - Controlling an ESC using an Arduino

<a href="https://www.youtube.com/watch?v=DHDOAocEpqU" target="_blank">youtube</a>
Kyle Fieldus - Controlling an ESC using an Arduino



## Painless360 - RC Basics - Understanding Electronic Speed Controllers (ESC)

<a href="https://www.youtube.com/watch?v=OZNxbxL7cdc" target="_blank">youtube</a>
RC Basics - Understanding Electronic Speed Controllers (ESC)

<ul>
  <li>ESC --- Brushless Motor</li>
</ul>


## <a href="https://www.youtube.com/watch?v=tx3Y9VWOPjI" target="_blank">youtube</a> Maker Hangar: Episode 3 - Electric Speed Controllers

# Brushless DC Motor Research

## <a href="http://www.nmbtc.com/brushless-dc-motors/engineering/brushless_dc_motors_engineering/" target="_blank">BLDC Motor Introduction</a>

The Brushless DC (BLDC) motor is the ideal choice for applications that
require high reliability, high efficiency, and high power-to-volume
ratio. Generally speaking, a BLDC motor is considered to be a high
performance motor that is capable of providing large amounts of
torque over a vast speed range. BLDC motors are a derivative of the
most commonly used DC motor, the brushed DC motor, and they share
the same torque and speed performance curve characteristics. The
major difference between the two is the use of brushes. BLDC motors
do not have brushes (hence the name “brushless DC”) and must be
electronically commutated.

BLDC Motor Advantages:

<ul>
  <li>High Speed Operation – A BLDC motor can operate at speeds above 10,000 rpm under loaded and unloaded conditions.</li>
  <li>Responsiveness & Quick Acceleration – Inner rotor Brushless DC motors have low rotor inertia, allowing them to accelerate, decelerate, and reverse direction quickly.</li>
  <li>High Power Density – BLDC motors have the highest running torque per cubic inch of any DC motor.</li>
  <li>High Reliability – BLDC motors do not have brushes, meaning they are more reliable and have life expectancies of over 10,000 hours. This results in fewer instances of replacement or repair and less overall down time for your project.</li>
</ul>

## himodel.com store

<a href="http://www.himodel.com/electric/EMAX_1200KV_Outrunner_Brushless_Motors_Type_CF2822.html" target="_blank">$6.83 - EMAX 1200KV Outrunner Brushless Motors Type CF2822</a>

<img src="/assets/images/emax-1200kv-brushless-motor-cf2822.gif" width="400px">

<pre>
No. Of cells 2-3 Li-Poly
RPM/V 1200 RMP/V
zMax. efficiency 82%
Max. efficiency current 7 -16 A (>75%)
No load current / 10 V 0.9 A
Current capacity 16 A/60 s
Internal Resistance 150 mohm
Stator Dimensions 22x10 mm
Shaft diameter 3 mm
Weight 39 g 
</pre>

## hobbyking.com Store

<a href="http://www.hobbyking.com/hobbyking/store/__5428__AX_2306N_2000kv_brushless_Micro_Motor.html" target="_blank">AX 2306N 2000kv brushless Micro Motor</a>
$6.47

<img src="/assets/images/ax-2306n-brushless-motor.jpg" width="500px">

<pre>
AX-2306N-2000
Micro brushless motor
Comes with stick mount, as shown.

Spec.
Kv: 2000rpm/v
Lipo Range: 2-3 cell
Suggested prop: 5x3
Best current range: 6~9A
Weight: 37g

Stator: 23 x 6mm

Test Data.
Battery: 11.5v
Current: 7.3A
Propeller: 5x3
Thrust: 357g
Speed: 19340rpm
</pre>

## hobbyexpress.com motor store


<a href="http://www.hobbyexpress.com/erc_12a_brushless_programmable_esc_w_bec_1035805_prd1.htm" target="_blank">eRC 12A Brushless Programmable ESC w/BEC</a>

<a href="http://www.hobbyexpress.com/erc_electronic_programmer_1035816_prd1.htm" target="_blank">eRC Electronic Programmer</a>


### 280 Size Brushless Outrunner, 2000Kv

<a href="http://www.hobbyexpress.com/280_size_brushless_outrunner_2000kv_1041027_prd1.htm" target="_blank">hobbyexpress.com product page</a>

<img src="/assets/images/ercbl280-brushless-outrunner.jpg" width="400px">


<pre>
Technical Specifications:
KV: 	2000 Kv
Voltage Range: 	7.4V
Max Amperage: 	12 Amps
Weight: 	22g
Propeller Size: 	8x3.8
</pre>

### .25 Size Brushless Outrunner, 850Kv

<a href="http://www.hobbyexpress.com/25_size_brushless_outrunner_850kv_528693_prd1.htm" target="_blank">$35 at hobbyexpress.com</a>
.25 Size Brushless Outrunner, 850Kv

<img src="/assets/images/o25_size_brushless_outrunner_850kv.jpg" width="400px">

Quality brushless outrunners at a budget price

eRC Brushless ESC's from Hobby-Lobby37mm dia. x 40mm long excluding the
19mm long, 5mm diameter shaft. 4mm gold plated connectors and collet prop
adapter with 8mm shaft. Economically priced HIGH power brushless outrunner
motors. There is a motor for almost any airplane from a parkflyer up to
a.60 size glow model. Each motor comes complete with mounting hardware,
collet prop adapter and gold plated electrical connections. The motor
connections are pre-installed and their mating connectors included
for your speed control. All motors are produced in a state-of-the-art
factory with strict quality control assuring you a long motor life and
excellent performance. Each motor comes with a 1-year warranty against
manufacturer's defects.

<pre>
Technical Specifications:
Motor Diameter: 	37mm
Shaft Diameter: 	5mm
KV: 	850 Kv
Voltage Range: 	7.4V - 14.4V
Max Amperage: 	40 Amps
Weight: 	4.9 oz.
Propeller Size: 	11x5
</pre>

# Brushed DC motor

## Adafruit DRV8871

Brushed DC motor driver

<a href="https://www.adafruit.com/product/3190" target="_blank">adafruit product page</a>
Adafruit DRV8871 DC Motor Driver Breakout Board - 3.6A Max
$7.50 

Crank up your robotics with powerful Adafruit DRV8871 motor driver
breakout board. This motor driver has a lot of great specs that make
it useful for a wide variety of mechatronics. In particular, the simple
resistor-set current limiting and auto-magic PWM support make it super
easy to use with just about any brushed DC motor.

Check out the specs for the DRV8871:

<ul>
  <li>6.5V to 45V motor power voltage</li>
  <li>Up to 5.5V logic level on IN pins</li>
  <li>565mΩ Typical RDS(on) (high + low)</li>
  <li>3.6A peak current</li>
  <li>PWM control</li>
  <li>Current limiting/regulation without an inline sense resistor</li>
  <li>Undervoltage lockout</li>
  <li>Overcurrent protection</li>
  <li>Thermal shutdown</li>
</ul>


<a href="https://learn.adafruit.com/adafruit-drv8871-brushed-dc-motor-driver-breakout/overview" target="_blank">drv8871 usage</a>

<a href="https://learn.adafruit.com/adafruit-motor-selection-guide/dc-motor-control" target="_blank">learn.adafruit.com article</a>
Brushed DC Motor Control

Simple Speed Control

If all you need is speed control, you can drive a motor with a PWM pin
and a simple transistor circuit. The PWM pin controls the transistor
which switches the current to the motor. The higher the PWM duty cycle,
the faster the motor will go.


## Adafruit Motor shield kit

<a href="https://www.adafruit.com/product/1438" target="_blank">Adafruit product page</a>
Adafruit Motor/Stepper/Servo Shield for Arduino v2 Kit - v2.3


# Sand Sieve Ideas


# General Research

<a href="http://www.electricaleasy.com/2014/01/speed-control-methods-of-dc-motor.html" target="_blank">electricaleasy.com article</a>
Speed control methods of DC motor 

<a href="https://www.precisionmicrodrives.com/vibration-motors" target="_blank">precisionmicrodrives.com/vibration-motors</a>

<a href="https://www.precisionmicrodrives.com/vibration-motors/brushless-bldc-vibration-motors" target="_blank">precisionmicrodrives.com Brushless BLDC Vibration Motors</a>

<a href="http://www.instructables.com/id/Simple-Cheap-Motor-Controller/" target="_blank">instructables.com</a>
Simple, Cheap Motor Controller by TeamJaeger

# tachometer

<a name="servocity"></a>

# ServoCity

<a href="https://www.servocity.com/html/sprockets___chain.html" target="_blank">sprockets and chain</a>

<a href="https://www.servocity.com/html/pulleys___belts.html" target="_blank">Pulleys and Belts</a>

<a href="https://www.servocity.com/html/aluminum_channel.html" target="_blank">Aluminum Channel</a>

<a href="https://www.servocity.com/html/gears.html" target="_blank">gears</a>

<a href="https://www.servocity.com/html/shafting___tubing.html" target="_blank">Shafting and Tubing</a>

# Vibration sensor

### <a href="https://www.sparkfun.com/products/9199" target="_blank">sparkfun Piezo Vibration Sensor</a>


### <a href="https://www.sparkfun.com/products/9196" target="_blank">sparkfun Piezo Vibration Sensor - Large</a>

### <a href="https://www.sparkfun.com/products/9332" target="_blank">SparkFun Single Axis Accelerometer</a>


SparkFun Single Axis Accelerometer Breakout - ADXL193 (+/-250g)


# RS Cymatics

<a href="https://www.youtube.com/watch?v=yO3c0Uda4tg" target="_blank">youtube</a>
RS Cymatics - Bubble Cymatics - A New Experiment 2014

# The CymArtist

<a href="http://www.thecymartist.com/home-eng" target="_blank">thecymartist.com/home-eng</a>


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
-->
