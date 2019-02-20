var faker = require('faker');
var sprintf = require('sprintf-js').sprintf;

let createRecord = (knex, id) => {
  let imageName = sprintf('%05s.jpg', id);

  return knex('items').insert({
    id,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    store_id: faker.random.number({
      min: 1,
      max: 20
    }),
    img_url: `https://s3-us-west-1.amazonaws.com/antsyitemsimages/` + imageName
  });
};

exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(() => {
      let records = [];
      for (var i = 1; i <= 100; i++) {
        records.push(createRecord(knex, i));
      }
      return Promise.all(records);
    });
};
