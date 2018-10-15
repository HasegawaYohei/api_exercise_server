const express = require('express');
const router = express.Router();
const models = require('../models');

const wrapper = fn => (req, res, next) => fn (req, res).catch(next);

router.get('/users', wrapper(async (req, res) => {
  const query = req.query;
  const users = await models.user.findAll({
    where: query
  });

  res.json(users.map(v => {
    return {
      name: v.name,
      email: v.email,
      age: v.age,
      gender: v.gender,
      created_at: v.created_at,
      updated_at: v.updated_at
    };
  }));
}));

router.get('/books', wrapper(async (req, res) => {
  const query = req.query;
  const books = await models.book.findAll({
    where: query
  });

  res.json(books);
}));

router.get('/company', wrapper(async (req, res) => {
  const query = req.query;
  const companies = await models.company.findAll({
    where: {
      phoneNumber: query.phoneNumbers
    }
  });

  res.json(companies);
}));

router.post('/users/address', wrapper(async (req, res) => {
  const secret = req.body.secret;

  if (secret == null) {
    res.json(400, {
      message: '送信されたデータが不正です.'
    });
    return;
  }

  const address = await models.user.findOne({
    where: {
      secret
    }
  });

  res.json(200, address.dataValues.address);
}));

router.post('/books', wrapper(async (req, res) => {
  const postData = req.body;

  if (postData.name == null || postData.author == null || postData.genre == null) {
    res.json(400, {
      message: '送信されたデータが無効です.'
    });
    return;
  }

  const book = await models.book.findOrCreate({
    where: req.body
  });

  res.json(book);
}));

router.post('/auth', wrapper(async (req, res) => {
  const postData = req.body;
  const user = await models.user.findOne({
    where: {
      email: postData.email
    }
  });

  if (user == null) {
    res.json(400, {
      message: 'Eメールアドレスが間違っています.'
    });
    return;
  }

  res.json(user);
}));

router.post('/test', wrapper(async (req, res) => {
  console.dir(req);
  res.sendStatus(200);
}));

module.exports = router;