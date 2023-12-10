const express = require('express');
const bcrypt = require('bcryptjs');
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
        const { password, ...otherDetails } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt
        const newUser = await User.create({ password: hashedPassword, ...otherDetails });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


    }



module.exports = router;