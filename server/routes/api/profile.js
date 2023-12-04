const express = require("express");
const router = express.Router()

const { Profile } = require("../../modals")

// Get all profiles
router.get("/", async (req, res) => {
    try {
        const profiles = await Profile.find({})
        res.json(profiles)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.post("/", async (req, res) => {
    try {
        const newProfile = await Profile.create(req.body)
        res.json(newProfile)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router;