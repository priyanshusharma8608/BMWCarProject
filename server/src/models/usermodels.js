const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profileImg: { type: String, required: false, trim: true },
    name: { type: String, required: true, trim: true },
    mobileNo: { type: Number, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    userOTP: { type: String, required: true, trim: true },
    role: { type: String, enum: ['user', 'admin', 'shopkeeper'], required: true, trim: true },
    isDelete: { type: String, default: false },
    isVerify: { type: String, default: false },
},
    { timestamps: true }
)
module.exports = mongoose.model('users', userSchema);

