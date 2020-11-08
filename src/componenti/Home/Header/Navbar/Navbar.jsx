import React from 'react';
import styles from "./Nav.module.css"
import Heading from "../../../Utility/Heading"

function Navbar() {
    return (
        <nav className={styles.nav}>
            <Heading size="2rem" text="Aget" color="orange" />
        </nav>
    )
}

export default Navbar;
