const router = require('express').Router();
const User = require("../models/users_model");
const bcrypt = require('bcryptjs')

const createError = (status, message)=>{
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}

router.post('/forgotpasswords', async (req, res, next) => {
    try {
        const user = await User.findOne({ otp: req.body.otp });
        if (!user) {
            return next(createError(401, "Wrong OTP"));
        }

        const userId = user._id; 

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const updatedUser = await User.findByIdAndUpdate(userId, {
            password: hashedPassword
        }, { new: true }); 

        res.status(201).json(updatedUser);
    } catch (err) {
        next(err);
    }
});

module.exports = router;