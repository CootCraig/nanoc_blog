---
title: "Learning With Texts"
created_at: Fri Jun  7 08:48:28 MDT 2019
kind: article
tags:
  - learning_with_texts
---

<h3>
  <a href="http://localhost/lwt/info.htm#howto" target="_blank">localhost/lwt/</a>
  Local how to use page.
</h3>

<h1>Install</h1>

<h2>Arch LAMP</h2>

<h3>
<a href="https://www.linode.com/docs/web-servers/lamp/how-to-install-a-lamp-stack-on-arch-linux/" target="_blank">linode.com/docs/</a>
  How to Install a LAMP Stack on Arch Linux - February 18, 2019 by Alex Fornuto
</h3>

<pre>
/etc/httpd/conf/httpd.conf

DocumentRoot "/srv/http"

sudo systemctl list-unit-files |grep -i httpd.service
httpd.service                                                    disabled       

systemd target:
  runlevel3.target, multi-user.target
Notes:
  Multi-user, non-graphical. Users can usually login via multiple consoles or via the network. 

Rename the file connect_xampp.inc.php in /home/[your userid]/Downloads/lwt to connect.inc.php. 

sudo systemctl enable httpd
sudo systemctl is-enabled httpd
sudo systemctl start httpd
sudo systemctl stop httpd
sudo systemctl restart httpd

php  7.3.6-1
php-apache  7.3.6-1
</pre>

<h2>MariaDB</h2>

<h3>
  <a href="https://wiki.archlinux.org/index.php/MariaDB" target="_blank">wiki.archlinux.org/</a>
  Mariadb
</h3>

<h2>
  <a href="https://wiki.archlinux.org/index.php/PhpMyAdmin" target="_blank">wiki.archlinux.org/</a>
  phpMyAdmin
</h2>

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
