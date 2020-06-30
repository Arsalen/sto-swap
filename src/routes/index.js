const express = require("express");
const router = express.Router();

require('dotenv').config({path: '.env'});

const MAGIC_PUBLISHABLE_KEY = process.env.MAGIC_PUBLISHABLE_KEY;

router.get("/", (req, res) => {
  res.render("index", { title: "Home 💎", MAGIC_PUBLISHABLE_KEY });
});

module.exports = router;
