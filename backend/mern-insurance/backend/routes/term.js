const router = require('express').Router()
const Setup = require('../models/term_model')

router.post('/termlife',async(req,res)=>{
    const newUser = new Setup({
        username:req.body.username,
        nominee_name:req.body.nominee_name,
        holder_id:req.body.holder_id,
        policy_id:req.body.policy_id,
        dob:req.body.dob,
        bank:req.body.bank,
        aadhar_no:req.body.aadhar_no,
        type_of_insurance:req.body.type_of_insurance
    })
    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(err){
        console.log(err)
    }
})
module.exports = router