---
title: "supervisord"
created_at: Thu Dec 25 05:58:54 MST 2014
kind: article
tags:
  - supervisord
---

## Why

* tmux weechat

## Supervisord [Install](http://supervisord.org/installing.html)

Debian Package: python-setuptools

~~~~~~~~~~~~~~
install supervisor in one step using easy_install.
easy_install supervisor
~~~~~~~~~~~~~~

## Start at boot time

~~~~~~~~~~~~~~
/etc/init.d/supervisor
DAEMON_OPTS="-c /etc/supervisor/supervisord.conf $DAEMON_OPTS"
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
system control commands
update-rc.d supervisor enable
update-rc.d supervisor disable

service supervisor start
service supervisor stop
service supervisor restart
service supervisor reload
service supervisor status
~~~~~~~~~~~~~~


## tmux weechat config example

~~~~~~~~~~~~~~
/etc/supervisor/conf.d/irc
[program:irc]
command=/home/craig/bin/irc
process_name=$(program_name)s
directory=/tmp
autostart=true
autorestart=true
startsecs=30
startretries=3
user=craig
environment=TERM="st-256color"
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
~craig/bin/irc
shebang /bin/bash
export TERM="st-256color"
tmux -2 new-session -s irc weechat
~~~~~~~~~~~~~~


## Research

* [Debian jessie Package: supervisor (3.0r1-1)](https://packages.debian.org/jessie/supervisor)
* [supervisord.org / introduction](http://supervisord.org/introduction.html)
* [serversforhackers - Monitoring Processes with Supervisord](https://serversforhackers.com/process-monitoring/)
* [Jan-Piet Mens - In my toolbox: Supervisord](http://jpmens.net/2014/02/13/in-my-toolbox-supervisord/)
* [bixly.com - Stop Worrying and… um… Use Supervisord](http://bixly.com/blog/supervisord-or-how-i-learned-to-stop-worrying-and-um-use-supervisord/)
* [codesamplez - Beginners Guide To Supervisord Process Monitoring](http://codesamplez.com/management/supervisord-process-monitoring)
* [reustle.io - Managing Long Running Processes With Supervisor](http://reustle.io/blog/managing-long-running-processes-with-supervisor)


