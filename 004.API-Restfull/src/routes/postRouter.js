const express = require('express');
const Router = express.Router();
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');

Router.get('/feed', authController.auth, postController.all); // SHOW ALL POSTS
Router.post('/feed/publish', authController.auth, postController.create); // CREATE A NEW POST

Router.get('/feed/:post', authController.auth, postController.view); // SHOWS A POST
Router.patch('/feed/:post/edit', authController.auth, postController.partialChange); // PARTIAL CHANGES A POST
Router.put('/feed/:post/edit', authController.auth, postController.completeChange); // COMPLETE CHANGE AND NEW ID
Router.delete('/feed/:post', authController.auth, postController.delete); // DELETE A POST 

module.exports = Router;