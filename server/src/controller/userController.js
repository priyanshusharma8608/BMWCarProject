const UserModel = require('../models/usermodels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { errorHandle } = require('../errorhandling/errorHandling');
const usermodels = require('../models/usermodels');
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
        const imgURL = await cloudinary.uploader.upload(img.path)
       
        if (data.password == undefined) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })
        if (data.role == 'admin' || data.role == 'shopkeeper') return res.status(400).send({ status: false, msg: 'Invalid Role' })

        const passwordBcrypt = await bcrypt.hash(data.password, 10)
        req.body.password = passwordBcrypt
        req.body.profileImg = imgURL.secure_url;
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



