var express = require('express');
var router = express.Router();
const register = require('../modules/controller/registercontroller.js'),
      login = require('../modules/controller/logincontroller.js');

router.post('/create/user', register.registerUser);
router.post('/login/user', login.loginUser);

module.exports = router; 
