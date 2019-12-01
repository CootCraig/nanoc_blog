---
title: "Arch Mate 2r9yq"
created_at: Tue Nov 26 11:36:06 MST 2019
kind: article
tags:
  - arch_linux
  - linux
  - linux_install
---

enp0s3 ethernet mac address
080027BBDDBF

<h4>
  <a href="https://wiki.archlinux.org/index.php/Installation_guide" target="_blank">wiki.archlinux.org/</a>
  Installation guide
</h4>

<h1>Install Log</h1>

<pre>
Installing on VirtualBox
hostname: arch-mate-2r9yq

archlinux-2019.11.01-x86_64.iso

Look at
  a - arch installation guide
and
  b - Installing Arch Linux in less than 10 minutes
</pre>

<h3>Boot the iso image</h3>

<pre>
b 0m 33s check internet connection.
  VirtualBox is wired connection so it should be network should be running - yes
b 1m 0s configure mirror list
  pacman -Syy - update pacman databases
  pacman -S python3
  pacman -S reflector
  reflector -c "United States" -f 12 -l 10 --save /etc/pacman.d/mirrorlist
b 1m 35s - partition hard drive
  fdisk -l
  fdisk /dev/sda - with dos label table
    /dev/sda1 start 2048 end rest of HD boot flag
b 2m 12s - format and mount sda1
    mkfs.ext4 /dev/sda1
    mount /dev/sda1 /mnt
    lsblk - shows mount points
b 2m 40s - install base system
    pacstrap /mnt base base-devel
a 2.2	Install essential packages
    pacstrap /mnt base linux linux-firmware
    pacstrap /mnt base base-devel linux linux-firmware dhcpcd netctl vim python3 reflector # My package choices
a 3	Configure the system
    genfstab -U -p /mnt >> /mnt/etc/fstab
    arch-chroot /mnt
    reflector -c "United States" -f 12 -l 10 --save /etc/pacman.d/mirrorlist
    ln -sf /usr/share/zoneinfo/America/Denver /etc/localtime
    hwclock --systohc
    Uncomment en_US.UTF-8 UTF-8 and other needed locales in /etc/locale.gen, and generate them with:
    # locale-gen
    Create the locale.conf(5) file, and set the LANG variable accordingly:
    /etc/locale.conf
    LANG=en_US.UTF-8
    Create the hostname file:
    /etc/hostname
    myhostname
    Add matching entries to hosts(5):
    /etc/hosts
    127.0.0.1	localhost
    ::1		localhost
    127.0.1.1	myhostname.localdomain	myhostname
b 4m 44s - systemctl enable dhcpcd - did not do this.
a 3	Configure the system
    Set the root password:
    # passwd
me  pacman -S intel-ucode
    pacman -S dosfstools
    pacman -S grub
b 5m 13s
    grub-install /dev/sda

    Generate the main configuration file

    Use the grub-mkconfig tool to generate /boot/grub/grub.cfg:
    # grub-mkconfig -o /boot/grub/grub.cfg
    By default the generation scripts automatically add menu entries
      for all installed Arch Linux kernels to the generated configuration.
</pre>

<h3>Boot the installd system</h3>

<h4>
  <a href="https://www.youtube.com/watch?v=WNkm6hq0pmw" target="_blank">sudoadmins - Linux Guides youtube</a>
  How to Enable Neworking in Arch Linux
</h4>

<pre>
ls -1 /etc/systemd/system/multi-user.target.wants/netctl*
rm /etc/systemd/system/multi-user.target.wants/netctl*

ip link
ip link show dev enp0s3

systemctl status dhcpcd@enp0s3
systemctl start dhcpcd@enp0s3
systemctl enable dhcpcd@enp0s3
</pre>

<h4>
  <a href="https://wiki.archlinux.org/index.php/reflector" target="_blank">wiki.archlinux.org</a>
  Reflector
</h4>

Reflector is a script which can retrieve the latest mirror list from
the MirrorStatus page, filter the most up-to-date mirrors, sort them by
speed and overwrite the file /etc/pacman.d/mirrorlist

<h2>
  <a href="https://wiki.archlinux.org/index.php/GRUB" target="_blank">wiki.archlinux.org/</a>
  Grub
</h2>

GRUB (GRand Unified Bootloader) is a multi-boot loader. It is derived
from PUPA which was a research project to develop the replacement of
what is now known as GRUB Legacy. The latter had become too difficult
to maintain and GRUB was rewritten from scratch with the aim to provide
modularity and portability [1]. The current GRUB is also referred to as
GRUB 2 while GRUB Legacy corresponds to versions 0.9x.

<h4>
  <a href="https://wiki.archlinux.org/index.php/GRUB#Generate_the_main_configuration_file" target="_blank">wiki.archlinux.org/</a>
  Generate the main configuration file
</h4>

<h2>network</h2>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration#Tips_and_tricks" target="_blank">wiki.archlinux.org/</a>
  Network Configuration - Tips and tricks
</h4>

<h1>youtube videos on install</h1>

<h4>
  <a href="https://www.youtube.com/watch?v=q6RP3-fpsgU" target="_blank">Piece of Cake youtube</a>
  Fastest way to setup WIFI connection in Arch Linux
</h4>

<pre>
cd /etc/netctl
cp examples/wireless-wpa
</pre>

<h4>
  <a href="https://www.youtube.com/watch?v=dOXYZ8hKdmc" target="_blank">Average Linux User youtube</a>
  Arch Linux UEFI step-by-step installation guide
</h4>

<pre>
16m 40s - grub
18m 50s - grub config file
</pre>

<h4>
  <a href="https://www.youtube.com/watch?v=GKdPSGb9f5s" target="_blank">Average Linux User</a>
  Installing Arch Linux in less than 10 minutes
</h4>

<h4>
  <a href="https://www.youtube.com/watch?v=-zb8220uUiA" target="_blank">ufoludek youtube</a>
  [NEW - 2019] Installation Guide - Arch Linux (UEFI & systemd-boot)
</h4>

<h4>
  <a href="https://www.youtube.com/watch?v=d91_jQ6qJb8" target="_blank">eznix youtube</a>
  Arch Linux Install - EFI UEFI System - Base MetaPackage - LXQt
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
