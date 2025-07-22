const { validationResult } = require('express-validator');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "user already exists" });
        }
        user = await User.create({ username, email, password });
        const token = user.getSignedToken();
        res.status(201).json({
            success: true,
            token
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email }).select('+password');
        if (!user || (!await user.matchPassword(password))) {
            return res.status(400).json({ msg: "invalid credentials" });
        }
        const token = user.getSignedToken();
        res.status(200).json({
            success: true,
            token
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }

}
module.exports = { register, login }