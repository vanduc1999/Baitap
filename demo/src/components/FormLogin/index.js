import {  useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

///Form Login
const FormLogin = () => {
const navigate = useNavigate() 
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    
    if (values.email === 'admin@gmail.com' && values.password === 'admin123') {
        localStorage.setItem('token', `${values.email} ${values.password}`)
        navigate('./dashboard')
    }
    else
    {
        message.error('Thong tin dang nhap khong chinh xac')
    }
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Exam03;
