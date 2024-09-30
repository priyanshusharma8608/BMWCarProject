// const express = require('express')
// const {CreateUser} =require('../controller/userController')

// const router = express.Router()

// router.get('/test',CreateUser)

// router.all('/*',(re,res)=>{
//     return res.status(400).send({status:false,msg:'url Invalid'})
// })


// module.exports = router 

const express = require('express');
const { CreaterUser } = require('../controller/UserController.js')
const router = express.Router()
router.post('/CreaterUser', CreaterUser)
module.exports = router;