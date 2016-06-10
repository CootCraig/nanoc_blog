---
title: "Church File Server"
created_at: Thu Jun  9 13:26:02 MDT 2016
kind: article
tags:
  - church
  - file_server
  - church_file_server
  - samba
  - linux
  - linux_admin
---

# Server Hardware

Proliant DL360 G6 server

<a href="http://h20566.www2.hpe.com/hpsc/doc/public/display?docId=emr_na-c01705733&docLocale=en_US" target="_blank">User Guide online</a>

processor

Intel® Xeon® Processor E5520 (8M Cache, 2.26 GHz, 5.86 GT/s Intel® QPI)

<a href="http://ark.intel.com/products/40200/Intel-Xeon-Processor-E5520-8M-Cache-2_26-GHz-5_86-GTs-Intel-QPI" target="_blank">Intel spec. page</a>

<ul>
  <li>Intel® Hyper-Threading Technology</li>
  <li>Intel® Virtualization Technology (VT-x)</li>
  <li>Intel® Virtualization Technology for Directed I/O (VT-d) </li>
  <li>Intel® VT-x with Extended Page Tables (EPT) </li>
  <li>Intel® 64 </li>
</ul>

# Ubuntu LTS

Ubuntu 16.04 (Xenial Xerus)

<a href="http://releases.ubuntu.com/16.04/" target="_blank">releases.ubuntu.com Ubuntu 16.04 (Xenial Xerus)</a>

LONDON 20th April 2016: Canonical announced today it will release Ubuntu
16.04 LTS on 21st April, featuring the new ‘snap’ package format and
LXD pure-container hypervisor. This is the latest version of the world’s
most widely used Linux platform across desktop, IoT and cloud computing.

<a href="https://wiki.ubuntu.com/XenialXerus/ReleaseNotes" target="_blank">16.04 release notes</a>


### <a href="https://help.ubuntu.com/" target="_blank">Official Ubuntu Documentation</a>

#### <a href="https://help.ubuntu.com/lts/serverguide/index.html" target="_blank">Ubuntu 16.04 Server Guide</a>

Virtualization is being adopted in many different environments and
situations. If you are a developer, virtualization can provide you
with a contained environment where you can safely do almost any sort of
development safe from messing up your main working environment. If you
are a systems administrator, you can use virtualization to more easily
separate your services and move them around based on demand.

The default virtualization technology supported in Ubuntu is KVM. KVM
requires virtualization extensions built into Intel and AMD hardware.

#### <a href="https://help.ubuntu.com/lts/serverguide/virtualization.html" target="_blank">Virtualization</a>

#### <a href="https://help.ubuntu.com/lts/serverguide/cloud-images-and-uvtool.html" target="_blank">Cloud images and uvtool</a>

uvtool's main commands:

<ul>
  <li>uvt-simplestreams-libvirt</li>
  <li>uvt-kvm</li>
</ul>

To create of a new virtual machine using uvtool, run the following in a terminal:

<pre><code>
 $ uvt-kvm create firsttest
</code></pre>

This will create a VM named firsttest using the current LTS cloud image
available locally. If you want to specify a release to be used to create
the VM, you need to use the release= filter:


# virtual hosting

## libvirt

<a href="" target="_blank"></a>

https://help.ubuntu.com/lts/serverguide/libvirt.html

# webmin

## webmin samba

<a href="http://doxfer.webmin.com/Webmin/Samba_Windows_File_Sharing" target="_blank">webmin Samba Windows File Sharing</a>

# Craig thoughts

Ubuntu 16.04 (Xenial Xerus)

docker

## Docker on Ubuntu

Docker is supported on these Ubuntu operating systems: - Ubuntu Xenial 16.04 (LTS)

<a href="https://docs.docker.com/engine/installation/linux/ubuntulinux/" target="_blank">docker.com ubuntu instructions</a>

Docker requires a 64-bit installation regardless of your Ubuntu
version. Additionally, your kernel must be 3.10 at minimum. The latest
3.10 minor version or a newer maintained version are also acceptable.


### <a href="http://www.ubuntu.com/cloud/lxd" target="_blank">Ubuntu lxd page</a>

Docker is an amazing application delivery mechanism, which may change
the world of devops forever.

There are seven times more Docker containers running on Ubuntu than
any other OS. For the most efficient way to deliver your binaries to a
platform for execution, Docker is the dance for us.

LXD and Docker share some underlying kernel capabilities, we aim to
bring much of the awesome security and isolation of LXD to Docker as well.

With Ubuntu 16.04 LTS, you can run your Docker containers inside LXD
containers.


### <a href="https://www.mirantis.com/blog/need-openstack-use-docker/" target="_blank">mirantis.com/blog - Do I need OpenStack if I use Docker?</a>

#### Background

keeping them isolated from one another. Virtual machines such as KVM do
a similar job by creating a complete operating system stack of all the
OS devices (through a hypervisor). However, unlike the virtual machine
approach, Docker relies on a built-in feature of the Linux operating
system named LXC (Linux containers).* LXC utilizes the built-in operating
system features of process isolation for memory, and to a lesser degree,
CPU and networking resources. Docker images do not require a complete
boot of a new operating system, and as a result, provide a much lighter
alternative for packaging and running applications on shared compute
resources. In addition, it allows direct access to the device drivers
which makes I/O operations faster than with a hypervisor approach. The
latter makes it possible to use Docker directly on bare metal which,
often times causes people to ask whether the use of a cloud such as
OpenStack is really necessary if they’re already using Docker.

Note: As of version 0.9, the default container technology for Docker is
its own libcontainer rather than LXC, but the concept is the same.


## openstack or docker or both

# Random Research

<a href="https://wiki.debian.org/SambaServerSimple" target="_blank">debian.org SambaServerSimple</a>

<a href="http://doxfer.webmin.com/Webmin/Samba_Windows_File_Sharing" target="_blank">webmin Samba Windows File Sharing</a>


<!--
html boilerplate
<a href="" target="_blank"></a>
<img src="" width="400px">
<ul>
  <li></li>
</ul>
<pre>
</pre>
<pre><code>
</code></pre>
-->

