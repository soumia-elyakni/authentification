const express = require('express');
const user = require('../controllers/userController.js');
const router = express.Router();
const verify = require('./tokenVerify.js');


router.post('/register', user.register );
router.post('/login', user.login);
router.get('/get', verify, user.get );


module.exports = router;