const express = require('express')
const {CreaterUser} =require('../controller/userController')

const router = express.Router()

router.post('/CreaterUser',CreaterUser)

router.all('/*',(re,res)=>{
    return res.status(404).send({status:false,msg:'url Invalid'})
})


module.exports = router 

