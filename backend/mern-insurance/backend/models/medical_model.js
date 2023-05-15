const mongoose = require('mongoose');
const medSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
    },
    patient_name:{type:String,required:true},
    holder_id:{type:String,required:true, unique:true},
    policy_id:{type:String,required:true},
    bank:{type:String,required:true},
    opd_id:{type:String,required:true, unique:true},
    hospital_name:{type:String,required:true},
    doj:{type:Date,required:true},
    doctor_name:{type:String,required:true},
    ailment:{type:String,required:true, minlength:15},
    bill_amount:{type:String,required:true},
    aadhar_no:{type:String,required:true},
    type_of_insurance:{type:String,required:true}
});
module.exports = mongoose.model('Med',medSchema)

