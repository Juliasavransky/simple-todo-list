import React from 'react'
import styles from '../css-modules/Item.module.css'

function Item({
    title,
    isDone,
    toggleDone,
    handleDelete,
}) {


    return (
        <div className={styles.item} >

            <input
                onClick={toggleDone}
                type="checkbox"
                className={styles.checkbox}
            >
            </input>
            <h2 className={isDone ? "isDone" : ""}>{title}</h2>


            <div
                className={styles.delete}
                onClick={handleDelete}
            >&#10005;</div>
        </div>
    )
}

export default Item