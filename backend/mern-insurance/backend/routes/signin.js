const router = require('express').Router()
const Setup = require('../models/signin_model')


router.post('/reg',async(req,res)=>{
    const newUser = new Setup({
        username:req.body.username,
        dob:req.body.dob,
        email_id:req.body.email_id,
        phone_no:req.body.phone_no,
        password:req.body.password
    })
    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(err){
        console.log(err)
    }
})




module.exports = router