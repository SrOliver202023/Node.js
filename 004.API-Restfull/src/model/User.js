const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../connection');

const User = connection.define('User', {
  name: {type:DataTypes.STRING, minlength: 60},
  age: {type:DataTypes.INTEGER, minlength: 3},
  city: {type:DataTypes.STRING, minlength: 30},
  uf: {type:DataTypes.STRING, minlength: 2},
  email: {type:DataTypes.STRING, minlength: 100},
  password: {type:DataTypes.STRING, minlength: 60}
})

module.exports = User;