/* eslint-disable no-console */
require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', process.env.DB_USER, process.env.DB_PASSWORD, {
  operatorsAliases: false,
  dialect: 'postgres'
});

sequelize
  .query(`CREATE DATABASE ${process.env.DB_NAME};`)
  .then(() => {
    console.log(`SUCCESS: CREATE DATABASE ${process.env.DB_NAME}.`);
  })
  .catch(error => {
    if (error.original.code === '42P04') console.error(`ERROR! DATABASE ${process.env.DB_NAME} already exists.`);
    else if (error.original.code === '42501') console.error('ERROR! permission denied to create DATABASE.');
    else console.error(error);
  })
  .finally(() => {
    sequelize.close();
  });