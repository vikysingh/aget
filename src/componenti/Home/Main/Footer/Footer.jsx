import React from 'react';
import { Link } from "react-router-dom"

import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer} >
            <h3><Link to="/register" >Sign up</Link> for early access now!</h3>
        </footer>
    )
}

export default Footer;
