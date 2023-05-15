const mongoose= require('mongoose');
const newUser=new mongoose.Schema(
    {
        username:{type:String,require:true},
        password:{type:String},
        dob:{type:Date},
        email_id:{type:String},
    phone_number:{type:Number},
    }
);
module.exports=mongoose.model('newUser',newUser)