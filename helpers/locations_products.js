const db = require('../database/index.js');

let randomNum = (num) => {
    return Math.floor(Math.random() * num) + 1;
}

let array = [];
//100 products 15 locations
for (let i = 0; i < 500; i++) {
  array.push([randomNum(100), randomNum(15)]);
}

db.insertIntoLocProd(array);
