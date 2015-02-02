---
title: "Epson Stylus Photo R320 Color Inkjet"
created_at: Sat Jan 31 16:40:48 MST 2015
kind: article
tags:
  - inkjet
---

~~~~~~~~~~~~~~
$ dmesg
 ...
[440842.719595] usb 1-5: new high-speed USB device number 13 using xhci_hcd
[440842.848297] usb 1-5: New USB device found, idVendor=04b8, idProduct=0812
[440842.848302] usb 1-5: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[440842.848305] usb 1-5: Product: USB2.0 MFP(Hi-Speed)
[440842.848308] usb 1-5: Manufacturer: EPSON
[440842.848311] usb 1-5: SerialNumber: L27P10501230231030
[440843.201241] usb-storage 1-5:1.0: USB Mass Storage device detected
[440843.201307] scsi6 : usb-storage 1-5:1.0
[440843.201383] usbcore: registered new interface driver usb-storage
[440843.240541] usblp 1-5:1.1: usblp0: USB Bidirectional printer dev 13 if 1 alt 0 proto 2 vid 0x04B8 pid 0x0812
[440843.240559] usbcore: registered new interface driver usblp
[440844.581033] scsi 6:0:0:0: Direct-Access     EPSON    Stylus Storage   1.00 PQ: 0 ANSI: 2
[440844.581257] sd 6:0:0:0: Attached scsi generic sg4 type 0
[440844.583728] sd 6:0:0:0: [sde] Attached SCSI removable disk
~~~~~~~~~~~~~~

