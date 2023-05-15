const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name: {type:String},
    email:{type:String},
    password:{type:String},
    phoneNumber:{type:String},
    avatar:{type:String},
    allclaims:[{type:mongoose.Schema.Types.ObjectId,ref:'Claims'}]


    

});    
module.exports = mongoose.model('Admin',adminSchema)