import {Form, Input} from "antd";

export const CreateAssetForm: React.FC<{}> = (props) => {
    const [form] = Form.useForm()
    
    return <Form
        name="asset"
        form={form}
    >
        <Form.Item
            label="Name"
            name="name"
            rules={
                [
                    {
                        required: true,
                        message: "Name is required"
                    }
                ]
            }
        >
            <Input></Input>
        </Form.Item>

    </Form>
}