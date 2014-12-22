---
title: "Debian Virtualbox Host"
created_at: Fri May  9 15:26:31 MDT 2014
kind: article
tags: [ 'vm_host', 'linux', 'debian', 'virtualbox' ]
---

# Notes on setting up a Debian Virtualbox host for my employer

## Overview

https://www.virtualbox.org/manual/

https://blogs.oracle.com/virtualization/entry/new_commercial_license_for_oracle

* Oracle VM VirtualBox Enterprise - Named User Plus - $50 per named user
* Oracle's standard processor licensing, $1,000 per processor socket


# Setting up the host box.

# How to autostart vms

## Good guide to setting up autostart

http://lifeofageekadmin.com/how-to-set-your-virtualbox-vm-to-automatically-startup/

## Log

First you need to create the file /etc/default/virtualbox and add a
few variables.

<pre><code>
VBOXAUTOSTART_DB=/etc/vbox
VBOXAUTOSTART_CONFIG=/etc/vbox/vbox.cfg
</code></pre>

Create the file /etc/vbox/vbox.cfg

<pre><code>
root# mkdir /etc/vbox
</code></pre>

With one line.

<pre><code>
default_policy = allow
</code></pre>

Set permissions on directory to the vboxuser group and make sure users
can write to the directory as well as sticky bit.

<pre><code>
root# chgrp vboxusers /etc/vbox
root# chmod 1775 /etc/vbox
</code></pre>

Add administrator to the vboxusers group.

<pre><code>
root# groups administrator
administrator : administrator sudo

root# usermod -a -G vboxusers administrator

root# groups administrator
administrator : administrator sudo vboxusers
</code></pre>

Every user who wants to enable autostart for individual machines has to
set the path to the autostart database directory with

<pre><code>
administrator$ VBoxManage setproperty autostartdbpath /etc/vbox
</code></pre>

List the vms

<pre><code>
administrator$ VBoxManage list vms
"craigdeb" {0e7bca8b-b552-4ebb-9e39-bb1f6fb19d5c}
</code></pre>

<pre><code>
administrator$ VBoxManage modifyvm craigdeb --autostart-enabled on
</code></pre>

<pre><code>
root# update-rc.d virtualbox defaults
</code></pre>

## After log place holder

<img src="/assets/images/rhombic_diagram_with_angle.png" >

<pre><code>
code
</code></pre>

