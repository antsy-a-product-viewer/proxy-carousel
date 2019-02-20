const express = require('express');
const db = require('./db');
const app = express();
const path = require('path');
const port = 3020;

app.use('/product/:productId', express.static(path.join(__dirname, '/../client/dist')));

// ADDED CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.get('/product/:productId/store_id', (req, res) => {
  var productId = req.params.productId;
  db.getStoreFromItem(productId, (err, data) => {
    if (err) {
      console.log('error getting storeId: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting storeId');
      res.status(200).send(data);
    }
  });
});

app.get('/reviews/:reviewId', (req, res) => {
  var reviewId = req.params.reviewId;
  db.getInfoForReview(reviewId, (err, data) => {
    if (err) {
      console.log('error getting review: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting review');
      res.status(200).send(data);
    }
  });
});

app.get('/stores/:storeId/reviews', (req, res) => {
  var storeId = req.params.storeId;
  db.getAllReviewsForStore(storeId, (err, data) => {
    if (err) {
      console.log('error getting store reviews: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting reviews for store');
      res.status(200).send(data);
    }
  });
});

app.get('/stores/:storeId/review_images', (req, res) => {
  var storeId = req.params.storeId;
  db.getReviewImagesForStore(storeId, (err, data) => {
    if (err) {
      console.log('error getting store review images: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting review images for store');
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log('listening on port: ', port));