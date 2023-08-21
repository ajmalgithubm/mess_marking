const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    year:{
        type:String,
        required:[true, "Year is required"]
    },
    branch:{
        type:String,
    },
    email:{
        type:String
    }, 
    number:{
        type:String
    },
    hostel:{
        type:String
    },  
    password:{ 
        type:String,
        required:[true, "password is required"]
    }
})
  


module.exports = mongoose.model('User', userSchema)