
exports.up = function(knex) {
  return knex.schema
  
  .createTable('state',function(tbl){
      tbl.increments('state_id')
      tbl.string('state_name','225')
  })

  .createTable('city',function(tbl){
      tbl.increments('city_id')
      tbl.string('zip_code',10)
      tbl.string('city_name',225)
      tbl.unique(['zip_code','city_name'])
  })

  .createTable('address',function(tbl){
      tbl.increments('address_id')
      tbl.string('address',225)
      tbl
      .bigInteger('city_id')
      .unsigned()
      .notNullable()
      .references('city_id')
      .inTable('city')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl
      .bigInteger('state_id')
      .notNullable()
      .unsigned()
      .references('state_id')
      .inTable('state')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('state')
};
