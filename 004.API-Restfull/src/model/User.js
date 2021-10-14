const mongoose = require('mongoose');
const { Schema } = mongoose;
const connection = require('../connection');

const userSchema = new Schema({
  name: {type: String, minlength: 4, maxlength: 50},
  midleName: {type: String, minlength: 4, maxlength: 50},
  age: {type: Number, minlength: 2, maxlength: 3},
  city: {type: String, minlength: 3, maxlength: 50},
  uf: {type: String, minlength: 2, maxlength: 50},
  email: {type: String, minlength: 14, maxlength: 100},
  password: {type: String, minlength: 8, maxlength: 200},

}, {timestamps:{createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const User = mongoose.model('Users', userSchema);

module.exports = User;