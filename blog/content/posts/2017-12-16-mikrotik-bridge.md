---
title: "MikroTik Bridge"
created_at: Sat Dec 16 21:23:54 MST 2017
kind: article
tags:
  - mikrotik
  - wifi_bridge
  - networking
---

<h3>
  <a href="https://wiki.mikrotik.com/wiki/Transparently_Bridge_two_Networks" target="_blank">mikrotik.com/wiki</a>
  Transparently Bridge two Networks
</h3>

<h2>
  <a href="https://wiki.mikrotik.com/wiki/Manual:Interface/Bridge" target="_blank">wiki.mikrotik.com - Manual:Interface/Bridge</a>
</h2>

<h4>Bridge Interface Setup</h4>

<h5>Sub-menu: /interface bridge</h5>

To combine a number of networks into one bridge, a bridge interface
should be created (later, all the desired interfaces should be set
up as its ports). One MAC address will be assigned to all the bridged
interfaces (the MAC address of first bridge port which comes up will be
chosen automatically).

<h4>Manual:Fast Path</h4>

Fast path allows to forward packets without additional processing in
the Linux kernel. It improves forwarding speeds significantly.

For fast path to work, interface support and specific configuration
conditions are required.

<h4>
  <a href="https://wiki.mikrotik.com/wiki/Manual:Wireless_Station_Modes" target="_blank">Manual:Wireless Station Modes</a>
</h4>

<h5>Mode station-bridge</h5>

This mode works only with RouterOS APs and provides support
for transparent protocol-independent L2 bridging on the station
device. RouterOS AP accepts clients in station-bridge mode when enabled
using bridge-mode parameter. In this mode, the AP maintains a forwarding
table with information on which MAC addresses are reachable over which
station device.

This mode is MikroTik proprietary and cannot be used to connect to other
brands of devices.

This mode is safe to use for L2 bridging and is the preferred mode unless
there are specific reasons to use station-wds mode.

<h2>
  <a href="https://mikrotik.com/product/RB941-2nD-TC" target="_blank">mikrotik.com/product</a>
  hAP lite
</h2>

The home Access Point lite (hAP lite) is an ideal little device for your apartment, house or office. 

<h3>
  <a href="https://www.youtube.com/watch?v=cDzaD_trfxY&t=25s" target="_blank">Robert Jooste youtube</a>
  Mikrotik wireless bridge connection.
</h3>

<h3>
  <a href="https://www.youtube.com/watch?v=VShAEtWMjLc" target="_blank">TimiGate youtube</a>
  Mikrotik point to point with good bandwidth
</h3>

<h2>
  <a href="https://forum.mikrotik.com/viewforum.php?f=7&sid=ed34d0a144bb682b188dba6d157e509e" target="_blank">forum.mikrotik.com Wireless Networking sub-forum</a>
</h2>

<h3>
  <a href="https://forum.mikrotik.com/viewtopic.php?t=124959" target="_blank">forum.mikrotik.com thread</a>
  Station WDS or Station Bridge in Point to Point?
</h3>

If you are doing MKT-MKT there is probably no good reason to use station-wds instead of station-bridge

<h3>
  <a href="https://www.youtube.com/watch?v=HMgm3TdXhlE" target="_blank">Kai Hendry youtube</a>
  Mikrotik as a Wireless client
</h3>

<h4>
  <a href="https://wiki.mikrotik.com/wiki/Connect_to_an_Available_Wireless_Network" target="_blank">wiki.mikrotik.com/ article</a>
  Connect to an Available Wireless Network
</h4>

Purpose: In this case, we have a customer that uses a wireless cell modem
for Internet access which lacks ethernet ports, but we would also like
to give access to some devices that are not wifi enabled. This is our
workaround for that problem.

<h2>
  <a href="https://www.youtube.com/watch?v=n3_7ZBBHPUc" target="_blank">MAICT Consult youtube</a>
  Connect 2 MikroTik Routers Wirelessly and distribute internet service from the 2nd router
</h2>

<h3>
  <a href="http://maict-consult.com/connect-2-mikrotik-router-wirelessly-distribute-wireless-internet-connectivity-2nd-router/" target="_blank">maict-consult.com/connect-2</a>
  Connect 2 MikroTik router wirelessly and distribute wireless internet connectivity from the 2nd Router
</h3>

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
