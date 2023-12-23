const { verifyToken } = require("../helper/jwtToken");
const User= require("../models/userModel")


module.exports = async(req,res,next)=> {
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(400).json({error: "authorization token required"})
    }
    const token = authorization.split(" ")[1];
    console.log(token);
    if(!token){
        return res.status(400).json({error: "authorization token required"})
    }
    let userId 
    try {
        userId= await verifyToken(token)
    } catch (error) {
        return res.status(400).json({error: "authorization token required"})
    }

    try {
        const user= await User.findById(userId)
        if(user){
            req.user=user;
        }else{
            return res.status(400).json({error: "authorization failed"})
        }
        next()
    } catch (error) {
        return res.status(400).json({error: "authorization failed"})
    }
}