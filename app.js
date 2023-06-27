require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const app = express();
console.log('app is fine');
app.use(express.json());

// Import routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const landingController = require("./controllers/landing");

// Routes
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/landing", landingController);
app.get('/', (req, res) => {
    res.send('app is fine');
})

module.exports = app;