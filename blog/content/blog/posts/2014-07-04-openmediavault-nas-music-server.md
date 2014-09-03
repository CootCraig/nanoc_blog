---
title: "OpenMediaVault NAS"
created_at: Fri Jul  4 18:49:02 MDT 2014
kind: article
tags: [ 'nas','rune_audio','mpd']
---

# [OpenMediaVault](http://www.openmediavault.org/)

OpenMediaVault is the next generation network attached storage
(NAS) solution based on Debian Linux. It contains services like SSH,
(S)FTP, SMB/CIFS, DAAP media server, RSync, BitTorrent client and many
more. Thanks to the modular design of the framework it can be enhanced
via plugins.

OpenMediaVault is primarily designed to be used in home environments
or small home offices, but is not limited to those scenarios. It is a
simple and easy to use out-of-the-box solution that will allow everyone
to install and administrate a Network Attached Storage without deeper
knowledge.

## Installation Wiki Page

* [0.5.48 i386.iso download](http://sourceforge.net/projects/openmediavault/files/0.5.48/)
* [Installation Notes](http://wiki.openmediavault.org/index.php?title=Installation)

### Minimum Requirements

* i486 or amd64 platform
* 1 GiB RAM
* 2 GiB HDD/DOM/CF/USB Thumb Drive used as OpenMediaVault system drive.
* NOTE: The entire disk is used as system disk. The disk can not be used to store user data.
* 1 HDD for data storage

### Services

* SSH
* FTP
* TFTP
* NFS (v3/v4)
* SMB/CIFS
* RSync

### Login information

Once you have installed the system, these are the default access credentials.

#### WebGUI

* User: admin
* Password: openmediavault

#### Client (SSH, console)

* User: root
* Password: set during installation

## Installation log

### Back up external USB drive from previous FreeNAS

I was unable to read the FreeNAS ufs drive on Ubuntu and gave up.

### Boot the install CD and proceed

* openmediavault_0.5.48_i386.iso

This fails to boot on the Dell Optiplex P4.
Fix is to disable serial in Bios settings.

Use SystemRecueCd to wipe partitions on HD.

### OpenMediaVault forum - found instruction on loading developer version


### Config Details

Add my user to ssh group to allow ssh sessions.

<pre><code>
 # usermod -a -G ssh 
</code></pre>

Desktop side.  Entry in /etc/fstab

<pre><code>
 //192.168.88.209/media /media/nas1 cifs rw,noperm,noauto,credentials=/home/craig/nas1_craig.txt,uid=craig,sec=ntlmv2 0 0
</code></pre>

Desktop side.  Contents of ~/nas1_craig.txt

<pre><code>
 username=manager
 password=ThePassword
 domain=WORKGROUP
</code></pre>

Server side

<pre><code>
 # ls -l /media/6a0bb210-b0fe-46eb-bd64-d5ba0dfab140/
 drwxr-s--- 2 manager users  4096 Jul  7 14:09 Media
</code></pre>

/etc/samba/smb.conf

<pre><code>
  #======================= Global Settings =======================
  [global]
  workgroup = WORKGROUP
  server string = %h server
  dns proxy = no
  log level = 0
  syslog = 0
  log file = /var/log/samba/log.%m
  max log size = 1000
  syslog only = yes
  panic action = /usr/share/samba/panic-action %d
  encrypt passwords = true
  passdb backend = tdbsam
  obey pam restrictions = yes
  unix password sync = no
  passwd program = /usr/bin/passwd %u
  passwd chat = *Enter\snew\s*\spassword:* %n\n *Retype\snew\s*\spassword:* %n\n *password\supdated\ssuccessfully* .
  pam password change = yes
  socket options = TCP_NODELAY IPTOS_LOWDELAY
  guest account = nobody
  load printers = no
  disable spoolss = yes
  printing = bsd
  printcap name = /dev/null
  unix extensions = yes
  wide links = no
  create mask = 0777
  directory mask = 0777
  use sendfile = yes
  aio read size = 16384
  aio write size = 16384
  null passwords = no
  local master = yes
  time server = no
  wins support = no
  map untrusted to domain = yes
  
  #======================= Share Definitions =======================
  [Media]
  comment = Nas1 Media Share
  path = /media/6a0bb210-b0fe-46eb-bd64-d5ba0dfab140//Media
  guest ok = no
  read only = no
  browseable = yes
  inherit acls = yes
  inherit permissions = no
  ea support = no
  store dos attributes = no
  printable = no
  create mask = 0755
  force create mode = 0644
  directory mask = 0755
  force directory mode = 0755
  hide dot files = yes
  valid users = "manager","player",@"player"
  invalid users = 
  read list = "player",@"player"
  write list = "manager"
</code></pre>

