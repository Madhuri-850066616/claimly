const router = require('express').Router()
const newUser = require('../models/users_model.js')
const bcrypt = require('bcryptjs')

router.post('/user',async(req,res)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
        const newuser = new newUser({
        username:req.body.name,
        password:hash,
        dob:req.body.dob,
        email_id:req.body.email_id,
        phone_no:req.body.phone_no,
        
    })
    try{
        const saveduser = await newuser.save()
        res.status(201).json(saveduser)
    }catch(err){
        console.log(err)
    }
})


router.get('/user',async(req,res)=>{
    const docs=await newUser.find({});
    res.json(docs)
})


router.get('/:id', async(req,res)=>{
    try{
        
    const user=await newUser.findOne({_id:req.params.id});
    if(user)
    {
        res.status(200).json(user);
    }
    else
    {
        res.status(400).json({message:"user not found"});

    }
}catch(error){
    res.status(500).json({message:error})

}
})

router.get('/users/count', async (req, res) => {

    try {
    
   const count = await newUser.countDocuments();
    
    res.json(count);
    
    } catch (error) {
    
   res.status(500).json({ error: 'Failed to count documents' });
    
    }
    
   });

module.exports=router