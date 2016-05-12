---
title: "Tracks sqlite to pg"
created_at: Fri Apr  1 19:03:06 MDT 2016
kind: article
tags:
  - tracks_gtd
  - sqlite
  - postgresql
  - tracks_sql
---


## <a href="http://stackoverflow.com/questions/4581727/convert-sqlite-sql-dump-file-to-postgresql" target="_blank">stackoverflow.com article</a>

See pgloader answer first

## <a href="http://pgloader.io/" target="_blank">pgload home page</a>

<a href="http://pgloader.io/howto/sqlite.html" target="_blank">pgloader.io article</a>
Loading SQLite files with pgloader

## configuration to use postgresql

### create branch for db move

<pre><code>
tracks git:(local-master) git checkout -b 20160402-sqlite-to-pg
</code></pre>

<ul>
  <li>local-master
    <ul>
      <li>local-live</li>
      <li>20160402-sqlite-to-pg</li>
    </ul>
  </li>
</ul>

### Note files ignored by git

<ul>
  <li>config/database.yml</li>
  <li>config/deploy.rb</li>
  <li>config/site.yml</li>
  <li>/db/*.db</li>
  <li>/db/*.sqlite3</li>
  <li>db/data.yml</li>
</ul>

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
