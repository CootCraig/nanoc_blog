---
title: "Arch Linux On Cubox"
created_at: Sat Jul 12 18:17:11 MDT 2014
kind: article
tags: [ 'linux', 'cubox', 'arch_linux' ]
---

# Key Websites and Forums

* [Solid Run (Cubox Mfgr) Forum](http://www.solid-run.com/community/)
* [Rune Audio Forum](http://www.runeaudio.com/forum/)
* [Arch Linux ARM Forum](http://archlinuxarm.org/forum/)
* [Arch Linux Forum](https://www.archlinux.org/)
* [Planet Arch Linux](https://planet.archlinux.org/)
* [Arch Linux BBS](https://bbs.archlinux.org/)


# Log first install

First up is where to find the install and instructions.

* [Arch Linux Arm FAQ Page](http://archlinuxarm.org/support/faq)
* [Arch Linux Arm Forum](http://archlinuxarm.org/forum/)

Found the Cubox-I on this forum, ARMv7h

## [Install instructions here](http://archlinuxarm.org/platforms/armv7/freescale/cubox-i)

See the Installation Tab

## Zero out the first few MB of the card to remove any previous U-Boot environment:

<pre><code>
dd if=/dev/zero of=/dev/sdc bs=1M count=4
</code></pre>

## Start fdisk to partition the SD card:

<pre><code>
fdisk /dev/sdc
</code></pre>

At the fdisk prompt, create the new partitions:

Type n, then p for primary, 1 for the first partition on the drive,
8192 for the starting sector, and +20M for the ending sector.

Type t to set the type, then c to set it to FAT.

Type n, then p for primary, 2 for the second partition, 49152 for the
first sector, and press ENTER twice to accept default values.

Exit by typing w.

## Create and mount the vfat filesystem:

<pre><code>
mkfs.vfat /dev/sdc1
mkdir /tmp/boot
mount /dev/sdc1 /tmp/boot
</code></pre>

## Create and mount the ext4 filesystem:

<pre><code>
mkfs.ext4 /dev/sdc2
mkdir /tmp/root
mount /dev/sdc2 /tmp/root
</code></pre>

## Download and extract the root filesystem:

<pre><code>
cd /mnt/disk2/linux_distros/
wget http://archlinuxarm.org/os/ArchLinuxARM-imx6-cubox-latest.tar.gz
tar -xf /mnt/disk2/linux_distros/ArchLinuxARM-imx6-cubox-latest.tar.gz -C /tmp/root
</code></pre>

## Move boot files to the boot partition:

<pre><code>
mv /tmp/root/boot/* /tmp/boot
</code></pre>

## Install the U-Boot bootloader:

<pre><code>
dd if=/tmp/boot/SPL of=/dev/sdc bs=512 seek=2
dd if=/tmp/boot/u-boot.img of=/dev/sdc bs=1K seek=42
</code></pre>

## Unmount the partitions

<pre><code>
sync
umount /tmp/boot
umount /tmp/root
</code></pre>

## Boot the Cubox-I

Insert the SD card into the Cubox-i contacts uppermost, connect ethernet,
and apply 6-12V power.

Use the serial console (CN6 micro USB connector) or SSH to the IP address
given to the board by your router. The default root password is 'root'.

