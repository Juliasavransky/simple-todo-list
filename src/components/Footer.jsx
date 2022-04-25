import React from 'react'
import footer from '../img/abra-img.png';
import styles from '../css-modules/Footer.module.css'

function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <img src={footer}
                    alt="footer"
                    className={styles.footerImg}
                />
            </div>
        </>
    )
}

export default Footer