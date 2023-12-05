require("dotenv").config()

const express = require("express")
const app = express();
const db = require("./config/connection"); // import the connection to the database
const PORT = process.env.PORT || 3000;
const router = require("./routes")


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/", router)

const userRouter = require("./api/user")
const profileRouter = require("./api/profile")

app.use("/api/user", userRouter)
app.use("/api/profile", profileRouter)  // this is the same as app.use("/profile", profileRouter)

// connect to the database and server
db.once('open', () => {
    app.listen(PORT, () => console.log(`Server is listening port ${PORT}`))
})