import React from 'react';

import styles from "./Account.module.css"

import ill from "../../assets/illustration.jpg"
import Columns from "../Utility/Columns/Columns"

function Account(props) {

    return (
        <section className={styles.account} >
            <Columns 
            left={
            <div className={styles.account_left_col} >
                {props.action}      
            </div>
            }
            right={
                <div className={styles.account_right_col} >
                    <img src={ill} alt="ill" />
                </div>
            } />
        </section>
    )
}

export default Account;
