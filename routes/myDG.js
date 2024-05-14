const express = require("express");
const router = express.Router();

const myDGCtrl = require("../controllers/myDG");
const middleware = require("../middleware");

router.get("/", middleware.stripToken, middleware.verifyToken, myDGCtrl.index);
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  myDGCtrl.create
);
router.get(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  myDGCtrl.show
);
router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  myDGCtrl.delete
);
router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  myDGCtrl.update
);

module.exports = router;
