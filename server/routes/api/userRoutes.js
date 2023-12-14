const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User } = require('../../models');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// Create a new user (with hashed password )
router.post('/', async (req, res) => {
    try {
        const { password, username, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt
        const newUser = await User.create({ password: hashedPassword, username, email });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// login user
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }
        // seteup session to keep track of user
        req.session.user = user;
        res.json({ message: 'login successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;