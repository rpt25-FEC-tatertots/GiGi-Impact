const faker = require('faker');
const db = require('../database/index.js');

let randMaterial = faker.commerce.productMaterial;
let randMaterialDesc = faker.lorem.words;

let materialsArray = [];

for (let i = 0; i < 10; i ++) {
    materialsArray.push([randMaterial(), randMaterialDesc(6)]);
}

db.insertIntoMaterials(materialsArray)
  .then((data) => console.log('woohoo'))
  .catch((err) => console.log('ah shit!'));