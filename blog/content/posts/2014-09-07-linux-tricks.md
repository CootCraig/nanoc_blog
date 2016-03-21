---
title: "Linux Tricks"
created_at: Sun Sep  7 13:43:52 MDT 2014
kind: article
tags: [ 'linux' ]
---

# Find OS version

## debian

<pre><code>
$ lsb_release -a
No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux 7.6 (wheezy)
Release:	7.6
Codename:	wheezy
</code></pre>

# groups

~~~~~~~~~~~~~
$ groups craig
craig : craig dialout cdrom floppy sudo audio dip video plugdev netdev lpadmin scanner vboxusers gammu
~~~~~~~~~~~~~

### <a href="http://www.howtogeek.com/50787/add-a-user-to-a-group-or-second-group-on-linux/" target="_blank">Add a User to a Group (or Second Group) on Linux</a>

Changing the group a user is associated to is a fairly easy task, but
not everybody knows the commands, especially to add a user to a secondary
group. We’ll walk through all the scenarios for you.

#### Add a New Group

To add a new group, all you need to do is use the groupadd command
like so:

~~~~~~~~~~~~~
groupadd <groupname>
~~~~~~~~~~~~~

#### Add an Existing User to a Group

Next we’ll add a user to the group, using this syntax:

~~~~~~~~~~~~~
usermod -a -G <groupname> username
~~~~~~~~~~~~~

For example, to add user geek to the group admins, use the following
command:

~~~~~~~~~~~~~
usermod -a -G admins geek
~~~~~~~~~~~~~

#### Change a User’s Primary Group

Sometimes you might want to switch out the primary group that a user is
assigned to, which you can do with this command:

~~~~~~~~~~~~~
usermod -g <groupname> username
~~~~~~~~~~~~~

#### View a User’s Group Assignments

If you’re trying to figure out a permissions issue, you’ll want to
use the id command to see what groups the user is assigned to:

~~~~~~~~~~~~~
id <username>
~~~~~~~~~~~~~

This will display output something like this:

~~~~~~~~~~~~~
uid=500(howtogeek) gid=500(howtogeek) groups=500(howtogeek), 1093(admins)
~~~~~~~~~~~~~

You can also use the groups command if you prefer, though it is the same
as using id -Gn <username>.

~~~~~~~~~~~~~
groups <username>
~~~~~~~~~~~~~

#### View a List of All Groups

To view all the groups on the system, you can just use the groups command:

~~~~~~~~~~~~~
groups
~~~~~~~~~~~~~

#### Add a New User and Assign a Group in One Command

Sometimes you might need to add a new user that has access to a particular
resource or directory, like adding a new FTP user. You can do so with
the useradd command:

~~~~~~~~~~~~~
useradd -g <groupname> username
~~~~~~~~~~~~~

For instance, lets say you wanted to add a new user named jsmith to the
ftp group:

    useradd -G ftp jsmith

And then you’ll want to assign a password for that user, of course:

~~~~~~~~~~~~~
passwd jsmith
~~~~~~~~~~~~~

#### Add a User to Multiple Groups

You can easily add a user to more than one group by simply specifying them in a comma-delimited list, as long as you are assigning the secondary groups:

    usermod -a -G ftp,admins,othergroup <username>

That should cover everything you need to know about adding users to groups on Linux.


### <a href="https://wiki.debian.org/SystemGroups" target="_blank">Debian System Groups</a>


# Scraping Web Sites

wget can get a local copy of a url.

~~~~~~~~~~~~~
wget  --convert-links --adjust-extension --page-requisites --no-parent http://www.guitaralive.org/playlist_14_31.html

wget  --convert-links --adjust-extension --page-requisites --no-parent http://www.cpr.org/classical/playlist
~~~~~~~~~~~~~

HTML Tidy can be used as part of editing the scraped HTML

