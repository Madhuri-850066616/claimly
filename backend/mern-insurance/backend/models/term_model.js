const mongoose = require('mongoose');

const termSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    nominee_name:{type:String,require:true},
    holder_id:{type:String,required:true},
    policy_id:{type:String,required:true},
    dob:{type:Date,required:true},
    bank:{type:String,required:true},
    aadhar_no:{type:Number,required:true,unique:true},
    type_of_insurance:{type:String,required:true}

});
module.exports = mongoose.model('Term',termSchema)