---
title: "Pinebook Admin Log 02"
created_at: Fri Aug 11 08:11:57 MDT 2017
kind: article
tags:
  - pinebook
  - pinebook_admin
  - linux
  - linux_admin
---

<h5>Fri Aug 11 08:08:06 MDT 2017</h5>

<h4>Hostname - pining</h4>

<h1>What to install and configure</h1>

<h2>List to consider</h2>

<ul>
  <li>password dragon (check java)</li>
  <li>rbenv</li>
  <li>bash-it</li>
  <li>abiword</li>
  <li>thunar</li>
  <li>terminator</li>
  <li>nanoc</li>
  <li>reveal.js</li>
  <li>tracks</li>
  <li>email - thunderbird - icedove</li>
  <li>firefox</li>
  <li>java</li>
  <li>blah</li>
</ul>

<h2>Installed</h2>

<ul>
  <li>system ruby 2.3.1.p112</li>
  <li>gvim (vim-gtk)</li>
  <li>git 2.7.4 already installed</li>
  <li>tig gitk</li>
  <li>homesick (sudo gem install homesick)</li>
  <li>blah</li>
</ul>

<h1>Package Research</h1>

<h2>Ruby</h2>

<h2>vim</h2>

<h4>On ivie</h4>

<pre>
dpkg --get-selections |grep vim

vim						install
vim-common					install
vim-gtk						install
vim-gui-common					install
vim-runtime					install
vim-tiny					install
</pre>

<h2>git</h2>

<pre>
ssh-keygen
  Add public key at github

Personalize git

git config --global user.name "Your Name Here"
 # Sets the default name for git to use when you commit

git config --global user.email "your_email@example.com"
 # Sets the default email for git to use when you commit
</pre>

<h1>Log</h1>

<h3>Enable the root login</h3>

<h4>Mon Aug 14 10:26:06 MDT 2017</h4>

<h4>
  <a href="https://askubuntu.com/questions/44418/how-to-enable-root-login#44419" target="_blank">askubuntu.com/questions/44418</a>
  How to enable root login?
</h4>

<pre>
sudo passwd root
sudo passwd -u root
su -
passwd root
passwd pine64
<pre>

<h3>create account for administration</h3>

Need an account separate from pine64 and craig to mess with pine64 and craig accounts.

<h4>create addy account</h4>

<pre>
sudo adduser addy
sudo usermod --append --groups adm,sudo,video,plugdev,input addy
</pre>

<h4>Remove user pine64</h4>

Want user craig to be 1000:1000 as in ivie.
pine64 is 1000:1000

<pre>
  Login as addy
sudo userdel --force --remove pine64
</pre>

<h4>Add user craig</h4>

<pre>
sudo adduser craig
  craig is uid/gid 1000:1000 (now that pine64 is gone)
sudo usermod --append --groups adm,sudo,video,plugdev,input craig
</pre>

<h4>
  <a href="https://www.debian.org/doc/manuals/debian-handbook/sect.creating-accounts.en.html" target="_blank">debian.org/doc/manuals/debian-handbook</a>
  8.5. Creating Accounts
</h4>

<h3>update / upgrade</h3>

<pre>
apt-get update
apt-get dist-upgrade
<pre>

<h3>backup home folder to compare changes</h3>

in order to support homesick dotfile archiving.

<pre>
  (cd /home; find craig -type f ! -path 'craig/.cache/*')
</pre>

<h3>system ruby</h3>

<pre>
sudo apt-get install ruby
ruby -v
ruby 2.3.1.p112 (2016-04-26) [aarch64-linux-gnu]
<pre>

<pre>
apt-get update
apt-get dist-upgrade

sudo apt-get install ruby
ruby -v
ruby 2.3.1.p112 (2016-04-26) [aarch64-linux-gnu]
<pre>

<h3>gvim</h3>

<pre>
sudo apt-get install vim-gtk
</pre>

<h3>Check java version</h3>

<pre>
java -version
openjdk version "1.8.0_131"
 ...
OpenJKK 64-bit Server VM
</pre>

<!--
html boilerplate
<a href="" target="_blank"></a>
<a name=""></a>
<img src="" width="400px">
<ul>
  <li></li>
</ul>
<pre>
</pre>
<pre><code>
</code></pre>
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
</math>
-->
