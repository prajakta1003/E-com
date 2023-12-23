const jwt= require("jsonwebtoken");
const createToken = (_id) => {
    return jwt.sign({_id},process.env.JWTSECRET,{expiresIn:"3d"})
}
const verifyToken= (token) => {
   try {
    const userId = jwt.verify(token,process.env.JWTSECRET)
    return userId
   } catch (error) {
    return error;
   }
}
module.exports= {createToken, verifyToken}

