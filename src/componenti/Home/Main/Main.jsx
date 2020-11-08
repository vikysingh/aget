import React from 'react';
import styles from "./Main.module.css";
import Heading from "../../Utility/Heading"

import Card from './Card/Card';
import Pricing from './Pricing/Pricing';
import Footer from './Footer/Footer';

import Collect from "../../../assets/collect.jpg"
import Analyze from "../../../assets/analyze.jpg"
import Use from "../../../assets/build.jpg"

function Main() {
    return (
        <div className={styles.main} >
            <Heading size="1.5rem" text="Getting the most out of the least" />
            <div className={styles.main_card_container} >
                <Card img={Collect} title="You collect" />
                <Card img={Analyze} title="We analyze" />
                <Card img={Use} title="We build and you use" />
            </div>
            <Pricing />
            <Footer />
        </div>
    )
}

export default Main;
