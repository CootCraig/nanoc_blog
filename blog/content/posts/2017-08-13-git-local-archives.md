---
title: "Git local archives"
created_at: Sun Aug 13 08:50:35 MDT 2017
kind: article
tags:
  - git
  - git_thumb_drive
  - git_archives
---

Note that truly public git repos can use 2 remote repos:

<ul>
  <li>origin at github</li>
  <li>git1 on the local removable media volume</li>
</ul>

and private git repos would just have

<ul>
  <li>origin on the local removable media volume</li>
</ul>

<h1>Local Git Repos</h1>

<ul>
  <li>/media/craig/git1/data/git/mydragon.git/</li>
  <li>/media/craig/git1/data/git/nanoc_blog.git</li>
</ul>

<h4>Make a bare repo</h4>

<pre>
cd /media/craig/git1/data/git/
git init --bare writer2epub.git
cd /to/a/git-working-dir
git remote add git1 /media/craig/git1/data/git/writer2epub.git
</pre>

<pre>
git clone --bare some-git-source/ some-git-source.git
</pre>

<h4>Add git1 repo to a git working directory</h4>

<pre>
  Set a new remote
git remote add git1 /media/craig/git1/data/git/some-repo.git

  Verify new remote
git remote -v
</pre>

<h1>thumb drive</h1>

<h4>label: git1 (sandisk cruzer 128GB)</h4>

<h1>Set up git1 thumb drive</h3>

<h3>Format git1 thumb drive</h3>

<pre>
mount
 ...
/dev/sdd1 on /media/craig/art-images type fuseblk (rw,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other,blksize=4096,uhelper=udisks2)

sudo umount /dev/sdd1
sudo fdisk /dev/sdd

mkfs.ext4 --help
sudo mkfs.ext3 -L git1 /dev/sdd1

mount
 ...
/dev/sdd1 on /media/craig/git1 type ext4 (rw,nosuid,nodev,relatime,data=ordered,uhelper=udisks2)
</pre>

<h3>Get the uuid</h3>

<pre>
sudo ls -l /dev/disk/by-uuid
 .k..
lrwxrwxrwx 1 root root 10 Aug 13 12:19 e56ce154-0d47-4c63-a4be-388be3ba58d0 -> ../../sdd1

sudo blkid
 ...
/dev/sdd1: LABEL="git1" UUID="e56ce154-0d47-4c63-a4be-388be3ba58d0" TYPE="ext4"
</pre>

<h3>Sneakernet with git1 thumb drive</h3>

Arrange that the login craig have the same uid/gid on all computers.

Because the filesystem label is git1 the automount would be:

<h4>/media/craig/git1/</h4>

Make a data folder is writable by user craig.

<h4>/media/craig/git1/data</h4>

First directory structure:

<ul>
  <li>data/git - Place the git repos here.</li>
  <li>data/home_files_log - Keep logs of files in ~craig/ to support homesick</li>
  <li>data/xfer - Used to copy files between systems with ext3 automount</li>
</ul>

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
