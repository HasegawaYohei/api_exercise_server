'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    secret: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    underscored: true,
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};