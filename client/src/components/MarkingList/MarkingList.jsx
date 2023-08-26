import React, { useEffect, useState } from 'react';
import styles from './MarkingList.module.css';
import Table from '../Table/Table';
import Loading from '../Loading/Loading';
const MarkingList = () => {
    const [selectedMonth, setSelectedMonth] = useState();
    const [months, setMonths] = useState();
    const [monthWords] = useState( ['January', 'February', 'March', 'April', 'May', "June", 'July', "August", "September", "October", "November", "December"])
    useEffect(() => {
        setMonths({
            currentMonth: new Date().getMonth()+1,
            nextMonth: new Date().getMonth() + 2
        })
        console.log(months)
    }, [selectedMonth])
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

    const fetchMonthList =async (month) => {
        showDropDown()
        setSelectedMonth(month)
        console.log(month)
        // const userId = localStorage.getItem("userId")
        // const { data } = await axios.post("https://mess-marking-server.vercel.app/getAllMessList", {
        //     month,
        //     userId
        // })
        // // console.log(data.messList)
        // setMessList(data.messLIst)
    }
    return (
        <>
            selectedMonth && (<div className={styles.mainContainer}>
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
                                    <li onClick={() => fetchMonthList(months.currentMonth)}>{monthWords[months.currentMonth - 1]}</li>
                                    <li onClick={() => fetchMonthList(months.nextMonth)}>{monthWords[months.nextMonth - 1]}</li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
            <Table selectedMonth={selectedMonth} />) 
        </>

    )
}

export default MarkingList
