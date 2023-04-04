SHOW DATABASES; -- Script to list all databases
USE [DB_NAME]; -- script to use specifiec database ( change [DB_NAME] with your database name )
CREATE DATABASE IF NOT EXISTS [DB_NAME]; -- create new database ( change [DB_NAME] with your database name )
CREATE TABLE IF NOT EXISTS [TABLE_NAME] (
        [COLUMN_NAME] [COLUMN_DATATYPE] [:COLUMN_CONTRAINTS:],
);
SHOW TABLES;
DESCRIBE [TABLE_NAME]; -- show info and columns of the table_name ( change [TABLE_NAME] with your database table )

SELECT [FIELDS] FROM [TABLE_NAME]; -- select custom fields from table_name ( change fields with fields wanted and table_name with your db table name )
SELECT [FIELDS] FROM [TABLE_NAME] WHERE [CONDITION]; -- select with condition custom fields from table_name ( 
        --      change fields with fields wanted,
        --      table_name with your db table name 
        --      condition with the codition you want to filter by
        -- )
SELECT [FIELDS] FROM [TABLE_NAME] WHERE [CONDITION] ORDER BY [FIELD] [ORDER_METHOD]
SELECT [FIELDS] FROM [TABLE_NAME] WHERE [CONDITION] ORDER BY [FIELD] [ORDER_METHOD] LIMIT [NUMBER_OF_RESULTS]

        

INSERT INTO [TABLE_NAME] ([FEILDS]) VALUES ([VALS]) -- add new row to table_name ( change
        -- table_name with your db table name
        -- fields with the fields you want to put on that table
        -- VALS with the values you want to add to that fields
-- )

TRUNCATE [TABLE_NAME] -- Delete all table rows and restart id counter back to 1

ALTER TABLE [TABLE_NAME] [ACTION] -- Edit table by applying action to it (
        -- Replace [TABLE_NAME] with your table name
        -- Replace [ACTION] with the action needed to perform on table
-- )


-- create database named backend ( your script should not fail if database exists )
-- create table named lessons ( your script should not fail if table exists )
-- table lesssons should have the following columns
-- - id
-- - lesson_name
-- - lesson_content
-- - lesson_image_url
-- - created_at
-- - id must be primary key