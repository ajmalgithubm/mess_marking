const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
const SECRET_KEY = "AOPHCYEVUEBEB63TE873GF36R236BR72";
module.exports.createToken =async (id) => {
    return jwt.sign({id}, SECRET_KEY, {
        expiresIn:10*24*60*60
    })
}



