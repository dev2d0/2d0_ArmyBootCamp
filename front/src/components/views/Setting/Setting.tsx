import React, { useEffect, useState, ReactElement } from 'react'
import {Button, Form, Input} from "antd";
import axios from 'axios';

export default function Setting(): ReactElement {
    const [Unit, setUnit] = useState({})

    useEffect(() => {
        axios.get('/api/getUnit')
            .then(response => {
                if (response.data.success) {
                    setUnit(response.data.unit.unit)
                } else {
                    alert('실패햐였습니다.')
                }
            })
    }, [])

    const onConfirm = async (values: any) => {
        let unit = {
            unit: values.unit
        }
        axios.post('/api/setting', unit)
            .then(response => {
                if (response.data.success) {
                    alert("유닛 이름이 세팅되었습니다.")
                    window.location.reload();
                } else {
                    alert('실패햐였습니다.')
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
                    label="UNIT_NAME"
                    name="unit"
                    rules={[{ required: true, message: '입영부대를 입력해주세요!' }]}
                >
                    <Input placeholder="입영부대를 써주세요." allowClear  />
                </Form.Item>
                <Form.Item wrapperCol={{ xs: {offset:0, span: 16}, lg: {offset:5, span: 16} }}>
                    <Button type="primary" shape="round" htmlType="submit">
                        저장하기
                    </Button>
                </Form.Item>
            </Form >
            <h3>{`현재 세팅된 입영부대: ${Unit}`}</h3>
        </div>
    )
}
