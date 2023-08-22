const mongoose = require("mongoose")

const markingSchema = new mongoose.Schema({
    userId:String,
    year:Number,
    month:Number,
    day:String,
    mark:{
        B:{
            type:Number,
            default:0
        },
        L:{
            type:Number,
            default:0
        },
        S:{
            type:Number,
            default:0
        }
    }
})

module.exports = mongoose.model("marking", markingSchema)
