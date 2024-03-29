const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema= new Schema ({
  name : {
    type: String,
    required: true,
  },
  img : {
    type: String,
  },
  price: {
    type: Number,
    default : 0,
  },
  desc : {
    type: String,
  },
})

module.exports= mongoose.model("product", productSchema) 
