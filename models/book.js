'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    underscored: true,
  });
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};