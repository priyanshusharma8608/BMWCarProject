const mongoose = require('mongoose');
const { ValidName, Validemail, Validpassword } = require('../validation/Validation')

const userSchema = new mongoose.Schema({
    profileImg: { type: String, required: false, trim: true },
    name: {
        type: String, required: [true, "Please Provide the Name"],
        validate: [ValidName, "Please Provided Valid Name"], trim: true
    },
    email: {
        type: String, required: [true, "Please Provide the Email-Id"],
        validate: [Validemail, "Please Provided Valid Email-Id"], unique: true, trim: true
    },
    password: {
        type: String, required: [true, "PleaseProvide the Password"],
        validate: [Validpassword, "Please Provided Valid Password"], trim: true
    },
    role: { type: String, enum: ['user', 'admin', 'shopkeeper'],required:true, trim: true },
    isDelete: { type: String, default: false },
    isVerify: { type: String, default: false },
},
    { timestamps: true }
)
module.exports = mongoose.model('users', userSchema);

