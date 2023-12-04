const express = require("express");
const router = express.Router();
const apiRouter = require('./api')
const path = require("path")

//APIs
router.use('/api', apiRouter)

//Static client views
router.use(express.static(path.join(__dirname, '../../client')));


router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client'));
});

module.exports = router;