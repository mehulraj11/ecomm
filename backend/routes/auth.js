const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { register, login } = require('../controllers/authController');

router.post('/register', [
    check('username', 'username is required').not().isEmpty(),
    check('email', 'please provide a valid email').isEmail(),
    check('password', 'please enter a password with 6 or more characters').isLength({ min: 6 })
], register);

router.post('/login', [
    check('email', 'email is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty()
], login);

module.exports = router;