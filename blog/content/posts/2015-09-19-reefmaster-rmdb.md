---
title: "ReefMaster rmdb file handling"
created_at: Sat Sep 19 09:32:59 MDT 2015
kind: article
tags:
  - reefmaster
  - reefmaster_rmdb
  - rmdp
  - mapping
  - lake_mapping
  - fish_finder
  - bathymetry
  - hydrographic_charts
---

~~~~~~~~~~~~~
sqlite> .schema sonar_files
CREATE TABLE "sonar_files" (
"id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL , 
"filename" TEXT NOT NULL, 
"file_size" INTEGER NOT NULL, 
"channel" INTEGER NOT NULL
);
~~~~~~~~~~~~~

~~~~~~~~~~~~~
sqlite> .schema track_points
CREATE TABLE "track_points" (
"id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , 
"track_id" INTEGER NOT NULL , 
"latitude" DOUBLE NOT NULL , 
"longitude" DOUBLE NOT NULL , 
"depth" DOUBLE NOT NULL , 
"time_offset_ms" INTEGER , 
"peak_sv" DOUBLE DEFAULT 0, 
"e1" DOUBLE DEFAULT 0, 
"e2" DOUBLE DEFAULT 0
);
~~~~~~~~~~~~~

~~~~~~~~~~~~~
sqlite> .schema tracks
CREATE TABLE "tracks" (
"id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ,
"name" TEXT NOT NULL , 
"start_time" TEXT, 
"source_filename" TEXT,
"cone_angle" INTEGER NOT NULL  DEFAULT (20) , 
"tide_station_id" INTEGER, 
"user_tide_points_id" INTEGER, 
"tide_source" TEXT, 
"keel_offset" INTEGER DEFAULT (0), 
"time_zone_id" TEXT NOT NULL
);
~~~~~~~~~~~~~

~~~~~~~~~~~~~
select id,source_filename from tracks where source_filename like '%sl2';
1|\\VBOXSVR\reefmaster\Runyon_Lake\sonar_logs\Chart 09_08_2015 [0].sl2
2|\\VBOXSVR\reefmaster\Runyon_Lake\sonar_logs\Chart 09_09_2015 [0].sl2
3|\\VBOXSVR\reefmaster\Runyon_Lake\sonar_logs\Chart 09_09_2015 [1].sl2
4|\\VBOXSVR\reefmaster\Runyon_Lake\sonar_logs\Chart 09_09_2015 [2].sl2
5|\\VBOXSVR\reefmaster\Runyon_Lake\sonar_logs\Chart 09_09_2015 [3].sl2
6|\\VBOXSVR\reefmaster\Runyon_Lake\sonar_logs\Chart 09_10_2015 [0].sl2
~~~~~~~~~~~~~

~~~~~~~~~~~~~
select id,source_filename from tracks where source_filename like '%sl2';

SELECT
  track_points.latitude,
  track_points.longitude
FROM
  tracks
JOIN
  track_points
ON
  tracks.id = track_points.track_id
WHERE
  tracks.source_filename LIKE '%sl2'
~~~~~~~~~~~~~

