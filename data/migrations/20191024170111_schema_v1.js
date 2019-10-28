
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

  .createTable('roles',function(tbl){
    tbl.increments('role_id')
    tbl.string('role_name',10)
    tbl.unique(['role_name'])
  })

  .createTable('voters',function(tbl){
    tbl.increments('voter_id')
    tbl
      .string('voter_email',225)
    tbl
      .bigInteger('street_id')
      .unsigned()
      .notNullable()
      .references('address_id')
      .inTable('address')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl
      .boolean('registered')
    tbl
      .bigInteger('role_id')
      .unsigned()
      .notNullable()
      .references('roleBridgeId')
      .inTable('roleBridgeTable')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })

  .createTable('roleBridgeTable',function(tbl){
    tbl.increments('roleBridgeId')
    tbl
      .bigInteger('voter_id')
      .references('voter_id')
      .inTable('voters')
      .notNullable()
      .unsigned()
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl
      .bigInteger('role_id')
      .references('role_id')
      .inTable('roles')
      .notNullable()
      .unsigned()
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

  })

  .createTable('political_party',function(tbl){
    tbl.increments('party_id')
    tbl
      .string('name',225)
  })

  .createTable('public_official',function(tbl){
    tbl.increments('pub_official_id')
    tbl
      .string('first',225)
    tbl
      .string('last',225)
    tbl
      .string('phone',12)
    tbl
      .string('website',225)

    tbl
      .string('district',225)

    tbl
      .bigInteger('address_id')
      .unsigned()
      .notNullable()
      .references('address_id')
      .inTable('address')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    tbl
      .bigInteger('party_id')
      .unsigned()
      .notNullable()
      .references('party_id')
      .inTable('political_party')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })

  
};

exports.down = function(knex) {
  knex.schema
  .dropTableIfExists('state')
  .dropTableIfExists('city')
  .dropTableIfExists('address')
  .dropTableIfExists('roles')
  .dropTableIfExists('voters')
  .dropTableIfExists('roleBridgeTable')
  .dropTableIfExists('political_party')
  .dropTableIfExists('public_official')

};
