
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.string('name')
    table.float('price')
    table.integer('store_id')
    table.string('img_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
};
