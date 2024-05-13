const express = require("express");
const router = express.Router();

const productsCtrl = require("../controllers/products");

router.get("/", productsCtrl.index);
router.post("/products", productsCtrl.create);
router.get("/:id", productsCtrl.show);
router.delete("/:id", productsCtrl.delete);
router.put("/:id", productsCtrl.update);

module.exports = router;
