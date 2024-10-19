const UserModel = require('../models/usermodels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { errorHandle } = require('../errorhandling/errorHandling');
const usermodels = require('../models/usermodels');
const nodemailer = require("nodemailer");
const cloudinary = require('cloudinary').v2;
require('dotenv').config()  

cloudinary.config({
    cloud_name: process.env.Cloudname,
    api_key: process.env.APIkey,
    api_secret: process.env.APIsecret
});


module.exports.CreaterUser = async (req, res) => {
    try {

        const data = req.body;
        const img = req.file;
       
       
        if (!data.password) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })
        
        if(img){
            const imgURL = await cloudinary.uploader.upload(img.path)
            req.body.profileImg = imgURL.secure_url;
        }
        const passwordBcrypt = await bcrypt.hash(data.password, 10)
        req.body.password = passwordBcrypt
        req.body.role = 'user'

        const CreateUserDataDB = await UserModel.create(data)
        return res.status(200).send({ status: true, msg: "Successfully Data Created", data: CreateUserDataDB })

    }
    catch (error) { return errorHandle(error, res) }
}


module.exports.LogInUser = async (req, res) => {
    try {

        const data = req.body;

        if (data.password == undefined) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })

        const checkemail = await UserModel.findOne({ email: data.email, role:'user' })
        if (!checkemail) return res.status(404).send({ status: false, msg: 'User not found pls SignUp first' })

        const CheckPass = await bcrypt.compare(data.password, checkemail.password)
        if (!CheckPass) return res.status(400).send({ status: false, msg: 'wrong Pasword pls Insert Correct Password' })

        const token = jwt.sign({
            UserId: checkemail._id,
            Author: "Priyanshu"
        },
            process.env.UserKey, { expiresIn: '12h' }
        )

        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: process.env.NodeMailerId,
                pass: process.env.Password
            }
        });
        let randomOtp = Math.floor(1000 + Math.random() * 9999);
        const info = await transporter.sendMail({
            from: '"Ravi Singh :ghost::blush::two_hearts::blush:" <your-email@gmail.com>',
            to: checkemail.email,
            subject: "Your Email OTP to Reset Password on MoviesAll",
            html: `
            <div style="background-color:#16253D;padding:20px;color:#fff;font-family:Arial, sans-serif;border-radius:10px;">
                <h2 style="color:#FF4500;">HACKERS</h2>
                <p>Hi ${checkemail.name},</p>
                <p>YO</p>
                <div style="background-color:#fff;color:#000;font-size:24px;font-weight:bold;text-align:center;padding:10px;margin:20px 0;border-radius:5px;">
                    ${randomOtp}
                </div>
                <p>The OTP is valid for 5 minutes.</p>
                <p>For account safety, do not share your OTP with others.</p>
                <br>
                <p>Regards,</p>
                <p>Team MoviesAll</p>
            </div>
            `,
        });
        return res.status(200).send({ status: true, msg: "Successfully LogIn", token: token, UserId: checkemail._id })
        
    }
    catch (error) { return errorHandle(error, res) }
}



module.exports.userUpadte = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body
        
        const getUser = await UserModel.findOneAndUpdate({ _id: id },
            {
                $set: { name: data.name,mobileNo:data.mobileNo }
            },
            { new: true }
        )
        return res.status(200).send({ status: true, msg: "Successfully Updated", data:getUser })
    
    }
    catch (error) { return errorHandle(error, res) }
}

module.exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        
        const getUser = await UserModel.findOneAndUpdate({ _id: id },
            {
                $set: { isDelete: true }
            },
            { new: true }
        )

      
        return res.status(200).send({ status: true, msg: "Successfully User Deleted", data:getUser })
    
    }
    catch (error) { return errorHandle(error, res) }
}



