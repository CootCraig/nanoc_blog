---
title: "Pinebook Admin Log 01"
created_at: Sat Aug  5 13:58:26 MDT 2017
kind: article
tags:
  - pinebook
  - pinebook_admin
  - linux
  - linux_admin
---

<pre>
MicroSD "Pine 1" - xenial-mate 0.6.2-77 - eMMC
MicroSD "Pine 2" - minimal
</pre>

<h3>Forum Thread on I3</h3>

<h4>
  <a href="https://forum.pine64.org/showthread.php?tid=4641" target="_blank">forum.pine64.org/showthread</a>
  i3 Window Manager Desktop Environment
</h4>

<h3>
  <a href="http://wiki.pine64.org/index.php/Main_Page#Imaging_microSD_on_Linux" target="_blank">wiki.pine64.org/index</a>
  Imaging microSD on Linux
</h3>


You will need the following utilities to get started with imaging the
OS of your choice onto your microSD card:

<ul>
  <li>
    A compression Utility (used to unarchive the OS image). We recommend you use 
    <a href="http://www.7-zip.org/download.html" target="_blank">7Zip.</a>
  </li>
  <li>
    A disk image utility (used to ‘burn’ the .img to your SD card in GUI). We recommend you use 
    <a href="https://etcher.io/" target="_blank">Etcher</a>
    or the 
    <a href="https://git.gnome.org/browse/gnome-disk-utility/" target="_blank">GUI Disks utility</a>
    that ships with most popular distros.
  </li>
</ul>

N.B. Phoenix Card utility and images are NOT available on Linux.


<h4>Downloading and extracting OS image(s)</h4>

You can find all OS images under 
<a href="http://wiki.pine64.org/index.php/Main_Page#Software_and_OS_Image_Downloads" target="_blank">Software and OS Image Downloads.</a>
On Linux you can only use images designated as ‘DD’.

Having downloaded the required OS image proceed to use 7zip to unarchive
it by double clicking the archive, and selecting ‘Extract All’. Upon
completion, note the destination where the .img file was extracted
(‘Downloads’ folder by default). Once the process has completed,
you can proceed to imaging the .img file.

</h4>Imaging the microSD card (GUI)</h4>

<ul>
  <li>
    Insert your microSD card into your Linux laptop/USB card reader. Once
    the microSD card is plugged into your computer it should appear in
    your File Manager / on your desktop.
  </li>

  <li>
    Launch Disks or the etcher utility (This tutorial outlines how
    to use Disks, if you wish to learn how to use Etcher please visit
    their website).
  </li>

  <li>
    Upon launching Disks, you will be presented with all volumes visible
    to your computer. As a rule of thumb, your microSD card should be
    found at the bottom of listed volumes. Verify this by checking the
    size and mounting of the microSD card. N.B. Pay close attention to
    the selected drive – the imaging process will format the selected
    drive. If you choose the wrong drive all your data will be lost.
  </li>

  <li>
    Having selected your microSD card, click the cog menu in top right
    corner and choose the ‘Restore Disk Image’ option from the
    drop-down list. Navigate to and select the OS image you extracted
    from the archive earlier. Once you select it, you will be asked
    to enter your password and to confirm writing to the chosen volume
    (microSD card).
  </li>

  <li>
    You will be given a predicted time, writing-speed and completion
    percentage. Once the image has been written to your microSD card you
    will receive a pop-up notification. Be sure to close the application
    and to eject/remove your SD card safely from your computer.
  </li>
</ul>

<h4>Imaging from Terminal</h4>

N.B. If you are not comfortable using the terminal, please use the GUI
method outlined above instead.

<ul>
  <li>Insert your microSD card into your Linux laptop/USB card reader. Once the microSD card is plugged into your computer it should appear in Finder / on your desktop.</li>
  <li>Open up your terminal and navigate to the directory where you unarchived your OS image.</li>
  <li>Before you start writing to the card, you will have to identify your microSD card.</li>
  <li>Type: lsblk and pay attention to the listed disks. Disks will appear as /dev/sda /dev/sdb etc. Look at the drive that matches your microSD card’s size.</li>
  <li>Having located the microSD card use the following command to burn the .img of choice to the microSD card (/dev/sdb used as example): ‘’sudo unmount /dev/sdb1</li>
  <li>Now you are ready to write the image to the microSD card using this command: ‘’sudo dd if=pine64_image_name.img of=/dev/sdb bs=1M</li>
  <li>Wait patiently for the process to complete. Be sure to eject/remove your SD card safely from your computer.</li>
