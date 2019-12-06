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

<h4>Install Log</h4>
<pre>
hostname is arch-toshiba-2q1mq
boot archlinux-2019.12.01-x86_64.iso
ip link -> wlan0
cd /etc/netctl
cp examples/wireless-wpa .
edit examples/wireless-wpa
wireless-wpa
netctl wireless-wpa

pacman -Syy
pacman -S python3
pacman -S reflector
reflector -c "United States" -f 20 -l 20 --save /etc/pacman.d/mirrorlist

fdisk -l -> /dev/sdx
wipefs /dev/sdx
gdisk /dev/sdx
  o - create new empty GPT
  n - 250M - type ef00
  n - 6M - type 8200
  n - rest of HD - type 8300
  write and exit
mkfs.vfat /dev/sdx1
mkfs.ext4 /dev/sdx3

mount /dev/sdx3 /mnt

pacstrap /mnt base base-devel linux linux-firmware dhcpcd netctl vim python3 reflector

mkdir /mnt/boot/efi
mount /dev/sdx1 /mnt/boot/efi

genfstab -U -p /mnt/boot/efi >> /mnt/etc/fstab
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
systemctl start dhcpd.service
systemctl enable dhcpd.service
</pre>

<h2>Wireless problem after 1st HD boot</h2>

<h1>Links</h1>

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
