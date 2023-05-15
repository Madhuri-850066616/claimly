const router = require('express').Router()
const { default: mongoose } = require('mongoose')
const Claim = require('../models/claims_model.js')
const Admin=require('../models/admin_model')
const User=require('../models/users_model')
const dotenv= require('dotenv');
const cloudinary = require('cloudinary').v2;
//  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});


router.post('/claim',async(req,res)=>{
    try{ 
   
   
//    const user_details= await User.findOne({_id:id})
//    if (!user_details) {
//     return res.status(404).json({ error: 'User not found' });
//   }
  const claim =  new Claim({
    //change to user
    user_id:req.body.user_id,
    insurance_type:req.body.insurance_type,
    policy_number:req.body.policy_number,
    policy_type:req.body.policy_type,
    uni:req.body.uin,
    nominee_name:req.body.nominee_name,
    nominee_relation:req.body.nominee_relation,
    account_number:req.body.account_number,
    bank_name:req.body.bank_name,
    bank_branch:req.body.bank_branch,
    ifsc_code:req.body.ifsc_code,
    aadhar_number:req.body.aadhar_number,
    cause_of_death:req.body.cause_of_death,
    dod:req.body.dod,
    fir_number:req.body.fir_number,
    vehicle_damage:req.body.vehicle_damage,
    chassis_number:req.body.chassis_number,
    vehicle_number:req.body.vehicle_damage,
    opd_number:req.body.opd_number,
    hospital_name:req.body.hospital_name,
    doa:req.body.doa,
    doctor_name:req.body.doctor_name,
    department_name:req.body.department_name,
    UHI_ID:req.body.UHI_ID,
    claim_amount:req.body.claim_amount,
    Comments:req.body.Comments,
    status:req.body.status
   

})



const user = await User.findById(
    req.body.user_id   
  );
  if(!user) {
      res.status(400).json("No such user")
  }
  user.allclaims = claim._id
  
//   console.log(user,"user ")
        // user_details.push(claim._id)
        await user.save();
        const saveduser = await claim.save()
        res.status(201).json(saveduser)
    }catch(err){
        console.log(err)
    }
})

router.get('/claim',async(req,res)=>{
const docs=await Claim.find({})
  res.json(docs)
});

