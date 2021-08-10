import React, { ReactElement } from 'react'
import "./Copyright.css";

export default function Copyright(): ReactElement {
    return (
        <div>
            <div className="CopyrightStyle">© {new Date().getFullYear()} DEV2D0 all rights reserved.</div>
        </div>
    )
}
