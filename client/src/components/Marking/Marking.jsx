import React, { useEffect, useState } from 'react'
import styles from './Marking.module.css'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loading/Loading'

const Marking = () => {

    const [user, setUser] = useState()
    // only one month marking
    const [monthMarking, setMonthMarking] = useState()
    // set the marking Month
    const [monthData, setMonthData] = useState();
    // Cookie are give
    const [cookie, removeCookies] = useCookies([]);
    //month List in words
    const monthList = ['Janu', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const navigate = useNavigate()

    // function trigger when The select the month options
    const onChangeSelect = async (e) => {
        // goto server and take data for corresponding month
        const month = parseInt(e.target.value)
        const { data } = await axios.post("mess-marking-server.vercel.app/getMessList", { month, userId: user._id }, { withCredentials: true })
        const { status, message, monthList } = data;
        if (status) {
            // change the state of the month marking
            setMonthMarking([
                ...monthList
            ])
        } else {
            alert(`Error occur due to ${message}`)
        }
    }

    // the function trigger when click the menu button
    const addMenu = async (e, date, name, month) => {
        // console.log("Clicked item is",name)
        // console.log("Clicked value is ", e.target.value)
        // console.log("Booked for the Date ", date)
        const { data } = await axios.post('mess-marking-server.vercel.app/updateMess', {
            userId: user._id,
            date,
            name,
            month,
            value: e.target.value
        }, { withCredentials: true })
        const { status, monthList, message } = data;
        if (status) {
            setMonthMarking([
                ...monthList
            ])
        } else {
            alert(`Error occur ${message}`)
        }
    }

    // add new mark if don't exits and retrive mess Lsit
    const messmarking = async (user) => {
        const { data } = await axios.post("mess-marking-server.vercel.app/messMarking", { ...user }, { withCredentials: true });
        // console.log(data.currentMonth[0].month)
        setMonthData({
            ...data
        })
        setMonthMarking([
            ...data.currentMonth
        ])

    }

    useEffect(() => {
        // forcheck cookie exist in client side
        const verifyToken = async () => {
            if (!cookie.token) {
                navigate('/login')
                return
            }
            const { data } = await axios.post("mess-marking-server.vercel.app", {}, { withCredentials: true });
            console.log('Verify toekn function is called', data)
            const { status, user } = data;
            if (!status) {
                navigate('/login')
                return
            }
            setUser(user)
            messmarking(user)
        }
        verifyToken()
    }, [])


    return (
        <div className={styles.container}>
            {
              monthData &&(  <select id='month' onChange={onChangeSelect}>
                    <option value={monthData?.currentMonth[0].month}>{monthData && monthList[monthData?.currentMonth[0].month - 1]}</option>
                    {
                        monthData?.nextMonth && (<option value={monthData.nextMonth[0].month}>{monthList[monthData.nextMonth[0].month - 1]}</option>)
                    }
                </select>)
            }

            <div className={styles.markingContainer}>
                <div className={styles.markingRow}>
                    {
                        monthMarking ? monthMarking.map((item, index) => {
                            return (
                                <div className={styles.btn} key={item.date}>
                                    <p>{monthList[item.month - 1]}: {item.day}</p>
                                    <button value={item.mark.B} date={item.date} id={`${item.date}B`} onClick={(e) => addMenu(e, item.date, 'B', item.month)} name='B' className={item.mark.B ? styles.activeMenu : styles.inActiveMenu}>B</button>
                                    <button value={item.mark.L} date={item.date} id={`${item.date}L`} name='L' onClick={(e) => addMenu(e, item.date, 'L', item.month)} className={item.mark.L ? styles.activeMenu : styles.inActiveMenu}>L</button>
                                    <button value={item.mark.S} date={item.date} id={`${item.date}S`} name='S' onClick={(e) => addMenu(e, item.date, 'S', item.month)} className={item.mark.S ? styles.activeMenu : styles.inActiveMenu} >S</button>
                                </div>
                            )
                        }) : <Loading />
                    }
                </div>
            </div>
        </div>
    )
}

export default Marking
