import React from 'react';

import "./app.css";
import Header from './componenti/Header/Header';

import Navbar from './componenti/Header/Navbar/Navbar';

import HeaderLeft from './componenti/Header/HeaderLeft/HeaderLeft';
import HeaderRight from './componenti/Header/HeaderRight/HeaderRight';

import Main from './componenti/Main/Main';

function App() {
    return (
        <div>
            <Header nav={<Navbar/>} left={<HeaderLeft />} right={<HeaderRight />} />
            <Main />
        </div>
    )
}

export default App;
