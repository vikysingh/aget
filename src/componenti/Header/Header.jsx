import React from 'react';
import styles from "./Header.module.css";

function Header(props) {
    return (
        <header>
            {props.nav }
            <div className={styles.header_lower_row} >
                {props.left}
                {props.right}
            </div>
        </header>
    )
}

export default Header;
