const UserModel = require('../models/usermodels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { errorHandle } = require('../errorhandling/errorHandling')
require('dotenv').config()


module.exports.CreaterUser = async (req, res) => {
    try {

        const data = req.body;

        
        if (data.password==undefined) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })
        if (data.role=='admin' || data.role=='shopkeeper') return res.status(400).send({ status: false, msg: 'Invalid Role' })

        const passwordBcrypt = await bcrypt.hash(data.password, 10 )
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

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: 'Pls Provided Body Data' })

        const { email, password } = data;

        if (!email) return res.status(400).send({ status: false, msg: 'Pls Provided email' })
        if (!Validemail(email)) return res.status(400).send({ status: false, msg: 'Invalid Email Provided Valid Email' })

        if (!password) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })
        if (!Validpassword(password)) return res.status(400).send({ status: false, msg: 'Invalid password Provided one Upper Case, Symbol, Number and LowerCase, min Length is 8' })

        const checkemail = await UserModel.findOne({ email: email })
        if (!checkemail) return res.status(404).send({ status: false, msg: 'User not found pls SignUp first' })

        const CheckPass = await bcrypt.compare(password, checkemail.password)
        if (!CheckPass) return res.status(400).send({ status: false, msg: 'wrong Pasword pls Insert Correct Password' })

        const token = jwt.sign({
            UserId: checkemail._id,
            Author: "Priyanshu"
        },
            process.env.UserKey, { expiresIn: '12h' }
        )

        return res.status(200).send({ status: true, msg: "Successfully LogIn", token: token, UserId: checkemail._id })

    }
    catch (error) { return res.status(500).send({ status: false, msg: error.message }) }
}









