
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('name')
    table.string('img_url')
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
