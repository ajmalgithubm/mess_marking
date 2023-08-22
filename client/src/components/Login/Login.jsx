import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })

  // onHandChnage function trigger any of the input field
  const onHandChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    })
  }

  // onHandleSubmir trigger when submit the form
  const onHandleSubmit =async () => {
    console.log("Submit called");
    const {data} = await  axios.post("http://localhost:4000/login", { ...loginDetails}, { withCredentials: true});

  }
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.image}>
          <img src="/image/logo.png" alt="Logo" />
        </div>
        <div className={styles.head}>
          <h2>MEA MESS</h2>
          <p>Login</p>
        </div>
        <div className={styles.loginForm}>
          <form>
            <div className={styles.logInInput}>
              <input type="email" placeholder='Email' name="email" id="email" onChange={onHandChange} />
            </div>
            <div className={styles.logInInput}>
              <input placeholder='Password' type="password" name="password" id="password" onChange={onHandChange} />
            </div>
          </form>
        </div>
        <div className={styles.logInBtn}>
          <button type='submit' onClick={onHandleSubmit}>Login</button>
        </div>
        <div className={styles.loginQuestion}>
          <p>Don't have an account?</p>
          <p style={{ cursor: "pointer" }} onClick={() => navigate('/signup')}>Signup</p>
        </div>
        <div className={styles.forgotPassword}>
          <p>Forgot Password</p>
        </div>

      </div>
    </div>
  )
}

export default Login
