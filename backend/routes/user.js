const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

const password_validator = require("../middleware/password_validator")

router.post('/signup',password_validator ,userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;