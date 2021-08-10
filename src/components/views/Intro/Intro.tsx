import React, { FC } from 'react'
import { Row, Col, Image } from "antd";
import introImage from '../../../assets/images/intro.jpeg'
import './Intro.css'

interface Props {

}

const Intro: React.FC = () => {
    return (
        <div id="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Row gutter={16}>
                <Col span={12}>
                    <Image
                        className="profile"
                        width={200}
                        src={introImage}
                    />
                </Col>
                <Col span={12} className="details">
                    <h5>안녕하세요 <strong>개발자 이동영</strong> 입니다.</h5>
                    <br />안녕하세요 아주대학교 사이버보안 학과에 재학 중인 이동영 입니다.<br /> 지금까지 C언어, JAVA, Python, JS 등 다양한 프로그래밍 언어를 학습하였고 관련하여 다양한 프로젝트 경험이 있습니다.<br />
                    처음 웹 개발에 흥미를 느낀 것은 소학회에서 웹개발 스터디를 하며 처음으로 주도적으로 개발 공부를 하였고 학교 공부를 하면서 웹 개발 공부를 병행하다 보니 풀스택 웹 개발자가 되고 싶다는 목표가 생겼습니다.<br /> 현재는 보충역 산업기능요원으로 근로할 회사를 찾으며 React와 Node.js등 다양한 Front-end 기술을 학습하고 있습니다.<br />
                    성격은 남들과 대화하고 친해지기를 좋아하는 성격이며 간단히 두가지 키워드로 저를 소개하자면 고민과 끈기 입니다. 저는 조력자의 역할을 좋아하는 아이디어 뱅크입니다.<br />

                    <br />Hello, I'm Lee Dong-young, majoring in cybersecurity at Ajou University. Until now, I have learned various programming languages such as C language, JAVA, Python, and JS, and I have experience in various projects.
                    I was interested in web development for the first time when I was studying web development at a small society, and as I was studying web development at the same time while studying at school, I had a goal of becoming a full-stack web developer. Currently, I am looking for a company to work as a supplementary industrial functional agent and learning various front-end technologies such as React and Node.js.
                    <br /><br />
                </Col>
            </Row>
        </div>
    )
}

export default Intro;
