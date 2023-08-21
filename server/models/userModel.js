const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.pre("save", function(){
    this.password = bcrypt.hash(this.password, 12)
})


module.exports = mongoose.model('User', userSchema)