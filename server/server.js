require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/connection");
const PORT = process.env.PORT || 3000;
const router = require("./routes");
const session = require('express-session');
const path = require('path'); // Added to handle paths

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } // Simplified the secure flag
}));

// Use the main router
app.use("/", router);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build'))); // Corrected the path

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html')); // Serve index.html for all unknown routes
    });
}

// Connect to the database and server
db.once('open', () => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
});