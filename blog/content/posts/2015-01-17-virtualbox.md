---
title: "Virtualbox"
created_at: Sat Jan 17 06:01:09 MST 2015
kind: article
tags:
  - virtualbox
---

# Start Virtualbox Guest at boot

#### [forums.virtualbox.org - Start VMs at boot (new in 4.2.0)](https://forums.virtualbox.org/viewtopic.php?f=11&t=51529)

## vmhost01 at GCS

First you need to create the file /etc/default/virtualbox and add a
few variables.

~~~~~~~~~~~~~~
/etc/default/virtualbox
VBOXAUTOSTART_DB=/etc/vbox
VBOXAUTOSTART_CONFIG=/etc/vbox/autostart.conf
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
/etc/vbox/autostart.conf 
default_policy = deny

administrator = {
  allow = true
  startup_delay = 10
}

craig = {
  allow = true
  startup_delay = 30
}
~~~~~~~~~~~~~~

Set permissions on directory to the vboxuser group and make sure users
can write to the directory as well as sticky bit.

~~~~~~~~~~~~~~
Set permissions and mode on /etc/vbox
chgrp vboxusers /etc/vbox
chmod 1775 /etc/vbox

ls -ld /etc/vbox
drwxrwxr-t 2 root vboxusers 4096 Sep  3 18:17 /etc/vbox
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

~~~~~~~~~~~~~~
vboxmanage list vms
"MineOS" {c5869f0e-0d82-4f92-8ba3-61401e5f9289}
"chadeb01" {fc587445-f925-46e7-a2f7-35c50598c2b8}
"chawindows2008r2" {535ba7af-0d5d-4007-bad6-7ec37b7d1c3d}
"debxtest" {e6d55e7a-4d07-4707-a8e7-32942e674679}
"chapg" {98d06bc6-17b3-4187-94e3-65b15e461a18}
"Gitlab" {6d6d0634-6979-4b52-851d-cc44f08cbe99}
"FOG" {c8fd1830-2165-4246-8219-35d06b15dbc3}
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
Enable autostart with vboxmanage
VBoxManage startvm Gitlab --type headless
VBoxManage modifyvm Gitlab --autostart-enabled on
service vboxautostart-service restart
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
update-rc.d virtualbox defaults
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
vboxmanage showvminfo --details Gitlab
 ...
Autostart Enabled: off
Autostart Delay: 0
 ...
~~~~~~~~~~~~~~

<h1>Snapshots</h1>

<pre>
Fri Sep 28 22:10:44 MDT 2018
https://download.virtualbox.org/virtualbox/5.2.18/virtualbox-5.2_5.2.18-124319~Debian~jessie_amd64.deb
</pre>

<h3>
  <a href="https://www.youtube.com/watch?v=Qte4X-rdr2Q" target="_blank">Corey Schafer youtube</a>
  VirtualBox: How to Use Snapshots
</h3>

<h3>
<a href="" target="_blank"></a>
</h3>

<h3>
<a href="" target="_blank"></a>
</h3>

<h3>
<a href="" target="_blank"></a>
</h3>

<h3>
<a href="" target="_blank"></a>
</h3>

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
