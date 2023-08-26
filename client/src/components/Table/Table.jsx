import React, { useEffect } from 'react';
import styles from './Table.module.css';
const Table = () => {

    useEffect(() => {
        console.log("Table ia mounted")
    }, [])
  return (
    <div>
          <div class={styles.container}>
            <h3 className={styles.h3}>August Marking</h3>
              <table>
                  <thead>
                      <tr>
                          <th>Date</th>
                          <th>Breakfast</th>
                          <th>Lunch</th>
                          <th>Supper</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>5</td>
                          <td style={{ backgroundColor: 'green' }}>Done</td>
                          <td style={{ backgroundColor: 'red' }}>Nope</td>
                          <td style={{ backgroundColor: 'red' }}>Nope</td>
                      </tr>
                      <tr>
                          <td>5</td>
                          <td style={{ backgroundColor: 'green' }}>Done</td>
                          <td style={{ backgroundColor: 'red' }}>Nope</td>
                          <td style={{ backgroundColor: 'green' }}>Done</td>
                      </tr>
                      <tr>
                          <td>5</td>
                          <td style={{ backgroundColor: 'green' }}>Done</td>
                          <td style={{ backgroundColor: 'red' }}>Nope</td>
                          <td style={{ backgroundColor: 'green' }}>Done</td>
                      </tr>
                      <tr>
                          <td>5</td>
                          <td style={{backgroundColor:'green'}}>Done</td>
                          <td style={{backgroundColor:'red'}}>Nope</td>
                          <td style={{ backgroundColor: 'green' }}>Done</td>
                      </tr>
                  </tbody>
              </table>
          </div>
    </div>
  )
}

export default Table
