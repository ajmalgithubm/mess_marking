import React, { useEffect, useState } from 'react'
import styles from './Marking.module.css'
import { currentMonthName, nextMonthName, upcomingDateCurrentMonth } from '../../Helperfunctions/monthDetails'

const Marking = () => {

    // declare state for keeping the month Name current and next
    const [monthName, setMonthName] = useState([currentMonthName(), nextMonthName()])
    const [selectMonth, setSelectMonth] = useState(currentMonthName())
    const [dayList, setDayList] = useState()

    // add Marking is function is trigger when the B, L ,S buttons pressed
    const addMarking = (e, item) => {
        alert(`Y0u marked ${e.target.value} for ${item}`)
    }

    // useEffect Function setMonth current Month and next Month for shows in options
    useEffect(() => {

        (selectMonth === monthName[0]) ? setDayList(
            upcomingDateCurrentMonth(
                new Date().getFullYear(),
                new Date().getMonth(),
                true
            )
        ) : setDayList(
            upcomingDateCurrentMonth(
                new Date().getFullYear(),
                new Date().getMonth()
            )
        )
        console.log("selected Month", selectMonth)
        console.log("Months are", monthName)
    }, [selectMonth, addMarking])


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
