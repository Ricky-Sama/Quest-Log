const express = require('express');
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


// Create a new user
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router;