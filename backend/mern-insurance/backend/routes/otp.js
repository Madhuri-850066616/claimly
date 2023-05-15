const router = require('express').Router()
const User = require('../models/users_model')
const Mailgen = require('mailgen');
const nodemailer = require('nodemailer');
// const { EMAIL, PASSWORD } = require('./env.js')

const createError = (status, message)=>{
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}

router.post('/otps', async(req, res, next) => {
    const user = await User.findOne({ email_id: req.body.email_id })
    if (!user) return next(createError(404, "not found"));

    let config = {
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Mailgen",
            link: 'https://mailgen.js/'
        }
    })

    const otp1 = `${Math.floor(100+ Math.random() * 9000)}`;
    let response = {
        body: {
            name: "OTP Verification from Claimly",
            intro: " Your forgot password requested from Claimly is successful and your otp is " + otp1,
            outro: " Kindly enter your 4 digit otp on the website, if not requested reach Claimy support."
        }
    }

    let mail = MailGenerator.generate(response)
    let message = {
        from: EMAIL,
        to: user.email_id,
        subject: "OTP verification",
        html: mail
    }

    transporter.sendMail(message)
    .then(() => {
        // Update the user document with the generated otp1 value
        user.otp = otp1;
        return user.save();
    })
        .then(() => {
            return res.status(201).json({
                msg: "you should receive an email",
            })
        })
        .catch(error => {
            return res.status(500).json({ error })
        })
})

module.exports = router