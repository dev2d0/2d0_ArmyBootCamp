import React, { ReactElement } from 'react'
import {Button, Form, Input} from "antd";
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import './LetterForm.css'
const { TextArea } = Input;

interface Props {

}

export default function LetterForm({ }: Props): ReactElement {
    const onSubmit = (values: any) => {
        console.log('Success:', values);
    };
    const onSubmitFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                className='form-container'
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onSubmit}
                onFinishFailed={onSubmitFailed}
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
                    <TextArea placeholder="보낼 편지 내용을 입력해주세요." showCount maxLength={1999} rows={5} allowClear  />
                </Form.Item>
                <Form.Item wrapperCol={{ xs: {offset:0, span: 16}, lg: {offset:5, span: 16} }}>
                    <Button icon={<SendOutlined />} type="primary" shape="round" htmlType="submit">
                        편지 보내기
                    </Button>
                </Form.Item>
                <br />
            </Form >
        </div>
    )
}
