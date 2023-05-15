const router = require('express').Router()
const Setup = require('../models/medical_model')

router.post('/medi',async(req,res)=>{
    const newUser = new Setup({
        username:req.body.username,
        patient_name:req.body.patient_name,
        holder_id:req.body.holder_id,
        policy_id:req.body.policy_id,
        bank:req.body.bank,
        opd_id:req.body.opd_id,
        hospital_name:req.body.hospital_name,
        doj:req.body.doj,
        doctor_name:req.body.doctor_name,
        ailment:req.body.ailment,
        bill_amount:req.body.bill_amount,
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

router.get('/medi',async(req,res)=>{
    const docs=await req.find({})
    res.json(docs)
})
module.exports = router