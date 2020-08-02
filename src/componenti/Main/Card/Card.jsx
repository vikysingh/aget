import React from 'react';
import styles from "./Card.module.css"
import CardImg from "../card_img.jpeg"

function Card() {
    return (
        <div className={styles.card} >
            <img src={CardImg} alt="Nolra" />
            <h4>Titolo</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum, 
                fuga nihil eveniet corrupti, numquam totam nulla cum a saepe.
            </p>
        </div>
    )
}

export default Card;
