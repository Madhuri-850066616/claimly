const mongoose = require('mongoose');


const claimsSchema = new mongoose.Schema({
    admin_id:{type:mongoose.Schema.Types.ObjectId, ref:'Admin'},
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    insurance_type:{type:String},
    policy_number:{type:String},
    policy_type:{type:String},
    uin:{type:String},
    nominee_name:{type:String},
    nominee_relation:{type:String},
    account_number:{type:String},
    bank_name:{type:String},
    bank_branch:{type:String},
    ifsc_code:{type:String},
    aadhar_number:{type:Number},
    cause_of_death:{type:String},
    dod:{type:Date},
    fir_no:{type:String},
    vehicle_damage:{type:String},
    chassis_number:{type:String},
    vehicle_number:{type:String},
    opd_number:{type:String},
    hospital_name:{type:String},
    doa:{type:Date},
    doctor_name:{type:String},
    claim_amount:{type:Number},

    Comments:{type:String ,default:"No comments yet"},
    status:{type:String,
    enum:["Initiated","Verification-Completed","Rejected"],
    default:"Initiated"},
    // aadhar_proof:{type:mongoose.Schema.Types.ObjectId, ref:'documents'},
    // claim_proof:{type:mongoose.Schema.Types.ObjectId, ref:'documents'}
    aadhar_proof:{type:String},
    claims_proof:{type:String},
   


}, { timestamps: true });

module.exports = mongoose.model('Claims',claimsSchema)