import React, { FC } from 'react'
import { Row, Col, Image } from "antd";
import introImage from '../../../assets/images/intro.jpeg'
import './About.css'

interface Props {

}

const Intro: React.FC = () => {
    return (
        <div className="about">
            <h2>ABOUT ME</h2>
            <Row className="background">
                <Col xs={24} lg={12}>
                    <Image
                        className="profile"
                        src={introImage}
                    />
                </Col>
                <Col xs={24} lg={12}>
                    <h3>안녕하세요 <strong>이동영</strong> 입니다.</h3>
                    <div className="text">
                    먼저 이런 누추한 곳을 찾아와 주신 분들께 너무나 감사드립니다.<br />
                    저는 10월 21일에 훈련소에 들어갔습니다.<br />
                    여러분들이 귀찮게 더캠프 앱을 깔지 않고도 간편하게 편지를 쓰실 수 있도록 준비해 보았습니다.<br />
                    위에 보내는 사람, 제목, 내용을 입력하시고 편지 보내기로 보내주시면 인편이 보내집니다~!<br />
                    아무 이야기라도 써주시면 감사하겠습니다.<br />
                    편지 써주신분들 모두 잊지 않겠습니다.<br />
                    감사합니다! (꾸벅)
                        <h5>카페 개설 이전(10월 26일 예상)에 보내시는 편지는 저장해 두었다가 카페 개설 이후 한번에 보내집니다.</h5>
                    </div>
                    <br />
                </Col>
            </Row>
            <br /><br />
        </div>
    )
}

export default Intro;
