import React, { useEffect } from 'react';
import styles from './Table.module.css';
import axios from 'axios';
const Table = () => {

    useEffect(() => {
        const getAllProduct = async () => {
            const userId = localStorage.getItem("userId");
            const month = new Date().getMonth() + 1;
            const { data } = await axios.post("https://mess-marking-server.vercel.app/getAllMessList", {
                month,
                userId
            })
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
                        <tr>
                            <td>5</td>
                            <td style={{ backgroundColor: 'green' }}>Done</td>
                            <td style={{ backgroundColor: 'red' }}>Nope</td>
                            <td style={{ backgroundColor: 'red' }}>Nope</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td style={{ backgroundColor: 'green' }}>Done</td>
                            <td style={{ backgroundColor: 'red' }}>Nope</td>
                            <td style={{ backgroundColor: 'green' }}>Done</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td style={{ backgroundColor: 'green' }}>Done</td>
                            <td style={{ backgroundColor: 'red' }}>Nope</td>
                            <td style={{ backgroundColor: 'green' }}>Done</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td style={{ backgroundColor: 'green' }}>Done</td>
                            <td style={{ backgroundColor: 'red' }}>Nope</td>
                            <td style={{ backgroundColor: 'green' }}>Done</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
