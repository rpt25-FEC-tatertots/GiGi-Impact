const faker = require('faker');
const db = require('../database/index.js');


let randProd = faker.commerce.product;
let randProdDesc = faker.commerce.productDescription;

let productsArray = [];

for(let i = 0; i < 100; i ++) {
  productsArray.push([randProd(), randProdDesc()]);
}

db.insertIntoProducts(productsArray);
