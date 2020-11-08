import React,  { useReducer } from 'react';
import { Link } from "react-router-dom"

import Input from "../Utility/Input"
import Button from '../Utility/Button';
import Heading from '../Utility/Heading';

import styles from "./Account.module.css";

const initialFormState = {
    email: "",
    password: ""
} 

function reducer(state, action) {
    
    switch(action.type) {
        case "SET_EMAIL":
            return { ...state, email: action.payload.email }
        case "SET_PSWD":
            return { ...state, password: action.payload.password }
        default:
            return state
    }
}

function Login() {

    const [ state, dispatch ] = useReducer(reducer, initialFormState)

    const callDispath = React.useCallback((type, payload) => dispatch({ type, payload }), [dispatch])

    return (
        <form className={styles.login_form} >
            <Heading size="2rem" text="Log into your account" />
                
             <Input type="email" placeholder="Email" value={state.email}
                handler={e => callDispath("SET_EMAIL", { email: e.target.value })} 
            />

            <Input type="password" placeholder="Password" value={state.password}
                handler={e => callDispath("SET_PSWD", { password: e.target.value })} 
            />

            <p> Don't have an account yet? Create one <Link to="/register">here</Link></p>
            <label>Forgot password?</label>

            <Button> Create my account </Button>
        </form>
    )
}

export default Login;
