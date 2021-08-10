import React, { ReactElement } from 'react'
import './LetterForm.css'

interface Props {

}

export default function LetterForm({ }: Props): ReactElement {
    return (
        <div>
            <form className='form-container'>
                <label>제목</label>
                <input type="text" name="title" placeholder="제목"></input>
                <label>내용</label>
                <div>
                    <textarea placeholder="글쓰기" name="content"></textarea>
                </div>

                <div>
                    <button>Cancel</button>
                    <button type="submit">Submit</button>
                </div >
            </form >
        </div>
    )
}
