const faker = require('faker');


const desiredFakes = '100';
const fakesContainer = [];

const create = () =>({
  'user_id':faker.random.number({min:1,max:40}),
  'post_id':faker.random.number({min:1,max:200}),

})
  
for(let i = 0; i < desiredFakes; i ++){
  let fake = create();
  fakesContainer.push(fake)

}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vote_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('vote_table').insert(fakesContainer);
    });
};
