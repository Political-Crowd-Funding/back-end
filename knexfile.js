// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: process.env.DB_LOCAL_DEV_NAME,
      user:process.env.DB_LOCAL_UN,
      password: process.env.DB_LOCAL_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  // production: {
  //   client: 'pg',
  //   connection: {
  //     host: '127.0.0.1',
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   seeds: {
  //     directory: './data/seeds'
  //   }
  // },

  testing: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: process.env.DB_LOCAL_TEST_NAME,
      user:process.env.DB_LOCAL_UN,
      password: process.env.DB_LOCAL_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  

};
