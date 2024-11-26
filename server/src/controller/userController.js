const UserModel = require('../models/usermodels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { errorHandle } = require('../errorhandling/errorHandling');
const { OTPSender } = require('../Nodemailer/nodemailer.js')
const { ProfileImgURL } = require('../Cloudinary/ImageURL.js');
require('dotenv').config()


module.exports.CreaterUser = async (req, res) => {
    try {
        const data = req.body;
        const img = req.file;
        const { email, name, password } = data

        let randomOtp = Math.floor(1000 + Math.random() * 9000);

        const checkemail = await UserModel.findOneAndUpdate({ email: email }, { $set: { userOTP: randomOtp } },)

        if (checkemail) {
            if (checkemail.isVerify == 'false') {
                OTPSender(email, name, randomOtp)
                return res.status(200).send({ status: true, msg: 'OTP Send' })
            }
            else {
                return res.status(200).send({ status: true, msg: 'Pls LogIn' })
            }
        }

        if (img) {
            const imgURL = await ProfileImgURL(img.path)
            req.body.profileImg = imgURL;
        }
        const passwordBcrypt = await bcrypt.hash(password, 10)
        req.body.password = passwordBcrypt
        req.body.role = 'user'
        req.body.userOTP = randomOtp

        const CreateUserDataDB = await UserModel.create(data)
        OTPSender(email, name, randomOtp)
        return res.status(200).send({ status: true, msg: "Successfully Data Created and Send Otp", data: CreateUserDataDB })

    }
    catch (error) { return errorHandle(error, res) }
}


module.exports.LogInUser = async (req, res) => {
    try {

        const data = req.body;

        if (data.password == undefined) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })

        const checkemail = await UserModel.findOne({ email: data.email, role: 'user' })
        if (!checkemail) return res.status(404).send({ status: false, msg: 'User not found pls SignUp first' })

        const CheckPass = await bcrypt.compare(data.password, checkemail.password)
        if (!CheckPass) return res.status(400).send({ status: false, msg: 'wrong Pasword pls Insert Correct Password' })

        const id = checkemail._id.toString()
        const token = jwt.sign({ userId: id }, process.env.UserKey, { expiresIn: '12h' })

        return res.status(200).send({ status: true, msg: 'Created Successfully Created Token', UserId: id, token: token })

    }
    catch (error) { return errorHandle(error, res) }

}





module.exports.userUpadte = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body

        const getUser = await UserModel.findOneAndUpdate({ _id: id },
            {
                $set: { name: data.name, mobileNo: data.mobileNo }
            },
            { new: true }
        )
        return res.status(200).send({ status: true, msg: "Successfully Updated", data: getUser })

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


        return res.status(200).send({ status: true, msg: "Successfully User Deleted", data: getUser })

    }
    catch (error) { return errorHandle(error, res) }
}



