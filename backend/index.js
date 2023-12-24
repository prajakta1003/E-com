require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
const cartRoute = require("./routes/cartRoutes");
const productRoute = require("./routes/productRoutes");
const orderRoute = require("./routes/orderRoutes");


const app = express();

///middleware

app.use(express.json())
app.use(cors())

app.use("/user", userRoute)
app.use("/cart", cartRoute)
app.use("/product", productRoute)
app.use("/order", orderRoute)


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(4000, () =>{
        console.log("Server Listning");
    })
}).catch((error) => {
    console.log(error)
})
