import React from 'react';
import { Link } from "react-router-dom"

import Input from "../Utility/Input"
import Button from '../Utility/Button';
import Heading from '../Utility/Heading';

function Form({ heading, noteText }) {
    return (
        <form>
            <Heading size="2rem" text={heading} />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <p> { noteText } <Link to="/register">here</Link></p>
            <Button> Login </Button>
        </form>
    )
}

export default Form;
