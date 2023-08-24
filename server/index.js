const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const userRouter = require("./routers/userRoutes")
const cookieParser = require("cookie-parser")

dotenv.config()
const PORT = process.env.PORT
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:4000', 'http://localhost:3000', 'https://mess-marking-client.vercel.app', 'https://mess-marking-server.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json())
app.use("/", userRouter)

  
mongoose.connect("mongodb+srv://ajmalm76774:Rzaimrbh7FJQdlg8@cluster0.r0bymvm.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Mongodb Successfully Connected")
}).catch(err => {
    console.log("Error", err)
})

app.listen(4000, () => {
    console.log(`server is Listening at 4000`)
})  