---
title: "VirtualBox Windows 7 8qxer"
created_at: Fri Sep 28 05:09:03 MDT 2018
kind: article
tags:
  - windows_7
  - virtual_windows_7
  - virtualbox
  - virtualbox_guest
---

<pre>
Hard Disk
Type: Normal (VDI)
Virtual Size: 64.00 GB
Actual Size: 7.30 GB
Details: Dynamically allocated differencing storage
Location: /home/craig/VirtualBox VMs/windows7-8qxer/windows7-8qxer.vdi
</pre>

<h1>Backup</h1>

<pre>
/media/craig/vmback374kr/windows7-8qxer/windows7-8qxer-20181011-0236.vdi
Thu Oct 11 02:36:58 MDT 2018
dd bs=256k if='/home/craig/VirtualBox VMs/windows7-8qxer/windows7-8qxer.vdi' of=/media/craig/vmback374kr/windows7-8qxer/windows7-8qxer-20181011-0236.vdi

d7393ce3abd068446b214d7124277f22de05e5cf  /home/craig/VirtualBox VMs/windows7-8qxer/windows7-8qxer.vdi
d7393ce3abd068446b214d7124277f22de05e5cf  /media/craig/vmback374kr/windows7-8qxer/windows7-8qxer-20181011-0236.vdi

Hard Disk
Type: Normal (VDI)
Virtual Size: 64.00 GB
Actual Size: 7.30 GB
Details: Dynamically allocated differencing storage
Location: /home/craig/VirtualBox VMs/windows7-8qxer/windows7-8qxer.vdi
</pre>

<h4>Generate unique private host id hash</h4>

<a href="https://codepen.io/ivanakimov/pen/bNmExm" target="_blank">Based on this codepen - ivanakimov</a>

See
<a href="/posts/2015/04/generate-private-hostnames/" target="_blank">local - Generate Private Host Names</a>

<pre>
https://codepen.io/ivanakimov/pen/bNmExm

var hashids = new Hashids("coot private stock", 5, "abcdefghijklmnopqrstuvwxyz1234567890");
var id = hashids.encode(4);
var numbers = hashids.decode(id);

$("#input").text("["+numbers.join(", ")+"]");
$("#output").text(id);

hashids.encode(4) => 8qxer - windows7-8qxer - 20180927
</pre>

<h2>Map Host Drive</h2>

/home/craig

<h2>
  <a href="https://vivaldi.com/download/" target="_blank">vivaldi.com/download</a>
  Vivaldi browser - grab Windows 7/8/10 Vivaldi 2.0 64bit
</h2>

<h2>Set Windows 7 update Policy</h2>

<h3>First install Microsoft Security Essentials antivirus</h3>

<h3>Set Update policy</h3>

<h4>
  <a href="https://www.howtogeek.com/345946/microsoft-blocks-all-windows-7-security-updates-unless-you-have-antivirus/" target="_blank">howtogeek.com/345946/</a>
  Microsoft Blocks All Windows 7 Security Updates Unless You Have Antivirus - Chris Hoffman - March 14th, 2018 
</h4>

Microsoft recommends you install an antivirus if you’re on Windows 7. For example, you could just install the 
<a href="https://support.microsoft.com/en-us/help/14210/security-essentials-download" target="_blank">free Microsoft Security Essentials antivirus</a>

<H4>
  <a href="https://download.microsoft.com/download/A/3/8/A38FFBF2-1122-48B4-AF60-E44F6DC28BD8/enus/amd64/mseinstall.exe" target="_blank">download.microsoft.com/download mseinstall.exe</a>
  English - Windows Vista/Windows 7 64-bit
</H4>

<h4>
  <a href="https://www.lifewire.com/windows-7-automatic-update-3507018" target="_blank">lifewire.com/windows-7</a>
  Understanding Windows 7 Automatic Updates and Update Options
  by Keith Ward Updated June 07, 2018 
</h4>

<h5>Used the lifewire article by Keith Ward</h5>

<h5>Install the pending important updates.</h5>

<pre>

Yes to important updates.
No to Recommended updates.
No to Optional updates
</pre>

<h5>
  <a href="https://www.digitalcitizen.life/how-learn-copy-windows-7-windows-8-activated" target="_blank">digitalcitizen.life/how</a>
  Check that Windows is activated
</h5>

<h5>
  <a href="https://support.microsoft.com/en-us/help/15083/windows-activate-windows-7-or-8-1" target="_blank">support.microsoft.com/en-us</a>
  Activate Windows 7 or Windows 8.1
</h5>

<h5>Change Update Options</h5>

<pre>
Windows Update > Change Settings
Important Updates:
  Check for updates but let me choose whether to download and install them

Recommended Updates
  [ ] Give me recommended updates the same way I receive important updates (disabled)

Microsoft Update
[ ] Give me updates for Microsoft products ... (disabled)
</pre>

<pre>
Fri Sep 28 14:05:44 MDT 2018

Snapshot:
windows7-8qxer Windows updates and update settings

</pre>

<h2>Install and restore Automotive Wolf</h2>

wget http://www.lonewolf-software.com/autowolf/AWsetup.exe

<pre>
/media/usb1/automotive-wolf
33354d5cf86463d742208f20ae0d0297d7349c874a963e323c27fb232bd7ea46  AWdb440.mdb
33354d5cf86463d742208f20ae0d0297d7349c874a963e323c27fb232bd7ea46  AWdb440.mdb
/home/craig/Downloads

C:\users\craig\AppData\Roaming
</pre>

<pre>
Fri Sep 28 18:47:23 MDT 2018

Snapshot:
windows7-8qxer automotive wolf install
</pre>

<h2>Kindle Calibre DeDRM KFX</h2>

<pre>
KindleForPC-installer-1.17.44170.exe

tools -> options -> general
  [ ] Automatically install updates when they are available without asking me - Uncheck this

   You will need to go to the preferences and uncheck the auto update
   checkbox. Then download and install 1.17 over the top of the 1.19
   installation. You'll also need to delete the KFX folders from your My
   Kindle Content folder.

calibre-3.32.0.msi -> C:\Users\craig\Calibre Library

https://github.com/apprenticeharper/DeDRM_tools/releases/tag/v6.6.1
DeDRM_tools_6.6.1.zip

For the latest Amazon KFX format, users of the calibre plugin should
also install the KFX Input plugin from the standard calibre plugin
menu. It’s also available from the MobileRead thread here:

https://www.mobileread.com/forums/showthread.php?t=291290
KFX Input.zip
</pre>


Snapshot:
windows7-8qxer Kindle Calibre DeDRM KFX

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
