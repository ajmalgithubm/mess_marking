const user = require('../models/userModel');
const {createToken} = require('../createToken')
module.exports.signUp =async (req, res, next) => {
    try{
        const newUser = await user.create({...req.body});
        const token = await createToken(newUser.id)
        console.log('ID :', newUser.id);
        console.log("TOKEN: ", token);
        res.cookie("token", token, {
           withCredentials:true,
           httpOnly:false
        })
        res.json({status:true, message:"User Successfully added", user:newUser})
    }catch(err){
        if (err.message.includes("E11000 duplicate key error")){
            console.log("Duplication error occur")
            return res.json({status:false, message:"Email address already exists"})
        }
        res.json({status:false, message:err.message})
    }
}

module.exports.logIn = (req, res, next) => {
    console.log("Login Request Is Recieved..")
}