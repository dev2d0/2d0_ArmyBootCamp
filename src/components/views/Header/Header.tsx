import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <div>
            <div className='top-bar'>
                <h1>훈련병 이동영</h1>
            </div>
            <button>편지 쓰기</button>
            <p>위 편지쓰기를 누르면 더캠프 앱을 설치 하지 않고 바로 편지를 쓰실 수 있습니다.</p>
        </div>
    )
}
