const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default: ''
    },
    gender:{
        type: String,
        enum: ["Male", "Female", "Others"],
        required: true
    },
},{timestamps: true});


module.exports = mongoose.model('User', userSchema);