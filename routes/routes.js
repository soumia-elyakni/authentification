const express = require('express');
const user = require('../controllers/userController.js');
const router = express.Router();


router.post('/register', user.register );



module.exports = router;