---
title: "Ansible for Configuration Management"
created_at: Sat Dec 27 08:14:17 MST 2014
kind: article
tags:
  - ansible
---

## Use ansible to configure Ubuntu 14.04 server


# research

* [ryaneschinger.com/blog](http://ryaneschinger.com/blog/ansible-quick-start/) Ansible Quick Start - A Brief Introduction
* [ryaneschinger.com](http://ryaneschinger.com/blog/ensuring-command-module-task-is-repeatable-with-ansible/) Ensuring a Command Module Task is Repeatable with Ansible
* [ryaneschinger.com](http://ryaneschinger.com/blog/securing-a-server-with-ansible/) Securing a Server with Ansible
* [github](https://github.com/tundrax/ansible-vultr) tundrax/ansible-vultr create server on vultr
* [wikipedia - ansible](http://en.wikipedia.org/wiki/Ansible_%28software%29)
* [ansible at github](https://github.com/ansible/ansible)
* [ansible role to install a service with supervisord](https://github.com/eggsby/ansible-supervise)
* [DigitalOcean - Create Ansible Playbooks for Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-create-ansible-playbooks-to-automate-system-configuration-on-ubuntu)
* [lowendbox - Getting started with ansible](http://lowendbox.com/blog/getting-started-with-ansible/)

Ansible is an open-source software platform for configuring and managing
computers. It combines multi-node software deployment, ad hoc task
execution, and configuration management. It manages nodes over SSH
and requires Python (2.4 or later)  to be installed on them. Modules
work over JSON and standard output and can be written in any programming
language. The system uses YAML to express reusable descriptions of
systems.

Playbooks express configurations, deployment, and orchestration in
Ansible. The Playbook format is YAML. Each Playbook maps a group of
hosts to a set of roles. Each role is represented by calls to Ansible
call tasks.

Ansible is a radically simple IT automation platform that makes your
applications and systems easier to deploy. Avoid writing scripts or
custom code to deploy and update your applications— automate in a
language that approaches plain English, using SSH, with no agents to
install on remote systems.

### [Ansible - What Version To Pick?](http://docs.ansible.com/intro_installation.html#what-version-to-pick)

If you are wishing to run the latest released version of Ansible and
you are running Red Hat Enterprise Linux (TM), CentOS, Fedora, Debian,
or Ubuntu, we recommend using the OS package manager.

On the managed nodes, you only need Python 2.4 or later, but if you are
running less than Python 2.5 on the remotes, you will also need:

* python-simplejson

### Good Intro at DigitalOcean on using Ansible to configure Ubuntu

* [DigitalOcean - Create Ansible Playbooks for Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-create-ansible-playbooks-to-automate-system-configuration-on-ubuntu)

## Gerhard Lazu

#### [Gerhard Lazu](https://thechangelog.com/ansible-docker/) The Why and How of Ansible and Docker

## my little app

#### [my little app](http://mylittleapp.org/) Easy setup of your own Heroku clone with Ansible and Dokku

This is an Ansible playbook that from scratch will automatically turn a
pristine server into your own Heroku clone. All you need is the server,
a domain name, and a DNS service supporting alias records. Everything
is powered by Dokku, which itself runs on Docker.

## [github.com/jnv/ansible-role-dokku-alt](https://github.com/jnv/ansible-role-dokku-alt)

Dokku Alternative Role for Ansible.
Install Docker and dokku-alt using official PPAs and perform initial setup for Dokku.

## [serversforhackers.com](https://serversforhackers.com/an-ansible-tutorial) An Ansible Tutorial

## [github.com/zenzire](https://github.com/zenzire/ansible-bootstrap-ubuntu) Boostrapping and securing an Ubuntu server


