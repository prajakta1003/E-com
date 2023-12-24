const { createToken } = require("../helper/jwtToken");
const User = require("../models/userModel");
const signup = async(req,res) => {
    const { email, password, name,type} = req.body;
    try{
        const exist = await User.findOne({email});
        if(exist){
            return res.status(400).json({error : "User already exist"});
        }
        const user = await User.create({email, password, name,type })
        const token= createToken(user._id)
        res.status(200).json({email:user.email,token});
    } catch(error){
        res.status(400).json({error : error});
    }
};



const login = async(req,res) => {
    const { email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error : "User not found"});
        }
        if (user.password === password){
            const token= createToken(user._id)
            return res.status(200).json({ email:user.email,token })
        }
        res.status(400).json({ error: "Password not matched"})
    } catch(error){
        res.status(400).json({error : error});
    }
};


module.exports = { signup, login }