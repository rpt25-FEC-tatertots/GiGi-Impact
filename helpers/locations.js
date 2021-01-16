const faker = require('faker');
const db = require('../database/index.js');

let randCountry = faker.address.country;
let randCountryImage = faker.image.imageUrl;

let locationsArray = [];

for (let i = 0; i < 15; i ++) {
  locationsArray.push([randCountry(), randCountryImage()]);
}

// console.log(locationsArray);
db.insertIntoLocations(locationsArray)
  .then((data) => console.log('woohoo'))
  .catch((err) => console.log('ah shit!'));