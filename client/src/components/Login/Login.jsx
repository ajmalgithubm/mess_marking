import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import ReactJsAlert from 'reactjs-alert'
import axios from 'axios';

const Login = () => {

  // this state for showing popup message
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState("")
  const [type, setType] = useState("")

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
    const { data } = await axios.post("http://localhost:4000/login", { ...loginDetails}, { withCredentials: true});
    const {status, message, token} = data;
    if(!status){
      setStatus(true)
      setTitle(message)
      setType("error")
    }else{
      setStatus(true)
      setTitle(message)
      setType('success')
      localStorage.setItem("token", token)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <ReactJsAlert
        status={status} // true or false
        type={type} // success, warning, error, info
        title={title}
        quotes={false}
        Close={() => {
          setStatus(false)
        }}
      />
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
