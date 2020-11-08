import React from 'react';
import { Link } from "react-router-dom"

import Input from "../Utility/Input"
import Button from '../Utility/Button';
import Heading from '../Utility/Heading';

import styles from "./Account.module.css";

function Register() {
    return (
        <form className={styles.register_form} >
            <Heading size="2rem" text="Create your free account" />
                <Input type="text" placeholder="Name" />
                <Input type="text" placeholder="Company" />

                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />

                <span> 
                    <Input type="checkbox" />
                    <label > I agree to the terms and conditions </label>
                </span>

                <p> Already have an account? Login <Link to="/login">here</Link></p>

                <Button> Create my account </Button>
        </form>
    )
}

export default Register;
