#!/bin/bash

#------------------------------------------------
# date variables
#------------------------------------------------
YEAR=$(date +%Y)
MONTH=$(date +%-m)
DAY=$(date +%-d)
UNIX_TIME=$(date +%s)

#------------------------------------------------
# mysql variables
#------------------------------------------------
MYSQL_USER='hoge'
MYSQL_PASSWORD='hoge'
MYSQL_HOST='localhost'
MYSQL_DATABASE='hoge_db'
# 以下に実行したいsql文を書く
MYSQL_SQL="UPDATE articles SET update_y = $YEAR, update_m = $MONTH, update_d = $DAY WHERE publish_status = \"public\";"

#------------------------------------------------
# do
#------------------------------------------------

eval "mysqldump -h $MYSQL_HOST -u $MYSQL_USER -p $MYSQL_DATABASE --password='$MYSQL_PASSWORD' > ~/hoge-backup.sql"
eval "mysql -h $MYSQL_HOST -u $MYSQL_USER -p $MYSQL_DATABASE --password='$MYSQL_PASSWORD' -e '$MYSQL_SQL'"