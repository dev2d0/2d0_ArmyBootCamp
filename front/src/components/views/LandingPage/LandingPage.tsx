import React, { ReactElement } from 'react'
import Letter from '../Letter/Letter'
import Intro from "../Intro/Intro";
import About from "../About/About";

function LandingPage(): ReactElement {
    return (
        <div>
            <Letter/>
            <hr />
            <Intro />
            <hr />
            <About />
        </div>
    )
}

export default LandingPage
