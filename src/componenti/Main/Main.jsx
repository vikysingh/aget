import React from 'react';
import styles from "./Style.module.css"
import Card from './Card/Card';
import Pricing from './Pricing/Pricing';
import Footer from './Footer/Footer';

function Main() {
    return (
        <div className={styles.main} >
            <h3>Start designing where you need it most</h3>
            <div className={styles.main_card_container} >
                <Card />
                <Card />
                <Card />
            </div>
            <Pricing />
            <Footer />
        </div>
    )
}

export default Main;
