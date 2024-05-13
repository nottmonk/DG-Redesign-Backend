const express = require("express");
const router = express.Router();

const weeklyAdsCtrl = require("../controllers/weeklyAds");

router.get("/", weeklyAdsCtrl.index);

module.exports = router;
