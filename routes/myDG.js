const express = require("express");
const router = express.Router();

const myDGCtrl = require("../controllers/myDG");

router.get("/", myDGCtrl.index);
router.post("/myDG", myDGCtrl.create);
router.get("/:id", myDGCtrl.show);
router.delete("/:id", myDGCtrl.delete);
router.put("/:id", myDGCtrl.update);

module.exports = router;
