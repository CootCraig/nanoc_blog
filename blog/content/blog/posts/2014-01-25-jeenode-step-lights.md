---
title: "Step Light Control"
created_at: Sat Jan 25 15:15:47 MST 2014
kind: article
tags: [ 'arduino' ]
---

Now looking at Modeino instead of JeeNodes

* [Tutorial on MosFET PWM LED dimming](http://learn.adafruit.com/rgb-led-strips/usage)
* [joost - Dimming 12v LED dimming with MosFET](http://joost.damad.be/2012/09/dimming-12v-led-strip-with-mosfet-and.html)
* [instructables - Semiconductor totem-pole](http://www.instructables.com/id/Semi-Conducting-A-Guide/step14/Totem-Poles/)
* [Adafruit - N-channel power MOSFET - 30V / 60A](http://www.adafruit.com/products/355)
* [JeeNodes got me looking at arduino with radio](http://jeelabs.org/)
* [JeeLabs - Dive into JeeNodes](http://jeelabs.net/projects/cafe/wiki/Dive_Into_JeeNodes)
* [Modern Device is US seller of JeeLabs](http://moderndevice.com/product/jeenode-v6-kit/)

Radios are available in 433 MHz & 915 MHz in the US, all unlicensed ISM
(Industrial, Scientific, Medical) bands.

The JeeNode Kit contains all the parts needed to build a JeeNode v6
– including an ATmega328p processor and an RFM12B radio module. The
processor chip is pre-flashed with the Arduino boot loader and the
RF12demo sketch, so it works to talk to another JeeNode right out of
the box.

* [Modern Device - Jee Proto Board $4.75](http://moderndevice.com/product/jee-proto-boards/)
* [Modern Device - JeeLabs Lux Plug](http://moderndevice.com/product/jeelabs-lux-plug/)
* [JeeLabs - Light detector](http://jeelabs.net/projects/hardware/wiki/Lux_Plug)
* [Modern Device - JeeLabs Relay Plug $14.00](http://moderndevice.com/product/relay-plug/)
* [Meet the Relay Plug](http://jeelabs.org/2010/08/18/meet-the-relay-plug/)
* [Modern Device - JeeLabs MOSFET Plug Kit $14.00](http://moderndevice.com/product/jeelabs-mosfet-plug-kit/)
* [Modern Device - JeeLabs Dimmer Plug $12.50](http://moderndevice.com/product/jeelabs-dimmer-plug/)
* [JeeLabs - Meet the LED Node](http://jeelabs.org/2012/12/14/meet-the-led-node-v2/)
* [Modern Device - JeeLabs LED Node v2 Kit $28.00](http://moderndevice.com/product/jeelabs-led-node-v2-kit/)
* [Modern Device - Jee Labs battery power board](http://moderndevice.com/product/jeelabs-aa-power-board/)
* [Adafruit - 6 push buttons example](http://www.adafruit.com/blog/2009/10/20/example-code-for-multi-button-checker-with-debouncing/)
* [Modern Device - Jeelabs memory plug](http://moderndevice.com/product/jeelabs-memory-plug/)
* [Adafruit Assembled Data Logging shield for Arduino - ID: 1141](http://www.adafruit.com/products/1141)

### Hardware newbie project - Wireless exterior LED strip control.

Here is an introduction of my first attempt at an Arduino project.

I have installed 

260 inches of this 
[12v LED strip](http://www.ledwholesalers.com/store/index.php?act=viewProd&productId=887)
into my front steps.

My estimate of maximum power consumed is 32W as shown here.
Their rating is 24W for a 16.4 foot reel. So my power estimate is

260 in. X (24w / 197in) ~= 32W.

The strip is too bright by itself so I use a PWM dimmer from
LEDWholesalers set about as low as it will go.

What I would like to do is use a JeeNode and LEDnode pair to
make a remote controller for the lights.

* Main control: On / Off / Sunset timer
* Select sunset timer duration: 2 / 4 / 6 hours
* Restart timer momentary switch if in Sunset timer mode.
* Brightness control rotary dial

I'm hoping to get some help and encouragement here and to end up
with a sweet controller for our LED step lighting.

### [Tinker Kit MosFET](http://www.tinkerkit.com/mosfet/)

This module switches a high current load using a high power
transistor. Unlike a mechanical relay, this is capable of high speed
switching for use with PWM.

Output: This module lets you control devices operating at a maximun of
24VDC with an Arduino pin. To wire the module, connect the power supply
for your device (max 24 V) to the V+ and GND terminals. Connect the
device to M+ and M-. Be aware of your circuit’s polarity, you could
damage your components if it is not wired correctly.

Module Description: This module features an IRF520 power MOSFET
transistor, a kick-back diode, a standard TinkerKit 3pin connector,a
signal amplifier, a green LED that signals that the module is correctly
powered and one yellow LED whose brightness depends on the input signal
received by the module.

### [SparkFun Rotary Encoder COM-09117](https://www.sparkfun.com/products/9117)

Description: This is a 12-step rotary encoder with a nice 'clicking'
feel. It's breadboard friendly, and has a pretty handy select switch (by
pushing in on the knob). The encoder is different from a potentiometer in
that an encoder has full rotation without limits. The unit outputs gray
code so that you can tell how much and in which direction the encoder
has been turned.

### [JeeLabs - 16-channel input multiplexer](http://moderndevice.com/product/jeelabs-input-plug/)

The Input Plug is a small board containing a CD4067 16-channel analog
multiplexer plus a dedicated ATtiny microcontroller to take care of
channel selection. It allows you to connect up to 16 analog inputs to a
single AIO pin on any port. There is an “InputPlug” class in the Ports
library to interface with this board and perform the channel selection.

This board can also be used as 16-channel digital input multiplexer,
and even for digital outputs or PWM – with the restriction than a
channel goes into high-impedance mode when not selected (there is no
latching or buffering).

### [Sparkfun - Momentary Push Button Switch - 12mm Square](https://www.sparkfun.com/products/9190)

Description: This is a standard 12mm square momentary button. What we
really like is the large button head and good tactile feel (it 'clicks'
really well). This button is great for user input on a PCB or a good,
big reset button on a breadboard. Breadboard friendly!

### [Sparkfun - TSL2561 Luminosity Sensor Breakout](https://www.sparkfun.com/products/12055)

The TSL2561 Luminosity Sensor Breakout is a sophisticated light sensor
which has a flat response across most of the visible spectrum. Unlike
simpler sensors, the TSL2561 measures both infrared and visible light
to better approximate the response of the human eye. And because the
TSL2561 is an integrating sensor (it soaks up light for a predetermined
amount of time), it is capable of measuring both small and large amounts
of light by changing the integration time.

The TSL2561 is capable of direct I2C communication and is able to conduct
specific light ranges from 0.1 - 40k+ Lux easily. Additionally, the
TSL12561 contains two integrating analog-to-digital converters (ADC) that
integrate currents from two photodiodes, simultaneously. Each breakout
requires a supply voltage of 3V and a low supply current max of 0.6mA.

