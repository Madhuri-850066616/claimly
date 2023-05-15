const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const User = require("../models/users_model")

const createError = (status, message)=>{
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}
const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"you are not authenticated"));
    }
    jwt.verify(token, process.env.JWT,(err,user)=>{
        if(err)return next(createError(403,"token is not valid!"));
        req.user = user;
        next();
    });
};


router.post('/log',async(req,res,next)=>{
    try{
        const user = await User.findOne({email_id:req.body.email_id})
        if(!user) 
        return next(createError(404,"not found"));
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect)
        return next(createError(401,"Wrong username or password"));
        const token =jwt.sign({id:user._id},process.env.jwt, {expiresIn:"600s"})
        res.cookie("access_token",token,{
            httpOnly:true, user
        }).status(200).send({user, token});
    }catch(err){
        next(err)
    }
})

module.exports = router

router.get('/authentication',verifyToken, async(err,res,req)=>{
   
    res.status(200).send("hello user, you are logged in")
})