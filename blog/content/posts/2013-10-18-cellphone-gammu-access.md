---
title: "Using Gammu to Interact With Cell Phone"
created_at: Fri Oct 18 12:39:07 MDT 2013
kind: article
tags: 
  - cellphone
  - gammu
---
# 2015-05-25 slider GSM phone gammu

google search example:
sgh-a877 site:wammu.eu

* Blackberry 8520 - wammu yes
* BlackBerry Curve 9720 site:wammu.eu - wammu no
* Blackberry Bold 9790 - wammu yes
* Blackberry 9800 - wammu yes, useful no
* BlackBerry Bold Touch 9900 - wammu no
* LG C195  - wammu no
* LG C410 Xpression Slider - wammu no
* LG c710 site:wammu.eu wammu no
* LG Fathom VS750 - wammu no
* Samsung Impression SGH-A877 Slider - wammu yes
* Samsung sgh-a797 site:wammu.eu - wammu no
* Samsung Flight 2 II SGH-A927 - wammu yes
* Samsung Smiley SGH-T359 - wammu no
* Samsung T379 GRAVITY TXT T379 site:wammu.eu - wammu no
* Sony Ericsson TXT Pro CK15A - wammu no
* ZTE Z431 - wammu no

## Blackberry 8520

Supported Features

* Calendar entries
* Reading and making calls
* Enhanced phonebook entries (eg. several numbers per entry)
* Filesystem manipulation
* Phone information
* Logos
* Multimedia messaging
* Basic phonebook functions (name and phone number)
* Ringtones
* Sending and saving SMS
* Todos

~~~~~~~~~~~~
[gammu]
port = BLUETOOTH ADDRESS OF PHONE
connection = blueat
~~~~~~~~~~~~

#### [gsmarena](http://www.gsmarena.com/blackberry_curve_8520-2889.php) Blackberry 8520

* $26 http://www.ebay.com/itm/RIM-Blackberry-8520-Curve-BLACK-unlocked-WIFI-/281701773726
* $26 http://www.ebay.com/itm/RIM-Blackberry-8520-Curve-BLACK-unlocked-Wifi-/161715624998

* $13 battery http://shop.crackberry.com/blackberry-c-s2-1150mah-standard-battery-a-stock/8A37A12042.htm

* Network 	Technology 	GSM
* Status 	Available. Released 2009, August
* Keyboard 	QWERTY
* SIM 	Mini-SIM
* Optical trackpad
* Display 	Type 	TFT, 65K colors
* Resolution 	320 x 240 pixels (~163 ppi pixel density)
* Platform 	OS 	BlackBerry OS 5.0
* Memory 	Card slot 	microSD, up to 32 GB
* Internal 	256 MB
* Camera 	Primary 	2 MP, 1600 x 1200 pixels
* Sound 	Alert types 	Vibration; MP3, WAV ringtones
* Loudspeaker 	Yes
* 3.5mm jack 	Yes - Dedicated music keys
* Comms 	WLAN 	Wi-Fi 802.11b/g
* Bluetooth 	v2.0, A2DP
* GPS 	No
* Radio 	No
* USB 	microUSB
* Features 	Messaging 	SMS (threaded view), MMS, Email, IM
* Battery 	  	Li-Ion 1150 mAh battery
* Stand-by 	Up to 408 h
* Talk time 	Up to 4 h 30 min

## Blackberry Bold 9790

Supported Features

* Sending and saving SMS
* Basic phonebook functions (name and phone number)
* Enhanced phonebook entries (eg. several numbers per entry)
* Calendar entries
* Todos
* Filesystem manipulation
* Ringtones

~~~~~~~~~~~~~
[gammu]
port = DEVICE NAME
connection = fbusdlr3
~~~~~~~~~~~~~

## Samsung SGH-A877 Impression

Supported Features

* Phone information
* Sending and saving SMS
* Basic phonebook functions (name and phone number)
* Reading and making calls

~~~~~~~~~~~
[gammu]
port = BLUETOOTH ADDRESS OF PHONE
connection = blueat
~~~~~~~~~~~


UNLOCKED AT&T LG C410 Xpression Slider Touch GSM Cell Phone


## Samsung Flight 2 II SGH-A927

$36 - Samsung Flight 2 II SGH-A927 Unlocked AT&T 3g GSM QWERTY Cell Phone Exc Cond!

* Network 	Technology 	GSM / HSPA
* Status 	Available. Released 2010, August
* Keyboard 	QWERTY
* SIM 	Mini-SIM

#### [wammu phones](http://wammu.eu/phones/samsung/4508/) Samsung Flight 2 II SGH-A927

Supported Features

* Phone information
* Sending and saving SMS
* Basic phonebook functions (name and phone number)

