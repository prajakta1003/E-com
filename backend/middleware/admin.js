module.exports= async(req,res,next)=> {
    if(req.user.type==="admin"){
        next();
    }else{
        return res.status(400).json({error: "authorization failed"})
    }
}

