const faker = require('faker');
const max = 50;
const min = 20;

const generateSecret = () => {
  const l = 8;
  const c = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cl = c.length;
  let r = "";

  for (let i = 0; i < l; i++) {
    r += c[Math.floor(Math.random() * cl)];
  }

  return r;
}

const generator = () => {
  const name = faker.name.findName();
  const secret = generateSecret();
  const email = faker.internet.email();
  const age = Math.floor(Math.random() * (max + 1 - min) ) + min;
  const gender =  Math.floor(Math.random() * 2) ? 'male' : 'female';
  const address = faker.address.state();

  return {
    name,
    secret,
    email,
    age,
    gender,
    address,
    created_at: '2018-10-12 00:00:00',
    updated_at: '2018-10-12 00:00:00',
  };
}

const json1 = new Array(100).fill(0).map(generator);
const json2 = new Array(100).fill(0).map(generator);

console.dir(json1);
console.dir(json2);