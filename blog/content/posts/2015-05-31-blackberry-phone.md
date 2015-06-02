---
title: "Black Berry Phone"
created_at: Sun May 31 08:42:09 MDT 2015
kind: article
tags:
  - cellphone
  - rim_blackberry
  - blackberry
---

* RIM Blackberry 8520 Curve
* http://forums.crackberry.com/blackberry-curve-85xx-f143/


### BlackBerry® Device Software v5.0:

* BlackBerry® Curve™ 8520 smartphone

#### [us.blackberry.com](http://us.blackberry.com/software/smartphones/bb-5/compatibility.html) Device Software v5.0 update


# Desktop Software

#### [Local copy](/assets/other/710_b042_multilanguage.exe) Desktop Software v7.1.0 B42 (Multilanguage)






http://us.blackberry.com/software/desktop/desktop-pc/system-requirements.html


Software requirements

    Windows® XP SP3 or later, Windows Vista®, Windows 7 or Windows 8
        If you’re using a 64-bit Windows XP computer, you must install a hotfix from Microsoft®. Learn about and download the Microsoft hotfix.
    Microsoft® .NET Framework 3.5 SP1 or an active Internet connection
    iTunes version 7.7.1 or later, or Windows Media® Player version 10 or later, for music synchronization

~~~~~~~~~~~~~~
Crackberry Forum Post - 2015-05-31
I just purchased an unlocked AT&T Blackberry Curve 8520. I moved my
Cricket Wireless SIM into it, had the phone activated by Cricket support
and can make phone calls.

I'm trying out the Curve because I want a keyboard and a low price and
some basic Blackberry applications could be useful.

Some background, I'm a 60+ aged software developer, but have no
interest in smart phones from Google/Android,Apple or Microsft. My personal
computers are all running Linux. I have just purchased a Windows XP Pro
retail license and plan to run XP in VirtualBox as my Blackberry application
host.

I would like to Manage
* Contacts
* Calender
* SMS

from my main personal workstation, probably with the XP VirtualBox
guest. So a couple of requests for resources:

1) Would it be possible to skip the XP virtual machine and just host
my Curve from Linux? If so, can you recommend resources to
get me started.
2) Can you recommend resources to help me be productive from XP?

Thanks. 
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
sudo lsusb
Bus 001 Device 018: ID 0fca:8004 Research In Motion, Ltd. Blackberry Handheld
~~~~~~~~~~~~~~


~~~~~~~~~~~~~~
dmesg when Blackberry plugged in
[1120423.143949] usb 1-13.1: new high-speed USB device number 18 using xhci_hcd
[1120423.232752] usb 1-13.1: New USB device found, idVendor=0fca, idProduct=8004
[1120423.232759] usb 1-13.1: New USB device strings: Mfr=1, Product=5, SerialNumber=3
[1120423.232763] usb 1-13.1: Product: RIM Composite Device
[1120423.232767] usb 1-13.1: Manufacturer: Research In Motion
[1120423.232770] usb 1-13.1: SerialNumber: 13792F874E4FFCD31540E63DC5AC5D3BAF7E7F55
[1120423.243369] usb-storage 1-13.1:1.0: USB Mass Storage device detected
[1120423.243625] usb-storage 1-13.1:1.0: Quirks match for vid 0fca pid 8004: 400
[1120423.243981] usb-storage 1-13.1:1.1: USB Mass Storage device detected
[1120423.244207] usb-storage 1-13.1:1.1: Quirks match for vid 0fca pid 8004: 400
[1120423.244360] scsi9 : usb-storage 1-13.1:1.1
[1120424.246132] scsi 9:0:0:0: Direct-Access     RIM      BlackBerry SD    0002 PQ: 0 ANSI: 0 CCS
[1120424.246302] sd 9:0:0:0: Attached scsi generic sg6 type 0
[1120424.247530] sd 9:0:0:0: [sdf] Attached SCSI removable disk
~~~~~~~~~~~~~~

