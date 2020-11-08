import React from 'react';

function Input(props) {
    const { type, placeholder, handler, value } = props

    return (
        <input type={type} placeholder={placeholder}
        onChange={handler} required={true} value={value} />
    )
}

export default React.memo(Input)