~~~~~~~~~~~~
[gammu]
port = BLUETOOTH ADDRESS OF PHONE
connection = blueat
~~~~~~~~~~~~

## Blackberry 9800 torch - GSM 

ebay $72.00
BlackBerry Torch 9800 4GB Unlocked GSM Phone AT&T T Mobile Tigo Claro Movistar

#### [gsmarena](http://www.gsmarena.com/blackberry_torch_9800-3203.php) BlackBerry Torch 9800

* Network 	Technology 	GSM / HSPA
* Status 	Available. Released 2010, August
* Keyboard 	QWERTY
* SIM 	Mini-SIM
*  	- Optical trackpad

## LG Xpression 2 C410 GSM Unlocked - No gammu

review LG Xpression 2 C410

ebay - $26.00
LG Xpression 2 C410 GSM Unlocked AT&T T-Mobile Slider Cell Phone Qwerty

### [Gammu](http://wammu.eu/gammu/)

Gammu is the name of the project as well as name of command line utility,
which you can use to control your phone. It is written in C and built on top
of libGammu

Gammu command line utility provides access to wide range of phone features,
however support level differs from phone to phone and you might want to check
the Gammu Phone Database for user experiences with various
phones. Generally following features are supported:

* Call listing, initiating and handling
* SMS retrieval, backup and sending
* MMS retrieval
* Phonebook listing, export and import (also from standard formats such as vCard)
* Calendar and tasks listing, export and import (also from standard formats such as vCalendar or iCalendar)
* Retrieval of phone and network information
* Access to phone file system (note that some phones work also as USB storage devices and those are not accessible through Gammu)

This project has originally forked from Gnokii and up to version 0.58 has been
named MyGnokii2. Then need for better name arrived and Gammu was chosen as an
acronym for Gammu All Mobile Management Utilities, without knowing that Gammu
from the "Heretics of Dune" book written by Frank Herbert exists.

# Motorola RAZR V3

## [Report by pvb265 on Jan. 8, 2009](http://wammu.eu/phones/motorola/2389/)

### Supported Features

* Phone information
* Sending and saving SMS
* Basic phonebook functions (name and phone number)
* Enhanced phonebook entries (eg. several numbers per entry)
* Filesystem manipulation

### Configuration

~~~~~~~~~~~
Configuration
[gammu]
port = DEVICE NAME
connection = at115200
~~~~~~~~~~~

### Reporter Note

Report has been created using Wammu 0.21.

### About entry

* Created by pvb265 on Jan. 8, 2009, 1:49 p.m..
* Tested with Gammu 1.12.0. 

## [Report by Randy on Dec. 26, 2009](http://wammu.eu/phones/motorola/3390/)

### Supported Features

* Phone information
* Sending and saving SMS
* Basic phonebook functions (name and phone number)
* Enhanced phonebook entries (eg. several numbers per entry)
* Calendar entries
* Ringtones

### Configuration

~~~~~~~~~~~
Configuration
[gammu]
port = DEVICE NAME
connection = at115200
~~~~~~~~~~~

### About entry

Tested with Gammu none in v 0.30.1. 

# Gammu,Wammu in Debian Repo

~~~~~~~~~~~
apt-cache search gammu
gammu - mobile phone management utility
gammu-doc - Gammu Manual
gammu-smsd - SMS message daemon
libgammu-dbg - mobile phone management library (debugger symbols)
libgammu-dev - mobile phone management library (development files)
libgammu-i18n - mobile phone management library (i18n files)
libgammu7 - mobile phone management library
libgsmsd7 - SMS daemon helper library
python-gammu - Python module to communicate with mobile phones
python-gammu-dbg - Python module to communicate with mobile phones (debug version)
python-gammu-doc - Transitional dummy package for Gammu documentation
gmobilemedia - GTK+ application used to browse a mobile phone filesystem
wammu - GTK application to control your mobile phone
~~~~~~~~~~~

~~~~~~~~~~~
apt-get install gammu wammu gammu-doc pulseaudio-esound-compat gammu-smsd libmyodbc odbc-postgresql tdsodbc unixodbc-bin pmidi fluid-soundfont-gm fluid-soundfont-gs gmobilemedia fluidsynth python-gtk2-doc
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following extra packages will be installed:
  esound-common freepats freetds-common libaudiofile1 libdbi1 libesd0
  libfluidsynth1 libgammu-i18n libgammu7 libgsmsd7 libjs-sphinxdoc
  libjs-underscore libmysqlclient18 libodbc1 libodbcinstq4-1
  libpq5 libqtassistantclient4 mysql-common odbcinst odbcinst1debian2
  python-bluez python-gammu python-glade2 python-wxgtk3.0 python-wxversion
  qsynth timidity timidity-daemon
