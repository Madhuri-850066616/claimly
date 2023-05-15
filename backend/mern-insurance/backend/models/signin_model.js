const mongoose=require('mongoose');
const registerSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    dob:{type:Date,required:true},
    email_id:{type:String,required:true,unique:true},
    phone_no:{type:Number,required:true,unique:true},
    password:{type:String,required:true}
});

module.exports = mongoose.model('Register', registerSchema)
