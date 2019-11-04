
exports.up = function(knex) {
  return knex.schema
  


  .createTable('state',function(tbl){
      tbl.increments('state_id')
      tbl.string('state_name','225')
  })

  

   

  .createTable('voters',function(tbl){
    tbl.increments('voter_id')
    tbl
      .boolean('public_official')
      .defaultTo(false)
      .notNullable()
    tbl
      .string('voter_email',225)
    tbl
      .string('street_address',225)
    tbl
      .boolean('registered')
    tbl
      .bigInteger('state_id')
      .unsigned()
      .notNullable()
      .references('state_id')
      .inTable('state')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  
  })

 

  .createTable('public_official',function(tbl){
    tbl.increments('pub_official_id')
    tbl
      .boolean('public_official')
      .defaultTo(true)//unsure if this needs to be knex.value.true
      .notNullable()
    tbl
      .string('first',225)
    tbl
      .string('last',225)
    tbl
      .string('phone',12)

    tbl
      .string('email',225)

    tbl
      .string('website',225)
      .nullable()
    
    tbl
    .string('street_address',225)



    tbl
      .bigInteger('state_id')
      .unsigned()
      .notNullable()
      .references('state_id')
      .inTable('state')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')


  })

 

  .createTable('tags',function(tbl){
    tbl.increments('tag_id')
    tbl.string('tag_name',225)
    .notNullable();

  })

  
  //posts table
  .createTable('posts',function(tbl){
    tbl.increments('post_id')
    tbl
      .bigInteger('voter_id')
      .unsigned()
      .nullable()
      .references('voter_id')
      .inTable('voters')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl
      .bigInteger('pub_official_id')
      .unsigned()
      .nullable()
      .references('pub_official_id')
      .inTable('public_official')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl
      .text('post_body')
    tbl
      .timestamp('created_at').defaultTo(knex.fn.now());
   

   

  })

  //bridge table for unique tags for each post

  .createTable('tags_bridge',function(tbl){
    tbl
      .increments('tag_bridge_id')
    
    tbl
      .bigInteger('tag_id')
      .unsigned()
      .notNullable()
      .references('tag_id')
      .inTable('tags')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    
    tbl
      .bigInteger('post_id')
      .unsigned()
      .notNullable()
      .references('post_id')
      .inTable('posts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })

  //if we want a polling feture it would be good to be able to tie user identity to likes 
  //hence the FK columns (or just to be able to get demographics on who liked a post, eventually)

  .createTable('likes', function(tbl){
    tbl.increments('like_id')

    tbl
      .bigInteger('post_id')
      .notNullable()
      .unsigned()
      .references('post_id')
      .inTable('posts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl
        .integer('like_count')
        .defaultTo(1)
        .nullable()
    tbl
        .bigInteger('voter_id')
        .nullable()
        .unsigned()
        .references('voter_id')
        .inTable('voters')
        .defaultTo(null)

    tbl
      .bigInteger('politician_id')
      .nullable()
      .unsigned()
      .references('politician_id')
      .inTable('politicians')
      .defaultTo(null)
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl
    .timestamp('created_at').defaultTo(knex.fn.now());

    
  })

  .createTable('comments',function(tbl){
    tbl
      .increments('comment_id')

    tbl
      .text('comment_body')
    
    tbl
      .bigInteger('post_id')
      .unsigned()
      .notNullable()
      .references('post_id')
      .inTable('posts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl
    .timestamp('created_at').defaultTo(knex.fn.now());

    tbl
      .bigInteger('user_id')
      .notNullable()
      .unsigned()
      //need to see if this is the best approach here
      //should this be a unique value?
      //there could be duplicates so probably not

  })


  //tags bridge
  
};

exports.down = function(knex) {
  knex.schema
  .dropTableIfExists('state')
  .dropTableIfExists('voters')
  .dropTableIfExists('public_official')
  .dropTableIfExists('tags')
  .dropTableIfExists('tags_bridge')
  .dropTableIfExists('likes')
  .dropTableIfExists('posts')
  .dropTableIfExists('comments')
  .dropTableIfExists('likes')

};
