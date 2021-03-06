---
title: "Arch Linux"
created_at: Fri Oct 19 19:21:01 MDT 2018
kind: article
tags:
  - arch_linux
  - linux
---

<h1>
  <a href="https://wiki.archlinux.org/index.php/System_maintenance" target="_blank">wiki.archlinux.org</a>
  System Maintenance
</h1>

<h2>
  <a href="https://wiki.archlinux.org/index.php/System_maintenance#Upgrading_the_system" target="_blank">wiki.archlinux.org System_maintenance</a>
  Upgrading the system
</h2>

<h4>Read before upgrading the system</h4>

Before upgrading, users are expected to visit the 
<a href="https://www.archlinux.org/" target="_blank">Arch Linux home page</a>
to check the latest news, or alternatively subscribe to the RSS feed,
arch-announce mailing list, or follow @archlinux on Twitter. When
updates require out-of-the-ordinary user intervention (more than what
can be handled simply by following the instructions given by pacman),
an appropriate news post will be made.

Before upgrading fundamental software (such as the kernel, xorg, systemd,
or glibc) to a new version, look over the appropriate forum to see if
there have been any reported problems.

Users must equally be aware that upgrading packages can raise unexpected
problems that could need immediate intervention; therefore, it is
discouraged to upgrade a stable system shortly before it is required
for carrying out an important task. It is wise to wait instead to have
enough time in order to be able to deal with possible post-upgrade issues.

<h1>pacman</h1>

<h2>
  <a href="https://wiki.archlinux.org/index.php/Pacman" target="_blank">wiki.archlinux.org</a>
  pacman
</h2>

<h2>
  <a href="https://wiki.archlinux.org/index.php/Pacman/Tips_and_tricks" target="_blank">wiki.archlinux.org</a>
  pacman/Tips and tricks
</h2>

<h3>is gThumb installed?</h3>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Pacman/Tips_and_tricks#List_of_installed_packages" target="_blank">wiki.archlinux.org</a>
  List of installed packages
</h4>

pacman -Qqe > pkglist.txt

<h1>VirtualBox Guest</h1>

<h3>
  <a href="https://wiki.archlinux.org/index.php/VirtualBox#Enable_shared_folders" target="_blank">wiki.archlinux.org</a>
  Enable shared folders
</h3>

<h4>Get version of virtualbox guest additions</h4>

<pre>
$ pacman -Qe |grep virtualbox
virtualbox-guest-modules-arch 5.2.20-1
virtualbox-guest-utils 5.2.20-1
</pre>

<h4>Manual mount of shared folder</h4>

<pre>
sudo mount -t vboxsf craig /mnt/craig
sudo mount -t vboxsf r1 /mnt/r1
</pre>

<h4>
  <a name="Automounting">Virtualbox Automounting</a>
</h4>

Note: Automounting requires the vboxservice.service to be enabled/started.

In order for the automounting feature to work you must have checked the
auto-mount checkbox in the GUI or used the optional --automount argument
with the command VBoxManage sharedfolder.

The shared folder should now appear in /media/sharename. If users in media
cannot access the shared folders, check that media has permissions 755
or has group ownership vboxsf if using permission 750. This is currently
not the default if media is created by installing virtualbox-guest-utils.

You can use symlinks if you want to have a more convenient access and
avoid to browse in that directory, e.g.:

$ ln -s /media/sharename ~/mysharename

<pre>
sudo systemctl status vboxservice.service
sudo systemctl enable --now vboxservice.service

add craig to group media
sudo groupadd media
sudo usermod -aG media craig
sudo sudo usermod -a -G vboxsf craig
</pre>

<h1>Backups</h1>

<h3>
  <a href="https://github.com/teejee2008/timeshift" target="_blank">github.com/teejee2008</a>
  Timeshift
</h3>

<h4>
  <a href="https://aur.archlinux.org/packages/timeshift/" target="_blank">aur.archlinux.org/packages</a>
  timeshift
</h4>

Timeshift for Linux is an application that provides functionality similar
to the System Restore feature in Windows and the Time Machine tool in
Mac OS. Timeshift protects your system by taking incremental snapshots
of the file system at regular intervals. These snapshots can be restored
at a later date to undo all changes to the system.

In RSYNC mode, snapshots are taken using rsync and hard-links. Common
files are shared between snapshots which saves disk space. Each snapshot
is a full system backup that can be browsed with a file manager.

