
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', table => {
    table.increments('id').primary()
    table.integer('stars')
    table.timestamp('created_at')
    table.string('review')
    table.string('img_url')
    table.integer('user_id').unsigned().index().references('id').inTable('users')
    table.integer('item_id').unsigned().index().references('id').inTable('items')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