</ul>

<h2>Linux I3 boot from sdcard</h2>

Sat Aug  5 13:59:11 MDT 2017

<h3>
  <a href="https://forum.pine64.org/showthread.php?tid=4807" target="_blank">forum.pine64.org/showthread</a>
  Xenial Images (Pinebook) 0.6.2-77
</h3>

Xenial Images (Pinebook) 0.6.2-77
post was last modified: 07-25-2017

<h4>
  <a href="https://github.com/ayufan-pine64/linux-build/releases/download/0.6.2/xenial-i3-pinebook-bspkernel-0.6.2-77.img.xz" target="_blank">i3 (Pinebook SDCard) 0.6.2-77</a>
</h4>

<pre>
xenial-i3-pinebook-bspkernel-0.6.2-77.img.xz

- THIS IS FOR SDCard BOOT!!!
- MD5 (XZ file): 11d8f75be9a1b337a27041a9ee7b55a6 
</pre>

<h4>
  <a href="https://i3wm.org/docs/" target="_blank">i3wm.org/docs/</a>
  Documentation for i3
</h4>

<h4>
  <a href="https://www.youtube.com/watch?v=j1I63wGcvU4&list=PL5ze0DjYv5DbCv9vNEzFmP6sU7ZmkGzcf" target="_blank">Code Cast youtube</a>
  i3wm: Jump Start (1/3)
</h4>

<pre>
wget https://github.com/ayufan-pine64/linux-build/releases/download/0.6.2/xenial-i3-pinebook-bspkernel-0.6.2-77.img.xz

md5sum xenial-i3-pinebook-bspkernel-0.6.2-77.img.xz
11d8f75be9a1b337a27041a9ee7b55a6  xenial-i3-pinebook-bspkernel-0.6.2-77.img.xz

unxz xenial-i3-pinebook-bspkernel-0.6.2-77.img.xz
  -> xenial-i3-pinebook-bspkernel-0.6.2-77.img

md5sum xenial-i3-pinebook-bspkernel-0.6.2-77.img 
15a4619f51fe703e5277083f4a9ec4cf  xenial-i3-pinebook-bspkernel-0.6.2-77.img
</pre>

<pre>
Inserted MicroSD labeled "Pine 1"

dmesg
 ...
[947405.574222] usb-storage 1-7:1.0: USB Mass Storage device detected
[947405.574428] scsi8 : usb-storage 1-7:1.0
[947406.591907] scsi 8:0:0:0: Direct-Access     Generic- USB3.0 CRW   -SD 1.00 PQ: 0 ANSI: 4
[947406.607386] scsi 8:0:0:1: Direct-Access     Generic- USB3.0 CRW   -MS 1.00 PQ: 0 ANSI: 4
[947406.607915] sd 8:0:0:0: Attached scsi generic sg3 type 0
[947406.608396] sd 8:0:0:1: Attached scsi generic sg4 type 0
[947407.318248] sd 8:0:0:0: [sdd] 60637184 512-byte logical blocks: (31.0 GB/28.9 GiB)
[947407.319266] sd 8:0:0:0: [sdd] Write Protect is off
[947407.319269] sd 8:0:0:0: [sdd] Mode Sense: 2f 00 00 00
[947407.320255] sd 8:0:0:0: [sdd] Write cache: disabled, read cache: enabled, doesn't support DPO or FUA
[947407.323936] sd 8:0:0:1: [sde] Attached SCSI removable disk
[947407.326684]  sdd: sdd1
[947407.332137] sd 8:0:0:0: [sdd] Attached SCSI removable disk

/media/craig/16BC-0F3E/

mount
 ...
/dev/sdd1 on /media/craig/16BC-0F3E type vfat (rw,nosuid,nodev,relatime,uid=1000,gid=1000,fmask=0022,dmask=0077,codepage=437,iocharset=utf8,shortname=mixed,showexec,utf8,flush,errors=remount-ro,uhelper=udisks2)

sudo umount /dev/sdd1

sudo dd if=xenial-i3-pinebook-bspkernel-0.6.2-77.img of=/dev/sdd bs=1M
</pre>

