---
title: "Weather Station"
created_at: Fri Nov 17 05:43:15 MST 2017
kind: article
tags:
  - weather
  - weather_station
  - accurite
---

<h3>
  <a href="https://www.amazon.com/AcuRite-Wireless-Weather-Station-Monitoring/dp/B0147DCLPC/" target="_blank">$111 at amazon</a>
  AcuRite 02064 Wireless Weather Station with PC Connect, 5-in-1 Weather Sensor and My AcuRite Remote Monitoring Weather App 
</h3>

<h3>
  <a href="https://www.acurite.com/5-in-1-pro-weather-sensor-temperature-humidity-rainfall-wind-speed-wind-direction-06014rm.html" target="_blank">$90 at accurite</a>
  PRO+ 5-in-1 Weather Sensor: Temperature, Humidity, Rainfall, Wind Speed, Wind Direction
</h3>

<h3>
  <a href="https://www.acurite.com/add-on-display-with-pc-connect-for-5-in-1-sensor-data-1036rx.html" target="_blank">$90 at accurite</a>
  Color Display with PC Connect for 5-in-1 Weather Sensors
</h3>

Model #: 06039M, 02064CDI-RX. Compatible with weeWX.

<h1>
  <a href="http://www.weewx.com/" target="_blank">weeWX software</a>
</h1>

<h3>
  <a href="http://www.weewx.com/docs/usersguide.htm" target="_blank">User's Guide</a>
</h3>

<h3>
<a href="https://github.com/weewx/weewx/wiki" target="_blank">weewx/wiki</a>
</h3>

The wiki content is contributed by weeWX users. It contains suggestions
and experiences with different types of hardware, skins, extensions to
weeWX, and other useful tips and tricks summarized from the Forums.

<h3>
  <a href="http://groups.google.com/group/weewx-user" target="_blank">User Group Forum:</a>
</h3>

<h3>
  <a href="http://groups.google.com/group/weewx-development" target="_blank">Development Issues Forum:</a>
</h3>

There are two forums. weewx-user is for general issues such as
installation, sharing skins and templates, reporting buggy behavior,
suggestions for improvement. weewx-development is for discussions about
developing drivers, extensions, or working on the core code.

<h3>
  <a href="https://groups.google.com/forum/#!searchin/weewx-user/accurite|sort:date/weewx-user/eLWXbQ3NY34/edHaFTuyEAAJ" target="_blank">User forum post</a>
  Checking to determine the best Accurite components for my specific needs
</h3>


<h5>On Wednesday, January 27, 2016 at 12:46:38 AM UTC-5, Gary Lankford wrote:</h5>

Do I need PC Connect, the Accurite bridge, or both to accomplish my
goal? Just trying to make sure I get the right components, or a package
containing them, without getting more than I can use, before dealing with
the complexities of no locally permanent internet connection and LInux...
Thanks, in advance, for your help!


<h5>mwall reply</h5>

gary,

if you go with acurite hardware there are two basic approaches:

option 1: computer + console + 5-in-1.  the computer is connected to the
console via usb.  this is the easiest to set up.  if you go this route,
avoid the 02032 console.  the 02064 is probably the best console, since
it does not require manual intervention to make it communicate via usb.
no internet connection is required.

option 2: computer + bridge + sensors.  the bridge is connected by
ethernet cable to your house network.  the sensors can be individual
acurite t/h sensors, any number of 3-in-1 towers, or 5-in-1 units.
the bridge can receive data from any number of sensors.  you can also add
any number of consoles to this setup (usb or non-usb), but each console
can see only one 3-in-1 or 5-in-1.  setting up this system will require
a bit more work, but it gives you the most flexibility and possibilities
for expansion.  one caveat - if you do not have an internet connection,
then you will have to fool the bridge into thinking that you do.

in either case, computer can be a regular desktop computer or a low power
device such as a router or raspberry pi, as long as it can run python.

weewx will collect data and create local web pages that you can view
from any device connected to your home network.

pc connect is not necessary.

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
<p style="margin-bottom: 2em;"></p>
<hr style="border: 0; height: 3px; background: #333; background-image: linear-gradient(to right, #ccc, #333, #ccc);">
<pre><code>
</code></pre>
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
</math>
-->
