//made tag names unique
exports.up = function(knex) {
  
    return knex.schema.alterTable('tags', function(t) {
     
        // drops previous default value from column, change type to string and char length
        t.string('tag_name',225)
        .notNullable().unique().alter();
       
      });
};

exports.down = function(knex) {
    return sknex.schema.alterTable('public_official', function(t) {
     
        // drops previous default value from column, change type to string and char length
        t.string('tag_name',225)
        .notNullable();
       
      });
  
};

