import React, { ReactElement } from 'react'
import {Button, Form, Input} from "antd";
import axios from 'axios';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import './LetterForm.css'
const { TextArea } = Input;

export default function LetterForm(): ReactElement {
    const onConfirm = async (values: any) => {
        if (!window.confirm('보낸 편지는 수정하거나 삭제할 수 없습니다. 정말 보내시겠습니까?')) {
            return;
        }
        let letter = {
            user: values.user,
            title: values.title,
            contents: values.contents
        }
        axios.post('/api/letter', letter)
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
                    label="보내는 사람"
                    name="user"
                    rules={[{ required: true, message: '보내는 사람의 이름을 입력해주세요!' }]}
                >
                    <Input placeholder="보내는 사람의 이름을 입력해주세요." prefix={<UserOutlined />} allowClear />
                </Form.Item>

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
