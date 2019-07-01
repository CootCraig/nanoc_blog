---
title: "Virtualbox"
created_at: Sat Jan 17 06:01:09 MST 2015
kind: article
tags:
  - virtualbox
---

# Start Virtualbox Guest at boot

#### [forums.virtualbox.org - Start VMs at boot (new in 4.2.0)](https://forums.virtualbox.org/viewtopic.php?f=11&t=51529)

## vmhost01 at GCS

First you need to create the file /etc/default/virtualbox and add a
few variables.

~~~~~~~~~~~~~~
/etc/default/virtualbox
VBOXAUTOSTART_DB=/etc/vbox
VBOXAUTOSTART_CONFIG=/etc/vbox/autostart.conf
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
/etc/vbox/autostart.conf 
default_policy = deny

administrator = {
  allow = true
  startup_delay = 10
}

craig = {
  allow = true
  startup_delay = 30
}
~~~~~~~~~~~~~~

Set permissions on directory to the vboxuser group and make sure users
can write to the directory as well as sticky bit.

~~~~~~~~~~~~~~
Set permissions and mode on /etc/vbox
chgrp vboxusers /etc/vbox
chmod 1775 /etc/vbox

ls -ld /etc/vbox
drwxrwxr-t 2 root vboxusers 4096 Sep  3 18:17 /etc/vbox
~~~~~~~~~~~~~~

Add administrator to the vboxusers group.

~~~~~~~~~~~~~~
Add administrator to the vboxusers group.
groups administrator
administrator : administrator sudo

usermod -a -G vboxusers administrator

groups administrator
administrator : administrator sudo vboxusers
~~~~~~~~~~~~~~

Every user who wants to enable autostart for individual machines has to
set the path to the autostart database directory with

~~~~~~~~~~~~~~
VBoxManage setproperty autostartdbpath /etc/vbox
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
vboxmanage list vms
"MineOS" {c5869f0e-0d82-4f92-8ba3-61401e5f9289}
"chadeb01" {fc587445-f925-46e7-a2f7-35c50598c2b8}
"chawindows2008r2" {535ba7af-0d5d-4007-bad6-7ec37b7d1c3d}
"debxtest" {e6d55e7a-4d07-4707-a8e7-32942e674679}
"chapg" {98d06bc6-17b3-4187-94e3-65b15e461a18}
"Gitlab" {6d6d0634-6979-4b52-851d-cc44f08cbe99}
"FOG" {c8fd1830-2165-4246-8219-35d06b15dbc3}
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
Enable autostart with vboxmanage
VBoxManage startvm Gitlab --type headless
VBoxManage modifyvm Gitlab --autostart-enabled on
service vboxautostart-service restart
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
update-rc.d virtualbox defaults
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
vboxmanage showvminfo --details Gitlab
 ...
Autostart Enabled: off
Autostart Delay: 0
 ...
~~~~~~~~~~~~~~

<h1>Snapshots</h1>

<pre>
Fri Sep 28 22:10:44 MDT 2018
https://download.virtualbox.org/virtualbox/5.2.18/virtualbox-5.2_5.2.18-124319~Debian~jessie_amd64.deb
</pre>

<h3>
  <a href="https://www.youtube.com/watch?v=Qte4X-rdr2Q" target="_blank">Corey Schafer youtube</a>
  VirtualBox: How to Use Snapshots
</h3>

<h1>USB</h1>

<h3>
  <a href="https://www.virtualbox.org/manual/UserManual.html#settings-usb" target="_blank">virtualbox.org/manual</a>
  Oracle VM VirtualBox User Manual
</h3>

<h4>3.11.1. USB Settings</h4>

<b>USB Device Filters:</b> When USB support is enabled for a VM, you
can determine in detail which devices will be automatically attached
to the guest. For this, you can create filters by specifying certain
properties of the USB device. USB devices with a matching filter will be
automatically passed to the guest once they are attached to the host. USB
devices without a matching filter can be passed manually to the guest,
for example by using the Devices, USB menu.

Clicking on the + button to the right of the USB Device Filters window
creates a new filter. You can give the filter a name, for later reference,
and specify the filter criteria. The more criteria you specify, the more
precisely devices will be selected. For instance, if you specify only
a vendor ID of 046d, all devices produced by Logitech will be available
to the guest. If you fill in all fields, on the other hand, the filter
will only apply to a particular device model from a particular vendor,
and not even to other devices of the same type with a different revision
and serial number.

In detail, the following criteria are available:

<pre>
Vendor and Product ID. With USB, each vendor of USB products carries
an identification number that is unique world-wide, called the vendor
ID. Similarly, each line of products is assigned a product ID number. Both
numbers are commonly written in hexadecimal, and a colon separates the
vendor from the product ID. For example, 046d:c016 stands for Logitech
as a vendor, and the M-UV69a Optical Wheel Mouse product.

Alternatively, you can also specify Manufacturer and Product by name.

To list all the USB devices that are connected to your host machine with
their respective vendor IDs and product IDs, use the following command:

VBoxManage list usbhost

On Windows, you can also see all USB devices that are attached to your
system in the Device Manager. On Linux, you can use the lsusb command.

Serial Number. While vendor ID and product ID are quite specific to
identify USB devices, if you have two identical devices of the same brand
and product line, you will also need their serial numbers to filter them
out correctly.

Remote. This setting specifies whether the device will be local only,
remote only, such as over VRDP, or either.
</pre>

<h2>Kobo from Windows 7</h2>

<h4>dmesg on host debian</h4>

<pre>
] usb 3-2: new high-speed USB device number 6 using xhci_hcd
[209890.401037] usb 3-2: New USB device found, idVendor=2237, idProduct=4228
[209890.401039] usb 3-2: New USB device strings: Mfr=3, Product=4, SerialNumber=5
[209890.401041] usb 3-2: Product: eReader-4.14.12777
[209890.401042] usb 3-2: Manufacturer: Kobo
[209890.401044] usb 3-2: SerialNumber: N2498A0323108

Filter?
  idVendor=2237
  idProduct=4228
</pre>


<h4>VBoxManage list usbhost</h4>

<pre>
Host USB Devices:
 ...
UUID:               6c175daa-fe05-45d5-83e4-50671748c5ea
VendorId:           0x2237 (2237)
ProductId:          0x4228 (4228)
Revision:           4.1 (0401)
Port:               1
USB version/speed:  2/High
Manufacturer:       Kobo
Product:            eReader-4.14.12777
SerialNumber:       N2498A0323108
Address:            sysfs:/sys/devices/pci0000:00/0000:00:14.0/usb3/3-2//device:/dev/vboxusb/003/006
Current State:      Busy
</pre>

<!--
html boilerplate fragments
<a href="" target="_blank"></a>
<a name=""></a>
<img src="" width="400px">
<ul>
  <li></li>
  <li><a href="" target="_blank"></a></li>
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
