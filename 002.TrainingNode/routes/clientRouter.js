const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const auth = require('../controllers/authController');


router.post('/register', clientController.register);
router.post('/login', clientController.login);
router.get('/consult', auth, clientController.consult);




module.exports = router;