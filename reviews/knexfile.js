// Update with your config settings.
var mysqlConfig = require('./keys.js').mysqlConfig;

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'antsy_reviews',
      user:     mysqlConfig.mysqlUsername,
      password: mysqlConfig.mysqlPassword
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
