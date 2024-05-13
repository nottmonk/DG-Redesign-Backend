const express = require("express");
const router = express.Router();

const dollarGeneralCtrl = require("../controllers/dollarGeneral");

router.get("/", dollarGeneralCtrl.index);
router.post("/", dollarGeneralCtrl.create);

module.exports = router;
