const faker = require('faker');

const desiredFakes = '200';
const fakesContainer = [];

const create = () =>({
  'user_id':faker.random.number({min:1,
    max:40}),
  'post_body':faker.lorem.paragraphs(),

})

for(let i = 0; i < desiredFakes; i ++){
  let fake = create();

  fakesContainer.push(fake);
}
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert(
        fakesContainer
      );
    });
};
