import React from 'react';
import { Link } from "react-router-dom"

import styles from "./HeaderLeft.module.css"
import Button from '../../../Utility/Button';
import Heading from "../../../Utility/Heading"

function HeaderLeft() {
    return (
        <section className={styles.header_left} >
            <Heading size="3rem" text="Revolutionizing data visualization" />
            <h4>Innovative & futuristic dashboards</h4>
            <Link to="/register"> 
                <Button>
                    Register now!
                </Button>
            </Link>
            <p>With Aget the age of old & classy is over and a new era is beginning</p>
        </section>
    )
}

export default HeaderLeft;
