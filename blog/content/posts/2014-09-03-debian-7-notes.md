---
title: "Using Debian 7 (Wheezy)"
created_at: Wed Sep  3 08:03:45 MDT 2014
kind: article
tags: [ 'linux', 'debian' ]
---

# Overview - Switch from Lubuntu to Debian

Disruptive motivators:

* GCS workstations removed from server room
* GCS VM host running Debian / VirtualBox available
* HP envy LUG damaged in speed bump incident

* [Debian 7 Administrator's Handbook](http://debian-handbook.info/browse/wheezy/index.html)

# Netinstall - then ...

## BASIC DEV. TOOLS: COMPILER,VIM,TMUX,GIT

### Compiler and build tools

<pre><code>
sudo apt-get install build-essential checkinstall libtool automake uuid-dev
</code></pre>

### vim (or vim-gtk),tmux,git

<pre><code>
sudo apt-get install vim tmux git
</code></pre>

### Personalize git

<pre><code>
git config --global user.name "Your Name Here"
 # Sets the default name for git to use when you commit

git config --global user.email "your_email@example.com"
 # Sets the default email for git to use when you commit
</code></pre>

### Install the rsa public key on my github account

<pre><code>
ssh-keygen
</code></pre>

### Then clone the vim config and install

<pre><code>
cd
git clone git@github.com:CootCraig/dotfiles_again.git
cd ~/dotfiles_again/linux
bash install.sh
</code></pre>

Look at
/home/craig/dotfiles_again/windows/vimfiles/bundle/Readme.txt
for setting up the vim bundles.

### arrange for mounting windows shares

<pre><code>
apt-get install cifs-utils winbind
</code></pre>

Add the shares to mount.  Sample entry in /etc/fstab

<pre><code>
//gcs3/f$/GIT /media/gcsgit cifs rw,noauto,credentials=/home/craig/gcsww_canderson.txt,uid=craig 0 0
</code></pre>

Template credentials file

<pre><code>
username=a_user
password=a_password
domain=gcsww
</code></pre>

## Java SE 8u20

* [Java downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

Extracted jdk tar to /opt/java. Make external link.

<pre><code>
/opt/java/jdk -> /opt/java/jdk1.8.0_20/
</code></pre>

Modified /etc/profile

<pre><code>
if [ "`id -u`" -eq 0 ]; then
  PATH="/opt/java/jdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
else
  PATH="/opt/java/jdk/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games"
fi
</code></pre>

## JRuby

* [Download JRuby 1.7.15](http://jruby.org.s3.amazonaws.com/downloads/1.7.15/jruby-bin-1.7.15.tar.gz)

Unpacked to /opt/jruby.  Make symbolic link:

<pre><code>
/opt/ruby/jruby -> /opt/ruby/jruby-1.7.15/
</code></pre>

Added /opt/ruby/jruby/bin to path in /etc/profile

## vm guest use xorg dummy driver


## xfce desktop

* [Installing xfce after netinstall](http://forums.debian.net/viewtopic.php?f=30&t=71753#p400052)

<pre><code>
sudo apt-get install xorg xfce4 gdm3 xfce4-goodies
</code></pre>

Package: xserver-xorg-video-dummy (1:0.3.5-2 and others)
X.Org X server -- dummy display driver
This package provides a 'dummy' display driver, which does not actually display anything.

http://xpra.org/xorg.conf

HOWTO: headless, custom xorg resolution/modeline with vnc access to display 0 console
http://ubuntuforums.org/showthread.php?t=1832456

(This HOWTO will cover different aspects you might not need all of this, but if you need a) a custom resolution b) setup headless access c) access to the console (display :0)remotely part of this may be useful to you.)

So this was going to be a question but it turned into a HOWTO after spending hours on this. 

PROBLEM #1: I needed remote access to the console (display :0) of a server from a laptop because I needed to access the audio hardware (though I'm sure there are different reasons one needs access to :0) so nx, tightvnc, xvnc were all out. 
PROBLEM #2: The server had no monitor attached
PROBLEM #3: I was connecting with a laptop that had a resolution of 1280x800 but of course windows (and other OSes) have a task bar, so the actually workable area is less than that. I needed a resolution of 1224x685 (not your typical resolution).
PROBLEM #4: need the vnc server to start at boot to allow login from the server (no monitor).

1) Install x11vnc (this seems to be the only vnc server I found that allows console access, nomachine 4 (coming soon) and nomachine 3 have some form of 'physical screen' access, but I had a hard time with managing the audio hardware with that so I needed to use vnc.

http://askubuntu.com/questions/390113/x11vnc-much-slower-than-xvnc-how-to-get-a-xubuntu-session-manually

http://www.arachnoid.com/modelines/index.html

Headless VNC-Server using xvfb
http://gpio.kaltpost.de/?page_id=84

Xvfb on Debian 7 
https://github.com/tansaku/LocalSupport/wiki/Xvfb-on-Debian-7

How to use RDP from Windows to connect to Debian or Ubuntu machine
http://blog.technotesdesk.com/how-to-use-rdp-from-windows-to-connect-to-debian-or-ubuntu-machine/

# JRuby

# Desktop howto 

## XFCE desktop

### Use xfce 4.10 on Debian 7

* [Blog with notes for xfce from testing](https://thestandardoutput.com/2014/02/running-xfce-4-10-on-debian-7-4/)

### Config notes

## multiple monitors

### arandr to generate monitor set script

# Windows netbios names

* [Resolve Windows netbios names from Linux](https://www.zulius.com/how-to/resolve-windows-netbios-names-from-linux/)

# Virtual Box autostart guest

* [VirtualBox 4.3 autostart on Debian wheezy](http://www.vionblog.com/virtualbox-4-3-autostart-debian-wheezy/)

https://wiki.debian.org/VirtualBox#Kernel_driver_not_installed_.28rc.3D-1908.29

# Debian service management

* [Debian LSB based service install](https://wiki.debian.org/LSBInitScripts/DependencyBasedBoot)


