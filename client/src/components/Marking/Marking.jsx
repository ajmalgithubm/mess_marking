import React from 'react'
import styles from './Marking.module.css'
const Marking = () => {
    return (
        <div className={styles.container}>
            <select>
                <option value="">August</option>
                <option value="">September</option>
            </select>
            <div className={styles.markingContainer}>
                <div className={styles.markingRow}>
                    {
                        [1,2,3,4,5,6,7,8,9].map((item, index) => {
                            return(
                                <div className={styles.btn}>
                                    <p>{item}</p>
                                    <button value="B">B</button>
                                    <button value="L">L</button>
                                    <button value="S">S</button>
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
