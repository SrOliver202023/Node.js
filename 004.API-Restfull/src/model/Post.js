const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
const connection = require('../connection');
const postSchema = new Schema({
    userID: {type: String, minlength: 10},
    userName: {type: String, minlength: 4},
    _id: {type: String, minlength: 10},
    title: {type: String, minlength: 4, maxlength: 30},
    description: {type: String, minlength: 1},
    links:{type: Object}
}, {timestamps:{createdAt: 'createdAt', updatedAt: 'updatedAt'}});
  
const Post = mongoose.model('Post', postSchema);

module.exports = Post;