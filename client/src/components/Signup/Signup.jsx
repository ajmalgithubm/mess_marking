import React from 'react'
import styles from './Signup.module.css'
import {NavLink, useNavigate} from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.signupContainer}>
                <div className={styles.image}>
                    <img src="/image/logo.png" alt="" />
                </div>
                <div className={styles.head}>
                    <h2>MEA MESS</h2>
                    <p>Signup</p>
                </div>
                <div className={styles.signupInput}>
                    {/* name */}
                    <input type="text" placeholder='Name'/>
                </div>
                <div className={styles.signupInput}>
                    {/* Year */}
                    <input type="number" name="" id="" placeholder='Year'/>
                </div>
                <div className={styles.signupInput}>
                    {/* Branch */}
                    <input type="text" placeholder='Branch'/>
                </div>
                <div className={styles.signupInput}>
                    {/* email adress */}
                    <input type="email" name="" id="" placeholder='Email'/>
                </div>
                <div className={styles.signupInput}>
                    {/* Phone Number */}
                    <input type="number" name="" id="" placeholder='Number'/>
                </div>
                <div className={styles.signupInput}>
                    {/* Hostel */}
                    <select name="" id="">
                        <option value="mea">MEA</option>
                        <option value="LH">LH</option>
                        <option value="thiruvathirs">Thiruvathira</option>
                        <option value="koola">Koola</option>
                        <option value="babus">Babus</option>
                        <option value="virdhavan">Virndhavan</option>
                        <option value="geetha">Geetha Homes</option>
                    </select>
                </div>
                <div className={styles.signupInput}>   
                    {/* password */}
                    <input type="password" name="" id="" placeholder='Password'/>
                </div>
                <div className={styles.signupInput}>
                    {/* confirm password */}
                    <input type="password" name="" id="" placeholder='Confirm Password'/>
                </div>
                <div className={styles.signupInput}>
                    <button type='submit'>Signup</button>
                </div>
                <div className={styles.signupQuestion}>
                    <p>Already have account?</p>
                    <p style={{ cursor: "pointer"}} onClick={() => navigate('/login')}>Login</p>
                </div>
            </div>
        </div>
    )
}

export default Signup
