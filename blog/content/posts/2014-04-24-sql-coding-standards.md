---
title: "Sql Coding Standards"
created_at: Thu Apr 24 08:30:06 MDT 2014
kind: article
tags: [ 'sql' ]
---

# Online Survey

http://stackoverflow.com/questions/7662/database-table-and-column-naming-conventions

http://www.nyx.net/~bwunder/dbChangeControl/standard.htm

http://selectinsql.blogspot.in/2012/08/sql-server-stored-procedure-coding.html

http://blog.sqlauthority.com/2007/06/04/sql-server-database-coding-standards-and-guidelines-part-1/

http://blog.sqlauthority.com/2007/06/05/sql-server-database-coding-standards-and-guidelines-part-2/

http://www.pinaldave.com/sql-download/SQLServerGuideLines.pdf

http://justinsomnia.org/2003/04/essential-database-naming-conventions-and-style/

# Naming

## Naming by Pinal Dave

### Tables: 

Rules: Pascal notation; end with an ‘s’

Examples: Products, Customers

Group related table names1

### Stored Procs: 

Rules: sp<App Name>_[<Group Name >_]<Action><table/logical instance>

Examples: spOrders_GetNewOrders, spProducts_UpdateProduct

### Indexes: 

Rules: IX_<TableName>_<columns separated by _>

Examples: IX_Products_ProductID

### Primary Keys: 

Rules: PK_<TableName>

Examples: PK_Products

### Foreign Keys: 

Rules: FK_<TableName1>_<TableName2>

Example: FK_Products_Orderss

### Defaults: 

Rules: DF_<TableName>_<ColumnName>

Example: DF_Products_Quantity

### Columns: 

If a column references another table’s column, name it <table name>ID

Example: The Customers table has an ID column
The Orders table should have a CustomerID column
General Rules:

Do not use spaces in the name of database objects
Do not use SQL keywords as the name of database objects
In cases where this is necessary, surround the
object name with brackets, such as [Year]
Do not prefix stored procedures with ‘sp_’2
Prefix table names with the owner name3

# Craig Document Version One

## Naming

### General

Do not use Sql reserved words for object names.
If for some reason a Sql reserved word must be used
enclose in square brackets.  For example.

[user]

### Tables Names

Pascal notation. Singular form.

Examples

* AgentDispo
* Dispo
* TZState
* JobDispo

This table name convetion is seen in current usage.

### Stored Procedure Names

<pre>
<code>
proc_camelCaseNameOfProcedure
</code>
</pre>

For example

* proc_login
* proc_groupScore

Notes:

The prefix sp_ is reserved for system stored procedures that ship with
SQL Server. Whenever SQL Server encounters a procedure name starting
with sp_, it first tries to locate the procedure in the master database,
then it looks for any qualifiers (database, owner) provided, then it
tries dbo as the owner. Time spent locating the stored procedure can be
saved by avoiding the “sp_” prefix.

### Index Names 

Rule:

<pre><code>
IX_TableName_(columns separated by _)
</code></pre>

Note that if the column name starts with the table name, omit the table
name in the index name.

Examples:

* IX_AgentGroup_Agent_ID_Group_ID
* IX_Dispo_Code

### Primary Key Column names: 

Each table must have a primary key.  In most cases it should be an
IDENTITY column named 

<pre><code>
TableName_ID.
</code></pre>

For instance.

* Quiz_ID in table Quiz.
* Dispo_ID in table Dispo.
* Group_ID in table Group.

### Foreign Key Constraint Names: 

Rules:

<pre><code>
FK_(TableName1)_(TableName2)
</code></pre>

Examples:

* FK_AgentGroup_Agent
* FK_AgentGroup_Group

### Defaults: 

Rules: 

<pre><code>
DF_(ColumnName)
</code></pre>

Example:

DF_AgentGroup_Visible

Note our convention is that column names are prefixed with the table name.

### Columns: 

Column names will have the table name as a prefix.  Use camel case
notation after the table name prefix.

For example 

* column Agent_lastLogin in table Agent
* column Dispo_name in table Dispo.
* column AgentGroup_visible in table AgentGroup

If a column references another table’s column, name it 
<pre><code>
(table name)_(primary key column)
</code></pre>

For example, the Agent table has a primary key Agent_ID, the AgentGroup
table would have a AgentGroup_Agent_ID column.

* AgentGroup_Agent_ID

### Standard Abbreviations

It will be useful to have a list of GCS standard prefixes.  The First one
seen was TZ.

* TZ - timezone

## Query Formatting Examples

TBD

