const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
const connection = require('../connection');
const postSchema = new Schema({
    userID: {type: String, minlength: 10},
    userName: {type: String, minlength: 4},
    _id: {type: String, minlength: 10},
    title: {type: String, minlength: 10},
    description: {type: String, minlength: 5}
});
  
const Post = mongoose.model('Post', postSchema);

module.exports = Post;