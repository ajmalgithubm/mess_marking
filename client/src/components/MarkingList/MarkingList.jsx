import React from 'react';
import styles from './MarkingList.module.css';
import Table from '../Table/Table';
const MarkingList = () => {
    const showDropDown = (e) => {
        const listItems = document.getElementById("listItems");
        if(!listItems.style.display){
            console.log("current display is none")
            listItems.style.display = "block"
            setTimeout(() => {
                listItems.style.opacity = 1;
                listItems.style.transform = "translateY(0)";
            }, 50)
        }else if(listItems.style.display === "block"){
            console.log("current display is block")
            listItems.style.display = "none"
            setTimeout(() => {
                listItems.style.opacity = 0;
                listItems.style.transform = "translateY(0)";
            }, 50)
        }else{
            listItems.style.display = "block"
            setTimeout(() => {
                listItems.style.opacity = 1;
                listItems.style.transform = "translateY(0)";
            }, 50)
        }
        
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
                        <li onClick={showDropDown}>August</li>
                        <li onClick={showDropDown}>September</li>
                        <li onClick={showDropDown}>October</li>
                        <li onClick={showDropDown}>November</li>
                    </ul>
                </div>
            </div>
            <Table />
        </>
        
    )
}

export default MarkingList
