import React, { ReactElement } from 'react'
import Letter from '../Letter/Letter'
import Intro from "../Intro/Intro";

function LandingPage(): ReactElement {
    return (
        <div>
            <Letter/>
            <hr />
            <Intro />
        </div>
    )
}

export default LandingPage
