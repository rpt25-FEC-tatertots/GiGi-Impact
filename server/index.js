const express = require('express');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/locations', (req, res) => {
  let productID = req.query.product_id;
  db.getOneProdLoc(productID)
    .then(data => res.send(data))
    .catch(error => console.log(error))
})

let port = 6002

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});


module.exports = app