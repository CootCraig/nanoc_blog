---
title: "PPTP VPN Client on Debian"
created_at: Tue Dec 16 08:15:31 MST 2014
kind: article
tags: [ 'Debian', 'vpn', 'pptp' ]
---

* [pptpclient.sourceforge.net - Debian Howto](http://pptpclient.sourceforge.net/howto-debian.phtml#install)
* [HowToGeek - How to Setup a VPN (PPTP) Server on Debian Linux](http://www.howtogeek.com/51237/setting-up-a-vpn-pptp-server-on-debian/)

~~~~~~~~~~~~
apt-get install pptp-linux 

The following NEW packages will be installed:
  libpcap0.8 ppp pptp-linux
0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
Need to get 520 kB of archives.
After this operation, 1,368 kB of additional disk space will be used.
~~~~~~~~~~~~

create or edit the /etc/ppp/options.pptp

~~~~~~~~~~~~
diff options.pptp.1 options.pptp

26,27c26,35
< refuse-chap
< refuse-mschap
---
> #refuse-chap
> #refuse-mschap
> 
> usepeerdns
> require-mppe
> #require-mppe-128
> nomppe-stateful
> #require-mschap-v2
> bsdcomp 15
> deflate 15
~~~~~~~~~~~~

create or add lines to the /etc/ppp/chap-secrets file, which holds usernames and passwords:

create a /etc/ppp/peers/$TUNNEL file:

~~~~~~~~~~~~
find /etc/ppp -name '*gcs*'

/etc/ppp/peers/gcsww
/etc/ppp/ip-up.d/100gcsww
~~~~~~~~~~~~

* 10.10.10.111
* 10.10.10.116

