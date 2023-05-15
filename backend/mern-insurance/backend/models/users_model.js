const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{type:String,},
    password:{type:String},
    dob:{type:Date},
    email_id:{type:String},
    phone_no:{type:Number},
    allclaims:[{type:mongoose.Schema.Types.ObjectId,ref:'Claims'}]
    
});
module.exports = mongoose.model('User',userSchema)