import React, { ReactElement } from 'react'
import LetterForm from './Sections/LetterForm/LetterForm'

interface Props {

}

function Letter({ }: Props): ReactElement {
    return (
        <div>
            <h2>편지 쓰기</h2>
            <p>더캠프 앱을 설치 하지 않아도 아래에 내용을 입력하고 편지 보내기 버튼을 누르면 편지가 전송됩니다.</p>
            <LetterForm />
        </div>
    )
}

export default Letter
