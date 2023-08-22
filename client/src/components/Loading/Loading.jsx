import React from 'react'
import SyncLoader  from 'react-spinners/SyncLoader'
import styles from './Loading.module.css'


const Loading = () => {
  return (
    <div className={styles.container}>
     <div className={styles.Loading}>
             <div>
                  <SyncLoader
                      color={"black"}
                      loading={true}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                  />
             </div>
     </div>
    </div>
  )
}

export default Loading
