require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/connection");
const PORT = process.env.PORT || 3000;

// Import routes
const userRoutes = require("./routes/api/userRoutes");
const profileRoutes = require("./routes/api/profileRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes with their base paths
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);

// Connect to the database and server
db.once('open', () => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
});
