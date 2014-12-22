---
title: "Setup up work Gitlab server"
created_at: Tue Dec  9 21:25:22 MST 2014
kind: article
tags: [ 'linux', 'debian', 'git', 'gitlab' ]
---

## [Gitlab Omnibus Readme](https://gitlab.com/gitlab-org/omnibus-gitlab/tree/master)

### Configuration options

Configuration done in file:

* /etc/gitlab/gitlab.rb

~~~~~~~~~~~
sudo gitlab-ctl reconfigure
~~~~~~~~~~~

GitLab and GitLab CI are configured by setting their relevant options
in /etc/gitlab/gitlab.rb. For a complete list of available options,
visit the gitlab.rb.template. New installations starting from GitLab 7.6,
will have all the options of the template listed in /etc/gitlab/gitlab.rb
by default.

#### [SMTP settings](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/settings/smtp.md)

If you would rather send application email via an SMTP server instead
of via Sendmail, add the following configuration information to
/etc/gitlab/gitlab.rb and run gitlab-ctl reconfigure.

~~~~~~~~~~~
in /etc/gitlab/gitlab.rb
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.server"
gitlab_rails['smtp_port'] = 456
gitlab_rails['smtp_user_name'] = "smtp user"
gitlab_rails['smtp_password'] = "smtp password"
gitlab_rails['smtp_domain'] = "example.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
~~~~~~~~~~~

If your SMTP server does not like the default 'From: gitlab@localhost' you
can change the 'From' with this setting.

~~~~~~~~~~~
in /etc/gitlab/gitlab.rb
gitlab_rails['gitlab_email_from'] = 'gitlab@example.com'
~~~~~~~~~~~

To change GitLab CI email configuration (e.g. use SMTP), use gitlab_ci
instead of gitlab_rails.

~~~~~~~~~~~
in /etc/gitlab/gitlab.rb
gitlab_ci['gitlab_ci_email_from'] = 'gitlab-ci@example.com'
gitlab_ci['smtp_enable'] = true
gitlab_ci['smtp_address'] = "smtp.server"
~~~~~~~~~~~


## GitLab Community Edition Omnibus package for Debian 7