Timeshift is similar to applications like rsnapshot, BackInTime and
TimeVault but with different goals. It is designed to protect only
system files and settings. User files such as documents, pictures and
music are excluded. This ensures that your files remains unchanged when
you restore your system to an earlier date. If you need a tool to backup
your documents and files please take a look at the excellent 
<a href="https://github.com/bit-team/backintime" target="_blank">BackInTime application</a>
which is more configurable and provides options for saving
user files.

<h3>
  <a href="https://github.com/bit-team/backintime" target="_blank">github.com/bit-team</a>
  BackInTime application
</h3>

<h4>
  <a href="https://aur.archlinux.org/packages/backintime/" target="_blank">aur.archlinux.org/packages</a>
  backintime
</h4>

<h3>
  <a href="https://itsfoss.com/icon-themes-arch-linux/" target="_blank">itsfoss.com</a>
  Best Themes For Arch Linux, Antergos, Apricity OS And Manjaro
</h3>

<h3>
  <a href="https://www.deviantart.com/me4oslav/art/Numix-Circle-Linux-Desktop-Icon-Theme-414741466" target="_blank">deviantart.com/me4oslav</a>
  Numix-Circle Linux Desktop Icon Theme by me4oslav
</h3>

https://www.deviantart.com/users/outgoing?https://github.com/numixproject/numix-icon-theme-circle/issues/2430

<pre>
conflicting files:
numix-circle-icon-theme-git: /usr/share/icons/Numix-Circle/icon-theme.cache already exists in filesystem
</pre>

<h3>
  <a href="https://aur.archlinux.org/packages/numix-circle-icon-theme-git" target="_blank">aur.archlinux.org</a>
  Package Details: numix-circle-icon-theme-git 0.r35.cf7cb7c-1
</h3>

<pre>
erikdubois commented on 2019-01-08 20:52
Delete the obstructing cache file
sudo rm /usr/share/icons/Numix-Circle/icon-theme.cache
</pre>

<h1>Mate</h1>

<h3>
  <a href="https://wiki.archlinux.org/index.php/MATE" target="_blank">wiki.archlinux.org</a>
  Mate
</h3>

The MATE Desktop Environment is the continuation of GNOME 2. It provides
an intuitive and attractive desktop environment using traditional
metaphors for Linux and other Unix-like operating systems. MATE is under
active development to add support for new technologies while preserving
a traditional desktop experience.

<table class="wikitable">
<tbody><tr>
<th>Application
</th>
<th>GNOME 2
</th>
<th>MATE
</th></tr>
<tr>
<td>menu editor
</td>
<td>Alacarte
</td>
<td><span class="plainlinks archwiki-template-pkg"><a rel="nofollow" class="external text" href="https://www.archlinux.org/packages/?name=mozo">mozo</a></span>
</td></tr>
<tr>
<td>file manager
</td>
<td>Nautilus
</td>
<td><span class="plainlinks archwiki-template-pkg"><a rel="nofollow" class="external text" href="https://www.archlinux.org/packages/?name=caja">caja</a></span>
</td></tr>
<tr>
<td>window manager
</td>
<td>Metacity
</td>
<td><span class="plainlinks archwiki-template-pkg"><a rel="nofollow" class="external text" href="https://www.archlinux.org/packages/?name=marco">marco</a></span>
</td></tr>
<tr>
<td>text editor
</td>
<td>Gedit
</td>
<td><span class="plainlinks archwiki-template-pkg"><a rel="nofollow" class="external text" href="https://www.archlinux.org/packages/?name=pluma">pluma</a></span>
</td></tr>
<tr>
<td>image viewer
</td>
<td>Eye of GNOME
</td>
<td>Eye of MATE (<span class="plainlinks archwiki-template-pkg"><a rel="nofollow" class="external text" href="https://www.archlinux.org/packages/?name=eom">eom</a></span>)
</td></tr>
<tr>
<td>document viewer
</td>
<td>Evince
</td>
<td><span class="plainlinks archwiki-template-pkg"><a rel="nofollow" class="external text" href="https://www.archlinux.org/packages/?name=atril">atril</a></span>
</td></tr>
<tr>
<td>archive manager
</td>
<td>File Roller
</td>
<td><span class="plainlinks archwiki-template-pkg"><a rel="nofollow" class="external text" href="https://www.archlinux.org/packages/?name=engrampa">engrampa</a></span>
</td></tr></tbody></table>

<h1>AUR helpers</h1>

<h2>
  <a href="https://github.com/Jguer/yay" target="_blank">github.com/Jguer</a>
  Yet another Yogurt - An AUR Helper written in Go 
</h2>

<h4>Installation</h4>

If you are migrating from another AUR helper, you can simply install Yay with that helper.

Alternatively, the initial installation of Yay can be done by cloning the PKGBUILD and building with makepkg:

