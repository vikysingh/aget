import React from 'react';

function Titolo({ text, size }) {
    
    return (
        <h1
        style={{ fontWeight: "bolder", fontSize: size || "2rem", fontFamily: "'Raleway', sans-serif" }}
        > { text } </h1>
    )
}

export default Titolo;
