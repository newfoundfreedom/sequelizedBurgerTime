CREATE DATABASE burgertime_db;

USE burgertime_db;

CREATE TABLE burgers(
  id INT(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT FALSE,
  date DATETIME,
  PRIMARY KEY (id)
);


