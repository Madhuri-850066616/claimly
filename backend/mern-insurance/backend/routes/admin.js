const router = require('express').Router()
const Admin = require('../models/admin_model')


router.post('/adm',async(req,res)=>{
    try{
    const{name,email,avatar}=req.body;
    const adminExists=await Admin.findOne({email});

    if(adminExists) return res.status(200).json(adminExists) 

    const newAdmin = new Admin({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        allclaims:req.body.allclaims,
        avatar:req.body.avatar
        
    })
 
       const savedAdmin = await newAdmin.save()
        res.status(202).json(savedAdmin)

    }catch(err){ 
        console.log(err)
    }
})

router.get('/adm',async(req,res)=>{
    const docs=await Admin.find({})
    res.json(docs)
});
module.exports = router