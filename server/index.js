const express = require('express');
const db = require('../database/index.js');

let app = express();
app.use('/:productID', express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/locations/:productID', (req, res) => {
  let productID = req.params.productID;
  if(productID > 100) {
    res.sendStatus(404)
  }
  db.getOneProdLoc(productID)
    .then(data => res.json(data))
    .catch(error => res.sendStatus(404))
})

app.get('/materials/:productID', (req, res) => {
  let productID = req.params.productID;
  if(productID > 100) {
    res.sendStatus(404)
  }
  db.getOneProdMat(productID)
    .then(data => res.json(data))
    .catch(error => res.sendStatus(404))
})

module.exports = app