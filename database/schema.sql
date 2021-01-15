DROP DATABASE IF EXISTS sourcing;

CREATE DATABASE sourcing;

USE sourcing;

-- ---
-- Table 'products'
-- 
-- ---
DROP TABLE IF EXISTS products;
		
CREATE TABLE products (
  id INTEGER AUTO_INCREMENT UNIQUE,
  prod_name VARCHAR(50) NOT NULL,
  prod_desc VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'materials'
-- 
-- ---

DROP TABLE IF EXISTS materials;
		
CREATE TABLE materials (
  id INTEGER AUTO_INCREMENT UNIQUE,
  mat_name VARCHAR(50) NOT NULL,
  mat_desc VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'locations'
-- 
-- ---

DROP TABLE IF EXISTS locations;
		
CREATE TABLE locations (
  id INTEGER AUTO_INCREMENT UNIQUE,
  loc_name VARCHAR(50) NOT NULL ,
  loc_pic VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'materials_products'
-- 
-- ---

DROP TABLE IF EXISTS materials_products;
		
CREATE TABLE materials_products (
  id INTEGER AUTO_INCREMENT UNIQUE,
  prod_id INTEGER NOT NULL,
  mat_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (prod_id) REFERENCES products(id),
  FOREIGN KEY (mat_id) REFERENCES materials(id)
);


-- ---
-- Table 'locations_products'
-- 
-- ---

DROP TABLE IF EXISTS locations_products;
		
CREATE TABLE locations_products (
  id INTEGER AUTO_INCREMENT UNIQUE,
  prod_id INTEGER NOT NULL,
  loc_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (prod_id) REFERENCES products(id),
  FOREIGN KEY (loc_id) REFERENCES locations(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -pHello123< database/schema.sql
 *  to create the database and the tables.*/


