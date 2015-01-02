---
title: "Vultr.com VPS - pt 1"
created_at: Thu Jan  1 13:38:29 MST 2015
kind: article
tags:
  - vultr.com
  - vps
  - cloud-host
  - x2go
  - remote-desktop
  - remote-x
---

## Goals and Thoughts

### fqdn - on.coot.net

* ssh access only
* X2Go Remote Desktop
* Private Gitlab
* Weechat IRC full time.

## vultr bottom 3 monthly pricing

* $5.00 - 1 CPU - 768MB mem - 15GB SSD - 1000GB bw
* $7.00 - 1 CPU - 1024MB mem - 20GB SSD - 2000GB bw
* $15.00 - 2 CPU - 2048MB mem- 40GB SSD - 3000GB bw

## X2Go Research

### [X2Go Packages for Debian GNU/Linux](http://wiki.x2go.org/doku.php/wiki:repositories:debian)

~~~~~~~~~~~~~
/etc/apt/sources.list.d/x2go.list
  X2Go Repository (release builds)
deb http://packages.x2go.org/debian wheezy main
  X2Go Repository (sources of release builds)
deb-src http://packages.x2go.org/debian wheezy main

  X2Go Repository (nightly builds)
deb http://packages.x2go.org/debian wheezy heuler
  X2Go Repository (sources of nightly builds)
deb-src http://packages.x2go.org/debian wheezy heuler
~~~~~~~~~~~~~

### X2Go Server

#### A local X.Org installation is not required on the X2Go Server

#### Connections are handled through the Linux distro's SSH server

Installation normally consists of adding the X2Go repository for your
Linux distro, and then installing the packages. Instructions are here. (A
local X.Org installation is not required on the X2Go Server).

Once installed, there is only a tiny service that needs to run in the
background. That daemon is a post-session clean-up daemon, but it is not
required to launch X2Go sessions. Connections are handled through the
Linux distro's SSH server and the users that are permitted to connect to
an X2Go desktop are those that are permitted to login over command-line
SSH. If SSH login works, X2Go will work, as well.

### X2Go Client

X2Go Client is available for ... many Linux distros. 

X2Go's “X Server” is called “nxagent”. It is part of the nx-libs
package.

#### [x2go client man page](http://code.x2go.org/doc/x2goclient/man/man1/x2goclient.1.html)

## x2go and i3

* [Damien J. Mannion - Remote connection to i3 via x2go](http://www.djmannion.net/notes.html#x2go)

