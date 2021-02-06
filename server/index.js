const express = require('express');
const db = require('../database/index.js');

let app = express();
app.use('/:productID', express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/locations/:productID', (req, res) => {
  let productID = req.params.productID;
  console.log('😛', productID)
  if(productID > 100) {
    res.sendStatus(404)
  }
  db.getOneProdLoc(productID)
    .then(data => res.json(data))
    // .then(data => console.log('🤗 on the server index.js', data))
    // .then(data => res.send(data))
    .catch(error => res.sendStatus(404))
    //if error send status code of  404
})

module.exports = app