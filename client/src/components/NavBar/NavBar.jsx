import React from 'react';
import styles from './NavBar.module.css';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <motion.div initial={{x:'-100px', scale:0}} 
                animate={{x:'0px',scale:1 ,transition:{type:"easeInOut", duration:0.5}}} 
                className={styles.navItem}>
                    <h3>Home</h3>
                </motion.div>
                <motion.div initial={{ x: '-100px', scale: 0 }}
                    animate={{ x: '0px', scale: 1, transition: { type: "easeInOut", duration: 0.5, delay:0.5 } }}
                    className={styles.navItem}>
                    <h3 onClick={() => navigate('/profile')}>Profile</h3>
                </motion.div>
                <motion.div initial={{ x: '-100px', scale: 0 }}
                    animate={{ x: '0px', scale: 1, transition: { type: "easeInOut", duration: 0.5 , delay:1} }}
                    className={styles.navItem}>
                    <h3 onClick={() => navigate('/marking')}>Marking</h3>
                </motion.div>
            </div>
        </div>
    )
}

export default NavBar
