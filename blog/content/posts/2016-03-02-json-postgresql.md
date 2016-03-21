---
title: "JSON and Postgresql"
created_at: Wed Mar  2 09:50:13 MST 2016
kind: article
tags:
  - postgresql
  - json
  - jsonb
---

### JSONB and PostgreSQL: Work Faster By Ditching Migrations <a href="http://rob.conery.io/2016/02/27/jsonb-and-postgresql/" target="_blank">rob.conery.io article</a>

### What's different in JSONB?

Is PostgreSQL Your Next JSON Database?  <a href="https://www.compose.io/articles/is-postgresql-your-next-json-database/" target="_blank">compose.io/article</a>


Well, with JSONB it turns the JSON document into a hierarchy of key/value
data pairs. All the white space is discarded, only the last value in a set
of duplicate keys is used and the order of keys is lost to the structure
dictated by the hashes in which they are stored. If we make a JSONB
version of the table we just created, insert some data and look at it:

### Peter Geoghegan - What I think of jsonb 

<a href="http://pgeoghegan.blogspot.com/2014/03/what-i-think-of-jsonb.html" target="_blank">pgeoghegan.blogspot article</a>

Jsonb is a new datatype for Postgres. It is distinct from the older json
datatype in that its internal representation is binary, and in that
it is internally typed. It also makes sophisticated nested predicates
within queries on jsonb indexable.


<!--
html boilerplate
<a href="" target="_blank"></a>
<img src="" width="400px">
-->


