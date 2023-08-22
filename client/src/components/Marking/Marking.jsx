import React, { useEffect, useState } from 'react'
import styles from './Marking.module.css'
import { currentMonthName, nextMonthName, upcomingDateCurrentMonth } from '../../Helperfunctions/monthDetails'
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Marking = () => {

    // Cookie are give
    const [cookie, removeCookies] = useCookies([]);

    // declare state for keeping the month Name current and next
    const [monthName, setMonthName] = useState([currentMonthName(), nextMonthName()])
    const [selectMonth, setSelectMonth] = useState(currentMonthName())
    const [dayList, setDayList] = useState()
    const navigate = useNavigate()

    // add Marking is function is trigger when the B, L ,S buttons pressed
    const addMarking = (e, item) => {
        alert(`You marked ${e.target.value} for ${item}`)
    }


    useEffect(() => {
        const messmarking =async (user) => {
            const {data} = await axios.post("http://localhost:4000/messMarking", {...user}, {withCredentials:true} );
        }

        // forcheck cookie exist in client side
        const verifyToken = async () => {
            if (!cookie.token) {
                navigate('/login')
                return
            }
            const { data } = await axios.post("http://localhost:4000", {}, { withCredentials: true });
            console.log('Verify toekn function is called', data)
            const {status, user} = data;
            if(!status){
                navigate('/login')
                return
            }
            messmarking(user)
        }
        verifyToken()
    }, [])


    return (
        <div className={styles.container}>
            <select id='month' onChange={(e) => setSelectMonth(e.target.value)}>
                <option value={monthName[0]}>{monthName[0]}</option>
                <option value={monthName[1]}>{monthName[1]}</option>
            </select>
            <div className={styles.markingContainer}>
                <div className={styles.markingRow}>
                    {
                        dayList?.map((item) => {
                            return (
                                <div className={styles.btn} key={item}>
                                    <p>{selectMonth}: {item.slice(0, 2)}</p>
                                    <button value="B" name='B' onClick={(e) => addMarking(e, item)}>B</button>
                                    <button value="L" name='L' onClick={(e) => addMarking(e, item)}>L</button>
                                    <button value="S" name='S' onClick={(e) => addMarking(e, item)}>S</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Marking
