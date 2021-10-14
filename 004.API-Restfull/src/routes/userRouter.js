const express = require('express');
const Router = express.Router();
const userController = require('../controllers/userController');

Router.post('/register', userController.register); // CREATE A ACCOUNT
Router.post('/login', userController.login); // LOGIN IN ACCOUNT

module.exports = Router;