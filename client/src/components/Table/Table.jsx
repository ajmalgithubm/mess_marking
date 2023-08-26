import React, { useEffect, useState } from 'react';
import styles from './Table.module.css';
import axios from 'axios';
const Table = () => {

    const [monthList, setMonthList] = useState();
    useEffect(() => {
        const getAllProduct = async () => {
            const userId = localStorage.getItem("userId");
            const month = new Date().getMonth() + 1;
            const { data } = await axios.post("https://mess-marking-server.vercel.app/getAllMessList", {
                month,
                userId
            })
            setMonthList(data.messList)
            console.log(data)
        }
        getAllProduct()
    }, [])
    return (
        <div>
            <div class={styles.container}>
                <h3 className={styles.h3}>August Marking</h3>
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
                                return(
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
            </div>
        </div>
    )
}

export default Table
