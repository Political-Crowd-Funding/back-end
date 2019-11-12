const faker = require('faker');


//start fake users
const fakesContainer = [];
const desiredFakes = '40';
const create = () =>({
  'email':faker.internet.email(),
  'street_address':faker.address.streetAddress(true),
  'state_id':faker.random.number({
    'min': 1,
    'max': 59
}),
  
})

for(let i = 0; i < desiredFakes; i ++){
  let fake = create();
  fakesContainer.push(fake)
  
}

//start fake politicans
let polMetaId = 1;
const desiredPoliticalFakes = '20';
const politicalFakes = []
const createPoliticianFakes = () =>({
  'email':faker.internet.email(),
  'street_address':faker.address.streetAddress(true),
  'state_id':faker.random.number({
    'min': 1,
    'max': 59
}),
  'pub_official_id':polMetaId
  
})



for(let i = 0; i < desiredPoliticalFakes; i ++){
  
  let fakeP = createPoliticianFakes();
  politicalFakes.push(fakeP);
  polMetaId++;
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(fakesContainer);
    })
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(politicalFakes)});
};
