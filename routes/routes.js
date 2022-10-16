const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const  register= require('../controllers/userController.js');

router.post('/register', register);

module.exports = router;