---
title: "SQL Tricks"
created_at: Thu Nov  7 13:05:48 MST 2013
kind: article
tags: [ 'sql' ]
---

~~~~~~~~~~~~~
select CONVERT(CHAR(8), getdate(), 112)
20131107
~~~~~~~~~~~~~

~~~~~~~~~~~~~
select CONVERT(CHAR(8), READ_AT, 112),count(*)
FROM extract.dbo.CVLAN_CALL_EVENTS
group by CONVERT(CHAR(8), READ_AT, 112)
order by CONVERT(CHAR(8), READ_AT, 112)
~~~~~~~~~~~~~


[Drop foreign key constraints and recreate them](http://blog.sqlauthority.com/2014/04/11/sql-server-drop-all-the-foreign-key-constraint-in-database-create-all-the-foreign-key-constraint-in-database/)

#### [slideshow](http://www.slideshare.net/MarkusWinand/modern-sql) Markus Winand - Modern SQL in PostgreSQL

#### [page](http://blog.jooq.org/2013/12/18/add-lateral-joins-or-cross-apply-to-your-sql-tool-chain/) Add LATERAL Joins or CROSS APPLY to Your SQL Tool Chain

#### [page](http://blog.heapanalytics.com/postgresqls-powerful-new-join-type-lateral/) Dan Robinson - PostgreSQL’s Powerful New Join Type: LATERAL

#### [page](http://www.postgresonline.com/journal/archives/285-PostgreSQL-9.3-Lateral-Part2-The-Lateral-Left-Join.html) PostgreSQL 9.3 Lateral Part2: The Lateral Left Join

