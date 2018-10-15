const axios = require('axios');

(async () => {
  const postResult = await axios.post('http://localhost:8000/api/books/', {
    name: process.argv[2],
    author: process.argv[3],
    genre: process.argv[4]
  }).catch(e => {
    return {
      data: e.response.data
    };
  });

  if (!(postResult.data instanceof Array)) {
    console.dir(postResult.data.message);
    return;
  }

  if (postResult.data.find(v => v === false) !== undefined) {
    console.log('すでに登録されています.');
    return;
  }

  postResult.data
    .filter(v => typeof v !== 'boolean')
    .map(v => {
      return {
        name: v.name,
        author: v.author,
        genre: v.genre
      };
    })
    .forEach(v => console.log(Object.values(v).join(', ')));

  const getResult = await axios.get('http://localhost:8000/api/books/');
  getResult.data.map(v => v.name).forEach(v => console.log(v));
})();

(async () => {
  const res = await axios.get('http://localhost:8000/api/books/');
  res.data.map(v => v.name).forEach(v => console.log(v));
});
