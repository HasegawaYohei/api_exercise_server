const faker = require('faker');

const pnArray = [];
const generator = () =>  {
  const name = faker.company.companyName();
  const phoneNumber = faker.phone.phoneNumberFormat().split('-').map((v, i) => {
    if (i === 0) return v.padStart(3, 0);
    return v.padStart(4, 0);
  }).join('-');

  pnArray.push(phoneNumber);

  return {
    name,
    phoneNumber,
    created_at: '2018-10-15 00:00:00',
    updated_at: '2018-10-15 00:00:00',
  };
}

const json = new Array(100).fill(0).map(generator);
console.dir(json);