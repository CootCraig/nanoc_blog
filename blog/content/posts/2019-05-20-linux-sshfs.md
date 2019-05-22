---
title: "Linux SSHFS"
created_at: Mon May 20 13:46:16 MDT 2019
kind: article
tags:
  - network_files
  - sshfs
  - linux
---

<h3>
  <a href="https://wiki.archlinux.org/index.php/SSHFS" target="_blank">wiki.archlinux.org</a>
  SSHFS
</h3>

SSHFS is a FUSE-based filesystem client for mounting remote directories over a Secure Shell connection. 

<h4>Automount on boot</h4>

<pre>
An example on how to use sshfs to mount a remote filesystem through /etc/fstab

USERNAME@HOSTNAME_OR_IP:/REMOTE/DIRECTORY  /LOCAL/MOUNTPOINT  fuse.sshfs  defaults,_netdev  0  0

Take for example the fstab line

llib@192.168.1.200:/home/llib/FAH  /media/FAH2  fuse.sshfs  defaults,_netdev  0  0

The above will work automatically if you are using an SSH key for the user.
See Using SSH Keys.

If you want to use sshfs with multiple users:

user@domain.org:/home/user  /media/user   fuse.sshfs    defaults,allow_other,_netdev    0  0

Again, it is important to set the _netdev mount option to make sure the
network is available before trying to mount.
</pre>

<h2>Assign fixed ip address to host ivie</h2>

<h4>Maybe no fixed ip address needed</h4>

<pre>
ping ivie
PING ivie.Home (192.168.0.4) 56(84) bytes of data.
64 bytes from ivie.local (192.168.0.4): icmp_seq=1 ttl=64 time=0.059 ms
</pre>

<h2>Use SSH keys</h2>

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
