import React, { useEffect, useState } from 'react'
import styles from './Marking.module.css'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Marking = () => {

    // Cookie are give
    const [cookie, removeCookies] = useCookies([]);


    const navigate = useNavigate()

    // add Marking is function is trigger when the B, L ,S buttons pressed
    const addMarking = (e, item) => {
        alert(`You marked ${e.target.value} for ${item}`)
    }


    useEffect(() => {
        const messmarking = async (user) => {
            const { data } = await axios.post("http://localhost:4000/messMarking", { ...user }, { withCredentials: true });
            console.log(data);
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
            <select id='month' >
                <option value={"agust"}></option>
                <option value={"saptermber"}></option>
            </select>
            <div className={styles.markingContainer}>
                <div className={styles.markingRow}>
                    <div className={styles.btn} >
                        <p></p>
                        <button value="B" name='B' >B</button>
                        <button value="L" name='L' >L</button>
                        <button value="S" name='S' >S</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marking
