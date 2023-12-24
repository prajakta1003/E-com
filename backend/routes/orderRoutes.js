const express= require("express");
const {placeOrder}= require("../controller/orderController");

const router= express.Router();

router.post("/orderplace", placeOrder)

module.exports = router;