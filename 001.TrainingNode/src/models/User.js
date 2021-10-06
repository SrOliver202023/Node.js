const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../connection');

const User = connection.define('User', {
  name: { type: DataTypes.STRING, allowNull: false},
  age: { type: DataTypes.INTEGER }
}, {tableName: 'Users', freezeTableName:true});


// .sync({ force:true })

module.exports = User;