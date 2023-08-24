const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
const User = require('../models/userModel')
dotenv.config()
const SECRET_KEY = "AOPHCYEVUEBEB63TE873GF36R236BR72";
module.exports.verifyToken =(req, res, next) => {
    console.log("post requesy for verify token is recived")

    const token = req.body.token
    console.log("token is", token)
    if (!token) {
        return res.json({ status: false })
    }
    jwt.verify(token, SECRET_KEY,async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            console.log("User Id is ", data.id)
            const user = await User.findById(data.id);
            return res.json({ status: true , user})
        }
    })

}