import React from 'react';
import styles from "./Columns.module.css"

function Columns({ left, right }) {
    return (
        <div className={styles.columns} >
            <div className={styles.columns_left} >
            {left}
            </div>
            <div className={styles.columns_right} >
                {right}
            </div>
        </div>
    )
}

export default Columns;
