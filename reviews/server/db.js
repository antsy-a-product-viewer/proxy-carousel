const mysql = require('mysql');
const knexConfig = require('../knexfile.js').development.connection;

const connection = mysql.createConnection(knexConfig);

connection.connect();

const getStoreFromItem = (itemId, callback) => {
  var query = 'SELECT store_id FROM items WHERE id = ?';
  connection.query(query, [itemId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

const getInfoForReview = (reviewId, callback) => {
  var query = 'SELECT reviews.id AS review_id, users.img_url AS user_img, users.name AS user_name, reviews.created_at, reviews.stars, reviews.review, items.img_url AS item_img, items.name AS item_name FROM reviews INNER JOIN users ON reviews.user_id = users.id INNER JOIN items ON reviews.item_id = items.id WHERE reviews.id = ?';
  connection.query(query, [reviewId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

const getAllReviewsForStore = (storeId, callback) => {
  var query = 'SELECT reviews.id AS review_id, users.img_url AS user_img, users.name AS user_name, reviews.created_at, reviews.stars, reviews.review, reviews.img_url AS review_img, items.id AS item_id, items.img_url AS item_img, items.name AS item_name FROM reviews INNER JOIN users ON reviews.user_id = users.id INNER JOIN items ON reviews.item_id = items.id WHERE items.store_id = ? ORDER BY reviews.created_at';
  connection.query(query, [storeId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

const getReviewImagesForStore = (storeId, callback) => {
  var query = 'SELECT reviews.id AS review_id, reviews.img_url AS review_img, reviews.review, reviews.stars, reviews.created_at, items.id AS item_id, items.img_url AS item_img, items.name AS item_name, items.price, users.name AS user_name, users.img_url AS user_img FROM reviews INNER JOIN items on reviews.item_id = items.id INNER JOIN users on reviews.user_id = users.id WHERE items.store_id = ? AND reviews.img_url IS NOT NULL ORDER BY created_at';
  connection.query(query, [storeId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getStoreFromItem,
  getInfoForReview,
  getAllReviewsForStore,
  getReviewImagesForStore
};
