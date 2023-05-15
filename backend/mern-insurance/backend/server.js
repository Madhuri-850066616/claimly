const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser')

require('dotenv').config();

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
const port = process.env.port || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())

mongoose.connect(process.env.ATLAS_URL)
.then(()=> {
    console.log("MongoDB database connection established successfully");
})
.catch((err) => console.log(err))

const signinRouter = require('./routes/signin');


const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const loginRouter = require('./routes/login');
const claimsRouter = require('./routes/claims');
const forgotpasswordRouter=require('./routes/forgotpassword')
const otpRouter=require('./routes/otp')
app.use('/signin',signinRouter);
app.use('/claims',claimsRouter);


app.use('/users',usersRouter);
app.use('/admin',adminRouter);
app.use('/login',loginRouter);
app.use('/forgotpassword',forgotpasswordRouter)
app.use('/otp',otpRouter)
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});