var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hello123',
    database: 'sourcing'
});

connection.connect();

const insertIntoProducts = (dataSet) => {
  return dataSet.forEach(data => {
    return connection.query(`INSERT INTO products (prod_name, prod_desc) VALUES ("${data[0]}", "${data[1]}")`, (err, result) => {
      if(err) {
        console.log(err, 'Error inserting into database')
      } else {
        console.log('success inserting into database');
      }
    });
  })
}

module.exports.insertIntoProducts = insertIntoProducts;