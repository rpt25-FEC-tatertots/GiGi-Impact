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
  mat_img VARCHAR(300) NOT NULL,
  mat_info VARCHAR(1024) NOT NULL,
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
  loc_pic VARCHAR(350) NOT NULL,
  loc_company VARCHAR(50) NOT NULL,
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
  PRIMARY KEY (id)
  -- ,
  -- FOREIGN KEY (prod_id) REFERENCES products(id),
  -- FOREIGN KEY (mat_id) REFERENCES materials(id)
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
  PRIMARY KEY (id)
  -- ,
  -- FOREIGN KEY (prod_id) REFERENCES products(id),
  -- FOREIGN KEY (loc_id) REFERENCES locations(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -pHello123< database/schema.sql
 *  to create the database and the tables.*/

INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (1,"Fair Trade","Our first step on the path toward ensuring living wages in our supply chain","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw6fbb2428/fpc/programs/brewer_c_0001_cc_WEB-1200x1200.jpg?q=60&amp;sw=600&amp","There are now more than 20 Fair Trade factories that specialize in outdoor clothing. If more companies join it will make a positive impact in workers' lives.");
INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (2,"Recycled Polyester","Recycled polyester lessens our dependence on petroleum-based materials.","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw38d1a35f/fpc/materials/davis_t_2103-1200x1200.jpg?q=60&sw=600&","Using polyester fiber made from used plastic bottles reduces CO2 emissions by 59% compared to virgin polyester fiber.");
INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (3,"bluesign System","bluesign works in the supply chain to approve products that are safe for the environment, workers and…","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dwb05b30bf/fpc/programs/oberly_k_0201_cc_WEB-1200x1200.jpg?q=60&sw=600&","As more brands, manufacturers and chemical suppliers become bluesign system partners, we will continue to reduce the harmful environmental impacts of the global textile supply chain.");
INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (4,"Fluorinated DWR","Fluoranated DWR (durable water repellent) finishes help keep garments dry but…","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw88a743e4/fpc/materials/product_NFDWR-1200x1200.jpg?q=60&sw=600&","PFCs(perfluorocarbons) are effective at repelling water, but because of their environmental impact we're working with chemists to find a solution that will enable us to eliminate PFCs from the clothing we make.");
INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (5,"Spandex","Spandex provides significant strength and elasticity and is fast drying.","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dwb30ed692/fpc/materials/davis_t_2709-1200x1200.jpg?q=60&sw=600&","We are looking for recycled spandex options and technology that avoids the use of DMAc (dimethylacetamide), a solvent deemed of very high concern by the EU because of its reproductive toxicity.");
INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (6,"Odor-Control Additives","Odor-control additives block or prevent the growth of odor causing microbes.","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw6444ca8e/fpc/processes/photo_studio_0003-1200x1200.jpg?q=60&sw=600&","Patagonia uses HeiQ Fresh, a silver-iron-based odor-control additive, so you can wear garments more and need to wash them less.");
INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (7,"Organic Cotton","All our virgin cotton is grown with organic practices that eliminate the use of synthetic…","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dwb147966f/fpc/materials/davis_t_2074-1200x1200.jpg?q=60&sw=600&","Growing cotton organically reduces CO2 emissions by 45% and water usage by 87% compared to conventionally grown cotton.");
INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (8,"Recycled Wool","We use recycled wool to extend the life span of a valuable fiber that has alrea…","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw18802b40/fpc/materials/oberly_k_0308-1200x1200.jpg?q=60&sw=600&","We are sourcing factory scraps and postconsumer garments that can be re-spun into new yarn. Using recycled wool fiber reduces CO2 emissions by 98% compared to virgin wool.");
INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (9,"Nylon","Superlightweight yet durable, nylon is one of the strongest materials we use in our…","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw7abe3d31/fpc/materials/davis_t_2707-1200x1200.jpg?q=60&sw=600&","Nylon fiber is made form petroleum. Our goal is to move completely away from using this nonrenewable resource by 2025.");
INSERT INTO materials (id,mat_name,mat_desc,mat_img,mat_info) VALUES (10,"Polyester","Polyester is naturally water repellent and performs well in the outdoors.","https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dwbb165e17/fpc/materials/davis_t_2646-1200x1200.jpg?q=60&sw=600&","Polyester is a synthetic fiber derived from petroleum. Our derived goal is to move away from using this nonrenewable resource and use only recycled or biobased polyester by 2025.");

INSERT INTO locations (id,loc_name, loc_pic, loc_company) VALUES (1,"LK","https://api.mapbox.com/styles/v1/it-web-dwadmin/ck3g99zyg08921dl75q74uehl/static/pin-l+32B67A(80.140872,6.534737)/80.140872,6.534737,5,0,0/580x255?access_token=pk.eyJ1IjoiaXQtd2ViLWR3YWRtaW4iLCJhIjoiY2szZzVjajdqMGM1bDNibnFoa25saHh4YyJ9.puqkMy2Df3zVHhwCDov7Fg","Hirdaramani CKT Agalawatta");
INSERT INTO locations (id,loc_name, loc_pic, loc_company) VALUES (2,"CN","https://api.mapbox.com/styles/v1/it-web-dwadmin/ck3g99zyg08921dl75q74uehl/static/pin-l+FA4616(121.16523,30.891645)/121.16523,30.891645,5,0,0/580x255?access_token=pk.eyJ1IjoiaXQtd2ViLWR3YWRtaW4iLCJhIjoiY2szZzVjajdqMGM1bDNibnFoa25saHh4YyJ9.puqkMy2Df3zVHhwCDov7Fg","Polartec China");
INSERT INTO locations (id,loc_name, loc_pic, loc_company) VALUES (3,"TW","https://api.mapbox.com/styles/v1/it-web-dwadmin/ck3g99zyg08921dl75q74uehl/static/pin-l+FA4616(120.588027,23.727616)/120.588027,23.727616,5,0,0/580x255?access_token=pk.eyJ1IjoiaXQtd2ViLWR3YWRtaW4iLCJhIjoiY2szZzVjajdqMGM1bDNibnFoa25saHh4YyJ9.puqkMy2Df3zVHhwCDov7Fg","Formosa Taffeta Co., LTD");
INSERT INTO locations (id,loc_name, loc_pic, loc_company) VALUES (4,"VN","https://api.mapbox.com/styles/v1/it-web-dwadmin/ck3g99zyg08921dl75q74uehl/static/pin-l+32B67A(106.2051484,20.2791804)/106.2051484,20.2791804,5,0,0/580x255?access_token=pk.eyJ1IjoiaXQtd2ViLWR3YWRtaW4iLCJhIjoiY2szZzVjajdqMGM1bDNibnFoa25saHh4YyJ9.puqkMy2Df3zVHhwCDov7Fg","Youngone Namdinh Co., LTD");
INSERT INTO locations (id,loc_name, loc_pic, loc_company) VALUES (5,"VN","https://api.mapbox.com/styles/v1/it-web-dwadmin/ck3g99zyg08921dl75q74uehl/static/pin-l+32B67A(106.713627,10.924908)/106.713627,10.924908,5,0,0/580x255?access_token=pk.eyJ1IjoiaXQtd2ViLWR3YWRtaW4iLCJhIjoiY2szZzVjajdqMGM1bDNibnFoa25saHh4YyJ9.puqkMy2Df3zVHhwCDov7Fg","Esquel Enterprises Limited");

INSERT INTO materials_products (id,prod_id, mat_id) VALUES (1, 1, 1);
INSERT INTO materials_products (id,prod_id, mat_id) VALUES (2, 1, 2);
INSERT INTO materials_products (id,prod_id, mat_id) VALUES (3, 1, 3);
INSERT INTO materials_products (id,prod_id, mat_id) VALUES (4, 2, 1);
INSERT INTO materials_products (id,prod_id, mat_id) VALUES (5, 2, 2);
INSERT INTO materials_products (id,prod_id, mat_id) VALUES (6, 2, 4);
INSERT INTO materials_products (id,prod_id, mat_id) VALUES (7, 2, 5);
INSERT INTO materials_products (id,prod_id, mat_id) VALUES (8, 2, 6);
INSERT INTO materials_products (id,prod_id, mat_id) VALUES (9, 3, 7);

INSERT INTO locations_products (id,prod_id, loc_id) VALUES (1, 1, 1);
INSERT INTO locations_products (id,prod_id, loc_id) VALUES (2, 1, 2);
INSERT INTO locations_products (id,prod_id, loc_id) VALUES (3, 2, 3);
INSERT INTO locations_products (id,prod_id, loc_id) VALUES (4, 2, 4);
INSERT INTO locations_products (id,prod_id, loc_id) VALUES (5, 3, 5);

