import React, { ReactElement } from 'react'
import LetterForm from './Sections/LetterForm/LetterForm'

interface Props {

}

function Letter({ }: Props): ReactElement {
    return (
        <div>
            <LetterForm></LetterForm>
        </div>
    )
}

export default Letter
