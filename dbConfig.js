const config = require('./knexfile');
const knex = require('knex');
const environment = process.env.DB_ENV || 'development';
const db = knex(config[environment]);

module.exports = db;