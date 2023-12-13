require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/connection");
const PORT = process.env.PORT || 3000;

// Import routes
// const userRoutes = require("./routes/api/userRoutes");
// const profileRoutes = require("./routes/api/profileRoutes");
const router = require("./routes");

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Authentication middleware
// app.use("/api/users", userRoutes);
// app.use("/api/profile", profileRoutes);
app.use("/", router)

// Serve static assets in production (We can configure this when we have a build folder)
app.use(express.static("..client/build"));
// app.use(express.static("../client/dist"));

// Connect to the database and server
db.once('open', () => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
});
