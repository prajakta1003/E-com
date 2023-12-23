const mongoose= require("mongoose")
const Schema= mongoose.Schema;

const userSchema = new Schema({
    email: {
        type : String,
        required : true,
        unique : true,
    },
    password: {
        type : String,
        required : true,
    },
    name: {
        type : String,
        required : true,
    },
    type: {
        type : String,
        required: true,
        default: "user",
    }
    
})

module.exports= mongoose.model("User", userSchema)