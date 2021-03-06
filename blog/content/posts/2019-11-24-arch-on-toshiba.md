---
title: "Arch on Toshiba"
created_at: Sun Nov 24 20:52:05 MST 2019
kind: article
tags:
  - arch_on_toshiba
  - arch_linux
  - arch
  - laptop
  - notebook_computer
---
Model is Toshiba Satellite C55-C5390

This is a UEFI install.

<h4>
  <a href="https://wiki.archlinux.org/index.php/Installation_guide" target="_blank">wiki.archlinux.org</a>
  Installation guide
</h4>
This document is a guide for installing Arch Linux from the live system booted with the official installation image. 

<h4>hostname</h4>
12 => 2q1mq - arch-toshiba-2q1mq - 20191204 - Toshiba Satellite

See <a href="/posts/2015/04/generate-private-hostnames/" target="_blank">Generate Private Host Names</a>

<h4>Arch ISO image</h4>
<pre>
du -sm archlinux-2019.12.01-x86_64.iso 
640	archlinux-2019.12.01-x86_64.iso

Copy iso to a thumb drive.
lsblk - to get path to media
sudo dd bs=4M if=/home/craig/Downloads/archlinux-2019.12.01-x86_64.iso of=/dev/sde status=progress oflag=sync
</pre>

<h3>wifi setup.  Mon Dec  9 21:31:28 MST 2019</h3>
<h4>Install Log</h4>
<pre>
hostname is arch-toshiba-2q1mq
boot archlinux-2019.12.01-x86_64.iso
ip link -> wlan0
cd /etc/netctl
cp examples/wireless-wpa .
edit wireless-wpa
netctl start wireless-wpa
ping -c 3 google.com

pacman -Syy
pacman -S python3
pacman -S reflector
reflector -c "United States" -f 20 -l 20 --save /etc/pacman.d/mirrorlist

fdisk -l -> /dev/sdx
wipefs -a /dev/sdx
gdisk /dev/sdx
  o - create new empty GPT
  n - 250M - type ef00
  n - 6M - type 8200
  n - rest of HD - type 8300
  write and exit
mkfs.vfat /dev/sdx1
mkfs.ext4 /dev/sdx3

mount /dev/sdx3 /mnt

pacstrap /mnt base base-devel linux linux-headers linux-firmware ifplugd vim python3 reflector

mkdir /mnt/boot/efi
mount /dev/sdx1 /mnt/boot/efi

genfstab -U -p /mnt >> /mnt/etc/fstab

arch-chroot /mnt

reflector -c "United States" -f 20 -l 20 --save /etc/pacman.d/mirrorlist

ln -sf /usr/share/zoneinfo/America/Denver /etc/localtime
hwclock --systohc

Uncomment en_US.UTF-8 UTF-8 and other needed locales in /etc/locale.gen, and generate them with:
 # locale-gen

Create the locale.conf(5) file, and set the LANG variable accordingly:
/etc/locale.conf
LANG=en_US.UTF-8

Create file /etc/hostname
arch-toshiba-2q1mq 

Add matching entries to /etc/hosts
127.0.0.1 localhost
::1 localhost
127.0.1.1 arch-toshiba-2q1mq .localdomain arch-toshiba-2q1mq

set the root password
 # passwd

pacman -S broadcom-wl-dkms
pacman -S iwd
pacman -S intel-ucode
pacman -S dosfstools
pacman -S grub efibootmgr

grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB
grub-mkconfig -o /boot/grub/grub.cfg

exit - the chroot
shutdown -h now
pull the iso thumb drive.
</pre>

<h4>Boot the hd</h4>
<pre>
  iwd's network configuration feature
/etc/iwd/main.conf
[General]
EnableNetworkConfiguration=true

  iwd DNS manager systemd-resolved
/etc/iwd/main.conf
[Network]
NameResolvingService=systemd

ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf
systemctl start/enable systemd-networkd.service
systemctl start/enable ifplugd@eth0.service
systemctl stat/enable iwd.service
systemctl start/enable systemd-resolved.service

  Tip: In order to check the DNS actually used by systemd-resolved, the command to use is:
resolvectl status
</pre>

<h4>Reboot the hd</h4>
<pre>
iwctl
</pre>

<h2>Wireless problem after 1st HD boot</h2>

<pre>
lspci -vnn -d 14e4:

Broadcom ... BCM43142 [14e4:4365]
 ...
kernel driver in use: wl
kernel modules: wl
</pre>

Broadcom BCM43142 [14e4:4365] not supported in brcm80211 or b43 drivers. See
<a href="https://wiki.archlinux.org/index.php/Broadcom_wireless#Installation" target="_blank">Broadcom wireless installation</a>

<h3>So try <a href="https://www.archlinux.org/packages/?name=broadcom-wl-dkms" target="_blank">broadcom-wl-dkms</a> </h3>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Broadcom_wireless#Interface_is_showing_but_not_allowing_connections" target="_blank">wiki.archlinux.org</a>
  Interface is showing but not allowing connections
</h4>
Try this.  Append the following kernel parameter:
<pre>
b43.allhwsupport=1
</pre>

<h1>Links</h1>

<h4>
  <a href="https://wiki.archlinux.org/index.php/broadcom_wireless#broadcom-wl" target="_blank">wiki.archlinux.org/</a>
  broadcom_wireless broadcom-wl
</h4>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Iwd" target="_blank">wiki.archlinux.org</a>
  iwd
<h4>
<h4>
  <a href="https://wiki.archlinux.org/index.php/Iwd#Optional_configuration" target="_blank">wiki.archlinux.org</a>
  Iwd#Optional_configuration