* [Debian 7.7 net install iso](http://cdimage.debian.org/debian-cd/7.7.0/amd64/iso-cd/debian-7.7.0-amd64-netinst.iso)

The current "stable" distribution of Debian is version 7, codenamed
wheezy. It was initially released as version 7.0 on May 4th, 2013 and
its latest update, version 7.7, was released on October 18th, 2014.

### Base install

Hostname: gitlab.gcsww.com

<pre><code>
Software Selection
---------------------
remove Debian desktop environment
leave Print server
Add SSH server
remove laptop
</code></pre>

<pre><code>
apt-get update
apt-get dist-upgrade

apt-get install vim
apt-get install tmux
apt-get install git
apt-get install sudo

adduser craig sudo

git config --global user.name "Your Name Here"
 Sets the default name for git to use when you commit

git config --global user.email "your_email@example.com"
 Sets the default email for git to use when you commit
</code></pre>

<pre><code>
ssh-copy-id -i ~/.ssh/id_rsa.pub $host
</code></pre>

### Gitlab install / Setup

* [gitlab download page](https://about.gitlab.com/downloads/)

#### From Debian 7 selection

<pre><code>
wget https://downloads-packages.s3.amazonaws.com/debian-7.6/gitlab_7.5.3-omnibus.5.2.1.ci-1_amd64.deb
sudo apt-get install openssh-server
sudo apt-get install postfix # Select 'Internet Site', using sendmail instead also works, exim has problems

Suggested packages:
  postfix-mysql postfix-pgsql postfix-ldap postfix-pcre sasl2-bin dovecot-common resolvconf postfix-cdb ufw postfix-doc
The following packages will be REMOVED:
  exim4 exim4-base exim4-config exim4-daemon-light
The following NEW packages will be installed:
  postfix

 Internet site:                                                                                                               
  │   Mail is sent and received directly using SMTP. 

System mail name:                                                                                                                                                 │     
    │                                                                                                                                                                   │     
    │ gitlab.gcsww.com

sudo dpkg -i gitlab_7.5.3-omnibus.5.2.1.ci-1_amd64.deb

Setting up gitlab (7.5.3-omnibus.5.2.1.ci-1) ...
Thank you for installing GitLab!
Configure and start GitLab by running the following command:

sudo gitlab-ctl reconfigure

GitLab should be reachable at gitlab.gcsww.com
Otherwise configure GitLab for your system by editing /etc/gitlab/gitlab.rb file
And running reconfigure again.

gitlab-ctl reconfigure
</code></pre>

reconfigure failed the first time. Edit /etc/gitlab/gitlab.rb
Also, set the email from.

~~~~~~~~~~~~~~~~
diff /etc/gitlab/gitlab.rb.1 /etc/gitlab/gitlab.rb
2c2,4
< external_url 'gitlab.gcsww.com'
 ---
> external_url 'http://gitlab.gcsww.com'
> gitlab_rails['gitlab_email_from'] = 'gitlab@gcsww.com'
~~~~~~~~~~~~~~~~


<pre><code>
2c2
< external_url 'gitlab.gcsww.com'
---
> external_url 'http://gitlab.gcsww.com'
</code></pre>

Browse to the hostname and login

<pre><code>
Username: root
Password: 5iveL!fe 
</code></pre>

Change password.

{::comment}
username: root
password: butterknife

username: craig
password: finitelifespan
{:/comment} 

### smtp access to mail.coot.net

* server name: mail.coot.net
* port: 26
* user name: craig@coot.net
* Authentication method: Normal password
* Connection Security: STARTTLS

{::comment}
grand.blue.piano.1952
{:/comment} 

### postfix configuration

Need to configure postfix

~~~~~~~~
$ hostname --fqdn
gitlab.gcsww.com
~~~~~~~~

~~~~~~~~
$ postconf -n
alias_database = hash:/etc/aliases
alias_maps = hash:/etc/aliases
append_dot_mydomain = no
biff = no
config_directory = /etc/postfix
inet_interfaces = all
mailbox_command = procmail -a "$EXTENSION"
mailbox_size_limit = 0
mydestination = gitlab.gcsww.com, localhost.gcsww.com, , localhost
myhostname = gitlab.gcsww.com
mynetworks = 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128
myorigin = /etc/mailname
readme_directory = no
recipient_delimiter = +
relayhost =
smtp_tls_session_cache_database = btree:${data_directory}/smtp_scache
smtpd_banner = $myhostname ESMTP $mail_name (Debian/GNU)
smtpd_tls_cert_file = /etc/ssl/certs/ssl-cert-snakeoil.pem
smtpd_tls_key_file = /etc/ssl/private/ssl-cert-snakeoil.key
smtpd_tls_session_cache_database = btree:${data_directory}/smtpd_scache
smtpd_use_tls = yes
~~~~~~~~

#### Postfix on a null client

A null client is a machine that can only send mail. It receives no mail
from the network, and it does not deliver any mail locally. A null client
typically uses POP, IMAP or NFS for mailbox access.

1. /etc/postfix/main.cf:
2.     myhostname = hostname.example.com
3.     myorigin = $mydomain
4.     relayhost = $mydomain
5.     inet_interfaces = loopback-only
6.     mydestination =

Translation:

* Line 2: Set myhostname to hostname.example.com, in case the machine name isn't set to a fully-qualified domain name (use the command "postconf -d myhostname" to find out what the machine name is).
* Line 2: The myhostname value also provides the default value for the mydomain parameter (here, "mydomain = example.com").
* Line 3: Send mail as "user@example.com" (instead of "user@hostname.example.com"), so that nothing ever has a reason to send mail to "user@hostname.example.com".
* Line 4: Forward all mail to the mail server that is responsible for the "example.com" domain. This prevents mail from getting stuck on the null client if it is turned off while some remote destination is unreachable. Specify a real hostname here if your "example.com" domain has no MX record.
* Line 5: Do not accept mail from the network.
* Line 6: Disable local mail delivery. All mail goes to the mail server as specified in line 4.

* [Linode - Configure Postfix to Send Mail Using an External SMTP Server](https://www.linode.com/docs/email/postfix/postfix-smtp-debian7)

~~~~~~~~~
Edit /etc/postfix/main.cf
/etc/postfix# diff main.cf.1 main.cf
33,35c33,35
< myorigin = /etc/mailname
< mydestination = gitlab.gcsww.com, localhost.gcsww.com, , localhost
< relayhost = 
---
> myorigin = $mydomain
> mydestination =
> relayhost = [mail.coot.net]:26
40c40,54
< inet_interfaces = all
---
> inet_interfaces = loopback-only
> 
> # see - https://www.linode.com/docs/email/postfix/postfix-smtp-debian7
> # enable SASL authentication 
> smtp_sasl_auth_enable = yes
> # disallow methods that allow anonymous authentication. 
> smtp_sasl_security_options = noanonymous
> # where to find sasl_passwd
> smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
> 
> # Enable STARTTLS encryption 
> smtp_use_tls = yes
> # where to find CA certificates
> smtp_tls_CAfile = /etc/ssl/certs/ca-certificates.crt
> 
~~~~~~~~~

##### Configuring SMTP Usernames and Passwords

~~~~~~~~~
/etc/postfix/sasl_passwd
[mail.coot.net]:26 craig@coot.net:mypassword
~~~~~~~~~

##### Create the hash db file for Postfix by running the postmap command:

~~~~~~~~~
postmap /etc/postfix/sasl_passwd
~~~~~~~~~

If all went well, you should have a new file named sasl_passwd.db in the /etc/postfix/ directory.


##### Securing Your Password and Hash Database Files

The /etc/postfix/sasl_passwd and the /etc/postfix/sasl_passwd.db files
created in the previous steps contain your SMTP credentials in plain text.

For security reasons, you should change their permissions so that only
the root user can read or write to the file. Run the following commands to
change the ownership to root and update the permissions for the two files:

~~~~~~~~~
Change permissions of sasl_passwd and sasl_passwd.db
chown root:root /etc/postfix/sasl_passwd /etc/postfix/sasl_passwd.db
chmod 0600 /etc/postfix/sasl_passwd /etc/postfix/sasl_passwd.db
~~~~~~~~~

##### Test

~~~~~~~~~
echo "body of your email" | mail -s "This is a Subject" -a "From: you@example.com" recipient@elsewhere.com
~~~~~~~~~

~~~~~~~~~
10.10.9.175
http://gitlab.gcsww.com/cootcraig/game_justin_craig_20141209.git
http://10.10.9.175/cootcraig/game_justin_craig_20141209.git

git remote set-url origin http://10.10.9.175/cootcraig/game_justin_craig_20141209.git
~~~~~~~~~

#### postfix research

* [Postfix Standard Configuration Examples](http://www.postfix.org/STANDARD_CONFIGURATION_README.html)
* [Postfix on a null client](http://www.postfix.org/STANDARD_CONFIGURATION_README.html#null_client)
* [Postfix on a local network](http://www.postfix.org/STANDARD_CONFIGURATION_README.html#local_network)
* [Postfix on hosts without a real Internet hostname](http://www.postfix.org/STANDARD_CONFIGURATION_README.html#fantasy) 
* [full-on First Linux: Postfix 5: Postfix Null Client](http://vimeo.com/27117067)
* [fatmin - Configure a Null Email Client](http://fatmin.com/2012/07/17/rhel6-simple-postfix-configuration/)

## Install Gitlab virtualbox guest on vmhost

### Unpack and initial setup

dhcp ip: 10.10.9.162

### Pick a static IP

### DNS for Gitlab

gitlab.gcsww.local
10.10.22.6

## research

* [Bitnami Gitlab](https://bitnami.com/stack/gitlab)
* [GitLab Virtual Machines](https://bitnami.com/stack/gitlab/virtual-machine)
* [Bitnami Gitlam vm - Ubuntu 14.04 - GitLab 7.5.3-0 (64-bit)](https://bitnami.com/redirect/to/46875/bitnami-gitlab-7.5.3-0-ubuntu-14.04.zip)
* [Virtual Appliances Quick Start Guide](https://wiki.bitnami.com/Virtual_Appliances_Quick_Start_Guide#How_to_start_your_Bitnami_Virtual_Appliance.3f)
* [mechonomics.com - Configuring the BitNami GitLab Virtual Machine](http://www.mechonomics.com/configuring-the-bitnami-gitlab-virtual-machine/)
* [Geekwerks - Fixing Bitnami GitLab - ssh problem](http://geekwerks.ca/2014/10/05/fixing-bitnami-gitlab.html)
* [Radio Bitnami - gitlab interview](https://soundcloud.com/radio-bitnami/bitnami-interview-gitlab)
* [WhaleBlubber - Self-hosted GitLab Server for Private Revision Control](http://www.whaleblubber.ca/gitlabhq-revision-control/)

* [DigitalOcean Guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-gitlab-as-your-very-own-private-github-clone)
* [Playing with Git? Use GitLab!](http://divante.co/blog/playing-git-gitlab/)

### bitnami Review - 10/18/2014 - Easy to install and configure - By Nacho Sanchez

Installation takes 5 minutes, and configuration is very easy since they
include links to FAQs and basic stuff you should know.

Configuring the email can get tricky, so here is the basic stuff:

* [bitnami wiki on GitLab](http://wiki.bitnami.com/Applications/BitNami_GitLab)

Be careful with the host and port, since it sets the ones where the
machine installs by default, but if you then assign a static IP you must
change them manually.

