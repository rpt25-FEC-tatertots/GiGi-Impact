const faker = require('faker');
const db = require('../database/index.js');

//100 products
let prodUpdate = () => {
  let randProd = faker.commerce.product;
  let randProdDesc = faker.commerce.productDescription;
  
  let productsArray = [];
  for(let i = 0; i < 100; i ++) {
    productsArray.push([randProd(), randProdDesc()]);
  }
  
  db.insertIntoProducts(productsArray);
}

//15 locations
let locUpdate = () => {
  let locationsArray = [];
  let locationName = faker.address.country;
  let locationURL = faker.image.imageUrl;
  for (let i = 0; i < 15; i ++) {
      locationsArray.push([locationName(), locationURL()]);
  }
  
  db.insertIntoLocations(locationsArray)
}

//10 materials
let matUpdate = () => {
  let materialsArray = [];
  let randMaterial = faker.commerce.productMaterial;
  let randMaterialDesc = faker.lorem.words;
  for (let i = 0; i < 10; i ++) {
      materialsArray.push([randMaterial(), randMaterialDesc(6)]);
  }
  
  db.insertIntoMaterials(materialsArray)
    .then((data) => console.log('woohoo'))
    .catch((err) => console.log('ah shit!'));
}

//10 mat 100 prod
//id, prod_id, mat_id
let matProdUpdate = () => {
    let randomNum = (num) => {
        return Math.floor(Math.random() * num) + 1;
    }
    let matProdArr = [];
    for (var i = 0; i < 400; i ++) {
      matProdArr.push([randomNum(100), randomNum(10)]);
    }
    db.insertIntoMatProd(matProdArr);
}

//15 loc 100 prod
//id, loc_id, mat_id
let locProdUpdate = () => {
    let randomNum = (num) => {
        return Math.floor(Math.random() * num) + 1;
    }
    let locProdArr = [];
    for (var i = 0; i < 500; i ++) {
      locProdArr.push([randomNum(10), randomNum(15)]);
    }
    db.insertIntoLocProd(locProdArr)
}

prodUpdate();
locUpdate();
matUpdate();
matProdUpdate();
locProdUpdate();