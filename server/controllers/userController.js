const User = require('../models/userModel')

module.exports.signUp =async (req, res, next) => {
    console.log("APi called")
    try{
        const user = User.create({...req.body});
        res.json({status:true, message:"user added Successfully", user});
    }catch(err){
        console.log("Error:", err.name);
        res.json({status:false, message:err.name})
    }
}  