const express = require('express');
const Router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

Router.post('/register', userController.register);
Router.post('/login', userController.login);

Router.get('/feed', postController.all);
Router.post('/feed/publish', postController.create);

Router.get('/feed/:post', postController.view);
Router.patch('/feed/:post/edit', postController.partialChange);
Router.put('/feed/:post/edit', postController.completeChange);
Router.delete('/feed/:post', postController.delete);

module.exports = Router;