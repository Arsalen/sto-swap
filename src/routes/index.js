const express = require("express");
const router = express.Router();

require('dotenv').config({path: '.env'});

const MAGIC_PUBLISHABLE_KEY = process.env.MAGIC_PUBLISHABLE_KEY;

// GET home page
router.get("/", (req, res) => {
  res.render("index", { title: "Home 💎", MAGIC_PUBLISHABLE_KEY });
});

// GET DAI page
router.get("/dai/", (req, res) => {
  res.render("dai", { title: "DAI", MAGIC_PUBLISHABLE_KEY });
});

// GET USDC page
router.get("/usdc/", (req, res) => {
    res.render("usdc", { title: "USDC", MAGIC_PUBLISHABLE_KEY });
});

// GET USDT page
router.get("/usdt/", (req, res) => {
    res.render("usdt", { title: "USDT", MAGIC_PUBLISHABLE_KEY });
});

module.exports = router;
