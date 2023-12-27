const express = require("express");
const { addProduct, deleteProduct, getAllProducts } = require("../controller/productController");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.post("/add-product",auth,admin, addProduct)
router.delete("/delete/:productId", deleteProduct)
router.get("/getallproduct", getAllProducts)




module.exports = router;