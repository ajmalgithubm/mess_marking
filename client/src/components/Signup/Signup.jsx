import React, { useState } from 'react'
import styles from './Signup.module.css'
import { useNavigate } from 'react-router-dom';
import ReactJsAlert from 'reactjs-alert';
import axios from 'axios'


const Signup = () => {
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("");
    const [title, setTitle] = useState("")
    const [personDetails, setPersonDetails] = useState({
        name: "",
        year: "",
        branch: "",
        email: "",
        number: "",
        hostel: "",
        password: ""
    })
    const navigate = useNavigate();
    const {name, year, branch, email, number, hostel, password} = personDetails;
    

    // {/*omChange function trigger when the input valuechnages*/}
    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'year' || name === 'number') {
            setPersonDetails({
                ...personDetails,
                [name]: parseInt(value)
            })
        } else {
            setPersonDetails({
                ...personDetails,
                [name]: value
            })
        }
    }
    // {/*leave The confirm Input field this function will trigger */}
    const verifyConfirmPassword = (e) => {
        if (e.target.value !== personDetails.password) {
            setStatus(true);
            setTitle("Enter the correct password")
            setType('error')
        }
    }


    // { /*  function trigger when the form submit*/}
    const onHandleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('https://mess-marking-server.vercel.app/signup', {
            ...personDetails
        },{
            withCredentials:true
        })
        const {status, message , token, userId} = data;
        console.log(data)
        if(status){
            localStorage.setItem("token", token)
            localStorage.setItem("userId", userId)
            setStatus(true)
            setTitle(message)
            setType("success")
            setPersonDetails({
                name: "",
                year: "",
                branch: "",
                email: "",
                number: "",
                hostel: "",
                password: ""
            })
            document.getElementById("confirmPassword").value = "";
            setTimeout(() => {
                navigate("/")
            }, 2000)
        }else{
            setStatus(true)
            setTitle(message)
            setType("error")
        }

    }
    return (
        <div className={styles.container}>

            {/* Same as */}
            <div className={styles.signupContainer}>
                <ReactJsAlert
                    status={status} // true or false
                    type={type} // success, warning, error, info
                    title={title}
                    quotes={false}
                    Close={() => {
                        setStatus(false)
                    }}
                />
                <div className={styles.image}>
                    <img src="/image/logo.png" alt="" />
                </div>
                <div className={styles.head}>
                    <h2>MEA MESS</h2>
                    <p>Signup</p>
                </div>
                <div className={styles.signupInput}>
                    {/* name */}
                    <input type="text" placeholder='Name' value={name} id='name' name='name' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* Year */}
                    <input type="number" name="year" id="year" value={year} placeholder='Year' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* Branch */}
                    <input type="text" placeholder='Branch' value={branch} id='branch' name='branch' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* email adress */}
                    <input type="email" name="email" value={email} id="email" placeholder='Email' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* Phone Number */}
                    <input type="number" name="number" value={number} id="phone" placeholder='Number' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* Hostel */}
                    <select name="hostel" id="" value={hostel} onChange={onChange}>
                        <option>Select Hostel</option>
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
                    <input type="password" name="password" id="password" placeholder='Password' onChange={onChange} value={password}/>
                </div>
                <div className={styles.signupInput}>
                    {/* confirm password */}
                    <input onBlur={verifyConfirmPassword} type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
                </div>
                <div className={styles.signupInput}>
                    <button type='submit' onClick={(e) => onHandleSubmit(e)}>Signup</button>
                </div>
                <div className={styles.signupQuestion}>
                    <p>Already have account?</p>
                    <p style={{ cursor: "pointer" }} onClick={() => navigate('/login')}>Login</p>
                </div>
            </div>

        </div>
    )
}

export default Signup
