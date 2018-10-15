const faker = require('faker');
const max = 50;
const min = 20;

const users = new Array(100).fill(0).map(v => {
  return {
    name: faker.name.findName(),
    age: Math.floor(Math.random() * (max + 1 - min) ) + min
  };
});


console.dir(users);