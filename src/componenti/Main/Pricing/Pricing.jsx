import React from 'react';
import styles from "./Pricing.module.css";

function Pricing() {
    return (
        <section className={styles.pricing} >
            <h1>Free, for now.</h1>
            <div className={styles.pricing_card} >
                <strong>€0<span>/mese</span></strong>
                <label>Free for early access</label>
            </div>
        </section>
    )
}

export default Pricing;
