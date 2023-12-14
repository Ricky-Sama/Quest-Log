require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/connection");
const PORT = process.env.PORT || 3000;
const router = require("./routes");
const session = require('express-session');

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET, // Ensure this environment variable is set in Heroku
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Use routes
app.use("/", router);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("../client/build"));
}

// Connect to the database and server
db.once('open', () => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
});