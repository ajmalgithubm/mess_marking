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
        res.json({ status: true, message: "User Successfully added", userId: newUser._id, token })
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
        res.json({ status: true, message: 'Successfully logged in', token , userId : userExist})
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
    const currentMonthData = await Marking.find({ userId: _id, month: currentMonth + 1, year: currentYear });
    console.log(currentMonthData.length)
    // if current month details are null We create documnets for This month
    if (currentMonthData.length === 0) {
        const dateList = upcomingDateCurrentMonth(currentYear, currentMonth)
        var i = 1;
        for (let date of dateList) {
            console.log(date)
            await Marking.create({ userId: _id, day: i, date: date.day, year: date.year, month: date.month, mark: { B: 0, L: 0, S: 0 } });
            i += 1;
        }
    }
    // we check current month is less than of november/ december we don't need to create Next month 
    if (currentMonth < 11) {
        // check the next month documnets exist 
        const nextMonthData = await Marking.find({ userId: _id, month: currentMonth + 2, year: currentYear });
        if (nextMonthData.length === 0) {
            // if not exist create new documnets
            const dateList = upcomingDateCurrentMonth(currentYear, currentMonth + 1);
            var i = 1;
            for (let date of dateList) {
                console.log(date)
                await Marking.create({ userId: _id, day: i, date: date.day, year: date.year, month: date.month, mark: { B: 0, L: 0, S: 0 } });
                i += 1;
            }
        }
    }
    // retrive all data in this month at date staring from next day
    const todayNumber = new Date().getDate()
    const currentMonthDataList = await Marking.find({ userId: _id, day: { $gt: todayNumber }, month: currentMonth + 1, year: currentYear });
    console.log(currentMonthDataList)
    if (currentMonth < 11) {
        const nextMonthDataList = await Marking.find({ userId: _id, month: currentMonth + 2, year: currentYear })
        console.log("next month Marking  is ", nextMonthDataList);
        return res.json({ currentMonth: currentMonthDataList, nextMonth: nextMonthDataList })
    } else {
        return res.json({ currentMonth: currentMonthDataList, nextMonth: null })
    }

}

// changing the mess marking

module.exports.updateMess = async (req, res, next) => {
    try {
        console.log("POST Requeat recived for updation")
        const { userId, date, name, value, month } = req.body;
        let increment;
        if (value === '0') {
            increment = 1
        } else {
            increment = 0
        }
        console.log("api before")
        const userUpdate = await Marking.updateOne({ userId: userId, date: date }, {
            $set: {
                [`mark.${name}`]: increment
            }
        })
        const currentDay = req.body.month === new Date().getMonth() + 1 ? new Date().getDate() + 1 : 1
        const monthList = await Marking.find({ userId, month, day: { $gte: currentDay}})
        res.json({ status: true, message: 'successfully updated', monthList })
    } catch (err) {
        res.json({ status: false, message: err.message })
        console.log("error found", err.message)
    }
}

// take the  messlist for the month
module.exports.getMessList = async (req, res, next) => {
    try {
        console.log("get mess list api is called");
        const userId = req.body.userId
        const month = req.body.month
        const currentDay = req.body.month === new Date().getMonth() + 1 ? new Date().getDate() + 1 : 1;
        const monthList = await Marking.find({userId, month, day:{ $gte: currentDay}})
        res.json({ status: true, monthList})
    } catch (err) {
        res.json({ status: false, message: err.message})
    }
}
// get all mess list 
module.exports.getAllMessList =async (req, res, next) => {
    try{
        const userId = req.body.userId;
        const month = req.body.month ? req.body.month : new Date().getMonth()+1 ;
        const messList = await Marking.find({userId, month});
        console.log("API is called")
        res.json({ status: true, messList: messList})
    }catch(err){
        res.json({ status: false, message: err.message})
    }
}