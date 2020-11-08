import React from 'react';
import Heading from "../../../Utility/Heading"

import styles from "./Card.module.css"

function Card(props) {
    return (
        <div className={styles.card} >
            <img src={props.img} alt="illustration" />
            <Heading size="1rem" text={props.title} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum, 
                fuga nihil eveniet corrupti, numquam totam nulla cum a saepe.
            </p>
        </div>
    )
}

export default Card;