Suggested packages:
  devhelp jackd
The following NEW packages will be installed:
  esound-common fluid-soundfont-gm fluid-soundfont-gs fluidsynth
  freepats freetds-common gammu gammu-doc gammu-smsd gmobilemedia
  libaudiofile1 libdbi1 libesd0 libfluidsynth1 libgammu-i18n libgammu7
  libgsmsd7 libjs-sphinxdoc libjs-underscore libmyodbc libmysqlclient18
  libodbc1 libodbcinstq4-1 libpq5 libqtassistantclient4 mysql-common
  odbc-postgresql odbcinst odbcinst1debian2 pmidi pulseaudio-esound-compat
  python-bluez python-gammu python-glade2 python-gtk2-doc python-wxgtk3.0
  python-wxversion qsynth tdsodbc timidity timidity-daemon unixodbc-bin
  wammu
0 upgraded, 43 newly installed, 0 to remove and 0 not upgraded.
Need to get 163 MB of archives.
After this operation, 252 MB of additional disk space will be used.
~~~~~~~~~~~

# Work with RAZR V3

~~~~~~~~~~~
dmesg
 ...
[15808.898887] Bluetooth: BNEP socket layer initialized
[171100.570643] usb 3-9.2: new full-speed USB device number 7 using xhci_hcd
[171100.682689] usb 3-9.2: New USB device found, idVendor=22b8, idProduct=4902
[171100.682696] usb 3-9.2: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[171100.682700] usb 3-9.2: Product: Motorola Phone (V3)
[171100.682703] usb 3-9.2: Manufacturer: Motorola Inc.
[171100.682934] usb 3-9.2: ep 0x89 - rounding interval to 64 microframes, ep desc says 80 microframes
[171101.042538] cdc_acm 3-9.2:1.0: ttyACM0: USB ACM device
[171101.044998] usbcore: registered new interface driver cdc_acm
[171101.045000] cdc_acm: USB Abstract Control Model driver for USB modems and ISDN adapters
~~~~~~~~~~~

~~~~~~~~~~~
lsusb
 ...
Bus 003 Device 007: ID 22b8:4902 Motorola PCS Triplet GSM Phone (AT)
 ...
~~~~~~~~~~~

~~~~~~~~~~~
gammu identify
Device               : /dev/ttyACM0
Manufacturer         : Motorola
Model                : V3 (V3)
Firmware             : "R374_G_0E.42.10R_A"
IMEI                 : 359816005671132
SIM IMSI             : +CIMI: 310150803514490
~~~~~~~~~~~

### udev for razr

#### [Daniel Drake - Writing udev rules - Version 0.74](http://www.reactivated.net/writing_udev_rules.html)

~~~~~~~~~~~
udevadm info /dev/ttyACM0
P: /devices/pci0000:00/0000:00:14.0/usb3/3-9/3-9.2/3-9.2:1.0/tty/ttyACM0
N: ttyACM0
S: serial/by-id/usb-Motorola_Inc._Motorola_Phone__V3_-if00
S: serial/by-path/pci-0000:00:14.0-usb-0:9.2:1.0
E: DEVLINKS=/dev/serial/by-id/usb-Motorola_Inc._Motorola_Phone__V3_-if00 /dev/serial/by-path/pci-0000:00:14.0-usb-0:9.2:1.0
E: DEVNAME=/dev/ttyACM0
E: DEVPATH=/devices/pci0000:00/0000:00:14.0/usb3/3-9/3-9.2/3-9.2:1.0/tty/ttyACM0
E: ID_BUS=usb
E: ID_MM_CANDIDATE=1
E: ID_MODEL=Motorola_Phone__V3_
E: ID_MODEL_ENC=Motorola\x20Phone\x20\x28V3\x29
E: ID_MODEL_FROM_DATABASE=Triplet GSM Phone (AT)
E: ID_MODEL_ID=4902
E: ID_PATH=pci-0000:00:14.0-usb-0:9.2:1.0
E: ID_PATH_TAG=pci-0000_00_14_0-usb-0_9_2_1_0
E: ID_REVISION=0001
E: ID_SERIAL=Motorola_Inc._Motorola_Phone__V3_
E: ID_TYPE=generic
E: ID_USB_CLASS_FROM_DATABASE=Communications
E: ID_USB_DRIVER=cdc_acm
E: ID_USB_INTERFACES=:020201:0a0000:
E: ID_USB_INTERFACE_NUM=00
E: ID_VENDOR=Motorola_Inc.
E: ID_VENDOR_ENC=Motorola\x20Inc.
E: ID_VENDOR_FROM_DATABASE=Motorola PCS
E: ID_VENDOR_ID=22b8
E: MAJOR=166
E: MINOR=0
E: SUBSYSTEM=tty
E: TAGS=:systemd:
E: USEC_INITIALIZED=975746095
~~~~~~~~~~~

