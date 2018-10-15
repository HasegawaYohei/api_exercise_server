'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    underscored: true,
  });
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};