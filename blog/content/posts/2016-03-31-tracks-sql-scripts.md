---
title: "Tracks SQL"
created_at: Thu Mar 31 10:57:33 MDT 2016
kind: article
tags:
  - tracks_gtd
  - sqlite
  - tracks_sql
---

<pre><code>
cd ~/dev/tracks/db
sqlite3 tracks.db
</code></pre>

<pre><code>
sqlite> .tables
contexts                                               
dependencies                                           
notes                                                  
open_id_authentication_associations                    
open_id_authentication_nonces                          
preferences                                            
projects                                               
recurring_todos                                        
schema_migrations                  
sessions                           
taggings                           
tags                               
todos                              
tolk_locales                       
tolk_phrases                       
tolk_translations                  
users                              
</code></pre>

<pre><code>
sqlite3 tracks.db '.schema projects'

CREATE TABLE "projects" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
  "name" varchar(255) NOT NULL, 
  "position" integer, 
  "user_id" integer DEFAULT 1, 
  "description" text, 
  "state" varchar(20) NOT NULL, 
  "created_at" datetime, 
  "updated_at" datetime, 
  "default_context_id" integer, 
  "completed_at" datetime, 
  "default_tags" varchar(255), 
  "last_reviewed" datetime

CREATE INDEX 
  "index_projects_on_user_id" ON "projects" 
    ("user_id");
CREATE INDEX 
  "index_projects_on_user_id_and_name" ON "projects" 
    ("user_id", "name");
CREATE INDEX 
  "index_projects_on_state" ON "projects" 
    ("state");
CREATE INDEX 
  "index_projects_on_user_id_and_state" ON "projects" 
    ("user_id", "state");
);
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

