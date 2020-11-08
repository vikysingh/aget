import React from 'react';
import styles from "./Header.module.css";
import Columns from "../../Utility/Columns/Columns"

function Header({ nav, left, right }) {
    return (
        <header>
            {nav}
            <div className={styles.header_lower_row} >
                <Columns left={left} right={right} />
            </div>
        </header>
    )
}

export default Header;
