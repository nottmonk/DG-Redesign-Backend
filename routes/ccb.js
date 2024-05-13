const express = require("express");
const router = express.Router();
const ccbCtrl = require("../controllers/ccb");

router.get("/", ccbCtrl.index);
