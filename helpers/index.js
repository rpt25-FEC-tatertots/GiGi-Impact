const faker = require('faker');
const db = require('../database/index.js');

//100 products
let prodUpdate = () => {
  let randProd = faker.commerce.product;
  let randProdDesc = faker.commerce.productDescription;

  let productsArray = [];
  for (let i = 4; i < 100; i++) {
    productsArray.push([randProd(), randProdDesc()]);
  }

  db.insertIntoProducts(productsArray);
}

//15 locations
let locUpdate = () => {
  let locationsArray = [];
  let locationName = faker.address.country;
  let locationURL = faker.image.nature();
  let locationCompany = faker.random.word;
  // let locationURL = faker.image.imageUrl;
  for (let i = 4; i < 15; i++) {
    locationsArray.push([locationName(), locationURL, locationCompany()]);
  }

  db.insertIntoLocations(locationsArray)
}

//10 materials
let matUpdate = () => {
  let materialsArray = [];
  let randMaterial = faker.commerce.productMaterial;
  let randMaterialDesc = faker.lorem.words;
  let randomInfo = faker.random.words;
  for (let i = 0; i < 10; i++) {
    materialsArray.push([randMaterial(), randMaterialDesc(6), randomInfo(30)]);
  }

  db.insertIntoMaterials(materialsArray)
    .then((data) => console.log('woohoo'))
    .catch((err) => console.log('ah shit!'));
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//15 mat 100 prod
//id, prod_id, mat_id
let matProdUpdate = () => {
  let randomNum = (num) => {
    return Math.floor(Math.random() * num) + 4;
  }
  let matProdArr = [];
  for (var i = 4; i < 200; i++) {
    matProdArr.push([randomIntFromInterval(4, 100), randomNum(15)]);
  }
  db.insertIntoMatProd(matProdArr);
}

//15 loc 100 prod
//id, loc_id, mat_id
let locProdUpdate = () => {
  let randomNum = (num) => {
    return Math.floor(Math.random() * num) + 4;
  }
  let locProdArr = [];
  for (var i = 4; i < 300; i++) {
    locProdArr.push([randomIntFromInterval(4, 100), randomNum(15)]);
  }
  db.insertIntoLocProd(locProdArr)
}

prodUpdate();
locUpdate();
matUpdate();
matProdUpdate();
locProdUpdate();