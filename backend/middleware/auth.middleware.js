const jwt = require("jsonwebtoken");
const isAuthenticated = async (req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({msg: "Unauthorized."});
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified){
            return res.status(401).json({msg: "Unauthorized."});
        }
        req.userId = verified.userId;
        next();
    }catch(err){
        console.log("The issue is: ",err);
        return res.status(500).json({msg: "Internal Server Error."});
    }
};

module.exports = isAuthenticated;