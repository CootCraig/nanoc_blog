---
title: "Samsung T479 Gammu"
created_at: Sat Oct 22 01:40:23 MDT 2016
kind: article
tags:
  - cellphone
  - craig_phone
  - samsung_sgh-t479
  - cellphone
  - gammu_phone
---

## <a href="https://wammu.eu/docs/manual/faq/config.html#faq-config" target="_blank">Configuring Gammu FAQ</a>

### <a href="https://wammu.eu/docs/manual/faq/config.html#how-to-configure-3g-umts-modem-or-at-capable-phone" target="_blank">How to configure 3G/UMTS/... modem or AT capable phone?</a>

### <a href="https://wammu.eu/docs/manual/faq/general.html#faq-devname" target="_blank">Device name always changes on Linux, how to solve that?</a>

## <a href="http://reactivated.net/writing_udev_rules.html" target="_blank">Writing udev rules</a>

## <a href="https://wiki.debian.org/udev#persistent-name" target="_blank">wiki.debian.org/udev - Persistent Device name</a>

# bluez

<a href="http://www.bluez.org/" target="_blank">BlueZ - Official Linux Bluetooth protocol stack</a>

# bluetooth

usb is not making sense. Ordered a bluetooth dongle.

## <a href="https://wiki.debian.org/BluetoothUser" target="_blank">wiki.debian.org/BluetoothUser</a>

<pre>
dpkg --get-selections |grep blue

blueman						install
bluetooth					install
bluez						install
libbluetooth3:amd64				install
python-bluez					install
</pre>

<pre>
dpkg-query -L bluez
 ...
/usr/bin/bluetoothctl
/usr/bin/bccmd
/usr/bin/btmon
/usr/bin/rctest
/usr/bin/hciattach
/usr/bin/hcitool
/usr/bin/sdptool
/usr/bin/ciptool
/usr/bin/l2ping
/usr/bin/l2test
/usr/bin/rfcomm
/usr/bin/gatttool
/usr/sbin/bluetoothd
</pre>


<pre>
hcitool dev

Devices:
	hci1	54:27:1E:FC:5C:40
	hci0	5C:F3:70:7A:BD:C2

</pre>

<pre>
dpkg-query -L blueman

 ...
/usr/bin/blueman-sendto
/usr/bin/blueman-services
/usr/bin/blueman-manager
/usr/bin/blueman-applet
/usr/bin/blueman-browse
/usr/bin/blueman-adapters
/usr/bin/blueman-assistant
 ...

</pre>

<pre>
dpkg-query -L bluez-tools

/usr/bin/bt-network
/usr/bin/bt-device
/usr/bin/bt-obex
/usr/bin/bt-agent
/usr/bin/bt-adapter
</pre>

## blueman

<a href="https://github.com/blueman-project/blueman" target="_blank">blueman at github</a>

### inserted plubable USB-BT4LE

<pre>
[285856.843903] usb 3-2: new full-speed USB device number 44 using xhci_hcd
[285856.974212] usb 3-2: New USB device found, idVendor=0a5c, idProduct=21e8
[285856.974218] usb 3-2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[285856.974222] usb 3-2: Product: BCM20702A0
[285856.974226] usb 3-2: Manufacturer: Broadcom Corp
[285856.974229] usb 3-2: SerialNumber: 5CF3707ABDC2
[285856.975407] bluetooth hci1: firmware: failed to load brcm/BCM20702A0-0a5c-21e8.hcd (-2)
[285856.975414] bluetooth hci1: Direct firmware load failed with error -2
[285856.975417] bluetooth hci1: Falling back to user helper
[285856.976763] Bluetooth: hci1: BCM: patch brcm/BCM20702A0-0a5c-21e8.hcd not found
</pre>

### t479 saw this

<pre>
sudo bt-agent 1234
</pre>

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
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
</math>
-->
