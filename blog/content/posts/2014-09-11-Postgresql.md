---
title: "PostgreSQL Notes"
created_at: Sun Sep  11 05:00:01 MDT 2014
kind: article
tags: 
  - linux
  - postgresql
  - pgagent
  - sqltabs
---

## Login as postgres using sudo

<pre><code>
sudo su - postgres
postgres@ivie:~$ psql
psql (9.4.6)
Type "help" for help.

postgres=# \du
                             List of roles
 Role name |                   Attributes                   | Member of 
-----------+------------------------------------------------+-----------
 postgres  | Superuser, Create role, Create DB, Replication | {}

postgres=# 
</code></pre>

* [PostgreSQL packages for Debian and Ubuntu](https://wiki.postgresql.org/wiki/Apt)
* [How to Install PostgreSQL 9.3 on Debian 7 Wheezy](http://www.pontikis.net/blog/postgresql-9-debian-7-wheezy)
* [PostgreSQL 9.3.5 Documentation](http://www.postgresql.org/docs/9.3/static/index.html)
* <a href="http://www.postgresql.org/docs/9.3/static/sql-select.html" target="_blank">docs - SELECT, TABLE, WITH -- retrieve rows from a table or view</a>



#### [digitalocean tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-roles-and-manage-grant-permissions-in-postgresql-on-a-vps--2) How To Use Roles

How To Use Roles and Manage Grant Permissions in PostgreSQL on a VPS


<a href="https://devcenter.heroku.com/articles/postgresql-indexes" target="_blank">Heroku - Efficient Use of PostgreSQL Indexes</a>


# pgagent

<a href="http://www.pgadmin.org/docs/dev/pgagent-install.html" target="_blank">pgAgent Installation</a>

### pgAgent Installation

pgAgent runs as a daemon on Unix systems, and a service on Windows
systems. In the majority of cases it will run on the database server
itself - it is for this reason that pgAgent is not automatically setup
when pgAdmin is installed.

#### <a href="http://www.pgadmin.org/docs/dev/pgagent-install.html#daemon-installation-on-unix" target="_blank">Daemon installation on Unix</a>


# SQL Tabs

SQL Tabs -
Rich SQL console for Postgresql 

<a href="http://www.sqltabs.com/" target="_blank">SQL Tabs site</a>

# pgAdmin

<a href="http://www.pgadmin.org/" target="_blank">pgAdmin site</a>

<!--
html boilerplate
<a href="" target="_blank"></a>
<a name=""></a>
<img src="" width="400px">
<ul>
  <li></li>
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
