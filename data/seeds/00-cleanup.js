
const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate', // resets ids. When you delete rows from the table, it will not reset the Identity value, but it will keep increasing it. 
    restartIdentity: true,
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  });
};
