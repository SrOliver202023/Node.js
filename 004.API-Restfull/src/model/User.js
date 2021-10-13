const mongoose = require('mongoose');
const { Schema } = mongoose;
const connection = require('../connection');

const userSchema = new Schema({
  name: {type: String, minlength: 4},
  age: {type: Number, minlength: 3},
  city: {type: String, minlength: 3},
  uf: {type: String, minlength: 2},
  email: {type: String, minlength: 10},
  password: {type: String, minlength: 6}
});

const User = mongoose.model('Users', userSchema);

module.exports = User;