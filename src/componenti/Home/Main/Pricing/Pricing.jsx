import React from 'react';
import styles from "./Pricing.module.css";
import Heading from "../../../Utility/Heading"

function Pricing() {
    return (
        <section className={styles.pricing} >
            <Heading text="Free, for now." size="3rem" />
            <div className={styles.pricing_card} >
                <strong>€0<span>/mese</span></strong>
                <label>Free for early access</label>
            </div>
        </section>
    )
}

export default Pricing;