* [HTML Tidy Online](http://infohound.net/tidy/)

# Archive and Compression

## 7zip tar archives

~~~~~~~~~~~~~
7zip
apt-get install p7zip-full
7z a archive.tar.7z archive.tar
~~~~~~~~~~~~~

# Research and sites and links

* [30 Best Sources For Linux Documentation](http://www.cyberciti.biz/tips/linux-unix-bsd-documentations.html)

## sed

### [site](http://www.grymoire.com/Unix/Sed.html) Sed Tutorial by Bruce Barnett

## awk

### Bruce Barnett - Grymoire Awk Tutorial

#### [Grymoire](http://www.grymoire.com/Unix/Awk.html) Grymoire Awk Tutorial

This page includes Bruce Barnett's tutorials on UNIX shell programming
and various other arcane subjects of interest to wizards.

Since AWK is also an interpretor, like the shell, you can save yourself
a step and make the file executable by add one line in the beginning of
the file:

I prefer this format when possible. It's shorter and simpler. It's
also easier to debug problems.

~~~~~~~~~~~
Stand alone awk script
#!/usr/bin/awk -f
BEGIN 	{
  print "BEGIN here";
  exit;
}
~~~~~~~~~~~

### Daniel Robbins - Awk Tutorial at IBM Developer Works

#### [Tutorial at IBM Developer Works](http://www.ibm.com/developerworks/library/l-awk1/) Common threads: Awk by example, Part 1

Awk is a very nice language with a very strange name. In this first
article of a three-part series, Daniel Robbins will quickly get your
awk programming skills up to speed.

## techblog.netflix

<a href="http://techblog.netflix.com/2015/11/linux-performance-analysis-in-60s.html" target="_blank">Linux Performance Analysis in 1 min.</a>

~~~~~~~~~~~~~~
Linux Performance Analysis in 1 min.
uptime
dmesg | tail
vmstat 1
mpstat -P ALL 1
pidstat 1
iostat -xz 1
free -m
sar -n DEV 1
sar -n TCP,ETCP 1
top
~~~~~~~~~~~~~~

## SD Cards

### Debian groups

<b>plugdev:</b> Allows members to mount (only with the options nodev and
nosuid, for security reasons) and umount removable devices through pmount.

<b>cdrom:</b> This group can be used locally to give a set of users
access to a CDROM drive and other optical drives.

<b>floppy:</b> This group can be used locally to give a set of users
access to a floppy drive and other removable (non-optical) drives (like
USB flash drives). Starting with Debian 8 (Jessie) it is not used anymore
for USB and flash memories.

<b>staff:</b> Allows users to add local modifications to the
system (/usr/local) without needing root privileges (note that
executables in /usr/local/bin are in the PATH variable of any user,
and they may "override" the executables in /bin and /usr/bin with
the same name). Compare with group "adm", which is more related to
monitoring/security.

<b>disk:</b> Raw access to disks. Mostly equivalent to root access.

### partition

Plug in the storage device.
Look for the attached disk device.

~~~~~~~~~~~~~~
dmesg
[598127.074709] sd 26:0:0:0: [sde] Attached SCSI removable disk
[618067.958840] usb 3-2: new high-speed USB device number 19 using xhci_hcd
[618068.087458] usb 3-2: New USB device found, idVendor=0781, idProduct=5530
[618068.087462] usb 3-2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[618068.087464] usb 3-2: Product: SanDisk Cruzer
[618068.087466] usb 3-2: Manufacturer: SanDisk
[618068.087468] usb 3-2: SerialNumber: 1738000A80108BA7
[618068.087937] usb-storage 3-2:1.0: USB Mass Storage device detected
[618068.088052] scsi27 : usb-storage 3-2:1.0
[618069.088024] scsi 27:0:0:0: Direct-Access     SanDisk  SanDisk Cruzer   8.02 PQ: 0 ANSI: 0 CCS
[618069.088534] sd 27:0:0:0: Attached scsi generic sg6 type 0
[618069.088796] sd 27:0:0:0: [sdg] 7913471 512-byte logical blocks: (4.05 GB/3.77 GiB)
[618069.088946] sd 27:0:0:0: [sdg] Write Protect is off
[618069.088951] sd 27:0:0:0: [sdg] Mode Sense: 45 00 00 08
[618069.089123] sd 27:0:0:0: [sdg] No Caching mode page found
[618069.089131] sd 27:0:0:0: [sdg] Assuming drive cache: write through
[618069.093609]  sdg: sdg1
[618069.094681] sd 27:0:0:0: [sdg] Attached SCSI removable disk
~~~~~~~~~~~~~~

So
[618069.093609]  sdg: sdg1

~~~~~~~~~~~~~~
mount
/dev/sdg1 on /media/craig/MP3_1 type vfat (rw,nosuid,nodev,relatime,uid=1000,gid=1000,fmask=0022,dmask=0077,codepage=437,iocharset=utf8,shortname=mixed,showexec,utf8,flush,errors=remount-ro,uhelper=udisks2)
~~~~~~~~~~~~~~

#### My usage

* unmount with thunar
* as root: gparted /dev/sdg

### format

# File information


### List jpg file names and create date

~~~~~~~~~~~~~~
List jpg file names and create date
ls *JPG 
  |xargs identify -verbose 
  |egrep 'Image:
  |date:create' 
  | paste -sd ' \n' 
  >~/tmp/pics.txt

Image: DSC_0038.JPG     date:create: 2015-11-15T18:52:14-07:00
Image: DSC_0039.JPG     date:create: 2015-11-15T18:52:28-07:00
Image: DSC_0040.JPG     date:create: 2015-11-15T18:53:00-07:00
Image: DSC_0041.JPG     date:create: 2015-11-15T18:53:40-07:00
Image: DSC_0042.JPG     date:create: 2015-11-15T18:54:42-07:00
Image: DSC_0043.JPG     date:create: 2015-11-15T18:55:08-07:00
Image: DSC_0044.JPG     date:create: 2015-11-15T18:55:32-07:00
~~~~~~~~~~~~~~

# imap


<a href="https://delog.wordpress.com/2011/05/10/access-imap-server-from-the-command-line-using-openssl/" target="_blank">delog.wordpress.com article</a>


<PRE>
openssl s_client -crlf -connect imap.gmail.com:993
tag login user@gmail.com password
tag LIST "" "*"
</PRE>

<!--
html boilerplate
<a href="" target="_blank"></a>
<img src="" width="400px">
-->

