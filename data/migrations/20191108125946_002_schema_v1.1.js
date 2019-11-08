//ignore this schema, used improper name, messed up order of migrations
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
