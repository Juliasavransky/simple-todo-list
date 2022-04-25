import React from 'react'
import styles from '../css-modules/Main-btn.module.css'
import styles2 from '../css-modules/Container.module.css'
import styles3 from '../css-modules/Input.module.css'

function Input({
    item,
    handleChange,
    handleSubmit
}) {

    return (
        <form
            className={styles2.container}
            onSubmit={handleSubmit}>
            <input
                className={styles3.input}
                type="text"
                placeholder="Write a new todo..."
                required
                value={item}
                onChange={handleChange}
            />
            <button
                className={styles.mainBtn}
                type="submit"
            >ADD</button>
        </form>
    )
}

export default Input