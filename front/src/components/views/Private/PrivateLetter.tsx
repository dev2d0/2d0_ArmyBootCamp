import React, { ReactElement } from 'react'
import {Button, Form, Input} from "antd";
import axios from 'axios';
import { SendOutlined } from '@ant-design/icons';
import './PrivateLetter.css'
const { TextArea } = Input;

export default function PrivateLetter(): ReactElement {
    const onConfirm = async (values: any) => {
        let letter = {
            title: values.title,
            contents: values.contents
        }
        console.log(letter)
        axios.post('/api/privateLetter', letter)
            .then(response => {
                if (response.data.success) {
                    alert("편지를 전송하였습니다.")
                    window.location.reload();
                } else {
                    alert('편지 보내기에 실패햐였습니다.')
                }
            })
    };

    const onConfirmFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        alert("편지 보내기에 실패하셨습니다. 잠시후 다시 시도해주세요.")
    };

    return (
        <div>
            <h2>편지 쓰기</h2>
            <p>더캠프 앱을 설치 하지 않아도 아래에 내용을 입력하고 편지 보내기 버튼을 누르면 편지가 전송됩니다.</p>
            <Form
                className='form-container'
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onConfirm}
                onFinishFailed={onConfirmFailed}
            >
                <Form.Item
                    label="제목"
                    name="title"
                    rules={[{ required: true, message: '제목을 입력해주세요!' }]}
                >
                    <Input placeholder="제목을 입력해주세요." allowClear  />
                </Form.Item>

                <Form.Item
                    label="내용"
                    name="contents"
                    rules={[{ required: true, message: '내용을 입력해주세요!' }]}
                >
                    <TextArea placeholder="보낼 편지 내용을 입력해주세요." showCount maxLength={1490} rows={5} allowClear  />
                </Form.Item>
                <Form.Item wrapperCol={{ xs: {offset:0, span: 16}, lg: {offset:5, span: 16} }}>
                    <Button icon={<SendOutlined />} type="primary" shape="round" htmlType="submit">
                        편지 보내기
                    </Button>
                </Form.Item>
            </Form >
        </div>
    )
}
