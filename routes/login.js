const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

router.post("/", async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    // Validate if user exists in the database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // Save user token
      user.token = token;

      // Return user
      return res.status(200).json(user);
    }

    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
