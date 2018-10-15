const axios = require('axios');

(async () => {
  const user = (await axios.get('http://localhost:8000/api/users', {
    params: {
      age: process.argv[2],
      gender: process.argv[3]
    }
  })).data.sort((a, b) => {
    const al = a.name.length;
    const bl = b.name.length;

    if (al > bl) return -1;
    if (al < bl) return 1;
    return 0;
  })[0];

  const secret = (await axios.post('http://localhost:8000/api/auth/', {
    email: user.email
  })).data.secret;

  const address = (await axios.post('http://localhost:8000/api/users/address', {
    secret
  })).data;

  console.dir(address);
})().catch(e => console.error(e.response.data.message));