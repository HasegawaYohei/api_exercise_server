const axios = require('axios');


(async () => {
  const users = require('../users');

  // const matchedUser = users
  //   .sort((a, b) => {
  //     const aAge = a.age;
  //     const bAge = b.age;

  //     if (aAge > bAge) return -1;
  //     if (aAge < bAge) return 1;
  //     return 0;
  //   })
  //   .find(v => {
  //     return v.name.match(processe.argv[2]);
  //   });
  const filteredUsers = users.filter(v => v.name.match(process.argv[2]));

  const result = await axios.get('http://localhost:8000/api/users', {
    params: {
      age: filteredUsers.map(v => v.age)
    }
  });



  console.dir(result.data);


})();