router.get('/claim/:id',async(req,res)=>{
const {id}=req.params;
const claimexists=await Claim.findOne({_id:id})
  if(claimexists){ res.status(200).json(claimexists)}
  else{
  res.status(404).json({message:"Claim not Found"})
  }
  });

  router.put('/claim/adm/:id',async(req,res)=>{
try{
console.log("backend",req.body)
const updated=await Claim.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
if(updated){res.status(200).json({message:"Claims updated Successfully"})
}
}
catch(error){
res.status(500).json({message:error.message})
}
});

 router.get('/claim/user/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const claims = await Claim.find({ user_id: user_id });
    if (claims) {
      res.status(200).json(claims);
    } else {
      res.status(404).json({ message: "Claims not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  

// router.put("/:id",async(req,res)=>{

//     const uploadImage = async (file) => {
//         return new Promise((resolve, reject) => {
//           cloudinary.uploader.upload(file, (error, result) => {
//             if (error) {
//               reject(error);
//             } else {
//               resolve(result.secure_url);
//             }
//           });
//         });
//       };

//       const photoURL =  await uploadImage(claims_proof.url);
//       const photoURL2 =  await uploadImage(aadhar_proof.url);

//       console.log("test6",photoURL)
//       console.log("test6",photoURL2)
    
//       try { const updateUser = await Claim.findByIdAndUpdate( req.params.id, 
//         { $set: { ...req.body, claims_proof: photoURL, aadhar_proof: photoURL2 } }, { new: true } ); res.status(200).json(updateUser); } 
//       catch (err) { res.status(500).json(err); }});



      router.put("/image/:id", async (req, res) => {
         
         console.log(req.body.claims_proof)

          const uploadImage = async (file) => {
            return new Promise((resolve, reject) => {
              cloudinary.uploader.upload(file, (error, result) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(result.secure_url);
                }
              });
            });
          };
        
         const photoURL = await uploadImage(req.body.claims_proof.url);
         const photoURL2 = await uploadImage(req.body.aadhar_proof.url);
        
         console.log("test6", photoURL);
      console.log("test6", photoURL2);
        
        
        
        
         try {
         const updateUser = await Claim.findByIdAndUpdate(
         req.params.id,
         {
         $set: {
         ...req.body,
         claims_proof: photoURL2,
         aadhar_proof: photoURL
         }
         },
         { new: true }
         );
         res.status(200).json(updateUser);
         } catch (err) {
         res.status(500).json(err);
         }
        });

        router.put("/:id",async(req,res)=>{
    
            try{
                const updateUser = await Claim.findByIdAndUpdate(
                    req.params.id,
                    {$set:req.body },
                    {new:true}
                );
                res.status(200).json(updateUser);
            }
            catch (err){
                res.status(500).json(err)
            }});

            router.get('/count', async (req, res) => {

              try {
              
              const count = await Claim.countDocuments();
              
              res.json(count);
              
              } catch (error) {
              
              res.status(500).json({ error: 'Failed to count documents' });
              
              }
              
              });
              
              
              
              
              router.get('/unique', async (req, res) => {
              
             
              
               
              
              try {
              
              const uniqueValues = await Claims.distinct('bank_name');
              
              const count=uniqueValues.length
              
              res.json(count );
              
              } catch (error) {
              
              res.status(500).json({ error: 'Failed to retrieve unique values' });
              
              }
              
              });
              
              
              
              
              router.get('/total', async (req, res) => {
              
              try {
              
              const result = await Claim.aggregate([
              
              {
              
              $group: {
              
              _id: null,
              
              total: { $sum:'$claim_amount' }
              
              }
              
              }
              
              ]);
              
               
              
              const total = result.length > 0 ? result[0].total : 0;
              
              
              
              
              res.json(total );
              
              } catch (error) {
              
              res.status(500).json({ error: 'Failed to calculate total' });
              
              }
              
              });
              
              
              
              
              router.get('/claim-amount-by-month', async (req, res) => {
              
              try {
              
              const currentYear = new Date().getFullYear();
              
               
              
              const result = await Claim.aggregate([
              
              {
              
              $match: {
              
              createdAt: { $gte: new Date(`${currentYear}-01-01`), $lt: new Date(`${currentYear + 1}-01-01`) }
              
              }
              
              },
              
              {
              
              $group: {
              
              _id: { $month: "$createdAt" },
              
              totalAmount: { $sum: "$claim_amount" }
              
              }
              
              },
              
              {
              
              $group: {
              
              _id: null,
              
              months: { $push: "$_id" },
              
              amounts: { $push: "$totalAmount" }
              
              }
              
              },
              
              {
              
              $project: {
              
              _id: 0,
              
              months: {
              
              $map: {
              
              input: Array.from({ length: 12 }, (_, i) => i + 1),
              
              as: "month",
              
              in: {
              
              $let: {
              
              vars: {
              
              index: { $indexOfArray: ["$months", "$$month"] }
              
              },
              
              in: {
              
              $cond: [
              
              { $eq: ["$$index", -1] },
              
              0,
              
              { $arrayElemAt: ["$amounts", "$$index"] }
              
              ]
              
              }
              
              }
              
              }
              
              }
              
              }
              
              }
              
              }
              
              ]);
              
               
              
              const claimAmountByMonth = result.length > 0 ? result[0].months : Array.from({ length: 12 }, () => 0);
              
              res.json(claimAmountByMonth);
              
              } catch (error) {
              
              res.status(500).json({ error: 'Failed to retrieve claim amount by month' });
              
              }
              
              });
              
              
              
              
              
              router.get('/calculatePercentage', async (req, res) => {
              
              try {
              
              const pipeline = [
              
              {
              
              $group: {
              
              _id: '$bank_name',
              
              count: { $sum: 1 },
              
              },
              
              },
              
              {
              
              $group: {
              
              _id: null,
              
              total: { $sum: '$count' },
              
              banks: { $push: { bank_name: '$_id', count: '$count' } },
              
              },
              
              },
              
              {
              
              $unwind: '$banks',
              
              },
              
              {
              
              $project: {
              
              _id: 0,
              
              bank_name: '$banks.bank_name',
              
              percentage: { $multiply: [{ $divide: ['$banks.count', '$total'] }, 100] },
              
              },
              
              },
              
              {
              
              $sort: { percentage: -1 },
              
              },
              
              {
              
              $limit: 5,
              
              },
              {
              $project: {
              bank_name: 1,             
              percentage: { $round: ['$percentage', 4] },              
              },              
              },             
              ];
              const result = await Claim.aggregate(pipeline);
              res.json(result);
              } catch (error) {
              res.status(500).json({ error: 'An error occurred' });
              }
              });
            
             

           

module.exports=router