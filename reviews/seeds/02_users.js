var faker = require('faker');
var sprintf = require('sprintf-js').sprintf;

let createRecord = (knex, id) => {
  let imageName = sprintf('%05s.jpg', id);

  return knex('users').insert({
    id,
    username: faker.internet.userName(),
    name: faker.name.findName(),
    img_url: 'https://s3-us-west-1.amazonaws.com/antsyuserimages/' + imageName
  })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      let records = [];
      for (let i = 1; i <= 30; i++) {
        records.push(createRecord(knex, i))
      }
      return Promise.all(records);
    });
};
