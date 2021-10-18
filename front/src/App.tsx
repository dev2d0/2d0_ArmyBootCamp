import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import LandingPage from "./components/views/LandingPage/LandingPage";
import Setting from "./components/views/Setting/Setting"
import Copyright from './components/views/Copyright/Copyright';
import { Header } from './components/views/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <div className="container-box">
                    <Router>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/setting" component={Setting} />
                    </Router>
                </div>
            </div>
            <Copyright />
        </>
    );
}

export default App;
