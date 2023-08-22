const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
const User = require('../models/userModel')
dotenv.config()
module.exports.verifyToken =(req, res, next) => {
    console.log("post requesy for verify token is recived")

    const token = req.cookies.token
    if (!token) {
        return res.json({ status: false })
    }
    jwt.verify(token, process.env.SECRET_KEY,async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            console.log("User Id is ", data.id)
            const user = await User.findById(data.id);
            return res.json({ status: true , us})
        }
    })

}