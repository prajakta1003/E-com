const express = require("express");
const{ addProductInCart, deleteCart} = require("../controller/cartController");

const router = express.Router();

router.post("/add-cart", addProductInCart)
router.delete("/delete/:cartId", deleteCart )


module.exports = router;