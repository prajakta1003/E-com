const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const OrderSchema = new Schema({
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart"
    },
    deliveryDate:{
        type: String,
    }
})

module.exports = mongoose.model("Order", OrderSchema)