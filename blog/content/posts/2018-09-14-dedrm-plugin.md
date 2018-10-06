---
title: "DeDRM Plugin for Calibre"
created_at: Fri Sep 14 05:42:31 MDT 2018
kind: article
tags:
  - dedrm_plugin
  - books
  - ebooks
  - apprenticealf
---

<h3>
  <a href="https://apprenticealf.wordpress.com/2012/09/10/drm-removal-tools-for-ebooks/" target="_blank">apprenticealf.wordpress.com main page</a>
  For support, comment on apprenticealf main page
</h3>

<h3>
  <a href="https://github.com/apprenticeharper/DeDRM_tools/blob/master/FAQs.md#i-cannot-solve-my-problem-with-the-dedrm-plugin-and-now-i-need-to-post-a-log-how-do-i-do-that" target="_blank">github.com/apprenticeharper/DeDRM</a>
</h3>

I cannot solve my problem with the Windows DeDRM application, and now
I need to ‘post a log’. How do I do that?

The Windows DeDRM application creates a log file in your home directory
(C:\Users[username]) every time it is run. After unsuccessfully removing
DRM from one ebook, copy the contents of the log file (it is a simple
text file) and paste it into your comment at Apprentice Alf's blog or
in a new issue at Apprentice Harper's github repository.

<h1>
  <a href="https://github.com/apprenticeharper/DeDRM_tools" target="_blank">github - apprenticeharper/DeDRM_tools</a>
</h1>