<h4>This booted</h4>

<h1>xenial-minimal-pinebook-bspkernel-0.6.2-77</h1>

<pre>
wget https://github.com/ayufan-pine64/linux-build/releases/download/0.6.2/xenial-minimal-pinebook-bspkernel-0.6.2-77.img.xz

md5sum xenial-minimal-pinebook-bspkernel-0.6.2-77.img.xz 
747f0833dd35969de499d081009ed7ae  xenial-minimal-pinebook-bspkernel-0.6.2-77.img.xz

unxz xenial-minimal-pinebook-bspkernel-0.6.2-77.img.xz
  -> xenial-minimal-pinebook-bspkernel-0.6.2-77.img

md5sum xenial-minimal-pinebook-bspkernel-0.6.2-77.img 
e30e78b21dbf20cb89b03ce7cc2932c3  xenial-minimal-pinebook-bspkernel-0.6.2-77.img
</pre>

<h4>Using MicroSD labeled "Pine 2"</h4>

<pre>
Using MicroSD labeled "Pine 2"
/media/craig/6DBC-0F3E/

mount
 ...
/dev/sdd1 on /media/craig/6DBC-0F3E type vfat 

sudo umount /dev/sdd1

sudo dd if=xenial-minimal-pinebook-bspkernel-0.6.2-77.img of=/dev/sdd bs=1M
3650+0 records in
3650+0 records out
3827302400 bytes (3.8 GB) copied, 509.927 s, 7.5 MB/s
</pre>

<h4>This booted</h4>


<pre>
See
/etc/update-motd.d/11-pine-a64-help-text
for these update scripts:

pine64_update_kernel.sh
pine64_update_uboot.sh
pine64_update_package.sh
pine64_install_to_emmc.sh
</pre>

<h3>
  Packages can be searched at
  <a href="https://packages.ubuntu.com/" target="_blank">packages.ubuntu.com/</a>
</h3>

<h2>Configure wifi</h2>

<h3>
  <a href="https://forum.pine64.org/showthread.php?tid=4641" target="_blank">forum.pine64.org/showthread</a>
  i3 Window Manager Desktop Environment
</h3>

<pre>
xalius Moderator

I would use either nmtui  which is a network manager interface for the
console, or just install the gnome network manager applet, but that has
a lot of packages for dependencies.
</pre>

<pre>
package network-manager - /usr/bin/mntui - not installed in minimal
package network-manager - /usr/bin/nmcli - not installed in minimal
package wireless-tools - /sbin/iwconfig - not installed in minimal

package wpasupplicant - /sbin/wpa_supplicant 	- installed in minimal
package wpasupplicant - /sbin/wpa_cli 	- installed in minimal
</pre>

<pre>
See files:

/etc/network/interfaces.d/eth0

/etc/network/interfaces.d/wlan1
  # Disable wlan1 by default (8723bs has two interfaces)
  iface wlan1 inet manual
</pre>

Note that dmesg has lines with RTL871X and rtl8723

<h3>
  <a href="https://help.ubuntu.com/community/WifiDocs/WiFiHowTo" target="_blank">help.ubuntu.com/community/</a>
  WifiDocs/WiFiHowTo
</h3>

See the section "Using the command Line"

<pre>
sudo ip link - shows the interfaces
  wlan0 is listed
</pre>

<h3>
  <a href="https://forum.pine64.org/showthread.php?tid=4645" target="_blank">forum.pine64.org/showthread</a>
  Minimal install wireless and usb ethernet
</h3>

On the minimal install of xenial linux, you will find that there is no
handy network-manager to help you auto-configure stuff. However, it's
not that hard to configure the wireless and usb ethernet manually once
you know what the steps are

<h4>Wireless</h4>

<ul>
  <li>Create /etc/network/interfaces.d/wlan0</li>
  <li>Create /etc/wpa-supplicant/wpa-supplicant.conf</li>
  <li>Bring the interface up</li>
</ul>

<h3>Join IRC to ask about wifi config with minimal</h3>

<pre>
Mon Aug  7 09:25:33 MDT 2017

On my Pinebook I've booted xenial-minimal-pinebook-bspkernel-0.6.2-77.img and want to configure wifi for my home wireless.

<&lukasz> replied with