~~~~~~~~~~~
udevadm info -a /dev/ttyACM0
SUBSYSTEMS=="usb"
ATTRS{idVendor}=="22b8"
ATTRS{manufacturer}=="Motorola Inc."
ATTRS{idProduct}=="4902"
ATTRS{product}=="Motorola Phone (V3)"
~~~~~~~~~~~

~~~~~~~~~~~
/etc/udev/rules.d/80-persistent-local.rules
ACTION=="add", SUBSYSTEMS=="usb", ATTRS{idVendor}=="22b8", ATTRS{idProduct}=="4902", SYMLINK+="razr", GROUP="dialout"
~~~~~~~~~~~

~~~~~~~~~~~
cat ~/.gammurc
[gammu]
port=/dev/ttyACM0
connection=at115200
name=razr
~~~~~~~~~~~

To

~~~~~~~~~~~
cat ~/.gammurc
[gammu]
port=/dev/razr
connection=at115200
name=razr
~~~~~~~~~~~

## load google contacts into phone

#### [Importing Google Contacts vCard with Gammu](http://gpoul.strain.at/2013/05/11/importing-google-contacts-vcard-with-gammu/)


### phone ends up with 2 fields

* Name
* Number

### write awk script to filter gmail vcf file

* FN:aaa bbb => N:aaa bbb;

~~~~~~~~~~~
BEGIN:VCARD
VERSION:2.1
TEL;HOME;VOICE:
N:Hegvik;Donna
END:VCARD
~~~~~~~~~~~

~~~~~~~~~~~
gammu deleteallmemory ME
gammu addnew phonebook.vcf -yes -memory ME
~~~~~~~~~~~

~~~~~~~~~~~
gammu backup phonebook.vcf -yes
gammu restore phonebook.vcf -yes
~~~~~~~~~~~

~~~~~~~~~~~
gammu sendsms TEXT 17192406959 -text "I'm good. I am complicating the use of my 2004 vintage Motorola RAZR"

gammu getallsms -pbk
~~~~~~~~~~~

~~~~~~~~~~~
contents of - gammu backup phonebook.vcf -yes
BEGIN:VCARD
VERSION:2.1
X-GAMMU-LOCATION:1
X-GAMMU-MEMORY:ME
TEL;PREF;CELL:7193206799
N:Craig Anderson
END:VCARD

BEGIN:VCARD
VERSION:2.1
X-GAMMU-LOCATION:2
X-GAMMU-MEMORY:ME
TEL;PREF;HOME:7195951389
N:Craig Anderson
END:VCARD

BEGIN:VCARD
VERSION:2.1
X-GAMMU-LOCATION:3
X-GAMMU-MEMORY:ME
TEL;PREF;CELL:7192481495
N:Donna Hegvik
END:VCARD

BEGIN:VCARD
VERSION:2.1
X-GAMMU-LOCATION:4
X-GAMMU-MEMORY:ME
TEL;PREF;WORK:7195464574
N:Donna Hegvik
END:VCARD
~~~~~~~~~~~


# Phone book multiple numbers

#### [russellbeattie.com - Motorola RAZR V3 Power User's Guide](http://www.russellbeattie.com/blog/1008782)

Next is the Address Book. Everyone bitches about how inane it is that
your contacts are listed multiple times depending on how many ways you
have to contact them. So if you have a contact with a work, mobile and
email address, you have three entries. And since only three address
book entries are shown by default, it means a LOT of scrolling. Even
the guy in the New York Times bitched about this one. This can be
changed. Go into your Address Book, and down to Settings. Change the
View By option from "Picture" to "List", and then go down to the View
option and choose "Primary Contacts". Now when you hit Done and go back
to your address book, you'll have 8 entries per page, and only one
entry per person. Here's the pain: You have to go through and choose
which of the forms of contacting each person is the "primary" way which
is displayed by default. You do this by selecting the person, clicking
right or left to choose the contact option you want (say mobile) then
going into the menu and choosing "set primary". It's the suck, but at
the end you actually have a usable address book.

# Build gammu,wammu from source

#### [gammu-1.34.0.tar.xz](http://sourceforge.net/projects/gammu/files/gammu/1.34.0/gammu-1.34.0.tar.xz)

#### [wammu-0.38.tar.bz2](http://sourceforge.net/projects/gammu/files/wammu/0.38/wammu-0.38.tar.bz2)

# Ubuntu will connect to bluetooth on the t404g

Able to see folders, but not other interactions on t404g.

![Ubuntu sees phone folders on bluetooth](/assets/images/t404g_bluetooth_filders.png)

