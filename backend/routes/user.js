const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

const password_validator = require("../middleware/password_validator");
const emailRegex = require("../middleware/emailRegex");

router.post('/signup',password_validator,emailRegex ,userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;