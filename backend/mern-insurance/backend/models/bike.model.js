const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true,
        minlength: 3},
    nominee_name: {type:String, required:true },
    holder_id: {type:String, required: true, unique:true},
    policy_id: {type:String, required: true},
    vehicle_no: {type:String, required: true,unique:true},
    license_no: {type:String, required: true,unique:true},
    chassis_no: {type:String, required: true,unique:true},
    bank: {type:String, required: true},
    bill_amount:{type:Number,required:true},
    type_of_insurance:{Type:String,required:true}
},{
    timestamps: true,
});

const Bike = mongoose.model('Bike',bikeSchema);
mongoose.model.exports = Bike;