---
title: "Sqlite Tips"
created_at: Thu Sep 17 12:22:27 MDT 2015
kind: article
tags:
  - sqlite
  - sqlite_tips
---

#### [sitepoint.com article](http://www.sitepoint.com/getting-started-sqlite3-basic-commands/) Getting Started with SQLite3 – Basic Commands

## Information Schema

<pre><code>
sqlite3 tracks.db '.schema sqlite_master'

CREATE TABLE sqlite_master (
  type text,
  name text,
  tbl_name text,
  rootpage integer,
  sql text
);
</code></pre>

<a href="https://www.sqlite.org/pragma.html#pragma_foreign_key_list" target="_blank">pragma foreign_key_list</a>

<pre><code>
sqlite3 tracks.db 'PRAGMA foreign_key_list(projects)'
</code></pre>

<pre><code>
sqlite3 tracks.db 'select distinct type from sqlite_master'
</code></pre>

<!--
html boilerplate
<a href="" target="_blank"></a>
<img src="" width="400px">
<ul>
  <li></li>
</ul>
<pre>
</pre>
<pre><code>
</code></pre>
-->
