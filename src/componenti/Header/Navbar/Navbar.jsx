import React from 'react';
import styles from "./Style.module.css"

function Navbar() {
    return (
        <nav className={styles.nav}>
            <strong className={styles.nav__brand}>Aget</strong>
            <a href="mailto:example@email.com" className={styles.nav__contact_us} >Contattaci</a>
        </nav>
    )
}

export default Navbar;
