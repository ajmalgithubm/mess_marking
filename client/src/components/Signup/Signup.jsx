import React,{useState} from 'react'
import styles from './Signup.module.css'
import { useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [address, setAddress] = useState({
        name:"",
        year:"",
        branch:"",
        email:"",
        number:"",
        phone:"",
        hostel:"",
        password:""
    })
    const navigate = useNavigate();
    const onChange = (e) => {
        const {name, value} = e.target;
        setAddress({
            ...address,
            [name]: value
        })
    }
    const onHandleSubmit = async (e) => {
        e.preventDefault()
       try{
           const response = await fetch("http://localhost:4000/signup", {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({...address})
           })
           const data = await response.json();
           const {status, message, user} = data;
           if(status){
            navigate('/')
               
           }else{
            alert(message)
           }
       }catch(err){ 
        console.log("error occur", err)
       }
       setAddress({
           name: "",
           year: "",
           branch: "",
           email: "",
           number: "",
           phone: "",
           hostel: "",
           password: ""
       })
    } 
    return (
        <div className={styles.container}>
           
            {/* Same as */}
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
                    <input type="text" placeholder='Name' name='name' onChange={onChange}/>
                </div>
                <div className={styles.signupInput}>
                    {/* Year */}
                    <input type="number" name="year" id="" placeholder='Year' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* Branch */}
                    <input type="text" placeholder='Branch' name='branch' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* email adress */}
                    <input type="email" name="email" id="" placeholder='Email' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* Phone Number */}
                    <input type="number" name="number" id="" placeholder='Number' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* Hostel */}
                    <select name="hostel" id="" onChange={onChange}>
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
                    <input type="password" name="password" id="" placeholder='Password' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    {/* confirm password */}
                    <input type="password" name="" id="" placeholder='Confirm Password' onChange={onChange} />
                </div>
                <div className={styles.signupInput}>
                    <button type='submit' onClick={(e) => onHandleSubmit(e)}>Signup</button>
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
