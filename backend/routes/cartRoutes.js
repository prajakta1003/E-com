const express = require("express");
const{ addProductInCart, deleteCart, getAllProductsInCart} = require("../controller/cartController");

const router = express.Router();

router.post("/add-cart", addProductInCart)
router.delete("/delete/:cartId", deleteCart )
router.get("/getallproductincart",getAllProductsInCart)


module.exports = router;