const router = require('express').Router()
const User = require('../models/users_model.js')


//  router.get('/:user',async(req,res)=>{

// const {user}=req.params;
// const userData=await Claims.findOne({_id:user})
// res.json(userData)
// }

router.get("/:user", (req, res) => {
    const userId = req.params.user;

    User.findById(userId)
    .then((userData) => {
      if (!userData) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(userData);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    });
  });
 

module.exports=router