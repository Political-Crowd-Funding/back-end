
exports.up = function(knex) {
  return knex.schema
  


  .createTable('state',function(tbl){
      tbl.increments('state_id')
      tbl.string('state_name','225')
  })

  .createTable('public_official',function(tbl){
    tbl.increments('pub_official_id')

    tbl
      .string('phone',12)

    tbl
      .string('website',225)

  })
  
  .createTable('users',function(tbl){
    tbl.increments('user_id')
    
    tbl
      .string('email',225)
    tbl
      .string('street_address',225)
    
    tbl
      .bigInteger('state_id')
      .unsigned()
      .notNullable()
      .references('state_id')
      .inTable('state')
      .onDelete('CASCADE')

    tbl
      .bigInteger('pub_official_id')
      .unsigned()
      .references('pub_official_id')
      .inTable('public_official')
      .onDelete('CASCADE')
      .unique()//should this be unique due to a one to one relationship

  
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
      .bigInteger('user_id')
      .unsigned()
      .nullable()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
 
    

    tbl
      .text('post_body')
    tbl
      .timestamp('created_at').defaultTo(knex.fn.now());

    tbl
      .bigInteger('vote_tally')
      .defaultTo(0)
   
    //likes
    //transaction
    //big int
    //default to zero

   

  })

  //bridge table for unique tags for each post

  .createTable('tags_bridge',function(tbl){
    
    tbl
      .bigInteger('tag_id')
      .unsigned()
      .notNullable()
      .references('tag_id')
      .inTable('tags')
      .onDelete('CASCADE')
    
    tbl
      .bigInteger('post_id')
      .unsigned()
      .notNullable()
      .references('post_id')
      .inTable('posts')
      .onDelete('CASCADE')
  })

  //if we want a polling feature it would be good to be able to tie user identity to likes 
  //hence the FK columns (or just to be able to get demographics on who liked a post, eventually)

  .createTable('vote_table', function(tbl){
    // tbl.increments('like_id')

    tbl
      .bigInteger('post_id')
      .notNullable()
      .unsigned()
      .references('post_id')
      .inTable('posts')
      .onDelete('CASCADE')
   
    tbl
        .bigInteger('user_id')
        .nullable()
        .unsigned()
        .references('user_id')
        .inTable('users')
        .defaultTo(null)
        .onDelete('CASCADE')

    

    tbl.unique(["user_id","post_id"])

    
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


    tbl
    .timestamp('created_at').defaultTo(knex.fn.now());

    tbl
      .bigInteger('user_id')
      .notNullable()
      .unsigned()
      .references('user_id')
      .inTable('users')
     

  })


  
};

exports.down = function(knex) {
  knex.schema
  .dropTableIfExists('state')
  .dropTableIfExists('users')
  .dropTableIfExists('public_official')
  .dropTableIfExists('tags')
  .dropTableIfExists('tags_bridge')
  .dropTableIfExists('posts')
  .dropTableIfExists('vote_table')
  .dropTableIfExists('comments')

};
