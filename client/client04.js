const axios = require('axios');

(async () => {
  const phoneNumbers = require('../phone_numbers');
  const formatedPhoneNumbers = phoneNumbers.map(v => {
    return v.map((v, i) => {
      if (i === 0) return String(v).padStart(3, 0);
      else return String(v).padStart(4, 0);
    }).join('-');
  });

  const filterdPhoneNumbers = formatedPhoneNumbers.filter(v => v.match(process.argv[2]));

  const companies = await axios.get('http://localhost:8000/api/company', {
    params: {
      phoneNumbers: filterdPhoneNumbers
    }
  });

  companies.data
    .map(v => {
      return {
        name: `Company Name: ${v.name}`,
        phoneNumber: `Phone Number: ${v.phoneNumber}`
      }
    })
    .forEach(v => {
      console.log(`${v.name} || ${v.phoneNumber}`);
    });
})();