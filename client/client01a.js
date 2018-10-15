const axios = require('axios');

(async () => {
  const res = await axios.get('https://api-exercise-server.herokuapp.com/api/users', {
    params: {
      age: process.argv[2],
      // gender: process.argv[3]
    }
  });

  res.data.map(v => v.name).forEach(v => console.log(v));
})().catch(err => {
  console.dir(err.response.statusText);
});
