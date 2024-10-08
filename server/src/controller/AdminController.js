const UserModel = require('../models/usermodels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { errorHandle } = require('../errorhandling/errorHandling')
require('dotenv').config()




module.exports.CreaterAdmin = async (req, res) => {
    try {

        const data = req.body;

        
        if (data.password==undefined) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })
        if (data.role=='user' || data.role=='shopkeeper') return res.status(400).send({ status: false, msg: 'Invalid Role' })

        const passwordBcrypt = await bcrypt.hash(data.password, 10 )
        req.body.password = passwordBcrypt
        req.body.role = 'admin'

        const CreateUserDataDB = await UserModel.create(data)
        return res.status(200).send({ status: true, msg: "Successfully Data Created", data: CreateUserDataDB })

    }
    catch (error) { return errorHandle(error, res) }
}

module.exports.getAllUserData = async (req, res) => {
    try {

        const getData = await UserModel.find({isDelete:false})
        return res.status(200).send({ status: true, msg: "Successfully Get All User Data", data: getData })
    }
    catch (error) { return res.status(500).send({ status: false, msg: error.message }) }
}