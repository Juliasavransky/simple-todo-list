import React from 'react'
import top from '../img/memo-emoji.png'
import styles from '../css-modules/NavTop.module.css'


function TopNav() {
    return (
        <div className={styles.top}>
            <img src={top} alt="top" />
            <div className={styles.header}>To Do List</div>
        </div>
    )
}

export default TopNav