const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');

routes.get('/', UserController.HomeMain);



module.exports=routes;