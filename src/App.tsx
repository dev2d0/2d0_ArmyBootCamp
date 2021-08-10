import React from 'react';
import './App.css';
import Intro from './components/views/Intro/Intro'
import Copyright from './components/views/Copyright/Copyright';
import Letter from './components/views/Letter/Letter';
import { Title } from './components/views/Title/Title';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router></Router>
    <Title></Title>
    <Letter></Letter>
    <Intro></Intro>
    <Copyright></Copyright>
    </>
  );
}

export default App;
