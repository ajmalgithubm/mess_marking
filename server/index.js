const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const userRouter = require("./routers/userRoutes")

dotenv.config()
const PORT = process.env.PORT
app.use(cors({
    origin: ['http://localhost:4000', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json())
app.use("/", userRouter)

 
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Mongodb Successfully Connected")
}).catch(err => {
    console.log("Error", err)
})

app.listen(PORT, () => {
    console.log(`server is Listening at ${PORT}`)
}) 