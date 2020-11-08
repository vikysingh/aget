import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./app.css";
import Header from './componenti/Home/Header/Header';

import Navbar from './componenti/Home/Header/Navbar/Navbar';

import HeaderLeft from './componenti/Home/Header/HeaderLeft/HeaderLeft';
import HeaderRight from './componenti/Home/Header/HeaderRight/HeaderRight';

import Main from './componenti/Home/Main/Main';
import Account from "./componenti/Account/Account"
import Login from './componenti/Account/Login';
import Register from './componenti/Account/Register';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Header nav={<Navbar/>} left={<HeaderLeft />} right={<HeaderRight />} />
                    <Main />
                </Route>
                <Route exact path="/register">
                    <Account action={<Register />} />
                </Route>
                <Route exact path="/login">
                    <Account action={<Login />} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