This is a repository of all the scripts and other tools for removing
DRM from ebooks that I could find, committed in date order as best as
I could manage. (Except for the Requiem tools for Apple's iBooks, and
Convert LIT for Microsoft's .lit ebooks.)

Mostly it tracks the tools releases by Apprentice Alf, athough it also
includes the individual tools and their histories from before Alf had
a blog.

Users should download the latest zip archive. Developers might be
interested in forking the repository, as it contains unzipped versions
of those tools that are zipped, and text versions of the AppleScripts,
to make the changes over time easier to follow.

For the latest Amazon KFX format, users of the calibre plugin
should also install the KFX Input plugin from the standard calibre
plugin menu. It's also available from the MobileRead thread here:
https://www.mobileread.com/forums/showthread.php?t=291290

<h3>
  <a href="https://apprenticealf.wordpress.com/2011/01/17/frequently-asked-questions-about-the-drm-removal-tools/" target="_blank">apprenticealf.wordpress.com</a>
  Frequently Asked Questions about the DRM removal tools - January 17, 2011 by Apprentice Alf	
</h3>

<h4>I can’t get the tools to work on my rented or library ebooks.</h4>

Support for removing DRM from rented or library ebooks is not provided.

<h4>Do the tools work on books from Kobo?</h4>

<a href="http://www.adobe.com/support/digitaleditions/downloads.html" target="_blank">adobe.com/support/digitaleditions/downloads</a>

<a href="http://download.adobe.com/pub/adobe/digitaleditions/ADE_2.0_Installer.exe" target="_blank">ADE_2.0_Installer.exe</a>

Kobo uses Adobe Digital Editions encryption, but it also uses its
own application and encryption system, so you might not have already
installed Adobe Digital Editions. Version 2.0.1 (download here) is
strongly recommended. Version 3.0 and later are capable of utilizing a
new encryption scheme which the tools cannot unlock.

Once you have installed ADE 2.0.1, you must authorise it with an Adobe
ID. Failing to do that will link your DRMed ebooks to this particular
installation of ADE, instead of to an ID that can be used with any new
installation. Do this before you try getting any DRMed ebooks loaded
into Adobe Digit

<h3>
  <a href="https://apprenticealf.wordpress.com/2011/01/13/ebooks-formats-drm-and-you-%e2%80%94-a-guide-for-the-perplexed/" target="_blank">apprenticealf.wordpress.com</a>
  Ebook Formats, DRM and You — A Guide for the Perplexed - January 13, 2011 by Apprentice Alf	
</h3>

<h3>
  <a href="https://apprenticealf.wordpress.com/2012/09/10/calibre-plugins-the-simplest-option-for-removing-most-ebook-drm/" target="_blank">apprenticealf.wordpress.com</a>
  DeDRM plugin for calibre: the simplest option for removing DRM from most ebooks - September 10, 2012 by Apprentice Alf	
</h3>

<h3>
  <a href="https://apprenticealf.wordpress.com/2018/06/02/dedrm-tools-6-6-1-released/" target="_blank">apprenticealf.wordpress.com</a>
  DeDRM Tools 6.6.1 Released - June 2, 2018 by Apprentice Alf	
</h3>

Thanks to work by several people, the tools can now decrypt KFX format
ebooks from Amazon.

If using the calibre plugin, install the KFX Input Plugin to automatically
locate all of the files that make up a KFX format book and gather them
into a KFX-ZIP.  After the DeDRM plugin removes the DRM, then the KFX
Input Plugin will package it into a single KFX file.

<h3>
  <a href="https://apprenticealf.wordpress.com/2012/09/10/drm-removal-tools-for-ebooks/" target="_blank">apprenticealf.wordpress.com</a>
  DRM Removal Tools for eBooks - September 10, 2012 by Apprentice Alf	
</h3>

This blog is intended to help anyone looking for free and simple software
for removing DRM from their Kindle ebooks, stripping DRM from their Adobe
Digital Editions ebooks, getting rid of DRM from their Barnes and Noble
ebooks, freeing their Kobo ebooks of DRM, or decrypting their Fictionwise
eReader ebooks.

<h3>
  <a href="https://teleread.org/2017/01/29/latest-kindle-for-pc-no-longer-uses-calibre-compatible-azw-files/" target="_blank">teleread.org/2017/01/29</a>
  Latest Kindle for PC no longer uses Calibre-compatible AZW files
</h3>

Update, 4/5/18: I just noticed a post in a MobileRead thread indicating
that there are now Calibre plug-ins available for handling KFX. So,
there may no longer be any need to use these workarounds.

Things just got a little harder for folks who like to store their Amazon
purchases in Calibre. I noticed it myself when I was trying to add a
DRM-free title I just bought, Bone Dance by Emma Bull, to my Calibre
library. Even though it’s DRM-free, when I dragged and dropped the
file from my “My Kindle Content” directory across to Calibre, it
couldn’t figure out what to do with the file.

A little detective work turned up this Mobileread forum thread. It
turns out that the new version of Kindle for PC, 1.19, no longer uses
the AZW ebook format that Calibre knows how to read. Instead, it uses
the new KFX ebook format—which nothing else can read or convert right
now. The only way to resume being able to convert downloaded Kindle
content is to uninstall Kindle for PC, then reinstall Kindle for PC
version 1.17, currently accessible via this link (or this one for the
OS X version). Once you have, go to the Tools menu, then Options, then
General and uncheck the box to install updates automatically—and then
just don’t update.

It’s unclear how long Amazon will support these older versions,
or that they’ll be available for download. But even if Amazon stops,
those who own older Kindle hardware devices will still be able to obtain
AZW-format ebooks via the expedient of downloading them to the Kindle
then copying them across via USB. Meanwhile, I suppose we can hope that
Calibre adds the ability to read KFX files sometime soon.

Update: In a comment, Steve notes you can also download AZW files by going
to your “Manage Your Content and Devices” page, then clicking on the
“…” button next to the title you want and selecting “Download &
transfer via USB.” Even if the Kindle device you choose is a newer
model, it still sends you the .AZW file format.

<h3>Install DeDRM Tools 6.6.1</h3>

wget https://github.com/apprenticeharper/DeDRM_tools/releases/download/v6.6.1/DeDRM_tools_6.6.1.zip

<h4>DeDRM/FAQs.md</h4>

Starting with version 1.19, Kindle for PC/Mac uses Amazon's new KFX
format which these tools can't handle. There are two options to get the
older formats that the tools can decrypt. Either stick with version 1.17
or earlier, or modify the executable by changing a file name.

Version 1.17 of Kindle is are no longer available directly from Amazon,
so you will need to search for the proper file name and find it on a
third party site. The name is "KindleForPC-installer-1.17.44170.exe"
for PC and "KindleForMac-44182.dmg" for Mac.

Verify the one of the following cryptographic hash values, using software
of your choice, before installing the downloaded file in order to avoid
viruses. If the hash does not match, delete the downloaded file and try
again from another site.

<h5>Kindle for PC:</h5>

<pre>
MD-5: 53F793B562F4823721AA47D7DE099869
SHA-1: 73C404D719F0DD8D4AE1C2C96612B095D6C86255
SHA-256: 14E0F0053F1276C0C7C446892DC170344F707FBFE99B695176 2C120144163200
</pre>

You will need to go to the preferences and uncheck the auto update
checkbox. Then download and install 1.17 over the top of the 1.19
installation. You'll also need to delete the KFX folders from your My
Kindle Content folder.

A second possible solution is to use 1.19 or later, but disable KFX by
renaming or disabling a necessary component of the application. This
may or may not work on versions after 1.20. In a command window, enter
the following commands when Kindle for PC/Mac is not running:

<pre>
ren %localappdata%\Amazon\Kindle\application\renderer-test.exe renderer-test.xxx
</pre>

PC Note: The renderer-test program may be in a different location in
some Kindle for PC installations. If the rename command fails look in
other folders, such as C:\Program Files\Amazon\Kindle.

<pre>
wget http://www.ebook-tool.com/KindleForPC-installer-1.17.44170.exe
73c404d719f0dd8d4ae1c2c96612b095d6c86255  KindleForPC-installer-1.17.44170.exe
73c404d719f0dd8d4ae1c2c96612b095d6c86255 SHA-1 from DeDRM for check
</pre>

<h2>
  <a href="https://apprenticealf.wordpress.com/2011/01/17/frequently-asked-questions-about-the-drm-removal-tools/" target="_blank">apprenticealf.wordpress.com</a>
  Frequently Asked Questions about the DRM removal tools
</h2>

<h4>I have installed the calibre plugin, and the book is not already in calibre, but the DRM does not get removed. It is a Kindle book.</h4>

If this book is from Kindle for Mac or Kindle for PC, you must have the
Kindle software installed on the same computer as your copy of calibre.


If the book is from Kindle for PC or Kindle for Mac (version 1.17 or
older) and you think you are doing everything right, and you are getting
this message, it is possible that the files containing the encryption
key aren’t quite in the format the tools expect. To try to fix this:

<ol>
  <li>Deregister Kindle for PC(Mac) from your Amazon account.</li>
  <li>Uninstall Kindle for PC(Mac)</li>
  <li>Delete the Kindle for PC(Mac) preferences
    <ul>
      <li>PC: Delete the directory [user folder]\AppData\Local\Amazon (it might be hidden) and [user folder]\Documents\My Kindle Content</li>
      <li>Mac: Delete the directory [home folder]/Library/Application Support/Kindle/ and/or [home folder]/Library/Containers/com.amazon.Kindle/Data/Library/Application Support/Kindle/ (one or both may be present and should be deleted)</li>
    </ul>
  </li>
  <li>Reinstall Kindle for PC(Mac)</li>
  <li>re-register Kindle for PC(Mac) with your Amazon account</li>
  <li>Download the ebook again. Do not use the files you have downloaded previously.</li>
</ol>


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
