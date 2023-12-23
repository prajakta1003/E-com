const express = require("express");
const { addProduct, deleteProduct } = require("../controller/productController");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.post("/add-product",auth,admin, addProduct)
router.delete("/delete/:productId", deleteProduct)




module.exports = router;