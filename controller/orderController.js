const Order = require("../models/orderModel")
const  placeOrder = async(req,res) => {
    const { address, phone, cartId, deliveryDate} = req.body;
    try{
        const order1 =await Order.create({ address, phone, cartId, deliveryDate });
        res.status(200).json({ order1 });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};



module.exports = { placeOrder }