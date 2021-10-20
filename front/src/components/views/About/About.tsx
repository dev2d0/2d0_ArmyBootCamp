import React, { FC } from 'react'
import { Row, Col, Image } from "antd";
import AboutImage from '../../../assets/images/About.jpeg'
import './About.css'

const About: React.FC = () => {
    return (
        <div className="about">
            <h2>더캠프로 인편 쓰는 법</h2>
            <Row className="background">
                <Col xs={24} lg={12}>
                    <h3>더캠프로 써주시면 더욱 감사하겠습니다.</h3><br />
                    <div className="text">
                    1. 더캠프 앱 설치 - 회원가입 - 로그인<br />
                    2. 보고싶은 군인 등록하기<br />
                    3. 개인정보 입력하기<br /><br />
                    신분: 예비군인/훈련병<br />
                    군종: 육군<br />
                    이름: 이동영<br />
                    생년월일: 1999.04.26<br />
                    입영부대: 육군훈련소-논산<br />
                    입대일자: 직접 입력 - 2021.10.21<br />
                    보고싶은 군인 전화번호: 01093662491<br />
                    관계: 자유<br /><br />
                    <h5>카페 개설 이후(10월 26일 예상) 더캠프에서 편지 작성이 가능합니다.</h5>
                    </div>
                    <br />
                </Col>
                <Col xs={24} lg={12}>
                    <Image
                        className="profile"
                        src={AboutImage}
                    />
                </Col>
            </Row>
            <br /><br />
        </div>
    )
}

export default About;