<h4>
The PreSharedKey can be calculated from the SSID and the WiFi passphrase using wpa_passphrase (from wpa_supplicant) or wpa-pskAUR:

<h4>
  <a href="https://wiki.archlinux.org/index.php/WPA_supplicant" target="_blank">wiki.archlinux.org</a>
  wpa_supplicant
</h4>

<h4>
  <a href="https://bbs.archlinux.org/viewtopic.php?pid=1600517#p1600517" target="_blank">bbs.archlinux.org/</a>
  [SOLVED] Trying to install and work the Broadcom wireless-BMC43142
</h4>

<h4>
  <a href="https://appuals.com/partition-configure-drives-linux-uefi-boot/" target="_blank">appuals.com/</a>
  How to Partition and Configure Drives for Linux UEFI Boot By Kevin Arrows
</h4>

I cribbed the gdisk stuff in the above log from this. It works.

Run gdisk /dev/sda from a root prompt.

Running wipefs -a /dev/sda is a good way to eliminate any signatures from
the drive, but once again this will render everything you currently have
on it inaccessible.

<h4>
  <a href="https://wiki.archlinux.org/index.php/GRUB#UEFI_systems" target="_blank">wiki.archlinux.org/</a>
  GRUB - UEFI systems
</h4>
<b>I used this as a guide. It worked.</b>

First, install the packages grub and efibootmgr: GRUB is the bootloader
while efibootmgr is used by the GRUB installation script to write boot
entries to NVRAM.

Then follow the below steps to install GRUB:

Mount the EFI system partition and in the remainder of this section, substitute esp with its mount point.

Choose a bootloader identifier, here named GRUB. A directory of that name will be created in esp/EFI/ to store the EFI binary and this is the name that will appear in the UEFI boot menu to identify the GRUB boot entry.

Execute the following command to install the GRUB EFI application grubx64.efi to esp/EFI/GRUB/ and install its modules to /boot/grub/x86_64-efi/.

<pre>
grub-install --target=x86_64-efi --efi-directory=esp --bootloader-id=GRUB
</pre>

After the above install completed the main GRUB directory is located
at /boot/grub/. Note that grub-install also tries to create an entry in
the firmware boot manager, named GRUB in the above example.

Remember to Generate the main configuration file after finalizing the configuration.

Remember that /boot/grub/grub.cfg has to be re-generated after any change to /etc/default/grub or files in /etc/grub.d/.

The default file path is /boot/grub/grub.cfg, not /boot/grub/i386-pc/grub.cfg.

If you are trying to run grub-mkconfig in a chroot or systemd-nspawn
container, you might notice that it does not work, complaining that
grub-probe cannot get the "canonical path of /dev/sdaX". In this case,
try using arch-chroot as described in the BBS post.

If you are installing GRUB in chroot environment using LVM and the
grub-mkconfig hangs indefinitely, see #Device /dev/xxx not initialized
in udev database even after waiting 10000000 microseconds.

Use the grub-mkconfig tool to generate /boot/grub/grub.cfg:

grub-mkconfig -o /boot/grub/grub.cfg

<h4>
  <a href="https://wiki.archlinux.org/index.php/Swap#Swap_partition" target="_blank">wiki.archlinux.org/</a>
  Swap - Swap partition
</h4>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration/Wireless" target="_blank">wiki.archlinux.org</a>
  Network configuration/Wireless
</h4>
The main article on network configuration is 
<a href="https://wiki.archlinux.org/index.php/Network_configuration" target="_blank">Network configuration</a>

Configuring wireless is a two-part process; the first part is to identify
and ensure the correct driver for your wireless device is installed (they
are available on the installation media, but often have to be installed
explicitly), and to configure the interface. The second is choosing a
method of managing wireless connections. This article covers both parts,
and provides additional links to wireless management tools.

<h4>
  <a href="https://wireless.wiki.kernel.org/en/users/documentation/iw" target="_blank">wireless.wiki.kernel.org</a>
  About iw
</h4>
iw is a new nl80211 based CLI configuration utility for wireless
devices. It supports all new drivers that have been added to the kernel
recently. The old tool iwconfig, which uses Wireless Extensions interface,
is deprecated and it's strongly recommended to switch to iw and nl80211.

Like the rest of the Linux kernel, iw is still under development. Features
are added 'as we go'. The only documentation for iw is this page and
output from 'iw help'. Please help expand this page.

<h4>
  <a href="https://wireless.wiki.kernel.org/en/users/documentation/wpa_supplicant" target="_blank">wireless.wiki.kernel.org</a>
  wpa_supplicant Linux documentation page
</h4>

<h4>
  <a href="https://w1.fi/wpa_supplicant/" target="_blank">w1.fi/</a>
  Linux WPA/WPA2/IEEE 802.1X Supplicant
</h4>
wpa_supplicant is a WPA Supplicant for Linux, BSD, Mac OS X, and Windows
with support for WPA and WPA2 (IEEE 802.11i / RSN). It is suitable
for both desktop/laptop computers and embedded systems. Supplicant is
the IEEE 802.1X/WPA component that is used in the client stations. It
implements key negotiation with a WPA Authenticator and it controls the
roaming and IEEE 802.11 authentication/association of the wlan driver.

wpa_supplicant is designed to be a "daemon" program that runs in the
background and acts as the backend component controlling the wireless
connection. wpa_supplicant supports separate frontend programs and a
text-based frontend (wpa_cli) and a GUI (wpa_gui) are included with
wpa_supplicant.

<h4>
  <a href="https://w1.fi/cgit/hostap/plain/wpa_supplicant/README" target="_blank">w1.fi/</a>
  wpa_supplicant README
</h4>

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
:-->
