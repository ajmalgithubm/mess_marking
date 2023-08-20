import React from 'react'
import styles from './Profile.module.css'
function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <div className={styles.profileElement}>
                    <h1>Profile</h1>
                </div>
                <div className={styles.profileElement}>
                    <img src="/image/profile.png" alt="" />
                    <h4>AJMAL</h4>
                </div>
                <div className={styles.profileElement}>
                    <div className={styles.details}>
                        <p>Phone: +91 7559842825</p>
                        <p>Email: ajmal@gmail.com</p>
                    </div>
                </div>
                <div className={styles.profileElement}>
                    <div className={styles.marking}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="gearIcon" viewBox="0 0 16 16"><path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path></svg>
                        <span>Marking</span>
                    </div>
                </div>
                <div className={styles.profileElement}>
                    <div className={styles.logOut}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="gearIcon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"></path><path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"></path></svg><span>Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
