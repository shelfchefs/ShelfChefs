### Schema

CREATE DATABASE ingredient_db;
USE ingredient_db;

CREATE TABLE ingredients
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	-- sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