[09:43] <&lukasz> let me find a link - will be easier ;)
[09:45] <&lukasz> https://bhattigurjot.wordpress.com/2013/10/26/connect-to-wi-fi-network-through-ubuntu-terminal/
[09:45] <&lukasz> dont know if that will make it permanent tho
[09:46] <&lukasz> think you have to add it to /etc/network/interfaces
[09:46] <&lukasz> let me check
[09:47] <&lukasz> https://unix.stackexchange.com/questions/283722/how-to-connect-to-wifi-from-command-line
</pre>

<h3>
  <a href="https://unix.stackexchange.com/questions/283722/how-to-connect-to-wifi-from-command-line" target="_blank">stackexchange.com/questions/</a>
  wifi setup with wpa_suplicant
</h3>

Mon Aug  7 11:38:12 MDT 2017

<pre>
sudo ip link - shows the interfaces
  wlan0 is listed

These files exist
  /etc/network/interfaces.d/eth0
  /etc/network/interfaces.d/wlan1

/etc/network/interfaces.d/wlan1 exists
</pre>

<h3>IRC</h3>

<pre>
Mon Aug  7 12:21:16 MDT 2017

Spinning my wheels, I need some help on configuring wifi with wpasupplicant on the xenial minimal 0.6.2-77 image.
</pre>

<h2>xenial-mate 0.6.2-77 MicroSD boot - MicroSD "Pine 1"</h2>

<pre>
wget https://github.com/ayufan-pine64/linux-build/releases/download/0.6.2/xenial-mate-pinebook-bspkernel-0.6.2-77.img.xz

md5sum
f7648c0a476f9b45356919f6ce5bac7c  xenial-mate-pinebook-bspkernel-0.6.2-77.img.xz
  matches

unxz xenial-mate-pinebook-bspkernel-0.6.2-77.img.xz
md5sum
  e3350735a517958470d914a11e7f6c96  xenial-mate-pinebook-bspkernel-0.6.2-77.img

mount
  /dev/sdd1 on /media/craig/BOOT
  /dev/sdd2 on /media/craig/rootfs

sudo umount /dev/sdd1
sudo umount /dev/sdd2

sudo dd if=xenial-mate-pinebook-bspkernel-0.6.2-77.img of=/dev/sdd bs=1M
</pre>

<h1>Pine64 Installer</h1>

<pre>
Linux x64 64-bit - pine64-installer-2.0.0-beta.2-linux-x64.zip
(MD5: 475d924cf58b4fc8b9457488c18f5ef2)
wget https://github.com/pine64dev/PINE64-Installer/releases/download/v2.0.0-beta.2/pine64-installer-2.0.0-beta.2-linux-x64.zip
</pre>

<h1> Xenial Mate - eMMC - 0.6.2-77 </h1>

<h4>
  <a href="http://files.pine64.org/os/Pinebook/ubuntu/xenial-mate-pinebook-bspkernel-0.6.2-77-sd2emmc.img.xz" target="_blank">Xenial Mate (Pinebook eMMC) 0.6.2-77</a>
</h4>

<ul>
  <li>THIS IS FOR eMMC!!!</li>
  <li>MD5 (XZ file): a945fa7e0e40eb6109c530d9815c20a3</li>
  <li>This build is based on ayufan's 0.6.2: jenkins-linux-build-pine-a64-77</li>
</ul>

<pre>
wget http://files.pine64.org/os/Pinebook/ubuntu/xenial-mate-pinebook-bspkernel-0.6.2-77-sd2emmc.img.xz

md5sum /home/craig/Downloads/pb/xenial-mate-pinebook-bspkernel-0.6.2-77-sd2emmc.img.xz
  a945fa7e0e40eb6109c530d9815c20a3  xenial-mate-pinebook-bspkernel-0.6.2-77-sd2emmc.img.xz

unxz xenial-mate-pinebook-bspkernel-0.6.2-77-sd2emmc.img.xz
md5sum /home/craig/Downloads/pb/xenial-mate-pinebook-bspkernel-0.6.2-77-sd2emmc.img
  87e53dfb3c0fe334d32b8f9ea57e660c  xenial-mate-pinebook-bspkernel-0.6.2-77-sd2emmc.img

sudo dd if=xenial-mate-pinebook-bspkernel-0.6.2-77-sd2emmc.img of=/dev/sdd bs=1M
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
