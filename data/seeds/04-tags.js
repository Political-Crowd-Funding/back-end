const faker = require('faker');


const desiredFakes = '40';
const fakesContainer = [];
let tagNum = 0;
const create = () =>({
  'tag_name':`uniqueTag${tagNum}`
})
  
for(let i = 0; i < desiredFakes; i ++){
  let fake = create();
  fakesContainer.push(fake)
  tagNum++
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert(fakesContainer);
    });
};
