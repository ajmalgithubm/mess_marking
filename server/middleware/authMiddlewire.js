const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()
module.exports.verifyToken = (req, res, next) =>{
    console.log("post requesy for verify token is recived")
    console.log( req.cookies);
    try{
       
        
    }catch(err){

    }
}