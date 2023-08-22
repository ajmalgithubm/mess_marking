import React, { useEffect, useState } from 'react'
import styles from './Marking.module.css'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Marking = () => {
    const [monthMarking, setMonthMarking] = useState()
    // set the marking Month
    const [monthData, setMonthData] = useState();
    // Cookie are give
    const [cookie, removeCookies] = useCookies([]);
    //month List in words
    const monthList = ['Janu', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const navigate = useNavigate()

    const onChangeSelect = (e) => {
        // console.log(monthMarking)
        console.log("change function is called");
        console.log(monthMarking)
        
    }


    useEffect(() => {
        const messmarking = async (user) => {
            const { data } = await axios.post("http://localhost:4000/messMarking", { ...user }, { withCredentials: true });
            // console.log(data.currentMonth[0].month)
            setMonthData({
                ...data
            })
            setMonthMarking([
                ...data.currentMonth
            ])
            
        }
        // forcheck cookie exist in client side
        const verifyToken = async () => {
            if (!cookie.token) {
                navigate('/login')
                return
            }
            const { data } = await axios.post("http://localhost:4000", {}, { withCredentials: true });
            console.log('Verify toekn function is called', data)
            const { status, user } = data;
            if (!status) {
                navigate('/login')
                return
            }
            messmarking(user)
        }
        verifyToken()
    }, [])


    return (
        <div className={styles.container}>
            <select id='month' onChange={onChangeSelect}>
                <option  value={monthData?.currentMonth[0].month}>{monthData && monthList[monthData?.currentMonth[0].month - 1]}</option>
                {
                    monthData?.nextMonth && (<option value={monthData.nextMonth[0].month}>{monthList[monthData.nextMonth[0].month - 1]}</option>)
                }
            </select>
            <div className={styles.markingContainer}>
                <div className={styles.markingRow}>
                        {
                            monthMarking?.map((item, index) => {
                                return(
                                    <div className={styles.btn} key={item.date}>
                                        <p>{monthList[item.month-1]}: {item.day}</p>
                                        <button value={item.mark.B} name='B' >B</button>
                                        <button value={item.mark.L} name='L' >L</button>
                                        <button value={item.mark.S} name='S' >S</button>
                                    </div>
                                )
                            })
                        }
                        {/* <p></p>
                        <button value="B" name='B' >B</button>
                        <button value="L" name='L' >L</button>
                        <button value="S" name='S' >S</button> */}
                </div>
            </div>
        </div>
    )
}

export default Marking
