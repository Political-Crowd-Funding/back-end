const faker = require('faker');


const desiredFakes = '100';
const fakesContainer = [];
let tagNum = 0;
const create = () =>({
  'tag_id':faker.random.number({min:1,max:40}),
  'post_id':faker.random.number({min:1,max:200})
})
  
for(let i = 0; i < desiredFakes; i ++){
  let fake = create();
  fakesContainer.push(fake)
  tagNum++
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tags_bridge').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags_bridge').insert(fakesContainer);
    });
};
