import React from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
          <form action="">
            <div className={styles.logInInput}>
              <input type="email" placeholder='Email' name="email" id="email" />
            </div>
            <div className={styles.logInInput}>
              <input placeholder='Password' type="password" name="password" id="password" />
            </div>
          </form>
        </div>
        <div className={styles.logInBtn}>
          <button type='submit'>Login</button>
        </div>
        <div className={styles.loginQuestion}>
          <p>Don't have an account?</p>
          <p style={{cursor:"pointer"}} onClick={() => navigate('/signup')}>Signup</p>
        </div>
        <div className={styles.forgotPassword}>
          <p>Forgot Password</p>
        </div>
    
      </div>
    </div>
  )
}

export default Login
