import {Button, Form, FormInstance, Input} from "antd";
import React from "react";
import {useTranslation} from "next-i18next";

interface LoginProps {
    onFinish: ( values: any ) => void
}
export const LoginForm: React.FC<LoginProps> = (props: LoginProps) => {
    const {t} = useTranslation( 'common')
    const [form] = Form.useForm()

    return <Form
        form={form}
        labelCol={{span: 8 }}
        onFinish={props.onFinish}
    >
        <Form.Item
            label={t( 'login.username_field' )}
            name="email"
            rules={[
                {
                    required: true,
                    message: "Username is required"
                }
            ]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            label={t( 'login.password_field' )}
            name="password"
            rules={[
                {
                    required: true,
                    message: "Password is required"
                }
            ]}
        >
            <Input.Password/>
        </Form.Item>
        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16
            }}
        >
            <Button htmlType="submit">
                { t('login.submit_button') || '' }
            </Button>
        </Form.Item>
    </Form>
}