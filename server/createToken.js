const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
module.exports.createToken =async (id) => {
    return jwt.sign({id}, process.env.SECRET_KEY, {
        expiresIn:10*24*60*60
    })
}



