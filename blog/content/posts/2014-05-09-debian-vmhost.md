---
title: "Debian Virtualbox Host"
created_at: Fri May  9 15:26:31 MDT 2014
kind: article
tags: [ 'vm_host', 'linux', 'debian', 'virtualbox' ]
---

# Notes on setting up a Debian Virtualbox host for my employer

## Overview

#### [virtualbox.org - manual/](https://www.virtualbox.org/manual/)

#### [blogs.oracle.com - new commercial license for oracle](https://blogs.oracle.com/virtualization/entry/new_commercial_license_for_oracle)

* Oracle VM VirtualBox Enterprise - Named User Plus - $50 per named user
* Oracle's standard processor licensing, $1,000 per processor socket

# Setting up the host box.

# How to autostart vms

#### [forums.virtualbox.org - Start VMs at boot (new in 4.2.0)](https://forums.virtualbox.org/viewtopic.php?f=11&t=51529)

#### [lifeofageekadmin - Good guide to setting up autostart](http://lifeofageekadmin.com/how-to-set-your-virtualbox-vm-to-automatically-startup/)


# Log

First you need to create the file /etc/default/virtualbox and add a
few variables.

~~~~~~~~~~~~~~
/etc/default/virtualbox
VBOXAUTOSTART_DB=/etc/vbox
VBOXAUTOSTART_CONFIG=/etc/vbox/vbox.cfg
~~~~~~~~~~~~~~

Create the file /etc/vbox/vbox.cfg
With one line.

~~~~~~~~~~~~~~
/etc/vbox/vbox.cfg
default_policy = allow
~~~~~~~~~~~~~~

Set permissions on directory to the vboxuser group and make sure users
can write to the directory as well as sticky bit.

~~~~~~~~~~~~~~
Set permissions and mode on /etc/vbox
chgrp vboxusers /etc/vbox
chmod 1775 /etc/vbox
~~~~~~~~~~~~~~

Add administrator to the vboxusers group.

~~~~~~~~~~~~~~
Add administrator to the vboxusers group.
groups administrator
administrator : administrator sudo

usermod -a -G vboxusers administrator

groups administrator
administrator : administrator sudo vboxusers
~~~~~~~~~~~~~~

Every user who wants to enable autostart for individual machines has to
set the path to the autostart database directory with

~~~~~~~~~~~~~~
VBoxManage setproperty autostartdbpath /etc/vbox
~~~~~~~~~~~~~~

List the vms

<pre><code>
VBoxManage list vms
"craigdeb" {0e7bca8b-b552-4ebb-9e39-bb1f6fb19d5c}
</code></pre>

<pre><code>
administrator$ VBoxManage modifyvm craigdeb --autostart-enabled on
</code></pre>

<pre><code>
root# update-rc.d virtualbox defaults
</code></pre>


