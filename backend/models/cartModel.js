const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    product: {
        type: String,
    },
    quantity: {
        type: String,
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    price : {
        type: String,
    }
})

module.exports = mongoose.model("cart", CartItemSchema)