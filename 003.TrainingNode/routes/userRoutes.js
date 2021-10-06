const express = require('express');
const Router = express.Router();

const userController = require('../controllers/userController');


Router.post('/', userController.sendMessage);


module.exports = Router;