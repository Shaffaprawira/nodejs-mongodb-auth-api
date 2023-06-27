const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.post("/", auth, (req, res) => {
    const portfolioUrl = "https://www.canva.com/design/DAFmxtiDmBY/0WXYETgGylcxroh6CATU9Q/view?website#2";
    res.status(200).send(`Welcome! Check out my portfolio: ${portfolioUrl}`);
});

module.exports = router;
