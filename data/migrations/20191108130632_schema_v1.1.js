//migration made to fix order of schema and to also extend phone length
exports.up = function(knex) {
  
    return knex.schema.alterTable('public_official', function(t) {
     
        // drops previous default value from column, change type to string and char length
        t.string('phone', 25).alter();
       
      });
};

exports.down = function(knex) {
    return sknex.schema.alterTable('public_official', function(t) {
     
        // drops previous default value from column, change type to string and char length
        t.string('phone', 12).alter();
       
      });
  
};

