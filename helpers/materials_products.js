const db = require('../database/index.js');

let randomNum = (num) => {
    return Math.floor(Math.random() * num) + 1;
}

let array = [];
//100 products 10 materials
for (let i = 0; i < 300; i++) {
  array.push([randomNum(100), randomNum(10)]);
}

db.insertIntoMatProd(array);
