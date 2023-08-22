const user = require('../models/userModel');
const bcrypt = require('bcrypt')
const { createToken } = require('../createToken');
const Marking = require("../models/markModel")

module.exports.signUp = async (req, res, next) => {
    try {
        const newUser = await user.create({ ...req.body });
        const token = await createToken(newUser.id)
        console.log('ID :', newUser.id);
        console.log("TOKEN: ", token);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        })
        res.json({ status: true, message: "User Successfully added", user: newUser })
    } catch (err) {
        if (err.message.includes("E11000 duplicate key error")) {
            console.log("Duplication error occur")
            return res.json({ status: false, message: "Email address already exists" })
        }
        res.json({ status: false, message: err.message })
    }
}

module.exports.logIn = async (req, res, next) => {
    console.log("Login Request Is Recieved..")
    console.log("login Data ", req.body);
    try {
        const { email, password } = req.body;
        const userExist = await user.findOne({ email });
        if (!userExist) {
            return res.json({ status: false, message: "Email doesnot exist" })
        }
        const auth = await bcrypt.compare(password, userExist.password);
        if (!auth) {
            return res.json({ status: false, message: "Incorrect password" })
        }
        const token = await createToken(userExist.id)
        res.cookie("token", token, { withCredentials: true, httpOnly: false })
        res.json({ status: true, message: 'Successfully logged in' })
    } catch (err) {
        res.json({ status: false, message: err.message })
    }
}

const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Kolkata' };

const upcomingDateCurrentMonth = (year, month) => {
    const formattedDate = [];
    const firstDayMonth = new Date(year, month, 1);
    const lastDayMonth = new Date(year, month + 1, 0);
    for (let currentDate = firstDayMonth; currentDate <= lastDayMonth; currentDate.setDate(currentDate.getDate() + 1)) {
        const formatedDate = currentDate.toLocaleDateString('en-IN', options)
        formattedDate.push({ day: formatedDate, month: month + 1, year })
    }
    return formattedDate
}

module.exports.messMarking = async (req, res, next) => {

    const { _id } = req.body
    console.log("Mess marking api called....")
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    console.log(currentMonth, currentYear);
    // for check document Exists in this month or add new documents
    const currentMonthData = await Marking.find({ userId: _id, month: currentMonth+1, year: currentYear });
    console.log(currentMonthData.length)
    // if current month details are null We create documnets for This month
    if (currentMonthData.length === 0) {
        const dateList = upcomingDateCurrentMonth(currentYear, currentMonth)
        for (let date of dateList) {
          console.log(date)
            await Marking.create({ userId: _id, day: date.day, year: date.year, month: date.month, mark: { B:0, L:0, S:0 } });
        }
    }
    // we check current month is less than of november/ december we don't need to create Next month 
    if( currentMonth < 11){
        const nextMonthData = await Marking.find({ userId: _id, month: currentMonth+2, year: currentYear});
        if(nextMonthData.length === 0){
            const dateList = upcomingDateCurrentMonth(currentYear, currentMonth+1);
            for (let date of dateList) {
                console.log(date)
                await Marking.create({ userId: _id, day: date.day, year: date.year, month: date.month, mark: { B: 0, L: 0, S: 0 } });
            }
        }
    }
}