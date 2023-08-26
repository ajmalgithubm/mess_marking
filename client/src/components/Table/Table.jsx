import React, { useEffect, useState } from 'react';
import styles from './Table.module.css';
import axios from 'axios';
import Loading from '../Loading/Loading'
const Table = (props) => {

    const [monthList, setMonthList] = useState();
    const month = ['January', 'February', 'March', 'April', 'May', "June", 'July', "August", "September", "October", "November", "December"];
    const getAllProduct = async (month = new Date().getMonth() + 1) => {
        const userId = localStorage.getItem("userId");
        const { data } = await axios.post("https://mess-marking-server.vercel.app/getAllMessList", {
            month,
            userId
        })
        setMonthList(data.messList)
        console.log(data)
    }
    useEffect(() => {
        getAllProduct()
    }, [])
    return (
        <div>
            {
                monthList ? (<div class={styles.container}>
                    <h3 className={styles.h3}>{monthList && month[monthList[0].month - 1]} Marking</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Breakfast</th>
                                <th>Lunch</th>
                                <th>Supper</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                monthList?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.day}</td>
                                            <td className={item.mark.B ? styles.done : styles.nope}> {item.mark.B ? "Done" : "Nope"}</td>
                                            <td className={item.mark.L ? styles.done : styles.nope}> {item.mark.B ? "Done" : "Nope"}</td>
                                            <td className={item.mark.S ? styles.done : styles.nope}> {item.mark.B ? "Done" : "Nope"}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>) : <Loading/>
            }
        </div>
    )
}

export default Table
