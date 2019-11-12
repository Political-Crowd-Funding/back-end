const faker = require('faker');


const desiredFakes = '20';
const fakesContainer = [];
const create = () =>({
  'phone':faker.phone.phoneNumberFormat(1),
  'website':faker.internet.domainName()
})
for(let i = 0; i < desiredFakes; i ++){
  let fake = create();
  fakesContainer.push(fake)
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('public_official').del()
    .then(function () {
      // Inserts seed entries
      return knex('public_official').insert(fakesContainer);
    });
};
