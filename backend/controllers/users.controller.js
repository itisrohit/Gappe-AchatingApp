const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createUser = async (req, res) => {
    try{
        const {fullName, userName, password, confirmPassword, gender} = req.body;
        if(!fullName || !userName || !password || !confirmPassword || !gender){
            return res.status(400).json({msg: "Please fill in all fields."});
        }
        if(password.length < 6){
            return res.status(400).json({msg: "Password must be at least 6 characters long."});
        }
        if(password !== confirmPassword){
            return res.status(400).json({msg: "Password and confirm password must match."});
        }

        const user = await User.findOne({userName});
        if(user){
            return res.status(400).json({msg: "Username already exists."});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const profilePicture = {
            "male": `https:/avatar.iran.liara.run/public/boy?username=${userName}`,
            "female": `https://avatar.iran.liara.run/public/girl?username=${userName}`,
            "others": ""
        }
        await User.create({
            fullName,
            userName,
            password: hashedPassword,
            profilePicture: gender === "Male" ? profilePicture.male : gender === "Female"? profilePicture.female : profilePicture.others,
            gender
        });
        return res.status(201).json({msg: "Account created successfully.", success: true});
    }catch(err){
        console.log("The issue is: ",err);
    }
};

const loginUser = async (req, res) => {
    try{
        const {userName, password} = req.body;
        if(!userName || !password){
            return res.status(400).json({msg: "Please fill in all fields."});
        };
        const user = await User.findOne({userName});
        if(!user){
            return res.status(400).json({msg: "Username or Passowrd is Wrong.", success: false});
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({msg: "Username or Password is Wrong.", success: false});
        }
        const tokedata = {
            userId: user._id,
        };
        const token = jwt.sign(tokedata, process.env.JWT_SECRET, {expiresIn: "3d"});
        return res.status(200).cookie("token", token, {maxAge : 3*24*60*60*1000, httpOnly: true, sameSite: 'strict'})
        .json({msg: "Login Successful.", success: true,
            user: {
                _id: user._id,
                fullName: user.fullName,
                userName: user.userName,
                profilePicture: user.profilePicture
            }
        });


    }catch(err){
        console.log("The issue is: ",err);
        return res.status(500).json({msg: "Internal Server Error.", success: false});
    }
}

const getOtherUser = async (req, res) => {
    try{
        const LoggedInUserId = req.userId;
        const otherUsers = await User.find({ _id: { $ne: LoggedInUserId } }).select("-password");
        return res.status(200).json(otherUsers);

    }catch(err){
        console.log("The issue is: ",err);
    }
};
const logoutUser =  (req, res) => {
    try{
        return res.status(200).clearCookie("token", {maxAge: 0}).json({msg: "Logged out successfully."});
    }catch(err){
        console.log("The issue is: ",err);
    }
};




module.exports = { createUser, loginUser, getOtherUser ,logoutUser };