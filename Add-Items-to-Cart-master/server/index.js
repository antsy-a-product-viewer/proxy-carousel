/* eslint-disable prefer-const */
const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const store = require('../database/seed.js');

// app.use(express.static(`${__dirname}/../client/dist`)); // root directory to serve the static files (dist in client folder, where our bundle is)

app.use('/product/:productId', express.static(`${__dirname}/../client/dist`))
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});


app.get('/product/:productId/item', (req, res) => {
  let item = req.params.productId;
  store.checkInventoryList(item, (err, inventory) => {
    if (err) {
      res.status(404).send('request failed');
    }
    res.status(200).send(inventory);
  });
});


// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Our server is listening to port ${port}`));
