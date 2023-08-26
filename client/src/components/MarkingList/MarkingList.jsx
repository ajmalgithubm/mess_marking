import React, { useEffect, useState } from 'react';
import styles from './MarkingList.module.css';
import Table from '../Table/Table';
const MarkingList = () => {
    const [months, setMonths] = useState();
    const [monthWords] = useState( ['January', 'February', 'March', 'April', 'May', "June", 'July', "August", "September", "October", "November", "December"])
    useEffect(() => {
        setMonths({
            currentMonth: new Date().getMonth(),
            nextMonth: new Date().getMonth() + 1
        })
        console.log(months)
    }, [])
    const showDropDown = (e) => {
        const listItems = document.getElementById("listItems");
        if (!listItems.style.display) {
            console.log("current display is none")
            listItems.style.display = "block"
            setTimeout(() => {
                listItems.style.opacity = 1;
                listItems.style.transform = "translateY(0)";
            }, 50)
        } else if (listItems.style.display === "block") {
            console.log("current display is block")
            listItems.style.display = "none"
            setTimeout(() => {
                listItems.style.opacity = 0;
                listItems.style.transform = "translateY(0)";
            }, 50)
        } else {
            listItems.style.display = "block"
            setTimeout(() => {
                listItems.style.opacity = 1;
                listItems.style.transform = "translateY(0)";
            }, 50)
        }

    }

    const fetchMonthList = () => {
        showDropDown()
    }
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <div className={styles.barContainer} onClick={showDropDown}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
                <div className={styles.listContainer}>
                    <ul id='listItems'>
                        {
                            months && (
                                <>
                                    <li onClick={fetchMonthList}>{monthWords[months.currentMonth]}</li>
                                    <li onClick={fetchMonthList}>{monthWords[months.nextMonth]}</li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
            <Table />
        </>

    )
}

export default MarkingList