<pre>
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
</pre>

<h4>
  <a href="https://computingforgeeks.com/yay-best-aur-helper-for-arch-linux-manjaro/" target="_blank">computingforgeeks.com</a>
  yay – Best AUR Helper for Arch Linux / Manjaro
</h4>

<h4>
  <a href="https://www.ostechnix.com/yay-found-yet-another-reliable-aur-helper/" target="_blank">ostechnix.com/</a>
  Yay – Yet Another Reliable AUR Helper Written In GO
</h4>

<pre>
yay -Syu
yay -Pu
</pre>

<h1>youtube videos on install</h1>

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

<h1>Web links</h1>

<h4>
  <a href="https://www.youtube.com/watch?v=l_eyXpYpQVs" target="_blank">Shasten Marshall youtube</a>
  I Changed My Mind, I'm using Mate On My Arch Respin Instead Of XFCE4. Find Out Why!!
</h4>

<h1>Removable Storage</h1>

<h4>
  <a href="https://www.archlinux.org/packages/?name=udisks2" target="_blank">archlinux.org/packages</a>
  udisks2
</h4>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Udisks" target="_blank">wiki.archlinux.org</a>
  udisks
</h4>

udisks provides a daemon udisksd, that implements D-Bus interfaces used to
query and manipulate storage devices, and a command-line tool udisksctl,
used to query and use the daemon.

There are two versions of udisks called udisksAUR and udisks2. Development
of udisks has ceased in favor of udisks2. [1]

udisksd(8) (for udisks2) and udisks-daemon (for udisks) are started
on-demand by D-Bus, and should not be enabled explicitly.

udevil — Includes devmon, which is compatible to udisks and udisks2.

Note: devmon only uses udisks or udisks2 for mounting (in this order)
if udevil or pmount miss the SUID permission. To remove this permission,
run chmod -s /usr/bin/udevil as root.

<h4>
  <a href="https://www.archlinux.org/packages/community/x86_64/udevil/" target="_blank">archlinux.org/packages</a>
  udevil
</h4>

<pre>
udevil 0.4.4-3
Architecture:	x86_64
Repository:	Community
Description:	Mount and unmount without password
Upstream URL:	http://ignorantguru.github.com/udevil/
License(s):	GPL3
Provides:	devmon
</pre>

<h1>Printing</h1>
<pre>
pacman -Syy cups cups-pdf gutenprint foomatic-db-gutenprint-ppds

systemctl start/enable org.cups.cupsd.service

gimp-print driver escp2-et2550
usr/share/cups/model/gutenprint/5.3/Global/stp-escp2-et2550.5.3.sim.ppd.gz
</pre>

<h4>
  <a href="https://wiki.archlinux.org/index.php/CUPS" target="_blank">wiki.archlinux.org</a>
  Cups
</h4>
CUPS is the standards-based, open source printing system developed by
Apple Inc. for macOS® and other UNIX®-like operating systems.

The Linux Foundation's OpenPrinting workgroup provides cups-filters. Those
are backends, filters, and other binaries that were once part of CUPS but
are no longer maintained by Apple. They are available in the cups-filters
package that is a dependency of cups.

<h4>
  <a href="https://wiki.archlinux.org/index.php/CUPS#Installation" target="_blank">wiki.archlinux.org</a>
  Cups Installation
</h4>
<b>Install the cups package.</b>

If you intend to "print" into a PDF document, also install
the cups-pdf package. By default, pdf files are stored in
/var/spool/cups-pdf/username/. The location can be changed in
/etc/cups/cups-pdf.conf.

Enable and start org.cups.cupsd.service.

<h4>
  <a href="https://wiki.archlinux.org/index.php/CUPS#Gutenprint" target="_blank">wiki.archlinux.org</a>
  CUPS#Gutenprint
</h4>
<b>Gutenprint</b>
The Gutenprint project provides drivers for Canon, Epson, Lexmark, Sony,
Olympus, and PCL printers for use with CUPS and GIMP.

Install gutenprint and foomatic-db-gutenprint-ppds.

Note: When the Gutenprint packages get updated, the printers using
Gutenprint drivers will stop working until you run cups-genppdupdate as
root and restart CUPS. cups-genppdupdate will update the PPD files of
the configured printers, see cups-genppdupdate(8) for more details.

<h4>
  <a href="http://gimp-print.sourceforge.net/p_Supported_Printers.php" target="_blank">gimp-print.sourceforge.net</a>
  p_Supported_Printers.php
</h4>
<pre>
Epson Expression ET-2550 EcoTank	escp2-et2550
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
