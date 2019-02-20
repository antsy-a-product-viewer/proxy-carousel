var faker = require('faker');
var sprintf = require('sprintf-js').sprintf;

let createRecord = (knex, id) => {
  var imageUrl;

  if (id <= 250) {
    var imageName = sprintf('%05s.jpg', id);
    imageUrl = 'https://s3-us-west-1.amazonaws.com/antsyreviewimages/' + imageName;
  } else {
    imageUrl = null;
  }

  return knex('reviews').insert({
    id,
    stars: faker.random.number({
      min: 1,
      max: 5
    }),
    created_at: faker.date.past(5),
    review: faker.hacker.phrase(),
    img_url: imageUrl,
    user_id: faker.random.number({
      min: 1,
      max: 30
    }),
    item_id: faker.random.number({
      min: 1,
      max: 100
    })
  });
};

exports.seed = function(knex, Promise) {
  return knex('reviews').del()
    .then(() => {
      let records =[];
      for (var i = 1; i <= 1000; i++) {
        records.push(createRecord(knex, i));
      }
      return Promise.all(records);
    });
};
