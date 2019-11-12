const faker = require('faker');


const desiredFakes = '300';
const fakesContainer = [];
let tagNum = 0;
const create = () =>({
  'user_id':faker.random.number({min:1,max:40}),
  'post_id':faker.random.number({min:1,max:200}),
  'comment_body':faker.lorem.sentences()
})
  
for(let i = 0; i < desiredFakes; i ++){
  let fake = create();
  fakesContainer.push(fake)
  tagNum++
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert(fakesContainer);
    });
};
