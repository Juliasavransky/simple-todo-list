import React from 'react'
import Item from './Item';
import styles from '../css-modules/Container.module.css';
import styles2 from '../css-modules/List.module.css'



function List({
    items,
    toggleDone,
    handleDelete
}) {
    return (
        <div className={styles.container}>
            <h3 className={styles2.header}>My todos:</h3>
            {items.map(item => {
                return <Item
                    title={item.title}
                    key={item.itemId}
                    isDone={item.isDone}
                    toggleDone={() => toggleDone(item.itemId)}
                    handleDelete={() => handleDelete(item.itemId)}
                />
            })}
        </div>
    )
}

export default List