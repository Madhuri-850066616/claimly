const mongoose = require('mongoose');


const admin_permissionSchema = new mongoose.Schema({
    username:{type:String, required:true},
    policy_id:{type:String, required:true},
    type_of_insurance:{type:String, required:true}
},{
    timestamps: true,
});

const Adminpermit = mongoose.model('Adminpermit',admin_permissionSchema);
mongoose.model.exports = Adminpermit;