---
title: "SQL Tricks"
created_at: Thu Nov  7 13:05:48 MST 2013
kind: article
tags: [ 'sql' ]
---

<pre><code>
select CONVERT(CHAR(8), getdate(), 112)
20131107
</code></pre>

<pre><code>
select CONVERT(CHAR(8), READ_AT, 112),count(*)
FROM extract.dbo.CVLAN_CALL_EVENTS
group by CONVERT(CHAR(8), READ_AT, 112)
order by CONVERT(CHAR(8), READ_AT, 112)
</code></pre>


[Drop foreign key constraints and recreate them](http://blog.sqlauthority.com/2014/04/11/sql-server-drop-all-the-foreign-key-constraint-in-database-create-all-the-foreign-key-constraint-in-database/)


