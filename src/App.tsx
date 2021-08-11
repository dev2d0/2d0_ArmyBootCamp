import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Intro from './components/views/Intro/Intro'
import Copyright from './components/views/Copyright/Copyright';
import Letter from './components/views/Letter/Letter';
import { Header } from './components/views/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="App">
                <Router></Router>
                <Header />
                <div className="container-box">
                    <Letter />
                    <hr />
                    <Intro />
                </div>
            </div>
            <Copyright />
        </>
    );
}

export default App;
