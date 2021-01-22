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
      if (err) {
        console.log(err, 'Error inserting into database')
      } else {
        console.log('success inserting into database');
      }
    });
  })
}

const insertIntoLocations = (dataSet) => {
  let promiseArray = dataSet.map(data => {
    return new Promise((resolve, reject) => {
      return connection.query(`INSERT INTO locations (loc_name, loc_pic) VALUES ("${data[0]}", "${data[1]}")`, (error, result) => {
        if (error) {
          console.log(error, 'error inserting into locations table');
          reject(error)
        } else {
          console.log('successfully inserted into the locations table')
          resolve(result);
        }
      });
    })
  });
  return Promise.all(promiseArray);
}

const insertIntoMaterials = (dataSet) => {
  let promiseArray = dataSet.map(data => {
    return new Promise((resolve, reject) => {
      return connection.query(`INSERT INTO materials (mat_name, mat_desc) VALUES ("${data[0]}", "${data[1]}")`, (error, result) => {
        if (error) {
          console.log(error, 'error inserting into materials table');
          reject(error)
        } else {
          console.log('successfully inserted into the materials table')
          resolve(result);
        }
      });
    })
  });
  return Promise.all(promiseArray);
}

const insertIntoLocProd = (dataSet) => {
  let promiseArray = dataSet.map(data => {
    return new Promise((resolve, reject) => {
      return connection.query(`INSERT INTO locations_products (prod_id, loc_id) VALUES ("${data[0]}", "${data[1]}")`, (error, result) => {
        if (error) {
          console.log(error, 'error inserting into loc_prod table');
          reject(error)
        } else {
          console.log('successfully inserted into the loc_prod table')
          resolve(result);
        }
      });
    })
  });
  return Promise.all(promiseArray);
}

const insertIntoMatProd = (dataSet) => {
  let promiseArray = dataSet.map(data => {
    return new Promise((resolve, reject) => {
      return connection.query(`INSERT INTO materials_products (prod_id, mat_id) VALUES ("${data[0]}", "${data[1]}")`, (error, result) => {
        if (error) {
          console.log(error, 'error inserting into mat_prod table');
          reject(error)
        } else {
          console.log('successfully inserted into the mat_prod table')
          resolve(result);
        }
      });
    })
  });
  return Promise.all(promiseArray);
}

const getProducts = () => {
  return new Promise((resolve, reject) => {
    return connection.query(`select * from products`, (error, result) => {
      if (error) {
        console.log('👎🏽 error getting from products');
        reject(error)
      } else {
        console.log('👍🏽 success in getting data from products');
        resolve(result);
      }
    })
  })
}

const getOneProdLoc = (id) => {
  return new Promise((resolve, reject) => {
    return connection.query(`SELECT DISTINCT a.id, a.loc_name, a.loc_pic 
      FROM locations a, locations_products b,  products c 
      WHERE b.prod_id = c.id 
      AND b.loc_id = a.id
      AND c.id = ${id}`, (error, result) => {
        if(error) {
          console.log(error);
          reject(error);
        } else {
          console.log(result);
          resolve(result);
        }
      }); 
  })
}

module.exports = {
  insertIntoProducts,
  insertIntoLocations,
  insertIntoMaterials,
  insertIntoLocProd,
  insertIntoMatProd,
  getProducts,
  getOneProdLoc
};
