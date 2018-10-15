const axios = require('axios');

(async () => {
  const companies = await axios.get('http://localhost:8000/api/company', {
    params: {
      phoneNumbers:
      [
        '827-0023-8640',
        '971-0789-2302',
        '909-0323-5410',
      ]
    }
  });

  console.dir(companies.data);
})();